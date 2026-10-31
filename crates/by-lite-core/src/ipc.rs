use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct IpcMessage {
    #[serde(default)]
    pub action: Option<String>,
    #[serde(default)]
    pub id: Option<String>,
    #[serde(default)]
    pub cmd: Option<String>,
    #[serde(default)]
    pub args: Option<serde_json::Value>,
    #[serde(default)]
    pub payload: Option<serde_json::Value>,
    #[serde(default)]
    pub width: Option<i32>,
    #[serde(default)]
    pub height: Option<i32>,
    #[serde(default)]
    pub title: Option<String>,
    #[serde(default)]
    pub edge: Option<serde_json::Value>,
}

pub type CommandHandler = Box<dyn Fn(Option<serde_json::Value>) -> Result<serde_json::Value, String> + Send + Sync>;

#[derive(Default)]
pub struct IpcRouter {
    commands: HashMap<String, CommandHandler>,
}

impl IpcRouter {
    pub fn new() -> Self {
        Self {
            commands: HashMap::new(),
        }
    }

    pub fn register<F>(&mut self, name: &str, handler: F)
    where
        F: Fn(Option<serde_json::Value>) -> Result<serde_json::Value, String> + Send + Sync + 'static,
    {
        self.commands.insert(name.to_string(), Box::new(handler));
    }

    pub fn handle_invoke(&self, cmd: &str, args: Option<serde_json::Value>) -> Result<serde_json::Value, String> {
        if let Some(handler) = self.commands.get(cmd) {
            handler(args)
        } else {
            Err(format!("Unknown IPC command: `{cmd}`"))
        }
    }
}
