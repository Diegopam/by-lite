//! Wayland seat and pointer event tracker for interactive operations (drag & resize).

use by_lite_sys::*;
use std::ffi::{c_char, c_void, CStr};
use std::sync::atomic::{AtomicPtr, AtomicU32, Ordering};
use std::sync::Arc;

pub struct WaylandInputTracker {
    seat: AtomicPtr<wl_proxy>,
    pointer: AtomicPtr<wl_proxy>,
    last_button_serial: AtomicU32,
    last_enter_serial: AtomicU32,
    _listeners: Box<WaylandListeners>,
}

struct WaylandListeners {
    registry_listener: [Option<unsafe extern "C" fn()>; 2],
    seat_listener: [Option<unsafe extern "C" fn()>; 2],
    pointer_listener: [Option<unsafe extern "C" fn()>; 10],
}

unsafe impl Send for WaylandInputTracker {}
unsafe impl Sync for WaylandInputTracker {}

unsafe extern "C" fn dummy_void() {}

unsafe extern "C" fn on_pointer_enter(
    data: *mut c_void,
    _pointer: *mut wl_proxy,
    serial: u32,
    _surface: *mut c_void,
    _sx: i32,
    _sy: i32,
) {
    if !data.is_null() {
        let tracker = &*(data as *const WaylandInputTracker);
        tracker.last_enter_serial.store(serial, Ordering::SeqCst);
    }
}

unsafe extern "C" fn on_pointer_button(
    data: *mut c_void,
    _pointer: *mut wl_proxy,
    serial: u32,
    _time: u32,
    _button: u32,
    state: u32,
) {
    if !data.is_null() && state == 1 {
        let tracker = &*(data as *const WaylandInputTracker);
        tracker.last_button_serial.store(serial, Ordering::SeqCst);
    }
}

unsafe extern "C" fn on_seat_capabilities(
    data: *mut c_void,
    seat: *mut wl_proxy,
    caps: u32,
) {
    if !data.is_null() && (caps & WL_SEAT_CAPABILITY_POINTER) != 0 {
        let tracker = &*(data as *const WaylandInputTracker);
        if tracker.pointer.load(Ordering::SeqCst).is_null() {
            let pointer = wl_seat_get_pointer(seat);
            tracker.pointer.store(pointer, Ordering::SeqCst);
            wl_proxy_add_listener(
                pointer,
                tracker._listeners.pointer_listener.as_ptr(),
                data,
            );
        }
    }
}

unsafe extern "C" fn on_registry_global(
    data: *mut c_void,
    registry: *mut wl_proxy,
    name: u32,
    interface: *const c_char,
    _version: u32,
) {
    if !data.is_null() {
        let tracker = &*(data as *const WaylandInputTracker);
        let iface = CStr::from_ptr(interface).to_string_lossy();
        if iface == "wl_seat" && tracker.seat.load(Ordering::SeqCst).is_null() {
            let seat = wl_registry_bind(registry, name, &wl_seat_interface, 1);
            tracker.seat.store(seat, Ordering::SeqCst);
            wl_proxy_add_listener(
                seat,
                tracker._listeners.seat_listener.as_ptr(),
                data,
            );
        }
    }
}

impl WaylandInputTracker {
    /// Initialize seat binding and pointer serial tracking on the active Wayland connection
    pub fn new(display: *mut WPEDisplay) -> Option<Arc<Self>> {
        let wl_display = unsafe { wpe_display_wayland_get_wl_display(display) };
        if wl_display.is_null() {
            return None;
        }

        let tracker = Arc::new(Self {
            seat: AtomicPtr::new(std::ptr::null_mut()),
            pointer: AtomicPtr::new(std::ptr::null_mut()),
            last_button_serial: AtomicU32::new(0),
            last_enter_serial: AtomicU32::new(0),
            _listeners: Box::new(WaylandListeners {
                registry_listener: [
                    Some(unsafe {
                        std::mem::transmute::<
                            unsafe extern "C" fn(*mut c_void, *mut wl_proxy, u32, *const c_char, u32),
                            unsafe extern "C" fn(),
                        >(on_registry_global)
                    }),
                    Some(dummy_void),
                ],
                seat_listener: [
                    Some(unsafe {
                        std::mem::transmute::<
                            unsafe extern "C" fn(*mut c_void, *mut wl_proxy, u32),
                            unsafe extern "C" fn(),
                        >(on_seat_capabilities)
                    }),
                    Some(dummy_void),
                ],
                pointer_listener: [
                    Some(unsafe {
                        std::mem::transmute::<
                            unsafe extern "C" fn(*mut c_void, *mut wl_proxy, u32, *mut c_void, i32, i32),
                            unsafe extern "C" fn(),
                        >(on_pointer_enter)
                    }),
                    Some(dummy_void), // leave
                    Some(dummy_void), // motion
                    Some(unsafe {
                        std::mem::transmute::<
                            unsafe extern "C" fn(*mut c_void, *mut wl_proxy, u32, u32, u32, u32),
                            unsafe extern "C" fn(),
                        >(on_pointer_button)
                    }),
                    Some(dummy_void), // axis
                    Some(dummy_void), // frame
                    Some(dummy_void), // axis_source
                    Some(dummy_void), // axis_stop
                    Some(dummy_void), // axis_discrete
                    Some(dummy_void), // axis_value120
                ],
            }),
        });

        let tracker_ptr = Arc::into_raw(tracker.clone()) as *mut c_void;

        unsafe {
            let registry = wl_display_get_registry(wl_display);
            wl_proxy_add_listener(
                registry,
                (*tracker)._listeners.registry_listener.as_ptr(),
                tracker_ptr,
            );
            wl_display_roundtrip(wl_display);
            wl_display_roundtrip(wl_display);
        }

        // Reclaim raw reference count clone
        let _ = unsafe { Arc::from_raw(tracker_ptr as *const Self) };

        Some(tracker)
    }

