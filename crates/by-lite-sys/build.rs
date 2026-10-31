use std::process::Command;

fn main() {
    println!("cargo:rerun-if-changed=build.rs");

    // Required packages for by-lite runtime
    let packages = [
        "wpe-webkit-2.0",
        "wpe-platform-2.0",
        "glib-2.0",
        "gobject-2.0",
    ];

    let mut all_found = true;
    for pkg in &packages {
        let status = Command::new("pkg-config")
            .args(["--exists", pkg])
            .status();

        match status {
            Ok(s) if s.success() => {}
            _ => {
                eprintln!("cargo:warning=pkg-config could not find `{}`", pkg);
                all_found = false;
            }
        }
    }

    if !all_found {
        panic!("Missing required system dependencies for by-lite (WPE WebKit 2.0 / wpe-platform / glib-2.0).");
    }

    // Query pkg-config for linker flags
    let output = Command::new("pkg-config")
        .args(["--libs", "wpe-webkit-2.0", "wpe-platform-2.0", "glib-2.0", "gobject-2.0"])
        .output()
        .expect("Failed to execute pkg-config --libs");

    let libs_str = String::from_utf8_lossy(&output.stdout);
    for token in libs_str.split_whitespace() {
        if let Some(lib) = token.strip_prefix("-l") {
            println!("cargo:rustc-link-lib={}", lib);
        } else if let Some(search_path) = token.strip_prefix("-L") {
            println!("cargo:rustc-link-search=native={}", search_path);
        }
    }

    // Ensure core libraries are linked
    println!("cargo:rustc-link-lib=WPEWebKit-2.0");
    println!("cargo:rustc-link-lib=glib-2.0");
    println!("cargo:rustc-link-lib=gobject-2.0");
    println!("cargo:rustc-link-lib=gio-2.0");
    println!("cargo:rustc-link-lib=wayland-client");
}
