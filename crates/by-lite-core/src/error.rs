use std::fmt;

pub type Result<T> = std::result::Result<T, ByError>;

#[derive(Debug)]
pub enum ByError {
    PlatformInitFailed(String),
    WindowCreateFailed(String),
    InvalidUri(String),
    SerializationError(String),
    IpcError(String),
}

impl fmt::Display for ByError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            ByError::PlatformInitFailed(msg) => write!(f, "Platform initialization failed: {msg}"),
            ByError::WindowCreateFailed(msg) => write!(f, "Failed to create window: {msg}"),
            ByError::InvalidUri(msg) => write!(f, "Invalid URI: {msg}"),
            ByError::SerializationError(msg) => write!(f, "Serialization error: {msg}"),
            ByError::IpcError(msg) => write!(f, "IPC error: {msg}"),
        }
    }
}

impl std::error::Error for ByError {}

impl From<serde_json::Error> for ByError {
    fn from(err: serde_json::Error) -> Self {
        ByError::SerializationError(err.to_string())
    }
}
