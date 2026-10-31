use crate::app::{App, AppHandle};
use crate::csd::CSD_RUNTIME_SCRIPT;
use crate::error::{ByError, Result};
use crate::ipc::{CommandHandler, IpcMessage, IpcRouter};
use crate::wayland::{get_wayland_toplevel_proxies, parse_resize_edge, WaylandInputTracker};
use crate::webview::WebView;
use by_lite_sys::{
    g_free, g_get_prgname, g_object_new, g_set_application_name, g_set_prgname,
    g_signal_connect_data, gpointer, jsc_value_to_json, jsc_value_to_string, webkit_settings_new,
    webkit_settings_set_allow_file_access_from_file_urls,
    webkit_settings_set_allow_universal_access_from_file_urls,
    webkit_settings_set_enable_2d_canvas_acceleration,
    webkit_settings_set_enable_developer_extras, webkit_settings_set_enable_javascript,
    webkit_settings_set_enable_webgl,
    webkit_settings_set_enable_write_console_messages_to_stdout,
    webkit_settings_set_javascript_can_access_clipboard, webkit_user_content_manager_add_script,
    webkit_user_content_manager_new,
    webkit_user_content_manager_register_script_message_handler, webkit_user_script_new,
    webkit_user_script_unref, webkit_web_view_evaluate_javascript,
    webkit_web_view_get_type, webkit_web_view_get_wpe_view, wl_proxy_marshal,
    wpe_toplevel_closed, wpe_toplevel_fullscreen, wpe_toplevel_get_size,
    wpe_toplevel_get_state, wpe_toplevel_maximize, wpe_toplevel_minimize, wpe_toplevel_resize,
    wpe_toplevel_set_title, wpe_toplevel_unfullscreen, wpe_toplevel_unmaximize,
    wpe_toplevel_wayland_get_wl_surface, wpe_view_get_toplevel, wpe_view_map,
    GConnectFlags, JSCValue, WebKitUserContentInjectedFrames, WebKitUserContentManager,
    WebKitUserScriptInjectionTime, WebKitWebView, WPEToplevel, G_TRUE, WL_SURFACE_COMMIT,
    XDG_TOPLEVEL_MOVE, XDG_TOPLEVEL_RESIZE, XDG_TOPLEVEL_SET_APP_ID,
    ZXDG_TOPLEVEL_DECORATION_V1_MODE_CLIENT_SIDE,
    ZXDG_TOPLEVEL_DECORATION_V1_MODE_SERVER_SIDE, ZXDG_TOPLEVEL_DECORATION_V1_SET_MODE,
};
use std::ffi::{c_int, CStr, CString};
use std::ptr;
use std::sync::{Arc, RwLock};

pub struct WindowContext {
    pub(crate) toplevel: *mut WPEToplevel,
    pub(crate) web_view: *mut WebKitWebView,
    pub(crate) app_handle: AppHandle,
    pub(crate) router: Arc<RwLock<IpcRouter>>,
    pub(crate) wayland_tracker: Option<Arc<WaylandInputTracker>>,
}

pub struct Window {
    toplevel: *mut WPEToplevel,
    webview: WebView,
    app_handle: AppHandle,
    context: Box<WindowContext>,
}

pub struct WindowBuilder {
    title: String,
    app_id: Option<String>,
    width: u32,
    height: u32,
    resizable: bool,
    devtools: bool,
    csd: bool,
    url: Option<String>,
    html: Option<String>,
    commands: Vec<(String, CommandHandler)>,
}

impl WindowBuilder {
    pub fn new() -> Self {
        Self {
            title: "by-lite App".into(),
            app_id: None,
            width: 800,
            height: 600,
            resizable: true,
            devtools: true,
            csd: true,
            url: None,
            html: None,
            commands: Vec::new(),
        }
    }

    pub fn title(mut self, title: impl Into<String>) -> Self {
        self.title = title.into();
        self
    }

    pub fn app_id(mut self, app_id: impl Into<String>) -> Self {
        self.app_id = Some(app_id.into());
        self
    }

