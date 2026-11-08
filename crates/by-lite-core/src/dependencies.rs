//! Dynamic system dependency checking and automated resolution for by-lite applications.

use crate::error::{ByError, Result};
use crate::package::DependencySpec;
use std::env;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::Command;

#[derive(Debug, Clone)]
pub struct DistroInfo {
    pub id: String,
    pub id_like: String,
    pub name: String,
    pub package_manager: String, // "pacman", "apt", "dnf", "zypper", "apk", "unknown"
}

impl DistroInfo {
    pub fn detect() -> Self {
        let mut id = "unknown".to_string();
        let mut id_like = "".to_string();
        let mut name = "Linux".to_string();

        if let Ok(content) = fs::read_to_string("/etc/os-release")
            .or_else(|_| fs::read_to_string("/usr/lib/os-release"))
        {
            for line in content.lines() {
                let trimmed = line.trim();
                if let Some(val) = trimmed.strip_prefix("ID=") {
                    id = val.trim_matches('"').trim_matches('\'').to_lowercase();
                } else if let Some(val) = trimmed.strip_prefix("ID_LIKE=") {
                    id_like = val.trim_matches('"').trim_matches('\'').to_lowercase();
                } else if let Some(val) = trimmed.strip_prefix("PRETTY_NAME=") {
                    name = val.trim_matches('"').trim_matches('\'').to_string();
                }
            }
        }

        let combined = format!("{} {}", id, id_like);
        let package_manager = if combined.contains("arch")
            || combined.contains("manjaro")
            || combined.contains("endeavour")
            || combined.contains("cachyos")
            || combined.contains("artix")
        {
            "pacman".to_string()
        } else if combined.contains("debian")
            || combined.contains("ubuntu")
            || combined.contains("mint")
            || combined.contains("pop")
            || combined.contains("elementary")
            || combined.contains("zorin")
        {
            "apt".to_string()
        } else if combined.contains("fedora")
            || combined.contains("rhel")
            || combined.contains("centos")
            || combined.contains("rocky")
            || combined.contains("alma")
        {
            "dnf".to_string()
        } else if combined.contains("opensuse") || combined.contains("suse") {
            "zypper".to_string()
        } else if combined.contains("alpine") {
            "apk".to_string()
        } else if is_command_in_path("pacman") {
            "pacman".to_string()
        } else if is_command_in_path("apt-get") {
            "apt".to_string()
        } else if is_command_in_path("dnf") {
            "dnf".to_string()
        } else if is_command_in_path("zypper") {
            "zypper".to_string()
        } else {
            "unknown".to_string()
        };

        Self {
            id,
            id_like,
            name,
            package_manager,
        }
    }
}

/// Checks if a command exists in PATH or standard system directories
pub fn is_command_in_path(cmd: &str) -> bool {
    // 1. Check PATH
    if let Ok(path_var) = env::var("PATH") {
        for dir in env::split_paths(&path_var) {
            let candidate = dir.join(cmd);
            if candidate.is_file() {
                return true;
            }
        }
    }

    // 2. Check standard system locations
    let common_dirs = [
        "/usr/bin",
        "/usr/local/bin",
        "/bin",
        "/opt/homebrew/bin",
    ];
    for dir in &common_dirs {
        if Path::new(dir).join(cmd).is_file() {
            return true;
        }
    }

    // 3. Check user home bin dirs
    if let Ok(home) = env::var("HOME") {
        let home_bin = PathBuf::from(home).join(".local/bin").join(cmd);
        if home_bin.is_file() {
            return true;
        }
    }

    false
}

/// Dynamically discovers which package provides a given command on this system.
/// Avoids hardcoded static package names that become obsolete over time.
pub fn discover_package_name(distro: &DistroInfo, cmd: &str) -> String {
    match distro.package_manager.as_str() {
        "pacman" => {
            // 1. Check exact match in sync database: pacman -Ssq "^<cmd>$"
            if let Ok(output) = Command::new("pacman")
                .args(["-Ssq", &format!("^{}$", cmd)])
                .output()
            {
                if output.status.success() {
                    let text = String::from_utf8_lossy(&output.stdout);
                    if let Some(first) = text.lines().next() {
                        let trimmed = first.trim();
                        if !trimmed.is_empty() {
                            return trimmed.to_string();
                        }
                    }
                }
            }

            // 2. Query file owner if pacman files DB (-F) is present: pacman -Fq /usr/bin/<cmd>
            if let Ok(output) = Command::new("pacman")
                .args(["-Fq", &format!("/usr/bin/{}", cmd)])
                .output()
            {
                if output.status.success() {
                    let text = String::from_utf8_lossy(&output.stdout);
                    if let Some(first) = text.lines().next() {
                        let trimmed = first.trim();
                        if let Some((_repo, pkg)) = trimmed.split_once('/') {
                            return pkg.to_string();
                        } else if !trimmed.is_empty() {
                            return trimmed.to_string();
                        }
                    }
                }
            }
            cmd.to_string()
        }
        "apt" => {
            // 1. Check apt-cache search exact name
            if let Ok(output) = Command::new("apt-cache")
                .args(["--names-only", "search", &format!("^{}$", cmd)])
                .output()
            {
                if output.status.success() {
                    let text = String::from_utf8_lossy(&output.stdout);
                    if let Some(first) = text.lines().next() {
                        if let Some(pkg) = first.split_whitespace().next() {
                            return pkg.to_string();
                        }
                    }
                }
            }

            // 2. Check Ubuntu/Debian command-not-found lookup helper if available
            if Path::new("/usr/lib/command-not-found").is_file() {
                if let Ok(output) = Command::new("/usr/lib/command-not-found")
                    .arg(cmd)
                    .output()
                {
                    let text = String::from_utf8_lossy(&output.stdout);
                    for line in text.lines() {
                        if line.contains("apt install") {
                            if let Some(pkg) = line.split_whitespace().last() {
                                return pkg.to_string();
                            }
                        }
                    }
                }
            }
            cmd.to_string()
        }
        "dnf" => {
            // In DNF, we can specify the file path directly! DNF resolves what package provides /usr/bin/<cmd>
            format!("/usr/bin/{}", cmd)
        }
        "zypper" => {
            cmd.to_string()
        }
        _ => cmd.to_string(),
    }
}

