use by_lite_core::ipc::{IpcMessage, IpcRouter};
use by_lite_core::wayland::parse_resize_edge;
use by_lite_sys::*;

#[test]
fn test_ipc_router_command_handling() {
    let mut router = IpcRouter::new();

    router.register("add", |args| {
        let args = args.ok_or_else(|| "Missing args".to_string())?;
        let a = args.get("a").and_then(|v| v.as_i64()).unwrap_or(0);
        let b = args.get("b").and_then(|v| v.as_i64()).unwrap_or(0);
        Ok(serde_json::json!({ "sum": a + b }))
    });

    let result = router.handle_invoke("add", Some(serde_json::json!({ "a": 10, "b": 32 })));
    assert!(result.is_ok());
    let value = result.unwrap();
    assert_eq!(value["sum"], 42);

    let unknown = router.handle_invoke("non_existent", None);
    assert!(unknown.is_err());
}

#[test]
fn test_parse_resize_edge() {
    // Number values
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(1))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(2))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(4))), Some(XDG_TOPLEVEL_RESIZE_EDGE_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(5))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(6))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(8))), Some(XDG_TOPLEVEL_RESIZE_EDGE_RIGHT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(9))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_RIGHT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(10))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_RIGHT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(0))), None);
    assert_eq!(parse_resize_edge(Some(&serde_json::json!(99))), None);

    // Cardinal string values
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("top"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("n"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("bottom"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("s"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("left"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("w"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("right"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_RIGHT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("e"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_RIGHT));

    // Corner string values
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("top-left"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("nw"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("top-right"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_RIGHT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("ne"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_RIGHT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("bottom-left"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("sw"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_LEFT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("bottom-right"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_RIGHT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("se"))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_RIGHT));

    // Object wrapping
    assert_eq!(parse_resize_edge(Some(&serde_json::json!({ "edge": "se" }))), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_RIGHT));
    assert_eq!(parse_resize_edge(Some(&serde_json::json!({ "direction": "top" }))), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP));

    // Invalid & None
    assert_eq!(parse_resize_edge(Some(&serde_json::json!("invalid"))), None);
    assert_eq!(parse_resize_edge(None), None);
}

#[test]
fn test_ipc_drag_and_resize_messages() {
    let json_drag = r#"{"action":"drag"}"#;
    let msg_drag: IpcMessage = serde_json::from_str(json_drag).expect("parse drag");
    assert_eq!(msg_drag.action.as_deref(), Some("drag"));

    let json_resize_str = r#"{"action":"start_resize","edge":"bottom-right"}"#;
    let msg_resize_str: IpcMessage = serde_json::from_str(json_resize_str).expect("parse resize");
    assert_eq!(msg_resize_str.action.as_deref(), Some("start_resize"));
    assert_eq!(parse_resize_edge(msg_resize_str.edge.as_ref()), Some(XDG_TOPLEVEL_RESIZE_EDGE_BOTTOM_RIGHT));

    let json_resize_num = r#"{"action":"start_resize","edge":5}"#;
    let msg_resize_num: IpcMessage = serde_json::from_str(json_resize_num).expect("parse resize num");
    assert_eq!(parse_resize_edge(msg_resize_num.edge.as_ref()), Some(XDG_TOPLEVEL_RESIZE_EDGE_TOP_LEFT));
}