    pub fn size(mut self, width: u32, height: u32) -> Self {
        self.width = width;
        self.height = height;
        self
    }

    pub fn resizable(mut self, resizable: bool) -> Self {
        self.resizable = resizable;
        self
    }

    pub fn devtools(mut self, devtools: bool) -> Self {
        self.devtools = devtools;
        self
    }

    pub fn csd(mut self, csd: bool) -> Self {
        self.csd = csd;
        self
    }

    pub fn url(mut self, url: impl Into<String>) -> Self {
        self.url = Some(url.into());
        self
    }

    pub fn html(mut self, html: impl Into<String>) -> Self {
        self.html = Some(html.into());
        self
    }

    pub fn command<F>(mut self, name: &str, handler: F) -> Self
    where
        F: Fn(Option<serde_json::Value>) -> std::result::Result<serde_json::Value, String> + Send + Sync + 'static,
    {
        self.commands.push((name.to_string(), Box::new(handler)));
        self
    }

    pub fn build(self, app: &App) -> Result<Window> {
        let display = app.display();
        if display.is_null() {
            return Err(ByError::PlatformInitFailed("WPE display is null".into()));
        }

        // Configure WebKit settings
        let settings = unsafe { webkit_settings_new() };
        unsafe {
            webkit_settings_set_enable_javascript(settings, G_TRUE);
            if self.devtools {
                webkit_settings_set_enable_developer_extras(settings, G_TRUE);
            }
            webkit_settings_set_enable_write_console_messages_to_stdout(settings, G_TRUE);
            webkit_settings_set_enable_webgl(settings, G_TRUE);
            webkit_settings_set_enable_2d_canvas_acceleration(settings, G_TRUE);
            webkit_settings_set_allow_file_access_from_file_urls(settings, G_TRUE);
            webkit_settings_set_allow_universal_access_from_file_urls(settings, G_TRUE);
            webkit_settings_set_javascript_can_access_clipboard(settings, G_TRUE);
        }

        // Configure UserContentManager and inject CSD script
        let ucm = unsafe { webkit_user_content_manager_new() };
        if self.csd {
            let c_script = CString::new(CSD_RUNTIME_SCRIPT)
                .map_err(|e| ByError::WindowCreateFailed(e.to_string()))?;
            let script = unsafe {
                webkit_user_script_new(
                    c_script.as_ptr(),
                    WebKitUserContentInjectedFrames::TopFrame,
                    WebKitUserScriptInjectionTime::DocumentStart,
                    ptr::null(),
                    ptr::null(),
                )
            };
            unsafe {
                webkit_user_content_manager_add_script(ucm, script);
                webkit_user_script_unref(script);
            }
        }

        // Instantiate WebKitWebView with display, settings, and user content manager
        let prop_display = CString::new("display").unwrap();
        let prop_settings = CString::new("settings").unwrap();
        let prop_ucm = CString::new("user-content-manager").unwrap();

        let web_view_ptr = unsafe {
            g_object_new(
                webkit_web_view_get_type(),
                prop_display.as_ptr(),
                display,
                prop_settings.as_ptr(),
                settings,
                prop_ucm.as_ptr(),
                ucm,
                ptr::null::<std::ffi::c_void>(),
            )
        } as *mut WebKitWebView;

        if web_view_ptr.is_null() {
            return Err(ByError::WindowCreateFailed("Failed to create WebKitWebView".into()));
        }

        // Get underlying WPEView and WPEToplevel
        let wpe_view = unsafe { webkit_web_view_get_wpe_view(web_view_ptr) };
        if wpe_view.is_null() {
            return Err(ByError::WindowCreateFailed("Failed to retrieve WPEView".into()));
        }

        let toplevel = unsafe { wpe_view_get_toplevel(wpe_view) };
        if toplevel.is_null() {
            return Err(ByError::WindowCreateFailed("Failed to retrieve WPEToplevel".into()));
        }

        // Set application name and program name for Wayland compositors (KWin, etc.)
        let app_id = self.app_id.clone().unwrap_or_else(|| {
            self.title
                .to_lowercase()
                .chars()
                .map(|c| if c.is_alphanumeric() { c } else { '-' })
                .collect()
        });

        if let Ok(c_app_id) = CString::new(app_id.as_str()) {
            unsafe {
                g_set_prgname(c_app_id.as_ptr());
            }
        }
        if let Ok(c_title) = CString::new(self.title.as_str()) {
            unsafe {
                g_set_application_name(c_title.as_ptr());
            }
        }

        // Set title and size
        let c_title = CString::new(self.title)
            .map_err(|e| ByError::WindowCreateFailed(e.to_string()))?;
        unsafe {
            wpe_toplevel_set_title(toplevel, c_title.as_ptr());
            wpe_toplevel_resize(toplevel, self.width as c_int, self.height as c_int);
            if self.csd {
                configure_wayland_csd(toplevel, &app_id, true);
            }
        }

        // Setup IPC Router & Context
        let mut router = IpcRouter::new();
        for (name, handler) in self.commands {
            router.register(&name, move |args| handler(args));
        }

        let mut context = Box::new(WindowContext {
            toplevel,
            web_view: web_view_ptr,
            app_handle: app.handle(),
            router: Arc::new(RwLock::new(router)),
            wayland_tracker: app.wayland_tracker(),
        });

        // Register IPC signal on WebKitUserContentManager
        let sig_name = CString::new("script-message-received::by_lite").unwrap();
        let channel_name = CString::new("by_lite").unwrap();

        unsafe {
            g_signal_connect_data(
                ucm as gpointer,
                sig_name.as_ptr(),
                Some(std::mem::transmute::<
                    unsafe extern "C" fn(*mut WebKitUserContentManager, *mut JSCValue, gpointer),
                    unsafe extern "C" fn(),
                >(on_script_message)),
                context.as_mut() as *mut WindowContext as gpointer,
                None,
                GConnectFlags::Default,
            );

            webkit_user_content_manager_register_script_message_handler(
                ucm,
                channel_name.as_ptr(),
                ptr::null(),
            );
        }

        // Map window view to display
        unsafe {
            wpe_view_map(wpe_view);
            if self.csd {
                configure_wayland_csd(toplevel, &app_id, true);
            }
        }

        let webview = WebView::new(web_view_ptr, wpe_view);

        // Load initial content if provided
        if let Some(ref url) = self.url {
            webview.load_url(url);
        } else if let Some(ref html) = self.html {
            webview.load_html(html, None);
        }

        Ok(Window {
            toplevel,
            webview,
            app_handle: app.handle(),
            context,
        })
    }
}

