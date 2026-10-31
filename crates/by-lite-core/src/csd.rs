//! Client-Side Decoration (CSD) runtime integration and script injection.

pub const CSD_RUNTIME_SCRIPT: &str = r#"
(function() {
    if (window.__BY_LITE__) return;

    const callbacks = new Map();
    let callbackCounter = 0;

    const by = {
        close() {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'close' });
        },
        minimize() {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'minimize' });
        },
        maximize() {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'maximize' });
        },
        unmaximize() {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'unmaximize' });
        },
        toggleMaximize() {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'toggle_maximize' });
        },
        fullscreen() {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'fullscreen' });
        },
        resize(width, height) {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'resize', width, height });
        },
        startDrag() {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'drag' });
        },
        drag() {
            this.startDrag();
        },
        startResize(edge) {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'start_resize', edge });
        },
        resizeEdge(edge) {
            this.startResize(edge);
        },
        setTitle(title) {
            window.webkit?.messageHandlers?.by_lite?.postMessage({ action: 'set_title', title });
        },
        postMessage(msg) {
            window.webkit?.messageHandlers?.by_lite?.postMessage(msg);
        },
        invoke(cmd, args) {
            return new Promise((resolve, reject) => {
                const id = 'call_' + (++callbackCounter) + '_' + Date.now();
                callbacks.set(id, { resolve, reject });
                window.webkit?.messageHandlers?.by_lite?.postMessage({
                    action: 'invoke',
                    id,
                    cmd,
                    args
                });
            });
        }
    };

    window.__BY_LITE__ = by;
    window.byLite = by;
    window.by = by;

    window.__BY_LITE_RESOLVE__ = function(id, result) {
        if (callbacks.has(id)) {
            const { resolve } = callbacks.get(id);
            callbacks.delete(id);
            resolve(result);
        }
    };

    window.__BY_LITE_REJECT__ = function(id, error) {
        if (callbacks.has(id)) {
            const { reject } = callbacks.get(id);
            callbacks.delete(id);
            reject(new Error(error));
        }
    };

    window.__BY_LITE_STATE_CHANGED__ = function(state) {
        window.dispatchEvent(new CustomEvent('by-state-changed', { detail: state }));
        document.documentElement.dataset.byMaximized = state.maximized ? 'true' : 'false';
        document.documentElement.dataset.byFullscreen = state.fullscreen ? 'true' : 'false';
    };

    // Auto-bind declarative HTML attributes & resize borders
    function setupDeclarativeCsd() {
        // Inject resize styling
        if (!document.getElementById('by-csd-styles')) {
            const style = document.createElement('style');
            style.id = 'by-csd-styles';
            style.textContent = `
                .by-resize-handle {
                    position: fixed;
                    z-index: 99999999;
                    user-select: none;
                    -webkit-user-select: none;
                }
                .by-resize-top { top: 0; left: 8px; right: 8px; height: 5px; cursor: n-resize; }
                .by-resize-bottom { bottom: 0; left: 8px; right: 8px; height: 5px; cursor: s-resize; }
                .by-resize-left { left: 0; top: 8px; bottom: 8px; width: 5px; cursor: w-resize; }
                .by-resize-right { right: 0; top: 8px; bottom: 8px; width: 5px; cursor: e-resize; }
                .by-resize-top-left { top: 0; left: 0; width: 12px; height: 12px; cursor: nw-resize; }
                .by-resize-top-right { top: 0; right: 0; width: 12px; height: 12px; cursor: ne-resize; }
                .by-resize-bottom-left { bottom: 0; left: 0; width: 12px; height: 12px; cursor: sw-resize; }
                .by-resize-bottom-right { bottom: 0; right: 0; width: 12px; height: 12px; cursor: se-resize; }
                html[data-by-maximized="true"] .by-resize-handle,
                html[data-by-fullscreen="true"] .by-resize-handle {
                    display: none !important;
                }
            `;
            (document.head || document.documentElement).appendChild(style);
        }

        // Inject automatic resize perimeter handles if not disabled
        const noAutoResize = document.querySelector('[data-by-no-auto-resize]') ||
            document.documentElement.hasAttribute('data-by-no-auto-resize') ||
            document.body?.hasAttribute('data-by-no-auto-resize');

        if (!noAutoResize && !document.getElementById('by-resize-container') && document.body) {
            const container = document.createElement('div');
            container.id = 'by-resize-container';
            const edges = [
                ['top', 'by-resize-top'],
                ['bottom', 'by-resize-bottom'],
                ['left', 'by-resize-left'],
                ['right', 'by-resize-right'],
                ['top-left', 'by-resize-top-left'],
                ['top-right', 'by-resize-top-right'],
                ['bottom-left', 'by-resize-bottom-left'],
                ['bottom-right', 'by-resize-bottom-right']
            ];
            edges.forEach(([edge, cls]) => {
                const el = document.createElement('div');
                el.className = `by-resize-handle ${cls}`;
                el.dataset.byResize = edge;
                container.appendChild(el);
            });
            document.body.appendChild(container);
        }

        // Global click handler for actions
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('[data-by-action]');
            if (!btn) return;
            const action = btn.getAttribute('data-by-action');
            if (action === 'close') by.close();
            else if (action === 'minimize') by.minimize();
            else if (action === 'maximize') by.maximize();
            else if (action === 'unmaximize') by.unmaximize();
            else if (action === 'toggle-maximize' || action === 'toggle_maximize') by.toggleMaximize();
            else if (action === 'fullscreen') by.fullscreen();
        });

        // Double click on drag regions toggles maximize
        document.addEventListener('dblclick', function(e) {
            const dragRegion = e.target.closest('[data-by-drag], .by-drag-region');
            if (dragRegion && !e.target.closest('button, a, input, textarea, select, [data-by-no-drag]')) {
                by.toggleMaximize();
            }
        });

        // Pointer down handling for both resize handles and drag regions
        document.addEventListener('pointerdown', function(e) {
            if (e.button !== 0) return;

            // Check if clicking a resize handle
            const resizeEl = e.target.closest('[data-by-resize], .by-resize-handle');
            if (resizeEl) {
                const edge = resizeEl.getAttribute('data-by-resize') || resizeEl.dataset.byResize;
                if (edge) {
                    by.startResize(edge);
                    e.preventDefault();
                    return;
                }
            }

            // Check if clicking a drag region
            const dragRegion = e.target.closest('[data-by-drag], .by-drag-region');
            if (dragRegion && !e.target.closest('button, a, input, textarea, select, [data-by-no-drag]')) {
                by.startDrag();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupDeclarativeCsd);
    } else {
        setupDeclarativeCsd();
    }
})();
"#;
