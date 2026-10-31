use crate::error::{ByError, Result};
use crate::wayland::WaylandInputTracker;
use by_lite_sys::{
    g_idle_add, g_main_loop_is_running, g_main_loop_new, g_main_loop_quit, g_main_loop_run,
    g_main_loop_unref, gpointer, wpe_display_get_default, G_FALSE, GMainLoop,
    WPEDisplay,
};
use std::ptr;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;

pub struct App {
    display: *mut WPEDisplay,
    main_loop: *mut GMainLoop,
    is_running: Arc<AtomicBool>,
    wayland_tracker: Option<Arc<WaylandInputTracker>>,
}

#[derive(Clone)]
pub struct AppHandle {
    main_loop: *mut GMainLoop,
    is_running: Arc<AtomicBool>,
}

unsafe impl Send for AppHandle {}
unsafe impl Sync for AppHandle {}

impl App {
    /// Initialize the application and connect to the Wayland / WPE platform display.
    pub fn new() -> Result<Self> {
        let display = unsafe { wpe_display_get_default() };
        if display.is_null() {
            return Err(ByError::PlatformInitFailed(
                "Failed to initialize WPE display (Wayland compositor not reachable?)".into(),
            ));
        }

        let main_loop = unsafe { g_main_loop_new(ptr::null_mut(), G_FALSE) };
        if main_loop.is_null() {
            return Err(ByError::PlatformInitFailed("Failed to create GLib main loop".into()));
        }

        let wayland_tracker = WaylandInputTracker::new(display);

        Ok(Self {
            display,
            main_loop,
            is_running: Arc::new(AtomicBool::new(false)),
            wayland_tracker,
        })
    }

    /// Obtain raw pointer to the default WPEDisplay
    pub fn display(&self) -> *mut WPEDisplay {
        self.display
    }

    /// Obtain the Wayland input and serial tracker if available
    pub fn wayland_tracker(&self) -> Option<Arc<WaylandInputTracker>> {
        self.wayland_tracker.clone()
    }

    /// Obtain a thread-safe handle to the application
    pub fn handle(&self) -> AppHandle {
        AppHandle {
            main_loop: self.main_loop,
            is_running: self.is_running.clone(),
        }
    }

    /// Run the application event loop until all windows close or `quit()` is requested
    pub fn run(&self) -> Result<()> {
        self.is_running.store(true, Ordering::SeqCst);
        unsafe {
            g_main_loop_run(self.main_loop);
        }
        self.is_running.store(false, Ordering::SeqCst);
        Ok(())
    }

    /// Terminate the application event loop
    pub fn quit(&self) {
        if self.is_running.load(Ordering::SeqCst) {
            unsafe {
                if g_main_loop_is_running(self.main_loop) != G_FALSE {
                    g_main_loop_quit(self.main_loop);
                }
            }
        }
    }
}

impl Drop for App {
    fn drop(&mut self) {
        if !self.main_loop.is_null() {
            unsafe {
                g_main_loop_unref(self.main_loop);
            }
        }
    }
}

unsafe extern "C" fn idle_quit(data: gpointer) -> by_lite_sys::gboolean {
    let loop_ptr = data as *mut GMainLoop;
    if !loop_ptr.is_null() {
        g_main_loop_quit(loop_ptr);
    }
    G_FALSE
}

impl AppHandle {
    /// Post a quit request to the main event loop from any thread
    pub fn quit(&self) {
        if self.is_running.load(Ordering::SeqCst) {
            unsafe {
                g_idle_add(Some(idle_quit), self.main_loop as gpointer);
            }
        }
    }
}
