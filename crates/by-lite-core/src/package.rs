//! Packaging format, manifest definitions, and archiver for `.byt` application bundles.

use crate::error::{ByError, Result};
use flate2::read::GzDecoder;
use flate2::write::GzEncoder;
use flate2::Compression;
use serde::{Deserialize, Serialize};
use std::fs;
use std::net::TcpStream;
use std::os::unix::fs::PermissionsExt;
use std::path::{Path, PathBuf};
use std::time::{Duration, Instant};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BackendConfig {
    pub command: String,
    #[serde(default)]
    pub args: Vec<String>,
    #[serde(default)]
    pub port: Option<u16>,
    #[serde(default)]
    pub wait_ms: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BackendSpec {
    Simple(String),
    Detailed(BackendConfig),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ByManifest {
    pub name: String,
    #[serde(default = "default_title")]
    pub title: String,
    #[serde(default = "default_version")]
    pub version: String,
    #[serde(default = "default_width")]
    pub width: u32,
    #[serde(default = "default_height")]
    pub height: u32,
    #[serde(default = "default_true")]
    pub resizable: bool,
    #[serde(default = "default_true")]
    pub csd: bool,
    #[serde(default = "default_true")]
    pub devtools: bool,
    #[serde(default = "default_entrypoint")]
    pub entrypoint: String,
    #[serde(default)]
    pub icon: Option<String>,
    #[serde(default)]
    pub categories: Option<String>,
    #[serde(default)]
    pub comment: Option<String>,
    #[serde(default)]
    pub backend: Option<BackendSpec>,
    #[serde(default)]
    pub tunnel: Option<String>,
    #[serde(default)]
    pub proxy: Option<String>,
    #[serde(default)]
    pub adblock: bool,
    #[serde(default)]
    pub autoplay_helper: bool,
    #[serde(default = "default_true")]
    pub sdk: bool,
}

fn default_title() -> String {
    "by-lite App".to_string()
}
fn default_version() -> String {
    "0.1.0".to_string()
}
fn default_width() -> u32 {
    1024
}
fn default_height() -> u32 {
    720
}
fn default_true() -> bool {
    true
}
fn default_entrypoint() -> String {
    "ui/index.html".to_string()
}

impl ByManifest {
    /// Resolve backend configuration into normalized struct
    pub fn resolve_backend(&self) -> Option<BackendConfig> {
        match &self.backend {
            Some(BackendSpec::Simple(cmd)) => Some(BackendConfig {
                command: cmd.clone(),
                args: Vec::new(),
                port: None,
                wait_ms: None,
            }),
            Some(BackendSpec::Detailed(config)) => Some(config.clone()),
            None => None,
        }
    }

    /// Read manifest from a JSON file
    pub fn from_file(path: &Path) -> Result<Self> {
        let content = fs::read_to_string(path)
            .map_err(|e| ByError::WindowCreateFailed(format!("Failed to read manifest {:?}: {}", path, e)))?;
        serde_json::from_str(&content)
            .map_err(|e| ByError::WindowCreateFailed(format!("Invalid by-lite.json in {:?}: {}", path, e)))
    }

    /// Save manifest to a JSON file
    pub fn save_to_file(&self, path: &Path) -> Result<()> {
        let json = serde_json::to_string_pretty(self)
            .map_err(|e| ByError::WindowCreateFailed(format!("Failed to serialize manifest: {}", e)))?;
        fs::write(path, json)
            .map_err(|e| ByError::WindowCreateFailed(format!("Failed to write manifest {:?}: {}", path, e)))
    }

    /// Generate default manifest based on directory contents
    pub fn default_for_dir(dir: &Path) -> Self {
        let dir_name = dir
            .file_name()
            .and_then(|n| n.to_str())
            .unwrap_or("by-lite-app");

        let sanitized_name = dir_name
            .to_lowercase()
            .chars()
            .map(|c| if c.is_alphanumeric() { c } else { '-' })
            .collect::<String>();

        let mut entrypoint = "ui/index.html".to_string();
        if !dir.join("ui/index.html").exists() && dir.join("index.html").exists() {
            entrypoint = "index.html".to_string();
        }

        Self {
            name: sanitized_name,
            title: dir_name.to_string(),
            version: "0.1.0".to_string(),
            width: 1024,
            height: 720,
            resizable: true,
            csd: true,
            devtools: true,
            entrypoint,
            icon: None,
            categories: None,
            comment: None,
            backend: None,
            tunnel: None,
            proxy: None,
            adblock: false,
            autoplay_helper: false,
            sdk: true,
        }
    }

    /// Resolve application icon path from directory (explicit in manifest or auto-detected)
    pub fn resolve_icon(&self, app_dir: &Path) -> Option<PathBuf> {
        if let Some(ref icon_rel) = self.icon {
            let p = app_dir.join(icon_rel);
            if p.exists() {
                return Some(p);
            }
        }
        let candidates = [
            "ui/assets/icon.png",
            "assets/icon.png",
            "icon.png",
            "ui/icon.png",
            "ui/assets/icon.svg",
            "assets/icon.svg",
            "icon.svg",
            "assets/icon.icns",
            "ui/assets/icon.icns",
        ];
        for cand in candidates {
            let p = app_dir.join(cand);
            if p.exists() {
                return Some(p);
            }
        }
        None
    }

    /// Resolve categories for FreeDesktop .desktop generation
    pub fn resolve_categories(&self) -> String {
        if let Some(ref cat) = self.categories {
            if !cat.trim().is_empty() {
                let trimmed = cat.trim();
                if trimmed.ends_with(';') {
                    return trimmed.to_string();
                } else {
                    return format!("{};", trimmed);
                }
            }
        }
        "AudioVideo;Video;Player;Network;".to_string()
    }

    /// Resolve comment / description for FreeDesktop .desktop generation
    pub fn resolve_comment(&self) -> String {
        if let Some(ref c) = self.comment {
            if !c.trim().is_empty() {
                return c.trim().to_string();
            }
        }
        format!("{} — aplicativo desktop by-lite", self.title)
    }
}

/// Package a directory into a `.byt` compressed archive.
pub fn pack(src_dir: &Path, output_path: &Path) -> Result<PathBuf> {
    if !src_dir.exists() || !src_dir.is_dir() {
        return Err(ByError::WindowCreateFailed(format!(
            "Source path {:?} is not a directory or does not exist",
            src_dir
        )));
    }

    // Ensure by-lite.json exists, or generate a sensible default
    let manifest_path = src_dir.join("by-lite.json");
    if !manifest_path.exists() {
        let default_manifest = ByManifest::default_for_dir(src_dir);
        default_manifest.save_to_file(&manifest_path)?;
        println!("[by-lite pack] Created default manifest: {:?}", manifest_path);
    } else {
        // Validate existing manifest
        let _ = ByManifest::from_file(&manifest_path)?;
    }

    // Ensure output parent directory exists
    if let Some(parent) = output_path.parent() {
        if !parent.as_os_str().is_empty() {
            fs::create_dir_all(parent).map_err(|e| {
                ByError::WindowCreateFailed(format!("Failed to create output directory {:?}: {}", parent, e))
            })?;
        }
    }

    let out_file = fs::File::create(output_path)
        .map_err(|e| ByError::WindowCreateFailed(format!("Failed to create archive {:?}: {}", output_path, e)))?;

    let enc = GzEncoder::new(out_file, Compression::best());
    let mut tar_builder = tar::Builder::new(enc);

    // Recursively append directory entries
    add_dir_to_tar(&mut tar_builder, src_dir, Path::new(""))?;

    let enc = tar_builder
        .into_inner()
        .map_err(|e| ByError::WindowCreateFailed(format!("Failed to finalize tar archive: {}", e)))?;

    enc.finish()
        .map_err(|e| ByError::WindowCreateFailed(format!("Failed to compress .byt archive: {}", e)))?;

    Ok(output_path.to_path_buf())
}

fn add_dir_to_tar<W: std::io::Write>(
    builder: &mut tar::Builder<W>,
    disk_dir: &Path,
    archive_prefix: &Path,
) -> Result<()> {
    let entries = fs::read_dir(disk_dir)
        .map_err(|e| ByError::WindowCreateFailed(format!("Failed to read directory {:?}: {}", disk_dir, e)))?;

    for entry_res in entries {
        let entry = entry_res.map_err(|e| ByError::WindowCreateFailed(e.to_string()))?;
        let path = entry.path();
        let file_name = entry.file_name();
        let name_str = file_name.to_string_lossy();

        // Skip ignored directories and files
        if name_str == ".git"
            || name_str == "target"
            || name_str == "node_modules"
            || name_str.ends_with(".byt")
            || name_str.starts_with('.')
            || name_str == ".DS_Store"
        {
            continue;
        }

        let archive_path = archive_prefix.join(&file_name);

        if path.is_dir() {
            add_dir_to_tar(builder, &path, &archive_path)?;
        } else if path.is_file() {
            let mut file = fs::File::open(&path)
                .map_err(|e| ByError::WindowCreateFailed(format!("Failed to open file {:?}: {}", path, e)))?;
            let metadata = file
                .metadata()
                .map_err(|e| ByError::WindowCreateFailed(format!("Failed to read metadata {:?}: {}", path, e)))?;

            let mut header = tar::Header::new_gnu();
            header.set_size(metadata.len());
            header.set_mode(metadata.permissions().mode());
            header.set_mtime(
                metadata
                    .modified()
                    .ok()
                    .and_then(|t| t.duration_since(std::time::UNIX_EPOCH).ok())
                    .map(|d| d.as_secs())
                    .unwrap_or(0),
            );
            header.set_cksum();

            builder
                .append_data(&mut header, &archive_path, &mut file)
                .map_err(|e| ByError::WindowCreateFailed(format!("Failed to add file {:?} to archive: {}", path, e)))?;
        }
    }

    Ok(())
}

/// Unpack a `.byt` archive to the cache directory and return the extracted path and manifest.
pub fn unpack(archive_path: &Path, cache_root: Option<&Path>) -> Result<(PathBuf, ByManifest)> {
    if !archive_path.exists() {
        return Err(ByError::WindowCreateFailed(format!(
            "Archive {:?} does not exist",
            archive_path
        )));
    }

    let file_stem = archive_path
        .file_stem()
        .and_then(|s| s.to_str())
        .unwrap_or("app");

    let dest_dir = if let Some(root) = cache_root {
        root.join(file_stem)
    } else {
        get_default_cache_dir().join(file_stem)
    };

    let archive_mtime = fs::metadata(archive_path)
        .and_then(|m| m.modified())
        .unwrap_or(std::time::SystemTime::UNIX_EPOCH);

    let manifest_path = dest_dir.join("by-lite.json");
    let needs_extract = if !dest_dir.exists() || !manifest_path.exists() {
        true
    } else {
        let dest_mtime = fs::metadata(&manifest_path)
            .and_then(|m| m.modified())
            .unwrap_or(std::time::SystemTime::UNIX_EPOCH);
        archive_mtime > dest_mtime
    };

    if needs_extract {
        if dest_dir.exists() {
            let _ = fs::remove_dir_all(&dest_dir);
        }
        fs::create_dir_all(&dest_dir)
            .map_err(|e| ByError::WindowCreateFailed(format!("Failed to create dir {:?}: {}", dest_dir, e)))?;

        let file = fs::File::open(archive_path)
            .map_err(|e| ByError::WindowCreateFailed(format!("Failed to open archive {:?}: {}", archive_path, e)))?;

        let dec = GzDecoder::new(file);
        let mut archive = tar::Archive::new(dec);

        archive
            .unpack(&dest_dir)
            .map_err(|e| ByError::WindowCreateFailed(format!("Failed to unpack {:?}: {}", archive_path, e)))?;

        // Ensure binaries in bin/ have executable permissions
        let bin_dir = dest_dir.join("bin");
        if bin_dir.is_dir() {
            if let Ok(entries) = fs::read_dir(&bin_dir) {
                for entry in entries.flatten() {
                    let p = entry.path();
                    if p.is_file() {
                        if let Ok(meta) = p.metadata() {
                            let mut perms = meta.permissions();
                            perms.set_mode(perms.mode() | 0o755);
                            let _ = fs::set_permissions(&p, perms);
                        }
                    }
                }
            }
        }
    }

    let manifest = ByManifest::from_file(&manifest_path)?;
    Ok((dest_dir, manifest))
}

/// Retrieve default cache directory for by-lite applications
pub fn get_default_cache_dir() -> PathBuf {
    if let Ok(xdg) = std::env::var("XDG_CACHE_HOME") {
        PathBuf::from(xdg).join("by-lite/apps")
    } else if let Ok(home) = std::env::var("HOME") {
        PathBuf::from(home).join(".cache/by-lite/apps")
    } else {
        PathBuf::from("/tmp/by-lite-apps")
    }
}

/// Check if a TCP port is open locally
pub fn is_port_open(port: u16) -> bool {
    let addr = format!("127.0.0.1:{}", port);
    TcpStream::connect_timeout(
        &addr.parse().unwrap(),
        Duration::from_millis(150),
    )
    .is_ok()
}

/// Wait until a TCP port is open, up to timeout_ms
pub fn wait_for_port(port: u16, timeout_ms: u64) -> bool {
    let start = Instant::now();
    let timeout = Duration::from_millis(timeout_ms);
    while start.elapsed() < timeout {
        if is_port_open(port) {
            return true;
        }
        std::thread::sleep(Duration::from_millis(50));
    }
    is_port_open(port)
}
