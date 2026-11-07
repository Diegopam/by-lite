//! by-lite: Revolutionary ultra-lightweight desktop application runtime in Rust.

pub mod app;
pub mod autoplay;
pub mod csd;
pub mod error;
pub mod ipc;
pub mod package;
pub mod sdk;
pub mod wayland;
pub mod webview;
pub mod window;

pub use app::{App, AppHandle};
pub use autoplay::AUTOPLAY_RUNTIME_SCRIPT;
pub use csd::CSD_RUNTIME_SCRIPT;
pub use error::{ByError, Result};
pub use ipc::{IpcMessage, IpcRouter};
pub use package::{pack, unpack, BackendConfig, BackendSpec, ByManifest};
pub use sdk::MACOS_SDK_RUNTIME_SCRIPT;
pub use wayland::{get_wayland_toplevel_proxies, parse_resize_edge, WaylandInputTracker};
pub use webview::WebView;
pub use window::{Window, WindowBuilder};
