use by_lite_core::{package, App, WindowBuilder};
use std::env;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::{Child, Command};

const VERSION: &str = env!("CARGO_PKG_VERSION");

fn print_help() {
    println!(
        r#"by-lite v{VERSION} - Ultra-lightweight desktop application runtime in Rust

USAGE:
    by-lite [OPTIONS] [PATH_OR_URL_OR_BYT]
    by-lite run [OPTIONS] <PATH_OR_URL_OR_BYT>
    by-lite pack <DIRECTORY> [-o <OUTPUT.byt>]
    by-lite install-mime

COMMANDS:
    run <TARGET>           Run an application (.byt package, HTML file, directory, or URL)
    pack <DIR> [-o OUT]    Package an application directory into a compressed .byt bundle
    install-mime           Register .byt MIME type and .desktop file for double-click launch

ARGUMENTS:
    <PATH_OR_URL_OR_BYT>   Path to .byt bundle, HTML file, directory with index.html, or URL

OPTIONS:
    -t, --title <TITLE>    Window title override
    -w, --width <WIDTH>    Initial window width
    -H, --height <HEIGHT>  Initial window height
    -d, --devtools         Enable developer extras / WebKit inspector
    --no-csd               Disable Client-Side Decoration runtime helper
    -o, --output <OUTPUT>  Output path for .byt package (used with 'pack')
    -v, --version          Print version information
    -h, --help             Print help information
"#
    );
}

struct BackendGuard {
    child: Option<Child>,
}