impl Window {
    /// Access the embedded WebView
    pub fn webview(&self) -> &WebView {
        &self.webview
    }

    /// Set window title
    pub fn set_title(&self, title: &str) {
        if let Ok(c_title) = CString::new(title) {
            unsafe {
                wpe_toplevel_set_title(self.toplevel, c_title.as_ptr());
            }
        }
    }

    /// Resize window dimensions
    pub fn resize(&self, width: u32, height: u32) {
        unsafe {
            wpe_toplevel_resize(self.toplevel, width as c_int, height as c_int);
        }
    }

    /// Query current window dimensions (width, height)
    pub fn size(&self) -> (i32, i32) {
        let mut w: c_int = 0;
        let mut h: c_int = 0;
        unsafe {
            wpe_toplevel_get_size(self.toplevel, &mut w, &mut h);
        }
        (w, h)
    }

    /// Maximize window
    pub fn maximize(&self) {
        unsafe {
            wpe_toplevel_maximize(self.toplevel);
        }
        notify_state_changed(&self.context);
    }

    /// Unmaximize window
    pub fn unmaximize(&self) {
        unsafe {
            wpe_toplevel_unmaximize(self.toplevel);
        }
        notify_state_changed(&self.context);
    }

    /// Toggle window maximized state
    pub fn toggle_maximize(&self) {
        unsafe {
            let state = wpe_toplevel_get_state(self.toplevel);
            if state.is_maximized() {
                wpe_toplevel_unmaximize(self.toplevel);
            } else {
                wpe_toplevel_maximize(self.toplevel);
            }
        }
        notify_state_changed(&self.context);
    }

