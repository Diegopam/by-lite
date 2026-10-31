//! Low-level GLib & GObject FFI definitions
#![allow(non_camel_case_types)]

use std::ffi::{c_char, c_double, c_float, c_int, c_long, c_uchar, c_uint, c_ulong, c_void};

pub type gpointer = *mut c_void;
pub type gconstpointer = *const c_void;
pub type gboolean = c_int;
pub const G_TRUE: gboolean = 1;
pub const G_FALSE: gboolean = 0;

pub type gchar = c_char;
pub type guchar = c_uchar;
pub type gint = c_int;
pub type guint = c_uint;
pub type glong = c_long;
pub type gulong = c_ulong;
pub type gsize = usize;
pub type gssize = isize;
pub type gfloat = c_float;
pub type gdouble = c_double;

pub type GQuark = u32;
pub type GType = usize;

#[repr(C)]
pub struct GError {
    pub domain: GQuark,
    pub code: gint,
    pub message: *mut gchar,
}

#[repr(C)]
pub struct GList {
    pub data: gpointer,
    pub next: *mut GList,
    pub prev: *mut GList,
}

#[repr(C)]
pub struct GMainLoop {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct GMainContext {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct GObject {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct GBytes {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct GCancellable {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct GAsyncResult {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

pub type GCallback = Option<unsafe extern "C" fn()>;
pub type GClosureNotify = Option<unsafe extern "C" fn(data: gpointer, closure: gpointer)>;
pub type GSourceFunc = Option<unsafe extern "C" fn(user_data: gpointer) -> gboolean>;
pub type GDestroyNotify = Option<unsafe extern "C" fn(data: gpointer)>;
pub type GAsyncReadyCallback = Option<unsafe extern "C" fn(source_object: *mut GObject, res: *mut GAsyncResult, user_data: gpointer)>;

#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq, Eq)]
pub enum GConnectFlags {
    Default = 0,
    After = 1 << 0,
    Swapped = 1 << 1,
}

extern "C" {
    pub fn g_main_loop_new(context: *mut GMainContext, is_running: gboolean) -> *mut GMainLoop;
    pub fn g_main_loop_run(loop_: *mut GMainLoop);
    pub fn g_main_loop_quit(loop_: *mut GMainLoop);
    pub fn g_main_loop_is_running(loop_: *mut GMainLoop) -> gboolean;
    pub fn g_main_loop_unref(loop_: *mut GMainLoop);
    pub fn g_main_loop_get_context(loop_: *mut GMainLoop) -> *mut GMainContext;
    pub fn g_main_context_default() -> *mut GMainContext;
    pub fn g_main_context_iteration(context: *mut GMainContext, may_block: gboolean) -> gboolean;

    pub fn g_timeout_add(interval: guint, function: GSourceFunc, data: gpointer) -> guint;
    pub fn g_idle_add(function: GSourceFunc, data: gpointer) -> guint;
    pub fn g_source_remove(tag: guint) -> gboolean;

    pub fn g_object_ref(object: gpointer) -> gpointer;
    pub fn g_object_unref(object: gpointer);
    pub fn g_object_new(object_type: GType, first_property_name: *const gchar, ...) -> gpointer;
    pub fn g_object_set(object: gpointer, first_property_name: *const gchar, ...);
    pub fn g_object_get(object: gpointer, first_property_name: *const gchar, ...);

    pub fn g_signal_connect_data(
        instance: gpointer,
        detailed_signal: *const gchar,
        c_handler: GCallback,
        data: gpointer,
        destroy_data: GClosureNotify,
        connect_flags: GConnectFlags,
    ) -> gulong;

    pub fn g_free(mem: gpointer);
    pub fn g_error_free(error: *mut GError);

    pub fn g_set_prgname(prgname: *const gchar);
    pub fn g_get_prgname() -> *const gchar;
    pub fn g_set_application_name(application_name: *const gchar);
    pub fn g_get_application_name() -> *const gchar;

    pub fn g_bytes_new(data: gconstpointer, size: gsize) -> *mut GBytes;
    pub fn g_bytes_new_static(data: gconstpointer, size: gsize) -> *mut GBytes;
    pub fn g_bytes_unref(bytes: *mut GBytes);
    pub fn g_bytes_get_data(bytes: *mut GBytes, size: *mut gsize) -> gconstpointer;
}