    /// Pointer to the bound wl_seat
    pub fn seat(&self) -> *mut wl_proxy {
        self.seat.load(Ordering::SeqCst)
    }

    /// Latest serial of pointer button / enter event
    pub fn last_serial(&self) -> u32 {
        let btn = self.last_button_serial.load(Ordering::SeqCst);
        if btn != 0 {
            btn
        } else {
            self.last_enter_serial.load(Ordering::SeqCst)
        }
    }

    /// Explicitly get the last pointer button serial
    pub fn last_button_serial(&self) -> u32 {
        self.last_button_serial.load(Ordering::SeqCst)
    }
}

/// Parse edge value from JSON (supports integer or string names like "top", "bottom-right", "se", etc.)
pub fn parse_resize_edge(val: Option<&serde_json::Value>) -> Option<u32> {
    let v = val?;
    match v {
        serde_json::Value::Number(num) => {
            let n = num.as_u64()? as u32;
            if (1..=10).contains(&n) {
                Some(n)
            } else {
                None
            }
        }
        serde_json::Value::String(s) => match s.trim().to_lowercase().as_str() {
            "top" | "n" => Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP),
            "bottom" | "s" => Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM),
            "left" | "w" => Some(XDG_TOPLEVEL_RESIZE_EDGE_LEFT),
            "right" | "e" => Some(XDG_TOPLEVEL_RESIZE_EDGE_RIGHT),
            "top-left" | "top_left" | "topleft" | "nw" => Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_LEFT),
            "top-right" | "top_right" | "topright" | "ne" => Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_RIGHT),
            "bottom-left" | "bottom_left" | "bottomleft" | "sw" => Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_LEFT),
            "bottom-right" | "bottom_right" | "bottomright" | "se" => Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_RIGHT),
            _ => None,
        },
        serde_json::Value::Object(map) => {
            if let Some(inner) = map.get("edge") {
                parse_resize_edge(Some(inner))
            } else if let Some(inner) = map.get("direction") {
                parse_resize_edge(Some(inner))
            } else {
                None
            }
        }
        _ => None,
    }
}

/// Retrieve native Wayland proxies (wl_surface, xdg_toplevel, zxdg_toplevel_decoration_v1)
/// from a WPEToplevelWayland instance.
pub unsafe fn get_wayland_toplevel_proxies(
    toplevel: *mut WPEToplevel,
) -> Option<(*mut wl_proxy, *mut wl_proxy, *mut wl_proxy)> {
    if toplevel.is_null() {
        return None;
    }

    // In WPEToplevelWayland, priv is located at offset 0x20 (pointer index 4)
    let priv_ptr = *((toplevel as *const *mut c_void).add(4));
    if priv_ptr.is_null() {
        return None;
    }

    // struct _WPEToplevelWaylandPrivate:
    // offset 0x00: struct wl_surface* wlSurface
    // offset 0x08: struct xdg_surface* xdgSurface
    // offset 0x10: struct xdg_toplevel* xdgToplevel
    // offset 0x18: struct zxdg_toplevel_decoration_v1* xdgToplevelDecoration
    //              (only when WPE is built with USE(XDG_DECORATION_UNSTABLE_V1);
    //              otherwise this slot holds dmabufFeedback, another wl_proxy or NULL)
    let ptrs = priv_ptr as *const *mut wl_proxy;
    let wl_surface = *ptrs.add(0);
    let xdg_toplevel = *ptrs.add(2);
    let candidate = *ptrs.add(3);

    // Validate the slot by its Wayland interface name instead of trusting the offset blindly.
    let xdg_decoration = if !candidate.is_null()
        && proxy_class_is(candidate, "zxdg_toplevel_decoration_v1")
    {
        candidate
    } else {
        std::ptr::null_mut()
    };

    Some((wl_surface, xdg_toplevel, xdg_decoration))
}

/// Check whether a wl_proxy belongs to the given Wayland interface
unsafe fn proxy_class_is(proxy: *mut wl_proxy, name: &str) -> bool {
    let cls = wl_proxy_get_class(proxy);
    if cls.is_null() {
        return false;
    }
    CStr::from_ptr(cls).to_bytes() == name.as_bytes()
}