impl Drop for BackendGuard {
    fn drop(&mut self) {
        if let Some(mut child) = self.child.take() {
            println!("[by-lite] Terminating background backend process (PID {})...", child.id());
            let _ = child.kill();
            let _ = child.wait();
        }
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args: Vec<String> = env::args().collect();

    if args.len() <= 1 {
        // Run with default welcome page
        return run_welcome_page();
    }

    let mut command: Option<String> = None;
    let mut target: Option<String> = None;
    let mut output_pkg: Option<String> = None;
    let mut title_override: Option<String> = None;
    let mut app_id: Option<String> = None;
    let mut width_override: Option<u32> = None;
    let mut height_override: Option<u32> = None;
    let mut devtools = true;
    let mut csd = true;

    let mut i = 1;
    while i < args.len() {
        match args[i].as_str() {
            "-h" | "--help" => {
                print_help();
                return Ok(());
            }
            "-v" | "--version" => {
                println!("by-lite {}", VERSION);
                return Ok(());
            }
            "pack" => {
                command = Some("pack".into());
            }
            "run" => {
                command = Some("run".into());
            }
            "install-mime" => {
                command = Some("install-mime".into());
            }
            "-o" | "--output" => {
                if i + 1 < args.len() {
                    i += 1;
                    output_pkg = Some(args[i].clone());
                }
            }
            "-t" | "--title" => {
                if i + 1 < args.len() {
                    i += 1;
                    title_override = Some(args[i].clone());
                }
            }
            "--app-id" => {
                if i + 1 < args.len() {
                    i += 1;
                    app_id = Some(args[i].clone());
                }
            }
            "-w" | "--width" => {
                if i + 1 < args.len() {
                    i += 1;
                    if let Ok(w) = args[i].parse() {
                        width_override = Some(w);
                    }
                }
            }
            "-H" | "--height" => {
                if i + 1 < args.len() {
                    i += 1;
                    if let Ok(h) = args[i].parse() {
                        height_override = Some(h);
                    }
                }
            }
            "-d" | "--devtools" => {
                devtools = true;
            }
            "--no-csd" => {
                csd = false;
            }
            arg if !arg.starts_with('-') => {
                if target.is_none() {
                    target = Some(arg.to_string());
                }
            }
            _ => {}
        }
        i += 1;
    }

    match command.as_deref() {
        Some("pack") => {
            let src_dir = target.ok_or("Uso: by-lite pack <diretório> [-o pacote.byt]")?;
            let src_path = Path::new(&src_dir);
            let out_path = if let Some(out) = output_pkg {
                PathBuf::from(out)
            } else {
                let stem = src_path
                    .file_name()
                    .and_then(|n| n.to_str())
                    .unwrap_or("app");
                PathBuf::from(format!("{}.byt", stem))
            };

            println!("[by-lite pack] Empacotando diretório: {:?}", src_path);
            let packed = package::pack(src_path, &out_path)?;
            let size = fs::metadata(&packed).map(|m| m.len()).unwrap_or(0);
            let size_kb = size as f64 / 1024.0;
            let size_mb = size_kb / 1024.0;

            if size_mb >= 1.0 {
                println!(
                    "[by-lite pack] Pacote .byt gerado com sucesso: {:?} ({:.2} MB / {} bytes)",
                    packed, size_mb, size
                );
            } else {
                println!(
                    "[by-lite pack] Pacote .byt gerado com sucesso: {:?} ({:.1} KB / {} bytes)",
                    packed, size_kb, size
                );
            }
            Ok(())
        }
        Some("install-mime") => install_mime_types(),
        _ => {
            // Default to running target or welcome page
            if let Some(target_str) = target {
                run_target(
                    &target_str,
                    title_override,
                    app_id,
                    width_override,
                    height_override,
                    devtools,
                    csd,
                )
            } else {
                run_welcome_page()
            }
        }
    }
}

fn run_target(
    target_str: &str,
    title_override: Option<String>,
    app_id: Option<String>,
    width_override: Option<u32>,
    height_override: Option<u32>,
    devtools: bool,
    csd: bool,
) -> Result<(), Box<dyn std::error::Error>> {
    // Strip file:// prefix if passed by desktop launcher
    let clean_target = if let Some(stripped) = target_str.strip_prefix("file://") {
        stripped
    } else {
        target_str
    };

    let target_path = Path::new(clean_target);

    // Detect if target is a .byt application package
    if clean_target.ends_with(".byt") || (target_path.is_file() && is_tar_gz(target_path)) {
        return run_byt_package(
            target_path,
            title_override,
            app_id,
            width_override,
            height_override,
            devtools,
            csd,
        );
    }

    // Standard URL or local file path
    let app = App::new()?;
    let uri = resolve_target_to_uri(clean_target);

    let title = title_override.unwrap_or_else(|| "by-lite App".into());
    let width = width_override.unwrap_or(900);
    let height = height_override.unwrap_or(640);

    let mut builder = WindowBuilder::new()
        .title(&title)
        .size(width, height)
        .devtools(devtools)
        .csd(csd)
        .url(uri);

    if let Some(id) = app_id {
        builder = builder.app_id(id);
    }

    builder = register_default_commands(builder);
    let _window = builder.build(&app)?;
    app.run()?;

    Ok(())
}

fn run_byt_package(
    byt_path: &Path,
    title_override: Option<String>,
    app_id_override: Option<String>,
    width_override: Option<u32>,
    height_override: Option<u32>,
    devtools_override: bool,
    csd_override: bool,
) -> Result<(), Box<dyn std::error::Error>> {
    println!("[by-lite] Descompactando pacote de aplicativo .byt: {:?}", byt_path);
    let (app_dir, manifest) = package::unpack(byt_path, None)?;
    println!(
        "[by-lite] Aplicativo '{}' (v{}) carregado em {:?}",
        manifest.name, manifest.version, app_dir
    );

    // Check and start optional backend process
    let mut _backend_guard = BackendGuard { child: None };
    if let Some(backend) = manifest.resolve_backend() {
        let bin_path = app_dir.join(&backend.command);
        if bin_path.exists() {
            let needs_spawn = if let Some(port) = backend.port {
                !package::is_port_open(port)
            } else {
                true
            };

            if needs_spawn {
                println!("[by-lite] Iniciando servidor backend: {:?}", bin_path);
                let mut cmd = Command::new(&bin_path);
                cmd.args(&backend.args);
                cmd.current_dir(&app_dir);

                match cmd.spawn() {
                    Ok(child) => {
                        let pid = child.id();
                        println!("[by-lite] Backend iniciado com PID: {}", pid);
                        _backend_guard.child = Some(child);

                        if let Some(port) = backend.port {
                            println!("[by-lite] Aguardando backend responder na porta {}...", port);
                            let wait_ms = backend.wait_ms.unwrap_or(4000);
                            if package::wait_for_port(port, wait_ms) {
                                println!("[by-lite] Backend online na porta {}!", port);
                            } else {
                                eprintln!(
                                    "[by-lite] Aviso: Backend não respondeu na porta {} após {}ms",
                                    port, wait_ms
                                );
                            }
                        }
                    }
                    Err(e) => {
                        eprintln!("[by-lite] Aviso: Falha ao executar backend {:?}: {}", bin_path, e);
                    }
                }
            } else if let Some(port) = backend.port {
                println!("[by-lite] Backend já detectado ativo na porta {}.", port);
            }
        } else {
            eprintln!(
                "[by-lite] Aviso: Binário do backend especificado não encontrado: {:?}",
                bin_path
            );
        }
    }

    // Resolve entrypoint URL
    let entry_path = app_dir.join(&manifest.entrypoint);
    if !entry_path.exists() {
        return Err(format!(
            "Ponto de entrada '{}' não encontrado em {:?}",
            manifest.entrypoint, app_dir
        )
        .into());
    }

    let url = if let Ok(canonical) = fs::canonicalize(&entry_path) {
        format!("file://{}", canonical.display())
    } else {
        format!("file://{}", entry_path.display())
    };

    let title = title_override.unwrap_or(manifest.title);
    let app_id = app_id_override.unwrap_or(manifest.name);
    let width = width_override.unwrap_or(manifest.width);
    let height = height_override.unwrap_or(manifest.height);
    let resizable = manifest.resizable;
    let csd = csd_override && manifest.csd;
    let devtools = devtools_override && manifest.devtools;

    let app = App::new()?;
    let mut builder = WindowBuilder::new()
        .title(&title)
        .app_id(&app_id)
        .size(width, height)
        .resizable(resizable)
        .csd(csd)
        .devtools(devtools)
        .url(url);

    builder = register_default_commands(builder);
    let _window = builder.build(&app)?;

    println!("[by-lite] Janela aberta com sucesso. Executando aplicativo...");
    app.run()?;

    println!("[by-lite] Aplicativo encerrado.");
    Ok(())
}

fn is_tar_gz(path: &Path) -> bool {
    if let Ok(mut f) = fs::File::open(path) {
        use std::io::Read;
        let mut magic = [0u8; 2];
        if f.read_exact(&mut magic).is_ok() {
            return magic == [0x1f, 0x8b]; // Gzip magic number
        }
    }
    false
}

fn register_default_commands(builder: WindowBuilder) -> WindowBuilder {
    builder.command("system_info", |_| {
        Ok(serde_json::json!({
            "runtime": "by-lite",
            "version": VERSION,
            "engine": "WPE WebKit 2.0 (wpe-platform-wayland)",
            "os": "Linux (Wayland)",
            "pid": std::process::id(),
        }))
    })
}

fn install_mime_types() -> Result<(), Box<dyn std::error::Error>> {
    println!("[by-lite] Registrando tipo MIME application/x-by-lite no FreeDesktop...");

    let exe_path = env::current_exe()
        .unwrap_or_else(|_| PathBuf::from("/usr/local/bin/by-lite"));
    let exe_str = exe_path.to_string_lossy();

    // Check if running as root
    let is_root = unsafe { libc::geteuid() == 0 };

    let (mime_dir, apps_dir) = if is_root {
        (
            PathBuf::from("/usr/share/mime/packages"),
            PathBuf::from("/usr/share/applications"),
        )
    } else {
        let data_home = env::var("XDG_DATA_HOME")
            .map(PathBuf::from)
            .unwrap_or_else(|_| {
                PathBuf::from(env::var("HOME").unwrap_or_else(|_| "/tmp".into()))
                    .join(".local/share")
            });
        (
            data_home.join("mime/packages"),
            data_home.join("applications"),
        )
    };

    fs::create_dir_all(&mime_dir)?;
    fs::create_dir_all(&apps_dir)?;

    // 1. Install MIME XML definition
    let mime_xml = r#"<?xml version="1.0" encoding="UTF-8"?>
<mime-info xmlns="http://www.freedesktop.org/standards/shared-mime-info">
  <mime-type type="application/x-by-lite">
    <comment>by-lite Application Package</comment>
    <comment xml:lang="pt">Pacote de Aplicativo by-lite</comment>
    <glob pattern="*.byt"/>
    <icon name="application-x-by-lite"/>
  </mime-type>
</mime-info>
"#;
    let mime_file = mime_dir.join("by-lite.xml");
    fs::write(&mime_file, mime_xml)?;
    println!("[by-lite] Arquivo de definição MIME criado: {:?}", mime_file);

    // Update MIME database
    if let Some(mime_base) = mime_dir.parent() {
        let _ = Command::new("update-mime-database").arg(mime_base).status();
    }

    // 2. Install .desktop file
    let desktop_content = format!(
        r#"[Desktop Entry]
Version=1.0
Type=Application
Name=by-lite Runtime
Comment=Ultra-lightweight Linux desktop application runtime
Comment[pt]=Runtime ultraleve para aplicativos desktop no Linux
Exec={} run %u
Terminal=false
MimeType=application/x-by-lite;
Categories=Utility;Development;
NoDisplay=true
"#,
        exe_str
    );
    let desktop_file = apps_dir.join("by-lite.desktop");
    fs::write(&desktop_file, desktop_content)?;
    println!("[by-lite] Lançador Desktop criado: {:?}", desktop_file);

    // Update desktop database
    let _ = Command::new("update-desktop-database").arg(&apps_dir).status();

    // 3. Register as default handler via xdg-mime
    let _ = Command::new("xdg-mime")
        .args(["default", "by-lite.desktop", "application/x-by-lite"])
        .status();

    // Also register in user mimeapps.list
    if !is_root {
        let config_home = env::var("XDG_CONFIG_HOME")
            .map(PathBuf::from)
            .unwrap_or_else(|_| {
                PathBuf::from(env::var("HOME").unwrap_or_else(|_| "/tmp".into()))
                    .join(".config")
            });
        let mimeapps = config_home.join("mimeapps.list");
        ensure_mimeapps_entry(&mimeapps);
    }

    println!("[by-lite] MIME type application/x-by-lite registrado com sucesso!");
    println!("[by-lite] Arquivos .byt agora abrirão automaticamente com dois cliques no KDE Plasma e GNOME.");
    Ok(())
}

fn ensure_mimeapps_entry(mimeapps_path: &Path) {
    let mut content = fs::read_to_string(mimeapps_path).unwrap_or_default();
    let entry = "application/x-by-lite=by-lite.desktop\n";

    if !content.contains("application/x-by-lite") {
        if content.contains("[Default Applications]") {
            content = content.replace("[Default Applications]\n", &format!("[Default Applications]\n{}", entry));
        } else {
            content.push_str(&format!("\n[Default Applications]\n{}", entry));
        }

        if content.contains("[Added Associations]") {
            content = content.replace("[Added Associations]\n", &format!("[Added Associations]\n{}", entry));
        } else {
            content.push_str(&format!("\n[Added Associations]\n{}", entry));
        }

        if let Some(parent) = mimeapps_path.parent() {
            let _ = fs::create_dir_all(parent);
        }
        let _ = fs::write(mimeapps_path, content);
    }
}

fn run_welcome_page() -> Result<(), Box<dyn std::error::Error>> {
    let app = App::new()?;
    let mut builder = WindowBuilder::new()
        .title("by-lite Runtime")
        .size(900, 640)
        .devtools(true)
        .csd(true)
        .html(get_welcome_page_html());

    builder = register_default_commands(builder);
    let _window = builder.build(&app)?;
    app.run()?;
    Ok(())
}

fn resolve_target_to_uri(target: &str) -> String {
    if target.starts_with("http://") || target.starts_with("https://") || target.starts_with("file://") {
        return target.to_string();
    }

    let path = PathBuf::from(target);
    let resolved = if path.is_dir() {
        let index_path = path.join("index.html");
        if index_path.exists() {
            index_path
        } else {
            path
        }
    } else {
        path
    };

    if let Ok(canonical) = fs::canonicalize(&resolved) {
        format!("file://{}", canonical.display())
    } else {
        format!("file://{}", Path::new(&resolved).display())
    }
}

fn get_welcome_page_html() -> &'static str {
    r#"<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>by-lite Runtime</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
    :root {
      --bg: #0f111a;
      --card-bg: rgba(26, 29, 45, 0.7);
      --card-border: rgba(255, 255, 255, 0.1);
      --accent: #6366f1;
      --accent-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      --text: #f8fafc;
      --text-muted: #94a3b8;
    }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .titlebar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 38px;
      padding: 0 14px;
      background: rgba(15, 17, 26, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--card-border);
    }
    .titlebar-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .logo-badge {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background: var(--accent-gradient);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
      color: white;
    }
    .window-controls {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .control-btn {
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: transparent;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
    }
    .control-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--text);
    }
    .control-btn.close:hover {
      background: #ef4444;
      color: white;
    }
    .content {
      flex: 1;
      padding: 32px 48px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 60%);
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      background: rgba(99, 102, 241, 0.18);
      border: 1px solid rgba(99, 102, 241, 0.3);
      color: #818cf8;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    h1 {
      font-size: 38px;
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 12px;
      background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p.subtitle {
      font-size: 16px;
      color: var(--text-muted);
      max-width: 580px;
      line-height: 1.6;
      margin-bottom: 32px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      width: 100%;
      max-width: 760px;
      margin-bottom: 32px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 20px;
      text-align: left;
      backdrop-filter: blur(8px);
    }
    .card h3 {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 6px;
      color: #e2e8f0;
    }
    .card p {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.4;
    }
    .btn-action {
      background: var(--accent-gradient);
      color: white;
      border: none;
      padding: 10px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .btn-action:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
    }
    #sys-info-output {
      margin-top: 16px;
      font-family: monospace;
      font-size: 12px;
      color: #38bdf8;
      background: rgba(0, 0, 0, 0.35);
      padding: 8px 16px;
      border-radius: 6px;
      display: none;
    }
  </style>
