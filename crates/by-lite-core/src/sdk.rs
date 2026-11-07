//! Built-in macOS UI Toolkit SDK (MiniUI + by-lite bridge + 340+ Custom Elements).
//!
//! Automatically injected into top-level application frames when `sdk` is enabled
//! (enabled by default in `WindowBuilder` and `by-lite.json`).

pub const MACOS_SDK_RUNTIME_SCRIPT: &str = include_str!("assets/by-lite-sdk-inject.js");
