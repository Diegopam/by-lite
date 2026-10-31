use by_lite_core::package::{pack, unpack, ByManifest};
use std::fs;
use std::os::unix::fs::PermissionsExt;

#[test]
fn test_package_pack_and_unpack_roundtrip() {
    let tmp = std::env::temp_dir().join(format!("by_lite_test_{}", std::process::id()));
    let src_dir = tmp.join("my_app");
    let ui_dir = src_dir.join("ui");
    let bin_dir = src_dir.join("bin");

    fs::create_dir_all(&ui_dir).expect("create ui dir");
    fs::create_dir_all(&bin_dir).expect("create bin dir");

    let manifest_content = r#"{
        "name": "super-calc",
        "title": "Super Calculator",
        "version": "2.0.0",
        "width": 1024,
        "height": 768,
        "resizable": true,
        "csd": true,
        "devtools": true,
        "entrypoint": "ui/index.html",
        "backend": {
            "command": "bin/server",
            "args": ["--listen", "127.0.0.1:8080"],
            "port": 8080,
            "wait_ms": 2000
        }
    }"#;
    fs::write(src_dir.join("by-lite.json"), manifest_content).expect("write manifest");
    fs::write(ui_dir.join("index.html"), "<h1>Hello from by-lite bundle</h1>").expect("write html");

    let bin_file = bin_dir.join("server");
    fs::write(&bin_file, "#!/bin/sh\necho ok").expect("write bin");
    let mut perms = fs::metadata(&bin_file).unwrap().permissions();
    perms.set_mode(0o755);
    fs::set_permissions(&bin_file, perms).expect("set exec perms");

    // 1. Pack
    let byt_output = tmp.join("super-calc.byt");
    let packed_path = pack(&src_dir, &byt_output).expect("pack archive");
    assert!(packed_path.exists());
    assert!(fs::metadata(&packed_path).unwrap().len() > 0);

    // 2. Unpack
    let cache_dir = tmp.join("cache_dest");
    let (dest_dir, manifest) = unpack(&packed_path, Some(&cache_dir)).expect("unpack archive");

    assert_eq!(manifest.name, "super-calc");
    assert_eq!(manifest.title, "Super Calculator");
    assert_eq!(manifest.version, "2.0.0");
    assert_eq!(manifest.width, 1024);
    assert_eq!(manifest.height, 768);
    assert!(manifest.resizable);
    assert!(manifest.csd);

    let backend = manifest.resolve_backend().expect("backend exists");
    assert_eq!(backend.command, "bin/server");
    assert_eq!(backend.args, vec!["--listen", "127.0.0.1:8080"]);
    assert_eq!(backend.port, Some(8080));
    assert_eq!(backend.wait_ms, Some(2000));

    // Verify unpacked files
    let html = fs::read_to_string(dest_dir.join("ui/index.html")).expect("read unpacked html");
    assert_eq!(html, "<h1>Hello from by-lite bundle</h1>");

    let unpacked_bin = dest_dir.join("bin/server");
    assert!(unpacked_bin.exists());
    let unpacked_mode = fs::metadata(&unpacked_bin).unwrap().permissions().mode();
    assert_ne!(unpacked_mode & 0o111, 0, "Binary must be executable");

    // Cleanup
    let _ = fs::remove_dir_all(tmp);
}

#[test]
fn test_default_manifest_generation() {
    let tmp = std::env::temp_dir().join(format!("by_lite_test_default_{}", std::process::id()));
    let src_dir = tmp.join("simple_player");
    fs::create_dir_all(&src_dir).expect("create dir");
    fs::write(src_dir.join("index.html"), "<h1>Player</h1>").expect("write index");

    let manifest = ByManifest::default_for_dir(&src_dir);
    assert_eq!(manifest.name, "simple-player");
    assert_eq!(manifest.title, "simple_player");
    assert_eq!(manifest.entrypoint, "index.html");

    // Cleanup
    let _ = fs::remove_dir_all(tmp);
}