    /// Check if window is currently maximized
    pub fn is_maximized(&self) -> bool {
        unsafe { wpe_toplevel_get_state(self.toplevel).is_maximized() }
    }

    /// Minimize window to panel / dock
    pub fn minimize(&self) {
        unsafe {
            wpe_toplevel_minimize(self.toplevel);
        }
    }

    /// Enter fullscreen mode
    pub fn fullscreen(&self) {
        unsafe {
            wpe_toplevel_fullscreen(self.toplevel);
        }
        notify_state_changed(&self.context);
    }

    /// Exit fullscreen mode
    pub fn unfullscreen(&self) {
        unsafe {
            wpe_toplevel_unfullscreen(self.toplevel);
        }
        notify_state_changed(&self.context);
    }

    /// Check if window is currently in fullscreen mode
    pub fn is_fullscreen(&self) -> bool {
        unsafe { wpe_toplevel_get_state(self.toplevel).is_fullscreen() }
    }

    /// Close the window
    pub fn close(&self) {
        unsafe {
            wpe_toplevel_closed(self.toplevel);
        }
        self.app_handle.quit();
    }

    /// Start interactive Wayland window drag using current pointer serial
    pub fn start_drag(&self) {
        if let Some(ref tracker) = self.context.wayland_tracker {
            let seat = tracker.seat();
            let serial = tracker.last_serial();
            if !seat.is_null() && serial != 0 {
                if let Some((wl_surface, xdg_toplevel, _)) = unsafe { get_wayland_toplevel_proxies(self.toplevel) } {
                    if !xdg_toplevel.is_null() {
                        unsafe {
                            wl_proxy_marshal(xdg_toplevel, XDG_TOPLEVEL_MOVE, seat, serial);
                            if !wl_surface.is_null() {
                                wl_proxy_marshal(wl_surface, WL_SURFACE_COMMIT);
                            }
                        }
                    }
                }
            }
        }
    }

    /// Start interactive Wayland window resize on specified edge
    pub fn start_resize(&self, edge: u32) {
        if let Some(ref tracker) = self.context.wayland_tracker {
            let seat = tracker.seat();
            let serial = tracker.last_serial();
            if !seat.is_null() && serial != 0 && edge != 0 {
                if let Some((wl_surface, xdg_toplevel, _)) = unsafe { get_wayland_toplevel_proxies(self.toplevel) } {
                    if !xdg_toplevel.is_null() {
                        unsafe {
                            wl_proxy_marshal(xdg_toplevel, XDG_TOPLEVEL_RESIZE, seat, serial, edge);
                            if !wl_surface.is_null() {
                                wl_proxy_marshal(wl_surface, WL_SURFACE_COMMIT);
                            }
                        }
                    }
                }
            }
        }
    }

    /// Register a command handler on the fly
    pub fn register_command<F>(&self, name: &str, handler: F)
    where
        F: Fn(Option<serde_json::Value>) -> std::result::Result<serde_json::Value, String> + Send + Sync + 'static,
    {
        if let Ok(mut router) = self.context.router.write() {
            router.register(name, handler);
        }
    }

    /// Explicitly set the window decoration mode (true for CSD / client-side, false for SSD / server-side)
    pub fn set_client_side_decorations(&self, csd: bool) {
        unsafe {
            let app_id = g_get_prgname();
            let app_id_str = if app_id.is_null() {
                "by-lite"
            } else {
                CStr::from_ptr(app_id).to_str().unwrap_or("by-lite")
            };
            configure_wayland_csd(self.toplevel, app_id_str, csd);
        }
    }

    /// Set Wayland app_id for desktop integration and window grouping
    pub fn set_app_id(&self, app_id: &str) {
        if let Ok(c_app_id) = CString::new(app_id) {
            unsafe {
                g_set_prgname(c_app_id.as_ptr());
                configure_wayland_csd(self.toplevel, app_id, true);
            }
        }
    }