</head>
<body>
  <div class="titlebar" data-by-drag>
    <div class="titlebar-brand" data-by-no-drag>
      <div class="logo-badge">by</div>
      <span>by-lite</span>
    </div>
    <div class="window-controls" data-by-no-drag>
      <button class="control-btn" data-by-action="minimize" title="Minimize">
        <svg width="12" height="12" viewBox="0 0 12 12"><line x1="2" y1="6" x2="10" y2="6" stroke="currentColor" stroke-width="1.5"/></svg>
      </button>
      <button class="control-btn" data-by-action="toggle-maximize" title="Maximize">
        <svg width="12" height="12" viewBox="0 0 12 12"><rect x="2.5" y="2.5" width="7" height="7" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
      </button>
      <button class="control-btn close" data-by-action="close" title="Close">
        <svg width="12" height="12" viewBox="0 0 12 12"><line x1="2.5" y1="2.5" x2="9.5" y2="9.5" stroke="currentColor" stroke-width="1.5"/><line x1="9.5" y1="2.5" x2="2.5" y2="9.5" stroke="currentColor" stroke-width="1.5"/></svg>
      </button>
    </div>
  </div>

  <div class="content">
    <div class="badge">WPE WebKit 2.0 &bull; Wayland Native</div>
    <h1>Lightweight. Blazing Fast.</h1>
    <p class="subtitle">by-lite is the next-generation desktop application runtime in Rust. Zero Chromium overhead, native Wayland graphics, and sub-millisecond IPC.</p>

    <div class="grid">
      <div class="card">
        <h3>&lt; 25 MB RAM</h3>
        <p>Ultra-lean memory footprint powered by WPE WebKit 2.0 shared system libraries.</p>
      </div>
      <div class="card">
        <h3>Native Wayland CSD</h3>
        <p>Zero-flicker glassmorphic custom titlebars rendered directly to Wayland surfaces.</p>
      </div>
      <div class="card">
        <h3>Blazing Fast Rust IPC</h3>
        <p>Type-safe asynchronous bidirectional bridge between JavaScript and Rust.</p>
      </div>
    </div>

    <button class="btn-action" onclick="fetchInfo()">Query Rust Runtime Info</button>
    <div id="sys-info-output"></div>
  </div>

  <script>
    async function fetchInfo() {
      try {
        const out = document.getElementById('sys-info-output');
        const info = await window.by.invoke('system_info');
        out.style.display = 'block';
        out.textContent = JSON.stringify(info, null, 2);
      } catch (e) {
        console.error(e);
      }
    }
  </script>
</body>
</html>"#
}
