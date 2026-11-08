//! Low-level WPE Platform FFI definitions

use crate::glib::{gboolean, gchar, gdouble, GError, GList, GType, guint};
use std::ffi::c_int;

#[repr(C)]
pub struct WPEDisplay {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct WPEToplevel {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct WPEView {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct WPEScreen {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct WPESettings {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(transparent)]
#[derive(Debug, Copy, Clone, PartialEq, Eq)]
pub struct WPEToplevelState(pub u32);

impl WPEToplevelState {
    pub const NONE: Self = Self(0);
    pub const FULLSCREEN: Self = Self(1 << 0);
    pub const MAXIMIZED: Self = Self(1 << 1);
    pub const ACTIVE: Self = Self(1 << 2);

    pub fn is_maximized(&self) -> bool {
        (self.0 & Self::MAXIMIZED.0) != 0
    }

    pub fn is_fullscreen(&self) -> bool {
        (self.0 & Self::FULLSCREEN.0) != 0
    }

    pub fn is_active(&self) -> bool {
        (self.0 & Self::ACTIVE.0) != 0
    }
}

// Wayland types
#[repr(C)]
pub struct wl_display {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct wl_surface {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct wl_compositor {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct wl_shm {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct wl_proxy {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct wl_interface {
    pub name: *const gchar,
    pub version: c_int,
    pub method_count: c_int,
    pub methods: *const std::ffi::c_void,
    pub event_count: c_int,
    pub events: *const std::ffi::c_void,
}

pub const WL_SEAT_CAPABILITY_POINTER: u32 = 1;
pub const WL_DISPLAY_GET_REGISTRY: u32 = 1;
pub const WL_REGISTRY_BIND: u32 = 0;
pub const WL_SEAT_GET_POINTER: u32 = 0;

pub const WL_SURFACE_COMMIT: u32 = 6;
pub const ZXDG_TOPLEVEL_DECORATION_V1_DESTROY: u32 = 0;
pub const ZXDG_TOPLEVEL_DECORATION_V1_SET_MODE: u32 = 1;
pub const ZXDG_TOPLEVEL_DECORATION_V1_UNSET_MODE: u32 = 2;

pub const ZXDG_TOPLEVEL_DECORATION_V1_MODE_CLIENT_SIDE: u32 = 1;
pub const ZXDG_TOPLEVEL_DECORATION_V1_MODE_SERVER_SIDE: u32 = 2;

pub const XDG_TOPLEVEL_SET_APP_ID: u32 = 3;
pub const XDG_TOPLEVEL_MOVE: u32 = 5;
pub const XDG_TOPLEVEL_RESIZE: u32 = 6;

pub const XDG_TOPLEVEL_RESIZE_EDGE_NONE: u32 = 0;
pub const XDG_TOPLEVEL_RESIZE_EDGE_TOP: u32 = 1;
pub const XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM: u32 = 2;
pub const XDG_TOPLEVEL_RESIZE_EDGE_LEFT: u32 = 4;
pub const XDG_TOPLEVEL_RESIZE_EDGE_TOP_LEFT: u32 = 5;
pub const XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_LEFT: u32 = 6;
pub const XDG_TOPLEVEL_RESIZE_EDGE_RIGHT: u32 = 8;
pub const XDG_TOPLEVEL_RESIZE_EDGE_TOP_RIGHT: u32 = 9;
pub const XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_RIGHT: u32 = 10;

extern "C" {
    pub static wl_registry_interface: wl_interface;
    pub static wl_seat_interface: wl_interface;
    pub static wl_pointer_interface: wl_interface;

    pub fn wl_proxy_marshal(proxy: *mut wl_proxy, opcode: u32, ...);
    pub fn wl_proxy_marshal_flags(
        proxy: *mut wl_proxy,
        opcode: u32,
        interface: *const wl_interface,
        version: u32,
        flags: u32,
        ...
    ) -> *mut wl_proxy;
    pub fn wl_proxy_get_version(proxy: *mut wl_proxy) -> u32;
    pub fn wl_proxy_get_class(proxy: *mut wl_proxy) -> *const gchar;
    pub fn wl_proxy_add_listener(
        proxy: *mut wl_proxy,
        implementation: *const Option<unsafe extern "C" fn()>,
        data: *mut std::ffi::c_void,
    ) -> c_int;
    pub fn wl_display_roundtrip(display: *mut wl_display) -> c_int;
    // WPEDisplay
    pub fn wpe_display_get_type() -> GType;
    pub fn wpe_display_get_default() -> *mut WPEDisplay;
    pub fn wpe_display_get_primary() -> *mut WPEDisplay;
    pub fn wpe_display_set_primary(display: *mut WPEDisplay);
    pub fn wpe_display_connect(display: *mut WPEDisplay, error: *mut *mut GError) -> gboolean;
    pub fn wpe_display_get_settings(display: *mut WPEDisplay) -> *mut WPESettings;
    pub fn wpe_display_create_toplevel(display: *mut WPEDisplay, max_views: guint) -> *mut WPEToplevel;

    // WPEToplevel
    pub fn wpe_toplevel_get_type() -> GType;
    pub fn wpe_toplevel_list() -> *mut GList;
    pub fn wpe_toplevel_get_display(toplevel: *mut WPEToplevel) -> *mut WPEDisplay;
    pub fn wpe_toplevel_set_title(toplevel: *mut WPEToplevel, title: *const gchar);
    pub fn wpe_toplevel_get_size(toplevel: *mut WPEToplevel, width: *mut c_int, height: *mut c_int);
    pub fn wpe_toplevel_resize(toplevel: *mut WPEToplevel, width: c_int, height: c_int) -> gboolean;
    pub fn wpe_toplevel_get_state(toplevel: *mut WPEToplevel) -> WPEToplevelState;
    pub fn wpe_toplevel_get_scale(toplevel: *mut WPEToplevel) -> gdouble;
    pub fn wpe_toplevel_get_screen(toplevel: *mut WPEToplevel) -> *mut WPEScreen;
    pub fn wpe_toplevel_fullscreen(toplevel: *mut WPEToplevel) -> gboolean;
    pub fn wpe_toplevel_unfullscreen(toplevel: *mut WPEToplevel) -> gboolean;
    pub fn wpe_toplevel_maximize(toplevel: *mut WPEToplevel) -> gboolean;
    pub fn wpe_toplevel_unmaximize(toplevel: *mut WPEToplevel) -> gboolean;
    pub fn wpe_toplevel_minimize(toplevel: *mut WPEToplevel) -> gboolean;
    pub fn wpe_toplevel_closed(toplevel: *mut WPEToplevel);

    // WPEView
    pub fn wpe_view_get_type() -> GType;
    pub fn wpe_view_new(display: *mut WPEDisplay) -> *mut WPEView;
    pub fn wpe_view_get_display(view: *mut WPEView) -> *mut WPEDisplay;
    pub fn wpe_view_get_toplevel(view: *mut WPEView) -> *mut WPEToplevel;
    pub fn wpe_view_set_toplevel(view: *mut WPEView, toplevel: *mut WPEToplevel);
    pub fn wpe_view_get_width(view: *mut WPEView) -> c_int;
    pub fn wpe_view_get_height(view: *mut WPEView) -> c_int;
    pub fn wpe_view_resized(view: *mut WPEView, width: c_int, height: c_int);
    pub fn wpe_view_get_visible(view: *mut WPEView) -> gboolean;
    pub fn wpe_view_set_visible(view: *mut WPEView, visible: gboolean);
    pub fn wpe_view_get_mapped(view: *mut WPEView) -> gboolean;
    pub fn wpe_view_map(view: *mut WPEView);
    pub fn wpe_view_unmap(view: *mut WPEView);
    pub fn wpe_view_closed(view: *mut WPEView);

    // Wayland platform
    pub fn wpe_display_wayland_get_type() -> GType;
    pub fn wpe_display_wayland_new() -> *mut WPEDisplay;
    pub fn wpe_display_wayland_get_wl_display(display: *mut WPEDisplay) -> *mut wl_display;
    pub fn wpe_display_wayland_get_wl_compositor(display: *mut WPEDisplay) -> *mut wl_compositor;
    pub fn wpe_display_wayland_get_wl_shm(display: *mut WPEDisplay) -> *mut wl_shm;

    pub fn wpe_toplevel_wayland_get_type() -> GType;
    pub fn wpe_toplevel_wayland_get_wl_surface(toplevel: *mut WPEToplevel) -> *mut wl_surface;

    pub fn wpe_view_wayland_get_type() -> GType;
    pub fn wpe_view_wayland_get_wl_surface(view: *mut WPEView) -> *mut wl_surface;
}

pub unsafe fn wl_display_get_registry(display: *mut wl_display) -> *mut wl_proxy {
    let ver = wl_proxy_get_version(display as *mut wl_proxy);
    wl_proxy_marshal_flags(
        display as *mut wl_proxy,
        WL_DISPLAY_GET_REGISTRY,
        &wl_registry_interface,
        ver,
        0,
        std::ptr::null::<std::ffi::c_void>(),
    )
}

pub unsafe fn wl_registry_bind(
    registry: *mut wl_proxy,
    name: u32,
    interface: *const wl_interface,
    version: u32,
) -> *mut wl_proxy {
    wl_proxy_marshal_flags(
        registry,
        WL_REGISTRY_BIND,
        interface,
        version,
        0,
        name,
        (*interface).name,
        version,
        std::ptr::null::<std::ffi::c_void>(),
    )
}

pub unsafe fn wl_seat_get_pointer(seat: *mut wl_proxy) -> *mut wl_proxy {
    let ver = wl_proxy_get_version(seat);
    wl_proxy_marshal_flags(
        seat,
        WL_SEAT_GET_POINTER,
        &wl_pointer_interface,
        ver,
        0,
        std::ptr::null::<std::ffi::c_void>(),
    )
}
