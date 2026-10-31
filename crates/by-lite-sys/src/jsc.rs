//! Low-level JavaScriptCore FFI definitions

use crate::glib::{gboolean, gchar, gdouble, gint, guint};

#[repr(C)]
pub struct JSCValue {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

extern "C" {
    pub fn jsc_value_to_string(value: *mut JSCValue) -> *mut gchar;
    pub fn jsc_value_to_json(value: *mut JSCValue, indent: guint) -> *mut gchar;
    pub fn jsc_value_to_double(value: *mut JSCValue) -> gdouble;
    pub fn jsc_value_to_int32(value: *mut JSCValue) -> gint;
    pub fn jsc_value_to_boolean(value: *mut JSCValue) -> gboolean;
    pub fn jsc_value_is_string(value: *mut JSCValue) -> gboolean;
    pub fn jsc_value_is_number(value: *mut JSCValue) -> gboolean;
    pub fn jsc_value_is_boolean(value: *mut JSCValue) -> gboolean;
    pub fn jsc_value_is_object(value: *mut JSCValue) -> gboolean;
    pub fn jsc_value_is_null(value: *mut JSCValue) -> gboolean;
    pub fn jsc_value_is_undefined(value: *mut JSCValue) -> gboolean;
}