/// Ask user for confirmation (GUI dialog with kdialog/zenity or CLI prompt)
pub fn prompt_user_for_installation(app_title: &str, distro: &DistroInfo, missing: &[(&DependencySpec, String)]) -> bool {
    let mut details = String::new();
    for (dep, pkg) in missing {
        details.push_str(&format!("• {}: {} (pacote: {})\n", dep.command(), dep.description(), pkg));
    }

    let message = format!(
        "O aplicativo '{}' precisa dos seguintes recursos no seu sistema para funcionar:\n\n{}\nDistribuição detectada: {}\nGerenciador de pacotes: {}\n\nDeseja que o By-Lite instale os recursos necessários automaticamente?",
        app_title, details, distro.name, distro.package_manager
    );

    // Try kdialog first (supports macOS ByDialog / KDE native)
    if is_command_in_path("kdialog") {
        if let Ok(status) = Command::new("kdialog")
            .args(["--title", "By-Lite — Recursos Necessários", "--yesno", &message])
            .status()
        {
            return status.success();
        }
    }

    // Try zenity
    if is_command_in_path("zenity") {
        if let Ok(status) = Command::new("zenity")
            .args(["--question", "--title=By-Lite — Recursos Necessários", &format!("--text={}", message)])
            .status()
        {
            return status.success();
        }
    }

    // Terminal fallback
    println!("\n=======================================================");
    println!("By-Lite — Verificação de Recursos Necessários");
    println!("=======================================================");
    println!("{}", message);
    print!("Instalar agora? [S/n]: ");
    use std::io::{self, Write};
    let _ = io::stdout().flush();
    let mut input = String::new();
    if io::stdin().read_line(&mut input).is_ok() {
        let answer = input.trim().to_lowercase();
        return answer.is_empty() || answer == "s" || answer == "y" || answer == "sim" || answer == "yes";
    }

    false
}

/// Runs the package manager command with polkit / pkexec
pub fn install_packages(distro: &DistroInfo, packages: &[String]) -> Result<()> {
    if packages.is_empty() {
        return Ok(());
    }

    let pkgs_joined = packages.join(" ");
    println!("[by-lite] Solicitando permissão para instalar recursos via {}: {}", distro.package_manager, pkgs_joined);

    let mut cmd = Command::new("pkexec");
    match distro.package_manager.as_str() {
        "pacman" => {
            cmd.arg("pacman").arg("-S").arg("--noconfirm").args(packages);
        }
        "apt" => {
            cmd.arg("apt-get").arg("install").arg("-y").args(packages);
        }
        "dnf" => {
            cmd.arg("dnf").arg("install").arg("-y").args(packages);
        }
        "zypper" => {
            cmd.arg("zypper").arg("in").arg("-y").args(packages);
        }
        _ => {
            cmd.arg("pacman").arg("-S").arg("--noconfirm").args(packages);
        }
    }

    let status = cmd.status().map_err(|e| {
        ByError::WindowCreateFailed(format!("Falha ao executar instalador com pkexec: {}", e))
    })?;

    if !status.success() {
        return Err(ByError::WindowCreateFailed(
            "A instalação de dependências foi cancelada ou falhou.".to_string(),
        ));
    }

    Ok(())
}

/// Ensures all declared dependencies in manifest are satisfied, prompting user if missing.
pub fn ensure_dependencies(app_title: &str, dependencies: &[DependencySpec]) -> Result<()> {
    if dependencies.is_empty() {
        return Ok(());
    }

    let mut missing = Vec::new();
    for dep in dependencies {
        if !is_command_in_path(dep.command()) {
            missing.push(dep);
        }
    }

    if missing.is_empty() {
        return Ok(());
    }

    let distro = DistroInfo::detect();
    let mut missing_with_pkg = Vec::new();
    let mut pkgs_to_install = Vec::new();

    for dep in missing {
        let pkg = discover_package_name(&distro, dep.command());
        if !pkgs_to_install.contains(&pkg) {
            pkgs_to_install.push(pkg.clone());
        }
        missing_with_pkg.push((dep, pkg));
    }

    let confirmed = prompt_user_for_installation(app_title, &distro, &missing_with_pkg);
    if !confirmed {
        return Err(ByError::WindowCreateFailed(
            "Execução cancelada: Recursos necessários não foram instalados.".to_string(),
        ));
    }

    install_packages(&distro, &pkgs_to_install)?;

    // Verify all are now present
    let mut still_missing = Vec::new();
    for dep in dependencies {
        if !is_command_in_path(dep.command()) {
            still_missing.push(dep.command());
        }
    }

    if !still_missing.is_empty() {
        return Err(ByError::WindowCreateFailed(format!(
            "Alguns recursos ainda não estão acessíveis no sistema: {:?}",
            still_missing
        )));
    }

    println!("[by-lite] Todos os recursos necessários foram verificados e instalados com sucesso!");
    Ok(())
}
