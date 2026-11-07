//! Low-level WPE WebKit 2.0 FFI definitions

use crate::glib::{gboolean, gchar, gssize, GAsyncReadyCallback, GCancellable, GType};
use crate::wpe_platform::{WPEDisplay, WPEView};
use std::ffi::c_void;

#[repr(C)]
pub struct WebKitWebView {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct WebKitSettings {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct WebKitUserContentManager {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct WebKitUserScript {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
pub struct WebKitWebContext {
    _data: [u8; 0],
    _marker: core::marker::PhantomData<(*mut u8, core::marker::PhantomPinned)>,
}

#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq, Eq)]
pub enum WebKitUserContentInjectedFrames {
    AllFrames = 0,
    TopFrame = 1,
}

#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq, Eq)]
pub enum WebKitUserScriptInjectionTime {
    DocumentStart = 0,
    DocumentEnd = 1,
}

extern "C" {
    // WebKitWebView
    pub fn webkit_web_view_get_type() -> GType;
    pub fn webkit_web_view_new(backend: *mut c_void) -> *mut WebKitWebView;
    pub fn webkit_web_view_get_display(web_view: *mut WebKitWebView) -> *mut WPEDisplay;
    pub fn webkit_web_view_get_wpe_view(web_view: *mut WebKitWebView) -> *mut WPEView;
    pub fn webkit_web_view_get_settings(web_view: *mut WebKitWebView) -> *mut WebKitSettings;
    pub fn webkit_web_view_get_user_content_manager(web_view: *mut WebKitWebView) -> *mut WebKitUserContentManager;

    pub fn webkit_web_view_load_uri(web_view: *mut WebKitWebView, uri: *const gchar);
    pub fn webkit_web_view_load_html(web_view: *mut WebKitWebView, content: *const gchar, base_uri: *const gchar);
    pub fn webkit_web_view_load_plain_text(web_view: *mut WebKitWebView, plain_text: *const gchar);
    pub fn webkit_web_view_stop_loading(web_view: *mut WebKitWebView);
    pub fn webkit_web_view_reload(web_view: *mut WebKitWebView);
    pub fn webkit_web_view_is_loading(web_view: *mut WebKitWebView) -> gboolean;
    pub fn webkit_web_view_get_title(web_view: *mut WebKitWebView) -> *const gchar;
    pub fn webkit_web_view_get_uri(web_view: *mut WebKitWebView) -> *const gchar;

    pub fn webkit_web_view_evaluate_javascript(
        web_view: *mut WebKitWebView,
        script: *const gchar,
        length: gssize,
        world_name: *const gchar,
        source_uri: *const gchar,
        cancellable: *mut GCancellable,
        callback: GAsyncReadyCallback,
        user_data: *mut c_void,
    );

    // WebKitSettings
    pub fn webkit_settings_get_type() -> GType;
    pub fn webkit_settings_new() -> *mut WebKitSettings;
    pub fn webkit_settings_set_enable_javascript(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_enable_developer_extras(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_enable_write_console_messages_to_stdout(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_enable_webgl(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_enable_2d_canvas_acceleration(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_allow_file_access_from_file_urls(settings: *mut WebKitSettings, allowed: gboolean);
    pub fn webkit_settings_set_allow_universal_access_from_file_urls(settings: *mut WebKitSettings, allowed: gboolean);
    pub fn webkit_settings_set_javascript_can_access_clipboard(settings: *mut WebKitSettings, allowed: gboolean);
    pub fn webkit_settings_set_media_playback_requires_user_gesture(settings: *mut WebKitSettings, requires: gboolean);
    pub fn webkit_settings_set_enable_encrypted_media(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_enable_mediasource(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_media_playback_allows_inline(settings: *mut WebKitSettings, allows: gboolean);
    pub fn webkit_settings_set_enable_media(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_enable_media_capabilities(settings: *mut WebKitSettings, enabled: gboolean);
    pub fn webkit_settings_set_media_content_types_requiring_hardware_support(
        settings: *mut WebKitSettings,
        content_types: *const gchar,
    );
    pub fn webkit_settings_set_disable_web_security(settings: *mut WebKitSettings, disabled: gboolean);
    pub fn webkit_settings_set_enable_site_specific_quirks(settings: *mut WebKitSettings, enabled: gboolean);

    // WebKitUserContentManager
    pub fn webkit_user_content_manager_get_type() -> GType;
    pub fn webkit_user_content_manager_new() -> *mut WebKitUserContentManager;
    pub fn webkit_user_content_manager_register_script_message_handler(
        manager: *mut WebKitUserContentManager,
        name: *const gchar,
        world_name: *const gchar,
    ) -> gboolean;
    pub fn webkit_user_content_manager_unregister_script_message_handler(
        manager: *mut WebKitUserContentManager,
        name: *const gchar,
        world_name: *const gchar,
    );
    pub fn webkit_user_content_manager_add_script(
        manager: *mut WebKitUserContentManager,
        script: *mut WebKitUserScript,
    );

    // WebKitUserScript
    pub fn webkit_user_script_new(
        source: *const gchar,
        injected_frames: WebKitUserContentInjectedFrames,
        injection_time: WebKitUserScriptInjectionTime,
        allow_list: *const *const gchar,
        block_list: *const *const gchar,
    ) -> *mut WebKitUserScript;
    pub fn webkit_user_script_unref(script: *mut WebKitUserScript);

    // WebKitWebsitePolicies
    pub fn webkit_website_policies_new_with_policies(
        first_policy_name: *const gchar,
        ...
    ) -> *mut WebKitWebsitePolicies;
}

#[repr(C)]
pub struct WebKitWebsitePolicies {
    _private: [u8; 0],
}

pub const WEBKIT_AUTOPLAY_ALLOW: u32 = 0;
pub const WEBKIT_AUTOPLAY_ALLOW_WITHOUT_SOUND: u32 = 1;
pub const WEBKIT_AUTOPLAY_DENY: u32 = 2;
