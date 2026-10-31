use by_lite_core::{App, WindowBuilder};
use std::env;
use std::fs;
use std::path::PathBuf;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("[by-lite] Starting Calculator example application...");

    let app = App::new()?;

    // Locate HTML UI file
    let ui_path = locate_ui_file();
    println!("[by-lite] Loading UI from: {}", ui_path);

    let window = WindowBuilder::new()
        .title("by-lite Calculator")
        .app_id("calculator")
        .size(360, 540)
        .resizable(true)
        .devtools(true)
        .csd(true)
        .url(ui_path)
        // High-performance arithmetic execution in Rust
        .command("compute", |args| {
            let args = args.ok_or_else(|| "Missing compute arguments".to_string())?;
            let a = args.get("a").and_then(|v| v.as_f64()).ok_or("Missing operand 'a'")?;
            let b = args.get("b").and_then(|v| v.as_f64()).ok_or("Missing operand 'b'")?;
            let op = args.get("op").and_then(|v| v.as_str()).ok_or("Missing operator")?;

            let res = match op {
                "+" => a + b,
                "-" => a - b,
                "*" => a * b,
                "/" => {
                    if b == 0.0 {
                        return Err("Division by zero".to_string());
                    }
                    a / b
                }
                _ => return Err(format!("Unsupported operator: '{op}'")),
            };

            println!("[by-lite IPC] Handled compute: {} {} {} = {}", a, op, b, res);
            Ok(serde_json::json!({ "value": res }))
        })
        .command("system_info", |_| {
            Ok(serde_json::json!({
                "app": "Calculator Example",
                "runtime": "by-lite",
                "backend": "WPE WebKit 2.0 / wpe-platform-wayland",
                "os": "Manjaro Linux (Wayland)",
            }))
        })
        .build(&app)?;

    println!("[by-lite] Window created with native Wayland surface: {:p}", window.wayland_surface());
    println!("[by-lite] Running application event loop...");

    app.run()?;

    println!("[by-lite] Calculator application closed cleanly.");
    Ok(())
}

fn locate_ui_file() -> String {
    // Check relative to current working directory
    let candidates = [
        "examples/calculator/ui/index.html",
        "ui/index.html",
        "../examples/calculator/ui/index.html",
    ];

    for candidate in &candidates {
        let path = PathBuf::from(candidate);
        if path.exists() {
            if let Ok(canonical) = fs::canonicalize(&path) {
                return format!("file://{}", canonical.display());
            }
        }
    }

    // Check relative to executable directory
    if let Ok(exe_path) = env::current_exe() {
        if let Some(exe_dir) = exe_path.parent() {
            let direct = exe_dir.join("examples/calculator/ui/index.html");
            if direct.exists() {
                return format!("file://{}", direct.display());
            }
        }
    }

    // Default fallback
    "file:///home/diego/Área de trabalho/Projetos/electron-lite/examples/calculator/ui/index.html".into()
}