    /// Get native Wayland wl_surface pointer if available
    pub fn wayland_surface(&self) -> *mut by_lite_sys::wl_surface {
        unsafe { wpe_toplevel_wayland_get_wl_surface(self.toplevel) }
    }
}

unsafe extern "C" fn on_script_message(
    _manager: *mut WebKitUserContentManager,
    js_value: *mut JSCValue,
    user_data: gpointer,
) {
    if user_data.is_null() || js_value.is_null() {
        return;
    }
    let ctx = &*(user_data as *const WindowContext);

    let json_ptr = jsc_value_to_json(js_value, 0);
    let json_str = if !json_ptr.is_null() {
        let s = CStr::from_ptr(json_ptr).to_string_lossy().into_owned();
        g_free(json_ptr as gpointer);
        s
    } else {
        let str_ptr = jsc_value_to_string(js_value);
        if !str_ptr.is_null() {
            let s = CStr::from_ptr(str_ptr).to_string_lossy().into_owned();
            g_free(str_ptr as gpointer);
            s
        } else {
            return;
        }
    };

    if let Ok(msg) = serde_json::from_str::<IpcMessage>(&json_str) {
        handle_ipc_action(ctx, msg);
    }
}

fn handle_ipc_action(ctx: &WindowContext, msg: IpcMessage) {
    if let Some(ref action) = msg.action {
        match action.as_str() {
            "close" => {
                unsafe {
                    wpe_toplevel_closed(ctx.toplevel);
                }
                ctx.app_handle.quit();
            }
            "minimize" => {
                unsafe {
                    wpe_toplevel_minimize(ctx.toplevel);
                }
            }
            "maximize" => {
                unsafe {
                    wpe_toplevel_maximize(ctx.toplevel);
                }
                notify_state_changed(ctx);
            }
            "unmaximize" => {
                unsafe {
                    wpe_toplevel_unmaximize(ctx.toplevel);
                }
                notify_state_changed(ctx);
            }
            "toggle_maximize" => {
                unsafe {
                    let state = wpe_toplevel_get_state(ctx.toplevel);
                    if state.is_maximized() {
                        wpe_toplevel_unmaximize(ctx.toplevel);
                    } else {
                        wpe_toplevel_maximize(ctx.toplevel);
                    }
                }
                notify_state_changed(ctx);
            }
            "fullscreen" => {
                unsafe {
                    let state = wpe_toplevel_get_state(ctx.toplevel);
                    if state.is_fullscreen() {
                        wpe_toplevel_unfullscreen(ctx.toplevel);
                    } else {
                        wpe_toplevel_fullscreen(ctx.toplevel);
                    }
                }
                notify_state_changed(ctx);
            }
            "resize" => {
                if let (Some(w), Some(h)) = (msg.width, msg.height) {
                    unsafe {
                        wpe_toplevel_resize(ctx.toplevel, w, h);
                    }
                }
            }
            "drag" | "start_drag" => {
                if let Some(ref tracker) = ctx.wayland_tracker {
                    let seat = tracker.seat();
                    let serial = tracker.last_serial();
                    if !seat.is_null() && serial != 0 {
                        if let Some((wl_surface, xdg_toplevel, _)) = unsafe { get_wayland_toplevel_proxies(ctx.toplevel) } {
                            if !xdg_toplevel.is_null() {
                                unsafe {
                                    wl_proxy_marshal(xdg_toplevel, XDG_TOPLEVEL_MOVE, seat, serial);
                                    if !wl_surface.is_null() {
                                        wl_proxy_marshal(wl_surface, WL_SURFACE_COMMIT);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            "start_resize" | "resize_edge" => {
                if let Some(ref tracker) = ctx.wayland_tracker {
                    let seat = tracker.seat();
                    let serial = tracker.last_serial();
                    let edge_val = parse_resize_edge(msg.edge.as_ref())
                        .or_else(|| parse_resize_edge(msg.args.as_ref()))
                        .or_else(|| parse_resize_edge(msg.payload.as_ref()))
                        .unwrap_or(0);

                    if !seat.is_null() && serial != 0 && edge_val != 0 {
                        if let Some((wl_surface, xdg_toplevel, _)) = unsafe { get_wayland_toplevel_proxies(ctx.toplevel) } {
                            if !xdg_toplevel.is_null() {
                                unsafe {
                                    wl_proxy_marshal(xdg_toplevel, XDG_TOPLEVEL_RESIZE, seat, serial, edge_val);
                                    if !wl_surface.is_null() {
                                        wl_proxy_marshal(wl_surface, WL_SURFACE_COMMIT);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            "set_title" => {
                if let Some(ref title) = msg.title {
                    if let Ok(c_title) = CString::new(title.as_str()) {
                        unsafe {
                            wpe_toplevel_set_title(ctx.toplevel, c_title.as_ptr());
                        }
                    }
                }
            }
            "invoke" => {
                if let (Some(ref id), Some(ref cmd)) = (&msg.id, &msg.cmd) {
                    let res = if let Ok(router) = ctx.router.read() {
                        router.handle_invoke(cmd, msg.args)
                    } else {
                        Err("Router lock poisoned".into())
                    };

                    match res {
                        Ok(val) => {
                            let js = format!(
                                "window.__BY_LITE_RESOLVE__('{}', {});",
                                id,
                                serde_json::to_string(&val).unwrap_or_else(|_| "null".into())
                            );
                            eval_js(ctx.web_view, &js);
                        }
                        Err(err) => {
                            let js = format!(
                                "window.__BY_LITE_REJECT__('{}', {});",
                                id,
                                serde_json::to_string(&err).unwrap_or_else(|_| "\"error\"".into())
                            );
                            eval_js(ctx.web_view, &js);
                        }
                    }
                }
            }
            _ => {}
        }
    }
}

fn notify_state_changed(ctx: &WindowContext) {
    let state = unsafe { wpe_toplevel_get_state(ctx.toplevel) };
    let js = format!(
        "if (window.__BY_LITE_STATE_CHANGED__) window.__BY_LITE_STATE_CHANGED__({{ maximized: {}, fullscreen: {}, active: {} }});",
        state.is_maximized(),
        state.is_fullscreen(),
        state.is_active(),
    );
    eval_js(ctx.web_view, &js);
}

fn eval_js(web_view: *mut WebKitWebView, js: &str) {
    if let Ok(c_js) = CString::new(js) {
        unsafe {
            webkit_web_view_evaluate_javascript(
                web_view,
                c_js.as_ptr(),
                -1,
                ptr::null(),
                ptr::null(),
                ptr::null_mut(),
                None,
                ptr::null_mut(),
            );
        }
    }
}

/// Configure Wayland CSD and app_id directly via underlying Wayland proxy objects
pub unsafe fn configure_wayland_csd(toplevel: *mut WPEToplevel, app_id: &str, client_side: bool) {
    let Some((wl_surface, xdg_toplevel, xdg_decoration)) = get_wayland_toplevel_proxies(toplevel) else {
        return;
    };

    // Set application ID on xdg_toplevel (opcode 3: xdg_toplevel.set_app_id)
    if !xdg_toplevel.is_null() {
        if let Ok(c_app_id) = CString::new(app_id) {
            wl_proxy_marshal(xdg_toplevel, XDG_TOPLEVEL_SET_APP_ID, c_app_id.as_ptr());
        }
    }

    // Explicitly toggle decoration mode on zxdg_toplevel_decoration_v1 (opcode 1: set_mode)
    if !xdg_decoration.is_null() {
        let mode = if client_side {
            ZXDG_TOPLEVEL_DECORATION_V1_MODE_CLIENT_SIDE
        } else {
            ZXDG_TOPLEVEL_DECORATION_V1_MODE_SERVER_SIDE
        };
        wl_proxy_marshal(
            xdg_decoration,
            ZXDG_TOPLEVEL_DECORATION_V1_SET_MODE,
            mode,
        );
    }

    // Commit changes to wl_surface (opcode 6: wl_surface.commit)
    if !wl_surface.is_null() {
        wl_proxy_marshal(wl_surface, WL_SURFACE_COMMIT);
    }
}
