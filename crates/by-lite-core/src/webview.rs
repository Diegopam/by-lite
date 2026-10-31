use by_lite_sys::{
    webkit_web_view_evaluate_javascript, webkit_web_view_get_title,
    webkit_web_view_get_uri, webkit_web_view_get_user_content_manager,
    webkit_web_view_is_loading, webkit_web_view_load_html, webkit_web_view_load_uri,
    webkit_web_view_reload, webkit_web_view_stop_loading, G_FALSE, WebKitUserContentManager,
    WebKitWebView, WPEView,
};
use std::ffi::{CStr, CString};
use std::ptr;

pub struct WebView {
    pub(crate) web_view: *mut WebKitWebView,
    pub(crate) wpe_view: *mut WPEView,
    pub(crate) ucm: *mut WebKitUserContentManager,
}

impl WebView {
    pub(crate) fn new(web_view: *mut WebKitWebView, wpe_view: *mut WPEView) -> Self {
        let ucm = unsafe { webkit_web_view_get_user_content_manager(web_view) };
        Self {
            web_view,
            wpe_view,
            ucm,
        }
    }

    /// Load a URL in the web view
    pub fn load_url(&self, url: &str) {
        if let Ok(c_url) = CString::new(url) {
            unsafe {
                webkit_web_view_load_uri(self.web_view, c_url.as_ptr());
            }
        }
    }

    /// Load raw HTML content with an optional base URI
    pub fn load_html(&self, html: &str, base_uri: Option<&str>) {
        if let Ok(c_html) = CString::new(html) {
            let c_base = base_uri.and_then(|u| CString::new(u).ok());
            let base_ptr = c_base.as_ref().map_or(ptr::null(), |b| b.as_ptr());
            unsafe {
                webkit_web_view_load_html(self.web_view, c_html.as_ptr(), base_ptr);
            }
        }
    }

    /// Evaluate JavaScript code asynchronously in the web view context
    pub fn evaluate_script(&self, script: &str) {
        if let Ok(c_script) = CString::new(script) {
            unsafe {
                webkit_web_view_evaluate_javascript(
                    self.web_view,
                    c_script.as_ptr(),
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

    /// Get current document title if available
    pub fn title(&self) -> Option<String> {
        unsafe {
            let ptr = webkit_web_view_get_title(self.web_view);
            if ptr.is_null() {
                None
            } else {
                Some(CStr::from_ptr(ptr).to_string_lossy().into_owned())
            }
        }
    }

    /// Get current page URI if available
    pub fn uri(&self) -> Option<String> {
        unsafe {
            let ptr = webkit_web_view_get_uri(self.web_view);
            if ptr.is_null() {
                None
            } else {
                Some(CStr::from_ptr(ptr).to_string_lossy().into_owned())
            }
        }
    }

    /// Check if the page is currently loading
    pub fn is_loading(&self) -> bool {
        unsafe { webkit_web_view_is_loading(self.web_view) != G_FALSE }
    }

    /// Stop loading current resource
    pub fn stop_loading(&self) {
        unsafe {
            webkit_web_view_stop_loading(self.web_view);
        }
    }

    /// Reload the current page
    pub fn reload(&self) {
        unsafe {
            webkit_web_view_reload(self.web_view);
        }
    }

    /// Access raw WebKitWebView pointer
    pub fn raw_web_view(&self) -> *mut WebKitWebView {
        self.web_view
    }

    /// Access raw WPEView pointer
    pub fn raw_wpe_view(&self) -> *mut WPEView {
        self.wpe_view
    }

    /// Access raw WebKitUserContentManager pointer
    pub fn raw_user_content_manager(&self) -> *mut WebKitUserContentManager {
        self.ucm
    }
}
