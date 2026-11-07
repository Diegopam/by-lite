/*!
 * By-Lite macOS UI Toolkit SDK — Self-Injecting Bundle (CSS + JS) v1.0.0
 */
(function() {
  if (window.__BY_LITE_MACOS_SDK_LOADED__) return;
  window.__BY_LITE_MACOS_SDK_LOADED__ = true;

  var cssText = "/*!\n * By-Lite macOS UI Toolkit SDK \u2014 Stylesheet Bundle v1.0.0\n * Design System Tokens, Themes (Light/Dark) & Component Styles\n */\n\n/* ---- MODULE: src/design-system/tokens/tokens.css ---- */\n/* ---------- Design tokens: structure (theme independent) ---------- */\n:root {\n  --ui-font: -apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Inter\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  --ui-font-mono: ui-monospace, \"SF Mono\", Menlo, Consolas, \"DejaVu Sans Mono\", monospace;\n  --ui-fs-xs: 11px; --ui-fs-sm: 12px; --ui-fs-md: 13px; --ui-fs-lg: 15px; --ui-fs-xl: 18px; --ui-fs-2xl: 24px; --ui-fs-3xl: 32px;\n  --ui-fw-regular: 400; --ui-fw-medium: 500; --ui-fw-semibold: 600; --ui-fw-bold: 700;\n  --ui-lh: 1.4; --ui-lh-tight: 1.2;\n\n  --ui-space-0: 0px; --ui-space-1: 4px; --ui-space-2: 8px; --ui-space-3: 12px; --ui-space-4: 16px; --ui-space-5: 20px;\n  --ui-space-6: 24px; --ui-space-7: 28px; --ui-space-8: 32px; --ui-space-9: 36px; --ui-space-10: 40px; --ui-space-11: 44px; --ui-space-12: 48px;\n\n  --ui-radius-xs: 4px; --ui-radius-sm: 6px; --ui-radius-md: 8px; --ui-radius-lg: 12px; --ui-radius-xl: 16px; --ui-radius-full: 999px;\n  --ui-border-w: 1px;\n\n  --ui-ctl-h-sm: 24px; --ui-ctl-h-md: 28px; --ui-ctl-h-lg: 36px;\n  --ui-icon-sm: 14px; --ui-icon-md: 16px; --ui-icon-lg: 20px; --ui-icon-xl: 28px;\n  --ui-sidebar-w: 220px; --ui-menubar-h: 28px; --ui-titlebar-h: 38px; --ui-dock-size: 52px; --ui-toolbar-h: 44px;\n\n  --ui-dur-fast: 100ms; --ui-dur: 200ms; --ui-dur-slow: 350ms;\n  --ui-ease: cubic-bezier(.22,.8,.3,1); --ui-ease-spring: cubic-bezier(.34,1.56,.64,1);\n  --ui-blur: 22px;\n  --ui-opacity-disabled: .45; --ui-opacity-hover: .08; --ui-opacity-pressed: .14;\n\n  --ui-z-sticky: 100; --ui-z-menubar: 900; --ui-z-dropdown: 1000; --ui-z-drawer: 1100;\n  --ui-z-modal: 1200; --ui-z-popover: 1300; --ui-z-toast: 1400; --ui-z-tooltip: 1500;\n}\n@media (prefers-reduced-motion: reduce) { :root { --ui-dur-fast: 0ms; --ui-dur: 0ms; --ui-dur-slow: 0ms; } }\nhtml[data-motion=\"reduce\"] { --ui-dur-fast: 0ms; --ui-dur: 0ms; --ui-dur-slow: 0ms; }\n\n/* ---- MODULE: src/design-system/themes/light-dark.css ---- */\n/* ---------- Design tokens: colour schemes. Custom themes are injected by ThemeManager ---------- */\n:root, [data-scheme=\"light\"] {\n  color-scheme: light;\n  --ui-bg: #f4f4f6; --ui-bg-content: #ffffff; --ui-bg-sidebar: #ececf0;\n  --ui-surface: #ffffff; --ui-surface-2: #f3f3f6; --ui-surface-3: #e8e8ed;\n  --ui-text: #1d1d1f; --ui-text-2: #5b5b63; --ui-text-3: #8a8a92; --ui-text-on-accent: #ffffff;\n  --ui-border: rgba(0,0,0,.1); --ui-border-strong: rgba(0,0,0,.2); --ui-separator: rgba(0,0,0,.08);\n  --ui-accent: #0a7aff; --ui-accent-hover: #006be0; --ui-accent-soft: rgba(10,122,255,.12);\n  --ui-danger: #e5342a; --ui-danger-soft: rgba(229,52,42,.12);\n  --ui-success: #22a447; --ui-success-soft: rgba(34,164,71,.13);\n  --ui-warning: #e08700; --ui-warning-soft: rgba(224,135,0,.14);\n  --ui-info: #1a8fd6; --ui-info-soft: rgba(26,143,214,.13);\n  --ui-hover: rgba(0,0,0,.05); --ui-pressed: rgba(0,0,0,.1); --ui-selected: var(--ui-accent-soft);\n  --ui-glass: rgba(246,246,249,.72); --ui-glass-solid: #f6f6f9; --ui-glass-border: rgba(255,255,255,.55);\n  --ui-shadow-1: 0 1px 2px rgba(0,0,0,.08), 0 0 0 .5px rgba(0,0,0,.06);\n  --ui-shadow-2: 0 4px 14px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.08);\n  --ui-shadow-3: 0 12px 32px rgba(0,0,0,.18), 0 0 0 .5px rgba(0,0,0,.12);\n  --ui-shadow-4: 0 24px 64px rgba(0,0,0,.28), 0 0 0 .5px rgba(0,0,0,.2);\n  --ui-focus-ring: #0a7aff;\n  --ui-control-bg: #ffffff; --ui-control-border: rgba(0,0,0,.16);\n  --ui-wallpaper: radial-gradient(1200px 700px at 15% 10%, #8ec5ff 0%, transparent 60%), radial-gradient(900px 600px at 90% 20%, #ffb8d9 0%, transparent 55%), linear-gradient(160deg, #a8c0ff 0%, #c8b6ff 45%, #ffd6e7 100%);\n  --ui-code-bg: #f6f6f9; --ui-code-kw: #b3278f; --ui-code-str: #c4361d; --ui-code-num: #1c63d1; --ui-code-com: #7d8a99; --ui-code-fn: #3f7f2b;\n  --ui-chart-1: #0a7aff; --ui-chart-2: #30b455; --ui-chart-3: #ff9f0a; --ui-chart-4: #af52de; --ui-chart-5: #ff375f; --ui-chart-6: #20b2aa; --ui-chart-7: #e0c400; --ui-chart-8: #8e8e93;\n}\n[data-scheme=\"dark\"] {\n  color-scheme: dark;\n  --ui-bg: #1d1d1f; --ui-bg-content: #242427; --ui-bg-sidebar: #2a2a2e;\n  --ui-surface: #2a2a2e; --ui-surface-2: #333338; --ui-surface-3: #3d3d43;\n  --ui-text: #f5f5f7; --ui-text-2: #b2b2ba; --ui-text-3: #7d7d86; --ui-text-on-accent: #ffffff;\n  --ui-border: rgba(255,255,255,.11); --ui-border-strong: rgba(255,255,255,.22); --ui-separator: rgba(255,255,255,.09);\n  --ui-accent: #0a84ff; --ui-accent-hover: #3b9bff; --ui-accent-soft: rgba(10,132,255,.22);\n  --ui-danger: #ff5a50; --ui-danger-soft: rgba(255,90,80,.18);\n  --ui-success: #34c759; --ui-success-soft: rgba(52,199,89,.18);\n  --ui-warning: #ffa31a; --ui-warning-soft: rgba(255,163,26,.18);\n  --ui-info: #5ac8fa; --ui-info-soft: rgba(90,200,250,.18);\n  --ui-hover: rgba(255,255,255,.07); --ui-pressed: rgba(255,255,255,.13);\n  --ui-glass: rgba(42,42,46,.72); --ui-glass-solid: #2a2a2e; --ui-glass-border: rgba(255,255,255,.1);\n  --ui-shadow-1: 0 1px 2px rgba(0,0,0,.4), 0 0 0 .5px rgba(255,255,255,.06);\n  --ui-shadow-2: 0 4px 14px rgba(0,0,0,.45), 0 1px 3px rgba(0,0,0,.4);\n  --ui-shadow-3: 0 12px 32px rgba(0,0,0,.6), 0 0 0 .5px rgba(255,255,255,.12);\n  --ui-shadow-4: 0 24px 64px rgba(0,0,0,.7), 0 0 0 .5px rgba(255,255,255,.16);\n  --ui-focus-ring: #4aa3ff;\n  --ui-control-bg: #38383d; --ui-control-border: rgba(255,255,255,.16);\n  --ui-wallpaper: radial-gradient(1100px 700px at 20% 15%, #3b3a8f 0%, transparent 60%), radial-gradient(900px 600px at 85% 25%, #7a2c6e 0%, transparent 55%), linear-gradient(160deg, #10122b 0%, #1b1740 45%, #2a1233 100%);\n  --ui-code-bg: #1f1f23; --ui-code-kw: #ff7ab2; --ui-code-str: #ff8170; --ui-code-num: #8fb8ff; --ui-code-com: #7f8c98; --ui-code-fn: #7fd77a;\n  --ui-chart-1: #0a84ff; --ui-chart-2: #32d74b; --ui-chart-3: #ff9f0a; --ui-chart-4: #bf5af2; --ui-chart-5: #ff375f; --ui-chart-6: #40c8e0; --ui-chart-7: #ffd60a; --ui-chart-8: #98989d;\n}\n/* High contrast preference */\nhtml[data-contrast=\"high\"] { --ui-border: currentColor; --ui-border-strong: currentColor; --ui-text-2: var(--ui-text); --ui-text-3: var(--ui-text-2); --ui-control-border: currentColor; }\nhtml[data-contrast=\"high\"][data-scheme=\"light\"] { --ui-border: rgba(0,0,0,.6); --ui-control-border: rgba(0,0,0,.7); }\nhtml[data-contrast=\"high\"][data-scheme=\"dark\"] { --ui-border: rgba(255,255,255,.7); --ui-control-border: rgba(255,255,255,.8); }\n\n/* ---- MODULE: src/design-system/base.css ---- */\n*, *::before, *::after { box-sizing: border-box; }\n:where(html, body) { margin: 0; height: 100%; }\n:where(body) { font-family: var(--ui-font); font-size: var(--ui-fs-md); line-height: var(--ui-lh); color: var(--ui-text); background: var(--ui-bg); -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }\n:where(button, input, select, textarea) { font: inherit; color: inherit; }\n:where(button) { cursor: default; }\n:where(a) { color: var(--ui-accent); text-decoration: none; }\n:where(a:hover) { text-decoration: underline; }\n:where(h1,h2,h3,h4,h5,h6,p) { margin: 0; }\n:where(h1) { font-size: var(--ui-fs-3xl); line-height: var(--ui-lh-tight); font-weight: var(--ui-fw-bold); letter-spacing: -.02em; }\n:where(h2) { font-size: var(--ui-fs-2xl); line-height: var(--ui-lh-tight); font-weight: var(--ui-fw-semibold); letter-spacing: -.015em; }\n:where(h3) { font-size: var(--ui-fs-xl); font-weight: var(--ui-fw-semibold); }\n:where(h4) { font-size: var(--ui-fs-lg); font-weight: var(--ui-fw-semibold); }\n:where(h5,h6) { font-size: var(--ui-fs-md); font-weight: var(--ui-fw-semibold); }\n:where(code, kbd, pre, samp) { font-family: var(--ui-font-mono); }\n:where(button, input, select, textarea, a, [tabindex], summary):focus-visible { outline: 2px solid var(--ui-focus-ring); outline-offset: 1px; }\n:where(button, input, select, textarea):focus:not(:focus-visible) { outline: none; }\n::selection { background: var(--ui-accent-soft); }\n.ui-visually-hidden, ui-visually-hidden { position: absolute !important; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }\n[hidden] { display: none !important; }\n.ui-glass { background: var(--ui-glass-solid); }\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  .ui-glass { background: var(--ui-glass); -webkit-backdrop-filter: saturate(180%) blur(var(--ui-blur)); backdrop-filter: saturate(180%) blur(var(--ui-blur)); }\n}\n.ui-portal { display: contents; }\n.ui-overlay { position: fixed; }\n.ui-backdrop { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.28); }\n.ui-own { }\n/* Scrollbars */\n.ui-scroll, ui-scroll-area { scrollbar-width: thin; scrollbar-color: var(--ui-border-strong) transparent; }\n.ui-scroll::-webkit-scrollbar, ui-scroll-area::-webkit-scrollbar, ui-data-table .ui-dt-scroll::-webkit-scrollbar { width: 10px; height: 10px; }\n.ui-scroll::-webkit-scrollbar-thumb, ui-scroll-area::-webkit-scrollbar-thumb { background: var(--ui-border-strong); border-radius: 10px; border: 2px solid transparent; background-clip: content-box; }\n.ui-scroll::-webkit-scrollbar-track { background: transparent; }\n@keyframes ui-spin { to { transform: rotate(360deg); } }\n@keyframes ui-pulse { 0%,100% { opacity: 1 } 50% { opacity: .45 } }\n\n/* ---- MODULE: src/components/primitives/primitives.css ---- */\nui-icon { display: inline-flex; width: 1em; height: 1em; flex: none; vertical-align: -.14em; line-height: 1; }\nui-icon > svg { width: 100%; height: 100%; display: block; }\nui-spinner { display: inline-block; width: var(--ui-spin-size, 16px); height: var(--ui-spin-size, 16px); border: 2px solid var(--ui-border-strong); border-top-color: var(--ui-accent); border-radius: 50%; animation: ui-spin .75s linear infinite; vertical-align: middle; }\nui-spinner[size=\"sm\"] { --ui-spin-size: 12px; } ui-spinner[size=\"lg\"] { --ui-spin-size: 28px; border-width: 3px; } ui-spinner[size=\"xl\"] { --ui-spin-size: 44px; border-width: 4px; }\nui-progress { display: block; }\nui-progress[type=\"circular\"] { display: inline-block; position: relative; width: var(--ui-prog-size, 44px); height: var(--ui-prog-size, 44px); }\n.ui-prog-track { height: var(--ui-prog-h, 6px); background: var(--ui-surface-3); border-radius: var(--ui-radius-full); overflow: hidden; }\n.ui-prog-bar { height: 100%; width: 0; background: var(--ui-prog-color, var(--ui-accent)); border-radius: inherit; transition: width var(--ui-dur) var(--ui-ease); }\nui-progress[indeterminate] .ui-prog-bar { width: 40% !important; animation: ui-indet 1.2s var(--ui-ease) infinite; }\n@keyframes ui-indet { 0% { transform: translateX(-100%); } 100% { transform: translateX(250%); } }\nui-progress[variant=\"success\"] { --ui-prog-color: var(--ui-success); } ui-progress[variant=\"danger\"] { --ui-prog-color: var(--ui-danger); } ui-progress[variant=\"warning\"] { --ui-prog-color: var(--ui-warning); }\n.ui-prog-head { display: flex; justify-content: space-between; font-size: var(--ui-fs-sm); color: var(--ui-text-2); margin-bottom: 4px; }\n.ui-prog-circ { width: 100%; height: 100%; transform: rotate(-90deg); } .ui-prog-circ circle { fill: none; stroke-width: 4; } .ui-prog-circ .bg { stroke: var(--ui-surface-3); } .ui-prog-circ .fg { stroke: var(--ui-prog-color, var(--ui-accent)); stroke-linecap: round; transition: stroke-dashoffset var(--ui-dur) var(--ui-ease); }\nui-progress[indeterminate][type=\"circular\"] .ui-prog-circ { animation: ui-spin 1s linear infinite; }\n.ui-prog-circ-txt { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: var(--ui-fs-xs); font-weight: var(--ui-fw-semibold); }\nui-badge { display: inline-flex; align-items: center; justify-content: center; min-width: 18px; height: 18px; padding: 0 6px; border-radius: var(--ui-radius-full); font-size: var(--ui-fs-xs); font-weight: var(--ui-fw-semibold); background: var(--ui-surface-3); color: var(--ui-text-2); line-height: 1; vertical-align: middle; }\nui-badge[variant=\"primary\"] { background: var(--ui-accent); color: var(--ui-text-on-accent); } ui-badge[variant=\"danger\"] { background: var(--ui-danger); color: #fff; } ui-badge[variant=\"success\"] { background: var(--ui-success); color: #fff; } ui-badge[variant=\"warning\"] { background: var(--ui-warning); color: #fff; } ui-badge[variant=\"info\"] { background: var(--ui-info); color: #fff; }\nui-badge[dot] { min-width: 8px; width: 8px; height: 8px; padding: 0; }\nui-badge-group { display: inline-flex; gap: 4px; flex-wrap: wrap; }\nui-chip { display: inline-flex; align-items: center; gap: 4px; height: 24px; padding: 0 4px 0 10px; border-radius: var(--ui-radius-full); background: var(--ui-surface-3); font-size: var(--ui-fs-sm); color: var(--ui-text); border: 1px solid transparent; vertical-align: middle; }\nui-chip:not([removable]) { padding-right: 10px; } ui-chip[icon] { padding-left: 8px; }\nui-chip[selectable] { cursor: default; } ui-chip[selectable]:hover { background: var(--ui-pressed); }\nui-chip[selected] { background: var(--ui-accent-soft); color: var(--ui-accent); border-color: var(--ui-accent); }\nui-chip[variant=\"success\"] { background: var(--ui-success-soft); color: var(--ui-success); } ui-chip[variant=\"danger\"] { background: var(--ui-danger-soft); color: var(--ui-danger); } ui-chip[variant=\"warning\"] { background: var(--ui-warning-soft); color: var(--ui-warning); }\n.ui-chip-x { display: inline-flex; width: 18px; height: 18px; align-items: center; justify-content: center; border: 0; border-radius: 50%; background: transparent; color: inherit; padding: 0; opacity: .7; } .ui-chip-x:hover { opacity: 1; background: var(--ui-pressed); }\nui-avatar { display: inline-flex; align-items: center; justify-content: center; position: relative; width: var(--ui-av, 32px); height: var(--ui-av, 32px); border-radius: 50%; background: var(--ui-surface-3); color: #fff; font-size: calc(var(--ui-av, 32px) * .38); font-weight: var(--ui-fw-semibold); flex: none; vertical-align: middle; }\nui-avatar[shape=\"square\"] { border-radius: 22%; } ui-avatar[size=\"sm\"] { --ui-av: 24px; } ui-avatar[size=\"lg\"] { --ui-av: 44px; } ui-avatar[size=\"xl\"] { --ui-av: 64px; }\nui-avatar img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }\nui-avatar .ui-av-status { position: absolute; right: -1px; bottom: -1px; width: 28%; height: 28%; min-width: 8px; min-height: 8px; border-radius: 50%; border: 2px solid var(--ui-bg-content); background: var(--ui-text-3); }\nui-avatar .ui-av-status[data-s=\"online\"] { background: var(--ui-success); } ui-avatar .ui-av-status[data-s=\"busy\"] { background: var(--ui-danger); } ui-avatar .ui-av-status[data-s=\"away\"] { background: var(--ui-warning); }\nui-avatar-group, ui-avatar-stack { display: inline-flex; align-items: center; } ui-avatar-group > ui-avatar:not(:first-child), ui-avatar-stack > ui-avatar:not(:first-child) { margin-left: -8px; } ui-avatar-group > ui-avatar, ui-avatar-stack > ui-avatar { box-shadow: 0 0 0 2px var(--ui-bg-content); }\nui-skeleton { display: block; background: linear-gradient(90deg, var(--ui-surface-3) 25%, var(--ui-surface-2) 50%, var(--ui-surface-3) 75%); background-size: 200% 100%; animation: ui-shimmer 1.4s linear infinite; border-radius: var(--ui-radius-sm); height: var(--ui-sk-h, 14px); width: var(--ui-sk-w, 100%); }\nui-skeleton[variant=\"circle\"] { border-radius: 50%; width: var(--ui-sk-h, 40px); height: var(--ui-sk-h, 40px); } ui-skeleton[variant=\"rect\"] { height: var(--ui-sk-h, 80px); }\n@keyframes ui-shimmer { to { background-position: -200% 0; } }\n@media (prefers-reduced-motion: reduce) { ui-skeleton { animation: none; } }\nui-status { display: inline-flex; align-items: center; gap: 6px; font-size: var(--ui-fs-sm); color: var(--ui-text-2); }\nui-status::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--ui-st, var(--ui-text-3)); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ui-st, var(--ui-text-3)) 20%, transparent); }\nui-status[state=\"online\"], ui-status[state=\"success\"] { --ui-st: var(--ui-success); } ui-status[state=\"busy\"], ui-status[state=\"danger\"] { --ui-st: var(--ui-danger); } ui-status[state=\"away\"], ui-status[state=\"warning\"] { --ui-st: var(--ui-warning); } ui-status[state=\"info\"] { --ui-st: var(--ui-info); }\nui-status[pulse]::before { animation: ui-pulse 1.6s ease-in-out infinite; }\nui-kbd, kbd.ui-kbd { display: inline-flex; align-items: center; gap: 2px; min-width: 20px; height: 20px; padding: 0 5px; justify-content: center; border-radius: 5px; background: var(--ui-surface-2); border: 1px solid var(--ui-border); border-bottom-width: 2px; font: var(--ui-fw-medium) 11px var(--ui-font); color: var(--ui-text-2); vertical-align: middle; }\nui-divider { display: block; height: 1px; background: var(--ui-separator); margin: var(--ui-space-3) 0; }\nui-divider[orientation=\"vertical\"] { display: inline-block; width: 1px; height: 1em; margin: 0 var(--ui-space-2); vertical-align: middle; align-self: stretch; }\nui-divider[label] { display: flex; align-items: center; gap: 10px; background: none; height: auto; color: var(--ui-text-3); font-size: var(--ui-fs-sm); } ui-divider[label]::before, ui-divider[label]::after { content: ''; flex: 1; height: 1px; background: var(--ui-separator); }\nui-spacer { flex: 1 1 auto; display: block; } ui-spacer[size] { flex: none; }\nui-text { display: block; } ui-text[inline] { display: inline; }\nui-text[variant=\"caption\"] { font-size: var(--ui-fs-sm); color: var(--ui-text-2); } ui-text[variant=\"small\"] { font-size: var(--ui-fs-xs); } ui-text[variant=\"lead\"] { font-size: var(--ui-fs-lg); } ui-text[variant=\"mono\"] { font-family: var(--ui-font-mono); font-size: 12px; }\nui-text[tone=\"muted\"] { color: var(--ui-text-2); } ui-text[tone=\"subtle\"] { color: var(--ui-text-3); } ui-text[tone=\"danger\"] { color: var(--ui-danger); } ui-text[tone=\"success\"] { color: var(--ui-success); } ui-text[tone=\"accent\"] { color: var(--ui-accent); }\nui-text[weight=\"medium\"] { font-weight: 500; } ui-text[weight=\"semibold\"] { font-weight: 600; } ui-text[weight=\"bold\"] { font-weight: 700; }\nui-text[truncate] { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } ui-text[lines] { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: var(--ui-lines, 2); overflow: hidden; }\nui-heading { display: block; font-weight: var(--ui-fw-semibold); letter-spacing: -.01em; } ui-heading[level=\"1\"] { font-size: var(--ui-fs-3xl); font-weight: 700; letter-spacing: -.02em; } ui-heading[level=\"2\"] { font-size: var(--ui-fs-2xl); } ui-heading[level=\"3\"] { font-size: var(--ui-fs-xl); } ui-heading[level=\"4\"] { font-size: var(--ui-fs-lg); } ui-heading[level=\"5\"], ui-heading[level=\"6\"] { font-size: var(--ui-fs-md); }\nui-aspect-ratio { display: block; position: relative; aspect-ratio: var(--ui-ratio, 16/9); overflow: hidden; border-radius: inherit; } ui-aspect-ratio > * { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }\nui-image { display: block; position: relative; overflow: hidden; background: var(--ui-surface-2); border-radius: var(--ui-radius-md); } ui-image img { display: block; width: 100%; height: 100%; object-fit: var(--ui-fit, cover); opacity: 0; transition: opacity var(--ui-dur-slow); } ui-image[data-loaded] img { opacity: 1; }\nui-image .ui-img-ph { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: var(--ui-text-3); font-size: 28px; } ui-image[data-loaded] .ui-img-ph { display: none; }\nui-link { display: inline; } ui-link a { color: var(--ui-accent); text-decoration: none; border-radius: 3px; } ui-link a:hover { text-decoration: underline; }\nui-ripple { position: absolute; inset: 0; overflow: hidden; border-radius: inherit; pointer-events: none; } .ui-ripple-dot { position: absolute; border-radius: 50%; background: currentColor; opacity: .22; transform: scale(0); animation: ui-ripple .55s var(--ui-ease) forwards; pointer-events: none; } @keyframes ui-ripple { to { transform: scale(1); opacity: 0; } }\nui-option, ui-menu-item, ui-tab-data { display: none; }\n\n/* ---- MODULE: src/components/buttons/buttons.css ---- */\nui-button { display: inline-flex; vertical-align: middle; } ui-button[block] { display: flex; width: 100%; } ui-button[disabled] { pointer-events: none; }\n.ui-btn { position: relative; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; gap: 6px; width: 100%; height: var(--ui-btn-h, var(--ui-ctl-h-md)); min-width: var(--ui-btn-h, var(--ui-ctl-h-md)); padding: 0 var(--ui-btn-px, 12px); border-radius: var(--ui-radius-sm); border: 1px solid var(--ui-btn-border, var(--ui-control-border)); background: var(--ui-btn-bg, var(--ui-control-bg)); color: var(--ui-btn-fg, var(--ui-text)); font: inherit; font-size: var(--ui-btn-fs, var(--ui-fs-md)); font-weight: var(--ui-fw-medium); line-height: 1; box-shadow: var(--ui-btn-shadow, var(--ui-shadow-1)); white-space: nowrap; user-select: none; -webkit-user-select: none; transition: background var(--ui-dur-fast), transform var(--ui-dur-fast) var(--ui-ease), box-shadow var(--ui-dur-fast); }\n.ui-btn::after { content: ''; position: absolute; inset: 0; background: currentColor; opacity: 0; pointer-events: none; transition: opacity var(--ui-dur-fast); }\n.ui-btn:hover:not(:disabled)::after { opacity: .06; } .ui-btn:active:not(:disabled)::after { opacity: .12; } .ui-btn:active:not(:disabled) { transform: scale(.985); }\n.ui-btn:disabled { opacity: var(--ui-opacity-disabled); }\n.ui-btn-ico, .ui-btn-ico-end { display: inline-flex; font-size: 1.15em; } .ui-btn-ico:empty, .ui-btn-ico-end:empty, .ui-btn-txt:empty, .ui-btn-kbd:empty { display: none; }\n.ui-btn-txt { overflow: hidden; text-overflow: ellipsis; } .ui-btn-kbd { margin-left: 4px; font: 11px var(--ui-font); opacity: .6; letter-spacing: .02em; }\nui-button[size=\"sm\"] { --ui-btn-h: var(--ui-ctl-h-sm); --ui-btn-px: 8px; --ui-btn-fs: var(--ui-fs-sm); } ui-button[size=\"lg\"] { --ui-btn-h: var(--ui-ctl-h-lg); --ui-btn-px: 16px; --ui-btn-fs: var(--ui-fs-lg); }\nui-button[variant=\"primary\"] { --ui-btn-bg: var(--ui-accent); --ui-btn-fg: var(--ui-text-on-accent); --ui-btn-border: transparent; --ui-btn-shadow: 0 1px 2px rgba(0,0,0,.2); }\nui-button[variant=\"primary\"] .ui-btn:hover:not(:disabled) { background: var(--ui-accent-hover); } ui-button[variant=\"primary\"] .ui-btn::after { background: #000; }\nui-button[variant=\"destructive\"] { --ui-btn-bg: var(--ui-danger); --ui-btn-fg: #fff; --ui-btn-border: transparent; --ui-btn-shadow: 0 1px 2px rgba(0,0,0,.2); }\nui-button[variant=\"tertiary\"] { --ui-btn-bg: var(--ui-surface-3); --ui-btn-border: transparent; --ui-btn-shadow: none; }\nui-button[variant=\"ghost\"], ui-button[variant=\"toolbar\"], ui-button[variant=\"link\"] { --ui-btn-bg: transparent; --ui-btn-border: transparent; --ui-btn-shadow: none; }\nui-button[variant=\"toolbar\"] { --ui-btn-px: 7px; } ui-button[variant=\"toolbar\"] .ui-btn { border-radius: var(--ui-radius-md); }\nui-button[variant=\"outline\"] { --ui-btn-bg: transparent; --ui-btn-border: var(--ui-accent); --ui-btn-fg: var(--ui-accent); --ui-btn-shadow: none; }\nui-button[variant=\"link\"] { --ui-btn-fg: var(--ui-accent); --ui-btn-px: 4px; } ui-button[variant=\"link\"] .ui-btn:hover { text-decoration: underline; }\nui-button .ui-btn[aria-pressed=\"true\"] { background: var(--ui-accent-soft); color: var(--ui-accent); border-color: transparent; }\nui-button[variant=\"primary\"] .ui-btn[aria-pressed=\"true\"] { background: var(--ui-accent-hover); color: var(--ui-text-on-accent); }\nui-button.ui-fab { }\nui-fab { position: relative; }\nui-fab ui-button { --ui-btn-h: 52px; --ui-btn-px: 0; } ui-fab .ui-btn { border-radius: 50%; box-shadow: var(--ui-shadow-3); } ui-fab[fixed] { position: fixed; right: 24px; bottom: 24px; z-index: var(--ui-z-sticky); }\nui-button-group { display: inline-flex; vertical-align: middle; } ui-button-group > ui-button:not(:first-child) .ui-btn { border-top-left-radius: 0; border-bottom-left-radius: 0; margin-left: -1px; } ui-button-group > ui-button:not(:last-child) .ui-btn { border-top-right-radius: 0; border-bottom-right-radius: 0; }\nui-segmented { display: inline-flex; padding: 2px; gap: 2px; background: var(--ui-surface-3); border-radius: var(--ui-radius-md); vertical-align: middle; }\nui-segmented[block] { display: flex; } ui-segmented[block] .ui-seg { flex: 1; }\n.ui-seg { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: calc(var(--ui-seg-h, var(--ui-ctl-h-md)) - 4px); padding: 0 12px; border: 0; background: transparent; color: var(--ui-text); font: inherit; font-size: var(--ui-fs-md); font-weight: var(--ui-fw-medium); border-radius: calc(var(--ui-radius-md) - 2px); white-space: nowrap; transition: background var(--ui-dur-fast), box-shadow var(--ui-dur-fast); }\n.ui-seg:hover:not([aria-checked=\"true\"]):not(:disabled) { background: var(--ui-hover); } .ui-seg[aria-checked=\"true\"] { background: var(--ui-surface); box-shadow: var(--ui-shadow-1); } [data-scheme=\"dark\"] .ui-seg[aria-checked=\"true\"] { background: var(--ui-surface-3); outline: 1px solid var(--ui-border); background: #55555c; } .ui-seg:disabled { opacity: var(--ui-opacity-disabled); }\nui-segmented[size=\"sm\"] { --ui-seg-h: var(--ui-ctl-h-sm); } ui-segmented[size=\"sm\"] .ui-seg { font-size: var(--ui-fs-sm); padding: 0 8px; } ui-segmented[size=\"lg\"] { --ui-seg-h: var(--ui-ctl-h-lg); }\nui-dropdown, ui-split-button { display: inline-flex; vertical-align: middle; }\nui-split-button > ui-button:first-child .ui-btn { border-top-right-radius: 0; border-bottom-right-radius: 0; } ui-split-button > ui-button:last-child .ui-btn { border-top-left-radius: 0; border-bottom-left-radius: 0; margin-left: -1px; --ui-btn-px: 6px; }\n\n/* ---- MODULE: src/components/inputs/inputs.css ---- */\n.ui-fld { display: block; min-width: 0; } ui-text-field, ui-text-area, ui-select, ui-multi-select, ui-combobox, ui-tag-input, ui-color-picker, ui-date-picker, ui-file-upload, ui-slider, ui-range-slider, ui-otp-field, ui-number-field, ui-password-field, ui-search-field { display: block; }\n.ui-fld-label { display: block; font-size: var(--ui-fs-sm); font-weight: var(--ui-fw-medium); color: var(--ui-text-2); margin-bottom: 4px; }\n.ui-fld-msg { font-size: var(--ui-fs-sm); margin-top: 4px; color: var(--ui-text-3); } .ui-fld-err { color: var(--ui-danger); }\n.ui-fld-box, .ui-sel-btn { display: flex; align-items: center; gap: 6px; width: 100%; min-height: var(--ui-fh, var(--ui-ctl-h-md)); padding: 0 8px; background: var(--ui-control-bg); border: 1px solid var(--ui-control-border); border-radius: var(--ui-radius-sm); color: var(--ui-text); transition: border-color var(--ui-dur-fast), box-shadow var(--ui-dur-fast); box-shadow: var(--ui-shadow-1); font: inherit; text-align: left; }\nui-text-field[size=\"sm\"], ui-select[size=\"sm\"], ui-combobox[size=\"sm\"] { --ui-fh: var(--ui-ctl-h-sm); } ui-text-field[size=\"lg\"], ui-select[size=\"lg\"], ui-combobox[size=\"lg\"] { --ui-fh: var(--ui-ctl-h-lg); }\n.ui-fld-box:focus-within, .ui-sel-btn:focus-visible, .ui-sel-btn[aria-expanded=\"true\"] { border-color: var(--ui-accent); box-shadow: 0 0 0 3px var(--ui-accent-soft); outline: none; }\n[data-invalid] > .ui-fld .ui-fld-box, [data-invalid] > .ui-fld .ui-sel-btn { border-color: var(--ui-danger); } [data-invalid] > .ui-fld .ui-fld-box:focus-within { box-shadow: 0 0 0 3px var(--ui-danger-soft); }\n[data-success] > .ui-fld .ui-fld-box { border-color: var(--ui-success); }\n[disabled] > .ui-fld .ui-fld-box, [disabled] > .ui-fld .ui-sel-btn { opacity: var(--ui-opacity-disabled); pointer-events: none; }\n.ui-fld-input { flex: 1; min-width: 0; height: 100%; border: 0; padding: 0; background: transparent; outline: none !important; font: inherit; color: inherit; } .ui-fld-input::placeholder { color: var(--ui-text-3); }\n.ui-fld-multi { align-items: flex-start; padding: 6px 8px; } .ui-fld-multi .ui-fld-input { resize: vertical; min-height: 54px; line-height: 1.45; }\n.ui-fld-mono .ui-fld-input { font-family: var(--ui-font-mono); letter-spacing: .06em; }\n.ui-fld-box ui-icon { color: var(--ui-text-3); } .ui-fld-btn { display: inline-flex; border: 0; background: transparent; color: var(--ui-text-3); padding: 2px; border-radius: 4px; } .ui-fld-btn:hover { color: var(--ui-text); }\n.ui-fld-extra { display: inline-flex; align-items: center; gap: 2px; } .ui-fld-extra:empty { display: none; }\n.ui-fld-count { text-align: right; font-size: var(--ui-fs-xs); color: var(--ui-text-3); }\n.ui-num-step { display: flex; flex-direction: column; } .ui-num-step button { border: 0; background: transparent; padding: 0; height: 10px; line-height: 0; color: var(--ui-text-3); } .ui-num-step button:hover { color: var(--ui-text); }\n.ui-sel-btn { cursor: default; justify-content: space-between; } .ui-sel-val { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ui-sel-val.ph { color: var(--ui-text-3); } .ui-sel-chev { color: var(--ui-text-3); }\n.ui-sel-btn .ui-chips { display: flex; flex-wrap: wrap; gap: 4px; padding: 3px 0; flex: 1; }\n.ui-listbox { min-width: 140px; max-height: 280px; overflow: auto; padding: 4px; border-radius: var(--ui-radius-md); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-3); }\n.ui-lb-item { display: flex; align-items: center; gap: 8px; padding: 5px 8px; border-radius: 5px; font-size: var(--ui-fs-md); } .ui-lb-item.active { background: var(--ui-accent); color: var(--ui-text-on-accent); } .ui-lb-item.active ui-icon { color: inherit; }\n.ui-lb-item[aria-disabled=\"true\"] { opacity: .4; } .ui-lb-label { flex: 1; } .ui-lb-tick { color: var(--ui-accent); } .ui-lb-item.active .ui-lb-tick { color: inherit; }\n.ui-lb-check { width: 14px; height: 14px; border-radius: 4px; border: 1px solid var(--ui-border-strong); display: inline-flex; align-items: center; justify-content: center; } .ui-lb-item[aria-selected=\"true\"] .ui-lb-check { background: var(--ui-accent); border-color: var(--ui-accent); color: #fff; }\n.ui-lb-group { font-size: var(--ui-fs-xs); color: var(--ui-text-3); padding: 6px 8px 2px; text-transform: uppercase; letter-spacing: .04em; } .ui-lb-empty { padding: 10px; color: var(--ui-text-3); text-align: center; font-size: var(--ui-fs-sm); }\n/* checkbox / radio / switch */\nui-checkbox, ui-switch, ui-radio-group { display: block; } ui-checkbox[inline], ui-switch[inline] { display: inline-block; }\n.ui-cb, .ui-sw, .ui-rd { display: inline-flex; align-items: center; gap: 8px; min-height: 22px; cursor: default; user-select: none; -webkit-user-select: none; }\n.ui-cb-box { width: 16px; height: 16px; border-radius: 4.5px; border: 1px solid var(--ui-control-border); background: var(--ui-control-bg); display: inline-flex; align-items: center; justify-content: center; color: #fff; flex: none; transition: background var(--ui-dur-fast), border-color var(--ui-dur-fast); box-shadow: var(--ui-shadow-1); } .ui-cb-box svg { opacity: 0; transform: scale(.5); transition: all var(--ui-dur-fast) var(--ui-ease-spring); width: 12px; height: 12px; }\n.ui-cb input:checked + .ui-cb-box, .ui-cb input:indeterminate + .ui-cb-box { background: var(--ui-accent); border-color: var(--ui-accent); } .ui-cb input:checked + .ui-cb-box svg, .ui-cb input:indeterminate + .ui-cb-box svg { opacity: 1; transform: scale(1); }\n.ui-cb input:focus-visible + .ui-cb-box, .ui-sw input:focus-visible + .ui-sw-track, .ui-rd input:focus-visible + .ui-rd-dot { outline: 2px solid var(--ui-focus-ring); outline-offset: 2px; }\nui-checkbox[disabled] .ui-cb, ui-switch[disabled] .ui-sw, ui-radio-group[disabled] .ui-rd { opacity: var(--ui-opacity-disabled); pointer-events: none; }\n.ui-sw-track { width: 34px; height: 20px; border-radius: 10px; background: var(--ui-surface-3); border: 1px solid var(--ui-border); position: relative; flex: none; transition: background var(--ui-dur) var(--ui-ease); } [data-scheme=\"dark\"] .ui-sw-track { background: #55555c; }\n.ui-sw-track::after { content: ''; position: absolute; top: 1px; left: 1px; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.35); transition: transform var(--ui-dur) var(--ui-ease-spring); }\n.ui-sw input:checked + .ui-sw-track { background: var(--ui-success); border-color: transparent; } ui-switch[color=\"accent\"] .ui-sw input:checked + .ui-sw-track { background: var(--ui-accent); } .ui-sw input:checked + .ui-sw-track::after { transform: translateX(14px); }\nui-switch[reverse] .ui-sw { flex-direction: row-reverse; justify-content: space-between; width: 100%; }\n.ui-rd-dot { width: 16px; height: 16px; border-radius: 50%; border: 1px solid var(--ui-control-border); background: var(--ui-control-bg); flex: none; position: relative; box-shadow: var(--ui-shadow-1); } .ui-rd input:checked + .ui-rd-dot { border-color: var(--ui-accent); background: var(--ui-accent); } .ui-rd input:checked + .ui-rd-dot::after { content: ''; position: absolute; inset: 4px; border-radius: 50%; background: #fff; }\n.ui-rd-group { display: flex; flex-direction: column; gap: 6px; border: 0; padding: 0; margin: 0; min-width: 0; } ui-radio-group[orientation=\"horizontal\"] .ui-rd-group { flex-direction: row; flex-wrap: wrap; gap: 16px; } .ui-rd-group legend { padding: 0; font-size: var(--ui-fs-sm); font-weight: 500; color: var(--ui-text-2); margin-bottom: 6px; }\n/* slider */\n.ui-range { -webkit-appearance: none; appearance: none; display: block; width: 100%; height: 20px; margin: 0; background: transparent; --p: 50%; }\n.ui-range::-webkit-slider-runnable-track { height: 4px; border-radius: 2px; background: linear-gradient(to right, var(--ui-accent) var(--p), var(--ui-surface-3) var(--p)); }\n.ui-range::-moz-range-track { height: 4px; border-radius: 2px; background: linear-gradient(to right, var(--ui-accent) var(--p), var(--ui-surface-3) var(--p)); }\n.ui-range::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 0; margin-top: -7px; box-shadow: 0 1px 4px rgba(0,0,0,.4), 0 0 0 .5px rgba(0,0,0,.15); }\n.ui-range::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 0; box-shadow: 0 1px 4px rgba(0,0,0,.4); }\n.ui-range:focus-visible { outline: none; } .ui-range:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 3px var(--ui-focus-ring); }\n.ui-rs { position: relative; height: 20px; } .ui-rs .ui-rs-track { position: absolute; left: 0; right: 0; top: 8px; height: 4px; border-radius: 2px; background: var(--ui-surface-3); } .ui-rs .ui-rs-fill { position: absolute; top: 8px; height: 4px; background: var(--ui-accent); border-radius: 2px; }\n.ui-rs .ui-range { position: absolute; left: 0; top: 0; pointer-events: none; } .ui-rs .ui-range::-webkit-slider-runnable-track { background: transparent; } .ui-rs .ui-range::-moz-range-track { background: transparent; } .ui-rs .ui-range::-webkit-slider-thumb { pointer-events: auto; } .ui-rs .ui-range::-moz-range-thumb { pointer-events: auto; }\n.ui-sl-head { display: flex; justify-content: space-between; } .ui-sl-val { font-size: var(--ui-fs-sm); color: var(--ui-text-2); font-variant-numeric: tabular-nums; }\n/* tags */\n.ui-tags { flex-wrap: wrap; padding: 4px 6px; gap: 4px; cursor: text; } .ui-tags .ui-fld-input { min-width: 80px; height: 22px; }\n/* otp */\n.ui-otp { display: flex; gap: 8px; } .ui-otp input { width: 40px; height: 48px; text-align: center; font-size: 20px; font-weight: 600; border: 1px solid var(--ui-control-border); border-radius: var(--ui-radius-md); background: var(--ui-control-bg); color: var(--ui-text); box-shadow: var(--ui-shadow-1); } .ui-otp input:focus { outline: none; border-color: var(--ui-accent); box-shadow: 0 0 0 3px var(--ui-accent-soft); }\n[data-invalid] .ui-otp input { border-color: var(--ui-danger); }\n/* color picker */\n.ui-cp-sw { width: 18px; height: 18px; border-radius: 5px; border: 1px solid var(--ui-border-strong); flex: none; }\n.ui-cp-pop { width: 232px; padding: 12px; border-radius: var(--ui-radius-lg); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-3); display: grid; gap: 10px; }\n.ui-cp-sv { position: relative; height: 130px; border-radius: 8px; touch-action: none; cursor: crosshair; } .ui-cp-sv::before, .ui-cp-sv::after { content: ''; position: absolute; inset: 0; border-radius: inherit; } .ui-cp-sv::before { background: linear-gradient(to right, #fff, transparent); } .ui-cp-sv::after { background: linear-gradient(to top, #000, transparent); }\n.ui-cp-knob { position: absolute; z-index: 2; width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,.4), 0 1px 4px rgba(0,0,0,.4); pointer-events: none; }\n.ui-cp-hue { -webkit-appearance: none; appearance: none; height: 12px; border-radius: 6px; width: 100%; margin: 0; background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00); } .ui-cp-hue::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 0 0 1px rgba(0,0,0,.35), 0 1px 4px rgba(0,0,0,.4); } .ui-cp-hue::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 0; }\n.ui-cp-presets { display: grid; grid-template-columns: repeat(8, 1fr); gap: 6px; } .ui-cp-presets button { aspect-ratio: 1; border-radius: 6px; border: 1px solid var(--ui-border); padding: 0; } .ui-cp-hex { display: flex; gap: 8px; align-items: center; } .ui-cp-hex input { flex: 1; min-width: 0; height: 28px; border-radius: 6px; border: 1px solid var(--ui-control-border); background: var(--ui-control-bg); padding: 0 8px; font-family: var(--ui-font-mono); }\n/* date/time pickers */\n.ui-dt-pop { padding: 8px; border-radius: var(--ui-radius-lg); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-3); display: flex; gap: 8px; }\n.ui-tcol { height: 220px; overflow: auto; width: 56px; padding: 2px; scrollbar-width: none; } .ui-tcol::-webkit-scrollbar { display: none; } .ui-tcol button { display: block; width: 100%; height: 28px; border: 0; background: transparent; border-radius: 6px; font: inherit; font-variant-numeric: tabular-nums; color: var(--ui-text); } .ui-tcol button:hover { background: var(--ui-hover); } .ui-tcol button[aria-selected=\"true\"] { background: var(--ui-accent); color: #fff; }\n/* upload */\n.ui-dz { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 24px 16px; text-align: center; border: 1.5px dashed var(--ui-border-strong); border-radius: var(--ui-radius-lg); background: var(--ui-surface-2); color: var(--ui-text-2); cursor: default; transition: all var(--ui-dur-fast); } .ui-dz:hover, .ui-dz.ui-drop-over { border-color: var(--ui-accent); background: var(--ui-accent-soft); color: var(--ui-accent); } .ui-dz ui-icon { font-size: 28px; } .ui-dz:focus-visible { outline: 2px solid var(--ui-focus-ring); }\nui-file-upload[compact] .ui-dz { flex-direction: row; padding: 8px 12px; border-style: solid; }\n.ui-up-list { list-style: none; margin: 8px 0 0; padding: 0; display: grid; gap: 6px; } .ui-up-item { display: grid; grid-template-columns: auto 1fr auto; gap: 4px 10px; align-items: center; padding: 8px 10px; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-md); background: var(--ui-surface); } .ui-up-item .meta { font-size: var(--ui-fs-xs); color: var(--ui-text-3); } .ui-up-item ui-progress { grid-column: 1 / -1; }\n/* forms */\nui-form { display: block; } ui-form-field { display: block; margin-bottom: var(--ui-space-3); } ui-form-field .ui-ff-lbl { display: block; font-size: var(--ui-fs-sm); font-weight: 500; color: var(--ui-text-2); margin-bottom: 4px; } ui-form-field .ui-ff-req { color: var(--ui-danger); margin-left: 2px; }\nui-form-group { display: block; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); padding: var(--ui-space-4); margin-bottom: var(--ui-space-4); } ui-form-group > .ui-fg-h { font-weight: 600; margin-bottom: 2px; } ui-form-group > .ui-fg-d { color: var(--ui-text-3); font-size: var(--ui-fs-sm); margin-bottom: var(--ui-space-3); }\nui-form-label { display: block; font-size: var(--ui-fs-sm); font-weight: 500; color: var(--ui-text-2); } ui-form-description { display: block; font-size: var(--ui-fs-sm); color: var(--ui-text-3); } ui-form-error { display: block; font-size: var(--ui-fs-sm); color: var(--ui-danger); }\nui-input-group { display: flex; align-items: stretch; } ui-input-group > * { flex: 1; } ui-input-group > ui-input-addon { flex: none; } ui-input-group > :not(:first-child) .ui-fld-box, ui-input-group > :not(:first-child) .ui-btn { border-top-left-radius: 0; border-bottom-left-radius: 0; margin-left: -1px; } ui-input-group > :not(:last-child) .ui-fld-box, ui-input-group > :not(:last-child) .ui-btn { border-top-right-radius: 0; border-bottom-right-radius: 0; }\nui-input-addon { display: inline-flex; align-items: center; padding: 0 10px; background: var(--ui-surface-3); border: 1px solid var(--ui-control-border); color: var(--ui-text-2); font-size: var(--ui-fs-sm); } ui-input-group > ui-input-addon:first-child { border-radius: var(--ui-radius-sm) 0 0 var(--ui-radius-sm); margin-right: -1px; } ui-input-group > ui-input-addon:last-child { border-radius: 0 var(--ui-radius-sm) var(--ui-radius-sm) 0; margin-left: -1px; }\nui-form-validation .ui-fv { padding: 10px 12px; border-radius: var(--ui-radius-md); background: var(--ui-danger-soft); color: var(--ui-danger); font-size: var(--ui-fs-sm); } ui-form-validation ul { margin: 4px 0 0; padding-left: 18px; }\n\n/* ---- MODULE: src/components/layouts/layouts.css ---- */\nui-stack, ui-vstack, ui-hstack, ui-flex { display: flex; flex-direction: var(--ui-dir, column); gap: var(--ui-gap, var(--ui-space-3)); align-items: var(--ui-align, stretch); justify-content: var(--ui-justify, flex-start); flex-wrap: var(--ui-wrap, nowrap); padding: var(--ui-pad, 0); min-width: 0; }\nui-hstack { --ui-dir: row; align-items: var(--ui-align, center); } ui-flex { --ui-dir: row; align-items: var(--ui-align, stretch); }\nui-grid { display: grid; gap: var(--ui-gap, var(--ui-space-3)); grid-template-columns: var(--ui-cols, repeat(auto-fit, minmax(220px, 1fr))); padding: var(--ui-pad, 0); align-items: var(--ui-align, stretch); }\nui-box { display: block; padding: var(--ui-pad, 0); border-radius: var(--ui-radius, 0); background: var(--ui-box-bg, transparent); } ui-box[border] { border: 1px solid var(--ui-border); }\nui-container { display: block; width: 100%; max-width: var(--ui-maxw, 1100px); margin-inline: auto; padding-inline: var(--ui-pad, var(--ui-space-4)); }\nui-center { display: flex; align-items: center; justify-content: center; min-height: var(--ui-minh, 100%); text-align: center; } ui-center[inline] { display: inline-flex; }\nui-surface, ui-card, ui-well { display: block; background: var(--ui-surface); color: var(--ui-text); border-radius: var(--ui-radius-lg); }\nui-surface { border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-1); padding: var(--ui-space-4); }\nui-surface[elevation=\"none\"] { box-shadow: none; } ui-surface[elevation=\"medium\"], ui-card[elevation=\"medium\"] { box-shadow: var(--ui-shadow-2); } ui-surface[elevation=\"high\"], ui-card[elevation=\"high\"] { box-shadow: var(--ui-shadow-3); }\nui-card { border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-1); overflow: hidden; transition: box-shadow var(--ui-dur) var(--ui-ease), transform var(--ui-dur) var(--ui-ease); } ui-card[interactive] { cursor: default; } ui-card[interactive]:hover { box-shadow: var(--ui-shadow-2); transform: translateY(-1px); }\nui-card[flat] { box-shadow: none; }\nui-card-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: var(--ui-space-3) var(--ui-space-4); border-bottom: 1px solid var(--ui-separator); font-weight: var(--ui-fw-semibold); } ui-card-body { display: block; padding: var(--ui-space-4); } ui-card-footer { display: flex; align-items: center; justify-content: flex-end; gap: 8px; padding: var(--ui-space-3) var(--ui-space-4); border-top: 1px solid var(--ui-separator); background: var(--ui-surface-2); }\nui-well { background: var(--ui-surface-2); padding: var(--ui-space-4); box-shadow: inset 0 1px 3px rgba(0,0,0,.08); border: 1px solid var(--ui-border); }\nui-section { display: block; margin-bottom: var(--ui-space-6); } ui-section > .ui-sec-h { font-size: var(--ui-fs-lg); font-weight: var(--ui-fw-semibold); } ui-section > .ui-sec-d { color: var(--ui-text-2); margin: 2px 0 var(--ui-space-3); }\nui-scroll-area { display: block; overflow: auto; max-height: var(--ui-maxh, none); position: relative; } ui-scroll-area[shadows]::before, ui-scroll-area[shadows]::after { content: ''; position: sticky; display: block; height: 10px; left: 0; right: 0; pointer-events: none; z-index: 1; opacity: 0; transition: opacity .15s; } ui-scroll-area[shadows]::before { top: 0; margin-bottom: -10px; background: linear-gradient(rgba(0,0,0,.14), transparent); } ui-scroll-area[shadows]::after { bottom: 0; margin-top: -10px; background: linear-gradient(transparent, rgba(0,0,0,.14)); } ui-scroll-area[data-top]::before, ui-scroll-area[data-bottom]::after { opacity: 1; }\nui-sticky { display: block; position: sticky; top: var(--ui-top, 0); z-index: var(--ui-z-sticky); }\nui-masonry { display: block; column-count: var(--ui-cols, 3); column-gap: var(--ui-gap, var(--ui-space-3)); } ui-masonry > * { break-inside: avoid; margin-bottom: var(--ui-gap, var(--ui-space-3)); display: block; }\nui-split { display: flex; flex-direction: row; width: 100%; height: 100%; min-height: 0; } ui-split[direction=\"vertical\"] { flex-direction: column; } ui-split > :not(.ui-split-handle) { min-width: 0; min-height: 0; overflow: auto; }\n.ui-split-handle { flex: none; position: relative; width: 7px; margin: 0 -3px; cursor: col-resize; z-index: 2; touch-action: none; } ui-split[direction=\"vertical\"] > .ui-split-handle { width: auto; height: 7px; margin: -3px 0; cursor: row-resize; }\n.ui-split-handle::after { content: ''; position: absolute; left: 3px; top: 0; bottom: 0; width: 1px; background: var(--ui-separator); transition: background var(--ui-dur-fast), width var(--ui-dur-fast); } ui-split[direction=\"vertical\"] > .ui-split-handle::after { left: 0; right: 0; top: 3px; bottom: auto; height: 1px; width: auto; }\n.ui-split-handle:hover::after, .ui-split-handle:focus-visible::after, .ui-split-handle.dragging::after { background: var(--ui-accent); width: 3px; left: 2px; } ui-split[direction=\"vertical\"] > .ui-split-handle:hover::after { width: auto; height: 3px; top: 2px; left: 0; } .ui-split-handle:focus-visible { outline: none; }\nui-resizable-panel { display: block; position: relative; flex: none; width: var(--ui-w, 240px); min-width: 0; } ui-resizable-panel .ui-rp-h { position: absolute; top: 0; bottom: 0; right: -3px; width: 7px; cursor: col-resize; z-index: 3; touch-action: none; } ui-resizable-panel .ui-rp-h::after { content: ''; position: absolute; left: 3px; top: 0; bottom: 0; width: 1px; background: var(--ui-separator); } ui-resizable-panel .ui-rp-h:hover::after { background: var(--ui-accent); width: 3px; left: 2px; }\nui-resizable-panel[edge=\"left\"] .ui-rp-h { right: auto; left: -3px; }\nui-resize-handle { display: block; width: 14px; height: 14px; cursor: nwse-resize; touch-action: none; color: var(--ui-text-3); } ui-drag-handle { display: inline-flex; cursor: grab; color: var(--ui-text-3); touch-action: none; } ui-drag-handle:active { cursor: grabbing; }\nui-collapsible, ui-disclosure { display: block; } .ui-co-h { display: flex; align-items: center; gap: 6px; width: 100%; padding: 6px 4px; border: 0; background: transparent; font: inherit; font-weight: var(--ui-fw-medium); color: inherit; text-align: left; border-radius: var(--ui-radius-sm); } .ui-co-h:hover { background: var(--ui-hover); } .ui-co-h ui-icon { transition: transform var(--ui-dur) var(--ui-ease); color: var(--ui-text-3); } ui-collapsible[open] > .ui-co-h ui-icon, ui-disclosure[open] > .ui-co-h ui-icon { transform: rotate(90deg); } .ui-co-b { padding: 4px 4px 8px 22px; }\nui-accordion { display: block; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); overflow: hidden; background: var(--ui-surface); } ui-accordion > ui-disclosure { border-top: 1px solid var(--ui-separator); padding: 2px 8px; } ui-accordion > ui-disclosure:first-child { border-top: 0; }\nui-expandable { display: block; position: relative; } ui-expandable .ui-ex-b { overflow: hidden; position: relative; } ui-expandable[data-clamped] .ui-ex-b::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 36px; background: linear-gradient(transparent, var(--ui-bg-content)); pointer-events: none; }\nui-sidebar-layout { display: grid; grid-template-columns: var(--ui-sidebar-w) minmax(0, 1fr); height: 100%; position: relative; overflow: hidden; } ui-sidebar-layout > .ui-sbl-side { background: var(--ui-bg-sidebar); border-right: 1px solid var(--ui-separator); overflow: auto; min-width: 0; } ui-sidebar-layout > .ui-sbl-main { min-width: 0; overflow: auto; background: var(--ui-bg-content); }\nui-sidebar-layout[data-compact] { grid-template-columns: minmax(0, 1fr); } ui-sidebar-layout[data-compact] > .ui-sbl-side { position: absolute; z-index: 5; inset: 0 auto 0 0; width: min(80%, var(--ui-sidebar-w)); transform: translateX(-102%); transition: transform var(--ui-dur) var(--ui-ease); box-shadow: var(--ui-shadow-3); } ui-sidebar-layout[data-compact][data-open] > .ui-sbl-side { transform: none; }\nui-sidebar-layout[collapsed] { grid-template-columns: 0 minmax(0, 1fr); } ui-sidebar-layout[collapsed] > .ui-sbl-side { overflow: hidden; border: 0; }\nui-master-detail { display: grid; grid-template-columns: var(--ui-master-w, 300px) minmax(0, 1fr); height: 100%; overflow: hidden; } ui-master-detail > .ui-md-master { border-right: 1px solid var(--ui-separator); overflow: auto; min-width: 0; } ui-master-detail > .ui-md-detail { overflow: auto; min-width: 0; }\nui-master-detail[data-compact] { grid-template-columns: minmax(0, 1fr); } ui-master-detail[data-compact] > .ui-md-detail { display: none; } ui-master-detail[data-compact][detail] > .ui-md-detail { display: block; } ui-master-detail[data-compact][detail] > .ui-md-master { display: none; }\nui-responsive { display: block; }\n\n/* ---- MODULE: src/components/navigation/navigation.css ---- */\nui-sidebar-item, ui-sidebar-group { display: none; }\nui-sidebar { display: block; padding: 8px; font-size: var(--ui-fs-md); } ui-sidebar[compact] { width: 56px; padding: 8px 6px; }\n.ui-sb-group-h { display: flex; align-items: center; justify-content: space-between; padding: 12px 8px 4px; font-size: var(--ui-fs-xs); font-weight: var(--ui-fw-semibold); text-transform: uppercase; letter-spacing: .05em; color: var(--ui-text-3); width: 100%; border: 0; background: transparent; text-align: left; } button.ui-sb-group-h:hover { color: var(--ui-text-2); }\n.ui-sb-item { display: flex; align-items: center; gap: 8px; width: 100%; height: 28px; padding: 0 8px; border: 0; border-radius: var(--ui-radius-sm); background: transparent; font: inherit; color: var(--ui-text); text-align: left; position: relative; }\n.ui-sb-item:hover { background: var(--ui-hover); } .ui-sb-item[aria-current=\"page\"] { background: var(--ui-selected); color: var(--ui-accent); font-weight: var(--ui-fw-medium); } .ui-sb-item ui-icon { font-size: 16px; color: var(--ui-accent); } .ui-sb-item[aria-current=\"page\"] ui-icon { color: var(--ui-accent); }\n.ui-sb-item .lbl { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } ui-sidebar[compact] .ui-sb-item { justify-content: center; padding: 0; height: 36px; } ui-sidebar[compact] .ui-sb-item .lbl, ui-sidebar[compact] .ui-sb-group-h span, ui-sidebar[compact] .ui-sb-item ui-badge { display: none; } ui-sidebar[compact] .ui-sb-item ui-icon { font-size: 20px; }\nui-sidebar[variant=\"plain\"] .ui-sb-item ui-icon { color: var(--ui-text-2); }\nui-tabs { display: flex; flex-direction: column; min-height: 0; } ui-tabs > ui-tab, ui-tabs > ui-tab-panel { display: block; padding: var(--ui-space-3) 0; flex: 1; min-height: 0; overflow: auto; } ui-tabs > ui-tab[hidden], ui-tabs > ui-tab-panel[hidden] { display: none; }\n.ui-tablist { display: flex; gap: 2px; border-bottom: 1px solid var(--ui-separator); flex: none; overflow-x: auto; scrollbar-width: none; } .ui-tablist::-webkit-scrollbar { display: none; }\n.ui-tab { display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 12px; border: 0; background: transparent; color: var(--ui-text-2); font: inherit; font-weight: var(--ui-fw-medium); position: relative; white-space: nowrap; border-radius: var(--ui-radius-sm) var(--ui-radius-sm) 0 0; } .ui-tab:hover { color: var(--ui-text); background: var(--ui-hover); } .ui-tab[aria-selected=\"true\"] { color: var(--ui-accent); } .ui-tab[aria-selected=\"true\"]::after { content: ''; position: absolute; left: 8px; right: 8px; bottom: -1px; height: 2px; background: var(--ui-accent); border-radius: 2px; } .ui-tab:disabled { opacity: .4; }\n.ui-tab-x { display: inline-flex; width: 16px; height: 16px; border-radius: 50%; align-items: center; justify-content: center; opacity: .6; } .ui-tab-x:hover { background: var(--ui-pressed); opacity: 1; }\nui-tabs[variant=\"segmented\"] .ui-tablist { border: 0; display: inline-flex; align-self: flex-start; background: var(--ui-surface-3); padding: 2px; border-radius: var(--ui-radius-md); } ui-tabs[variant=\"segmented\"] .ui-tab { border-radius: calc(var(--ui-radius-md) - 2px); height: 26px; } ui-tabs[variant=\"segmented\"] .ui-tab::after { display: none; } ui-tabs[variant=\"segmented\"] .ui-tab[aria-selected=\"true\"] { background: var(--ui-surface); color: var(--ui-text); box-shadow: var(--ui-shadow-1); } [data-scheme=\"dark\"] ui-tabs[variant=\"segmented\"] .ui-tab[aria-selected=\"true\"] { background: #55555c; }\nui-tabs[variant=\"pill\"] .ui-tablist { border: 0; gap: 6px; } ui-tabs[variant=\"pill\"] .ui-tab { border-radius: var(--ui-radius-full); } ui-tabs[variant=\"pill\"] .ui-tab::after { display: none; } ui-tabs[variant=\"pill\"] .ui-tab[aria-selected=\"true\"] { background: var(--ui-accent); color: var(--ui-text-on-accent); }\nui-tabs[variant=\"bar\"] .ui-tablist { justify-content: center; gap: 4px; border: 0; } ui-tabs[variant=\"bar\"] .ui-tab { flex-direction: column; height: 52px; gap: 2px; font-size: var(--ui-fs-xs); min-width: 64px; border-radius: var(--ui-radius-md); } ui-tabs[variant=\"bar\"] .ui-tab::after { display: none; } ui-tabs[variant=\"bar\"] .ui-tab ui-icon { font-size: 20px; }\nui-tabs[orientation=\"vertical\"] { flex-direction: row; } ui-tabs[orientation=\"vertical\"] .ui-tablist { flex-direction: column; border-bottom: 0; border-right: 1px solid var(--ui-separator); padding-right: 4px; } ui-tabs[orientation=\"vertical\"] .ui-tab { border-radius: var(--ui-radius-sm); } ui-tabs[orientation=\"vertical\"] .ui-tab[aria-selected=\"true\"]::after { left: auto; right: -5px; top: 6px; bottom: 6px; width: 2px; height: auto; } ui-tabs[orientation=\"vertical\"] > ui-tab { padding: 0 var(--ui-space-4); }\nui-breadcrumb { display: block; } ui-breadcrumb ol { display: flex; align-items: center; flex-wrap: wrap; gap: 2px; list-style: none; margin: 0; padding: 0; font-size: var(--ui-fs-md); } ui-breadcrumb li { display: inline-flex; align-items: center; gap: 2px; } ui-breadcrumb li + li::before { content: ''; width: 5px; height: 5px; border-top: 1.5px solid var(--ui-text-3); border-right: 1.5px solid var(--ui-text-3); transform: rotate(45deg) scale(.9); margin: 0 6px 0 2px; }\n.ui-bc-b { border: 0; background: transparent; color: var(--ui-text-2); font: inherit; padding: 2px 6px; border-radius: 5px; display: inline-flex; align-items: center; gap: 4px; } .ui-bc-b:hover { background: var(--ui-hover); color: var(--ui-text); } .ui-bc-b[aria-current=\"page\"] { color: var(--ui-text); font-weight: var(--ui-fw-medium); }\nui-pagination { display: inline-flex; align-items: center; gap: 4px; } .ui-pg { min-width: 28px; height: 28px; padding: 0 6px; border: 0; border-radius: var(--ui-radius-sm); background: transparent; font: inherit; font-variant-numeric: tabular-nums; color: var(--ui-text); } .ui-pg:hover:not(:disabled) { background: var(--ui-hover); } .ui-pg[aria-current=\"page\"] { background: var(--ui-accent); color: var(--ui-text-on-accent); } .ui-pg:disabled { opacity: .35; } .ui-pg-gap { color: var(--ui-text-3); padding: 0 4px; }\nui-stepper { display: flex; gap: 0; width: 100%; } ui-stepper[orientation=\"vertical\"] { flex-direction: column; } .ui-st { flex: 1; display: flex; flex-direction: column; align-items: flex-start; gap: 6px; position: relative; padding-right: 8px; min-width: 0; border: 0; background: transparent; font: inherit; color: inherit; text-align: left; } .ui-st::before { content: ''; position: absolute; top: 13px; left: 30px; right: 4px; height: 2px; background: var(--ui-surface-3); } .ui-st:last-child::before { display: none; } .ui-st[data-s=\"done\"]::before { background: var(--ui-accent); }\n.ui-st-n { width: 26px; height: 26px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: var(--ui-fs-sm); background: var(--ui-surface-3); color: var(--ui-text-2); position: relative; z-index: 1; } .ui-st[data-s=\"current\"] .ui-st-n { background: var(--ui-accent); color: #fff; box-shadow: 0 0 0 4px var(--ui-accent-soft); } .ui-st[data-s=\"done\"] .ui-st-n { background: var(--ui-success); color: #fff; } .ui-st-t { font-weight: 500; font-size: var(--ui-fs-sm); } .ui-st-d { font-size: var(--ui-fs-xs); color: var(--ui-text-3); } .ui-st:disabled { cursor: default; }\nui-stepper[orientation=\"vertical\"] .ui-st { flex-direction: row; flex-wrap: wrap; padding-bottom: 20px; } ui-stepper[orientation=\"vertical\"] .ui-st::before { top: 30px; bottom: 0; left: 12px; right: auto; width: 2px; height: auto; }\nui-wizard { display: flex; flex-direction: column; gap: var(--ui-space-4); } ui-wizard > ui-step { display: block; } ui-wizard > ui-step[hidden] { display: none; } .ui-wz-foot { display: flex; justify-content: space-between; gap: 8px; }\nui-tree { display: block; font-size: var(--ui-fs-md); } ui-tree ul { list-style: none; margin: 0; padding: 0; } ui-tree ul ul { padding-left: 14px; }\n.ui-tr-row { display: flex; align-items: center; gap: 4px; height: 26px; padding: 0 6px 0 calc(var(--lvl, 0) * 0px + 4px); border-radius: var(--ui-radius-sm); white-space: nowrap; } .ui-tr-row:hover { background: var(--ui-hover); } li[aria-selected=\"true\"] > .ui-tr-row { background: var(--ui-accent); color: var(--ui-text-on-accent); } li[aria-selected=\"true\"] > .ui-tr-row ui-icon { color: inherit; } li:focus-visible { outline: none; } li:focus-visible > .ui-tr-row { outline: 2px solid var(--ui-focus-ring); outline-offset: -2px; }\n.ui-tr-caret { width: 14px; display: inline-flex; justify-content: center; color: var(--ui-text-3); transition: transform var(--ui-dur-fast); font-size: 11px; } li[aria-expanded=\"true\"] > .ui-tr-row .ui-tr-caret { transform: rotate(90deg); } li[aria-selected=\"true\"] > .ui-tr-row .ui-tr-caret { color: inherit; } .ui-tr-ico { color: var(--ui-accent); } .ui-tr-lbl { overflow: hidden; text-overflow: ellipsis; }\nui-toolbar { display: flex; align-items: center; gap: 2px; min-height: var(--ui-toolbar-h); padding: 0 var(--ui-space-3); background: var(--ui-bg-content); border-bottom: 1px solid var(--ui-separator); flex-wrap: nowrap; overflow: hidden; } ui-toolbar[floating] { border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); box-shadow: var(--ui-shadow-2); } ui-toolbar[dense] { min-height: 34px; } ui-toolbar ui-divider[orientation=\"vertical\"] { margin: 0 6px; height: 18px; align-self: center; }\nui-status-bar { display: flex; align-items: center; gap: var(--ui-space-4); min-height: 24px; padding: 0 var(--ui-space-3); font-size: var(--ui-fs-xs); color: var(--ui-text-2); background: var(--ui-bg-sidebar); border-top: 1px solid var(--ui-separator); }\nui-navigation-bar { display: flex; align-items: center; gap: var(--ui-space-3); min-height: 44px; padding: 0 var(--ui-space-4); background: var(--ui-glass-solid); border-bottom: 1px solid var(--ui-separator); } ui-navigation-bar .ui-nb-t { font-weight: 600; font-size: var(--ui-fs-lg); flex: 1; } \nui-menubar { display: flex; align-items: center; gap: 0; height: var(--ui-menubar-h); padding: 0 6px; font-size: var(--ui-fs-md); } ui-menubar .ui-mb-start, ui-menubar .ui-mb-end { display: flex; align-items: center; gap: 0; height: 100%; } ui-menubar .ui-mb-end { margin-left: auto; gap: 2px; }\n.ui-mb-b { height: 22px; padding: 0 9px; border: 0; background: transparent; border-radius: 5px; font: inherit; color: inherit; } .ui-mb-b:hover, .ui-mb-b[aria-expanded=\"true\"] { background: var(--ui-pressed); } .ui-mb-b.bold { font-weight: 700; }\nui-menubar[variant=\"nav\"] { height: 40px; } ui-menubar[variant=\"nav\"] .ui-mb-b { height: 30px; border-radius: var(--ui-radius-md); padding: 0 12px; }\n.ui-cmd { width: min(620px, calc(100vw - 32px)); border-radius: var(--ui-radius-xl); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-4); overflow: hidden; display: flex; flex-direction: column; max-height: 60vh; }\n.ui-cmd-in { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid var(--ui-separator); } .ui-cmd-in input { flex: 1; border: 0; background: transparent; outline: none; font: inherit; font-size: var(--ui-fs-xl); color: inherit; } .ui-cmd-in ui-icon { color: var(--ui-text-3); font-size: 18px; }\n.ui-cmd-list { overflow: auto; padding: 6px; } .ui-cmd-sec { font-size: var(--ui-fs-xs); text-transform: uppercase; letter-spacing: .05em; color: var(--ui-text-3); padding: 8px 10px 4px; } .ui-cmd-it { display: flex; align-items: center; gap: 10px; padding: 7px 10px; border-radius: var(--ui-radius-md); } .ui-cmd-it.active { background: var(--ui-accent); color: var(--ui-text-on-accent); } .ui-cmd-it .t { flex: 1; } .ui-cmd-it ui-icon { font-size: 16px; } .ui-cmd-it .s { font-size: var(--ui-fs-xs); opacity: .7; } .ui-cmd-empty { padding: 28px; text-align: center; color: var(--ui-text-3); }\n\n/* ---- MODULE: src/components/menus/menus.css ---- */\n.ui-menu { min-width: 200px; max-width: 360px; padding: 4px; border-radius: 10px; border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-3); font-size: var(--ui-fs-md); overflow: auto; outline: none; }\n.ui-mi { display: flex; align-items: center; gap: 8px; width: 100%; height: 26px; padding: 0 8px; border: 0; background: transparent; border-radius: 5px; font: inherit; color: var(--ui-text); text-align: left; white-space: nowrap; }\n.ui-mi:focus, .ui-mi:hover:not(:disabled) { background: var(--ui-accent); color: var(--ui-text-on-accent); outline: none; } .ui-mi:disabled { opacity: .4; } .ui-mi.danger { color: var(--ui-danger); } .ui-mi.danger:focus, .ui-mi.danger:hover { background: var(--ui-danger); color: #fff; }\n.ui-mi-ck { width: 14px; display: inline-flex; justify-content: center; flex: none; } .ui-mi ui-icon { font-size: 15px; color: inherit; opacity: .85; } .ui-mi-lbl { flex: 1; overflow: hidden; text-overflow: ellipsis; } .ui-mi-sc { opacity: .55; font-size: var(--ui-fs-sm); margin-left: 16px; letter-spacing: .03em; } .ui-mi-arrow { opacity: .6; font-size: 12px; }\n.ui-menu-sep { height: 1px; background: var(--ui-separator); margin: 4px 6px; } .ui-menu-group { padding: 6px 8px 2px; font-size: var(--ui-fs-xs); color: var(--ui-text-3); font-weight: 600; text-transform: uppercase; letter-spacing: .04em; }\nui-context-menu { display: block; } ui-shortcut-menu { display: inline-flex; }\n\n/* ---- MODULE: src/components/overlays/overlays.css ---- */\nui-dialog, ui-modal, ui-confirm-dialog, ui-alert-dialog, ui-prompt-dialog, ui-drawer, ui-popover, ui-hover-card, ui-lightbox, ui-fullscreen-overlay, ui-toast { display: none; } ui-popover, ui-hover-card { display: inline-block; }\n.ui-backdrop { z-index: 99990 !important; background: rgba(0,0,0,.42); }\n.ui-backdrop.ui-bd-top { align-items: flex-start; padding-top: 14vh; } .ui-backdrop.ui-bd-drawer { align-items: stretch; justify-content: stretch; } .ui-backdrop.ui-bd-dark { background: rgba(0,0,0,.86); }\n.ui-dlg { position: relative; z-index: 2; width: var(--ui-dlg-w, 520px); max-width: calc(100vw - 32px); max-height: calc(100vh - 48px); display: flex; flex-direction: column; border-radius: var(--ui-radius-xl); border: 1px solid var(--ui-border-strong, var(--ui-border)); background: var(--ui-surface, #ffffff) !important; -webkit-backdrop-filter: none !important; backdrop-filter: none !important; box-shadow: var(--ui-shadow-4); overflow: hidden; color: var(--ui-text); outline: none; opacity: 1; }\n.ui-dlg[data-size=\"sm\"] { --ui-dlg-w: 380px; } .ui-dlg[data-size=\"lg\"] { --ui-dlg-w: 720px; } .ui-dlg[data-size=\"xl\"] { --ui-dlg-w: 960px; } .ui-dlg[data-size=\"full\"] { --ui-dlg-w: calc(100vw - 32px); height: calc(100vh - 32px); }\n.ui-dlg-h { display: flex; align-items: center; gap: 10px; padding: 16px 20px 6px; } .ui-dlg-h h3 { flex: 1; font-size: var(--ui-fs-lg); } .ui-dlg-h > ui-icon { font-size: 22px; } .ui-dlg-h > ui-icon[name=\"\"] { display: none; }\n.ui-dlg[data-kind=\"info\"] .ui-dlg-h > ui-icon { color: var(--ui-info); } .ui-dlg[data-kind=\"success\"] .ui-dlg-h > ui-icon { color: var(--ui-success); } .ui-dlg[data-kind=\"warning\"] .ui-dlg-h > ui-icon { color: var(--ui-warning); } .ui-dlg[data-kind=\"danger\"] .ui-dlg-h > ui-icon { color: var(--ui-danger); }\n.ui-dlg-b { padding: 6px 20px 16px; overflow: auto; flex: 1; color: var(--ui-text); } .ui-dlg-msg p { color: var(--ui-text-2); margin-bottom: 8px; } .ui-dlg-f { display: flex; justify-content: flex-end; gap: 8px; padding: 12px 20px 16px; } .ui-dlg-f:empty { display: none; } .ui-dlg-f > div { display: contents; }\n.ui-drawer { position: absolute; display: flex; flex-direction: column; background: var(--ui-glass-solid); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-4); color: var(--ui-text); outline: none; max-width: 100vw; }\n.ui-drawer[data-side=\"right\"] { top: 0; bottom: 0; right: 0; width: var(--ui-drawer-w, 380px); border-radius: var(--ui-radius-xl) 0 0 var(--ui-radius-xl); } .ui-drawer[data-side=\"left\"] { top: 0; bottom: 0; left: 0; width: var(--ui-drawer-w, 380px); border-radius: 0 var(--ui-radius-xl) var(--ui-radius-xl) 0; }\n.ui-drawer[data-side=\"bottom\"] { left: 0; right: 0; bottom: 0; max-height: 80vh; border-radius: var(--ui-radius-xl) var(--ui-radius-xl) 0 0; margin: 0 auto; width: min(640px, 100%); } .ui-drawer[data-side=\"bottom\"]::before { content: ''; align-self: center; width: 36px; height: 5px; border-radius: 3px; background: var(--ui-border-strong); margin-top: 8px; }\n.ui-drawer .ui-dlg-h { padding-top: 16px; } .ui-drawer .ui-dlg-b { flex: 1; }\n.ui-popover { padding: 12px; min-width: 160px; max-width: 360px; border-radius: var(--ui-radius-lg); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-3); }\n.ui-tooltip { position: fixed; z-index: var(--ui-z-tooltip); max-width: 280px; padding: 4px 8px; border-radius: 6px; background: #2b2b2e; color: #f5f5f7; font-size: var(--ui-fs-sm); line-height: 1.35; pointer-events: none; box-shadow: var(--ui-shadow-2); } [data-scheme=\"dark\"] .ui-tooltip { background: #f2f2f5; color: #1d1d1f; }\nui-tooltip { display: inline-block; }\n.ui-lb-wrap { position: relative; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; color: #fff; } .ui-lb-wrap img { max-width: 90vw; max-height: 82vh; border-radius: 8px; box-shadow: var(--ui-shadow-4); transition: transform var(--ui-dur) var(--ui-ease); cursor: zoom-in; } .ui-lb-wrap img.zoom { transform: scale(1.8); cursor: zoom-out; }\n.ui-lb-cap { position: absolute; bottom: 24px; left: 0; right: 0; text-align: center; font-size: var(--ui-fs-md); } .ui-lb-nav { position: absolute; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 50%; border: 0; background: rgba(255,255,255,.14); color: #fff; font-size: 20px; display: flex; align-items: center; justify-content: center; } .ui-lb-nav:hover { background: rgba(255,255,255,.26); } .ui-lb-nav.prev { left: 20px; } .ui-lb-nav.next { right: 20px; } .ui-lb-close { position: absolute; top: 18px; right: 20px; width: 36px; height: 36px; border-radius: 50%; border: 0; background: rgba(255,255,255,.14); color: #fff; display: flex; align-items: center; justify-content: center; } .ui-lb-count { position: absolute; top: 24px; left: 24px; font-size: var(--ui-fs-sm); opacity: .8; }\nui-loading-overlay, ui-progress-overlay { display: block; position: relative; } .ui-lo { position: absolute; inset: 0; z-index: 5; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: color-mix(in srgb, var(--ui-bg-content) 70%, transparent); border-radius: inherit; color: var(--ui-text); } @supports (backdrop-filter: blur(1px)) { .ui-lo { backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); } } .ui-lo-full { position: fixed; z-index: var(--ui-z-modal); background: rgba(0,0,0,.35); color: #fff; } .ui-lo ui-progress { width: 220px; }\n.ui-toaster { position: fixed; top: 38px; right: 14px; width: 360px; max-width: calc(100vw - 28px); display: flex; flex-direction: column; gap: 8px; pointer-events: none; }\n.ui-toast { pointer-events: auto; display: flex; align-items: flex-start; gap: 10px; padding: 11px 12px; border-radius: 14px; border: 1px solid var(--ui-border); background: var(--ui-glass-solid); box-shadow: var(--ui-shadow-3); font-size: var(--ui-fs-md); color: var(--ui-text); } @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) { .ui-toast { background: var(--ui-glass); -webkit-backdrop-filter: saturate(180%) blur(var(--ui-blur)); backdrop-filter: saturate(180%) blur(var(--ui-blur)); } }\n.ui-toast-icon { display: inline-flex; margin-top: 1px; color: var(--ui-info); } .ui-toast[data-type=\"success\"] .ui-toast-icon { color: var(--ui-success); } .ui-toast[data-type=\"warning\"] .ui-toast-icon { color: var(--ui-warning); } .ui-toast[data-type=\"danger\"] .ui-toast-icon, .ui-toast[data-type=\"error\"] .ui-toast-icon { color: var(--ui-danger); }\n.ui-toast-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; } .ui-toast-body span { color: var(--ui-text-2); } .ui-toast-action { border: 0; background: transparent; color: var(--ui-accent); font: inherit; font-weight: 600; padding: 2px 6px; border-radius: 5px; } .ui-toast-action:hover { background: var(--ui-hover); } .ui-toast-x { border: 0; background: transparent; color: var(--ui-text-3); padding: 3px; border-radius: 50%; display: inline-flex; } .ui-toast-x:hover { background: var(--ui-hover); color: var(--ui-text); }\n\n/* ---- MODULE: src/components/feedback/feedback.css ---- */\nui-alert { display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; border-radius: var(--ui-radius-lg); background: var(--ui-al-bg, var(--ui-info-soft)); border: 1px solid var(--ui-al-bd, transparent); color: var(--ui-text); font-size: var(--ui-fs-md); --ui-al-c: var(--ui-info); }\nui-alert[variant=\"success\"] { --ui-al-bg: var(--ui-success-soft); --ui-al-c: var(--ui-success); } ui-alert[variant=\"warning\"] { --ui-al-bg: var(--ui-warning-soft); --ui-al-c: var(--ui-warning); } ui-alert[variant=\"danger\"] { --ui-al-bg: var(--ui-danger-soft); --ui-al-c: var(--ui-danger); }\nui-alert > ui-icon { color: var(--ui-al-c); font-size: 18px; margin-top: 1px; } ui-alert .ui-al-b { flex: 1; min-width: 0; } ui-alert .ui-al-b strong { display: block; } ui-alert .ui-al-b div { color: var(--ui-text-2); } ui-alert .ui-al-x { border: 0; background: transparent; color: var(--ui-text-3); border-radius: 50%; padding: 3px; display: inline-flex; } ui-alert .ui-al-x:hover { background: var(--ui-hover); }\nui-banner { border-radius: 0; justify-content: center; border-width: 0 0 1px; } ui-callout { border-radius: var(--ui-radius-md); border-left: 3px solid var(--ui-al-c); } ui-validation-message { background: none; padding: 0; font-size: var(--ui-fs-sm); color: var(--ui-al-c); gap: 6px; align-items: center; } ui-validation-message .ui-al-b div { color: inherit; }\nui-empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 6px; padding: var(--ui-space-8) var(--ui-space-4); color: var(--ui-text-2); --ui-es-c: var(--ui-text-3); } ui-empty-state > .ui-es-i { width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; background: var(--ui-surface-3); color: var(--ui-es-c); margin-bottom: 6px; } ui-empty-state > .ui-es-t { font-size: var(--ui-fs-lg); font-weight: 600; color: var(--ui-text); } ui-empty-state > .ui-es-d { max-width: 360px; } ui-empty-state > .ui-es-a { display: flex; gap: 8px; margin-top: 10px; }\nui-empty-state[variant=\"danger\"] { --ui-es-c: var(--ui-danger); } ui-empty-state[variant=\"danger\"] > .ui-es-i { background: var(--ui-danger-soft); } ui-empty-state[variant=\"success\"] { --ui-es-c: var(--ui-success); } ui-empty-state[variant=\"success\"] > .ui-es-i { background: var(--ui-success-soft); } ui-empty-state[variant=\"warning\"] { --ui-es-c: var(--ui-warning); } ui-empty-state[variant=\"warning\"] > .ui-es-i { background: var(--ui-warning-soft); }\nui-connection-status { display: inline-flex; } ui-result-summary { display: block; text-align: center; padding: var(--ui-space-6); } ui-result-summary .ui-rs-i { font-size: 44px; margin-bottom: 8px; } ui-result-summary[status=\"success\"] .ui-rs-i { color: var(--ui-success); } ui-result-summary[status=\"danger\"] .ui-rs-i { color: var(--ui-danger); } ui-result-summary[status=\"warning\"] .ui-rs-i { color: var(--ui-warning); } ui-result-summary[status=\"info\"] .ui-rs-i { color: var(--ui-info); } ui-result-summary dl { display: grid; grid-template-columns: auto auto; gap: 4px 24px; justify-content: center; margin: 12px 0 0; text-align: left; } ui-result-summary dt { color: var(--ui-text-3); } ui-result-summary dd { margin: 0; font-weight: 500; }\nui-notification { display: flex; gap: 10px; padding: 10px 12px; border-radius: var(--ui-radius-lg); background: var(--ui-surface); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-1); } ui-notification .ui-n-i { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: var(--ui-accent-soft); color: var(--ui-accent); font-size: 16px; flex: none; } ui-notification .ui-n-b { flex: 1; min-width: 0; } ui-notification .ui-n-h { display: flex; justify-content: space-between; gap: 8px; font-weight: 600; } ui-notification .ui-n-t { font-weight: 400; color: var(--ui-text-3); font-size: var(--ui-fs-xs); } ui-notification .ui-n-m { color: var(--ui-text-2); }\nui-notification-group { display: block; } ui-notification-group > .ui-ng-h { display: flex; align-items: center; justify-content: space-between; padding: 4px 2px 8px; font-weight: 600; } ui-notification-group > .ui-ng-l { display: grid; gap: 8px; }\n\n/* ---- MODULE: src/components/windows/windows.css ---- */\nui-window-manager { display: block; position: relative; overflow: hidden; width: 100%; height: 100%; }\nui-window { position: absolute; display: flex; flex-direction: column; min-width: 0; border-radius: var(--ui-radius-lg); background: var(--ui-bg-content); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-2); color: var(--ui-text); outline: none; }\nui-window[focused] { box-shadow: var(--ui-shadow-4); } ui-window[state=\"minimized\"] { display: none; }\nui-window[state=\"maximized\"] { left: 0 !important; top: 0 !important; width: 100% !important; height: 100% !important; border-radius: 0; border-width: 0; } ui-window[state=\"fullscreen\"] { position: fixed; left: 0 !important; top: 0 !important; width: 100vw !important; height: 100vh !important; border-radius: 0; border: 0; z-index: calc(var(--ui-z-modal) - 1) !important; }\nui-window[kind=\"utility\"] { border-radius: var(--ui-radius-md); } ui-window[kind=\"floating\"] { box-shadow: var(--ui-shadow-3); }\n.ui-win-clip { display: flex; flex-direction: column; flex: 1; min-height: 0; border-radius: inherit; overflow: hidden; }\n.ui-win-tb { display: flex; align-items: center; height: var(--ui-titlebar-h); flex: none; padding: 0 12px; position: relative; background: var(--ui-glass-solid); border-bottom: 1px solid var(--ui-separator); user-select: none; -webkit-user-select: none; touch-action: none; }\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) { .ui-win-tb { background: var(--ui-glass); -webkit-backdrop-filter: saturate(180%) blur(var(--ui-blur)); backdrop-filter: saturate(180%) blur(var(--ui-blur)); } }\nui-window[kind=\"utility\"] .ui-win-tb { height: 26px; } ui-window:not([focused]) .ui-win-tb { opacity: .92; }\n.ui-win-ctl { display: flex; gap: 8px; position: relative; z-index: 2; } .ui-win-ctl button { width: 12px; height: 12px; border-radius: 50%; border: 0.5px solid rgba(0,0,0,.18); padding: 0; position: relative; background: var(--ui-text-3); opacity: .55; display: flex; align-items: center; justify-content: center; color: rgba(0,0,0,.6); transition: opacity var(--ui-dur-fast); }\nui-window[focused] .ui-win-ctl button.close { background: #ff5f57; opacity: 1; } ui-window[focused] .ui-win-ctl button.min { background: #febc2e; opacity: 1; } ui-window[focused] .ui-win-ctl button.max { background: #28c840; opacity: 1; } .ui-win-ctl:hover button { opacity: 1; } .ui-win-ctl button:disabled { background: var(--ui-surface-3) !important; opacity: .6; }\n.ui-win-ctl button svg { width: 8px; height: 8px; opacity: 0; } .ui-win-ctl:hover button svg, .ui-win-ctl:focus-within button svg { opacity: 1; } .ui-win-ctl button:focus-visible { outline: 2px solid var(--ui-focus-ring); outline-offset: 2px; }\n.ui-win-title { position: absolute; left: 0; right: 0; text-align: center; font-weight: var(--ui-fw-semibold); font-size: var(--ui-fs-md); pointer-events: none; padding: 0 90px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: flex; justify-content: center; align-items: center; gap: 6px; } ui-window:not([focused]) .ui-win-title { color: var(--ui-text-3); } .ui-win-title ui-icon { font-size: 14px; }\n.ui-win-end { margin-left: auto; position: relative; z-index: 2; display: flex; gap: 4px; }\n.ui-win-menu { flex: none; border-bottom: 1px solid var(--ui-separator); background: var(--ui-bg-content); } .ui-win-menu:empty, .ui-win-tool:empty, .ui-win-foot:empty { display: none; } .ui-win-tool { flex: none; } .ui-win-body { flex: 1; min-height: 0; overflow: auto; position: relative; } .ui-win-body.flush { overflow: hidden; display: flex; flex-direction: column; } .ui-win-foot { flex: none; border-top: 1px solid var(--ui-separator); }\n.ui-win-rz { position: absolute; z-index: 5; touch-action: none; } .ui-win-rz[data-d=\"n\"], .ui-win-rz[data-d=\"s\"] { left: 8px; right: 8px; height: 6px; cursor: ns-resize; } .ui-win-rz[data-d=\"e\"], .ui-win-rz[data-d=\"w\"] { top: 8px; bottom: 8px; width: 6px; cursor: ew-resize; } .ui-win-rz[data-d=\"n\"] { top: -3px; } .ui-win-rz[data-d=\"s\"] { bottom: -3px; } .ui-win-rz[data-d=\"e\"] { right: -3px; } .ui-win-rz[data-d=\"w\"] { left: -3px; }\n.ui-win-rz[data-d=\"ne\"], .ui-win-rz[data-d=\"nw\"], .ui-win-rz[data-d=\"se\"], .ui-win-rz[data-d=\"sw\"] { width: 12px; height: 12px; } .ui-win-rz[data-d=\"ne\"] { top: -3px; right: -3px; cursor: nesw-resize; } .ui-win-rz[data-d=\"nw\"] { top: -3px; left: -3px; cursor: nwse-resize; } .ui-win-rz[data-d=\"se\"] { bottom: -3px; right: -3px; cursor: nwse-resize; } .ui-win-rz[data-d=\"sw\"] { bottom: -3px; left: -3px; cursor: nesw-resize; }\nui-window[state=\"maximized\"] .ui-win-rz, ui-window[state=\"fullscreen\"] .ui-win-rz { display: none; } ui-window.ui-dragging-win { transition: none; user-select: none; }\nui-window[kind=\"modal\"] { box-shadow: var(--ui-shadow-4); }\nui-inspector-panel { display: block; font-size: var(--ui-fs-sm); } ui-inspector-panel > .ui-ip-h { font-weight: 600; padding: 8px 12px; border-bottom: 1px solid var(--ui-separator); background: var(--ui-surface-2); } ui-inspector-panel > .ui-ip-b { padding: 8px 12px; }\n.ui-wsw { display: flex; gap: 14px; padding: 18px; border-radius: 22px; border: 1px solid var(--ui-glass-border); box-shadow: var(--ui-shadow-4); max-width: 92vw; overflow: auto; } .ui-wsw-it { width: 112px; display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 10px 8px; border-radius: 14px; border: 2px solid transparent; background: transparent; font: inherit; color: var(--ui-text); } .ui-wsw-it.active { border-color: var(--ui-accent); background: var(--ui-accent-soft); } .ui-wsw-it .ic { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 28px; } .ui-wsw-it span { font-size: var(--ui-fs-sm); max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n/* ---- MODULE: src/components/system/desktop.css ---- */\nui-desktop { display: block; position: relative; width: 100%; height: 100%; overflow: hidden; background: var(--ui-wallpaper); background-size: cover; background-position: center; color: var(--ui-text); user-select: none; -webkit-user-select: none; }\nui-desktop .ui-dt-mb { position: absolute; top: 0; left: 0; right: 0; z-index: var(--ui-z-menubar); height: var(--ui-menubar-h); font-size: var(--ui-fs-md); color: var(--ui-text); border-bottom: 1px solid var(--ui-separator); } ui-desktop .ui-dt-mb ui-menubar { height: 100%; }\nui-desktop .ui-dt-area { position: absolute; top: var(--ui-menubar-h); left: 0; right: 0; bottom: 0; } ui-desktop .ui-dt-widgets { position: absolute; inset: 0; pointer-events: none; } ui-desktop .ui-dt-widgets > * { pointer-events: auto; }\nui-desktop .ui-dt-dock { position: absolute; left: 0; right: 0; bottom: 8px; display: flex; justify-content: center; pointer-events: none; z-index: 800; } ui-desktop .ui-dt-dock ui-dock { pointer-events: auto; } ui-desktop[dock-hidden] .ui-dt-dock { display: none; }\nui-desktop-widget { display: block; width: var(--ui-w, 200px); border-radius: var(--ui-radius-xl); border: 1px solid var(--ui-glass-border); box-shadow: var(--ui-shadow-2); padding: 12px 14px; position: absolute; } ui-desktop-widget > .ui-dw-h { font-size: var(--ui-fs-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--ui-text-3); margin-bottom: 4px; cursor: grab; }\nui-desktop-surface { display: block; position: absolute; inset: 0; }\nui-dock-item, ui-dock-separator { display: none; }\nui-dock { display: inline-flex; align-items: flex-end; gap: 4px; padding: 5px 7px 6px; border-radius: 22px; border: 1px solid var(--ui-glass-border); box-shadow: var(--ui-shadow-3); height: calc(var(--ui-dock-size) + 14px); }\n.ui-dk-it { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: calc(var(--ui-dock-size) * var(--s, 1)); height: calc(var(--ui-dock-size) * var(--s, 1)); border: 0; background: transparent; padding: 0; transition: width var(--ui-dur-fast) linear, height var(--ui-dur-fast) linear; flex: none; }\n.ui-dk-ic { width: 100%; height: 100%; border-radius: 22%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: calc(var(--ui-dock-size) * var(--s, 1) * .52); background: var(--ic, linear-gradient(135deg, #5ac8fa, #0a84ff)); box-shadow: 0 2px 6px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.35); } .ui-dk-it:focus-visible { outline: 2px solid var(--ui-focus-ring); outline-offset: 2px; border-radius: 12px; } .ui-dk-it:active .ui-dk-ic { filter: brightness(.82); }\nui-dock-indicator { position: absolute; bottom: -6px; width: 4px; height: 4px; border-radius: 50%; background: var(--ui-text-2); } .ui-dk-sep { width: 1px; align-self: stretch; margin: 6px 4px; background: var(--ui-border-strong); } .ui-dk-badge { position: absolute; top: -4px; right: -4px; min-width: 18px; height: 18px; border-radius: 9px; background: var(--ui-danger); color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; padding: 0 5px; }\nui-menubar-clock { font-variant-numeric: tabular-nums; padding: 0 8px; display: inline-flex; align-items: center; gap: 6px; height: 22px; border-radius: 5px; border: 0; background: transparent; font: inherit; color: inherit; } ui-menubar-clock:hover { background: var(--ui-pressed); }\nui-menubar-status-item { display: inline-flex; } .ui-msi { height: 22px; min-width: 24px; padding: 0 6px; border: 0; background: transparent; border-radius: 5px; color: inherit; display: inline-flex; align-items: center; gap: 4px; font: inherit; position: relative; } .ui-msi:hover, .ui-msi[aria-expanded=\"true\"] { background: var(--ui-pressed); } .ui-msi ui-icon { font-size: 15px; } .ui-msi .dot { position: absolute; top: 2px; right: 4px; width: 7px; height: 7px; border-radius: 50%; background: var(--ui-danger); }\nui-system-tray { display: inline-flex; align-items: center; gap: 0; }\n.ui-nc { position: fixed; top: 34px; right: 8px; bottom: 90px; width: 380px; max-width: calc(100vw - 16px); display: flex; flex-direction: column; padding: 14px; border-radius: 18px; border: 1px solid var(--ui-glass-border); box-shadow: var(--ui-shadow-4); color: var(--ui-text); }\n.ui-nc-h { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; } .ui-nc-h h3 { font-size: var(--ui-fs-xl); } .ui-nc-l { flex: 1; overflow: auto; display: grid; align-content: start; gap: 8px; } .ui-nc-app { font-size: var(--ui-fs-xs); text-transform: uppercase; letter-spacing: .05em; color: var(--ui-text-3); margin: 6px 4px 0; } .ui-nc-dnd { display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; border-radius: 12px; background: var(--ui-surface-2); margin-bottom: 10px; }\nui-quick-settings { display: block; width: 320px; padding: 12px; border-radius: 18px; border: 1px solid var(--ui-glass-border); box-shadow: var(--ui-shadow-4); } ui-quick-settings[inline] { box-shadow: var(--ui-shadow-1); }\n.ui-qs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; } .ui-qs-tile { display: flex; align-items: center; gap: 10px; padding: 10px; border-radius: 14px; border: 0; background: var(--ui-surface-2); color: var(--ui-text); font: inherit; text-align: left; } .ui-qs-tile .ic { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--ui-surface-3); font-size: 16px; flex: none; } .ui-qs-tile[aria-pressed=\"true\"] .ic { background: var(--ui-accent); color: #fff; } .ui-qs-tile small { display: block; color: var(--ui-text-3); font-size: var(--ui-fs-xs); } .ui-qs-tile span { font-weight: 500; }\n.ui-qs-sl { margin-top: 10px; padding: 8px 10px; border-radius: 14px; background: var(--ui-surface-2); } .ui-qs-sl > div { font-size: var(--ui-fs-sm); font-weight: 500; margin-bottom: 2px; display: flex; align-items: center; gap: 6px; }\n.ui-lp { width: 100vw; height: 100vh; display: flex; flex-direction: column; align-items: center; padding-top: 12vh; gap: 28px; color: #fff; } .ui-lp-g { display: grid; grid-template-columns: repeat(auto-fill, 104px); gap: 24px; max-width: 760px; justify-content: center; } .ui-lp-a { display: flex; flex-direction: column; align-items: center; gap: 6px; border: 0; background: transparent; color: #fff; font: inherit; font-size: var(--ui-fs-sm); padding: 6px; border-radius: 14px; } .ui-lp-a:hover, .ui-lp-a:focus-visible { background: rgba(255,255,255,.14); outline: none; } .ui-lp-a .ic { width: 72px; height: 72px; border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 36px; box-shadow: 0 4px 12px rgba(0,0,0,.35); }\nui-app-switcher { display: inline-flex; }\n\n/* ---- MODULE: src/components/data-display/data-display.css ---- */\nui-list { display: block; overflow: auto; } ui-list ul { list-style: none; margin: 0; padding: 0; } ui-list[bordered] { border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); background: var(--ui-surface); }\n.ui-li { display: flex; align-items: center; gap: 10px; min-height: 40px; padding: 6px 12px; border-bottom: 1px solid var(--ui-separator); outline: none; } ui-list[bordered] .ui-li:last-child { border-bottom: 0; } .ui-li:hover { background: var(--ui-hover); } .ui-li[aria-selected=\"true\"] { background: var(--ui-accent); color: var(--ui-text-on-accent); } .ui-li[aria-selected=\"true\"] .sub, .ui-li[aria-selected=\"true\"] ui-icon { color: inherit; opacity: .85; } .ui-li:focus-visible { outline: 2px solid var(--ui-focus-ring); outline-offset: -2px; }\n.ui-li .main { flex: 1; min-width: 0; } .ui-li .t { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ui-li .sub { font-size: var(--ui-fs-sm); color: var(--ui-text-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ui-li .end { color: var(--ui-text-3); font-size: var(--ui-fs-sm); } .ui-li > ui-icon { color: var(--ui-accent); font-size: 18px; }\nui-list-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-bottom: 1px solid var(--ui-separator); }\n.ui-dt { display: flex; flex-direction: column; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); overflow: hidden; background: var(--ui-surface); min-height: 0; } ui-data-table { display: block; }\n.ui-dt-bar { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-bottom: 1px solid var(--ui-separator); } .ui-dt-bar ui-search-field { width: 240px; } .ui-dt-count { margin-left: auto; font-size: var(--ui-fs-sm); color: var(--ui-text-3); }\n.ui-dt-row { display: grid; grid-template-columns: var(--cols); align-items: center; min-height: var(--ui-dt-rh, 36px); border-bottom: 1px solid var(--ui-separator); font-size: var(--ui-fs-md); outline: none; } .ui-dt-head { background: var(--ui-surface-2); font-size: var(--ui-fs-sm); font-weight: var(--ui-fw-semibold); color: var(--ui-text-2); } .ui-dt-body .ui-dt-row:hover { background: var(--ui-hover); } .ui-dt-row[aria-selected=\"true\"] { background: var(--ui-selected); } .ui-dt-row:focus-visible { outline: 2px solid var(--ui-focus-ring); outline-offset: -2px; }\n.ui-dt-c { padding: 0 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; } .ui-dt-c.r { text-align: right; font-variant-numeric: tabular-nums; } .ui-dt-c.ck { padding: 0 0 0 12px; } .ui-dt-h { border: 0; background: transparent; font: inherit; color: inherit; display: inline-flex; align-items: center; gap: 4px; padding: 0 12px; height: 100%; width: 100%; text-align: left; } .ui-dt-h.r { justify-content: flex-end; } .ui-dt-h:hover { color: var(--ui-text); background: var(--ui-hover); } .ui-dt-h ui-icon { font-size: 12px; opacity: .8; }\n.ui-dt-scroll { overflow: auto; position: relative; flex: 1; min-height: 0; max-height: var(--ui-dt-h, none); } .ui-dt-empty { padding: 28px; text-align: center; color: var(--ui-text-3); } .ui-dt-foot { display: flex; align-items: center; justify-content: space-between; padding: 6px 12px; border-top: 1px solid var(--ui-separator); font-size: var(--ui-fs-sm); color: var(--ui-text-3); }\nui-table-row { display: flex; } ui-table-cell { display: block; padding: 6px 12px; } ui-table-header { display: block; font-weight: 600; background: var(--ui-surface-2); }\nui-comparison-table { display: block; overflow: auto; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); } ui-comparison-table table { width: 100%; border-collapse: collapse; } ui-comparison-table th, ui-comparison-table td { padding: 10px 14px; text-align: center; border-bottom: 1px solid var(--ui-separator); } ui-comparison-table th:first-child, ui-comparison-table td:first-child { text-align: left; } ui-comparison-table th.hl, ui-comparison-table td.hl { background: var(--ui-accent-soft); } ui-comparison-table td ui-icon { color: var(--ui-success); } ui-comparison-table td ui-icon.no { color: var(--ui-text-3); }\nui-description-list { display: block; } ui-description-list dl { display: grid; grid-template-columns: minmax(80px, max-content) 1fr; gap: 6px 20px; margin: 0; } ui-description-list dt { color: var(--ui-text-3); } ui-description-list dd { margin: 0; word-break: break-word; } ui-description-list[bordered] dl > * { padding: 6px 0; border-bottom: 1px solid var(--ui-separator); }\nui-timeline { display: block; } ui-timeline ol { list-style: none; margin: 0; padding: 0; } .ui-tl { display: grid; grid-template-columns: 28px 1fr; gap: 0 10px; padding-bottom: 16px; position: relative; } .ui-tl::before { content: ''; position: absolute; left: 13px; top: 28px; bottom: 0; width: 2px; background: var(--ui-separator); } .ui-tl:last-child::before { display: none; } .ui-tl .dot { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--c, var(--ui-accent)); color: #fff; font-size: 14px; } .ui-tl .t { font-weight: 600; } .ui-tl .tm { font-size: var(--ui-fs-xs); color: var(--ui-text-3); } .ui-tl .d { color: var(--ui-text-2); margin-top: 2px; }\nui-activity-feed { display: block; } .ui-af { display: flex; gap: 10px; padding: 8px 0; align-items: flex-start; border-bottom: 1px solid var(--ui-separator); } .ui-af:last-child { border: 0; } .ui-af .tx { flex: 1; min-width: 0; } .ui-af .tm { font-size: var(--ui-fs-xs); color: var(--ui-text-3); }\nui-stat-card { display: flex; flex-direction: column; gap: 6px; padding: var(--ui-space-4); border-radius: var(--ui-radius-lg); background: var(--ui-surface); border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-1); min-width: 0; } .ui-sc-h { display: flex; justify-content: space-between; align-items: center; color: var(--ui-text-2); font-size: var(--ui-fs-sm); } .ui-sc-h ui-icon { font-size: 18px; color: var(--ui-accent); background: var(--ui-accent-soft); border-radius: 8px; padding: 6px; box-sizing: content-box; } .ui-sc-v { font-size: var(--ui-fs-2xl); font-weight: 700; letter-spacing: -.02em; font-variant-numeric: tabular-nums; } .ui-sc-d { font-size: var(--ui-fs-sm); display: flex; align-items: center; gap: 4px; } .ui-sc-d.up { color: var(--ui-success); } .ui-sc-d.down { color: var(--ui-danger); } .ui-sc-d span { color: var(--ui-text-3); }\nui-counter, ui-number-display { display: inline-block; font-variant-numeric: tabular-nums; font-weight: 700; font-size: var(--ui-fs-3xl); letter-spacing: -.02em; } ui-number-display { font-weight: 600; font-size: inherit; }\nui-rating { display: inline-flex; gap: 2px; } .ui-rt { border: 0; background: transparent; padding: 1px; color: var(--ui-surface-3); font-size: var(--ui-rt-s, 20px); display: inline-flex; } [data-scheme=\"dark\"] .ui-rt { color: #55555c; } .ui-rt.on { color: #ffb400; } .ui-rt svg { fill: currentColor; } ui-rating[readonly] .ui-rt { pointer-events: none; }\nui-progress-summary { display: grid; gap: 10px; } ui-progress-summary .ui-ps-r { display: grid; gap: 4px; }\nui-kanban-board { display: flex; gap: 12px; align-items: flex-start; overflow-x: auto; padding-bottom: 6px; } ui-kanban-column, .ui-kb-col { flex: 0 0 260px; background: var(--ui-surface-2); border-radius: var(--ui-radius-lg); padding: 8px; display: flex; flex-direction: column; gap: 8px; max-height: 100%; } .ui-kb-col.ui-drop-over { outline: 2px dashed var(--ui-accent); outline-offset: -2px; } .ui-kb-h { display: flex; justify-content: space-between; padding: 2px 4px; font-weight: 600; } .ui-kb-h span { color: var(--ui-text-3); font-weight: 500; } .ui-kb-cards { display: flex; flex-direction: column; gap: 8px; min-height: 24px; overflow: auto; }\nui-kanban-card, .ui-kb-card { display: block; background: var(--ui-surface); border: 1px solid var(--ui-border); border-radius: var(--ui-radius-md); padding: 10px; box-shadow: var(--ui-shadow-1); } .ui-kb-card.ui-dragging { opacity: .4; } .ui-kb-card:focus-visible { outline: 2px solid var(--ui-focus-ring); } .ui-kb-card .tg { display: flex; gap: 6px; margin-top: 8px; align-items: center; justify-content: space-between; }\n\n/* ---- MODULE: src/components/charts/charts.css ---- */\nui-chart { display: block; position: relative; min-width: 0; } .ui-ch-wrap { position: relative; width: 100%; } .ui-ch-wrap svg { display: block; width: 100%; overflow: visible; font-family: var(--ui-font); }\n.ui-ch-axis text { fill: var(--ui-text-3); font-size: 11px; } .ui-ch-grid line { stroke: var(--ui-separator); stroke-width: 1; } .ui-ch-axis line { stroke: var(--ui-border-strong); } .ui-ch-lbl { fill: var(--ui-text-2); font-size: 11px; } .ui-ch-big { fill: var(--ui-text); font-weight: 700; } .ui-ch-guide { stroke: var(--ui-border-strong); stroke-dasharray: 3 3; pointer-events: none; opacity: 0; }\n.ui-ch-wrap [data-tip] { cursor: default; transition: opacity var(--ui-dur-fast), filter var(--ui-dur-fast); } .ui-ch-wrap.hov [data-tip]:not(.band):not(:hover) { opacity: .55; } .ui-ch-wrap [data-tip].band { fill: transparent; } .ui-ch-wrap .pt { stroke: var(--ui-bg-content); stroke-width: 2; }\n@keyframes ui-draw { to { stroke-dashoffset: 0; } } @keyframes ui-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } } @keyframes ui-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } } @keyframes ui-growx { from { transform: scaleX(0); } to { transform: scaleX(1); } } @keyframes ui-pop { from { opacity: 0; transform: scale(.85); } to { opacity: 1; transform: none; } }\n.ui-ch-line { stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-draw calc(var(--ui-dur-slow) * 3) var(--ui-ease) forwards; } .ui-ch-fadein { animation: ui-rise calc(var(--ui-dur-slow) * 2) var(--ui-ease) both; } .ui-ch-bar { transform-box: fill-box; transform-origin: bottom; animation: ui-grow calc(var(--ui-dur-slow) * 2) var(--ui-ease) both; } .ui-ch-barx { transform-box: fill-box; transform-origin: left; animation: ui-growx calc(var(--ui-dur-slow) * 2) var(--ui-ease) both; } .ui-ch-popin { transform-box: fill-box; transform-origin: center; animation: ui-pop calc(var(--ui-dur-slow) * 2) var(--ui-ease) both; }\nui-chart[data-static] .ui-ch-line { animation: none; stroke-dashoffset: 0; } ui-chart[data-static] [class^=\"ui-ch-\"], ui-chart[data-static] .ui-ch-bar, ui-chart[data-static] .ui-ch-barx, ui-chart[data-static] .ui-ch-popin { animation: none; }\nui-chart-tooltip { position: absolute; z-index: 5; pointer-events: none; padding: 6px 9px; border-radius: 8px; border: 1px solid var(--ui-border); background: var(--ui-glass-solid); box-shadow: var(--ui-shadow-2); font-size: var(--ui-fs-sm); white-space: nowrap; opacity: 0; transition: opacity var(--ui-dur-fast); transform: translate(-50%, -100%); } ui-chart-tooltip.on { opacity: 1; } ui-chart-tooltip b { display: block; margin-bottom: 2px; } ui-chart-tooltip i { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; } ui-chart-tooltip span { color: var(--ui-text-2); margin-left: 10px; float: right; font-variant-numeric: tabular-nums; }\nui-chart-legend { display: flex; flex-wrap: wrap; gap: 4px 14px; justify-content: center; padding-top: 8px; } ui-chart-legend button { display: inline-flex; align-items: center; gap: 6px; border: 0; background: transparent; font: inherit; font-size: var(--ui-fs-sm); color: var(--ui-text-2); padding: 2px 4px; border-radius: 5px; } ui-chart-legend button:hover { background: var(--ui-hover); } ui-chart-legend button i { width: 10px; height: 10px; border-radius: 3px; background: var(--c); } ui-chart-legend button[aria-pressed=\"false\"] { opacity: .4; text-decoration: line-through; }\n\n/* ---- MODULE: src/components/calendars/calendars.css ---- */\nui-calendar { display: block; background: var(--ui-bg-content); border-radius: var(--ui-radius-lg); font-size: var(--ui-fs-md); min-width: 252px; } ui-calendar[compact] { min-width: 244px; width: 252px; background: transparent; }\n.ui-cal-h { display: flex; align-items: center; gap: 4px; padding: 4px 4px 8px; } .ui-cal-t { flex: 1; font-weight: var(--ui-fw-semibold); font-size: var(--ui-fs-lg); text-transform: capitalize; padding-left: 6px; }\n.ui-cal-g { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; } .ui-cal-wd { text-align: center; font-size: var(--ui-fs-xs); color: var(--ui-text-3); padding: 4px 0; text-transform: uppercase; letter-spacing: .04em; }\n.ui-cal-d { position: relative; aspect-ratio: 1; min-height: 32px; border: 0; background: transparent; border-radius: 50%; font: inherit; color: var(--ui-text); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; font-variant-numeric: tabular-nums; } ui-calendar[data-chips] .ui-cal-d { aspect-ratio: auto; min-height: 84px; border-radius: var(--ui-radius-sm); justify-content: flex-start; align-items: stretch; padding: 4px; border: 1px solid var(--ui-separator); gap: 3px; text-align: left; margin: -.5px; } ui-calendar[data-chips] .ui-cal-d .n { align-self: flex-end; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; }\n.ui-cal-d:hover:not(:disabled) { background: var(--ui-hover); } .ui-cal-d.out { color: var(--ui-text-3); } .ui-cal-d.today .n { color: var(--ui-accent); font-weight: 700; } ui-calendar[data-chips] .ui-cal-d.today .n { background: var(--ui-accent); color: #fff; } .ui-cal-d.sel { background: var(--ui-accent) !important; color: #fff; } .ui-cal-d.sel .n { color: #fff !important; } .ui-cal-d.inrange { background: var(--ui-accent-soft); border-radius: 0; } .ui-cal-d:disabled { opacity: .3; } .ui-cal-d:focus-visible { outline: 2px solid var(--ui-focus-ring); outline-offset: -2px; }\n.ui-cal-dots { display: flex; gap: 2px; position: absolute; bottom: 4px; } .ui-cal-dots i { width: 4px; height: 4px; border-radius: 50%; background: var(--c, var(--ui-accent)); } .ui-cal-d.sel .ui-cal-dots i { background: #fff; }\n.ui-cal-ev { display: block; font-size: 11px; line-height: 1.3; padding: 1px 5px; border-radius: 4px; background: color-mix(in srgb, var(--c, var(--ui-accent)) 18%, transparent); color: var(--c, var(--ui-accent)); border-left: 2px solid var(--c, var(--ui-accent)); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500; }\n.ui-cal-tg { display: grid; grid-template-columns: 46px repeat(var(--days, 7), 1fr); position: relative; max-height: 440px; overflow: auto; border-top: 1px solid var(--ui-separator); } .ui-cal-hr { height: 48px; border-bottom: 1px solid var(--ui-separator); font-size: 10px; color: var(--ui-text-3); padding: 2px 6px; text-align: right; } .ui-cal-col { position: relative; border-left: 1px solid var(--ui-separator); } .ui-cal-col .slot { height: 48px; border-bottom: 1px solid var(--ui-separator); } .ui-cal-col .ev { position: absolute; left: 2px; right: 2px; border-radius: 6px; padding: 2px 6px; font-size: 11px; overflow: hidden; background: color-mix(in srgb, var(--c) 22%, var(--ui-bg-content)); border-left: 3px solid var(--c); color: var(--ui-text); }\n.ui-cal-dh { display: grid; grid-template-columns: 46px repeat(var(--days, 7), 1fr); text-align: center; font-size: var(--ui-fs-sm); color: var(--ui-text-2); padding: 4px 0; } .ui-cal-dh b { display: block; font-size: var(--ui-fs-lg); color: var(--ui-text); } .ui-cal-dh .today b { color: var(--ui-accent); } .ui-cal-now { position: absolute; left: 46px; right: 0; height: 2px; background: var(--ui-danger); z-index: 2; }\n.ui-cal-ag { max-height: 420px; overflow: auto; } .ui-cal-ag h4 { font-size: var(--ui-fs-sm); color: var(--ui-text-3); text-transform: uppercase; letter-spacing: .05em; padding: 10px 6px 4px; } .ui-cal-ag .it { display: flex; gap: 10px; padding: 8px 6px; border-radius: var(--ui-radius-md); align-items: center; } .ui-cal-ag .it:hover { background: var(--ui-hover); } .ui-cal-ag .it i { width: 4px; align-self: stretch; border-radius: 2px; background: var(--c); } .ui-cal-ag .tm { color: var(--ui-text-3); font-size: var(--ui-fs-sm); min-width: 90px; }\nui-date-navigator { display: inline-flex; align-items: center; gap: 4px; } ui-date-navigator .lbl { min-width: 150px; text-align: center; font-weight: 600; text-transform: capitalize; }\nui-clock { display: inline-flex; flex-direction: column; align-items: center; gap: 6px; } ui-clock svg { width: var(--ui-clock-s, 140px); height: var(--ui-clock-s, 140px); } .ui-clk-face { fill: var(--ui-surface); stroke: var(--ui-border-strong); stroke-width: 1.5; } .ui-clk-tick { stroke: var(--ui-text-3); stroke-width: 1.2; } .ui-clk-h, .ui-clk-m { stroke: var(--ui-text); stroke-linecap: round; } .ui-clk-s { stroke: var(--ui-danger); stroke-linecap: round; } .ui-clk-d { font-size: 28px; font-weight: 300; font-variant-numeric: tabular-nums; letter-spacing: .02em; }\nui-time-display, ui-countdown, ui-timer, ui-stopwatch { display: inline-flex; flex-direction: column; align-items: center; gap: 8px; font-variant-numeric: tabular-nums; } .ui-tm-v { font-size: 38px; font-weight: 200; letter-spacing: .02em; font-variant-numeric: tabular-nums; } .ui-tm-seg { display: flex; gap: 14px; } .ui-tm-seg div { text-align: center; } .ui-tm-seg b { display: block; font-size: 34px; font-weight: 300; } .ui-tm-seg small { color: var(--ui-text-3); font-size: var(--ui-fs-xs); text-transform: uppercase; letter-spacing: .06em; } .ui-tm-btns { display: flex; gap: 8px; } ui-stopwatch ol { list-style: none; margin: 0; padding: 0; width: 100%; max-height: 120px; overflow: auto; font-size: var(--ui-fs-sm); } ui-stopwatch li { display: flex; justify-content: space-between; padding: 3px 4px; border-bottom: 1px solid var(--ui-separator); }\nui-time-range-selector { display: block; }\n\n/* ---- MODULE: src/components/media/media.css ---- */\nui-audio-player, ui-video-player { display: block; background: var(--ui-surface); border: 1px solid var(--ui-border); border-radius: var(--ui-radius-xl); overflow: hidden; }\nui-video-player { position: relative; background: #000; color: #fff; } ui-video-player video { display: block; width: 100%; max-height: 70vh; background: #000; } ui-video-player:focus-visible { outline: 2px solid var(--ui-focus-ring); }\n.ui-vp-bar { position: absolute; left: 0; right: 0; bottom: 0; padding: 22px 12px 8px; background: linear-gradient(transparent, rgba(0,0,0,.72)); transition: opacity var(--ui-dur); } ui-video-player[data-idle] .ui-vp-bar { opacity: 0; pointer-events: none; } ui-video-player[data-idle] { cursor: none; } .ui-vp-big { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; pointer-events: none; } .ui-vp-big span { width: 64px; height: 64px; border-radius: 50%; background: rgba(0,0,0,.5); display: flex; align-items: center; justify-content: center; font-size: 28px; }\nui-media-controls { display: flex; align-items: center; gap: 4px; } ui-media-controls ui-button { --ui-btn-fg: inherit; } ui-media-controls ui-slider { width: 90px; } ui-media-controls .sp { flex: 1; }\nui-media-timeline { display: flex; align-items: center; gap: 8px; font-size: var(--ui-fs-xs); font-variant-numeric: tabular-nums; color: inherit; } ui-media-timeline input { flex: 1; } ui-media-timeline span { min-width: 38px; opacity: .8; } ui-media-timeline span:last-child { text-align: right; }\n.ui-ap { display: grid; grid-template-columns: 150px 1fr; gap: 16px; padding: 16px; } .ui-ap-cover { width: 150px; height: 150px; border-radius: var(--ui-radius-lg); object-fit: cover; box-shadow: var(--ui-shadow-2); } .ui-ap-main { display: flex; flex-direction: column; justify-content: center; gap: 8px; min-width: 0; } .ui-ap-t { font-size: var(--ui-fs-xl); font-weight: 700; } .ui-ap-a { color: var(--ui-text-2); margin-top: -6px; } ui-audio-player .ui-ap-pl { grid-column: 1 / -1; border-top: 1px solid var(--ui-separator); margin: 0 -16px -16px; max-height: 190px; overflow: auto; } @media (max-width: 480px) { .ui-ap { grid-template-columns: 1fr; } .ui-ap-cover { width: 100%; height: auto; aspect-ratio: 1; } }\nui-media-playlist { display: block; } .ui-pl-i { display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px 16px; border: 0; background: transparent; font: inherit; color: var(--ui-text); text-align: left; } .ui-pl-i:hover { background: var(--ui-hover); } .ui-pl-i[aria-current=\"true\"] { background: var(--ui-accent-soft); color: var(--ui-accent); } .ui-pl-i .n { width: 18px; text-align: center; color: var(--ui-text-3); font-variant-numeric: tabular-nums; } .ui-pl-i .t { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ui-pl-i .t small { display: block; color: var(--ui-text-3); } .ui-pl-i .d { color: var(--ui-text-3); font-size: var(--ui-fs-sm); }\nui-image-viewer { display: block; position: relative; overflow: hidden; background: var(--ui-surface-2); border-radius: var(--ui-radius-lg); touch-action: none; } ui-image-viewer img { display: block; max-width: none; transform-origin: 0 0; user-select: none; -webkit-user-drag: none; cursor: grab; } .ui-iv-bar { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 2px; padding: 3px; border-radius: 10px; border: 1px solid var(--ui-border); box-shadow: var(--ui-shadow-2); }\nui-image-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(var(--ui-gal, 150px), 1fr)); gap: 8px; } ui-image-gallery button { border: 0; padding: 0; border-radius: var(--ui-radius-md); overflow: hidden; aspect-ratio: 4/3; background: var(--ui-surface-2); position: relative; } ui-image-gallery img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform var(--ui-dur-slow) var(--ui-ease); } ui-image-gallery button:hover img { transform: scale(1.06); } ui-image-gallery button span { position: absolute; left: 0; right: 0; bottom: 0; padding: 14px 8px 5px; font-size: var(--ui-fs-xs); color: #fff; background: linear-gradient(transparent, rgba(0,0,0,.6)); text-align: left; opacity: 0; transition: opacity var(--ui-dur); } ui-image-gallery button:hover span, ui-image-gallery button:focus-visible span { opacity: 1; }\nui-carousel { display: block; position: relative; overflow: hidden; border-radius: var(--ui-radius-lg); background: var(--ui-surface-2); } .ui-cr-track { display: flex; transition: transform var(--ui-dur-slow) var(--ui-ease); touch-action: pan-y; } .ui-cr-slide { flex: 0 0 100%; min-width: 0; aspect-ratio: 16/7; display: flex; align-items: center; justify-content: center; position: relative; } .ui-cr-slide img { width: 100%; height: 100%; object-fit: cover; } .ui-cr-slide .cap { position: absolute; left: 0; right: 0; bottom: 0; padding: 22px 16px 12px; color: #fff; background: linear-gradient(transparent, rgba(0,0,0,.6)); } .ui-cr-nav { position: absolute; top: 50%; transform: translateY(-50%); width: 34px; height: 34px; border-radius: 50%; border: 0; background: rgba(0,0,0,.4); color: #fff; display: flex; align-items: center; justify-content: center; } .ui-cr-nav:hover { background: rgba(0,0,0,.6); } .ui-cr-nav.p { left: 10px; } .ui-cr-nav.n { right: 10px; } .ui-cr-dots { position: absolute; bottom: 8px; left: 0; right: 0; display: flex; justify-content: center; gap: 6px; } .ui-cr-dots button { width: 8px; height: 8px; border-radius: 50%; border: 0; padding: 0; background: rgba(255,255,255,.5); } .ui-cr-dots button[aria-current=\"true\"] { background: #fff; width: 20px; border-radius: 4px; transition: width var(--ui-dur); }\nui-comparison-slider { display: block; position: relative; overflow: hidden; border-radius: var(--ui-radius-lg); aspect-ratio: 16/9; user-select: none; } ui-comparison-slider img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; } .ui-cs-top { position: absolute; inset: 0; clip-path: inset(0 calc(100% - var(--p, 50%)) 0 0); } .ui-cs-h { position: absolute; top: 0; bottom: 0; left: var(--p, 50%); width: 2px; background: #fff; transform: translateX(-1px); pointer-events: none; box-shadow: 0 0 6px rgba(0,0,0,.4); } .ui-cs-h::after { content: '\u21c6'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 34px; height: 34px; border-radius: 50%; background: #fff; color: #333; display: flex; align-items: center; justify-content: center; box-shadow: var(--ui-shadow-2); } ui-comparison-slider input { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; cursor: ew-resize; margin: 0; }\nui-qr-code { display: inline-block; background: #fff; padding: 10px; border-radius: 10px; line-height: 0; }\nui-file-browser { display: flex; flex-direction: column; height: 100%; min-height: 0; background: var(--ui-bg-content); } .ui-fb-body { flex: 1; min-height: 0; display: flex; } .ui-fb-main { flex: 1; min-width: 0; overflow: auto; position: relative; } .ui-fb-side { width: 200px; flex: none; overflow: auto; border-right: 1px solid var(--ui-separator); background: var(--ui-bg-sidebar); padding: 6px; } .ui-fb-ins { width: 250px; flex: none; border-left: 1px solid var(--ui-separator); overflow: auto; padding: 12px; background: var(--ui-bg-content); }\nui-file-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 6px; padding: 12px; align-content: start; } ui-file-list { display: block; } ui-file-grid .ui-fi { flex-direction: column; text-align: center; padding: 8px 4px; height: auto; gap: 6px; } ui-file-grid .ui-fi .ic { width: 56px; height: 56px; font-size: 40px; } ui-file-grid .ui-fi .ic img { width: 56px; height: 42px; object-fit: cover; border-radius: 4px; box-shadow: var(--ui-shadow-1); } ui-file-grid .ui-fi .nm { max-width: 100%; word-break: break-word; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; white-space: normal; } ui-file-grid .ui-fi .sz, ui-file-grid .ui-fi .dt { display: none; }\n.ui-fi { display: flex; align-items: center; gap: 10px; height: 32px; padding: 0 12px; border-radius: var(--ui-radius-md); border: 0; background: transparent; font: inherit; color: var(--ui-text); width: 100%; text-align: left; } ui-file-list .ui-fi { border-radius: 0; border-bottom: 1px solid var(--ui-separator); height: 34px; } .ui-fi:hover { background: var(--ui-hover); } .ui-fi[aria-selected=\"true\"] { background: var(--ui-accent); color: #fff; } .ui-fi[aria-selected=\"true\"] .ic, .ui-fi[aria-selected=\"true\"] .sz, .ui-fi[aria-selected=\"true\"] .dt { color: #fff; }\n.ui-fi .ic { display: inline-flex; align-items: center; justify-content: center; width: 22px; font-size: 18px; color: var(--ui-accent); flex: none; } .ui-fi .ic.dir { color: #4aa8ff; } .ui-fi .ic.img { color: #ff7a59; } .ui-fi .ic.code { color: #8e6bff; } .ui-fi .nm { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ui-fi .sz, .ui-fi .dt { color: var(--ui-text-3); font-size: var(--ui-fs-sm); width: 90px; text-align: right; flex: none; } .ui-fi .dt { width: 120px; }\nui-file-item { display: block; } ui-file-preview { display: block; text-align: center; } ui-file-preview .pv-ic { font-size: 56px; color: var(--ui-accent); margin: 8px 0; } ui-file-preview img { max-width: 100%; border-radius: 8px; box-shadow: var(--ui-shadow-1); } ui-file-preview pre { text-align: left; max-height: 220px; overflow: auto; font-size: 11px; background: var(--ui-code-bg); padding: 8px; border-radius: 8px; white-space: pre-wrap; } ui-file-properties { display: block; font-size: var(--ui-fs-sm); text-align: left; }\nui-storage-indicator { display: block; } .ui-si-bar { display: flex; height: 12px; border-radius: 6px; overflow: hidden; background: var(--ui-surface-3); gap: 1px; } .ui-si-bar i { display: block; background: var(--c); transition: width var(--ui-dur-slow) var(--ui-ease); } .ui-si-lg { display: flex; flex-wrap: wrap; gap: 4px 14px; margin-top: 8px; font-size: var(--ui-fs-sm); color: var(--ui-text-2); } .ui-si-lg i { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--c); margin-right: 5px; } .ui-si-h { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: var(--ui-fs-sm); }\nui-file-transfer-progress { display: grid; grid-template-columns: auto 1fr auto; gap: 2px 10px; align-items: center; padding: 8px 10px; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-md); background: var(--ui-surface); } ui-file-transfer-progress > ui-icon { grid-row: span 2; font-size: 22px; color: var(--ui-accent); } ui-file-transfer-progress .m { font-size: var(--ui-fs-xs); color: var(--ui-text-3); } ui-file-transfer-progress ui-progress { grid-column: 2 / 4; } ui-upload-manager, ui-download-manager { display: grid; gap: 8px; }\n\n/* ---- MODULE: src/components/editors/editors.css ---- */\n.tk-c { color: var(--ui-code-com); font-style: italic; } .tk-s { color: var(--ui-code-str); } .tk-k { color: var(--ui-code-kw); font-weight: 500; } .tk-n { color: var(--ui-code-num); } .tk-f { color: var(--ui-code-fn); } .tk-p { color: var(--ui-code-num); }\nui-code-block { display: block; position: relative; background: var(--ui-code-bg); border: 1px solid var(--ui-border); border-radius: var(--ui-radius-md); font-size: 12.5px; } ui-code-block pre { margin: 0; padding: 12px 14px; overflow: auto; line-height: 1.55; tab-size: 2; } ui-code-block code { font-family: var(--ui-font-mono); } ui-code-block .ui-cb-copy { position: absolute; top: 6px; right: 6px; opacity: 0; transition: opacity var(--ui-dur-fast); } ui-code-block:hover .ui-cb-copy, ui-code-block:focus-within .ui-cb-copy { opacity: 1; } ui-code-block[line-numbers] pre { counter-reset: ln; } ui-code-block[line-numbers] .ln { display: inline-block; width: 2.4em; margin-right: 12px; text-align: right; color: var(--ui-text-3); user-select: none; -webkit-user-select: none; } ui-code-block .ui-cb-lang { position: absolute; right: 10px; bottom: 6px; font-size: 10px; color: var(--ui-text-3); text-transform: uppercase; pointer-events: none; }\nui-code-editor { display: flex; flex-direction: column; background: var(--ui-code-bg); border: 1px solid var(--ui-border); border-radius: var(--ui-radius-md); overflow: hidden; min-height: 120px; } .ui-ce { display: flex; flex: 1; min-height: 0; position: relative; font: 12.5px/1.55 var(--ui-font-mono); } .ui-ce-g { padding: 10px 8px 10px 10px; text-align: right; color: var(--ui-text-3); user-select: none; -webkit-user-select: none; overflow: hidden; background: color-mix(in srgb, var(--ui-code-bg) 80%, var(--ui-text) 3%); border-right: 1px solid var(--ui-separator); white-space: pre; flex: none; } .ui-ce-w { position: relative; flex: 1; min-width: 0; }\n.ui-ce-hl, .ui-ce-ta { position: absolute; inset: 0; margin: 0; padding: 10px 12px; font: inherit; line-height: inherit; tab-size: 2; white-space: pre; border: 0; overflow: auto; letter-spacing: normal; word-spacing: normal; } .ui-ce-hl { pointer-events: none; overflow: hidden; color: var(--ui-text); } .ui-ce-ta { background: transparent; color: transparent; caret-color: var(--ui-text); resize: none; outline: none; -webkit-text-fill-color: transparent; } .ui-ce-ta::selection { background: var(--ui-accent-soft); -webkit-text-fill-color: transparent; } .ui-ce-st { display: flex; justify-content: space-between; padding: 2px 10px; font-size: 11px; color: var(--ui-text-3); border-top: 1px solid var(--ui-separator); font-family: var(--ui-font); }\nui-markdown-viewer { display: block; line-height: 1.6; } ui-markdown-viewer h1, ui-markdown-viewer h2, ui-markdown-viewer h3 { margin: 1.1em 0 .4em; } ui-markdown-viewer h1 { font-size: 1.8em; } ui-markdown-viewer h2 { font-size: 1.4em; } ui-markdown-viewer h3 { font-size: 1.15em; } ui-markdown-viewer p { margin: .6em 0; } ui-markdown-viewer ul, ui-markdown-viewer ol { margin: .5em 0; padding-left: 1.5em; } ui-markdown-viewer blockquote { margin: .8em 0; padding: .1em 1em; border-left: 3px solid var(--ui-accent); color: var(--ui-text-2); background: var(--ui-surface-2); border-radius: 0 8px 8px 0; } ui-markdown-viewer code { background: var(--ui-surface-3); padding: .1em .35em; border-radius: 4px; font-size: .9em; } ui-markdown-viewer pre { background: var(--ui-code-bg); padding: 12px; border-radius: 8px; overflow: auto; border: 1px solid var(--ui-border); } ui-markdown-viewer pre code { background: none; padding: 0; } ui-markdown-viewer hr { border: 0; border-top: 1px solid var(--ui-separator); margin: 1.2em 0; }\nui-markdown-editor { display: flex; flex-direction: column; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); overflow: hidden; background: var(--ui-bg-content); min-height: 240px; } ui-markdown-editor ui-split { flex: 1; min-height: 0; } ui-markdown-editor ui-code-editor { border: 0; border-radius: 0; height: 100%; } ui-markdown-editor ui-markdown-viewer { padding: 8px 16px; }\nui-rich-text-editor { display: flex; flex-direction: column; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); overflow: hidden; background: var(--ui-bg-content); } .ui-rte-c { flex: 1; min-height: 140px; padding: 12px 14px; outline: none; overflow: auto; line-height: 1.55; } .ui-rte-c:empty::before { content: attr(data-ph); color: var(--ui-text-3); } .ui-rte-c blockquote { border-left: 3px solid var(--ui-accent); margin: .5em 0; padding-left: 12px; color: var(--ui-text-2); } .ui-rte-c a { color: var(--ui-accent); }\nui-json-viewer { display: block; font: 12.5px/1.6 var(--ui-font-mono); } .ui-j-row { padding-left: 16px; } .ui-j-t { display: inline-flex; width: 14px; border: 0; background: transparent; padding: 0; color: var(--ui-text-3); margin-left: -16px; justify-content: center; transition: transform var(--ui-dur-fast); } .ui-j-t[aria-expanded=\"true\"] { transform: rotate(90deg); } .ui-j-k { color: var(--ui-code-kw); cursor: pointer; } .ui-j-k:hover { text-decoration: underline; } .ui-j-s { color: var(--ui-code-str); } .ui-j-n { color: var(--ui-code-num); } .ui-j-b { color: var(--ui-code-fn); } .ui-j-z { color: var(--ui-text-3); } .ui-j-m { color: var(--ui-text-3); font-style: italic; }\nui-json-editor { display: flex; flex-direction: column; gap: 6px; } ui-json-editor ui-code-editor { height: 240px; } .ui-jed-bar { display: flex; gap: 6px; align-items: center; } .ui-jed-msg { flex: 1; font-size: var(--ui-fs-sm); } .ui-jed-msg.ok { color: var(--ui-success); } .ui-jed-msg.bad { color: var(--ui-danger); }\nui-terminal-view { display: flex; flex-direction: column; background: #16161a; color: #d7e0ea; font: 12.5px/1.5 var(--ui-font-mono); padding: 8px 12px; overflow: auto; height: 100%; min-height: 160px; cursor: text; } ui-terminal-view .o { white-space: pre-wrap; word-break: break-word; } ui-terminal-view .e { color: #ff7b72; } ui-terminal-view .k { color: #7ee787; } ui-terminal-view .d { color: #79c0ff; } ui-terminal-view .m { color: #8b949e; } .ui-tm-line { display: flex; gap: 8px; } .ui-tm-line input { flex: 1; min-width: 0; background: transparent; border: 0; outline: none; color: inherit; font: inherit; caret-color: #7ee787; } .ui-tm-ps { color: #7ee787; white-space: nowrap; }\nui-log-viewer { display: flex; flex-direction: column; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); overflow: hidden; background: var(--ui-code-bg); min-height: 200px; } .ui-lg-bar { display: flex; gap: 8px; align-items: center; padding: 6px 8px; border-bottom: 1px solid var(--ui-separator); background: var(--ui-bg-content); } .ui-lg-sc { flex: 1; min-height: 0; overflow: auto; position: relative; font: 12px var(--ui-font-mono); } .ui-lg-r { display: flex; gap: 10px; align-items: center; padding: 0 10px; white-space: nowrap; border-bottom: 1px solid color-mix(in srgb, var(--ui-separator) 50%, transparent); } .ui-lg-r .t { color: var(--ui-text-3); } .ui-lg-r .l { width: 46px; font-weight: 600; text-transform: uppercase; font-size: 10px; } .ui-lg-r[data-l=\"error\"] { background: var(--ui-danger-soft); } .ui-lg-r[data-l=\"error\"] .l { color: var(--ui-danger); } .ui-lg-r[data-l=\"warn\"] .l { color: var(--ui-warning); } .ui-lg-r[data-l=\"info\"] .l { color: var(--ui-info); } .ui-lg-r[data-l=\"debug\"] .l { color: var(--ui-text-3); } .ui-lg-r mark, ui-search-highlight mark { background: #ffe066; color: #000; border-radius: 2px; }\nui-diff-viewer { display: block; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-md); overflow: hidden; font: 12px/1.5 var(--ui-font-mono); background: var(--ui-code-bg); } .ui-df-h { display: flex; gap: 10px; align-items: center; padding: 6px 10px; background: var(--ui-bg-content); border-bottom: 1px solid var(--ui-separator); font-family: var(--ui-font); font-size: var(--ui-fs-sm); } .ui-df-r { display: grid; grid-template-columns: 40px 40px 1fr; } .ui-df-r span:nth-child(-n+2) { text-align: right; padding: 0 6px; color: var(--ui-text-3); user-select: none; } .ui-df-r pre { margin: 0; padding: 0 8px; white-space: pre-wrap; } .ui-df-r.add { background: var(--ui-success-soft); } .ui-df-r.del { background: var(--ui-danger-soft); } .ui-df-split { display: grid; grid-template-columns: 1fr 1fr; } .ui-df-split > div { overflow: auto; } .ui-df-split > div + div { border-left: 1px solid var(--ui-separator); } .ui-df-split .ui-df-r { grid-template-columns: 40px 1fr; }\nui-search-and-replace { display: grid; gap: 6px; padding: 8px; border: 1px solid var(--ui-border); border-radius: var(--ui-radius-md); background: var(--ui-bg-content); } .ui-sr-row { display: flex; gap: 4px; align-items: center; } .ui-sr-row ui-text-field, .ui-sr-row input { flex: 1; min-width: 0; } .ui-sr-c { font-size: var(--ui-fs-xs); color: var(--ui-text-3); min-width: 56px; text-align: center; }\nui-color-theme-editor { display: block; } .ui-cte { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 8px 14px; } .ui-cte-r { display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: var(--ui-fs-sm); } .ui-cte-r ui-color-picker { width: 120px; }\nui-property-inspector, ui-settings-editor { display: block; } .ui-pi-r { display: grid; grid-template-columns: 110px 1fr; gap: 8px; align-items: center; padding: 5px 0; border-bottom: 1px solid var(--ui-separator); font-size: var(--ui-fs-sm); } .ui-pi-r > label { color: var(--ui-text-2); }\n\n/* ---- MODULE: src/components/settings/settings.css ---- */\nui-settings-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 10px 0; border-bottom: 1px solid var(--ui-separator); } ui-settings-row .ui-sr-t { flex: 1; min-width: 0; } ui-settings-row .ui-sr-l { font-weight: var(--ui-fw-medium); } ui-settings-row .ui-sr-d { color: var(--ui-text-3); font-size: var(--ui-fs-sm); } ui-settings-row .ui-sr-c { flex: none; min-width: 0; max-width: 55%; }\nui-settings-group, ui-settings-section { display: block; background: var(--ui-surface); border: 1px solid var(--ui-border); border-radius: var(--ui-radius-lg); padding: 2px 14px; margin-bottom: var(--ui-space-4); } ui-settings-group ui-settings-row:last-child, ui-settings-section ui-settings-row:last-child { border-bottom: 0; } .ui-sg-h { margin: 18px 4px 6px; font-weight: 600; font-size: var(--ui-fs-sm); color: var(--ui-text-2); text-transform: uppercase; letter-spacing: .04em; } ui-settings-group[heading] { padding-top: 2px; }\nui-preference-pane { display: grid; grid-template-columns: 190px minmax(0, 1fr); height: 100%; min-height: 0; background: var(--ui-bg-content); } ui-preference-pane > .ui-pp-s { background: var(--ui-bg-sidebar); border-right: 1px solid var(--ui-separator); overflow: auto; } ui-preference-pane > .ui-pp-c { overflow: auto; padding: 18px 22px; min-width: 0; } ui-preference-pane > .ui-pp-c > ui-settings-category { display: block; } ui-preference-pane > .ui-pp-c > ui-settings-category[hidden] { display: none; } .ui-pp-t { font-size: var(--ui-fs-2xl); font-weight: 700; margin-bottom: 14px; }\nui-theme-selector { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; } .ui-th { border: 2px solid transparent; border-radius: var(--ui-radius-lg); padding: 6px; background: transparent; font: inherit; color: var(--ui-text); text-align: center; } .ui-th:hover { background: var(--ui-hover); } .ui-th[aria-checked=\"true\"] { border-color: var(--ui-accent); } .ui-th .pv { height: 62px; border-radius: 8px; display: grid; grid-template-columns: 28% 1fr; overflow: hidden; border: 1px solid var(--ui-border); margin-bottom: 6px; } .ui-th .pv i { display: block; } .ui-th .pv b { display: block; margin: 8px; border-radius: 4px; } .ui-th span { font-size: var(--ui-fs-sm); }\nui-appearance-selector { display: block; } .ui-ap-sw { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px; } .ui-ap-sw button { width: 24px; height: 24px; border-radius: 50%; border: 2px solid var(--ui-bg-content); box-shadow: 0 0 0 1px var(--ui-border-strong); padding: 0; position: relative; } .ui-ap-sw button[aria-checked=\"true\"] { box-shadow: 0 0 0 2px var(--ui-text); }\nui-shortcut-editor { display: block; } .ui-se-r { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--ui-separator); } .ui-se-k { min-width: 130px; height: 28px; border-radius: 6px; border: 1px dashed var(--ui-border-strong); background: var(--ui-surface-2); font: inherit; color: var(--ui-text); display: inline-flex; align-items: center; justify-content: center; gap: 4px; } .ui-se-k.rec { border-color: var(--ui-accent); background: var(--ui-accent-soft); color: var(--ui-accent); } .ui-se-k.bad { border-color: var(--ui-danger); }\nui-account-panel { display: flex; gap: 16px; align-items: center; padding: 14px; border-radius: var(--ui-radius-lg); background: var(--ui-surface); border: 1px solid var(--ui-border); } ui-account-panel .ui-ac-i { flex: 1; min-width: 0; }\nui-about-panel { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; padding: 14px; } ui-about-panel .lg { width: 84px; height: 84px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 46px; color: #fff; background: linear-gradient(135deg, #5ac8fa, #0a84ff 55%, #5e5ce6); box-shadow: var(--ui-shadow-3); margin-bottom: 8px; } ui-about-panel ui-description-list { width: 100%; text-align: left; margin-top: 10px; }\nui-update-panel { display: block; } ui-permission-panel { display: block; }\nui-scroll-to-top { position: fixed; right: 20px; bottom: 20px; z-index: var(--ui-z-sticky); } ui-scroll-to-top[hidden] { display: none; }\nui-copy-button { display: inline-flex; } ui-clipboard-field { display: block; } ui-text-truncation { display: block; min-width: 0; } ui-anchor-navigation { display: block; font-size: var(--ui-fs-sm); } ui-anchor-navigation a { display: block; padding: 4px 10px; border-left: 2px solid var(--ui-separator); color: var(--ui-text-2); } ui-anchor-navigation a:hover { color: var(--ui-text); text-decoration: none; } ui-anchor-navigation a[aria-current=\"true\"] { border-left-color: var(--ui-accent); color: var(--ui-accent); font-weight: 500; }\n";

  function injectStyles() {
    if (document.getElementById('by-lite-macos-sdk-styles')) return;
    var style = document.createElement('style');
    style.id = 'by-lite-macos-sdk-styles';
    style.textContent = cssText;
    (document.head || document.documentElement).appendChild(style);
  }

  if (document.head || document.documentElement) {
    injectStyles();
  } else {
    document.addEventListener('DOMContentLoaded', injectStyles, { once: true });
  }
})();

/*!
 * By-Lite macOS UI Toolkit SDK — JavaScript Runtime & Widgets v1.0.0
 * Includes MiniUI Core, 330+ ui-* Custom Elements, ByLite Bridge & *-macos Tags
 */

/* ---- MODULE: src/core/bootstrap.js ---- */
window.MiniUI = {
  version: '0.1.0',
  modules: [],
  /** Registers a virtual source module. A failure in one module never prevents others from loading. */
  module: function (path, fn) {
    try { fn(window.MiniUI); window.MiniUI.modules.push({ path: path, ok: true }); }
    catch (e) { console.error('[MiniUI] module failed:', path, e); window.MiniUI.modules.push({ path: path, ok: false, error: String(e && e.message || e) }); }
  }
};

/* ---- MODULE: src/utilities/helpers.js ---- */
MiniUI.module('src/utilities/helpers.js', function (M) {
  var SVGNS = 'http://www.w3.org/2000/svg';
  var _uid = 0;
  var mq = function (q) { return typeof matchMedia === 'function' ? matchMedia(q) : { matches: false, addEventListener: function () {}, addListener: function () {} }; };

  var U = M.util = {
    uid: function (p) { return (p || 'ui') + '-' + (++_uid).toString(36); },
    clamp: function (v, a, b) { return Math.min(b, Math.max(a, v)); },
    lerp: function (a, b, t) { return a + (b - a) * t; },
    kebab: function (s) { return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(); },
    camel: function (s) { return s.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); }); },
    escape: function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); },
    isObj: function (v) { return v && typeof v === 'object' && !Array.isArray(v); },
    deepMerge: function (a, b) { var o = Object.assign({}, a); for (var k in b) o[k] = U.isObj(b[k]) && U.isObj(a && a[k]) ? U.deepMerge(a[k], b[k]) : b[k]; return o; },
    debounce: function (fn, ms) { var t; var d = function () { var a = arguments; clearTimeout(t); t = setTimeout(function () { fn.apply(null, a); }, ms == null ? 150 : ms); }; d.cancel = function () { clearTimeout(t); }; return d; },
    throttle: function (fn, ms) { ms = ms || 100; var last = 0, t; return function () { var a = arguments, n = Date.now(); if (n - last >= ms) { last = n; fn.apply(null, a); } else { clearTimeout(t); t = setTimeout(function () { last = Date.now(); fn.apply(null, a); }, ms - (n - last)); } }; },
    isMac: /Mac|iPhone|iPad/.test((typeof navigator !== 'undefined' && (navigator.platform || navigator.userAgent)) || ''),
    reducedMotion: function () { return mq('(prefers-reduced-motion: reduce)').matches || document.documentElement.getAttribute('data-motion') === 'reduce'; },
    supports: {
      resizeObserver: typeof ResizeObserver !== 'undefined',
      intersectionObserver: typeof IntersectionObserver !== 'undefined',
      animate: typeof Element !== 'undefined' && 'animate' in Element.prototype,
      backdrop: typeof CSS !== 'undefined' && CSS.supports && (CSS.supports('backdrop-filter', 'blur(1px)') || CSS.supports('-webkit-backdrop-filter', 'blur(1px)')),
      pointer: typeof window !== 'undefined' && 'PointerEvent' in window
    },
    mq: mq,
    sleep: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },
    /** Resolves a spacing token reference: "3" -> var(--ui-space-3); anything else is passed through. */
    space: function (v) { return v == null || v === '' ? null : /^\d{1,2}$/.test(String(v)) ? 'var(--ui-space-' + v + ')' : String(v); },
    pick: function (o, keys) { var r = {}; keys.forEach(function (k) { if (k in o) r[k] = o[k]; }); return r; },
    download: function (name, text, mime) { var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: mime || 'text/plain' })); a.download = name; a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000); },
    /**
     * Positions a floating element (position: fixed) relative to an anchor element or {x,y} point.
     * Flips when there is no room and shifts to stay inside the viewport.
     */
    position: function (anchor, el, o) {
      o = o || {};
      var placement = o.placement || 'bottom-start', offset = o.offset == null ? 6 : o.offset, pad = o.padding == null ? 8 : o.padding;
      var a = anchor.getBoundingClientRect ? anchor.getBoundingClientRect() : { left: anchor.x, top: anchor.y, right: anchor.x, bottom: anchor.y, width: 0, height: 0 };
      if (o.matchWidth) el.style.minWidth = a.width + 'px';
      var vw = window.innerWidth, vh = window.innerHeight;
      el.style.left = '0px'; el.style.top = '0px'; el.style.maxHeight = (vh - pad * 2) + 'px';
      var w = el.offsetWidth, h = el.offsetHeight;
      var parts = placement.split('-'), side = parts[0], align = parts[1] || 'center';
      var flip = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
      var calc = function (s) {
        var x, y;
        if (s === 'bottom') y = a.bottom + offset; else if (s === 'top') y = a.top - h - offset; else if (s === 'right') x = a.right + offset; else x = a.left - w - offset;
        if (s === 'top' || s === 'bottom') x = align === 'start' ? a.left : align === 'end' ? a.right - w : a.left + a.width / 2 - w / 2;
        else y = align === 'start' ? a.top : align === 'end' ? a.bottom - h : a.top + a.height / 2 - h / 2;
        return { x: x, y: y };
      };
      var fits = function (s, p) { return s === 'bottom' ? p.y + h <= vh - pad : s === 'top' ? p.y >= pad : s === 'right' ? p.x + w <= vw - pad : p.x >= pad; };
      var p = calc(side);
      if (!fits(side, p)) { var q = calc(flip[side]); if (fits(flip[side], q)) { p = q; side = flip[side]; } }
      p.x = U.clamp(p.x, pad, Math.max(pad, vw - w - pad)); p.y = U.clamp(p.y, pad, Math.max(pad, vh - h - pad));
      el.style.left = Math.round(p.x) + 'px'; el.style.top = Math.round(p.y) + 'px'; el.setAttribute('data-side', side);
      var ox = Math.round(U.clamp(a.left + a.width / 2 - p.x, 0, w)), oy = Math.round(U.clamp(a.top + a.height / 2 - p.y, 0, h));
      el.style.transformOrigin = side === 'bottom' ? ox + 'px 0' : side === 'top' ? ox + 'px 100%' : side === 'right' ? '0 ' + oy + 'px' : '100% ' + oy + 'px';
      return p;
    },
    rectOf: function (el) { var r = el.getBoundingClientRect(); return { x: r.left, y: r.top, width: r.width, height: r.height, right: r.right, bottom: r.bottom }; },
    contains: function (r, x, y) { return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom; },
    /** Observes element size with ResizeObserver, falling back to window resize. Returns a disposer. */
    observeResize: function (el, fn) {
      if (U.supports.resizeObserver) { var ro = new ResizeObserver(function (en) { fn(en[0].contentRect); }); ro.observe(el); return function () { ro.disconnect(); }; }
      var f = U.throttle(function () { fn(el.getBoundingClientRect()); }, 100); window.addEventListener('resize', f); return function () { window.removeEventListener('resize', f); };
    },
    /** Lazy visibility observation with fallback (calls back immediately when IntersectionObserver is missing). */
    observeVisible: function (el, fn) {
      if (!U.supports.intersectionObserver) { fn(true); return function () {}; }
      var io = new IntersectionObserver(function (en) { fn(en[0].isIntersecting); }); io.observe(el); return function () { io.disconnect(); };
    }
  };

  /* ---- Hyperscript + tagged-template engine ---- */
  function setAttr(el, k, v) {
    if (v == null || v === false) return;
    if (k === 'class') el.setAttribute('class', Array.isArray(v) ? v.filter(Boolean).join(' ') : v);
    else if (k === 'style' && typeof v === 'object') { for (var s in v) { if (s.indexOf('-') > -1) el.style.setProperty(s, v[s]); else el.style[s] = v[s]; } }
    else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k.charAt(0) === '.') el[k.slice(1)] = v;
    else if (typeof v === 'object' || typeof v === 'function') el[k] = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  function append(el, kids) {
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (k == null || k === false) continue;
      if (Array.isArray(k)) append(el, k); else el.append(k.nodeType ? k : document.createTextNode(String(k)));
    }
  }
  M.h = function (tag, attrs) {
    var el = typeof tag !== 'string' ? tag : tag.indexOf('svg:') === 0 ? document.createElementNS(SVGNS, tag.slice(4)) : document.createElement(tag);
    if (attrs) for (var k in attrs) setAttr(el, k, attrs[k]);
    append(el, Array.prototype.slice.call(arguments, 2));
    return el;
  };
  var RAW = '__uiRaw';
  M.raw = function (s) { var o = {}; o[RAW] = true; o.s = String(s); return o; };
  /** html`<div @click=${fn}>${text}${node}</div>` -> DocumentFragment. Text is escaped; use M.raw() for trusted markup. */
  M.html = function (strings) {
    var vals = Array.prototype.slice.call(arguments, 1), holes = [], out = '';
    strings.forEach(function (s, i) {
      out += s;
      if (i < vals.length) {
        var v = vals[i];
        if (v && v[RAW]) out += v.s;
        else if (typeof v === 'function') { holes.push(v); out += 'ui$fn:' + (holes.length - 1); }
        else if (v && (v.nodeType || Array.isArray(v))) { holes.push(v); out += '<ui-hole data-i="' + (holes.length - 1) + '"></ui-hole>'; }
        else out += U.escape(v == null ? '' : v);
      }
    });
    var t = document.createElement('template'); t.innerHTML = out; var f = t.content;
    f.querySelectorAll('ui-hole').forEach(function (n) {
      var v = [].concat(holes[n.getAttribute('data-i')]);
      var flat = []; (function fl(a) { a.forEach(function (x) { Array.isArray(x) ? fl(x) : flat.push(x && x.nodeType ? x : document.createTextNode(x == null ? '' : x)); }); })(v);
      n.replaceWith.apply(n, flat);
    });
    f.querySelectorAll('*').forEach(function (el) {
      Array.prototype.slice.call(el.attributes).forEach(function (a) {
        if (a.name.charAt(0) === '@' && a.value.indexOf('ui$fn:') === 0) { el.addEventListener(a.name.slice(1), holes[+a.value.slice(6)]); el.removeAttribute(a.name); }
      });
    });
    return f;
  };
});

/* ---- MODULE: src/core/event-system.js ---- */
MiniUI.module('src/core/event-system.js', function (M) {
  /** Lightweight emitter (global bus, services). Components use native CustomEvents via UIElement.emit(). */
  function Emitter() { this._m = new Map(); }
  Emitter.prototype.on = function (n, fn) { var s = this._m.get(n); if (!s) this._m.set(n, s = new Set()); s.add(fn); var self = this; return function () { self.off(n, fn); }; };
  Emitter.prototype.once = function (n, fn) { var off = this.on(n, function (d, e) { off(); fn(d, e); }); return off; };
  Emitter.prototype.off = function (n, fn) { var s = this._m.get(n); if (s) { s.delete(fn); if (!s.size) this._m.delete(n); } };
  Emitter.prototype.emit = function (n, detail, o) {
    var cancelable = !!(o && o.cancelable);
    var ev = { name: n, detail: detail, defaultPrevented: false, preventDefault: function () { if (cancelable) this.defaultPrevented = true; } };
    var s = this._m.get(n);
    if (s) Array.from(s).forEach(function (fn) { try { fn(detail, ev); } catch (e) { console.error('[MiniUI] listener error in "' + n + '"', e); } });
    return !ev.defaultPrevented;
  };
  Emitter.prototype.listenerCount = function (n) { if (n) return this._m.has(n) ? this._m.get(n).size : 0; var c = 0; this._m.forEach(function (s) { c += s.size; }); return c; };
  Emitter.prototype.clear = function () { this._m.clear(); };
  M.Emitter = Emitter;
  M.events = new Emitter();
  /** Dispatches a bubbling, composed CustomEvent. Returns false when a cancelable event was prevented. */
  M.dispatch = function (el, name, detail, o) {
    o = o || {};
    var ev = new CustomEvent(name, { detail: detail, bubbles: o.bubbles !== false, cancelable: !!o.cancelable, composed: true });
    el.dispatchEvent(ev);
    return !ev.defaultPrevented;
  };
});

/* ---- MODULE: src/core/state-manager.js ---- */
MiniUI.module('src/core/state-manager.js', function (M) {
  /** Minimal immutable store: get / set / patch / subscribe(fn, keys?). */
  M.createStore = function (initial) {
    var state = Object.assign({}, initial), subs = new Set(), init = Object.assign({}, initial);
    var api = {
      get: function (k) { return k === undefined ? state : state[k]; },
      set: function (k, v) { var p = {}; p[k] = v; return api.patch(p); },
      patch: function (p) {
        var ch = [];
        for (var k in p) if (!Object.is(state[k], p[k])) { state = Object.assign({}, state); state[k] = p[k]; ch.push(k); }
        if (ch.length) Array.from(subs).forEach(function (fn) { try { fn(state, ch); } catch (e) { console.error(e); } });
        return ch.length > 0;
      },
      subscribe: function (fn, keys) {
        var w = keys ? function (s, ch) { if (ch.some(function (c) { return keys.indexOf(c) > -1; })) fn(s, ch); } : fn;
        subs.add(w); return function () { subs.delete(w); };
      },
      reset: function () { api.patch(init); },
      size: function () { return subs.size; }
    };
    return api;
  };
});

/* ---- MODULE: src/core/component.js ---- */
MiniUI.module('src/core/component.js', function (M) {
  var U = M.util;
  M.lifecycle = { listeners: 0, instances: new Set(), errors: [] };

  function parse(def, v) {
    switch (def.type) {
      case 'boolean': return v !== null && v !== 'false';
      case 'number': return v === null || v === '' ? def.default : Number(v);
      case 'json': try { return JSON.parse(v); } catch (e) { return def.default; }
      case 'any': if (v === null) return def.default; try { return JSON.parse(v); } catch (e) { return v; }
      default: return v === null ? (def.default == null ? '' : def.default) : v;
    }
  }
  function coerce(def, v) {
    switch (def.type) {
      case 'boolean': return v !== null && v !== undefined && v !== false && v !== 'false';
      case 'number': return v === null || v === undefined || v === '' ? def.default : Number(v);
      case 'string': return v == null ? (def.default == null ? '' : def.default) : String(v);
      default: return v;
    }
  }
  function hasCustom(proto, name) {
    for (var p = proto; p && p !== HTMLElement.prototype; p = Object.getPrototypeOf(p)) {
      var d = Object.getOwnPropertyDescriptor(p, name);
      if (d && !(d.get && d.get.__uiAuto)) return true;
    }
    return false;
  }

  /**
   * UIElement — base class of every component.
   *  static props   : { name: { type: 'string|boolean|number|json|any', default, reflect, doc } }
   *  build()        : runs once, creates DOM structure (light DOM, tokens-driven styling)
   *  bind()/unbind(): runs on each connect/disconnect — register document/window listeners here via this.listen()
   *  update(changed): idempotent render, batched in a microtask
   */
  class UIElement extends HTMLElement {
    static get observedAttributes() {
      var p = this.allProps();
      return Object.keys(p).filter(function (k) { return p[k].attr !== false; }).map(U.kebab);
    }
    static allProps() {
      if (Object.prototype.hasOwnProperty.call(this, '_allCache')) return this._allCache;
      var chain = [], c = this, out = {};
      while (c && c !== HTMLElement) { chain.unshift(c); c = Object.getPrototypeOf(c); }
      chain.forEach(function (k) { if (Object.prototype.hasOwnProperty.call(k, 'props')) Object.assign(out, k.props); });
      Object.keys(out).forEach(function (k) { if (!out[k].type) out[k] = Object.assign({ type: 'string' }, out[k]); });
      this._allCache = out; return out;
    }
    static install() {
      var props = this.allProps(), proto = this.prototype;
      Object.keys(props).forEach(function (name) {
        if (hasCustom(proto, name) || Object.prototype.hasOwnProperty.call(proto, name)) return;
        var get = function () { return this._p[name]; };
        get.__uiAuto = true;
        Object.defineProperty(proto, name, { get: get, set: function (v) { this._set(name, v); }, configurable: true });
      });
    }
    constructor() {
      super();
      this._p = {}; this._disposers = []; this._built = false; this._dirty = new Set(); this._pending = false;
      var props = this.constructor.allProps();
      for (var k in props) this._p[k] = props[k].default !== undefined ? props[k].default : props[k].type === 'boolean' ? false : props[k].type === 'string' ? '' : null;
      // Upgrade pre-set instance properties (set before the element was defined)
      for (var n in props) if (Object.prototype.hasOwnProperty.call(this, n)) { var v = this[n]; delete this[n]; this._p[n] = coerce(props[n], v); }
    }
    _set(name, v) {
      var def = this.constructor.allProps()[name]; if (!def) return;
      v = coerce(def, v);
      var old = this._p[name]; if (Object.is(old, v)) return;
      this._p[name] = v;
      var reflect = def.reflect !== undefined ? def.reflect : def.type === 'boolean';
      if (reflect && def.type !== 'any' && def.type !== 'json' && def.attr !== false) {
        this._reflecting = true; var a = U.kebab(name);
        if (def.type === 'boolean') { v ? this.setAttribute(a, '') : this.removeAttribute(a); }
        else if (v == null || v === '') this.removeAttribute(a); else this.setAttribute(a, String(v));
        this._reflecting = false;
      }
      this._changed(name, v, old);
    }
    attributeChangedCallback(attr, old, val) {
      if (this._reflecting || old === val) return;
      var name = U.camel(attr), def = this.constructor.allProps()[name]; if (!def) return;
      var v = parse(def, val), o = this._p[name]; if (Object.is(o, v)) return;
      this._p[name] = v; this._changed(name, v, o);
    }
    _changed(name, v, old) {
      this._safe(function () { if (this.propChanged) this.propChanged(name, v, old); });
      if (this._built && this.isConnected) this.requestUpdate(name);
    }
    _safe(fn) { try { return fn.call(this); } catch (e) { M.reportError(this, e); } }
    connectedCallback() {
      if (!this._built) { this._built = true; this._safe(function () { this.build(); }); }
      M.lifecycle.instances.add(this);
      this._safe(function () { this.bind(); });
      this._safe(function () { this.update(new Set(Object.keys(this.constructor.allProps()).concat(['*']))); });
      if (this.constructor.observeChildren) this._watchChildren();
      this._safe(function () { if (this.mounted) this.mounted(); });
    }
    disconnectedCallback() {
      M.lifecycle.instances.delete(this);
      this._safe(function () { this.unbind(); });
      this._dispose();
      this._safe(function () { if (this.teardown) this.teardown(); });
    }
    _watchChildren() {
      var self = this;
      var mo = new MutationObserver(function (list) {
        var relevant = list.some(function (m) {
          return Array.prototype.some.call(m.addedNodes, function (n) { return !(n.classList && n.classList.contains('ui-own')); }) ||
                 Array.prototype.some.call(m.removedNodes, function (n) { return !(n.classList && n.classList.contains('ui-own')); });
        });
        if (relevant) { if (self.childrenChanged) self._safe(function () { self.childrenChanged(); }); self.requestUpdate('children'); }
      });
      mo.observe(this, { childList: true });
      this.defer(function () { mo.disconnect(); });
    }
    /* ---- hooks ---- */
    build() {} bind() {} unbind() {} update() {}
    /* ---- helpers ---- */
    requestUpdate(name) {
      this._dirty.add(name || '*');
      if (this._pending) return; this._pending = true;
      var self = this;
      Promise.resolve().then(function () {
        self._pending = false; var d = self._dirty; self._dirty = new Set();
        if (self.isConnected && self._built) self._safe(function () { self.update(d); });
      });
    }
    get updateComplete() { return Promise.resolve().then(function () { return null; }); }
    listen(target, type, fn, opts) {
      target.addEventListener(type, fn, opts); M.lifecycle.listeners++;
      var off = function () { if (off.done) return; off.done = true; target.removeEventListener(type, fn, opts); M.lifecycle.listeners--; };
      this._disposers.push(off); return off;
    }
    defer(fn) { this._disposers.push(fn); return fn; }
    observeResize(fn, target) { var off = U.observeResize(target || this, fn); this._disposers.push(off); return off; }
    _dispose() { var d = this._disposers; this._disposers = []; d.forEach(function (f) { try { f(); } catch (e) { console.error(e); } }); }
    emit(name, detail, o) { return M.dispatch(this, 'ui-' + name, detail, o); }
    /** Direct children that were authored by the user (not generated by the component). */
    get slotted() { return Array.prototype.filter.call(this.childNodes, function (n) { return !(n.classList && n.classList.contains('ui-own')); }); }
    $(sel) { return this.querySelector(sel); }
    $$(sel) { return Array.prototype.slice.call(this.querySelectorAll(sel)); }
    aria(map) { for (var k in map) { var v = map[k]; v == null || v === false ? this.removeAttribute(k === 'role' ? 'role' : 'aria-' + k) : this.setAttribute(k === 'role' ? 'role' : 'aria-' + k, v === true ? 'true' : v); } }
    ensureId() { if (!this.id) this.id = U.uid(this.localName); return this.id; }
  }
  M.UIElement = UIElement;

  M.reportError = function (el, e) {
    console.error('[MiniUI] <' + (el && el.localName) + '> error:', e);
    M.lifecycle.errors.push({ tag: el && el.localName, message: String(e && e.message || e) });
    try { if (el && el.dispatchEvent) M.dispatch(el, 'ui-error', { error: e }); } catch (x) {}
  };
});

/* ---- MODULE: src/core/component-registry.js ---- */
MiniUI.module('src/core/component-registry.js', function (M) {
  var comps = new Map();
  M.registry = {
    components: comps,
    /** define(tag, Class, { group, desc, events, methods, slots }) — registers the Custom Element and its documentation. */
    define: function (tag, cls, meta) {
      if (cls.install) cls.install();
      if (!customElements.get(tag)) customElements.define(tag, cls);
      comps.set(tag, Object.assign({ tag: tag, cls: cls, group: 'Misc', desc: '', events: [], methods: [], slots: '' }, meta || {}));
      return cls;
    },
    get: function (t) { return comps.get(t); },
    list: function () { return Array.from(comps.values()); },
    groups: function () { var g = {}; comps.forEach(function (c) { (g[c.group] = g[c.group] || []).push(c); }); return g; },
    /** Documented props of a component, derived from its static props. */
    props: function (tag) { var c = comps.get(tag); if (!c) return []; var p = c.cls.allProps(); return Object.keys(p).map(function (k) { return { name: M.util.kebab(k), type: p[k].type, default: p[k].default, doc: p[k].doc || '' }; }); }
  };
  M.define = M.registry.define;
  /** Creates a preconfigured variant of an existing component, e.g. <ui-primary-button>. */
  M.alias = function (tag, Base, defaults, meta) {
    var cls = class extends Base {};
    cls.props = {};
    var all = Base.allProps();
    Object.keys(defaults).forEach(function (k) { cls.props[k] = Object.assign({}, all[k] || { type: typeof defaults[k] === 'boolean' ? 'boolean' : 'string' }, { default: defaults[k] }); });
    var bm = comps.get(Base.tag) || {};
    return M.define(tag, cls, Object.assign({ group: bm.group, alias: true }, meta || {}));
  };
});

/* ---- MODULE: src/core/focus-manager.js ---- */
MiniUI.module('src/core/focus-manager.js', function (M) {
  var SEL = 'a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"]),[contenteditable="true"],summary';
  var visible = function (el) { return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length); };
  M.focus = {
    focusables: function (root) { return Array.prototype.filter.call(root.querySelectorAll(SEL), function (e) { return visible(e) && !e.closest('[inert]'); }); },
    /** Traps Tab / Shift+Tab inside root. Returns a release function that restores previous focus. */
    trap: function (root, o) {
      o = o || {};
      var prev = document.activeElement;
      var onKey = function (e) {
        if (e.key !== 'Tab') return;
        var f = M.focus.focusables(root);
        if (!f.length) { e.preventDefault(); root.focus(); return; }
        var first = f[0], last = f[f.length - 1], a = document.activeElement;
        if (e.shiftKey && (a === first || !root.contains(a))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (a === last || !root.contains(a))) { e.preventDefault(); first.focus(); }
      };
      document.addEventListener('keydown', onKey, true);
      if (!root.hasAttribute('tabindex')) root.setAttribute('tabindex', '-1');
      if (o.autofocus !== false) {
        var target = root.querySelector('[autofocus],[data-autofocus]') || M.focus.focusables(root)[0] || root;
        setTimeout(function () { try { target.focus({ preventScroll: true }); } catch (e) {} }, 0);
      }
      return function () { document.removeEventListener('keydown', onKey, true); if (o.restore !== false && prev && prev.focus && document.contains(prev)) { try { prev.focus({ preventScroll: true }); } catch (e) {} } };
    }
  };
});

/* ---- MODULE: src/core/keyboard-manager.js ---- */
MiniUI.module('src/core/keyboard-manager.js', function (M) {
  var isMac = M.util.isMac, regs = [], attached = false;
  function parse(combo) {
    var parts = combo.split('+').map(function (s) { return s.trim(); }), key = parts.pop().toLowerCase();
    var m = { ctrl: false, alt: false, shift: false, meta: false, key: key };
    parts.forEach(function (p) {
      p = p.toLowerCase();
      if (p === 'mod') { if (isMac) m.meta = true; else m.ctrl = true; }
      else if (p === 'cmd' || p === 'meta') m.meta = true; else if (p === 'option' || p === 'alt') m.alt = true;
      else if (p === 'control' || p === 'ctrl') m.ctrl = true; else if (p === 'shift') m.shift = true;
    });
    if (key === 'esc') m.key = 'escape'; if (key === 'space') m.key = ' ';
    return m;
  }
  function matches(p, e) {
    if (p.ctrl !== e.ctrlKey || p.alt !== e.altKey || p.shift !== e.shiftKey || p.meta !== e.metaKey) return false;
    var k = (e.key || '').toLowerCase();
    if (k === p.key) return true;
    var c = e.code || '';
    return (p.key.length === 1 && /^[a-z]$/.test(p.key) && c === 'Key' + p.key.toUpperCase()) || (/^\d$/.test(p.key) && c === 'Digit' + p.key) || (p.key === '`' && c === 'Backquote');
  }
  function onKey(e) {
    var t = e.target, typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
    for (var i = regs.length - 1; i >= 0; i--) {
      var r = regs[i];
      if (r.disabled || !matches(r.p, e)) continue;
      if (typing && !r.o.allowInInput && !(r.p.ctrl || r.p.meta || r.p.alt)) continue;
      if (r.o.when && !r.o.when(e)) continue;
      if (r.o.preventDefault !== false) e.preventDefault();
      r.fn(e); return;
    }
  }
  M.keys = {
    isMac: isMac,
    /** register('Mod+K', fn, { description, scope, allowInInput, when }) -> unregister */
    register: function (combo, fn, o) {
      var r = { combo: combo, p: parse(combo), fn: fn, o: o || {} };
      regs.push(r);
      if (!attached) { document.addEventListener('keydown', onKey); attached = true; }
      return function () { var i = regs.indexOf(r); if (i > -1) regs.splice(i, 1); if (!regs.length && attached) { document.removeEventListener('keydown', onKey); attached = false; } };
    },
    list: function () { return regs.map(function (r) { return { combo: r.combo, description: r.o.description || '', scope: r.o.scope || 'global' }; }); },
    parse: parse, matches: matches,
    /** Human readable form: Mod+Shift+K -> ⇧⌘K (mac) / Ctrl+Shift+K */
    format: function (combo) {
      if (!combo) return '';
      var p = parse(combo), names = { arrowup: '↑', arrowdown: '↓', arrowleft: '←', arrowright: '→', escape: 'Esc', enter: '↵', ' ': 'Space', backspace: '⌫', delete: '⌦', tab: '⇥' };
      var k = names[p.key] || (p.key.length === 1 ? p.key.toUpperCase() : p.key.charAt(0).toUpperCase() + p.key.slice(1));
      if (isMac) return (p.ctrl ? '⌃' : '') + (p.alt ? '⌥' : '') + (p.shift ? '⇧' : '') + (p.meta ? '⌘' : '') + k;
      return [p.ctrl && 'Ctrl', p.alt && 'Alt', p.shift && 'Shift', p.meta && 'Meta', k].filter(Boolean).join('+');
    },
    /** Builds a combo string from a KeyboardEvent (used by ShortcutEditor). */
    fromEvent: function (e) {
      var k = e.key; if (['Control', 'Shift', 'Alt', 'Meta'].indexOf(k) > -1) return '';
      var parts = []; if (e.ctrlKey) parts.push('Ctrl'); if (e.altKey) parts.push('Alt'); if (e.shiftKey) parts.push('Shift'); if (e.metaKey) parts.push('Meta');
      var c = e.code || ''; var key = /^Key[A-Z]$/.test(c) ? c.slice(3) : /^Digit\d$/.test(c) ? c.slice(5) : k.length === 1 ? k.toUpperCase() : k;
      parts.push(key); return parts.join('+');
    }
  };
});

/* ---- MODULE: src/core/overlay-manager.js ---- */
MiniUI.module('src/core/overlay-manager.js', function (M) {
  var U = M.util, h = M.h;
  var LAYERS = { dropdown: 1000, drawer: 1100, modal: 1200, popover: 1300, toast: 1400, tooltip: 1500 };
  var stack = [], portal = null, listening = false;

  M.portal = {
    root: function () {
      if (!portal || !document.body.contains(portal)) { portal = document.createElement('div'); portal.id = 'ui-portal'; portal.className = 'ui-portal'; document.body.appendChild(portal); }
      return portal;
    }
  };

  function inside(entry, t) { return entry.el.contains(t) || (entry.o.anchor && entry.o.anchor.contains && entry.o.anchor.contains(t)) || (entry.backdrop && entry.backdrop === t && !entry.o.closeOnOutside); }
  function onKeyDown(e) {
    if (e.key !== 'Escape' || !stack.length) return;
    var top = stack[stack.length - 1];
    if (top.o.closeOnEscape) { e.preventDefault(); e.stopPropagation(); top.close('escape'); }
  }
  function onPointerDown(e) {
    for (var i = stack.length - 1; i >= 0; i--) {
      var en = stack[i];
      if (en.o.modal) { if (e.target === en.backdrop && en.o.closeOnOutside) en.close('outside'); return; }
      if (inside(en, e.target)) return;
      if (en.o.closeOnOutside) en.close('outside'); else return;
    }
  }
  function onReflow() { stack.forEach(function (e) { if (e.place) e.place(); }); }
  var reflow = U.throttle(onReflow, 50);
  function attach() { if (listening) return; listening = true; document.addEventListener('keydown', onKeyDown, true); document.addEventListener('pointerdown', onPointerDown, true); window.addEventListener('resize', reflow); window.addEventListener('scroll', reflow, true); }
  function detach() { if (!listening || stack.length) return; listening = false; document.removeEventListener('keydown', onKeyDown, true); document.removeEventListener('pointerdown', onPointerDown, true); window.removeEventListener('resize', reflow); window.removeEventListener('scroll', reflow, true); }

  M.overlay = {
    stack: stack,
    LAYERS: LAYERS,
    /**
     * open(el, { layer, modal, anchor|point, placement, offset, matchWidth, closeOnEscape, closeOnOutside,
     *            trapFocus, restoreFocus, animation, onClose, backdropClass, inertBackground })
     */
    open: function (el, o) {
      o = Object.assign({ layer: 'dropdown', modal: false, closeOnEscape: true, closeOnOutside: true, trapFocus: false, restoreFocus: true, animation: 'scale', placement: 'bottom-start', offset: 6 }, o || {});
      var root = M.portal.root(), entry = { el: el, o: o, closed: false, backdrop: null };
      var host = el;
      if (o.modal) { entry.backdrop = h('div', { class: ['ui-backdrop', o.backdropClass] }); entry.backdrop.append(el); root.append(entry.backdrop); host = entry.backdrop; el.style.position = 'relative'; }
      else { root.append(el); }
      el.classList.add('ui-overlay');
      host.style.zIndex = (LAYERS[o.layer] || 1000) + stack.length;
      entry.host = host;
      entry.place = function () {
        if (o.modal || o.noPosition) return;
        if (o.anchor) U.position(o.anchor, el, o); else if (o.point) U.position(o.point, el, o);
      };
      entry.place();
      stack.push(entry); attach();
      if (o.trapFocus) entry.release = M.focus.trap(el, { restore: o.restoreFocus });
      if (entry.backdrop) M.anim.enter(entry.backdrop, 'fade');
      M.anim.enter(el, o.animation);
      entry.close = function (result) {
        if (entry.closed) return Promise.resolve();
        entry.closed = true;
        var i = stack.indexOf(entry);
        if (i > -1) { var above = stack.slice(i + 1); stack.splice(i, 1); above.forEach(function (a) { a.close('parent-closed'); }); }
        if (entry.release) entry.release();
        detach();
        if (entry.backdrop) M.anim.leave(entry.backdrop, 'fade');
        return M.anim.leave(el, o.animation).then(function () { host.remove(); if (o.onClose) o.onClose(result); });
      };
      return entry;
    },
    closeAll: function () { stack.slice().reverse().forEach(function (e) { e.close('closeAll'); }); },
    top: function () { return stack[stack.length - 1] || null; }
  };
});

/* ---- MODULE: src/core/configuration.js ---- */
MiniUI.module('src/core/configuration.js', function (M) {
  var cfg = { prefix: 'ui', locale: 'pt-BR', debug: false, storagePrefix: 'miniui:', motion: 'auto', toastDuration: 4200 };
  M.config = {
    get: function (k) { return k === undefined ? Object.assign({}, cfg) : cfg[k]; },
    set: function (k, v) { var o = typeof k === 'object' ? k : { [k]: v }; Object.assign(cfg, o); M.events.emit('config:change', o); }
  };
});

/* ---- MODULE: src/design-system/design-system.js ---- */
MiniUI.module('src/design-system/design-system.js', function (M) {
  var root = document.documentElement, themes = new Map(), overrides = {}, styleEl = null;
  var pref = 'light';
  var normKey = function (k) { return '--ui-' + String(k).replace(/^--ui-/, ''); };

  function rebuild() {
    if (!styleEl) { styleEl = document.createElement('style'); styleEl.setAttribute('data-module', 'runtime-themes'); document.head.appendChild(styleEl); }
    var css = '';
    themes.forEach(function (t) {
      if (!t.tokens) return;
      css += 'html[data-theme="' + t.name + '"]{' + Object.keys(t.tokens).map(function (k) { return normKey(k) + ':' + t.tokens[k]; }).join(';') + '}\n';
    });
    styleEl.textContent = css;
  }
  function systemScheme() { return M.util.mq('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }

  var TM = M.ThemeManager = {
    themes: themes,
    /** register({ name, label, scheme:'light'|'dark', tokens:{ accent:'#f0f', ... } }) */
    register: function (def) {
      if (!def || !def.name) throw new Error('Theme requires a name');
      var t = { name: def.name, label: def.label || def.name, scheme: def.scheme === 'dark' ? 'dark' : 'light', tokens: def.tokens || null, builtin: !!def.builtin };
      themes.set(t.name, t); rebuild(); M.events.emit('theme:registered', t); return t;
    },
    /** create(name, { extends:'dark', tokens }) -> convenience for custom themes derived from a scheme */
    create: function (name, o) { o = o || {}; var base = themes.get(o.extends || 'light'); return TM.register({ name: name, label: o.label || name, scheme: o.scheme || (base && base.scheme) || 'light', tokens: o.tokens || {} }); },
    list: function () { return Array.from(themes.values()); },
    get current() { return root.getAttribute('data-theme'); },
    get scheme() { return root.getAttribute('data-scheme'); },
    get preference() { return pref; },
    /** apply(name | 'system') — updates every component instantly through CSS custom properties. */
    apply: function (name, o) {
      o = o || {};
      pref = name;
      var resolved = name === 'system' ? systemScheme() : name;
      var t = themes.get(resolved) || themes.get('light');
      TM.resetTokens();
      root.setAttribute('data-theme', t.name); root.setAttribute('data-scheme', t.scheme);
      if (o.persist !== false && M.Storage) M.Storage.set('theme', pref);
      M.events.emit('theme:change', { name: t.name, scheme: t.scheme, preference: pref });
      document.dispatchEvent(new CustomEvent('ui-theme-change', { detail: { name: t.name, scheme: t.scheme } }));
      return t;
    },
    setMode: function (m) { return TM.apply(m); },
    toggle: function () { return TM.apply(TM.scheme === 'dark' ? 'light' : 'dark'); },
    /** Changes a token dynamically: setToken('accent', '#ff0066') */
    setToken: function (k, v) { overrides[normKey(k)] = v; root.style.setProperty(normKey(k), v); M.events.emit('theme:token', { token: normKey(k), value: v }); },
    getToken: function (k) { return getComputedStyle(root).getPropertyValue(normKey(k)).trim(); },
    resetTokens: function () { Object.keys(overrides).forEach(function (k) { root.style.removeProperty(k); }); overrides = {}; },
    overrides: function () { return Object.assign({}, overrides); },
    setContrast: function (on) { on ? root.setAttribute('data-contrast', 'high') : root.removeAttribute('data-contrast'); if (M.Storage) M.Storage.set('contrast', !!on); },
    setMotion: function (m) { m === 'reduce' ? root.setAttribute('data-motion', 'reduce') : root.removeAttribute('data-motion'); if (M.Storage) M.Storage.set('motion', m); },
    /** Restores persisted preferences and follows the OS scheme when preference is 'system'. */
    init: function () {
      var mq = M.util.mq('(prefers-color-scheme: dark)');
      var onSys = function () { if (pref === 'system') TM.apply('system', { persist: false }); };
      if (mq.addEventListener) mq.addEventListener('change', onSys); else if (mq.addListener) mq.addListener(onSys);
      if (!M.Storage) return Promise.resolve();
      return Promise.all([M.Storage.get('theme'), M.Storage.get('contrast'), M.Storage.get('motion')]).then(function (r) {
        if (r[0] && (r[0] === 'system' || themes.has(r[0]))) TM.apply(r[0], { persist: false });
        if (r[1]) TM.setContrast(true); if (r[2] === 'reduce') TM.setMotion('reduce');
      });
    }
  };
  TM.register({ name: 'light', label: 'Claro', scheme: 'light', builtin: true });
  TM.register({ name: 'dark', label: 'Escuro', scheme: 'dark', builtin: true });
  TM.register({ name: 'midnight', label: 'Meia-noite', scheme: 'dark', tokens: { 'accent': '#8e7bff', 'accent-hover': '#a597ff', 'accent-soft': 'rgba(142,123,255,.24)', 'bg': '#14142a', 'bg-content': '#1a1a35', 'bg-sidebar': '#1f1f40', 'surface': '#23234a', 'surface-2': '#2c2c5a', 'surface-3': '#383870', 'focus-ring': '#a89bff', 'glass-solid': '#1f1f40', 'glass': 'rgba(31,31,64,.74)', 'control-bg': '#2c2c5a' } });
  TM.register({ name: 'rose', label: 'Rosé', scheme: 'light', tokens: { 'accent': '#e5456b', 'accent-hover': '#c9335a', 'accent-soft': 'rgba(229,69,107,.13)', 'bg': '#fbf3f5', 'bg-sidebar': '#f6e7eb', 'surface-2': '#fbf0f3', 'focus-ring': '#e5456b', 'glass-solid': '#fbf3f5', 'glass': 'rgba(251,243,245,.74)' } });
  TM.register({ name: 'forest', label: 'Floresta', scheme: 'dark', tokens: { 'accent': '#3ecf8e', 'accent-hover': '#5fe0a5', 'accent-soft': 'rgba(62,207,142,.2)', 'text-on-accent': '#06281a', 'bg': '#14201b', 'bg-content': '#18271f', 'bg-sidebar': '#1c2d24', 'surface': '#1f3329', 'surface-2': '#274033', 'surface-3': '#315040', 'focus-ring': '#5fe0a5', 'glass-solid': '#1c2d24', 'glass': 'rgba(28,45,36,.74)', 'control-bg': '#274033' } });
  M.designSystem = { tokens: ['bg', 'bg-content', 'bg-sidebar', 'surface', 'surface-2', 'surface-3', 'text', 'text-2', 'text-3', 'border', 'accent', 'accent-soft', 'danger', 'success', 'warning', 'info', 'hover', 'glass-solid', 'control-bg'] };
});

/* ---- MODULE: src/icons/index.js ---- */
MiniUI.module('src/icons/index.js', function (M) {
  /* Own icon set: 24x24 grid, stroke based. Paths separated by "|". Organised by category (src/icons/<category>). */
  var SET = {
    system: {
      home: 'M3 11l9-8 9 8|M5 10v10h5v-6h4v6h5V10',
      settings: 'M12 15a3 3 0 100-6 3 3 0 000 6z|M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z',
      power: 'M18.4 6.6a9 9 0 11-12.8 0|M12 2v10',
      monitor: 'M4 3h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z|M8 21h8|M12 17v4',
      wifi: 'M5 12.5a10 10 0 0114 0|M8.5 16a5 5 0 017 0|M12 20h.01|M1.4 9a15 15 0 0121.2 0',
      battery: 'M3 8h15a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z|M23 11v2',
      volume: 'M11 5L6 9H2v6h4l5 4V5z|M15.5 8.5a5 5 0 010 7|M19 5a10 10 0 010 14',
      moon: 'M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z',
      sun: 'M12 17a5 5 0 100-10 5 5 0 000 10z|M12 1v2|M12 21v2|M4.2 4.2l1.4 1.4|M18.4 18.4l1.4 1.4|M1 12h2|M21 12h2|M4.2 19.8l1.4-1.4|M18.4 5.6l1.4-1.4',
      globe: 'M12 22a10 10 0 100-20 10 10 0 000 20z|M2 12h20|M12 2a15 15 0 010 20 15 15 0 010-20z',
      cpu: 'M6 6h12v12H6z|M9 9h6v6H9z|M9 2v4|M15 2v4|M9 18v4|M15 18v4|M2 9h4|M2 15h4|M18 9h4|M18 15h4',
      drive: 'M22 12H2|M5.5 5.1L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.5-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.7 1.1z|M6 16h.01|M10 16h.01',
      logo: 'M12 2l8.7 5v10L12 22l-8.7-5V7z|M12 8l4 2.3v4.4L12 17l-4-2.3v-4.4z',
      bluetooth: 'M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11',
      database: 'M12 8c5 0 9-1.3 9-3s-4-3-9-3-9 1.3-9 3 4 3 9 3z|M21 12c0 1.7-4 3-9 3s-9-1.3-9-3|M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5',
      cloud: 'M18 10h-1.3A8 8 0 109 20h9a5 5 0 000-10z',
      zap: 'M13 2L3 14h9l-1 8 10-12h-9z'
    },
    navigation: {
      'chevron-right': 'M9 6l6 6-6 6', 'chevron-left': 'M15 6l-6 6 6 6', 'chevron-down': 'M6 9l6 6 6-6', 'chevron-up': 'M18 15l-6-6-6 6',
      'chevrons-up-down': 'M7 15l5 5 5-5|M7 9l5-5 5 5',
      'arrow-left': 'M19 12H5|M12 19l-7-7 7-7', 'arrow-right': 'M5 12h14|M12 5l7 7-7 7', 'arrow-up': 'M12 19V5|M5 12l7-7 7 7', 'arrow-down': 'M12 5v14|M19 12l-7 7-7-7',
      menu: 'M3 6h18|M3 12h18|M3 18h18', sidebar: 'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z|M9 3v18',
      grid: 'M3 3h7v7H3z|M14 3h7v7h-7z|M14 14h7v7h-7z|M3 14h7v7H3z', list: 'M8 6h13|M8 12h13|M8 18h13|M3 6h.01|M3 12h.01|M3 18h.01',
      columns: 'M3 4h18v16H3z|M9 4v16|M15 4v16', 'external': 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6|M15 3h6v6|M10 14L21 3',
      'more-h': 'M5 12h.01|M12 12h.01|M19 12h.01', 'more-v': 'M12 5h.01|M12 12h.01|M12 19h.01', compass: 'M12 22a10 10 0 100-20 10 10 0 000 20z|M16 8l-2 6-6 2 2-6z'
    },
    actions: {
      search: 'M11 19a8 8 0 100-16 8 8 0 000 16z|M21 21l-4.3-4.3', x: 'M18 6L6 18|M6 6l12 12', check: 'M20 6L9 17l-5-5', plus: 'M12 5v14|M5 12h14', minus: 'M5 12h14',
      refresh: 'M23 4v6h-6|M1 20v-6h6|M3.5 9a9 9 0 0114.9-3.4L23 10|M1 14l4.6 4.4A9 9 0 0020.5 15',
      copy: 'M9 9h11a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1V10a1 1 0 011-1z|M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1',
      trash: 'M3 6h18|M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6|M10 11v6|M14 11v6|M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2',
      edit: 'M12 20h9|M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z',
      save: 'M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z|M17 21v-8H7v8|M7 3v5h8',
      share: 'M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8|M16 6l-4-4-4 4|M12 2v13', filter: 'M22 3H2l8 9.5V19l4 2v-8.5z', sort: 'M3 6h18|M6 12h12|M10 18h4',
      link: 'M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.7 1.7|M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7l1.7-1.7',
      eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z|M12 15a3 3 0 100-6 3 3 0 000 6z',
      'eye-off': 'M17.9 17.9A10.1 10.1 0 0112 20C5 20 1 12 1 12a18 18 0 015.1-5.9|M9.9 4.2A9 9 0 0112 4c7 0 11 8 11 8a18 18 0 01-2.2 3.2|M1 1l22 22',
      download: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4|M7 10l5 5 5-5|M12 15V3', upload: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4|M17 8l-5-5-5 5|M12 3v12',
      star: 'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z',
      heart: 'M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z',
      bookmark: 'M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z', command: 'M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z',
      undo: 'M3 7v6h6|M21 17a9 9 0 00-15-6.7L3 13', redo: 'M21 7v6h-6|M3 17a9 9 0 0115-6.7L21 13', pin: 'M12 17v5|M9 3h6l-1 7 4 3v2H6v-2l4-3z'
    },
    files: {
      file: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z|M14 2v6h6',
      'file-text': 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z|M14 2v6h6|M16 13H8|M16 17H8|M10 9H8',
      folder: 'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z',
      'folder-open': 'M5 19h14a2 2 0 002-1.7l1-8A2 2 0 0020 7H9L7 4H4a2 2 0 00-2 2v11a2 2 0 003 2z',
      image: 'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z|M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z|M21 15l-5-5L5 21',
      archive: 'M21 8v13H3V8|M1 3h22v5H1z|M10 12h4', code: 'M16 18l6-6-6-6|M8 6l-6 6 6 6',
      'file-music': 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z|M14 2v6h6|M10 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z|M11.5 16.5V11l4 1'
    },
    media: {
      play: 'M7 4l13 8-13 8z', pause: 'M6 4h4v16H6z|M14 4h4v16h-4z', 'skip-forward': 'M5 4l10 8-10 8z|M19 5v14', 'skip-back': 'M19 20L9 12l10-8z|M5 19V5',
      shuffle: 'M16 3h5v5|M4 20L21 3|M21 16v5h-5|M15 15l6 6|M4 4l5 5', repeat: 'M17 1l4 4-4 4|M3 11V9a4 4 0 014-4h14|M7 23l-4-4 4-4|M21 13v2a4 4 0 01-4 4H3',
      music: 'M9 18V5l12-2v13|M6 21a3 3 0 100-6 3 3 0 000 6z|M18 19a3 3 0 100-6 3 3 0 000 6z',
      video: 'M23 7l-7 5 7 5V7z|M3 5h11a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z',
      maximize: 'M8 3H5a2 2 0 00-2 2v3|M21 8V5a2 2 0 00-2-2h-3|M3 16v3a2 2 0 002 2h3|M16 21h3a2 2 0 002-2v-3', minimize: 'M4 14h6v6|M20 10h-6V4|M14 10l7-7|M3 21l7-7',
      mic: 'M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z|M19 10v2a7 7 0 01-14 0v-2|M12 19v4|M8 23h8', headphones: 'M3 18v-6a9 9 0 0118 0v6|M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z',
      camera: 'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z|M12 17a4 4 0 100-8 4 4 0 000 8z',
      'volume-x': 'M11 5L6 9H2v6h4l5 4V5z|M23 9l-6 6|M17 9l6 6', list_music: 'M21 15V6|M18.5 18a2.5 2.5 0 100-5 2.5 2.5 0 000 5z|M12 12H3|M16 6H3|M12 18H3'
    },
    communication: {
      bell: 'M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9|M13.7 21a2 2 0 01-3.4 0',
      mail: 'M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z|M22 6l-10 7L2 6',
      message: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z', send: 'M22 2L11 13|M22 2l-7 20-4-9-9-4z',
      user: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2|M12 11a4 4 0 100-8 4 4 0 000 8z',
      users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2|M9 11a4 4 0 100-8 4 4 0 000 8z|M23 21v-2a4 4 0 00-3-3.9|M16 3.1a4 4 0 010 7.8'
    },
    tools: {
      terminal: 'M4 17l6-6-6-6|M12 19h8', layers: 'M12 2L2 7l10 5 10-5z|M2 17l10 5 10-5|M2 12l10 5 10-5',
      'bar-chart': 'M12 20V10|M18 20V4|M6 20v-4', 'pie-chart': 'M21.2 15.9A10 10 0 118 2.8|M22 12A10 10 0 0012 2v10z', activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
      'trending-up': 'M23 6l-9.5 9.5-5-5L1 18|M17 6h6v6', sliders: 'M4 21v-7|M4 10V3|M12 21v-9|M12 8V3|M20 21v-5|M20 12V3|M1 14h6|M9 8h6|M17 16h6',
      palette: 'M12 22a10 10 0 110-20c5.5 0 10 3.6 10 8 0 3-2.5 4-5 4h-2a2 2 0 00-1 3.7c.6.5.6 1.4.2 2A3 3 0 0112 22z|M7.5 11h.01|M10 7h.01|M15 7h.01|M17.5 11h.01',
      calendar: 'M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z|M16 2v4|M8 2v4|M3 10h18', clock: 'M12 22a10 10 0 100-20 10 10 0 000 20z|M12 6v6l4 2',
      calculator: 'M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z|M8 6h8|M8 11h.01|M12 11h.01|M16 11h.01|M8 15h.01|M12 15h.01|M16 15h.01|M8 18h.01|M12 18h.01|M16 18h.01',
      tag: 'M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8z|M7 7h.01', type: 'M4 7V4h16v3|M9 20h6|M12 4v16', bold: 'M6 4h8a4 4 0 010 8H6z|M6 12h9a4 4 0 010 8H6z', italic: 'M19 4h-9|M14 20H5|M15 4L9 20',
      underline: 'M6 3v7a6 6 0 0012 0V3|M4 21h16', 'list-ol': 'M10 6h11|M10 12h11|M10 18h11|M4 6h1v4|M4 10h2|M6 18H4c0-1 2-2 2-3s-1-1.5-2-1', quote: 'M3 21c3 0 7-1 7-8V5c0-1-1-2-2-2H4c-1 0-2 1-2 2v4c0 1 1 2 2 2h4|M15 21c3 0 7-1 7-8V5c0-1-1-2-2-2h-4c-1 0-2 1-2 2v4c0 1 1 2 2 2h4',
      'git-branch': 'M6 3v12|M18 9a3 3 0 100-6 3 3 0 000 6z|M6 21a3 3 0 100-6 3 3 0 000 6z|M18 9a9 9 0 01-9 9'
    },
    status: {
      info: 'M12 22a10 10 0 100-20 10 10 0 000 20z|M12 16v-4|M12 8h.01',
      'alert-triangle': 'M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z|M12 9v4|M12 17h.01',
      'alert-circle': 'M12 22a10 10 0 100-20 10 10 0 000 20z|M12 8v4|M12 16h.01', 'check-circle': 'M22 11.1V12a10 10 0 11-5.9-9.1|M22 4L12 14l-3-3',
      'x-circle': 'M12 22a10 10 0 100-20 10 10 0 000 20z|M15 9l-6 6|M9 9l6 6', 'help-circle': 'M12 22a10 10 0 100-20 10 10 0 000 20z|M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3|M12 17h.01',
      'wifi-off': 'M1 1l22 22|M16.7 11.1A11 11 0 0119 12.5|M5 12.5a11 11 0 015.2-2.9|M10.7 5.1A16 16 0 0122.6 9|M1.4 9a16 16 0 013.4-2.7|M8.5 16a5 5 0 016.9-.7|M12 20h.01', loader: 'M12 2v4|M12 18v4|M4.9 4.9l2.9 2.9|M16.2 16.2l2.9 2.9|M2 12h4|M18 12h4|M4.9 19.1l2.9-2.9|M16.2 7.8l2.9-2.9'
    },
    security: {
      lock: 'M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z|M7 11V7a5 5 0 0110 0v4', unlock: 'M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z|M7 11V7a5 5 0 019.9-1',
      shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', key: 'M21 2l-2 2m-7.6 7.6a5.5 5.5 0 11-7.8 7.8 5.5 5.5 0 017.8-7.8zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4',
      'shield-check': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z|M9 12l2 2 4-4'
    },
    ui: {
      'window': 'M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z|M2 9h20|M5.5 6.5h.01|M8.5 6.5h.01', dock: 'M3 4h18v12H3z|M6 20h12', 'toggle': 'M7 6h10a6 6 0 010 12H7A6 6 0 017 6z|M17 12h.01',
      'check-square': 'M9 11l3 3L22 4|M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11', 'move': 'M5 9l-3 3 3 3|M9 5l3-3 3 3|M15 19l-3 3-3-3|M19 9l3 3-3 3|M2 12h20|M12 2v20',
      'resize': 'M21 3L3 21|M21 11L11 21|M21 17l-4 4', 'qr': 'M3 3h7v7H3z|M14 3h7v7h-7z|M3 14h7v7H3z|M14 14h3v3h-3z|M20 14v.01|M14 20h.01|M17 17h4v4|M20 20v.01', 'wand': 'M15 4V2|M15 16v-2|M8 9h2|M20 9h2|M17.8 11.8L19 13|M15 9h.01|M17.8 6.2L19 5|M3 21l9-9|M12.2 6.2L11 5',
      'notepad': 'M4 3h16v18H4z|M8 3v18|M12 8h5|M12 12h5', 'sparkles': 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z|M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z'
    }
  };
  var flat = {}, cats = {};
  function register(name, paths, cat) { flat[name] = paths; (cats[cat || 'custom'] = cats[cat || 'custom'] || []).push(name); }
  Object.keys(SET).forEach(function (c) { Object.keys(SET[c]).forEach(function (n) { register(n, SET[c][n], c); }); });

  M.icons = {
    register: register,
    has: function (n) { return !!flat[n]; },
    names: function () { return Object.keys(flat); },
    categories: function () { return cats; },
    /** Returns an SVG string. opts: size (px|css), stroke, color, fill */
    svg: function (name, o) {
      o = o || {};
      var p = flat[name];
      if (!p) { p = flat['help-circle']; }
      var size = o.size || '1em';
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="' + (o.fill || 'none') + '" stroke="' + (o.color || 'currentColor') + '" stroke-width="' + (o.stroke || 1.8) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
        p.split('|').map(function (d) { return '<path d="' + d + '"/>'; }).join('') + '</svg>';
    }
  };
  M.icon = function (name, o) { return M.icons.svg(name, o); };
});

/* ---- MODULE: src/utilities/animation.js ---- */
MiniUI.module('src/utilities/animation.js', function (M) {
  var U = M.util;
  var EASE = 'cubic-bezier(.22,.8,.3,1)';
  function canAnimate(el) { return U.supports.animate && el && el.animate && !U.reducedMotion(); }
  /** Core primitive: Web Animations API with graceful fallback (jumps to the end state). */
  function run(el, kf, o) {
    if (!canAnimate(el)) return Promise.resolve();
    o = Object.assign({ duration: 200, easing: EASE, fill: 'backwards' }, o || {});
    var a;
    try { a = el.animate(kf, o); } catch (e) { return Promise.resolve(); }
    return new Promise(function (res) { a.onfinish = res; a.oncancel = res; });
  }
  function clear(el) { if (el.getAnimations) el.getAnimations().forEach(function (a) { try { a.cancel(); } catch (e) {} }); }

  var PRESETS = {
    fade: [{ opacity: 0 }, { opacity: 1 }],
    scale: [{ opacity: 0, transform: 'scale(.95)' }, { opacity: 1, transform: 'scale(1)' }],
    zoom: [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(1)' }],
    'slide-up': [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }],
    'slide-down': [{ opacity: 0, transform: 'translateY(-14px)' }, { opacity: 1, transform: 'translateY(0)' }],
    'slide-left': [{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)' }],
    'slide-right': [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
    'slide-bottom': [{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }],
    modal: [{ opacity: 0, transform: 'scale(.94) translateY(8px)' }, { opacity: 1, transform: 'scale(1) translateY(0)' }],
    notification: [{ opacity: 0, transform: 'translateX(40px) scale(.96)' }, { opacity: 1, transform: 'translateX(0) scale(1)' }]
  };

  var A = M.anim = {
    run: run, clear: clear, presets: PRESETS,
    enter: function (el, kind) { clear(el); var kf = PRESETS[kind]; if (!kf) return Promise.resolve(); return run(el, kf, { duration: kind === 'modal' ? 220 : kind.indexOf('slide-') === 0 ? 260 : 150, fill: 'none' }).then(function () { clear(el); }); },
    leave: function (el, kind) { clear(el); var kf = PRESETS[kind]; if (!kf) return Promise.resolve(); return run(el, kf.slice().reverse(), { duration: 120, fill: 'forwards', easing: 'ease-in' }).then(function () { clear(el); }); },
    fade: function (el, dir) { return run(el, dir === 'out' ? PRESETS.fade.slice().reverse() : PRESETS.fade, { fill: dir === 'out' ? 'forwards' : 'backwards' }); },
    slide: function (el, from, dir) { var map = { left: 'slide-left', right: 'slide-right', up: 'slide-up', down: 'slide-down', bottom: 'slide-bottom' }; return dir === 'out' ? A.leave(el, map[from || 'up']) : A.enter(el, map[from || 'up']); },
    scale: function (el, dir) { return dir === 'out' ? A.leave(el, 'scale') : A.enter(el, 'scale'); },
    zoom: function (el, dir) { return dir === 'out' ? A.leave(el, 'zoom') : A.enter(el, 'zoom'); },
    /** Height collapse. Resolves after element is hidden. */
    collapse: function (el, o) {
      if (el.hidden) return Promise.resolve();
      var hgt = el.getBoundingClientRect().height; el.style.overflow = 'hidden';
      return run(el, [{ height: hgt + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], Object.assign({ fill: 'forwards' }, o)).then(function () { el.hidden = true; clear(el); el.style.overflow = ''; });
    },
    expand: function (el, o) {
      el.hidden = false; var hgt = el.scrollHeight; el.style.overflow = 'hidden';
      return run(el, [{ height: '0px', opacity: 0 }, { height: hgt + 'px', opacity: 1 }], Object.assign({ fill: 'none' }, o)).then(function () { el.style.overflow = ''; });
    },
    bounce: function (el, o) { o = o || {}; var h = o.height || 16; return run(el, [{ transform: 'translateY(0)' }, { transform: 'translateY(-' + h + 'px)', offset: .3 }, { transform: 'translateY(0)', offset: .55 }, { transform: 'translateY(-' + h / 2.4 + 'px)', offset: .75 }, { transform: 'translateY(0)' }], { duration: o.duration || 700, easing: 'ease-out', iterations: o.iterations || 1 }); },
    /** Physically based spring. Samples a damped oscillator into linear keyframes. */
    springFrames: function (o) {
      o = o || {}; var k = o.stiffness || 220, c = o.damping || 15, x = 0, v = 0, dt = 1 / 60, xs = [0];
      for (var i = 0; i < 180; i++) { var a = -k * (x - 1) - c * v; v += a * dt; x += v * dt; xs.push(x); if (i > 8 && Math.abs(x - 1) < .002 && Math.abs(v) < .02) break; }
      xs.push(1); return { values: xs, duration: Math.round(xs.length * 1000 / 60) };
    },
    spring: function (el, o) {
      o = o || {}; var f = A.springFrames(o), s0 = o.from == null ? .85 : o.from, y0 = o.y || 0;
      var kf = f.values.map(function (x) { return { opacity: Math.min(1, x * 1.6), transform: 'translateY(' + (y0 * (1 - x)).toFixed(2) + 'px) scale(' + (s0 + (1 - s0) * x).toFixed(4) + ')' }; });
      return run(el, kf, { duration: f.duration, easing: 'linear' });
    },
    /** FLIP animation between two rects (window minimise/maximise/restore). */
    flip: function (el, from, to, o) {
      o = o || {}; if (!from || !to) return Promise.resolve();
      var dx = from.x - to.x, dy = from.y - to.y, sx = from.width / Math.max(1, to.width), sy = from.height / Math.max(1, to.height);
      return run(el, [{ transformOrigin: '0 0', transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + sx + ',' + sy + ')', opacity: o.fromOpacity == null ? 1 : o.fromOpacity }, { transformOrigin: '0 0', transform: 'none', opacity: 1 }], { duration: o.duration || 320, easing: o.easing || EASE });
    },
    flipOut: function (el, from, to, o) {
      o = o || {}; if (!from || !to) return Promise.resolve();
      var dx = to.x - from.x, dy = to.y - from.y, sx = to.width / Math.max(1, from.width), sy = to.height / Math.max(1, from.height);
      return run(el, [{ transformOrigin: '0 0', transform: 'none', opacity: 1 }, { transformOrigin: '0 0', transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + sx + ',' + sy + ')', opacity: .2 }], { duration: o.duration || 320, easing: 'cubic-bezier(.5,0,.75,0)', fill: 'forwards' });
    },
    windowTransition: function (el, kind) { return kind === 'close' ? run(el, [{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.94)' }], { duration: 160, fill: 'forwards' }) : A.spring(el, { from: .92, stiffness: 300, damping: 22 }); },
    modalTransition: function (el, dir) { return dir === 'out' ? A.leave(el, 'modal') : A.enter(el, 'modal'); },
    notificationTransition: function (el, dir) { return dir === 'out' ? A.leave(el, 'notification') : A.enter(el, 'notification'); },
    /** Dock magnification: scale factor for an item at a given distance (px) from the pointer. */
    dockMagnification: function (distance, o) { o = o || {}; var max = o.max || 1.75, sigma = o.range || 70; return 1 + (max - 1) * Math.exp(-(distance * distance) / (2 * sigma * sigma)); },
    /** Adds a smooth hover/press transition to any element via CSS. */
    hoverTransition: function (el, o) { o = o || {}; el.style.transition = 'transform var(--ui-dur) var(--ui-ease), box-shadow var(--ui-dur) var(--ui-ease)'; var up = function () { el.style.transform = 'translateY(' + (o.lift == null ? -2 : o.lift) + 'px)'; }, down = function () { el.style.transform = ''; }; el.addEventListener('pointerenter', up); el.addEventListener('pointerleave', down); return function () { el.removeEventListener('pointerenter', up); el.removeEventListener('pointerleave', down); }; },
    /** Animates a number from a to b, calling fn(value). Respects reduced motion. */
    countTo: function (from, to, ms, fn) {
      if (U.reducedMotion() || ms <= 0) { fn(to); return function () {}; }
      var t0 = null, id, stop = false;
      var step = function (t) { if (stop) return; if (t0 == null) t0 = t; var p = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - p, 3); fn(from + (to - from) * e); if (p < 1) id = requestAnimationFrame(step); };
      id = requestAnimationFrame(step); return function () { stop = true; cancelAnimationFrame(id); };
    }
  };
});

/* ---- MODULE: src/services/accessibility/accessibility.js ---- */
MiniUI.module('src/services/accessibility/accessibility.js', function (M) {
  var live = {};
  function region(p) {
    if (!live[p] || !document.body.contains(live[p])) {
      var d = document.createElement('div'); d.className = 'ui-visually-hidden'; d.setAttribute('aria-live', p); d.setAttribute('aria-atomic', 'true'); d.setAttribute('role', p === 'assertive' ? 'alert' : 'status');
      document.body.appendChild(d); live[p] = d;
    }
    return live[p];
  }
  M.a11y = {
    /** Announces a message to screen readers through a live region. */
    announce: function (msg, politeness) { var r = region(politeness || 'polite'); r.textContent = ''; setTimeout(function () { r.textContent = msg; }, 30); },
    /**
     * Roving tabindex + arrow-key navigation for composite widgets.
     * roving(container, { selector, orientation: 'horizontal'|'vertical'|'both', loop, onMove }) -> dispose
     */
    roving: function (root, o) {
      o = Object.assign({ orientation: 'horizontal', loop: true }, o);
      var items = function () { return Array.prototype.filter.call(root.querySelectorAll(o.selector), function (e) { return !e.disabled && e.getAttribute('aria-disabled') !== 'true' && e.offsetParent !== null; }); };
      var setActive = function (el) { items().forEach(function (i) { i.tabIndex = i === el ? 0 : -1; }); };
      var onKey = function (e) {
        var list = items(), i = list.indexOf(document.activeElement); if (i < 0) i = list.indexOf(e.target.closest(o.selector));
        if (i < 0) return;
        var h = o.orientation !== 'vertical', v = o.orientation !== 'horizontal', n = null;
        if ((e.key === 'ArrowRight' && h) || (e.key === 'ArrowDown' && v)) n = i + 1;
        else if ((e.key === 'ArrowLeft' && h) || (e.key === 'ArrowUp' && v)) n = i - 1;
        else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = list.length - 1;
        if (n === null) return;
        e.preventDefault();
        if (o.loop) n = (n + list.length) % list.length; else n = Math.max(0, Math.min(list.length - 1, n));
        setActive(list[n]); list[n].focus(); if (o.onMove) o.onMove(list[n], e);
      };
      root.addEventListener('keydown', onKey);
      var init = items(); if (init.length && !init.some(function (x) { return x.tabIndex === 0; })) setActive(init.filter(function (x) { return x.getAttribute('aria-selected') === 'true' || x.getAttribute('aria-checked') === 'true' || x.getAttribute('aria-pressed') === 'true'; })[0] || init[0]);
      return function () { root.removeEventListener('keydown', onKey); };
    },
    setActive: function (items, el) { items.forEach(function (i) { i.tabIndex = i === el ? 0 : -1; }); },
    prefersHighContrast: function () { return M.util.mq('(prefers-contrast: more)').matches; },
    /** Labels an element accessibly, reusing visible text when possible. */
    label: function (el, text) { el.setAttribute('aria-label', text); return el; }
  };
});

/* ---- MODULE: src/utilities/drag-drop/drag.js ---- */
MiniUI.module('src/utilities/drag-drop/drag.js', function (M) {
  /** Pointer tracking with capture; falls back to mouse events. */
  M.drag = {
    track: function (el, o) {
      var st = null;
      var down = function (e) {
        if (e.button != null && e.button !== 0) return;
        if (o.filter && !o.filter(e)) return;
        st = { x0: e.clientX, y0: e.clientY, id: e.pointerId, moved: false, target: e.target };
        if (el.setPointerCapture && e.pointerId != null) { try { el.setPointerCapture(e.pointerId); } catch (x) {} }
        if (o.onStart && o.onStart(e, st) === false) { st = null; return; }
        if (!M.util.supports.pointer) { document.addEventListener('mousemove', move); document.addEventListener('mouseup', up); }
        if (o.preventDefault !== false) e.preventDefault();
      };
      var move = function (e) { if (!st) return; var dx = e.clientX - st.x0, dy = e.clientY - st.y0; if (!st.moved && Math.abs(dx) + Math.abs(dy) < (o.threshold || 0)) return; st.moved = true; o.onMove && o.onMove(dx, dy, e, st); };
      var up = function (e) { if (!st) return; var s = st; st = null; if (el.releasePointerCapture && s.id != null) { try { el.releasePointerCapture(s.id); } catch (x) {} } document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); o.onEnd && o.onEnd(e, s); };
      if (M.util.supports.pointer) { el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move); el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); }
      else el.addEventListener('mousedown', down);
      if (!o.keepTouch) el.style.touchAction = 'none';
      return function () { el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up); el.removeEventListener('mousedown', down); document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); };
    }
  };
  /** HTML5 drag & drop helpers with a typed JSON payload. */
  M.dnd = {
    MIME: 'application/x-miniui',
    draggable: function (el, getData, o) {
      o = o || {}; el.draggable = true;
      var s = function (e) { e.dataTransfer.setData(M.dnd.MIME, JSON.stringify(getData())); e.dataTransfer.effectAllowed = o.effect || 'move'; el.classList.add('ui-dragging'); o.onStart && o.onStart(e); };
      var en = function (e) { el.classList.remove('ui-dragging'); o.onEnd && o.onEnd(e); };
      el.addEventListener('dragstart', s); el.addEventListener('dragend', en);
      return function () { el.draggable = false; el.removeEventListener('dragstart', s); el.removeEventListener('dragend', en); };
    },
    dropTarget: function (el, o) {
      var over = function (e) { if (o.accept && !Array.prototype.some.call(e.dataTransfer.types || [], function (t) { return t === M.dnd.MIME || t === 'Files'; })) return; e.preventDefault(); e.dataTransfer.dropEffect = o.effect || 'move'; el.classList.add('ui-drop-over'); o.onOver && o.onOver(e); };
      var leave = function (e) { if (e.relatedTarget && el.contains(e.relatedTarget)) return; el.classList.remove('ui-drop-over'); o.onLeave && o.onLeave(e); };
      var drop = function (e) { e.preventDefault(); el.classList.remove('ui-drop-over'); var raw = e.dataTransfer.getData(M.dnd.MIME), data = null; try { data = raw ? JSON.parse(raw) : null; } catch (x) {} o.onDrop && o.onDrop(data, e); };
      el.addEventListener('dragover', over); el.addEventListener('dragleave', leave); el.addEventListener('drop', drop);
      return function () { el.removeEventListener('dragover', over); el.removeEventListener('dragleave', leave); el.removeEventListener('drop', drop); };
    }
  };
});

/* ---- MODULE: src/utilities/virtualization.js ---- */
MiniUI.module('src/utilities/virtualization.js', function (M) {
  /**
   * Fixed-row-height virtual scroller: only the visible window (+ overscan) exists in the DOM.
   * new VirtualScroller(scrollEl, { count, rowHeight, render(i) -> Node, overscan })
   */
  function VirtualScroller(el, o) {
    this.el = el; this.o = Object.assign({ overscan: 6, count: 0, rowHeight: 32 }, o);
    this.rows = new Map(); this.raf = 0;
    this.inner = document.createElement('div'); this.inner.style.cssText = 'position:relative;width:100%;';
    el.appendChild(this.inner);
    var self = this; this._onScroll = function () { if (!self.raf) self.raf = requestAnimationFrame(function () { self.raf = 0; self.refresh(); }); };
    el.addEventListener('scroll', this._onScroll, { passive: true });
    this._ro = M.util.observeResize(el, function () { self.refresh(); });
    this.setCount(this.o.count);
  }
  VirtualScroller.prototype.setCount = function (n) { this.o.count = n; this.inner.style.height = (n * this.o.rowHeight) + 'px'; this.invalidate(); };
  VirtualScroller.prototype.invalidate = function () { this.rows.forEach(function (r) { r.remove(); }); this.rows.clear(); this.refresh(); };
  VirtualScroller.prototype.refresh = function () {
    var o = this.o, top = this.el.scrollTop, vh = this.el.clientHeight || 400;
    var start = Math.max(0, Math.floor(top / o.rowHeight) - o.overscan), end = Math.min(o.count, Math.ceil((top + vh) / o.rowHeight) + o.overscan);
    var self = this;
    this.rows.forEach(function (node, i) { if (i < start || i >= end) { node.remove(); self.rows.delete(i); } });
    var frag = document.createDocumentFragment();
    for (var i = start; i < end; i++) {
      if (this.rows.has(i)) continue;
      var n = o.render(i); if (!n) continue;
      n.style.position = 'absolute'; n.style.left = '0'; n.style.right = '0'; n.style.top = (i * o.rowHeight) + 'px'; n.style.height = o.rowHeight + 'px'; n.setAttribute('data-index', i);
      this.rows.set(i, n); frag.appendChild(n);
    }
    this.inner.appendChild(frag);
  };
  VirtualScroller.prototype.scrollToIndex = function (i) { this.el.scrollTop = Math.max(0, i * this.o.rowHeight - this.el.clientHeight / 2); };
  VirtualScroller.prototype.renderedCount = function () { return this.rows.size; };
  VirtualScroller.prototype.destroy = function () { this.el.removeEventListener('scroll', this._onScroll); this._ro(); this.rows.clear(); this.inner.remove(); };
  M.VirtualScroller = VirtualScroller;
});

/* ---- MODULE: src/services/platform/contract.js ---- */
MiniUI.module('src/services/platform/contract.js', function (M) {
  var PROTOCOL = 1;
  function PlatformError(code, message, details) { var e = new Error(message || code); e.name = 'PlatformError'; e.code = code; e.details = details; return e; }
  PlatformError.prototype = Error.prototype;

  /**
   * THE CONTRACT. Every privileged operation the UI may ask for is declared here — nothing else exists.
   * The Rust backend must register exactly these methods, re-validate params against the same schema,
   * and enforce `perm` itself. The frontend validation is a convenience, never a security boundary.
   * Param type strings: string number boolean any, "string[]", "path" (absolute, no ".."), "url" (http/https), suffix "?" = optional.
   */
  var CONTRACT = {
    'runtime.info': { params: {}, desc: 'Runtime name, version, protocol and adapter identity.' },
    'runtime.capabilities': { params: {}, desc: 'List of methods the backend has enabled.' },
    'windows.minimize': { params: {}, desc: 'Minimise the host window.' },
    'windows.maximize': { params: {}, desc: 'Maximise the host window.' },
    'windows.restore': { params: {}, desc: 'Restore the host window.' },
    'windows.close': { params: {}, desc: 'Request closing of the host window.' },
    'windows.setTitle': { params: { title: 'string' }, desc: 'Set the host window title.' },
    'windows.setFullscreen': { params: { value: 'boolean' }, desc: 'Toggle host window fullscreen.' },
    'windows.getState': { params: {}, desc: 'Returns { fullscreen, maximized, minimized, title }.' },
    'dialogs.message': { params: { title: 'string', message: 'string', kind: 'string?', buttons: 'string[]?' }, desc: 'Native message box. Resolves with the pressed button index.' },
    'dialogs.confirm': { params: { title: 'string', message: 'string' }, desc: 'Native confirmation. Resolves boolean.' },
    'dialogs.openFile': { params: { title: 'string?', multiple: 'boolean?', accept: 'string[]?' }, desc: 'File chooser. Resolves a list of { name, size, type, handle } — never a raw path unless granted.' },
    'dialogs.openDirectory': { params: { title: 'string?' }, desc: 'Directory chooser.' },
    'dialogs.saveFile': { params: { title: 'string?', suggestedName: 'string?' }, desc: 'Save-as chooser.' },
    'notifications.show': { params: { title: 'string', body: 'string?', icon: 'string?' }, perm: 'notifications', desc: 'System notification.' },
    'clipboard.readText': { params: {}, perm: 'clipboard', desc: 'Read plain text from the clipboard.' },
    'clipboard.writeText': { params: { text: 'string' }, perm: 'clipboard', desc: 'Write plain text to the clipboard.' },
    'filesystem.list': { params: { path: 'path' }, perm: 'filesystem', desc: 'List a directory inside an authorised root.' },
    'filesystem.stat': { params: { path: 'path' }, perm: 'filesystem', desc: 'Metadata of an entry.' },
    'filesystem.readText': { params: { path: 'path' }, perm: 'filesystem', desc: 'Read a UTF-8 file (size limited by backend).' },
    'filesystem.writeText': { params: { path: 'path', text: 'string' }, perm: 'filesystem', desc: 'Write a UTF-8 file.' },
    'filesystem.mkdir': { params: { path: 'path' }, perm: 'filesystem', desc: 'Create a directory.' },
    'filesystem.remove': { params: { path: 'path' }, perm: 'filesystem', desc: 'Remove an entry (backend may move to trash).' },
    'permissions.query': { params: { name: 'string' }, desc: 'Returns granted | denied | prompt.' },
    'permissions.request': { params: { name: 'string' }, desc: 'Ask the user/backend policy for a permission.' },
    'storage.get': { params: { key: 'string' }, desc: 'Read a preference (per application namespace).' },
    'storage.set': { params: { key: 'string', value: 'any' }, desc: 'Write a preference.' },
    'storage.remove': { params: { key: 'string' }, desc: 'Remove a preference.' },
    'storage.keys': { params: {}, desc: 'List preference keys.' },
    'system.info': { params: {}, desc: 'Basic, non-sensitive environment info.' },
    'system.getTheme': { params: {}, desc: 'Preferred scheme of the OS: light | dark.' },
    'system.getLocale': { params: {}, desc: 'Preferred locale tag.' },
    'system.openExternal': { params: { url: 'url' }, desc: 'Open an http(s) URL in the default handler.' }
  };
  var PERMISSIONS = ['filesystem', 'clipboard', 'notifications'];

  function validate(schema, params) {
    params = params == null ? {} : params;
    if (typeof params !== 'object' || Array.isArray(params)) throw PlatformError('E_INVALID_ARGS', 'params must be an object');
    var out = {};
    Object.keys(params).forEach(function (k) { if (!(k in schema)) throw PlatformError('E_INVALID_ARGS', 'unknown parameter "' + k + '"'); });
    Object.keys(schema).forEach(function (k) {
      var spec = schema[k], opt = spec.charAt(spec.length - 1) === '?', type = opt ? spec.slice(0, -1) : spec, v = params[k];
      if (v == null) { if (!opt) throw PlatformError('E_INVALID_ARGS', 'parameter "' + k + '" is required'); return; }
      var ok = true;
      switch (type) {
        case 'string': ok = typeof v === 'string' && v.length <= 65536; break;
        case 'number': ok = typeof v === 'number' && isFinite(v); break;
        case 'boolean': ok = typeof v === 'boolean'; break;
        case 'string[]': ok = Array.isArray(v) && v.length <= 64 && v.every(function (s) { return typeof s === 'string'; }); break;
        case 'path': ok = typeof v === 'string' && v.charAt(0) === '/' && v.split('/').indexOf('..') < 0 && v.length < 4096 && v.indexOf('\0') < 0; break;
        case 'url': ok = typeof v === 'string' && /^https?:\/\//i.test(v) && v.length < 4096; break;
        case 'any': try { ok = JSON.stringify(v).length < 1048576; } catch (e) { ok = false; } break;
        default: ok = false;
      }
      if (!ok) throw PlatformError('E_INVALID_ARGS', 'parameter "' + k + '" must be ' + spec);
      out[k] = v;
    });
    return out;
  }

  function PlatformAdapter(name) { this.name = name || 'abstract'; this.handlers = {}; this.permissionState = {}; }
  PlatformAdapter.prototype.supports = function (m) { return !!this.handlers[m]; };
  Object.defineProperty(PlatformAdapter.prototype, 'methods', { get: function () { return Object.keys(this.handlers); } });
  PlatformAdapter.prototype.permission = function (n) { return this.permissionState[n] || 'prompt'; };
  PlatformAdapter.prototype.call = function (method, params) {
    var self = this, fn = this.handlers[method];
    if (!fn) return Promise.reject(PlatformError('E_UNSUPPORTED', 'method not supported by ' + this.name + ': ' + method));
    var perm = CONTRACT[method] && CONTRACT[method].perm;
    if (perm && this.permission(perm) !== 'granted') return Promise.reject(PlatformError('E_PERMISSION_DENIED', 'permission "' + perm + '" is ' + this.permission(perm)));
    try { return Promise.resolve(fn.call(self, params)); } catch (e) { return Promise.reject(e); }
  };

  /** Facade used by components and services. Everything funnels through call(): one choke point to validate, log and audit. */
  var Platform = M.Platform = {
    PROTOCOL: PROTOCOL, contract: CONTRACT, permissions: PERMISSIONS, adapter: null, log: [],
    use: function (adapter) { Platform.adapter = adapter; M.events.emit('platform:change', { adapter: adapter.name }); return adapter; },
    supports: function (m) { return !!(Platform.adapter && Platform.adapter.supports(m)); },
    call: function (method, params) {
      var spec = CONTRACT[method];
      if (!spec) return Promise.reject(PlatformError('E_UNSUPPORTED', 'unknown method ' + method));
      if (!Platform.adapter) return Promise.reject(PlatformError('E_UNSUPPORTED', 'no platform adapter installed'));
      var p; try { p = validate(spec.params, params); } catch (e) { return Promise.reject(e); }
      Platform.log.push({ t: Date.now(), method: method }); if (Platform.log.length > 200) Platform.log.shift();
      return Platform.adapter.call(method, p).catch(function (e) {
        if (e && e.name === 'PlatformError') throw e;
        throw PlatformError('E_INTERNAL', String(e && e.message || e));
      });
    }
  };
  Object.keys(CONTRACT).forEach(function (m) {
    var parts = m.split('.'); Platform[parts[0]] = Platform[parts[0]] || {};
    Platform[parts[0]][parts[1]] = function (p) { return Platform.call(m, p); };
  });
  M.PlatformAdapter = PlatformAdapter; M.PlatformError = PlatformError; M.validateParams = validate;
});

/* ---- MODULE: src/adapters/browser/virtual-fs.js ---- */
MiniUI.module('src/adapters/browser/virtual-fs.js', function (M) {
  /** Deterministic placeholder artwork (SVG data URI) used by demos so no external images are required. */
  M.util.gradientImage = function (seed, w, h, label) {
    w = w || 400; h = h || 300; var s = 0; String(seed).split('').forEach(function (c) { s = (s * 31 + c.charCodeAt(0)) % 360; });
    var a = 'hsl(' + s + ',75%,62%)', b = 'hsl(' + ((s + 55) % 360) + ',80%,50%)', c = 'hsl(' + ((s + 200) % 360) + ',70%,70%)';
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + a + '"/><stop offset="1" stop-color="' + b + '"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="' + (w * .72) + '" cy="' + (h * .3) + '" r="' + (h * .16) + '" fill="' + c + '" opacity=".75"/><path d="M0 ' + h + ' L0 ' + (h * .7) + ' Q' + (w * .3) + ' ' + (h * .45) + ' ' + (w * .55) + ' ' + (h * .72) + ' T' + w + ' ' + (h * .62) + ' L' + w + ' ' + h + 'Z" fill="rgba(0,0,0,.22)"/>' + (label ? '<text x="16" y="' + (h - 16) + '" font-family="sans-serif" font-size="' + Math.round(h / 12) + '" fill="#fff" opacity=".9">' + M.util.escape(label) + '</text>' : '') + '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };

  var ROOT = '/home/user', now = Date.now(), day = 86400000;
  function f(name, size, mime, ago, extra) { return Object.assign({ name: name, type: 'file', size: size, mime: mime, modified: now - ago * day }, extra || {}); }
  function d(name, ago, children) { return { name: name, type: 'dir', size: 0, modified: now - ago * day, children: children }; }
  var md = '# Relatório trimestral\n\nResumo dos resultados do **terceiro trimestre**.\n\n## Destaques\n- Receita cresceu `12,4%`\n- Novos clientes: *1.284*\n- Churn reduzido para 2,1%\n\n> Próximo passo: revisar metas de Q4.\n\n```js\nconst growth = (a, b) => (b - a) / a;\n```\n';
  var tree = d('user', 0, [
    d('Documents', 1, [
      f('Relatório.md', 1820, 'text/markdown', 1, { content: md }),
      f('Notas.txt', 412, 'text/plain', 3, { content: 'Lista de compras:\n- café\n- pão\n- leite\n\nLembrar: reunião às 15h.' }),
      f('Orçamento.csv', 2210, 'text/csv', 8, { content: 'mês,receita,despesa\njan,12000,8200\nfev,13400,8700\nmar,15100,9100' }),
      d('Projeto', 2, [
        f('index.html', 934, 'text/html', 2, { content: '<!DOCTYPE html>\n<html>\n  <body>\n    <ui-button variant="primary">Olá</ui-button>\n  </body>\n</html>' }),
        f('main.js', 1480, 'text/javascript', 2, { content: "import { Button } from './src/index.js';\n\nconst btn = new Button();\nbtn.textContent = 'Salvar';\nbtn.addEventListener('ui-press', () => console.log('ok'));\ndocument.body.append(btn);" }),
        f('style.css', 772, 'text/css', 5, { content: ':root {\n  --ui-accent: #0a7aff;\n}\nbody { font-family: var(--ui-font); }' }),
        f('config.json', 260, 'application/json', 9, { content: '{\n  "name": "demo",\n  "version": "1.0.0",\n  "features": ["windows", "dock"],\n  "debug": false\n}' })
      ])
    ]),
    d('Pictures', 4, ['Pôr do sol', 'Floresta', 'Oceano', 'Montanhas', 'Aurora', 'Deserto'].map(function (n, i) { return f(n + '.svg', 90000 + i * 13000, 'image/svg+xml', 4 + i, { thumb: M.util.gradientImage(n, 480, 320, n) }); })),
    d('Music', 6, [f('Aurora.wav', 1320000, 'audio/wav', 6, { track: 0 }), f('Maré Alta.wav', 1710000, 'audio/wav', 7, { track: 1 }), f('Neblina.wav', 1540000, 'audio/wav', 9, { track: 2 })]),
    d('Movies', 12, [f('Flor.mp4', 1250000, 'video/mp4', 12, { video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' })]),
    d('Downloads', 0, [f('instalador.zip', 48200000, 'application/zip', 0), f('fatura-0932.pdf', 220340, 'application/pdf', 2), f('wallpaper.svg', 120000, 'image/svg+xml', 5, { thumb: M.util.gradientImage('wallpaper', 480, 320) })]),
    d('Desktop', 0, [f('Anotações.txt', 120, 'text/plain', 0, { content: 'Ideias para o app:\n1. Dock\n2. Janelas\n3. Temas' })])
  ]);

  function norm(p) { var parts = p.split('/').filter(Boolean), out = []; parts.forEach(function (s) { if (s === '..') out.pop(); else if (s !== '.') out.push(s); }); return '/' + out.join('/'); }
  function find(path) {
    path = norm(path);
    if (path !== ROOT && path.indexOf(ROOT + '/') !== 0) throw M.PlatformError('E_PERMISSION_DENIED', 'path outside authorised root: ' + path);
    var rest = path.slice(ROOT.length).split('/').filter(Boolean), n = tree;
    for (var i = 0; i < rest.length; i++) { var c = (n.children || []).filter(function (x) { return x.name === rest[i]; })[0]; if (!c) throw M.PlatformError('E_NOT_FOUND', 'not found: ' + path); n = c; }
    return n;
  }
  function entry(n, parent) { return { name: n.name, path: (parent === '/' ? '' : parent) + '/' + n.name, type: n.type, size: n.type === 'dir' ? (n.children || []).length : n.size, modified: n.modified, mime: n.mime || (n.type === 'dir' ? 'inode/directory' : 'application/octet-stream'), thumb: n.thumb, track: n.track, video: n.video }; }

  /** In-memory virtual filesystem, confined to ROOT. Mirrors the semantics the Rust backend must provide. */
  M.vfs = {
    root: ROOT,
    list: function (p) { var n = find(p); if (n.type !== 'dir') throw M.PlatformError('E_INVALID_ARGS', 'not a directory'); return n.children.map(function (c) { return entry(c, norm(p)); }); },
    stat: function (p) { var n = find(p), parts = norm(p).split('/'); parts.pop(); return entry(n, parts.join('/') || '/'); },
    readText: function (p) { var n = find(p); if (n.type !== 'file') throw M.PlatformError('E_INVALID_ARGS', 'not a file'); if (n.content == null) throw M.PlatformError('E_UNSUPPORTED', 'not a text file'); return n.content; },
    writeText: function (p, text) {
      p = norm(p); var parts = p.split('/'), name = parts.pop(), dir = find(parts.join('/') || '/');
      var ex = dir.children.filter(function (c) { return c.name === name; })[0];
      if (ex) { ex.content = text; ex.size = text.length; ex.modified = Date.now(); } else dir.children.push({ name: name, type: 'file', size: text.length, mime: 'text/plain', modified: Date.now(), content: text });
      return true;
    },
    mkdir: function (p) { p = norm(p); var parts = p.split('/'), name = parts.pop(), dir = find(parts.join('/') || '/'); if (!dir.children.some(function (c) { return c.name === name; })) dir.children.push({ name: name, type: 'dir', size: 0, modified: Date.now(), children: [] }); return true; },
    remove: function (p) { p = norm(p); var parts = p.split('/'), name = parts.pop(), dir = find(parts.join('/') || '/'); dir.children = dir.children.filter(function (c) { return c.name !== name; }); return true; }
  };
});

/* ---- MODULE: src/adapters/browser/browser-adapter.js ---- */
MiniUI.module('src/adapters/browser/browser-adapter.js', function (M) {
  var E = M.PlatformError;
  var memory = {};
  function store() { try { var t = '__t'; localStorage.setItem(t, '1'); localStorage.removeItem(t); return localStorage; } catch (e) { return { getItem: function (k) { return k in memory ? memory[k] : null; }, setItem: function (k, v) { memory[k] = String(v); }, removeItem: function (k) { delete memory[k]; }, key: function (i) { return Object.keys(memory)[i]; }, get length() { return Object.keys(memory).length; } }; } }
  var NS = 'miniui.app:';

  /** Functional adapter for development and demos in a regular browser. Window/file operations are simulated where a browser cannot perform them. */
  function BrowserAdapter() {
    M.PlatformAdapter.call(this, 'browser');
    this.permissionState = { filesystem: 'granted', clipboard: 'granted', notifications: 'granted' };
    this._clip = ''; this._title = document.title; this._st = store();
    var self = this, st = this._st;
    var fsReq = function (name) { return function (p) { return M.vfs[name](p.path, p.text); }; };
    this.handlers = {
      'runtime.info': function () { return { name: 'MiniUI Browser Adapter', version: M.version, protocol: M.Platform.PROTOCOL, adapter: 'browser', capabilities: self.methods }; },
      'runtime.capabilities': function () { return self.methods; },
      'windows.minimize': function () { M.events.emit('host-window', { action: 'minimize' }); return { ok: true, simulated: true }; },
      'windows.maximize': function () { M.events.emit('host-window', { action: 'maximize' }); return { ok: true, simulated: true }; },
      'windows.restore': function () { M.events.emit('host-window', { action: 'restore' }); return { ok: true, simulated: true }; },
      'windows.close': function () { M.events.emit('host-window', { action: 'close' }); return { ok: true, simulated: true }; },
      'windows.setTitle': function (p) { document.title = p.title; self._title = p.title; return true; },
      'windows.setFullscreen': function (p) {
        var el = document.documentElement, on = !!(document.fullscreenElement || document.webkitFullscreenElement);
        try {
          if (p.value && !on) { var r = (el.requestFullscreen || el.webkitRequestFullscreen); if (r) return Promise.resolve(r.call(el)).then(function () { return true; }, function () { return false; }); }
          if (!p.value && on) { var x = (document.exitFullscreen || document.webkitExitFullscreen); if (x) return Promise.resolve(x.call(document)).then(function () { return true; }, function () { return false; }); }
        } catch (e) { return false; }
        return false;
      },
      'windows.getState': function () { return { fullscreen: !!(document.fullscreenElement || document.webkitFullscreenElement), maximized: false, minimized: false, title: self._title }; },
      'dialogs.message': function (p) { return M.Dialogs.message({ heading: p.title, message: p.message, kind: p.kind, buttons: p.buttons }); },
      'dialogs.confirm': function (p) { return M.Dialogs.confirm(p.message, { heading: p.title }); },
      'dialogs.openFile': function (p) {
        return new Promise(function (res) {
          var i = document.createElement('input'); i.type = 'file'; i.multiple = !!p.multiple; if (p.accept) i.accept = p.accept.join(',');
          var done = false; i.onchange = function () { done = true; res(Array.prototype.map.call(i.files, function (f) { return { name: f.name, size: f.size, type: f.type, handle: f }; })); };
          i.addEventListener('cancel', function () { if (!done) res([]); }); i.click();
        });
      },
      'dialogs.openDirectory': function () {
        return new Promise(function (res) {
          var i = document.createElement('input'); i.type = 'file'; i.setAttribute('webkitdirectory', ''); i.onchange = function () { var f = i.files[0]; res(f ? { name: (f.webkitRelativePath || f.name).split('/')[0], count: i.files.length } : null); }; i.addEventListener('cancel', function () { res(null); }); i.click();
        });
      },
      'dialogs.saveFile': function (p) { return M.Dialogs.prompt('Nome do arquivo', { heading: p.title || 'Salvar como', value: p.suggestedName || 'sem-titulo.txt' }).then(function (n) { return n ? { name: n } : null; }); },
      'notifications.show': function (p) { M.Notifications.push({ title: p.title, body: p.body, icon: p.icon }); return true; },
      'clipboard.readText': function () { return navigator.clipboard && navigator.clipboard.readText ? navigator.clipboard.readText().catch(function () { return self._clip; }) : self._clip; },
      'clipboard.writeText': function (p) {
        self._clip = p.text;
        var legacy = function () { var t = document.createElement('textarea'); t.value = p.text; t.style.cssText = 'position:fixed;opacity:0;top:0'; document.body.appendChild(t); t.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} t.remove(); return ok; };
        if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(p.text).then(function () { return true; }, function () { return legacy(); });
        return legacy();
      },
      'filesystem.list': fsReq('list'), 'filesystem.stat': fsReq('stat'), 'filesystem.readText': fsReq('readText'), 'filesystem.writeText': fsReq('writeText'), 'filesystem.mkdir': fsReq('mkdir'), 'filesystem.remove': fsReq('remove'),
      'permissions.query': function (p) { return { name: p.name, state: self.permission(p.name) }; },
      'permissions.request': function (p) {
        if (M.Platform.permissions.indexOf(p.name) < 0) throw new E('E_INVALID_ARGS', 'unknown permission');
        if (self.permission(p.name) === 'granted') return { name: p.name, state: 'granted' };
        return M.Dialogs.confirm('O aplicativo solicita acesso a "' + p.name + '". Permitir?', { heading: 'Permissão solicitada', okLabel: 'Permitir', cancelLabel: 'Negar' }).then(function (ok) { self.permissionState[p.name] = ok ? 'granted' : 'denied'; M.events.emit('permission:change', { name: p.name, state: self.permissionState[p.name] }); return { name: p.name, state: self.permissionState[p.name] }; });
      },
      'storage.get': function (p) { var v = st.getItem(NS + p.key); try { return v == null ? null : JSON.parse(v); } catch (e) { return v; } },
      'storage.set': function (p) { st.setItem(NS + p.key, JSON.stringify(p.value)); return true; },
      'storage.remove': function (p) { st.removeItem(NS + p.key); return true; },
      'storage.keys': function () { var out = []; for (var i = 0; i < st.length; i++) { var k = st.key(i); if (k && k.indexOf(NS) === 0) out.push(k.slice(NS.length)); } return out; },
      'system.info': function () { return { platform: navigator.platform || 'unknown', language: navigator.language, online: navigator.onLine, cores: navigator.hardwareConcurrency || 1, memory: navigator.deviceMemory || null, screen: { width: screen.width, height: screen.height, dpr: window.devicePixelRatio || 1 }, userAgent: navigator.userAgent }; },
      'system.getTheme': function () { return M.util.mq('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; },
      'system.getLocale': function () { return navigator.language || 'en'; },
      'system.openExternal': function (p) { window.open(p.url, '_blank', 'noopener,noreferrer'); return true; }
    };
  }
  BrowserAdapter.prototype = Object.create(M.PlatformAdapter.prototype); BrowserAdapter.prototype.constructor = BrowserAdapter;
  BrowserAdapter.prototype.setPermission = function (n, s) { this.permissionState[n] = s; M.events.emit('permission:change', { name: n, state: s }); };

  M.adapters = M.adapters || {};
  M.adapters.BrowserAdapter = BrowserAdapter;
  M.Platform.use(new BrowserAdapter());
});

/* ---- MODULE: src/adapters/mock/mock-adapter.js ---- */
MiniUI.module('src/adapters/mock/mock-adapter.js', function (M) {
  /**
   * Controlled adapter for tests: records every call, returns canned values, never touches the environment.
   * new MockAdapter({ responses: { 'storage.get': (p) => 42 }, permissions: { filesystem: 'denied' } })
   */
  function MockAdapter(o) {
    o = o || {}; M.PlatformAdapter.call(this, 'mock');
    var self = this; this.calls = []; this.responses = o.responses || {}; this._mem = {};
    this.permissionState = Object.assign({ filesystem: 'granted', clipboard: 'granted', notifications: 'granted' }, o.permissions);
    var defaults = {
      'runtime.info': function () { return { name: 'Mock', version: '0', protocol: 1, adapter: 'mock', capabilities: self.methods }; },
      'runtime.capabilities': function () { return self.methods; },
      'windows.getState': function () { return { fullscreen: false, maximized: false, minimized: false, title: 'mock' }; },
      'dialogs.message': function () { return 0; }, 'dialogs.confirm': function () { return true; }, 'dialogs.openFile': function () { return []; }, 'dialogs.openDirectory': function () { return null; }, 'dialogs.saveFile': function () { return null; },
      'clipboard.readText': function () { return self._clip || ''; }, 'clipboard.writeText': function (p) { self._clip = p.text; return true; },
      'filesystem.list': function () { return []; }, 'filesystem.stat': function () { return null; }, 'filesystem.readText': function () { return ''; },
      'permissions.query': function (p) { return { name: p.name, state: self.permission(p.name) }; }, 'permissions.request': function (p) { return { name: p.name, state: self.permission(p.name) }; },
      'storage.get': function (p) { return p.key in self._mem ? self._mem[p.key] : null; }, 'storage.set': function (p) { self._mem[p.key] = p.value; return true; }, 'storage.remove': function (p) { delete self._mem[p.key]; return true; }, 'storage.keys': function () { return Object.keys(self._mem); },
      'system.info': function () { return { platform: 'mock', language: 'en', online: true, cores: 1, memory: null, screen: { width: 800, height: 600, dpr: 1 } }; },
      'system.getTheme': function () { return 'light'; }, 'system.getLocale': function () { return 'en'; }
    };
    Object.keys(M.Platform.contract).forEach(function (m) {
      self.handlers[m] = function (p) {
        self.calls.push({ method: m, params: p });
        var r = self.responses[m]; if (r !== undefined) return typeof r === 'function' ? r(p) : r;
        return defaults[m] ? defaults[m](p) : true;
      };
    });
  }
  MockAdapter.prototype = Object.create(M.PlatformAdapter.prototype); MockAdapter.prototype.constructor = MockAdapter;
  MockAdapter.prototype.reset = function () { this.calls.length = 0; this._mem = {}; };
  MockAdapter.prototype.callsTo = function (m) { return this.calls.filter(function (c) { return c.method === m; }); };
  M.adapters.MockAdapter = MockAdapter;
});

/* ---- MODULE: src/adapters/runtime/rust-adapter.js ---- */
MiniUI.module('src/adapters/runtime/rust-adapter.js', function (M) {
  var E = M.PlatformError, PROTO = M.Platform.PROTOCOL;
  /**
   * RustAdapter — client side of the versioned JS <-> Rust protocol.
   *
   *   request : { v: 1, id: "r12", method: "filesystem.list", params: { path: "/home/user" } }
   *   response: { v: 1, id: "r12", ok: true,  result: ... }
   *             { v: 1, id: "r12", ok: false, error: { code: "E_PERMISSION_DENIED", message: "...", details? } }
   *   event   : { v: 1, event: "window.focus", data: {...} }                 (backend -> UI, no id)
   *
   * The transport is INJECTED by the runtime: { send(string), onMessage(fn) -> off }. This SDK makes no assumption about
   * how WPE WebKit exposes native messaging. Methods are only callable if listed in the backend's handshake capabilities.
   */
  function RustAdapter(o) {
    M.PlatformAdapter.call(this, 'rust');
    o = o || {}; if (!o.transport) throw new E('E_INVALID_ARGS', 'RustAdapter needs a transport');
    this.transport = o.transport; this.timeout = o.timeout || 8000; this._seq = 0; this._pending = new Map(); this._caps = []; this.connected = false; this.backendInfo = null;
    var self = this; this._off = this.transport.onMessage(function (raw) { self._onMessage(raw); });
    Object.defineProperty(this, 'handlers', { get: function () { var h = {}; self._caps.forEach(function (m) { h[m] = true; }); return h; }, set: function () {} });
  }
  RustAdapter.prototype = Object.create(M.PlatformAdapter.prototype); RustAdapter.prototype.constructor = RustAdapter;
  RustAdapter.prototype.connect = function () {
    var self = this;
    return this._request('runtime.handshake', { protocol: PROTO, client: 'miniui/' + M.version }).then(function (r) {
      if (!r || r.protocol !== PROTO) throw new E('E_PROTOCOL', 'protocol mismatch (backend ' + (r && r.protocol) + ', client ' + PROTO + ')');
      self._caps = (r.capabilities || []).filter(function (m) { return !!M.Platform.contract[m]; });
      self.permissionState = Object.assign({}, r.permissions); self.connected = true; self.backendInfo = r; return r;
    });
  };
  RustAdapter.prototype.permission = function (n) { return this.permissionState[n] || 'prompt'; };
  RustAdapter.prototype.call = function (method, params) {
    if (!this.connected) return Promise.reject(new E('E_UNSUPPORTED', 'RustAdapter not connected'));
    if (this._caps.indexOf(method) < 0) return Promise.reject(new E('E_UNSUPPORTED', 'backend did not enable ' + method));
    return this._request(method, params);
  };
  RustAdapter.prototype._request = function (method, params) {
    var self = this, id = 'r' + (++this._seq);
    return new Promise(function (resolve, reject) {
      var t = setTimeout(function () { self._pending.delete(id); reject(new E('E_TIMEOUT', 'no response for ' + method + ' within ' + self.timeout + 'ms')); }, self.timeout);
      self._pending.set(id, { resolve: resolve, reject: reject, t: t });
      try { self.transport.send(JSON.stringify({ v: PROTO, id: id, method: method, params: params || {} })); }
      catch (e) { clearTimeout(t); self._pending.delete(id); reject(new E('E_INTERNAL', 'transport failure: ' + e.message)); }
    });
  };
  RustAdapter.prototype._onMessage = function (raw) {
    var m; try { m = typeof raw === 'string' ? JSON.parse(raw) : raw; } catch (e) { return; }
    if (!m || m.v !== PROTO) return;
    if (m.event) { M.events.emit('platform:event', { event: m.event, data: m.data }); return; }
    var p = this._pending.get(m.id); if (!p) return;
    clearTimeout(p.t); this._pending.delete(m.id);
    if (m.ok) p.resolve(m.result); else p.reject(new E((m.error && m.error.code) || 'E_INTERNAL', (m.error && m.error.message) || 'backend error', m.error && m.error.details));
  };
  RustAdapter.prototype.dispose = function () { this._off && this._off(); this._pending.forEach(function (p) { clearTimeout(p.t); p.reject(new E('E_INTERNAL', 'adapter disposed')); }); this._pending.clear(); };

  /**
   * LoopbackBackend — a JavaScript stand-in for the Rust side, used by tests and docs.
   * It demonstrates the rules the real backend MUST enforce: version check, registered methods only,
   * schema validation, permission checks, structured errors. Never trust the UI.
   */
  function LoopbackBackend(o) {
    o = o || {}; var self = this; this.permissions = Object.assign({ filesystem: 'granted', clipboard: 'denied', notifications: 'granted' }, o.permissions);
    this.enabled = o.enabled || Object.keys(M.Platform.contract); this.silent = !!o.silent; this.delay = o.delay || 0; this.log = [];
    this.handlers = Object.assign({ 'runtime.info': function () { return { name: 'loopback', protocol: PROTO }; }, 'storage.get': function () { return null; }, 'storage.set': function () { return true; }, 'filesystem.list': function (p) { return M.vfs.list(p.path); } }, o.handlers);
    var listeners = [];
    this.transport = {
      send: function (raw) {
        if (self.silent) return;
        setTimeout(function () { var res = self._handle(raw); listeners.forEach(function (fn) { fn(JSON.stringify(res)); }); }, self.delay);
      },
      onMessage: function (fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (x) { return x !== fn; }); }; }
    };
    this.emitEvent = function (event, data) { listeners.forEach(function (fn) { fn(JSON.stringify({ v: PROTO, event: event, data: data })); }); };
  }
  LoopbackBackend.prototype._err = function (id, code, message) { return { v: PROTO, id: id, ok: false, error: { code: code, message: message } }; };
  LoopbackBackend.prototype._handle = function (raw) {
    var req; try { req = JSON.parse(raw); } catch (e) { return this._err(null, 'E_INVALID_ARGS', 'malformed json'); }
    this.log.push(req.method);
    if (req.v !== PROTO) return this._err(req.id, 'E_PROTOCOL', 'unsupported protocol version');
    if (req.method === 'runtime.handshake') return { v: PROTO, id: req.id, ok: true, result: { protocol: PROTO, capabilities: this.enabled, permissions: this.permissions } };
    var spec = M.Platform.contract[req.method];
    if (!spec || this.enabled.indexOf(req.method) < 0) return this._err(req.id, 'E_UNSUPPORTED', 'method not registered');
    var params; try { params = M.validateParams(spec.params, req.params); } catch (e) { return this._err(req.id, e.code || 'E_INVALID_ARGS', e.message); }
    if (spec.perm && this.permissions[spec.perm] !== 'granted') return this._err(req.id, 'E_PERMISSION_DENIED', 'permission ' + spec.perm + ' not granted');
    var h = this.handlers[req.method]; if (!h) return this._err(req.id, 'E_UNSUPPORTED', 'no handler');
    try { return { v: PROTO, id: req.id, ok: true, result: h(params) }; } catch (e) { return this._err(req.id, e.code || 'E_INTERNAL', e.message); }
  };
  M.adapters.RustAdapter = RustAdapter; M.adapters.LoopbackBackend = LoopbackBackend;
});

/* ---- MODULE: src/services/storage/storage.js ---- */
MiniUI.module('src/services/storage/storage.js', function (M) {
  var cache = {};
  /** Preference storage over Platform.storage. Same API in browser and Rust runtime. */
  M.Storage = {
    get: function (key, fallback) { return M.Platform.storage.get({ key: key }).then(function (v) { cache[key] = v; return v == null ? fallback : v; }, function () { return fallback; }); },
    set: function (key, value) { cache[key] = value; return M.Platform.storage.set({ key: key, value: value }).catch(function () { return false; }); },
    remove: function (key) { delete cache[key]; return M.Platform.storage.remove({ key: key }).catch(function () { return false; }); },
    keys: function () { return M.Platform.storage.keys().catch(function () { return []; }); },
    peek: function (key, fallback) { return key in cache && cache[key] != null ? cache[key] : fallback; },
    /** Namespaced view: Storage.ns('settings').get('x') */
    ns: function (p) { return { get: function (k, d) { return M.Storage.get(p + '.' + k, d); }, set: function (k, v) { return M.Storage.set(p + '.' + k, v); }, remove: function (k) { return M.Storage.remove(p + '.' + k); } }; }
  };
});

/* ---- MODULE: src/services/localization/i18n.js ---- */
MiniUI.module('src/services/localization/i18n.js', function (M) {
  var dict = {
    'en': { 'common.ok': 'OK', 'common.cancel': 'Cancel', 'common.save': 'Save', 'common.close': 'Close', 'common.search': 'Search', 'common.delete': 'Delete', 'common.open': 'Open', 'common.clear': 'Clear',
      'validation.required': 'This field is required', 'validation.email': 'Enter a valid email address', 'validation.url': 'Enter a valid URL', 'validation.number': 'Enter a valid number', 'validation.minLength': 'At least {n} characters', 'validation.maxLength': 'At most {n} characters', 'validation.min': 'Must be at least {n}', 'validation.max': 'Must be at most {n}', 'validation.pattern': 'Invalid format',
      'settings.title': 'Settings', 'settings.general': 'General', 'settings.appearance': 'Appearance', 'settings.language': 'Language', 'settings.notifications': 'Notifications', 'settings.shortcuts': 'Shortcuts', 'settings.privacy': 'Privacy', 'settings.about': 'About', 'settings.updates': 'Updates', 'settings.account': 'Account',
      'app.files': 'Files', 'app.dashboard': 'Dashboard', 'app.media': 'Media Player', 'app.terminal': 'Terminal', 'app.notes': 'Notes', 'app.calendar': 'Calendar', 'app.calculator': 'Calculator' },
    'pt-BR': { 'common.ok': 'OK', 'common.cancel': 'Cancelar', 'common.save': 'Salvar', 'common.close': 'Fechar', 'common.search': 'Buscar', 'common.delete': 'Excluir', 'common.open': 'Abrir', 'common.clear': 'Limpar',
      'validation.required': 'Este campo é obrigatório', 'validation.email': 'Informe um e-mail válido', 'validation.url': 'Informe uma URL válida', 'validation.number': 'Informe um número válido', 'validation.minLength': 'Mínimo de {n} caracteres', 'validation.maxLength': 'Máximo de {n} caracteres', 'validation.min': 'Deve ser no mínimo {n}', 'validation.max': 'Deve ser no máximo {n}', 'validation.pattern': 'Formato inválido',
      'settings.title': 'Configurações', 'settings.general': 'Geral', 'settings.appearance': 'Aparência', 'settings.language': 'Idioma', 'settings.notifications': 'Notificações', 'settings.shortcuts': 'Atalhos', 'settings.privacy': 'Privacidade', 'settings.about': 'Sobre', 'settings.updates': 'Atualizações', 'settings.account': 'Conta',
      'app.files': 'Arquivos', 'app.dashboard': 'Painel', 'app.media': 'Mídia', 'app.terminal': 'Terminal', 'app.notes': 'Notas', 'app.calendar': 'Calendário', 'app.calculator': 'Calculadora' }
  };
  var locale = 'pt-BR';
  M.i18n = {
    get locale() { return locale; },
    locales: function () { return Object.keys(dict); },
    register: function (loc, entries) { dict[loc] = Object.assign(dict[loc] || {}, entries); },
    t: function (key, vars) {
      var s = (dict[locale] && dict[locale][key]) || (dict.en && dict.en[key]) || key;
      if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
      return s;
    },
    setLocale: function (l) { if (!dict[l]) return false; locale = l; document.documentElement.lang = l; if (M.Storage) M.Storage.set('locale', l); M.events.emit('locale:change', { locale: l }); return true; },
    /** Translates [data-i18n] descendants. */
    apply: function (root) { (root || document).querySelectorAll('[data-i18n]').forEach(function (e) { e.textContent = M.i18n.t(e.getAttribute('data-i18n')); }); },
    init: function () { return M.Storage.get('locale').then(function (l) { if (l && dict[l]) M.i18n.setLocale(l); }); }
  };
  M.t = function (k, v) { return M.i18n.t(k, v); };
});

/* ---- MODULE: src/utilities/formatting.js ---- */
MiniUI.module('src/utilities/formatting.js', function (M) {
  var loc = function () { return M.i18n ? M.i18n.locale : 'en'; };
  var safe = function (fn, fb) { try { return fn(); } catch (e) { return fb; } };
  var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
  var F = M.format = {
    number: function (n, o) { return safe(function () { return new Intl.NumberFormat(loc(), o).format(n); }, String(n)); },
    compact: function (n) { return safe(function () { return new Intl.NumberFormat(loc(), { notation: 'compact', maximumFractionDigits: 1 }).format(n); }, String(n)); },
    percent: function (n, d) { return F.number(n, { style: 'percent', maximumFractionDigits: d == null ? 1 : d }); },
    currency: function (n, c) { return F.number(n, { style: 'currency', currency: c || 'BRL' }); },
    bytes: function (b) { if (b == null) return '—'; var u = ['B', 'KB', 'MB', 'GB', 'TB'], i = 0; while (b >= 1024 && i < u.length - 1) { b /= 1024; i++; } return F.number(b, { maximumFractionDigits: i ? 1 : 0 }) + ' ' + u[i]; },
    duration: function (s) { s = Math.max(0, Math.round(s)); var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); return (h ? h + ':' + pad(m) : m) + ':' + pad(s % 60); },
    date: function (d, o) { d = new Date(d); return safe(function () { return new Intl.DateTimeFormat(loc(), o || { dateStyle: 'medium' }).format(d); }, d.toDateString()); },
    time: function (d, o) { d = new Date(d); return safe(function () { return new Intl.DateTimeFormat(loc(), o || { hour: '2-digit', minute: '2-digit' }).format(d); }, pad(d.getHours()) + ':' + pad(d.getMinutes())); },
    relative: function (d) {
      var diff = (new Date(d).getTime() - Date.now()) / 1000, a = Math.abs(diff);
      var units = [['year', 31536000], ['month', 2592000], ['day', 86400], ['hour', 3600], ['minute', 60], ['second', 1]];
      for (var i = 0; i < units.length; i++) if (a >= units[i][1] || i === units.length - 1) { var v = Math.round(diff / units[i][1]); return safe(function () { return new Intl.RelativeTimeFormat(loc(), { numeric: 'auto' }).format(v, units[i][0]); }, v + ' ' + units[i][0]); }
    },
    iso: function (d) { d = new Date(d); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); },
    pad: pad
  };
  /** Unit conversion: convert(5, 'km', 'mi') */
  var U = { length: { m: 1, km: 1000, cm: .01, mm: .001, mi: 1609.344, ft: .3048, in: .0254 }, mass: { kg: 1, g: .001, lb: .45359237, oz: .028349523 }, data: { B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776 }, time: { s: 1, min: 60, h: 3600, d: 86400 } };
  M.convert = function (v, from, to) {
    var t = { C: 1, F: 1, K: 1 };
    if (t[from] && t[to]) { var c = from === 'C' ? v : from === 'F' ? (v - 32) * 5 / 9 : v - 273.15; return to === 'C' ? c : to === 'F' ? c * 9 / 5 + 32 : c + 273.15; }
    for (var k in U) if (U[k][from] && U[k][to]) return v * U[k][from] / U[k][to];
    throw new Error('Cannot convert ' + from + ' to ' + to);
  };
  M.units = U;
});

/* ---- MODULE: src/services/validation/validation.js ---- */
MiniUI.module('src/services/validation/validation.js', function (M) {
  var t = function (k, v) { return M.i18n ? M.i18n.t(k, v) : k; };
  var empty = function (v) { return v == null || v === '' || (Array.isArray(v) && !v.length); };
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, URLRE = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
  var builtin = {
    required: function (v) { return empty(v) || (typeof v === 'string' && !v.trim()) ? t('validation.required') : true; },
    email: function (v) { return empty(v) || EMAIL.test(v) ? true : t('validation.email'); },
    url: function (v) { return empty(v) || URLRE.test(v) ? true : t('validation.url'); },
    number: function (v) { return empty(v) || isFinite(Number(v)) ? true : t('validation.number'); }
  };
  function ruleFn(r) {
    if (typeof r === 'function') return r;
    if (typeof r === 'string') return builtin[r] || function () { return true; };
    if (r && typeof r === 'object') {
      if ('minLength' in r) return function (v) { return empty(v) || String(v).length >= r.minLength ? true : (r.message || t('validation.minLength', { n: r.minLength })); };
      if ('maxLength' in r) return function (v) { return empty(v) || String(v).length <= r.maxLength ? true : (r.message || t('validation.maxLength', { n: r.maxLength })); };
      if ('min' in r) return function (v) { return empty(v) || Number(v) >= r.min ? true : (r.message || t('validation.min', { n: r.min })); };
      if ('max' in r) return function (v) { return empty(v) || Number(v) <= r.max ? true : (r.message || t('validation.max', { n: r.max })); };
      if ('pattern' in r) return function (v) { return empty(v) || new RegExp(r.pattern).test(v) ? true : (r.message || t('validation.pattern')); };
      if ('validate' in r) return r.validate;
    }
    return function () { return true; };
  }
  /** validate(value, ['required', 'email', { minLength: 3 }, fn]) -> { valid, errors[], message } (sync rules only) */
  M.validation = {
    rules: builtin,
    addRule: function (name, fn) { builtin[name] = fn; },
    validate: function (value, rules) {
      var errors = [];
      (rules || []).forEach(function (r) { var res = ruleFn(r)(value); if (res !== true && res != null && res !== undefined) errors.push(res === false ? t('validation.pattern') : String(res)); });
      return { valid: !errors.length, errors: errors, message: errors[0] || '' };
    },
    /** Async variant supporting rule functions that return Promises. */
    validateAsync: function (value, rules) {
      return Promise.all((rules || []).map(function (r) { return Promise.resolve(ruleFn(r)(value)); })).then(function (rs) {
        var errors = rs.filter(function (x) { return x !== true && x != null; }).map(function (x) { return x === false ? t('validation.pattern') : String(x); });
        return { valid: !errors.length, errors: errors, message: errors[0] || '' };
      });
    }
  };
});

/* ---- MODULE: src/services/clipboard/clipboard.js ---- */
MiniUI.module('src/services/clipboard/clipboard.js', function (M) {
  M.clipboard = {
    write: function (text) { return M.Platform.clipboard.writeText({ text: String(text) }).then(function () { return true; }, function () { return false; }); },
    read: function () { return M.Platform.clipboard.readText().catch(function () { return ''; }); }
  };
});

/* ---- MODULE: src/services/notifications/notifications.js ---- */
MiniUI.module('src/services/notifications/notifications.js', function (M) {
  var h = M.h, U = M.util;
  var store = M.createStore({ items: [], dnd: false });
  var host = null;
  function container() { if (!host || !document.body.contains(host)) { host = h('div', { class: 'ui-toaster', role: 'region', 'aria-label': 'Notificações' }); M.portal.root().append(host); host.style.zIndex = M.overlay.LAYERS.toast; } return host; }
  var ICON = { info: 'info', success: 'check-circle', warning: 'alert-triangle', danger: 'alert-circle', error: 'alert-circle' };

  /** Transient toast. show(message, { type, heading, duration, action: { label, onClick }, icon }) -> { close } */
  function toast(message, o) {
    o = o || {}; var type = o.type || 'info', dur = o.duration == null ? M.config.get('toastDuration') : o.duration;
    var el = h('div', { class: 'ui-toast', 'data-type': type, role: type === 'danger' || type === 'error' ? 'alert' : 'status' },
      h('span', { class: 'ui-toast-icon', '.innerHTML': M.icon(o.icon || ICON[type] || 'info', { size: '18px' }) }),
      h('div', { class: 'ui-toast-body' }, o.heading ? h('strong', null, o.heading) : null, h('span', null, message)),
      o.action ? h('button', { class: 'ui-toast-action', onclick: function () { o.action.onClick && o.action.onClick(); close(); } }, o.action.label) : null,
      h('button', { class: 'ui-toast-x', 'aria-label': 'Fechar', '.innerHTML': M.icon('x', { size: '14px' }), onclick: function () { close(); } }));
    var timer = null, closed = false;
    function arm() { if (dur > 0) { clearTimeout(timer); timer = setTimeout(close, dur); } }
    function close() { if (closed) return; closed = true; clearTimeout(timer); M.anim.notificationTransition(el, 'out').then(function () { el.remove(); }); }
    el.addEventListener('pointerenter', function () { clearTimeout(timer); }); el.addEventListener('pointerleave', arm);
    var c = container(); c.append(el); while (c.children.length > 5) c.firstChild.remove();
    M.anim.notificationTransition(el, 'in'); arm(); M.a11y.announce((o.heading ? o.heading + '. ' : '') + message);
    return { el: el, close: close };
  }
  M.toast = toast;
  ['info', 'success', 'warning', 'danger'].forEach(function (t) { toast[t] = function (m, o) { return toast(m, Object.assign({ type: t }, o)); }; });

  /** Notification service: persistent entries for the NotificationCenter + optional toast banner. */
  M.Notifications = {
    store: store,
    push: function (n) {
      var item = Object.assign({ id: U.uid('n'), title: '', body: '', icon: 'bell', app: 'Sistema', time: Date.now(), read: false, type: 'info' }, n);
      store.set('items', [item].concat(store.get('items')).slice(0, 100));
      if (!store.get('dnd') && n.toast !== false) toast(item.body || item.title, { heading: item.body ? item.title : '', type: item.type, icon: item.icon });
      M.events.emit('notification', item); return item;
    },
    remove: function (id) { store.set('items', store.get('items').filter(function (i) { return i.id !== id; })); },
    clear: function () { store.set('items', []); },
    markAllRead: function () { store.set('items', store.get('items').map(function (i) { return Object.assign({}, i, { read: true }); })); },
    unread: function () { return store.get('items').filter(function (i) { return !i.read; }).length; },
    setDoNotDisturb: function (v) { store.set('dnd', !!v); }
  };
});

/* ---- MODULE: src/services/dialogs/dialogs.js ---- */
MiniUI.module('src/services/dialogs/dialogs.js', function (M) {
  var h = M.h;
  /**
   * Promise based dialogs built on <ui-dialog>. Native equivalents live in Platform.dialogs.*
   *  message({ heading, message, kind, buttons[] }) -> index   confirm(msg) -> bool   prompt(msg,{value}) -> string|null   alert(msg) -> void
   */
  function build(o) {
    return new Promise(function (resolve) {
      var dlg = document.createElement('ui-dialog');
      dlg.setAttribute('heading', o.heading || ''); dlg.setAttribute('size', o.size || 'sm'); if (o.kind) dlg.setAttribute('kind', o.kind);
      var body = h('div', { class: 'ui-dlg-msg' }, o.message ? h('p', null, o.message) : null);
      var input = null;
      if (o.input) { input = document.createElement('ui-text-field'); input.setAttribute('placeholder', o.placeholder || ''); input.value = o.value || ''; input.setAttribute('aria-label', o.message || 'valor'); input.setAttribute('autofocus', ''); body.append(input); }
      dlg.append(body);
      var footer = h('div', { slot: 'footer' });
      var done = false, finish = function (v) { if (done) return; done = true; dlg.open = false; resolve(v); };
      (o.buttons || []).forEach(function (b, i) {
        var btn = document.createElement('ui-button'); btn.setAttribute('variant', b.variant || 'secondary'); btn.textContent = b.label;
        btn.addEventListener('click', function () { finish(o.input ? (b.primary ? input.value : null) : b.value !== undefined ? b.value : i); });
        if (b.primary) btn.setAttribute('data-autofocus', ''); footer.append(btn);
      });
      dlg.append(footer);
      dlg.addEventListener('ui-close', function () { finish(o.input ? null : o.dismissValue); });
      if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') finish(input.value); });
      document.body.append(dlg); dlg.open = true;
      dlg.addEventListener('ui-closed', function () { dlg.remove(); });
    });
  }
  var T = function (k) { return M.i18n.t(k); };
  M.Dialogs = {
    message: function (o) { var labels = o.buttons && o.buttons.length ? o.buttons : [T('common.ok')]; return build({ heading: o.heading, message: o.message, kind: o.kind, dismissValue: -1, buttons: labels.map(function (l, i) { return { label: l, primary: i === 0, variant: i === 0 ? 'primary' : 'secondary', value: i }; }) }); },
    alert: function (message, o) { o = o || {}; return build({ heading: o.heading || '', message: message, kind: o.kind, buttons: [{ label: T('common.ok'), primary: true, variant: 'primary', value: true }] }).then(function () { return undefined; }); },
    confirm: function (message, o) { o = o || {}; return build({ heading: o.heading || 'Confirmação', message: message, kind: o.kind, dismissValue: false, buttons: [{ label: o.cancelLabel || T('common.cancel'), value: false }, { label: o.okLabel || T('common.ok'), primary: true, variant: o.destructive ? 'destructive' : 'primary', value: true }] }); },
    prompt: function (message, o) { o = o || {}; return build({ heading: o.heading || '', message: message, input: true, value: o.value, placeholder: o.placeholder, buttons: [{ label: T('common.cancel') }, { label: T('common.ok'), primary: true, variant: 'primary' }] }); }
  };
});

/* ---- MODULE: src/components/primitives/primitives.js ---- */
MiniUI.module('src/components/primitives/primitives.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement;
  var G = 'Fundamentals';
  var SIZES = { sm: 'var(--ui-icon-sm)', md: 'var(--ui-icon-md)', lg: 'var(--ui-icon-lg)', xl: 'var(--ui-icon-xl)' };

  /** Normalises options from `items` (strings | objects) or <ui-option> children. */
  M.optionsOf = function (el) {
    var src = el.items;
    if (!Array.isArray(src) || !src.length) src = Array.prototype.map.call(el.querySelectorAll(':scope > ui-option'), function (o) { return { value: o.getAttribute('value') != null ? o.getAttribute('value') : o.textContent.trim(), label: o.getAttribute('label') || o.textContent.trim(), icon: o.getAttribute('icon') || '', disabled: o.hasAttribute('disabled'), group: o.getAttribute('group') || '' }; });
    return src.map(function (o) { return typeof o === 'object' && o !== null ? Object.assign({ label: String(o.value), icon: '', disabled: false }, o, { value: o.value != null ? String(o.value) : String(o.label) }) : { value: String(o), label: String(o), icon: '', disabled: false }; });
  };
  class Option extends UIElement { static props = { value: { doc: 'Option value' }, label: {}, icon: {}, disabled: { type: 'boolean' }, group: {} }; }
  M.define('ui-option', Option, { group: G, desc: 'Declarative data element for options (select, tabs, segmented, radio group). Not rendered.' });

  class Icon extends UIElement {
    static props = { name: { doc: 'Icon name from MiniUI.icons' }, size: { doc: 'sm|md|lg|xl or CSS size / px number' }, color: { doc: 'Any CSS color' }, strokeWidth: { type: 'number', default: 1.8, doc: 'Stroke width (0.5–3)' }, label: { doc: 'Accessible label. Omit for decorative icons.' }, align: { doc: 'vertical-align value' }, fill: { doc: 'Fill colour' } };
    update() {
      var s = this.size; this.style.fontSize = s ? (SIZES[s] || (/^\d+$/.test(s) ? s + 'px' : s)) : '';
      this.style.color = this.color || ''; this.style.verticalAlign = this.align || '';
      var key = [this.name, this.strokeWidth, this.fill].join('|');
      if (key !== this._k) { this._k = key; this.innerHTML = M.icon(this.name, { stroke: this.strokeWidth, fill: this.fill || 'none' }); }
      if (this.label) { this.setAttribute('role', 'img'); this.setAttribute('aria-label', this.label); } else { this.removeAttribute('role'); this.removeAttribute('aria-label'); this.setAttribute('aria-hidden', 'true'); }
    }
  }
  M.define('ui-icon', Icon, { group: G, desc: 'Vector icon from the built-in SVG set; sized by font-size, coloured by currentColor.' });

  class Spinner extends UIElement { static props = { size: { default: 'md', reflect: true }, label: { default: 'Carregando' } }; update() { this.setAttribute('role', 'progressbar'); this.setAttribute('aria-label', this.label); } }
  M.define('ui-spinner', Spinner, { group: G, desc: 'Indeterminate activity spinner.' });

  class Progress extends UIElement {
    static props = { value: { type: 'number', default: 0, doc: 'Current value' }, max: { type: 'number', default: 100 }, indeterminate: { type: 'boolean' }, type: { default: 'linear', reflect: true, doc: 'linear|circular' }, variant: { default: '', reflect: true, doc: 'success|warning|danger' }, label: {}, showValue: { type: 'boolean' }, size: { type: 'number', default: 0 } };
    build() {
      this._head = h('div', { class: 'ui-own ui-prog-head' }, this._l = h('span'), this._v = h('span'));
      this._track = h('div', { class: 'ui-own ui-prog-track' }, this._bar = h('div', { class: 'ui-prog-bar' }));
      var NS = 'http://www.w3.org/2000/svg';
      this._circ = h('div', { class: 'ui-own' });
      this._circ.innerHTML = '<svg class="ui-prog-circ" viewBox="0 0 44 44"><circle class="bg" cx="22" cy="22" r="18"/><circle class="fg" cx="22" cy="22" r="18" stroke-dasharray="113.1" stroke-dashoffset="113.1"/></svg>';
      this._ct = h('div', { class: 'ui-own ui-prog-circ-txt' });
      this.append(this._head, this._track, this._circ, this._ct);
    }
    update() {
      var pct = this.indeterminate ? 0 : U.clamp(this.value / (this.max || 100) * 100, 0, 100), circ = this.type === 'circular';
      this._head.hidden = circ || (!this.label && !this.showValue); this._track.hidden = circ; this._circ.hidden = !circ; this._ct.hidden = !circ || !this.showValue;
      this._l.textContent = this.label || ''; this._v.textContent = this.showValue ? Math.round(pct) + '%' : ''; this._ct.textContent = Math.round(pct) + '%';
      this._bar.style.width = pct + '%';
      var fg = this._circ.querySelector('.fg'); if (fg) fg.style.strokeDashoffset = (113.1 * (1 - pct / 100)).toFixed(2);
      if (this.size) this.style.setProperty('--ui-prog-size', this.size + 'px');
      this.setAttribute('role', 'progressbar'); this.setAttribute('aria-valuemin', 0); this.setAttribute('aria-valuemax', this.max);
      if (this.indeterminate) this.removeAttribute('aria-valuenow'); else this.setAttribute('aria-valuenow', this.value);
      if (this.label) this.setAttribute('aria-label', this.label);
    }
  }
  M.define('ui-progress', Progress, { group: G, desc: 'Linear or circular progress indicator (determinate / indeterminate).', events: [] });
  M.alias('ui-linear-progress', Progress, { type: 'linear' }, { desc: 'Alias: linear progress.' });
  M.alias('ui-circular-progress', Progress, { type: 'circular', showValue: true }, { desc: 'Alias: circular progress.' });
  M.alias('ui-loading-indicator', Progress, { type: 'circular', indeterminate: true }, { desc: 'Alias: indeterminate circular loader.' });

  class Badge extends UIElement {
    static props = { variant: { default: 'default', reflect: true, doc: 'default|primary|success|warning|danger|info' }, dot: { type: 'boolean' }, count: { type: 'number', default: null, doc: 'Numeric content' }, max: { type: 'number', default: 99 } };
    update() { if (this.count != null) { this.textContent = this.count > this.max ? this.max + '+' : String(this.count); this.hidden = false; } }
  }
  M.define('ui-badge', Badge, { group: G, desc: 'Small status/count label.' });
  M.define('ui-badge-group', class extends UIElement {}, { group: G, desc: 'Inline wrapper for multiple badges/chips.' });

  class Chip extends UIElement {
    static props = { removable: { type: 'boolean' }, selectable: { type: 'boolean' }, selected: { type: 'boolean' }, icon: {}, variant: { default: '', reflect: true }, value: {} };
    build() {
      this._i = h('ui-icon', { class: 'ui-own' }); this._t = h('span', { class: 'ui-own' }, this.slotted.map(function (n) { return n; }));
      this._x = h('button', { class: 'ui-own ui-chip-x', type: 'button', 'aria-label': 'Remover', '.innerHTML': M.icon('x', { size: '12px', stroke: 2.4 }) });
      this.append(this._i, this._t, this._x);
      this._x.addEventListener('click', (e) => { e.stopPropagation(); if (this.emit('remove', { value: this.value || this._t.textContent }, { cancelable: true })) this.remove(); });
      this.addEventListener('click', () => { if (this.selectable) { this.selected = !this.selected; this.emit('toggle', { selected: this.selected }); } });
    }
    update() { this._i.hidden = !this.icon; this._i.setAttribute('name', this.icon || ''); this._x.hidden = !this.removable; if (this.selectable) { this.setAttribute('role', 'button'); this.tabIndex = 0; this.setAttribute('aria-pressed', this.selected); } }
    bind() { this.listen(this, 'keydown', (e) => { if (this.selectable && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); this.click(); } else if (this.removable && (e.key === 'Backspace' || e.key === 'Delete')) this._x.click(); }); }
  }
  M.define('ui-chip', Chip, { group: G, desc: 'Compact element: tag, filter or selectable option, optionally removable.', events: ['ui-remove (cancelable)', 'ui-toggle'] });

  class Avatar extends UIElement {
    static props = { src: {}, name: {}, size: { default: 'md', reflect: true }, shape: { default: 'circle', reflect: true }, status: { doc: 'online|busy|away|offline' } };
    build() { this._s = h('span', { class: 'ui-own ui-av-status' }); }
    update() {
      var n = this.name || '', ini = n.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join('');
      var hue = 0; n.split('').forEach(function (c) { hue = (hue * 31 + c.charCodeAt(0)) % 360; });
      this.style.background = this.src ? '' : 'hsl(' + hue + ',55%,52%)';
      Array.prototype.forEach.call(this.querySelectorAll(':scope > .ui-av-c'), function (x) { x.remove(); });
      if (this.src) { var img = h('img', { class: 'ui-own ui-av-c', src: this.src, alt: n, loading: 'lazy' }); img.onerror = () => { img.remove(); this.prepend(h('span', { class: 'ui-own ui-av-c' }, ini || '?')); }; this.prepend(img); }
      else this.prepend(h('span', { class: 'ui-own ui-av-c' }, ini || '?'));
      if (this.status) { this._s.setAttribute('data-s', this.status); if (!this._s.parentNode) this.append(this._s); } else this._s.remove();
      this.setAttribute('role', 'img'); this.setAttribute('aria-label', n + (this.status ? ' (' + this.status + ')' : ''));
    }
  }
  M.define('ui-avatar', Avatar, { group: G, desc: 'User avatar: image with initials fallback and presence status.' });
  class AvatarGroup extends UIElement {
    static props = { max: { type: 'number', default: 4 } };
    static observeChildren = true;
    update() {
      var av = this.$$(':scope > ui-avatar:not(.ui-more)'); av.forEach(function (a, i) { a.hidden = i >= this.max; }, this);
      var more = this.querySelector(':scope > .ui-more'); if (more) more.remove();
      if (av.length > this.max) { var m = h('ui-avatar', { class: 'ui-own ui-more', name: '+' + (av.length - this.max) }); m.setAttribute('name', '+' + (av.length - this.max)); this.append(m); m.style.background = 'var(--ui-text-3)'; }
    }
  }
  M.define('ui-avatar-group', AvatarGroup, { group: G, desc: 'Overlapping avatars with +N overflow.' });
  M.alias('ui-avatar-stack', AvatarGroup, { max: 3 }, { desc: 'Alias of AvatarGroup.' });

  class Skeleton extends UIElement {
    static props = { variant: { default: 'text', reflect: true, doc: 'text|rect|circle' }, width: {}, height: {}, lines: { type: 'number', default: 1 } };
    update() {
      if (this.width) this.style.setProperty('--ui-sk-w', /^\d+$/.test(this.width) ? this.width + 'px' : this.width); if (this.height) this.style.setProperty('--ui-sk-h', /^\d+$/.test(this.height) ? this.height + 'px' : this.height);
      this.setAttribute('aria-hidden', 'true');
      if (this.lines > 1 && !this._multi) { this._multi = true; this.style.cssText += ';background:none;animation:none;height:auto;display:grid;gap:8px'; for (var i = 0; i < this.lines; i++) this.append(h('ui-skeleton', { class: 'ui-own', style: { width: i === this.lines - 1 ? '60%' : '100%' } })); }
    }
  }
  M.define('ui-skeleton', Skeleton, { group: G, desc: 'Shimmering placeholder while content loads.' });
  M.alias('ui-skeleton-loader', Skeleton, { lines: 3 }, { desc: 'Alias: 3-line skeleton.' });

  M.define('ui-status', class extends UIElement { static props = { state: { default: 'offline', reflect: true, doc: 'online|busy|away|offline|success|warning|danger|info' }, label: {}, pulse: { type: 'boolean' } }; update() { if (this.label && !this.textContent.trim()) this.textContent = this.label; } }, { group: G, desc: 'Coloured status dot with optional label.' });
  M.alias('ui-status-indicator', customElements.get('ui-status'), {}, { desc: 'Alias of ui-status.' });

  class Kbd extends UIElement { static props = { keys: { doc: 'Shortcut such as Mod+Shift+K — formatted for the platform' } }; update() { if (this.keys) this.textContent = M.keys.format(this.keys); } }
  M.define('ui-kbd', Kbd, { group: G, desc: 'Keyboard key cap.' });
  class Divider extends UIElement { static props = { orientation: { default: 'horizontal', reflect: true }, label: {} }; update() { this.setAttribute('role', 'separator'); this.setAttribute('aria-orientation', this.orientation); if (this.label && !this._l) { this._l = h('span', { class: 'ui-own' }, this.label); this.append(this._l); } if (this._l) this._l.textContent = this.label; } }
  M.define('ui-divider', Divider, { group: G, desc: 'Horizontal/vertical separator, optionally labelled.' });
  M.alias('ui-separator', Divider, {}, { desc: 'Alias of ui-divider.' });
  class Spacer extends UIElement { static props = { size: { doc: 'Fixed size (token or CSS); omit to flex-fill' } }; update() { if (this.size) { var s = U.space(this.size); this.style.flex = 'none'; this.style.width = s; this.style.height = s; } } }
  M.define('ui-spacer', Spacer, { group: G, desc: 'Flexible or fixed spacing element.' });
  class Text extends UIElement { static props = { variant: { default: '', reflect: true, doc: 'caption|small|lead|mono' }, tone: { default: '', reflect: true, doc: 'muted|subtle|danger|success|accent' }, weight: { default: '', reflect: true }, truncate: { type: 'boolean' }, lines: { type: 'number', default: 0, reflect: true }, inline: { type: 'boolean' } }; update() { if (this.lines) this.style.setProperty('--ui-lines', this.lines); } }
  M.define('ui-text', Text, { group: G, desc: 'Typographic text with tones, weights, truncation and line clamp.' });
  M.alias('ui-label', Text, { variant: 'caption', weight: 'medium' }, { desc: 'Label text.' });
  class Heading extends UIElement { static props = { level: { type: 'number', default: 2, reflect: true } }; update() { this.setAttribute('role', 'heading'); this.setAttribute('aria-level', this.level); } }
  M.define('ui-heading', Heading, { group: G, desc: 'Heading with semantic level (1–6).' });
  class AspectRatio extends UIElement { static props = { ratio: { default: '16/9', doc: 'e.g. 16/9, 1, 4/3' } }; update() { this.style.setProperty('--ui-ratio', this.ratio); } }
  M.define('ui-aspect-ratio', AspectRatio, { group: G, desc: 'Keeps its content at a fixed aspect ratio.' });
  M.define('ui-visually-hidden', class extends UIElement {}, { group: G, desc: 'Content only for assistive technologies.' });

  class Img extends UIElement {
    static props = { src: {}, alt: {}, fit: { default: 'cover', doc: 'cover|contain|fill' }, ratio: {}, lazy: { type: 'boolean', default: true }, fallback: { default: 'image' } };
    build() { this._ph = h('div', { class: 'ui-own ui-img-ph', '.innerHTML': M.icon(this.fallback || 'image', { size: '1em' }) }); this._img = h('img', { class: 'ui-own', decoding: 'async' }); this.append(this._ph, this._img);
      this._img.addEventListener('load', () => { this.setAttribute('data-loaded', ''); this.emit('load'); }); this._img.addEventListener('error', () => { this.removeAttribute('data-loaded'); this.emit('error', { src: this.src }); }); }
    bind() { var self = this; if (this.lazy) this._off = U.observeVisible(this, function (v) { if (v) { self._visible = true; self._load(); if (self._off) self._off(); } }); else { this._visible = true; } this.defer(function () { if (self._off) self._off(); }); }
    _load() { if (this._visible && this.src && this._img.getAttribute('src') !== this.src) { this.removeAttribute('data-loaded'); this._img.src = this.src; } }
    update() { this._img.alt = this.alt || ''; this.style.setProperty('--ui-fit', this.fit); if (this.ratio) { this.style.aspectRatio = this.ratio; } this._load(); }
  }
  M.define('ui-image', Img, { group: G, desc: 'Lazy loaded image with placeholder, fit and error handling.', events: ['ui-load', 'ui-error'] });
  M.alias('ui-image-placeholder', Img, { src: '' }, { desc: 'Image placeholder.' });

  class Link extends UIElement {
    static props = { href: {}, target: {}, external: { type: 'boolean' } };
    build() { this._a = h('a', { class: 'ui-own' }, this.slotted); this.append(this._a); this._a.addEventListener('click', (e) => { if (!this.emit('navigate', { href: this.href }, { cancelable: true })) e.preventDefault(); else if (this.external && M.Platform.supports('system.openExternal') && /^https?:/.test(this.href)) { e.preventDefault(); M.Platform.system.openExternal({ url: this.href }); } }); }
    update() { if (this.href) this._a.href = this.href; else this._a.removeAttribute('href'); if (this.target) this._a.target = this.target; if (this.external) this._a.rel = 'noopener noreferrer'; }
  }
  M.define('ui-link', Link, { group: G, desc: 'Hyperlink; external links open through Platform.system.openExternal when available.', events: ['ui-navigate (cancelable)'] });

  class Ripple extends UIElement {
    bind() { var p = this.parentElement; if (!p) return; if (getComputedStyle(p).position === 'static') p.style.position = 'relative'; this.listen(p, 'pointerdown', (e) => { if (U.reducedMotion()) return; var r = p.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2, d = h('span', { class: 'ui-ripple-dot', style: { width: s + 'px', height: s + 'px', left: (e.clientX - r.left - s / 2) + 'px', top: (e.clientY - r.top - s / 2) + 'px' } }); this.append(d); d.addEventListener('animationend', function () { d.remove(); }); }); }
  }
  M.define('ui-ripple', Ripple, { group: G, desc: 'Touch ripple for its parent element.' });
});

/* ---- MODULE: src/components/buttons/buttons.js ---- */
MiniUI.module('src/components/buttons/buttons.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Buttons';

  class Button extends UIElement {
    static props = {
      variant: { default: 'secondary', reflect: true, doc: 'primary|secondary|tertiary|destructive|ghost|outline|toolbar|link' }, size: { default: 'md', reflect: true, doc: 'sm|md|lg' },
      icon: { doc: 'Leading icon' }, iconEnd: { doc: 'Trailing icon' }, label: { doc: 'Text (alternative to slotted content)' }, loading: { type: 'boolean' }, disabled: { type: 'boolean' },
      toggle: { type: 'boolean', doc: 'Behaves as a toggle button' }, pressed: { type: 'boolean', doc: 'Toggle state' }, shortcut: { doc: 'Global shortcut, e.g. Mod+S' }, type: { default: 'button', reflect: false, doc: 'button|submit|reset' },
      block: { type: 'boolean' }, ripple: { type: 'boolean' }, autoLoading: { type: 'boolean', doc: 'Show loading until el.done() is called' }
    };
    build() {
      var content = this.slotted; this._hasContent = content.some(function (n) { return n.nodeType === 1 || n.textContent.trim(); });
      this._btn = h('button', { class: 'ui-own ui-btn', type: 'button' }, this._ico = h('span', { class: 'ui-btn-ico' }), this._txt = h('span', { class: 'ui-btn-txt' }, content), this._icoE = h('span', { class: 'ui-btn-ico-end' }), this._kbd = h('span', { class: 'ui-btn-kbd' }));
      this.append(this._btn);
      this._btn.addEventListener('click', (e) => this._click(e));
      this._btn.addEventListener('pointerdown', (e) => { if (this.ripple && !U.reducedMotion()) { var r = this._btn.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2, d = h('span', { class: 'ui-ripple-dot', style: { width: s + 'px', height: s + 'px', left: (e.clientX - r.left - s / 2) + 'px', top: (e.clientY - r.top - s / 2) + 'px' } }); this._btn.append(d); d.addEventListener('animationend', function () { d.remove(); }); } });
    }
    _click(e) {
      if (this.disabled || this.loading) { e.stopPropagation(); e.preventDefault(); return; }
      if (this.toggle) { this.pressed = !this.pressed; this.emit('toggle', { pressed: this.pressed }); }
      this.emit('press', { shortcut: this.shortcut });
      if (this.autoLoading) this.loading = true;
    }
    done() { this.loading = false; }
    focus(o) { this._btn.focus(o); }
    propChanged(n) { if (n === 'shortcut') this._bindShortcut(); }
    _bindShortcut() { if (this._off) this._off(); this._off = null; if (this.isConnected && this.shortcut) this._off = M.keys.register(this.shortcut, () => { if (!this.disabled && !this.loading) this._btn.click(); }, { description: this.textContent.trim() || this.label }); }
    bind() { this._bindShortcut(); }
    unbind() { if (this._off) { this._off(); this._off = null; } }
    update() {
      var b = this._btn; b.disabled = this.disabled || this.loading; b.type = this.type || 'button';
      this._ico.innerHTML = this.loading ? '<ui-spinner size="sm"></ui-spinner>' : this.icon ? M.icon(this.icon, { size: '1em' }) : '';
      this._icoE.innerHTML = this.iconEnd ? M.icon(this.iconEnd, { size: '1em' }) : '';
      if (!this._hasContent) this._txt.textContent = this.label || '';
      this._kbd.textContent = this.shortcut ? M.keys.format(this.shortcut) : '';
      if (this.toggle) b.setAttribute('aria-pressed', String(this.pressed)); else b.removeAttribute('aria-pressed');
      b.setAttribute('aria-busy', String(this.loading));
      var iconOnly = !this._hasContent && !this.label; var al = this.getAttribute('aria-label') || this.getAttribute('title');
      if (iconOnly || al) b.setAttribute('aria-label', al || this.icon || ''); 
      if (this.hasAttribute('title')) b.title = this.getAttribute('title');
    }
  }
  M.define('ui-button', Button, { group: G, desc: 'Primary action control with variants, sizes, icons, loading state, toggle behaviour and keyboard shortcut.', events: ['click', 'ui-press', 'ui-toggle'], methods: ['focus()', 'done()'] });
  M.alias('ui-primary-button', Button, { variant: 'primary' }); M.alias('ui-secondary-button', Button, { variant: 'secondary' }); M.alias('ui-tertiary-button', Button, { variant: 'tertiary' });
  M.alias('ui-destructive-button', Button, { variant: 'destructive' }); M.alias('ui-ghost-button', Button, { variant: 'ghost' }); M.alias('ui-outline-button', Button, { variant: 'outline' });
  M.alias('ui-toolbar-button', Button, { variant: 'toolbar' }); M.alias('ui-icon-button', Button, { variant: 'toolbar' }, { desc: 'Icon-only button; always set aria-label.' });
  M.alias('ui-toggle-button', Button, { toggle: true }); M.alias('ui-loading-button', Button, { autoLoading: true }, { desc: 'Shows a spinner after click until done() is called.' });
  M.alias('ui-command-button', Button, { variant: 'ghost' }, { desc: 'Button bound to a shortcut shown inline.' });
  class Fab extends UIElement { static props = { icon: { default: 'plus' }, label: {}, fixed: { type: 'boolean' } }; build() { this._b = h('ui-button', { class: 'ui-own', variant: 'primary', 'aria-label': this.label || this.icon }); this.append(this._b); } update() { this._b.setAttribute('icon', this.icon); this._b.setAttribute('aria-label', this.label || this.icon); } }
  M.define('ui-fab', Fab, { group: G, desc: 'Floating action button.' });
  M.define('ui-button-group', class extends UIElement { update() { this.setAttribute('role', 'group'); } }, { group: G, desc: 'Visually joins adjacent buttons.' });

  class Segmented extends UIElement {
    static props = { items: { type: 'any', doc: 'Array of strings or {value,label,icon,disabled}' }, value: { doc: 'Selected value' }, size: { default: 'md', reflect: true }, block: { type: 'boolean' }, label: { doc: 'Accessible label' } };
    static observeChildren = true;
    build() { this._root = h('div', { class: 'ui-own', role: 'radiogroup', style: { display: 'contents' } }); this.append(this._root); this._root.addEventListener('click', (e) => { var b = e.target.closest('.ui-seg'); if (b && !b.disabled) this._select(b.getAttribute('data-v')); }); }
    _select(v) { if (v === this.value) return; var o = this.value; this.value = v; this.emit('change', { value: v, previous: o }); }
    bind() { this._rv = M.a11y.roving(this._root, { selector: '.ui-seg', onMove: (el) => this._select(el.getAttribute('data-v')) }); }
    unbind() { this._rv && this._rv(); }
    update(ch) {
      var opts = M.optionsOf(this); if (!this.value && opts.length && !this._init) { this._init = true; this._p.value = opts[0].value; }
      this._root.innerHTML = '';
      opts.forEach((o) => { var on = o.value === this.value; this._root.append(h('button', { class: 'ui-seg', type: 'button', role: 'radio', 'aria-checked': String(on), 'data-v': o.value, tabindex: on ? 0 : -1, disabled: o.disabled }, o.icon ? h('ui-icon', { name: o.icon }) : null, o.label)); });
      this.setAttribute('aria-label', this.label || ''); if (this.label) this._root.setAttribute('aria-label', this.label);
      if (this.isConnected && this._root.querySelector('.ui-seg')) { var cur = this._root.querySelector('[aria-checked="true"]'); if (!cur) this._root.querySelector('.ui-seg').tabIndex = 0; }
    }
  }
  M.define('ui-segmented', Segmented, { group: G, desc: 'Segmented control for choosing one option; arrow-key navigation.', events: ['ui-change'] });

  /** Dropdown button & split button: both open a menu built by MiniUI.menu */
  class Dropdown extends UIElement {
    static props = { label: {}, icon: {}, items: { type: 'any', doc: 'Menu item definitions (see MiniUI.menu.open)' }, variant: { default: 'secondary', reflect: true }, size: { default: 'md', reflect: true }, split: { type: 'boolean' }, disabled: { type: 'boolean' }, placement: { default: 'bottom-start' } };
    static observeChildren = true;
    build() {
      this._main = h('ui-button', { class: 'ui-own' }); this._chev = h('ui-button', { class: 'ui-own', 'aria-haspopup': 'menu', 'aria-expanded': 'false' }); this.append(this._main, this._chev);
      this._main.addEventListener('click', () => { if (this.split) this.emit('action', {}); else this.toggle(); });
      this._chev.addEventListener('click', () => this.toggle());
      this._chev.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown') { e.preventDefault(); this.open(); } });
    }
    get menuItems() { if (Array.isArray(this.items) && this.items.length) return this.items; return M.menu.fromElement(this); }
    toggle() { if (this._h && !this._h.closed) this._h.close(); else this.open(); }
    open() {
      if (this.disabled) return; this._chev.setAttribute('aria-expanded', 'true');
      this._h = M.menu.open(this.menuItems, { anchor: this, placement: this.placement, onSelect: (it) => this.emit('select', { item: it, value: it.value != null ? it.value : it.id || it.label }), onClose: () => { this._chev.setAttribute('aria-expanded', 'false'); } });
    }
    update() {
      var split = this.split; ['variant', 'size'].forEach((a) => { this._main.setAttribute(a, this[a]); this._chev.setAttribute(a, this[a]); });
      this._main.setAttribute('label', this.label || ''); this._main.setAttribute('icon', this.icon || ''); this._main.setAttribute('icon-end', split ? '' : 'chevron-down'); this._main.toggleAttribute('disabled', this.disabled); this._chev.toggleAttribute('disabled', this.disabled);
      this._chev.hidden = !split; this._chev.setAttribute('icon', 'chevron-down'); this._chev.setAttribute('aria-label', 'Mais opções');
    }
  }
  M.define('ui-dropdown', Dropdown, { group: G, desc: 'Button that opens a menu. Items via `items` property or <ui-menu-item> children.', events: ['ui-select', 'ui-action'], methods: ['open()', 'toggle()'] });
  M.alias('ui-dropdown-button', Dropdown, {}); M.alias('ui-split-button', Dropdown, { split: true }, { desc: 'Primary action + menu chevron.' });
  M.alias('ui-action-menu', Dropdown, { icon: 'more-h', variant: 'toolbar' }, { desc: 'Icon button opening an action menu.' }); M.alias('ui-overflow-menu', Dropdown, { icon: 'more-h', variant: 'toolbar' }, { desc: 'Overflow (…) menu.' });
});

/* ---- MODULE: src/components/inputs/field-base.js ---- */
MiniUI.module('src/components/inputs/field-base.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement;
  /** Builds label / control / description / error scaffold shared by all form controls. */
  M.fieldShell = function (host, control, forId) {
    var label = h('label', { class: 'ui-fld-label' }), desc = h('div', { class: 'ui-fld-msg' }), err = h('div', { class: 'ui-fld-msg ui-fld-err', role: 'alert' });
    if (forId) label.htmlFor = forId;
    var wrap = h('div', { class: 'ui-own ui-fld' }, label, control, desc, err);
    return {
      wrap: wrap, label: label, desc: desc, err: err,
      sync: function () {
        var msg = host.error || host._msg || '';
        label.textContent = host.label || ''; label.hidden = !host.label;
        if (host.required && host.label) { label.append(h('span', { style: { color: 'var(--ui-danger)', marginLeft: '2px' } }, '*')); }
        desc.textContent = host.description || ''; desc.hidden = !host.description || !!msg;
        err.textContent = msg; err.hidden = !msg;
        host.toggleAttribute('data-invalid', !!msg);
      }
    };
  };
  M.applyMask = function (v, mask) {
    var out = '', i = 0; v = String(v);
    for (var k = 0; k < mask.length; k++) {
      var m = mask.charAt(k);
      if (i >= v.length) break;
      if (m === '#') { while (i < v.length && !/\d/.test(v.charAt(i))) i++; if (i < v.length) out += v.charAt(i++); else break; }
      else if (m === 'A') { while (i < v.length && !/[a-z]/i.test(v.charAt(i))) i++; if (i < v.length) out += v.charAt(i++).toUpperCase(); else break; }
      else if (m === '*') out += v.charAt(i++);
      else { out += m; if (v.charAt(i) === m) i++; }
    }
    return out;
  };
  /** Base class for controls that take part in forms: label, description, error, rules, validate(), reset(). */
  class FieldElement extends UIElement {
    static props = { label: {}, description: {}, error: { doc: 'External error message (e.g. from server)' }, name: {}, required: { type: 'boolean' }, disabled: { type: 'boolean' }, rules: { type: 'any', doc: "Validation rules: ['required','email',{minLength:3}, fn]" }, success: { type: 'boolean' }, size: { default: 'md', reflect: true } };
    extraRules() { return []; }
    getValue() { return this._p.value; }
    validate() {
      var rules = []; if (this.required) rules.push('required');
      rules = rules.concat(this.extraRules(), Array.isArray(this.rules) ? this.rules : []);
      var r = M.validation.validate(this.getValue(), rules);
      this._msg = r.message; this._validated = true; if (this._parts) this._parts.sync();
      this.emit(r.valid ? 'valid' : 'invalid', { message: r.message, name: this.name });
      return r.valid;
    }
    get validationMessage() { return this.error || this._msg || ''; }
    reset() { var d = this.constructor.allProps().value; this._p.value = d ? d.default : ''; this._msg = ''; this._validated = false; this.requestUpdate('value'); this.emit('reset'); }
    setError(m) { this.error = m; }
  }
  M.FieldElement = FieldElement;
});

/* ---- MODULE: src/components/inputs/text-fields.js ---- */
MiniUI.module('src/components/inputs/text-fields.js', function (M) {
  var U = M.util, h = M.h, G = 'Inputs', FieldElement = M.FieldElement;

  class TextField extends FieldElement {
    static multiline = false;
    static props = { value: { default: '', doc: 'Current text' }, placeholder: {}, type: { default: 'text', doc: 'text|password|email|url|tel|search' }, readonly: { type: 'boolean' }, loading: { type: 'boolean' }, icon: { doc: 'Leading icon' }, clearable: { type: 'boolean' }, mask: { doc: 'Input mask: # digit, A letter, * any. e.g. (##) #####-####' }, minlength: { type: 'number', default: null }, maxlength: { type: 'number', default: null }, pattern: {}, mono: { type: 'boolean' }, uppercase: { type: 'boolean' }, rows: { type: 'number', default: 3 }, autosize: { type: 'boolean' }, counter: { type: 'boolean' }, inputmode: {} };
    build() {
      var ml = this.constructor.multiline; this._id = U.uid('fld');
      this._input = h(ml ? 'textarea' : 'input', { class: 'ui-fld-input', id: this._id, autocomplete: 'off', spellcheck: 'false' });
      this._ico = h('ui-icon'); this._spin = h('ui-spinner', { size: 'sm' }); this._extra = h('span', { class: 'ui-fld-extra' });
      this._clr = h('button', { class: 'ui-fld-btn', type: 'button', 'aria-label': 'Limpar', tabindex: '-1', '.innerHTML': M.icon('x-circle', { size: '14px' }), onclick: () => { this._p.value = ''; this._input.value = ''; this._clr.hidden = true; this._input.focus(); this.emit('input', { value: '' }); this.emit('clear'); } });
      this._box = h('div', { class: 'ui-fld-box' + (ml ? ' ui-fld-multi' : '') }, this._ico, this._input, this._spin, this._clr, this._extra);
      this._parts = M.fieldShell(this, this._box, this._id); this._cnt = h('div', { class: 'ui-fld-count' }); this._parts.wrap.insertBefore(this._cnt, this._parts.desc);
      this.append(this._parts.wrap);
      this._input.addEventListener('input', () => this._onInput());
      this._input.addEventListener('change', () => this.emit('change', { value: this._p.value }));
      this._input.addEventListener('blur', () => { this._touched = true; if (this.beforeBlur) this.beforeBlur(); this.validate(); });
      this._input.addEventListener('keydown', (e) => { if (this.onKey) this.onKey(e); });
      if (this.buildExtra) this.buildExtra();
    }
    inputType() { return this.type === 'search' ? 'text' : this.type || 'text'; }
    _autosize() { if (this.constructor.multiline && this.autosize) { this._input.style.height = 'auto'; this._input.style.height = this._input.scrollHeight + 2 + 'px'; } }
    _onInput() {
      var v = this._input.value; if (this.uppercase) v = v.toUpperCase();
      if (this.mask) v = M.applyMask(v, this.mask);
      if (v !== this._input.value) this._input.value = v;
      this._p.value = v; this._clr.hidden = !this.clearable || !v; this._autosize();
      if (this.counter) this._cnt.textContent = v.length + (this.maxlength ? ' / ' + this.maxlength : '');
      if (this._validated) this.validate();
      this.emit('input', { value: v }); if (this.afterInput) this.afterInput(v);
    }
    extraRules() {
      var r = []; if (this.type === 'email') r.push('email'); if (this.type === 'url') r.push('url');
      if (this.minlength != null) r.push({ minLength: this.minlength }); if (this.maxlength != null) r.push({ maxLength: this.maxlength }); if (this.pattern) r.push({ pattern: this.pattern }); return r;
    }
    focus(o) { this._input.focus(o); } select() { this._input.select(); } get control() { return this._input; }
    update() {
      var i = this._input;
      if (!this.constructor.multiline) i.type = this.inputType(); else i.rows = this.rows;
      i.placeholder = this.placeholder || ''; i.disabled = this.disabled; i.readOnly = this.readonly; if (this.name) i.name = this.name;
      if (this.maxlength != null && !this.mask) i.maxLength = this.maxlength; if (this.inputmode) i.inputMode = this.inputmode; else if (this.type === 'tel' || this.mask) i.inputMode = this.mask && /[A*]/.test(this.mask) ? 'text' : 'numeric';
      if (i.value !== (this._p.value == null ? '' : this._p.value)) i.value = this._p.value == null ? '' : this._p.value;
      i.setAttribute('aria-required', String(this.required)); i.setAttribute('aria-invalid', String(!!(this.error || this._msg)));
      this._ico.hidden = !this.icon; this._ico.setAttribute('name', this.icon || ''); this._spin.hidden = !this.loading; this._clr.hidden = !this.clearable || !this._p.value;
      this._box.classList.toggle('ui-fld-mono', this.mono); this._cnt.hidden = !this.counter; this._cnt.textContent = (this._p.value || '').length + (this.maxlength ? ' / ' + this.maxlength : '');
      this.toggleAttribute('data-success', this.success); this._parts.sync(); this._autosize();
      if (this.afterUpdate) this.afterUpdate();
    }
  }
  M.define('ui-text-field', TextField, { group: G, desc: 'Single-line text input with label, description, validation, mask, icon, clear button and loading state.', events: ['ui-input', 'ui-change', 'ui-valid', 'ui-invalid', 'ui-clear'], methods: ['focus()', 'select()', 'validate()', 'reset()'] });

  class TextArea extends TextField { static multiline = true; }
  M.define('ui-text-area', TextArea, { group: G, desc: 'Multi-line text input with optional auto-size and character counter.' });

  class PasswordField extends TextField {
    buildExtra() { this._show = false; this._eye = h('button', { class: 'ui-fld-btn', type: 'button', 'aria-label': 'Mostrar senha', 'aria-pressed': 'false', '.innerHTML': M.icon('eye', { size: '15px' }), onclick: () => { this._show = !this._show; this._eye.innerHTML = M.icon(this._show ? 'eye-off' : 'eye', { size: '15px' }); this._eye.setAttribute('aria-pressed', String(this._show)); this._input.type = this.inputType(); } }); this._extra.append(this._eye); }
    inputType() { return this._show ? 'text' : 'password'; }
  }
  M.define('ui-password-field', PasswordField, { group: G, desc: 'Password input with show/hide toggle.' });

  class SearchField extends TextField {
    static props = { debounce: { type: 'number', default: 250 }, icon: { default: 'search' }, clearable: { type: 'boolean', default: true }, placeholder: { default: 'Buscar' } };
    onKey(e) { if (e.key === 'Enter') { e.preventDefault(); this.emit('search', { value: this._p.value, submitted: true }); } else if (e.key === 'Escape' && this._p.value) { e.stopPropagation(); this._clr.click(); this.emit('search', { value: '' }); } }
    afterInput(v) { clearTimeout(this._dt); this._dt = setTimeout(() => this.emit('search', { value: v, submitted: false }), this.debounce); }
    teardown() { clearTimeout(this._dt); }
  }
  M.define('ui-search-field', SearchField, { group: G, desc: 'Search input with debounced ui-search events.', events: ['ui-search'] });

  class NumberField extends TextField {
    static props = { min: { type: 'number', default: null }, max: { type: 'number', default: null }, step: { type: 'number', default: 1 }, precision: { type: 'number', default: null } };
    buildExtra() {
      var mk = (d, ic) => h('button', { type: 'button', tabindex: '-1', 'aria-label': d > 0 ? 'Aumentar' : 'Diminuir', '.innerHTML': M.icon(ic, { size: '10px', stroke: 2.6 }), onclick: () => this._bump(d) });
      this._extra.append(h('span', { class: 'ui-num-step' }, mk(1, 'chevron-up'), mk(-1, 'chevron-down'))); this._input.inputMode = 'decimal';
    }
    get valueAsNumber() { var n = parseFloat(String(this._p.value).replace(',', '.')); return isNaN(n) ? NaN : n; }
    _fmt(n) { return this.precision != null ? n.toFixed(this.precision) : String(Math.round(n * 1e10) / 1e10); }
    _clamp(n) { if (this.min != null) n = Math.max(this.min, n); if (this.max != null) n = Math.min(this.max, n); return n; }
    _bump(d) { var n = this.valueAsNumber; if (isNaN(n)) n = this.min != null ? this.min : 0; else n += d * this.step; this._p.value = this._fmt(this._clamp(n)); this._input.value = this._p.value; this.emit('input', { value: this._p.value }); this.emit('change', { value: this._p.value, number: this.valueAsNumber }); }
    onKey(e) { if (e.key === 'ArrowUp') { e.preventDefault(); this._bump(1); } else if (e.key === 'ArrowDown') { e.preventDefault(); this._bump(-1); } else if (e.key.length === 1 && !/[\d.,\-]/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault(); }
    beforeBlur() { var n = this.valueAsNumber; if (!isNaN(n)) { this._p.value = this._fmt(this._clamp(n)); this._input.value = this._p.value; } }
    extraRules() { var r = ['number']; if (this.min != null) r.push({ min: this.min }); if (this.max != null) r.push({ max: this.max }); return r; }
  }
  M.define('ui-number-field', NumberField, { group: G, desc: 'Numeric input with steppers, min/max clamping and arrow-key increments.' });

  M.alias('ui-email-field', TextField, { type: 'email', icon: 'mail', placeholder: 'nome@exemplo.com' }, { desc: 'Email input with built-in validation.' });
  M.alias('ui-url-field', TextField, { type: 'url', icon: 'link', placeholder: 'https://' }, { desc: 'URL input with built-in validation.' });
  M.alias('ui-phone-field', TextField, { type: 'tel', mask: '(##) #####-####', placeholder: '(11) 91234-5678' }, { desc: 'Phone input with mask.' });
  M.alias('ui-code-field', TextField, { mono: true, uppercase: true, mask: 'AAAA-AAAA', placeholder: 'ABCD-1234' }, { desc: 'Monospace code/serial input.' });

  /* ---------- OTP ---------- */
  class OTPField extends FieldElement {
    static props = { length: { type: 'number', default: 6 }, value: { default: '' }, numeric: { type: 'boolean', default: true } };
    build() { this._wrap = h('div', { class: 'ui-otp', role: 'group' }); this._parts = M.fieldShell(this, this._wrap); this.append(this._parts.wrap);
      this._wrap.addEventListener('input', (e) => { var i = this._ins().indexOf(e.target); if (i < 0) return; var v = e.target.value.replace(this.numeric ? /\D/g : /\s/g, '').slice(-1); e.target.value = v; this._collect(); if (v && this._ins()[i + 1]) this._ins()[i + 1].focus(); });
      this._wrap.addEventListener('keydown', (e) => { var ins = this._ins(), i = ins.indexOf(e.target); if (e.key === 'Backspace' && !e.target.value && ins[i - 1]) { ins[i - 1].focus(); ins[i - 1].value = ''; this._collect(); } else if (e.key === 'ArrowLeft' && ins[i - 1]) ins[i - 1].focus(); else if (e.key === 'ArrowRight' && ins[i + 1]) ins[i + 1].focus(); });
      this._wrap.addEventListener('paste', (e) => { e.preventDefault(); var t = (e.clipboardData.getData('text') || '').replace(this.numeric ? /\D/g : /\s/g, '').slice(0, this.length); this._ins().forEach((x, i) => { x.value = t[i] || ''; }); this._collect(); var ins = this._ins(); (ins[Math.min(t.length, ins.length - 1)]).focus(); }); }
    _ins() { return Array.prototype.slice.call(this._wrap.querySelectorAll('input')); }
    _collect() { var v = this._ins().map(function (i) { return i.value; }).join(''); this._p.value = v; this.emit('input', { value: v }); if (v.length === this.length) this.emit('complete', { value: v }); }
    focus() { var i = this._ins(); (i.filter(function (x) { return !x.value; })[0] || i[0]).focus(); }
    update() { var ins = this._ins(); while (ins.length < this.length) { var n = this.length > ins.length ? ins.length : 0; this._wrap.append(h('input', { maxlength: 2, inputmode: this.numeric ? 'numeric' : 'text', autocomplete: 'one-time-code', 'aria-label': 'Dígito ' + (ins.length + 1) })); ins = this._ins(); } while (ins.length > this.length) ins.pop().remove();
      var v = this._p.value || ''; this._ins().forEach((x, i) => { x.value = v[i] || ''; x.disabled = this.disabled; }); this._parts.sync(); }
  }
  M.define('ui-otp-field', OTPField, { group: G, desc: 'One-time-code input with auto-advance, paste support and ui-complete event.', events: ['ui-input', 'ui-complete'] });
});

/* ---- MODULE: src/components/inputs/toggles.js ---- */
MiniUI.module('src/components/inputs/toggles.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Inputs';

  class Checkbox extends UIElement {
    static props = { checked: { type: 'boolean' }, indeterminate: { type: 'boolean' }, disabled: { type: 'boolean' }, name: {}, value: { default: 'on' }, required: { type: 'boolean' } };
    boxIcon() { return M.icon(this._p.indeterminate ? 'minus' : 'check', { size: '12px', stroke: 3 }); }
    build() {
      this._in = h('input', { type: 'checkbox', class: 'ui-visually-hidden' }); this._box = h('span', { class: 'ui-cb-box' }); this._txt = h('span', null, this.slotted);
      this.append(this._lbl = h('label', { class: 'ui-own ' + this.constructor.cls }, this._in, this._box, this._txt));
      this._in.addEventListener('change', () => { this._p.indeterminate = false; this.checked = this._in.checked; this.indeterminate = false; this.emit('change', { checked: this.checked, value: this.value }); });
    }
    focus() { this._in.focus(); } toggle() { this._in.click(); }
    get control() { return this._in; }
    getValue() { return this.checked; }
    validate() { var ok = !this.required || this.checked; this.toggleAttribute('data-invalid', !ok); this._in.setAttribute('aria-invalid', String(!ok)); return ok; }
    reset() { this.checked = false; }
    update() { var i = this._in; i.checked = this.checked; i.indeterminate = this.indeterminate; i.disabled = this.disabled; if (this.name) i.name = this.name; i.value = this.value; i.required = false; i.setAttribute('aria-required', String(this.required)); this._box.innerHTML = this.boxIcon(); this._txt.hidden = !this._txt.textContent.trim() && !this._txt.children.length; if (this.constructor.cls === 'ui-sw') this._box.className = 'ui-sw-track'; }
  }
  Checkbox.cls = 'ui-cb';
  M.define('ui-checkbox', Checkbox, { group: G, desc: 'Checkbox with indeterminate state. Uses a native input for accessibility.', events: ['ui-change'], methods: ['toggle()', 'focus()'] });

  class Switch extends Checkbox { static props = { color: { default: '', reflect: true, doc: "'' = green, 'accent'" }, reverse: { type: 'boolean' } }; boxIcon() { return ''; } build() { super.build(); this._in.setAttribute('role', 'switch'); this._box.className = 'ui-sw-track'; } update() { super.update(); this._in.setAttribute('aria-checked', String(this.checked)); this._box.className = 'ui-sw-track'; } }
  Switch.cls = 'ui-sw';
  M.define('ui-switch', Switch, { group: G, desc: 'On/off switch (role=switch).', events: ['ui-change'] });
  M.alias('ui-toggle', Switch, {}, { desc: 'Alias of ui-switch.' });

  class RadioGroup extends M.FieldElement {
    static props = { items: { type: 'any' }, value: { default: '' }, orientation: { default: 'vertical', reflect: true } };
    static observeChildren = true;
    build() { this._fs = h('fieldset', { class: 'ui-own ui-rd-group', role: 'radiogroup' }, this._lg = h('legend')); this._name = U.uid('rg'); this.append(this._fs); this._parts = null;
      this._fs.addEventListener('change', (e) => { if (e.target.type === 'radio') { this.value = e.target.value; this.emit('change', { value: this.value }); } }); }
    focus() { var r = this._fs.querySelector('input:checked') || this._fs.querySelector('input'); r && r.focus(); }
    update() {
      this._lg.textContent = this.label || ''; this._lg.hidden = !this.label; this._fs.disabled = false;
      Array.prototype.forEach.call(this._fs.querySelectorAll('label'), function (l) { l.remove(); });
      M.optionsOf(this).forEach((o) => { var inp = h('input', { type: 'radio', class: 'ui-visually-hidden', name: this.name || this._name, value: o.value, disabled: o.disabled || this.disabled }); inp.checked = o.value === this.value; this._fs.append(h('label', { class: 'ui-rd' }, inp, h('span', { class: 'ui-rd-dot' }), h('span', null, o.label))); });
      this.toggleAttribute('data-invalid', !!(this.error || this._msg)); if (this.error || this._msg) { if (!this._e) this._fs.append(this._e = h('div', { class: 'ui-fld-msg ui-fld-err', role: 'alert' })); this._e.textContent = this.error || this._msg; } else if (this._e) { this._e.remove(); this._e = null; }
    }
  }
  M.define('ui-radio-group', RadioGroup, { group: G, desc: 'Group of radio buttons from `items` or <ui-option> children.', events: ['ui-change'] });
  M.alias('ui-radio-button', RadioGroup, { items: null }, { desc: 'Alias of radio group.' });

  /* ---------- Sliders ---------- */
  class Slider extends M.FieldElement {
    static props = { value: { type: 'number', default: 50 }, min: { type: 'number', default: 0 }, max: { type: 'number', default: 100 }, step: { type: 'number', default: 1 }, showValue: { type: 'boolean' }, unit: { default: '' } };
    build() { this._id = U.uid('sl'); this._r = h('input', { type: 'range', class: 'ui-range', id: this._id }); this._v = h('span', { class: 'ui-sl-val' }); var box = h('div', null, this._r);
      this._parts = M.fieldShell(this, box, this._id); this._parts.label.style.display = 'inline-block'; this.append(this._parts.wrap);
      this._r.addEventListener('input', () => { this._p.value = Number(this._r.value); this._paint(); this.emit('input', { value: this._p.value }); }); this._r.addEventListener('change', () => this.emit('change', { value: this._p.value })); }
    _paint() { var p = (this._p.value - this.min) / ((this.max - this.min) || 1) * 100; this._r.style.setProperty('--p', p + '%'); this._v.textContent = this._p.value + this.unit; }
    focus() { this._r.focus(); }
    update() { var r = this._r; r.min = this.min; r.max = this.max; r.step = this.step; r.value = this._p.value; r.disabled = this.disabled; if (this.name) r.name = this.name; this._parts.sync(); if (this.showValue) { if (!this._v.parentNode) this._parts.label.after(this._v); } else this._v.remove(); this._paint(); }
  }
  M.define('ui-slider', Slider, { group: G, desc: 'Single value slider based on native range input (keyboard + a11y built in).', events: ['ui-input', 'ui-change'] });

  class RangeSlider extends M.FieldElement {
    static props = { low: { type: 'number', default: 25 }, high: { type: 'number', default: 75 }, min: { type: 'number', default: 0 }, max: { type: 'number', default: 100 }, step: { type: 'number', default: 1 }, unit: { default: '' }, showValue: { type: 'boolean' } };
    get value() { return [this._p.low, this._p.high]; } set value(v) { if (Array.isArray(v)) { this.low = v[0]; this.high = v[1]; } }
    build() {
      this._a = h('input', { type: 'range', class: 'ui-range', 'aria-label': 'Mínimo' }); this._b = h('input', { type: 'range', class: 'ui-range', 'aria-label': 'Máximo' }); this._fill = h('div', { class: 'ui-rs-fill' });
      this._v = h('span', { class: 'ui-sl-val' }); var box = h('div', { class: 'ui-rs' }, h('div', { class: 'ui-rs-track' }), this._fill, this._a, this._b);
      this._parts = M.fieldShell(this, box); this.append(this._parts.wrap, this._v);
      var on = (w) => () => { var a = Number(this._a.value), b = Number(this._b.value); if (w === 'a') a = Math.min(a, b); else b = Math.max(b, a); this._p.low = a; this._p.high = b; this._paint(); this.emit('input', { low: a, high: b, value: [a, b] }); };
      this._a.addEventListener('input', on('a')); this._b.addEventListener('input', on('b')); [this._a, this._b].forEach((r) => r.addEventListener('change', () => this.emit('change', { low: this._p.low, high: this._p.high, value: [this._p.low, this._p.high] })));
    }
    _paint() { var span = (this.max - this.min) || 1, l = (this._p.low - this.min) / span * 100, hh = (this._p.high - this.min) / span * 100; this._fill.style.left = l + '%'; this._fill.style.width = (hh - l) + '%'; this._a.value = this._p.low; this._b.value = this._p.high; this._v.textContent = this._p.low + this.unit + ' – ' + this._p.high + this.unit; }
    update() { [this._a, this._b].forEach((r) => { r.min = this.min; r.max = this.max; r.step = this.step; r.disabled = this.disabled; }); this._v.hidden = !this.showValue; this._parts.sync(); this._paint(); }
    getValue() { return [this._p.low, this._p.high]; }
  }
  M.define('ui-range-slider', RangeSlider, { group: G, desc: 'Two-thumb range slider (low/high).', events: ['ui-input', 'ui-change'] });
});

/* ---- MODULE: src/components/inputs/selects.js ---- */
MiniUI.module('src/components/inputs/selects.js', function (M) {
  var U = M.util, h = M.h, G = 'Inputs', FieldElement = M.FieldElement;

  /** Listbox popup used by Select, MultiSelect, Combobox. Focus stays on the owner (aria-activedescendant). */
  M.listbox = {
    open: function (o) {
      var multiple = !!o.multiple, sel = new Set(o.selected || []), opts = [], active = -1, buf = '', bt;
      var el = h('div', { class: 'ui-listbox ui-glass ui-scroll', role: 'listbox' }); el.id = U.uid('lb'); if (multiple) el.setAttribute('aria-multiselectable', 'true');
      var ctrl;
      function render() {
        el.innerHTML = ''; var lg = null;
        opts.forEach(function (op, i) {
          if (op.group && op.group !== lg) { el.append(h('div', { class: 'ui-lb-group', role: 'presentation' }, op.group)); lg = op.group; }
          var on = sel.has(op.value);
          el.append(h('div', { class: 'ui-lb-item', role: 'option', id: el.id + '-' + i, 'data-i': i, 'aria-selected': String(on), 'aria-disabled': op.disabled ? 'true' : null },
            multiple ? h('span', { class: 'ui-lb-check', '.innerHTML': on ? M.icon('check', { size: '11px', stroke: 3.2 }) : '' }) : null, op.icon ? h('ui-icon', { name: op.icon }) : null, h('span', { class: 'ui-lb-label' }, op.label), !multiple && on ? h('ui-icon', { name: 'check', class: 'ui-lb-tick' }) : null));
        });
        if (!opts.length) el.append(h('div', { class: 'ui-lb-empty' }, o.emptyText || 'Nenhum resultado'));
        setActive(active);
      }
      function setActive(i) {
        active = i; Array.prototype.forEach.call(el.querySelectorAll('.ui-lb-item'), function (n) { n.classList.toggle('active', +n.getAttribute('data-i') === i); });
        var n = el.querySelector('.ui-lb-item.active'); if (n && n.scrollIntoView) n.scrollIntoView({ block: 'nearest' });
        if (ctrl) ctrl.activeId = n ? n.id : ''; if (o.onActive) o.onActive(n ? n.id : '');
      }
      function choose(i) { var op = opts[i]; if (!op || op.disabled) return; if (multiple) { sel.has(op.value) ? sel.delete(op.value) : sel.add(op.value); render(); } else { sel.clear(); sel.add(op.value); } if (o.onSelect) o.onSelect(op, Array.from(sel)); if (!multiple) ctrl.close(); }
      function move(d) { if (!opts.length) return; var i = active; for (var k = 0; k < opts.length; k++) { i = (i + d + opts.length) % opts.length; if (!opts[i].disabled) break; } setActive(i); }
      el.addEventListener('mousemove', function (e) { var n = e.target.closest('.ui-lb-item'); if (n && +n.getAttribute('data-i') !== active) setActive(+n.getAttribute('data-i')); });
      el.addEventListener('mousedown', function (e) { e.preventDefault(); });
      el.addEventListener('click', function (e) { var n = e.target.closest('.ui-lb-item'); if (n) choose(+n.getAttribute('data-i')); });
      var entry = M.overlay.open(el, { anchor: o.anchor, matchWidth: true, placement: 'bottom-start', layer: 'popover', offset: 4, onClose: o.onClose });
      ctrl = {
        el: el, entry: entry, activeId: '',
        setOptions: function (list, selected) { opts = list; if (selected) { sel.clear(); selected.forEach(function (v) { sel.add(v); }); } if (active >= opts.length) active = -1; render(); entry.place(); },
        setActive: setActive,
        keydown: function (e) {
          switch (e.key) {
            case 'ArrowDown': e.preventDefault(); move(1); return true; case 'ArrowUp': e.preventDefault(); move(-1); return true;
            case 'Home': e.preventDefault(); setActive(opts.findIndex(function (x) { return !x.disabled; })); return true;
            case 'End': e.preventDefault(); for (var k = opts.length - 1; k >= 0; k--) if (!opts[k].disabled) { setActive(k); break; } return true;
            case 'Enter': if (active >= 0) { e.preventDefault(); choose(active); return true; } return false;
            case ' ': if (!o.noTypeahead && active >= 0 && !buf) { e.preventDefault(); choose(active); return true; } break;
            case 'Escape': e.preventDefault(); e.stopPropagation(); ctrl.close(); return true; case 'Tab': ctrl.close(); return false;
          }
          if (!o.noTypeahead && e.key.length === 1 && !e.ctrlKey && !e.metaKey) { buf += e.key.toLowerCase(); clearTimeout(bt); bt = setTimeout(function () { buf = ''; }, 600); var i = opts.findIndex(function (x) { return !x.disabled && x.label.toLowerCase().indexOf(buf) === 0; }); if (i >= 0) setActive(i); return true; }
          return false;
        },
        close: function (r) { return entry.close(r); }, get closed() { return entry.closed; }
      };
      ctrl.setOptions(o.options, o.selected);
      var first = opts.findIndex(function (x) { return sel.has(x.value); }); setActive(first >= 0 ? first : (o.activateFirst ? 0 : -1));
      return ctrl;
    }
  };

  class Select extends FieldElement {
    static props = { items: { type: 'any', doc: 'Options: strings or {value,label,icon,disabled,group}' }, value: { default: '' }, placeholder: { default: 'Selecionar…' } };
    static observeChildren = true;
    build() {
      this._id = U.uid('sel'); this._btn = h('button', { class: 'ui-sel-btn', type: 'button', id: this._id, role: 'combobox', 'aria-haspopup': 'listbox', 'aria-expanded': 'false' }, this._val = h('span', { class: 'ui-sel-val' }), h('ui-icon', { name: 'chevrons-up-down', class: 'ui-sel-chev' }));
      this._parts = M.fieldShell(this, this._btn, this._id); this.append(this._parts.wrap);
      this._btn.addEventListener('click', () => this.toggle());
      this._btn.addEventListener('keydown', (e) => { if (this._lb && !this._lb.closed) { this._lb.keydown(e); return; } if (['ArrowDown', 'ArrowUp', 'Enter', ' '].indexOf(e.key) > -1) { e.preventDefault(); this.open(); } });
      this._btn.addEventListener('blur', () => { if (!this._lb || this._lb.closed) { this._touched = true; if (this._validated || this.required) this.validate(); } });
    }
    focus() { this._btn.focus(); }
    toggle() { this._lb && !this._lb.closed ? this._lb.close() : this.open(); }
    open() {
      if (this.disabled) return; this._opts = M.optionsOf(this); this._btn.setAttribute('aria-expanded', 'true');
      this._lb = M.listbox.open({ anchor: this._btn, options: this._opts, selected: this.value ? [this.value] : [], onSelect: (op) => this._choose(op.value), onClose: () => { this._btn.setAttribute('aria-expanded', 'false'); this._btn.removeAttribute('aria-activedescendant'); }, onActive: (id) => { if (id) this._btn.setAttribute('aria-activedescendant', id); } });
      this._btn.setAttribute('aria-controls', this._lb.el.id); this.emit('open');
    }
    _choose(v) { var old = this.value; this.value = v; this.emit('change', { value: v, previous: old }); if (this._validated) this.validate(); }
    unbind() { if (this._lb && !this._lb.closed) this._lb.close(); }
    update() {
      var o = M.optionsOf(this).filter(function (x) { return x.value === this.value; }, this)[0];
      this._val.textContent = o ? o.label : this.placeholder; this._val.classList.toggle('ph', !o); this._btn.disabled = this.disabled; if (this.name) this._btn.name = this.name; this._btn.setAttribute('aria-required', String(this.required)); this._parts.sync();
    }
  }
  M.define('ui-select', Select, { group: G, desc: 'Dropdown single select with keyboard navigation, type-ahead and grouping.', events: ['ui-change', 'ui-open'], methods: ['open()', 'toggle()', 'focus()', 'validate()'] });

  class MultiSelect extends FieldElement {
    static props = { items: { type: 'any' }, value: { type: 'any', default: null, doc: 'Array of selected values' }, placeholder: { default: 'Selecionar…' }, max: { type: 'number', default: null } };
    static observeChildren = true;
    get value() { return this._p.value || []; } set value(v) { this._set('value', Array.isArray(v) ? v : []); }
    build() {
      this._id = U.uid('ms'); this._btn = h('div', { class: 'ui-sel-btn', tabindex: '0', id: this._id, role: 'combobox', 'aria-haspopup': 'listbox', 'aria-expanded': 'false', 'aria-multiselectable': 'true' }, this._chips = h('div', { class: 'ui-chips' }), h('ui-icon', { name: 'chevrons-up-down', class: 'ui-sel-chev' }));
      this._parts = M.fieldShell(this, this._btn, this._id); this.append(this._parts.wrap);
      this._btn.addEventListener('click', (e) => { if (e.target.closest('.ui-chip-x')) return; this.toggle(); });
      this._btn.addEventListener('keydown', (e) => { if (this._lb && !this._lb.closed) { this._lb.keydown(e); return; } if (['ArrowDown', 'Enter', ' '].indexOf(e.key) > -1) { e.preventDefault(); this.open(); } });
      this._chips.addEventListener('ui-remove', (e) => { e.preventDefault(); this._set('value', this.value.filter((v) => v !== e.detail.value)); this.emit('change', { value: this.value }); });
    }
    focus() { this._btn.focus(); } toggle() { this._lb && !this._lb.closed ? this._lb.close() : this.open(); }
    open() { if (this.disabled) return; this._btn.setAttribute('aria-expanded', 'true'); this._lb = M.listbox.open({ anchor: this._btn, multiple: true, options: M.optionsOf(this), selected: this.value, noTypeahead: false, onSelect: (op, all) => { if (this.max && all.length > this.max) { M.toast.warning('Máximo de ' + this.max + ' itens'); return; } this._set('value', all); this.emit('change', { value: all }); if (this._validated) this.validate(); }, onClose: () => this._btn.setAttribute('aria-expanded', 'false'), onActive: (id) => id && this._btn.setAttribute('aria-activedescendant', id) }); }
    unbind() { if (this._lb && !this._lb.closed) this._lb.close(); }
    update() {
      var opts = M.optionsOf(this), v = this.value; this._chips.innerHTML = '';
      if (!v.length) this._chips.append(h('span', { class: 'ui-sel-val ph' }, this.placeholder));
      v.forEach((x) => { var o = opts.filter(function (y) { return y.value === x; })[0]; this._chips.append(h('ui-chip', { removable: '', value: x }, o ? o.label : x)); });
      this._btn.setAttribute('aria-disabled', String(this.disabled)); this._parts.sync();
    }
  }
  M.define('ui-multi-select', MultiSelect, { group: G, desc: 'Multi-selection dropdown with removable chips.', events: ['ui-change'] });

  class Combobox extends FieldElement {
    static props = { items: { type: 'any' }, value: { default: '' }, placeholder: { default: 'Digite para buscar…' }, allowCustom: { type: 'boolean' }, source: { type: 'any', doc: 'async (query) => options[] for remote search' }, minChars: { type: 'number', default: 0 } };
    static observeChildren = true;
    build() {
      this._id = U.uid('cb'); this._input = h('input', { class: 'ui-fld-input', id: this._id, role: 'combobox', 'aria-autocomplete': 'list', 'aria-expanded': 'false', autocomplete: 'off' });
      this._spin = h('ui-spinner', { size: 'sm' }); this._spin.hidden = true;
      this._box = h('div', { class: 'ui-fld-box' }, h('ui-icon', { name: 'search' }), this._input, this._spin, h('ui-icon', { name: 'chevron-down' }));
      this._parts = M.fieldShell(this, this._box, this._id); this.append(this._parts.wrap);
      this._deb = U.debounce(() => this._query(), 180);
      this._input.addEventListener('input', () => { this._open(); if (this.source) this._deb(); else this._query(); });
      this._input.addEventListener('focus', () => { if (!this.source) this._open(); });
      this._input.addEventListener('click', () => this._open());
      this._input.addEventListener('keydown', (e) => { if (this._lb && !this._lb.closed && this._lb.keydown(e)) return; if (e.key === 'ArrowDown') { this._open(); } else if (e.key === 'Enter' && this.allowCustom) { this._commitCustom(); } });
      this._input.addEventListener('blur', () => setTimeout(() => { if (this._lb && !this._lb.closed) return; this._touched = true; if (this.allowCustom) this._commitCustom(true); else this._syncInput(); this.validate(); }, 120));
    }
    focus() { this._input.focus(); }
    _all() { return this._remote || M.optionsOf(this); }
    _filtered() { var q = this._input.value.trim().toLowerCase(); var cur = this._all().filter(function (o) { return !q || o.label.toLowerCase().indexOf(q) > -1; }); return cur; }
    _open() { if (this.disabled) return; if (this._lb && !this._lb.closed) return; this._input.setAttribute('aria-expanded', 'true'); this._lb = M.listbox.open({ anchor: this._box, options: this._filtered(), selected: this.value ? [this.value] : [], noTypeahead: true, activateFirst: true, onSelect: (op) => { this._pick(op); }, onClose: () => { this._input.setAttribute('aria-expanded', 'false'); }, onActive: (id) => { if (id) this._input.setAttribute('aria-activedescendant', id); } }); }
    _query() {
      var q = this._input.value; if (this.source) { if (q.length < this.minChars) return; this._spin.hidden = false; Promise.resolve(this.source(q)).then((r) => { this._remote = (r || []).map((o) => typeof o === 'object' ? Object.assign({ icon: '', disabled: false }, o, { value: String(o.value != null ? o.value : o.label) }) : { value: String(o), label: String(o), icon: '', disabled: false }); this._spin.hidden = true; if (this._lb && !this._lb.closed) this._lb.setOptions(this._filtered()); }); }
      else if (this._lb && !this._lb.closed) { this._lb.setOptions(this._filtered()); this._lb.setActive(this._filtered().length ? 0 : -1); }
      this.emit('query', { query: q });
    }
    _pick(op) { var old = this.value; this._p.value = op.value; this._input.value = op.label; this._cache = op; this.emit('change', { value: op.value, option: op, previous: old }); if (this._validated) this.validate(); }
    _commitCustom(silent) { var v = this._input.value.trim(); if (v !== this.value) { this._p.value = v; if (!silent) this.emit('change', { value: v, custom: true }); } if (this._lb && !this._lb.closed) this._lb.close(); }
    _syncInput() { var o = this._all().filter(function (x) { return x.value === this._p.value; }, this)[0]; this._input.value = o ? o.label : (this._cache && this._cache.value === this._p.value ? this._cache.label : this.allowCustom ? this._p.value : ''); }
    extraRules() { return []; }
    unbind() { if (this._lb && !this._lb.closed) this._lb.close(); }
    update() { this._input.placeholder = this.placeholder; this._input.disabled = this.disabled; this._input.setAttribute('aria-required', String(this.required)); if (document.activeElement !== this._input) this._syncInput(); this._parts.sync(); }
  }
  M.define('ui-combobox', Combobox, { group: G, desc: 'Text input with filterable suggestion list. Supports custom values and remote `source`.', events: ['ui-change', 'ui-query'] });
  M.alias('ui-autocomplete', Combobox, { allowCustom: true }, { desc: 'Combobox that accepts free text; use `source` for async suggestions.' });

  class TagInput extends FieldElement {
    static props = { value: { type: 'any', default: null }, placeholder: { default: 'Adicionar…' }, max: { type: 'number', default: null }, allowDuplicates: { type: 'boolean' }, separators: { default: ',;' } };
    get value() { return this._p.value || []; } set value(v) { this._set('value', Array.isArray(v) ? v : []); }
    build() {
      this._id = U.uid('tg'); this._input = h('input', { class: 'ui-fld-input', id: this._id, autocomplete: 'off' }); this._box = h('div', { class: 'ui-fld-box ui-tags' }, this._chips = h('span', { style: { display: 'contents' } }), this._input);
      this._parts = M.fieldShell(this, this._box, this._id); this.append(this._parts.wrap);
      this._box.addEventListener('click', () => this._input.focus());
      this._input.addEventListener('keydown', (e) => { if (e.key === 'Enter' || (e.key.length === 1 && this.separators.indexOf(e.key) > -1)) { e.preventDefault(); this.add(this._input.value); } else if (e.key === 'Backspace' && !this._input.value && this.value.length) this.remove(this.value[this.value.length - 1]); });
      this._input.addEventListener('blur', () => { if (this._input.value.trim()) this.add(this._input.value); this._touched = true; if (this._validated) this.validate(); });
      this._input.addEventListener('paste', (e) => { var t = e.clipboardData.getData('text'); if (/[,;\n]/.test(t)) { e.preventDefault(); t.split(/[,;\n]/).forEach((x) => this.add(x)); } });
      this._chips.addEventListener('ui-remove', (e) => { e.preventDefault(); this.remove(e.detail.value); });
    }
    focus() { this._input.focus(); }
    add(t) { t = (t || '').trim(); this._input.value = ''; if (!t) return false; var v = this.value; if (!this.allowDuplicates && v.indexOf(t) > -1) return false; if (this.max && v.length >= this.max) return false; this._set('value', v.concat(t)); this.emit('change', { value: this.value, added: t }); return true; }
    remove(t) { this._set('value', this.value.filter(function (x) { return x !== t; })); this.emit('change', { value: this.value, removed: t }); this._input.focus(); }
    update() { this._chips.innerHTML = ''; this.value.forEach((t) => this._chips.append(h('ui-chip', { removable: '', value: t }, t))); this._input.placeholder = this.value.length ? '' : this.placeholder; this._input.disabled = this.disabled; this._parts.sync(); }
  }
  M.define('ui-tag-input', TagInput, { group: G, desc: 'Free-form tag entry (Enter / comma). Paste splits into tags.', events: ['ui-change'], methods: ['add(text)', 'remove(text)'] });
  M.alias('ui-chip-input', TagInput, {}, { desc: 'Alias of ui-tag-input.' });
});

/* ---- MODULE: src/components/inputs/pickers.js ---- */
MiniUI.module('src/components/inputs/pickers.js', function (M) {
  var U = M.util, h = M.h, G = 'Inputs', FieldElement = M.FieldElement;

  /* ----- colour maths ----- */
  function hex2rgb(x) { x = String(x).replace('#', ''); if (x.length === 3) x = x.split('').map(function (c) { return c + c; }).join(''); var n = parseInt(x, 16); return isNaN(n) ? [0, 0, 0] : [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function rgb2hsv(r, g, b) { r /= 255; g /= 255; b /= 255; var mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn, hh = 0; if (d) { if (mx === r) hh = ((g - b) / d) % 6; else if (mx === g) hh = (b - r) / d + 2; else hh = (r - g) / d + 4; hh *= 60; if (hh < 0) hh += 360; } return [hh, mx ? d / mx : 0, mx]; }
  function hsv2hex(hh, s, v) { var f = function (n) { var k = (n + hh / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); }; return '#' + [f(5), f(3), f(1)].map(function (x) { var t = Math.round(x * 255).toString(16); return t.length < 2 ? '0' + t : t; }).join(''); }
  M.color = { hex2rgb: hex2rgb, rgb2hsv: rgb2hsv, hsv2hex: hsv2hex, isHex: function (x) { return /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(x); } };

  class ColorPicker extends FieldElement {
    static props = { value: { default: '#0a7aff' }, presets: { type: 'any', default: null } };
    build() {
      this._id = U.uid('cp'); this._sw = h('span', { class: 'ui-cp-sw' }); this._hexTxt = h('span', { class: 'ui-sel-val', style: { fontFamily: 'var(--ui-font-mono)' } });
      this._btn = h('button', { type: 'button', class: 'ui-sel-btn', id: this._id, 'aria-haspopup': 'dialog', 'aria-expanded': 'false' }, this._sw, this._hexTxt, h('ui-icon', { name: 'palette', class: 'ui-sel-chev' }));
      this._parts = M.fieldShell(this, this._btn, this._id); this.append(this._parts.wrap);
      this._btn.addEventListener('click', () => this._h && !this._h.closed ? this._h.close() : this._open());
    }
    focus() { this._btn.focus(); }
    _set2(hex, silent) { this._p.value = hex; this._paint(); if (!silent) this.emit('input', { value: hex }); }
    _paint() { this._sw.style.background = this._p.value; this._hexTxt.textContent = this._p.value.toUpperCase(); if (this._pop) { var hex = this._pop.querySelector('.ui-cp-hex input'); if (hex && document.activeElement !== hex) hex.value = this._p.value; } }
    _open() {
      var rgb = hex2rgb(this._p.value), hsv = rgb2hsv(rgb[0], rgb[1], rgb[2]), self = this;
      var sv = h('div', { class: 'ui-cp-sv' }), knob = h('div', { class: 'ui-cp-knob' }), hue = h('input', { type: 'range', class: 'ui-cp-hue', min: 0, max: 360, value: Math.round(hsv[0]), 'aria-label': 'Matiz' });
      var hex = h('input', { value: this._p.value, 'aria-label': 'Valor hexadecimal', spellcheck: 'false' }), presets = h('div', { class: 'ui-cp-presets' });
      sv.append(knob);
      var apply = function (silent) { sv.style.background = hsv2hex(hsv[0], 1, 1); knob.style.left = (hsv[1] * 100) + '%'; knob.style.top = ((1 - hsv[2]) * 100) + '%'; self._set2(hsv2hex(hsv[0], hsv[1], hsv[2]), silent); };
      var pos = function (e) { var r = sv.getBoundingClientRect(); hsv[1] = U.clamp((e.clientX - r.left) / r.width, 0, 1); hsv[2] = 1 - U.clamp((e.clientY - r.top) / r.height, 0, 1); apply(); };
      M.drag.track(sv, { onStart: function (e) { pos(e); }, onMove: function (dx, dy, e) { pos(e); }, onEnd: function () { self.emit('change', { value: self._p.value }); } });
      hue.addEventListener('input', function () { hsv[0] = Number(hue.value); apply(); }); hue.addEventListener('change', function () { self.emit('change', { value: self._p.value }); });
      hex.addEventListener('input', function () { if (M.color.isHex(hex.value)) { var v = hex.value.charAt(0) === '#' ? hex.value : '#' + hex.value; var r = hex2rgb(v); hsv = rgb2hsv(r[0], r[1], r[2]); hue.value = Math.round(hsv[0]); apply(); self.emit('change', { value: self._p.value }); } });
      (this.presets || ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#00c7be', '#0a84ff', '#5e5ce6', '#af52de', '#ff2d55', '#a2845e', '#8e8e93', '#1d1d1f', '#ffffff', '#64d2ff', '#30d158', '#bf5af2']).forEach(function (c) { presets.append(h('button', { type: 'button', style: { background: c }, 'aria-label': c, onclick: function () { var r = hex2rgb(c); hsv = rgb2hsv(r[0], r[1], r[2]); hue.value = Math.round(hsv[0]); hex.value = c; apply(); self.emit('change', { value: self._p.value }); } })); });
      this._pop = h('div', { class: 'ui-cp-pop ui-glass', role: 'dialog', 'aria-label': 'Seletor de cor' }, sv, hue, h('div', { class: 'ui-cp-hex' }, h('span', { class: 'ui-sw-lbl' }, 'HEX'), hex), presets);
      this._btn.setAttribute('aria-expanded', 'true');
      this._h = M.overlay.open(this._pop, { anchor: this._btn, layer: 'popover', onClose: () => { this._btn.setAttribute('aria-expanded', 'false'); this._pop = null; } });
      apply(true);
    }
    unbind() { if (this._h && !this._h.closed) this._h.close(); }
    update() { this._btn.disabled = this.disabled; this._paint(); this._parts.sync(); }
  }
  M.define('ui-color-picker', ColorPicker, { group: G, desc: 'HSV colour picker with hue slider, hex input and presets.', events: ['ui-input', 'ui-change'] });

  /* ----- date / time pickers ----- */
  class DateTimeField extends FieldElement {
    static props = { kind: { default: 'date', reflect: true, doc: 'date|range|time|datetime' }, value: { default: '', doc: 'ISO date, "a/b" for range, HH:MM for time, ISO datetime' }, min: {}, max: {}, placeholder: { default: 'Selecionar…' }, step: { type: 'number', default: 5, doc: 'Minute step (time pickers)' } };
    build() {
      this._id = U.uid('dt'); this._val = h('span', { class: 'ui-sel-val' });
      this._btn = h('button', { type: 'button', class: 'ui-sel-btn', id: this._id, 'aria-haspopup': 'dialog', 'aria-expanded': 'false' }, h('ui-icon', { name: 'calendar' }), this._val, h('ui-icon', { name: 'chevron-down', class: 'ui-sel-chev' }));
      this._parts = M.fieldShell(this, this._btn, this._id); this.append(this._parts.wrap);
      this._btn.addEventListener('click', () => this._h && !this._h.closed ? this._h.close() : this._open());
    }
    focus() { this._btn.focus(); }
    _split() { var v = this._p.value || '', k = this.kind; if (k === 'range') { var p = v.split('/'); return { start: p[0] || '', end: p[1] || '' }; } if (k === 'time') return { time: v }; if (k === 'datetime') { var q = v.split('T'); return { date: q[0] || '', time: q[1] || '' }; } return { date: v }; }
    _text() {
      var s = this._split(), f = M.format, k = this.kind; if (!this._p.value) return '';
      if (k === 'range') return (s.start ? f.date(s.start + 'T00:00') : '…') + ' – ' + (s.end ? f.date(s.end + 'T00:00') : '…');
      if (k === 'time') return s.time; if (k === 'datetime') return (s.date ? f.date(s.date + 'T00:00') : '') + ' ' + (s.time || ''); return f.date(s.date + 'T00:00');
    }
    _commit(v, close) { this._p.value = v; this._paint(); this.emit('change', { value: v }); if (this._validated) this.validate(); if (close && this._h) this._h.close(); }
    _timeCols(cur, onPick) {
      var pad = M.format.pad, hh = h('div', { class: 'ui-tcol ui-scroll', role: 'listbox', 'aria-label': 'Horas' }), mm = h('div', { class: 'ui-tcol ui-scroll', role: 'listbox', 'aria-label': 'Minutos' }), t = (cur || '').split(':'), H = t[0] || '', Mi = t[1] || '';
      var mk = function (col, n, on, key) { var b = h('button', { type: 'button', role: 'option', 'aria-selected': String(on) }, pad(n)); b.onclick = function () { key(pad(n)); }; col.append(b); };
      for (var i = 0; i < 24; i++) mk(hh, i, pad(i) === H, function (v) { H = v; onPick(H + ':' + (Mi || '00')); Mi = Mi || '00'; refresh(); });
      for (var j = 0; j < 60; j += this.step) mk(mm, j, pad(j) === Mi, function (v) { Mi = v; onPick((H || '00') + ':' + Mi); H = H || '00'; refresh(); });
      var refresh = function () { Array.prototype.forEach.call(hh.children, function (b) { b.setAttribute('aria-selected', String(b.textContent === H)); }); Array.prototype.forEach.call(mm.children, function (b) { b.setAttribute('aria-selected', String(b.textContent === Mi)); }); };
      setTimeout(function () { var a = hh.querySelector('[aria-selected="true"]'); if (a) hh.scrollTop = a.offsetTop - 80; a = mm.querySelector('[aria-selected="true"]'); if (a) mm.scrollTop = a.offsetTop - 80; }, 0);
      return [hh, mm];
    }
    _open() {
      var k = this.kind, s = this._split(), pop = h('div', { class: 'ui-dt-pop ui-glass', role: 'dialog' }), self = this;
      if (k !== 'time') {
        var cal = h('ui-calendar', { mode: k === 'range' ? 'range' : 'single', 'no-events': '', compact: '' }); if (this.min) cal.setAttribute('min', this.min); if (this.max) cal.setAttribute('max', this.max);
        cal.setAttribute('value', k === 'range' ? (s.start ? s.start + (s.end ? '/' + s.end : '') : '') : s.date || '');
        cal.addEventListener('ui-select', function (e) { e.stopPropagation(); var d = e.detail; if (k === 'range') { if (d.complete) self._commit(d.start + '/' + d.end, true); } else if (k === 'datetime') { s.date = d.value; self._commit(s.date + 'T' + (s.time || '00:00')); } else self._commit(d.value, true); });
        pop.append(cal);
      }
      if (k === 'time' || k === 'datetime') this._timeCols(s.time, function (t) { if (k === 'time') self._commit(t); else { s.time = t; self._commit((s.date || M.format.iso(new Date())) + 'T' + t); } }).forEach(function (c) { pop.append(c); });
      this._btn.setAttribute('aria-expanded', 'true');
      this._h = M.overlay.open(pop, { anchor: this._btn, layer: 'popover', trapFocus: false, onClose: function () { self._btn.setAttribute('aria-expanded', 'false'); } });
    }
    _paint() { var t = this._text(); this._val.textContent = t || this.placeholder; this._val.classList.toggle('ui-ph', !t); this._val.classList.toggle('ph', !t); }
    unbind() { if (this._h && !this._h.closed) this._h.close(); }
    update() { this._btn.disabled = this.disabled; var ic = this._btn.querySelector('ui-icon'); ic.setAttribute('name', this.kind === 'time' ? 'clock' : 'calendar'); this._paint(); this._parts.sync(); }
  }
  M.define('ui-date-time-field', DateTimeField, { group: G, desc: 'Generic date/time picker (kind: date | range | time | datetime).', events: ['ui-change'] });
  M.alias('ui-date-picker', DateTimeField, { kind: 'date' }, { desc: 'Date picker with calendar popover.' });
  M.alias('ui-date-range-picker', DateTimeField, { kind: 'range', placeholder: 'Selecionar período…' }, { desc: 'Date range picker.' });
  M.alias('ui-time-picker', DateTimeField, { kind: 'time', placeholder: 'Selecionar hora…' }, { desc: 'Time picker with hour/minute columns.' });
  M.alias('ui-datetime-picker', DateTimeField, { kind: 'datetime', placeholder: 'Selecionar data e hora…' }, { desc: 'Date + time picker.' });

  /* ----- File upload ----- */
  class FileUpload extends FieldElement {
    static props = { accept: { doc: 'Comma separated mime/extension list' }, multiple: { type: 'boolean' }, maxSize: { type: 'number', default: 0, doc: 'Max size in MB (0 = no limit)' }, upload: { type: 'any', doc: 'async (file, onProgress) => void — defaults to a simulated uploader' }, auto: { type: 'boolean', doc: 'Upload immediately after selection' }, compact: { type: 'boolean' }, text: { default: 'Arraste arquivos aqui ou clique para escolher' } };
    build() {
      this._dz = h('div', { class: 'ui-dz', tabindex: '0', role: 'button', 'aria-label': 'Escolher arquivos' }, h('ui-icon', { name: 'upload' }), this._tx = h('div'), this._sub = h('div', { class: 'ui-fld-msg', style: { margin: '0' } }));
      this._list = h('ul', { class: 'ui-up-list' }); this.files = [];
      this._parts = M.fieldShell(this, h('div', null, this._dz, this._list)); this.append(this._parts.wrap);
      this._dz.addEventListener('click', () => this.pick()); this._dz.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.pick(); } });
      M.dnd.dropTarget(this._dz, { accept: true, onDrop: (d, e) => { var fs = Array.prototype.map.call(e.dataTransfer.files || [], function (f) { return { name: f.name, size: f.size, type: f.type, handle: f }; }); if (fs.length) this.add(fs); } });
      this._list.addEventListener('click', (e) => { var b = e.target.closest('[data-rm]'); if (b) this.remove(b.getAttribute('data-rm')); });
    }
    pick() { if (this.disabled) return; M.Platform.dialogs.openFile({ multiple: this.multiple, accept: this.accept ? this.accept.split(',').map(function (x) { return x.trim(); }) : undefined }).then((fs) => { if (fs && fs.length) this.add(fs); }, (e) => M.toast.danger(e.message)); }
    add(list) {
      var maxB = this.maxSize * 1048576, acc = this.accept ? this.accept.split(',').map(function (x) { return x.trim().toLowerCase(); }) : null, rejected = [];
      list.forEach((f) => {
        if (maxB && f.size > maxB) { rejected.push(f.name + ' (muito grande)'); return; }
        if (acc && !acc.some(function (a) { return a.charAt(0) === '.' ? f.name.toLowerCase().endsWith(a) : a.endsWith('/*') ? (f.type || '').indexOf(a.slice(0, -1)) === 0 : f.type === a; })) { rejected.push(f.name + ' (tipo não permitido)'); return; }
        var item = { id: U.uid('f'), name: f.name, size: f.size, type: f.type, handle: f.handle, progress: 0, status: 'ready' };
        if (!this.multiple) this.files = []; this.files.push(item); if (this.auto) this.start(item.id);
      });
      if (rejected.length) { this._msg = 'Rejeitado: ' + rejected.join(', '); } else this._msg = ''; this._renderList(); this._parts.sync(); this.emit('files-change', { files: this.files.slice(), rejected });
    }
    remove(id) { this.files = this.files.filter(function (f) { return f.id !== id; }); this._renderList(); this.emit('files-change', { files: this.files.slice() }); }
    start(id) {
      var items = id ? this.files.filter(function (f) { return f.id === id; }) : this.files.filter(function (f) { return f.status === 'ready'; });
      var up = this.upload || function (f, p) { return new Promise(function (res, rej) { var n = 0; var t = setInterval(function () { n += 8 + Math.random() * 14; p(Math.min(100, n)); if (n >= 100) { clearInterval(t); res(); } }, 120); }); };
      items.forEach((f) => { f.status = 'uploading'; this._renderList(); Promise.resolve(up(f, (pc) => { f.progress = pc; this.emit('progress', { file: f, progress: pc }); this._updateRow(f); })).then(() => { f.status = 'done'; f.progress = 100; this._renderList(); this.emit('complete', { file: f }); }, (e) => { f.status = 'error'; f.error = e && e.message; this._renderList(); this.emit('upload-error', { file: f }); }); });
    }
    _updateRow(f) { var r = this._list.querySelector('[data-id="' + f.id + '"] ui-progress'); if (r) r.value = f.progress; }
    getValue() { return this.files; }
    _renderList() {
      this._list.innerHTML = '';
      this.files.forEach((f) => { this._list.append(h('li', { class: 'ui-up-item', 'data-id': f.id }, h('ui-icon', { name: f.type && f.type.indexOf('image') === 0 ? 'image' : 'file' }), h('div', null, h('div', null, f.name), h('div', { class: 'meta' }, M.format.bytes(f.size) + ' · ' + ({ ready: 'pronto', uploading: 'enviando…', done: 'concluído', error: 'erro' }[f.status]))), h('ui-button', { variant: 'toolbar', size: 'sm', icon: 'x', 'data-rm': f.id, 'aria-label': 'Remover ' + f.name }), f.status === 'uploading' || f.status === 'done' ? h('ui-progress', { value: f.progress, variant: f.status === 'done' ? 'success' : '' }) : null)); });
      this._parts.sync();
    }
    update() { this._tx.textContent = this.text; this._sub.textContent = [this.accept, this.maxSize ? 'até ' + this.maxSize + ' MB' : ''].filter(Boolean).join(' · '); this._sub.hidden = !this._sub.textContent; this._dz.setAttribute('aria-disabled', String(this.disabled)); this._parts.sync(); }
  }
  M.define('ui-file-upload', FileUpload, { group: G, desc: 'Drag & drop upload with validation and progress. File selection goes through Platform.dialogs.openFile; the uploader is pluggable.', events: ['ui-files-change', 'ui-progress', 'ui-complete'], methods: ['pick()', 'add(files)', 'remove(id)', 'start(id?)'] });
  M.alias('ui-file-picker', FileUpload, { compact: true, text: 'Escolher arquivo…' }, { desc: 'Compact file chooser.' });
  M.alias('ui-drag-drop-upload', FileUpload, { multiple: true, auto: true }, { desc: 'Multi-file drop zone with automatic upload.' });
});

/* ---- MODULE: src/components/forms/forms.js ---- */
MiniUI.module('src/components/forms/forms.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Forms';

  class Form extends UIElement {
    static props = { loading: { type: 'boolean', doc: 'Disables fields while submitting' }, validateOn: { default: 'blur', doc: 'blur|submit' } };
    build() { this._f = h('form', { class: 'ui-own', novalidate: '' }, this.slotted); this.append(this._f);
      this._f.addEventListener('submit', (e) => { e.preventDefault(); this.submit(); }); this._f.addEventListener('reset', (e) => { e.preventDefault(); this.reset(); }); }
    fields() {
      var root = this._f, pass = { 'ui-form-field': 1, 'ui-form-group': 1, 'ui-input-group': 1, 'ui-stack': 1, 'ui-hstack': 1, 'ui-vstack': 1, 'ui-grid': 1 };
      return Array.prototype.filter.call(root.querySelectorAll('[name]'), function (f) {
        for (var a = f.parentElement; a && a !== root; a = a.parentElement) if (a.localName.indexOf('ui-') === 0 && !pass[a.localName]) return false;
        return true;
      });
    }
    get values() {
      var out = {}; this.fields().forEach(function (f) {
        var n = f.getAttribute('name'); if (f.type === 'radio') { if (f.checked) out[n] = f.value; return; } if (f.type === 'checkbox' && f.tagName === 'INPUT') { out[n] = f.checked; return; }
        if (f.tagName.indexOf('-') > -1) { out[n] = f.getValue ? f.getValue() : f.value; if (f.localName === 'ui-file-upload') out[n] = f.files.map(function (x) { return x.name; }); } else out[n] = f.value;
      }); return out;
    }
    set values(o) { this.fields().forEach(function (f) { var n = f.getAttribute('name'); if (n in o) { if (f.type === 'checkbox' && f.tagName === 'INPUT') f.checked = !!o[n]; else if (f.localName === 'ui-checkbox' || f.localName === 'ui-switch') f.checked = !!o[n]; else f.value = o[n]; } }); }
    validate() {
      var bad = [], first = null; this.fields().forEach(function (f) { if (typeof f.validate === 'function') { if (!f.validate()) { bad.push({ name: f.getAttribute('name'), message: f.validationMessage || 'Inválido', el: f }); if (!first) first = f; } } });
      this.errors = bad; if (first && first.focus) first.focus(); return !bad.length;
    }
    submit() {
      if (this.loading) return false;
      if (!this.validate()) { this.emit('invalid-submit', { errors: this.errors.map(function (e) { return { name: e.name, message: e.message }; }) }); M.a11y.announce('Formulário com ' + this.errors.length + ' erro(s)', 'assertive'); return false; }
      var detail = { values: this.values, done: () => { this.loading = false; } };
      if (this.emit('submit', detail, { cancelable: true })) { /* default: nothing */ } return true;
    }
    reset() { this.fields().forEach(function (f) { if (typeof f.reset === 'function') f.reset(); else if (f.tagName === 'INPUT') { f.value = ''; f.checked = false; } }); this.emit('reset'); }
    setErrors(map) { this.fields().forEach(function (f) { var n = f.getAttribute('name'); if (n in map) f.error = map[n]; }); }
    update() { this.setAttribute('aria-busy', String(this.loading)); this.fields().forEach((f) => { if ('disabled' in f && f.localName.indexOf('ui-') === 0) { if (this.loading) { f._wasDisabled = f.disabled; f.disabled = true; } else if (f._wasDisabled !== undefined) { f.disabled = f._wasDisabled; delete f._wasDisabled; } } }); }
  }
  M.define('ui-form', Form, { group: G, desc: 'Form container: collects named controls, validates, serialises, handles submit/reset/loading and server errors.', events: ['ui-submit (cancelable)', 'ui-invalid-submit', 'ui-reset'], methods: ['validate()', 'submit()', 'reset()', 'setErrors({name:msg})', 'values'] });

  class FormField extends UIElement {
    static props = { label: {}, description: {}, error: {}, required: { type: 'boolean' } };
    build() { this._l = h('label', { class: 'ui-own ui-ff-lbl' }); this._d = h('div', { class: 'ui-own ui-fld-msg' }); this._e = h('div', { class: 'ui-own ui-fld-msg ui-fld-err', role: 'alert' }); this._d.style.marginTop = '4px'; var c = this.slotted; this._wrap = h('div', { class: 'ui-own' }, c); this.prepend(this._l); this.append(this._wrap, this._d, this._e); }
    update() { this._l.textContent = this.label || ''; this._l.hidden = !this.label; if (this.required && this.label) this._l.append(h('span', { class: 'ui-ff-req' }, '*')); this._d.textContent = this.description || ''; this._d.hidden = !this.description || !!this.error; this._e.textContent = this.error || ''; this._e.hidden = !this.error; var ctl = this._wrap.querySelector('input,select,textarea,button'); if (ctl) { ctl.id = ctl.id || U.uid('ff'); this._l.htmlFor = ctl.id; ctl.setAttribute('aria-invalid', String(!!this.error)); } }
  }
  M.define('ui-form-field', FormField, { group: G, desc: 'Wraps any control with label, description and error message.' });
  class FormGroup extends UIElement { static props = { heading: {}, description: {} }; build() { this._h = h('div', { class: 'ui-own ui-fg-h' }); this._d = h('div', { class: 'ui-own ui-fg-d' }); this.prepend(this._h, this._d); this.setAttribute('role', 'group'); } update() { this._h.textContent = this.heading || ''; this._h.hidden = !this.heading; this._d.textContent = this.description || ''; this._d.hidden = !this.description; if (this.heading) this.setAttribute('aria-label', this.heading); } }
  M.define('ui-form-group', FormGroup, { group: G, desc: 'Titled group of fields (fieldset).' });
  ['label', 'description', 'error'].forEach(function (k) { M.define('ui-form-' + k, class extends UIElement { update() { if (k === 'error') this.setAttribute('role', 'alert'); } }, { group: G, desc: 'Styled form ' + k + ' text.' }); });
  M.define('ui-input-group', class extends UIElement {}, { group: G, desc: 'Joins inputs, buttons and addons into one control.' });
  M.define('ui-input-addon', class extends UIElement {}, { group: G, desc: 'Static text/icon attached to an input group.' });

  class FormValidation extends UIElement {
    static props = { for: { doc: 'id of the ui-form to observe' } };
    build() { this._box = h('div', { class: 'ui-own ui-fv', role: 'alert' }); this._box.hidden = true; this.append(this._box); }
    bind() { var f = document.getElementById(this.for) || this.closest('ui-form'); if (!f) return; this.listen(f, 'ui-invalid-submit', (e) => { var errs = e.detail.errors; this._box.innerHTML = ''; this._box.append(h('strong', null, 'Corrija os campos abaixo:'), h('ul', null, errs.map(function (x) { return h('li', null, (x.name || 'campo') + ': ' + x.message); }))); this._box.hidden = false; }); this.listen(f, 'ui-submit', () => { this._box.hidden = true; }); this.listen(f, 'ui-reset', () => { this._box.hidden = true; }); }
  }
  M.define('ui-form-validation', FormValidation, { group: G, desc: 'Error summary bound to a ui-form.' });
});

/* ---- MODULE: src/components/layouts/layouts.js ---- */
MiniUI.module('src/components/layouts/layouts.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Layouts';
  var AL = { start: 'flex-start', end: 'flex-end', center: 'center', stretch: 'stretch', between: 'space-between', around: 'space-around', evenly: 'space-evenly', baseline: 'baseline' };
  function setVar(el, k, v) { v == null || v === '' ? el.style.removeProperty(k) : el.style.setProperty(k, v); }

  class Stack extends UIElement {
    static props = { gap: { doc: 'Spacing token 0–12 or CSS length' }, align: { doc: 'start|center|end|stretch|baseline' }, justify: { doc: 'start|center|end|between|around|evenly' }, wrap: { type: 'boolean' }, padding: {}, direction: { doc: 'row|column' } };
    update() { setVar(this, '--ui-gap', U.space(this.gap)); setVar(this, '--ui-align', AL[this.align] || this.align); setVar(this, '--ui-justify', AL[this.justify] || this.justify); setVar(this, '--ui-wrap', this.wrap ? 'wrap' : ''); setVar(this, '--ui-pad', U.space(this.padding)); setVar(this, '--ui-dir', this.direction); }
  }
  M.define('ui-stack', Stack, { group: G, desc: 'Flex stack (column by default) with gap, alignment and distribution.' });
  M.define('ui-vstack', class extends Stack {}, { group: G, desc: 'Vertical stack.' }); M.define('ui-hstack', class extends Stack {}, { group: G, desc: 'Horizontal stack.' });
  M.define('ui-flex', class extends Stack {}, { group: G, desc: 'Generic flex container (row).' });
  class Grid extends UIElement {
    static props = { columns: { doc: 'Number of columns or CSS template' }, min: { doc: 'Min column width for auto-fit, e.g. 240px' }, gap: {}, padding: {}, align: {} };
    update() { var c = this.columns; setVar(this, '--ui-cols', c ? (/^\d+$/.test(c) ? 'repeat(' + c + ', minmax(0, 1fr))' : c) : this.min ? 'repeat(auto-fit, minmax(' + this.min + ', 1fr))' : ''); setVar(this, '--ui-gap', U.space(this.gap)); setVar(this, '--ui-pad', U.space(this.padding)); setVar(this, '--ui-align', AL[this.align] || this.align); }
  }
  M.define('ui-grid', Grid, { group: G, desc: 'CSS grid with column count or responsive auto-fit.' });
  class Box extends UIElement { static props = { padding: {}, radius: {}, bg: { doc: 'Token name: surface, surface-2, bg-content…' }, border: { type: 'boolean' } }; update() { setVar(this, '--ui-pad', U.space(this.padding)); setVar(this, '--ui-radius', /^(xs|sm|md|lg|xl|full)$/.test(this.radius) ? 'var(--ui-radius-' + this.radius + ')' : this.radius); setVar(this, '--ui-box-bg', this.bg ? 'var(--ui-' + this.bg + ')' : ''); } }
  M.define('ui-box', Box, { group: G, desc: 'Generic box with padding, radius and background tokens.' });
  class Container extends UIElement { static props = { maxWidth: { default: '' }, padding: {} }; update() { setVar(this, '--ui-maxw', this.maxWidth); setVar(this, '--ui-pad', U.space(this.padding)); } }
  M.define('ui-container', Container, { group: G, desc: 'Centered max-width container.' });
  M.define('ui-center', class extends UIElement {}, { group: G, desc: 'Centers its content both axes.' });
  M.alias('ui-center-layout', customElements.get('ui-center'), {}, { desc: 'Alias of ui-center.' });
  M.define('ui-surface', class extends UIElement { static props = { elevation: { default: 'low', reflect: true, doc: 'none|low|medium|high' } }; }, { group: G, desc: 'Elevated surface.' });
  class Card extends UIElement { static props = { heading: {}, elevation: { default: 'low', reflect: true }, interactive: { type: 'boolean' }, flat: { type: 'boolean' } }; build() { if (this.heading && !this.querySelector(':scope > ui-card-header')) { this.prepend(this._hd = h('ui-card-header', { class: 'ui-own' })); } } update() { if (this._hd) this._hd.textContent = this.heading; if (this.interactive) { this.tabIndex = 0; this.setAttribute('role', 'button'); this.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.click(); } }; } } }
  M.define('ui-card', Card, { group: G, desc: 'Card container. Compose with ui-card-header / ui-card-body / ui-card-footer or use `heading`.' });
  ['header', 'body', 'footer'].forEach(function (p) { M.define('ui-card-' + p, class extends UIElement {}, { group: G, desc: 'Card ' + p + ' region.' }); });
  M.define('ui-well', class extends UIElement {}, { group: G, desc: 'Inset container.' });
  class Section extends UIElement { static props = { heading: {}, description: {} }; build() { this.prepend(this._h = h('h3', { class: 'ui-own ui-sec-h' }), this._d = h('p', { class: 'ui-own ui-sec-d' })); } update() { this._h.textContent = this.heading || ''; this._h.hidden = !this.heading; this._d.textContent = this.description || ''; this._d.hidden = !this.description; } }
  M.define('ui-section', Section, { group: G, desc: 'Titled content section.' });
  class ScrollArea extends UIElement {
    static props = { maxHeight: {}, shadows: { type: 'boolean', doc: 'Show edge shadows when scrollable' } };
    bind() { if (this.shadows) { var f = () => { this.toggleAttribute('data-top', this.scrollTop > 2); this.toggleAttribute('data-bottom', this.scrollTop + this.clientHeight < this.scrollHeight - 2); }; this.listen(this, 'scroll', f, { passive: true }); this.observeResize(f); f(); } this.tabIndex = this.scrollHeight > this.clientHeight ? 0 : -1; }
    update() { setVar(this, '--ui-maxh', this.maxHeight); }
  }
  M.define('ui-scroll-area', ScrollArea, { group: G, desc: 'Scrollable region with themed scrollbars and optional edge shadows.' });
  M.alias('ui-scroll-container', ScrollArea, {}, { desc: 'Alias of ui-scroll-area.' });
  M.define('ui-sticky', class extends UIElement { static props = { top: { default: '0' } }; update() { setVar(this, '--ui-top', /^\d+$/.test(this.top) ? this.top + 'px' : this.top); } }, { group: G, desc: 'Sticky positioned container.' });
  M.define('ui-masonry', class extends UIElement { static props = { columns: { type: 'number', default: 3 }, gap: {} }; update() { setVar(this, '--ui-cols', this.columns); setVar(this, '--ui-gap', U.space(this.gap)); } }, { group: G, desc: 'Masonry columns layout.' });
  M.alias('ui-masonry-grid', customElements.get('ui-masonry'), {}, { desc: 'Alias of ui-masonry.' }); M.alias('ui-masonry-gallery', customElements.get('ui-masonry'), {}, { desc: 'Masonry for images.' });
  M.alias('ui-aspect-ratio-container', customElements.get('ui-aspect-ratio'), {}, { desc: 'Alias of ui-aspect-ratio.' });
  M.alias('ui-sticky-container', customElements.get('ui-sticky'), {}, { desc: 'Alias.' });
  M.alias('ui-divider-group', Stack, { gap: '0' }, { desc: 'Stack whose children are separated by dividers (add ui-divider between).' });
  M.alias('ui-fieldset', customElements.get('ui-form-group') || Stack, {}, { desc: 'Alias of ui-form-group.' });

  /** Resizable multi-pane splitter. Drag or use arrow keys on the handle. */
  class Split extends UIElement {
    static props = { direction: { default: 'horizontal', reflect: true }, sizes: { type: 'any', doc: 'Relative sizes e.g. [1,2]' }, min: { type: 'number', default: 80 }, persist: { doc: 'Storage key to remember sizes' } };
    static observeChildren = true;
    panes() { return Array.prototype.filter.call(this.children, function (c) { return !c.classList.contains('ui-split-handle'); }); }
    update() {
      Array.prototype.forEach.call(this.querySelectorAll(':scope > .ui-split-handle'), function (x) { x.remove(); });
      var p = this.panes(), v = this.direction === 'vertical';
      if (!this._sz || this._sz.length !== p.length) this._sz = (Array.isArray(this.sizes) && this.sizes.length === p.length ? this.sizes : p.map(function () { return 1; })).slice();
      p.forEach((pane, i) => { pane.style.flex = this._sz[i] + ' 1 0px'; if (i < p.length - 1) { var hd = h('div', { class: 'ui-own ui-split-handle', role: 'separator', tabindex: '0', 'aria-orientation': v ? 'horizontal' : 'vertical', 'aria-label': 'Redimensionar painéis' }); pane.after(hd); this._wire(hd, i); } });
      if (this.persist && !this._loaded) { this._loaded = true; M.Storage.get('split:' + this.persist).then((s) => { if (Array.isArray(s) && s.length === this.panes().length) { this._sz = s; this.panes().forEach((pn, i) => { pn.style.flex = s[i] + ' 1 0px'; }); } }); }
    }
    _wire(hd, i) {
      var v = this.direction === 'vertical', self = this, px, total;
      var apply = function (a, b) { var p = self.panes(); self._sz = p.map(function (pn, k) { return k === i ? a : k === i + 1 ? b : (v ? pn.offsetHeight : pn.offsetWidth); }); p.forEach(function (pn, k) { pn.style.flex = self._sz[k] + ' 1 0px'; }); self.emit('resize', { sizes: self._sz.slice() }); };
      M.drag.track(hd, { onStart: function () { var p = self.panes(); px = [v ? p[i].offsetHeight : p[i].offsetWidth, v ? p[i + 1].offsetHeight : p[i + 1].offsetWidth]; total = px[0] + px[1]; hd.classList.add('dragging'); }, onMove: function (dx, dy) { var d = v ? dy : dx, a = U.clamp(px[0] + d, self.min, total - self.min); apply(a, total - a); }, onEnd: function () { hd.classList.remove('dragging'); if (self.persist) M.Storage.set('split:' + self.persist, self._sz); self.emit('resize-end', { sizes: self._sz.slice() }); } });
      hd.addEventListener('keydown', function (e) { var k = v ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight']; var dir = e.key === k[0] ? -1 : e.key === k[1] ? 1 : 0; if (!dir) return; e.preventDefault(); var p = self.panes(), a0 = v ? p[i].offsetHeight : p[i].offsetWidth, b0 = v ? p[i + 1].offsetHeight : p[i + 1].offsetWidth, a = U.clamp(a0 + dir * 24, self.min, a0 + b0 - self.min); apply(a, a0 + b0 - a); });
    }
  }
  M.define('ui-split', Split, { group: G, desc: 'Resizable split panes (horizontal/vertical) with keyboard support and persisted sizes.', events: ['ui-resize', 'ui-resize-end'] });
  M.alias('ui-splitter', Split, {}, { desc: 'Alias of ui-split.' }); M.alias('ui-split-layout', Split, {}, { desc: 'Alias of ui-split.' }); M.alias('ui-panel-group', Split, {}, { desc: 'Alias of ui-split.' });

  class ResizeHandle extends UIElement {
    static props = { axis: { default: 'both', doc: 'x|y|both' } };
    build() { this.innerHTML = M.icon('resize', { size: '14px' }); this.setAttribute('role', 'separator'); this.tabIndex = 0; M.drag.track(this, { onStart: () => { this.emit('resize-start', {}); }, onMove: (dx, dy) => this.emit('resize', { dx: this.axis === 'y' ? 0 : dx, dy: this.axis === 'x' ? 0 : dy }), onEnd: () => this.emit('resize-end', {}) }); }
  }
  M.define('ui-resize-handle', ResizeHandle, { group: G, desc: 'Generic resize handle emitting ui-resize {dx, dy}.' });
  class DragHandle extends UIElement { build() { this.innerHTML = M.icon('move', { size: '14px' }); this.setAttribute('aria-hidden', 'true'); } }
  M.define('ui-drag-handle', DragHandle, { group: G, desc: 'Visual grip used to start dragging.' });
  class ResizablePanel extends UIElement {
    static props = { width: { type: 'number', default: 240 }, min: { type: 'number', default: 140 }, max: { type: 'number', default: 640 }, edge: { default: 'right', reflect: true } };
    build() { this._hd = h('div', { class: 'ui-own ui-rp-h', role: 'separator', tabindex: '0', 'aria-orientation': 'vertical', 'aria-label': 'Redimensionar painel' }); this.append(this._hd); var w0;
      M.drag.track(this._hd, { onStart: () => { w0 = this.width; }, onMove: (dx) => { this.width = U.clamp(w0 + (this.edge === 'left' ? -dx : dx), this.min, this.max); this.emit('resize', { width: this.width }); } });
      this._hd.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); this.width = U.clamp(this.width + (e.key === 'ArrowRight' ? 20 : -20) * (this.edge === 'left' ? -1 : 1), this.min, this.max); this.emit('resize', { width: this.width }); } }); }
    update() { this.style.setProperty('--ui-w', this.width + 'px'); }
  }
  M.define('ui-resizable-panel', ResizablePanel, { group: G, desc: 'Panel with a draggable edge.', events: ['ui-resize'] });

  class Collapsible extends UIElement {
    static props = { heading: {}, open: { type: 'boolean' } };
    build() { var c = this.slotted; this._b = h('div', { class: 'ui-own ui-co-b', role: 'region' }, c); this._h = h('button', { class: 'ui-own ui-co-h', type: 'button', 'aria-expanded': 'false' }, h('ui-icon', { name: 'chevron-right' }), this._t = h('span')); this._b.id = U.uid('co'); this._h.setAttribute('aria-controls', this._b.id); this.append(this._h, this._b); this._b.hidden = !this.open; this._h.addEventListener('click', () => { if (this.emit('toggle', { open: !this.open }, { cancelable: true })) this.open = !this.open; }); }
    propChanged(n, v) { if (n === 'open' && this._built) { this._h.setAttribute('aria-expanded', String(v)); v ? M.anim.expand(this._b) : M.anim.collapse(this._b); } }
    update() { this._t.textContent = this.heading || ''; this._h.setAttribute('aria-expanded', String(this.open)); if (this._b.hidden === this.open && !this._animating) this._b.hidden = !this.open; }
  }
  M.define('ui-collapsible', Collapsible, { group: G, desc: 'Collapsible panel with animated expand/collapse.', events: ['ui-toggle'] });
  M.alias('ui-disclosure', Collapsible, {}, { desc: 'Alias of ui-collapsible.' }); M.alias('ui-collapsible-panel', Collapsible, {}, { desc: 'Alias.' });
  class Accordion extends UIElement {
    static props = { single: { type: 'boolean', doc: 'Only one disclosure open at a time' } };
    bind() { this.listen(this, 'ui-toggle', (e) => { if (this.single && e.detail.open) Array.prototype.forEach.call(this.querySelectorAll(':scope > ui-disclosure[open], :scope > ui-collapsible[open]'), function (d) { if (d !== e.target) d.open = false; }); }); }
  }
  M.define('ui-accordion', Accordion, { group: G, desc: 'Group of ui-disclosure items (optionally exclusive).' });
  M.alias('ui-accordion-navigation', Accordion, { single: true }, { desc: 'Exclusive accordion used as navigation.' });

  class Expandable extends UIElement {
    static props = { lines: { type: 'number', default: 3 }, moreLabel: { default: 'Mostrar mais' }, lessLabel: { default: 'Mostrar menos' }, expanded: { type: 'boolean' } };
    build() { this._b = h('div', { class: 'ui-own ui-ex-b' }, this.slotted); this._t = h('ui-button', { class: 'ui-own', variant: 'link', size: 'sm' }); this.append(this._b, this._t); this._t.addEventListener('click', () => { this.expanded = !this.expanded; this.emit('toggle', { expanded: this.expanded }); }); }
    bind() { this.observeResize(() => this._measure(), this._b); }
    _measure() { var lh = parseFloat(getComputedStyle(this._b).lineHeight) || 18, max = lh * this.lines; if (!this._full) this._full = this._b.scrollHeight; var over = this._b.scrollHeight > max + 2 || this._full > max + 2; this._t.hidden = !over; this._over = over; this.update(); }
    update() { var lh = parseFloat(getComputedStyle(this._b).lineHeight) || 18; this._b.style.maxHeight = this.expanded || this._over === false ? 'none' : (lh * this.lines) + 'px'; this.toggleAttribute('data-clamped', !this.expanded && !!this._over); this._t.setAttribute('label', this.expanded ? this.lessLabel : this.moreLabel); this._t.textContent = this.expanded ? this.lessLabel : this.moreLabel; if (this._over === undefined) this._measure(); }
  }
  M.define('ui-expandable', Expandable, { group: G, desc: 'Clamps long content with a show more/less toggle.' });
  M.alias('ui-expandable-content', Expandable, {}, { desc: 'Alias.' }); M.alias('ui-read-more', Expandable, { lines: 2 }, { desc: 'ReadMore text clamp.' });

  class Responsive extends UIElement {
    static props = { breakpoints: { type: 'any', default: null, doc: '{ sm: 480, md: 768, lg: 1024 }' } };
    bind() { this.observeResize((r) => this._calc(r.width)); this._calc(this.getBoundingClientRect().width); }
    _calc(w) { var bp = this.breakpoints || { sm: 480, md: 768, lg: 1024, xl: 1280 }, cur = 'xs'; Object.keys(bp).forEach(function (k) { if (w >= bp[k]) cur = k; }); if (cur !== this.getAttribute('data-bp')) { this.setAttribute('data-bp', cur); this.emit('breakpoint', { name: cur, width: w }); } }
  }
  M.define('ui-responsive', Responsive, { group: G, desc: 'Container-query style breakpoints: sets data-bp (xs|sm|md|lg|xl) from its own width.', events: ['ui-breakpoint'] });
  M.alias('ui-responsive-container', Responsive, {}, { desc: 'Alias.' });

  class SidebarLayout extends UIElement {
    static props = { collapsed: { type: 'boolean' }, breakpoint: { type: 'number', default: 640 }, open: { type: 'boolean', doc: 'Sidebar overlay open (compact mode)' } };
    build() { var side = this.slotted.filter(function (n) { return n.getAttribute && n.getAttribute('slot') === 'sidebar'; }); var main = this.slotted.filter(function (n) { return side.indexOf(n) < 0; }); this._s = h('aside', { class: 'ui-own ui-sbl-side' }, side); this._m = h('main', { class: 'ui-own ui-sbl-main' }, main); this.append(this._s, this._m); this._m.addEventListener('click', () => { if (this.hasAttribute('data-compact') && this.open) this.open = false; }); }
    bind() { this.observeResize((r) => { this.toggleAttribute('data-compact', r.width < this.breakpoint); }); this.toggleAttribute('data-compact', this.getBoundingClientRect().width < this.breakpoint); }
    toggle() { if (this.hasAttribute('data-compact')) this.open = !this.open; else this.collapsed = !this.collapsed; this.emit('toggle', { collapsed: this.collapsed, open: this.open }); }
    update() { this.toggleAttribute('data-open', this.open); }
  }
  M.define('ui-sidebar-layout', SidebarLayout, { group: G, desc: 'Sidebar + content layout. Sidebar collapses to an overlay when the container is narrow. Put sidebar children in slot="sidebar".', methods: ['toggle()'] });
  class MasterDetail extends UIElement {
    static props = { detail: { type: 'boolean', doc: 'Show detail pane (compact mode)' }, breakpoint: { type: 'number', default: 640 } };
    build() { var m = this.slotted.filter(function (n) { return n.getAttribute && n.getAttribute('slot') === 'master'; }); var d = this.slotted.filter(function (n) { return m.indexOf(n) < 0; }); this._m = h('div', { class: 'ui-own ui-md-master' }, m); this._d = h('div', { class: 'ui-own ui-md-detail' }, d); this.append(this._m, this._d); }
    bind() { this.observeResize((r) => this.toggleAttribute('data-compact', r.width < this.breakpoint)); this.toggleAttribute('data-compact', this.getBoundingClientRect().width < this.breakpoint); }
    showDetail() { this.detail = true; this.emit('navigate', { pane: 'detail' }); } showMaster() { this.detail = false; this.emit('navigate', { pane: 'master' }); }
  }
  M.define('ui-master-detail', MasterDetail, { group: G, desc: 'List/detail layout that becomes a two-step navigation on narrow containers. Use slot="master".', methods: ['showDetail()', 'showMaster()'] });
});

/* ---- MODULE: src/components/navigation/navigation.js ---- */
MiniUI.module('src/components/navigation/navigation.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Navigation';

  class SidebarItem extends UIElement { static props = { id: {}, label: {}, icon: {}, badge: {}, disabled: { type: 'boolean' } }; }
  class SidebarGroup extends UIElement { static props = { label: {}, collapsible: { type: 'boolean' } }; }
  M.define('ui-sidebar-item', SidebarItem, { group: G, desc: 'Declarative sidebar entry (data element).' }); M.define('ui-sidebar-group', SidebarGroup, { group: G, desc: 'Declarative sidebar group (data element).' });

  class Sidebar extends UIElement {
    static props = { items: { type: 'any', doc: 'Array of {id,label,icon,badge,disabled} or groups {group,label,items:[...],collapsible}' }, value: { doc: 'Selected item id' }, compact: { type: 'boolean', doc: 'Icon-only rail' }, variant: { default: '', reflect: true } };
    static observeChildren = true;
    build() { this._nav = h('nav', { class: 'ui-own', 'aria-label': 'Navegação lateral' }); this.append(this._nav); this._closed = {};
      this._nav.addEventListener('click', (e) => { var b = e.target.closest('[data-id]'); if (b && !b.disabled) { this._select(b.getAttribute('data-id')); return; } var g = e.target.closest('[data-g]'); if (g) { var k = g.getAttribute('data-g'); this._closed[k] = !this._closed[k]; this.update(); } }); }
    _data() {
      if (Array.isArray(this.items) && this.items.length) return this.items;
      var out = []; Array.prototype.forEach.call(this.children, function (c) { if (c.localName === 'ui-sidebar-group') out.push({ group: true, label: c.getAttribute('label'), collapsible: c.hasAttribute('collapsible'), items: Array.prototype.map.call(c.querySelectorAll('ui-sidebar-item'), itm) }); else if (c.localName === 'ui-sidebar-item') out.push(itm(c)); });
      function itm(c) { return { id: c.getAttribute('id') || c.getAttribute('label'), label: c.getAttribute('label') || c.textContent.trim(), icon: c.getAttribute('icon'), badge: c.getAttribute('badge'), disabled: c.hasAttribute('disabled') }; } return out;
    }
    _select(id) { if (id === this.value) return; var item = this._flat().filter(function (i) { return i.id === id; })[0]; if (this.emit('select', { id: id, item: item }, { cancelable: true })) { this.value = id; } }
    _flat() { var f = []; this._data().forEach(function (d) { if (d.group || d.items) f = f.concat(d.items); else f.push(d); }); return f; }
    bind() { this._rv = M.a11y.roving(this._nav, { selector: '.ui-sb-item', orientation: 'vertical' }); }
    unbind() { this._rv && this._rv(); }
    update() {
      var nav = this._nav; nav.innerHTML = '';
      var item = (it) => h('button', { class: 'ui-sb-item', type: 'button', 'data-id': it.id, 'aria-current': it.id === this.value ? 'page' : null, disabled: it.disabled, title: this.compact ? it.label : null, tabindex: it.id === this.value ? 0 : -1 }, it.icon ? h('ui-icon', { name: it.icon }) : null, h('span', { class: 'lbl' }, it.label), it.badge ? h('ui-badge', { variant: 'primary' }, it.badge) : null);
      this._data().forEach((d, gi) => { if (d.group || d.items) { var key = d.label || gi, closed = d.collapsible && this._closed[key]; nav.append(d.collapsible ? h('button', { class: 'ui-sb-group-h', type: 'button', 'data-g': key, 'aria-expanded': String(!closed) }, h('span', null, d.label), h('ui-icon', { name: closed ? 'chevron-right' : 'chevron-down' })) : h('div', { class: 'ui-sb-group-h' }, h('span', null, d.label))); if (!closed) d.items.forEach((i) => nav.append(item(i))); } else nav.append(item(d)); });
      if (!nav.querySelector('[tabindex="0"]')) { var f = nav.querySelector('.ui-sb-item'); if (f) f.tabIndex = 0; }
    }
  }
  M.define('ui-sidebar', Sidebar, { group: G, desc: 'Source-list sidebar with groups, icons, badges, compact rail mode and keyboard navigation.', events: ['ui-select (cancelable)'] });
  M.alias('ui-navigation-rail', Sidebar, { compact: true }, { desc: 'Icon-only navigation rail.' });

  /* ---------- Tabs ---------- */
  class Tab extends UIElement { static props = { label: {}, icon: {}, value: {}, closable: { type: 'boolean' }, disabled: { type: 'boolean' } }; update() { this.setAttribute('role', 'tabpanel'); } }
  M.define('ui-tab', Tab, { group: G, desc: 'Tab; its children are the panel content.' }); M.alias('ui-tab-panel', Tab, {}, { desc: 'Alias of ui-tab.' });
  class Tabs extends UIElement {
    static props = { value: { doc: 'Active tab value (defaults to first)' }, variant: { default: 'underline', reflect: true, doc: 'underline|segmented|pill|bar' }, orientation: { default: 'horizontal', reflect: true } };
    static observeChildren = true;
    build() { this._tl = h('div', { class: 'ui-own ui-tablist', role: 'tablist' }); this.prepend(this._tl);
      this._tl.addEventListener('click', (e) => { var x = e.target.closest('.ui-tab-x'); var b = e.target.closest('.ui-tab'); if (!b) return; if (x) { this.closeTab(b.getAttribute('data-v')); return; } this.select(b.getAttribute('data-v')); }); }
    tabs() { return Array.prototype.filter.call(this.children, function (c) { return c.localName === 'ui-tab' || c.localName === 'ui-tab-panel'; }); }
    vals() { return this.tabs().map(function (t, i) { return t.getAttribute('value') || t.getAttribute('label') || String(i); }); }
    select(v) { if (v === this.value) return; if (this.emit('change', { value: v, previous: this.value }, { cancelable: true })) this.value = v; }
    closeTab(v) { var t = this.tabs()[this.vals().indexOf(v)]; if (t && this.emit('close', { value: v }, { cancelable: true })) { var vs = this.vals(), i = vs.indexOf(v); t.remove(); if (this.value === v) { var nv = this.vals(); this._p.value = nv[Math.min(i, nv.length - 1)] || ''; } this.update(); } }
    bind() { this._rv = M.a11y.roving(this._tl, { selector: '.ui-tab', orientation: this.orientation === 'vertical' ? 'vertical' : 'horizontal', onMove: (el) => this.select(el.getAttribute('data-v')) }); }
    unbind() { this._rv && this._rv(); }
    update() {
      var tabs = this.tabs(), vals = this.vals(); if (!tabs.length) { this._tl.innerHTML = ''; return; }
      if (vals.indexOf(this.value) < 0) this._p.value = vals[0]; var cur = this.value;
      this._tl.innerHTML = ''; this._tl.setAttribute('aria-orientation', this.orientation);
      tabs.forEach((t, i) => { var on = vals[i] === cur, id = t.id || (t.id = U.uid('tp')); t.hidden = !on; t.setAttribute('aria-labelledby', id + '-t'); t.setAttribute('role', 'tabpanel');
        this._tl.append(h('button', { class: 'ui-tab', type: 'button', role: 'tab', id: id + '-t', 'data-v': vals[i], 'aria-selected': String(on), 'aria-controls': id, tabindex: on ? 0 : -1, disabled: t.hasAttribute('disabled') }, t.getAttribute('icon') ? h('ui-icon', { name: t.getAttribute('icon') }) : null, h('span', null, t.getAttribute('label') || vals[i]), t.hasAttribute('closable') ? h('span', { class: 'ui-tab-x', 'aria-label': 'Fechar aba', role: 'button', '.innerHTML': M.icon('x', { size: '10px', stroke: 2.6 }) }) : null)); });
    }
  }
  M.define('ui-tabs', Tabs, { group: G, desc: 'Tabbed container with underline/segmented/pill/bar variants, closable tabs and arrow-key navigation.', events: ['ui-change (cancelable)', 'ui-close (cancelable)'], methods: ['select(value)', 'closeTab(value)'] });
  M.alias('ui-tab-bar', Tabs, { variant: 'bar' }, { desc: 'Icon tab bar.' });

  class Breadcrumb extends UIElement {
    static props = { items: { type: 'any', doc: 'Array of {label,value,icon} or strings' }, max: { type: 'number', default: 5 } };
    build() { this._ol = h('ol'); this.append(h('nav', { class: 'ui-own', 'aria-label': 'Caminho' }, this._ol)); this._ol.addEventListener('click', (e) => { var b = e.target.closest('[data-i]'); if (!b) return; var i = +b.getAttribute('data-i'), it = this._list()[i]; if (i === -1) return; this.emit('navigate', { index: i, item: it, value: it.value != null ? it.value : it.label }); }); }
    _list() { return (this.items || []).map(function (i) { return typeof i === 'string' ? { label: i } : i; }); }
    update() { var l = this._list(), show = l.map(function (x, i) { return i; }); if (l.length > this.max) show = [0, -1].concat(show.slice(l.length - (this.max - 2))); this._ol.innerHTML = '';
      show.forEach((i) => { if (i === -1) { this._ol.append(h('li', null, h('span', { class: 'ui-bc-b', 'aria-hidden': 'true' }, '…'))); return; } var it = l[i], last = i === l.length - 1; this._ol.append(h('li', null, h('button', { class: 'ui-bc-b', type: 'button', 'data-i': i, 'aria-current': last ? 'page' : null }, it.icon ? h('ui-icon', { name: it.icon }) : null, it.label))); }); }
  }
  M.define('ui-breadcrumb', Breadcrumb, { group: G, desc: 'Breadcrumb trail with automatic collapse.', events: ['ui-navigate'] });
  M.alias('ui-breadcrumb-file-path', Breadcrumb, {}, { desc: 'Breadcrumb for file paths: items from a path string split.' });

  class Pagination extends UIElement {
    static props = { page: { type: 'number', default: 1 }, total: { type: 'number', default: 0, doc: 'Total items' }, pageSize: { type: 'number', default: 10 }, siblings: { type: 'number', default: 1 } };
    get pages() { return Math.max(1, Math.ceil(this.total / this.pageSize)); }
    build() { this.setAttribute('role', 'navigation'); this.setAttribute('aria-label', 'Paginação'); this.addEventListener('click', (e) => { var b = e.target.closest('[data-p]'); if (b && !b.disabled) this.go(+b.getAttribute('data-p')); }); }
    go(p) { p = U.clamp(p, 1, this.pages); if (p === this.page) return; this.page = p; this.emit('change', { page: p, pageSize: this.pageSize, offset: (p - 1) * this.pageSize }); }
    update() {
      var n = this.pages, p = U.clamp(this.page, 1, n), s = this.siblings, set = new Set([1, n]); for (var i = p - s; i <= p + s; i++) if (i >= 1 && i <= n) set.add(i);
      var arr = Array.from(set).sort(function (a, b) { return a - b; }); this.innerHTML = '';
      var btn = (label, pg, o) => h('button', Object.assign({ class: 'ui-pg ui-own', type: 'button', 'data-p': pg }, o), label);
      this.append(btn(h('ui-icon', { name: 'chevron-left' }), p - 1, { disabled: p <= 1, 'aria-label': 'Anterior' }));
      arr.forEach((x, k) => { if (k && x - arr[k - 1] > 1) this.append(h('span', { class: 'ui-pg-gap ui-own' }, '…')); this.append(btn(String(x), x, { 'aria-current': x === p ? 'page' : null, 'aria-label': 'Página ' + x })); });
      this.append(btn(h('ui-icon', { name: 'chevron-right' }), p + 1, { disabled: p >= n, 'aria-label': 'Próxima' }));
    }
  }
  M.define('ui-pagination', Pagination, { group: G, desc: 'Page navigation with ellipsis.', events: ['ui-change'], methods: ['go(page)'] });

  class Stepper extends UIElement {
    static props = { steps: { type: 'any', doc: 'Array of strings or {label,description}' }, current: { type: 'number', default: 0 }, orientation: { default: 'horizontal', reflect: true }, clickable: { type: 'boolean' } };
    build() { this.setAttribute('role', 'list'); this.addEventListener('click', (e) => { var b = e.target.closest('[data-i]'); if (b && this.clickable) { var i = +b.getAttribute('data-i'); if (this.emit('step', { index: i }, { cancelable: true })) this.current = i; } }); }
    update() { this.innerHTML = ''; (this.steps || []).forEach((s, i) => { s = typeof s === 'string' ? { label: s } : s; var st = i < this.current ? 'done' : i === this.current ? 'current' : 'todo'; this.append(h(this.clickable ? 'button' : 'div', { class: 'ui-own ui-st', 'data-s': st, 'data-i': i, role: 'listitem', type: this.clickable ? 'button' : null, 'aria-current': st === 'current' ? 'step' : null }, h('span', { class: 'ui-st-n', '.innerHTML': st === 'done' ? M.icon('check', { size: '14px', stroke: 3 }) : String(i + 1) }), h('span', null, h('div', { class: 'ui-st-t' }, s.label), s.description ? h('div', { class: 'ui-st-d' }, s.description) : null))); }); }
  }
  M.define('ui-stepper', Stepper, { group: G, desc: 'Step progress indicator.', events: ['ui-step (cancelable)'] });
  class Step extends UIElement { static props = { label: {}, description: {} }; }
  M.define('ui-step', Step, { group: G, desc: 'Wizard step; its children are the step content.' });
  class Wizard extends UIElement {
    static props = { current: { type: 'number', default: 0 }, backLabel: { default: 'Voltar' }, nextLabel: { default: 'Continuar' }, finishLabel: { default: 'Concluir' } };
    static observeChildren = true;
    build() { this._st = h('ui-stepper', { class: 'ui-own' }); this._back = h('ui-button', { class: 'ui-own' }); this._next = h('ui-button', { class: 'ui-own', variant: 'primary' }); this._foot = h('div', { class: 'ui-own ui-wz-foot' }, this._back, this._next); this.prepend(this._st); this.append(this._foot);
      this._back.addEventListener('click', () => this.back()); this._next.addEventListener('click', () => this.next()); }
    steps() { return Array.prototype.filter.call(this.children, function (c) { return c.localName === 'ui-step'; }); }
    next() { var n = this.steps().length; if (!this.emit('before-next', { index: this.current }, { cancelable: true })) return false; if (this.current >= n - 1) { this.emit('finish', {}); return true; } this.current++; this.emit('change', { index: this.current }); return true; }
    back() { if (this.current > 0) { this.current--; this.emit('change', { index: this.current }); } }
    update() { var st = this.steps(); this.current = U.clamp(this.current, 0, Math.max(0, st.length - 1)); st.forEach((s, i) => { s.hidden = i !== this.current; }); this._st.steps = st.map(function (s) { return { label: s.getAttribute('label') || '', description: s.getAttribute('description') || '' }; }); this._st.current = this.current;
      this._back.setAttribute('label', this.backLabel); this._back.toggleAttribute('disabled', this.current === 0); this._next.setAttribute('label', this.current >= st.length - 1 ? this.finishLabel : this.nextLabel); }
  }
  M.define('ui-wizard', Wizard, { group: G, desc: 'Multi-step flow with stepper, back/next and a cancelable ui-before-next hook for validation.', events: ['ui-before-next (cancelable)', 'ui-change', 'ui-finish'], methods: ['next()', 'back()'] });

  /* ---------- Tree ---------- */
  class Tree extends UIElement {
    static props = { nodes: { type: 'any', doc: 'Array of {id,label,icon,children,expanded,lazy}' }, selected: {}, load: { type: 'any', doc: 'async (node) => children[] for lazy nodes' }, icons: { type: 'boolean', default: true } };
    build() { this._root = h('ul', { class: 'ui-own', role: 'tree', 'aria-label': 'Árvore' }); this.append(this._root); this._open = new Set();
      this._root.addEventListener('click', (e) => { var li = e.target.closest('li'); if (!li) return; var id = li.getAttribute('data-id'); if (e.target.closest('.ui-tr-caret')) { this.toggle(id); } else { this.select(id); this.emit('activate', { id: id, node: this._find(id) }); } });
      this._root.addEventListener('dblclick', (e) => { var li = e.target.closest('li'); if (li) this.toggle(li.getAttribute('data-id')); });
      this._root.addEventListener('keydown', (e) => this._key(e)); }
    _find(id, list) { list = list || this.nodes || []; for (var i = 0; i < list.length; i++) { if (String(list[i].id) === String(id)) return list[i]; if (list[i].children) { var r = this._find(id, list[i].children); if (r) return r; } } return null; }
    _visible() { return Array.prototype.slice.call(this._root.querySelectorAll('li')).filter(function (l) { return l.offsetParent !== null || l.getClientRects().length; }); }
    _key(e) {
      var li = e.target.closest('li'); if (!li) return; var v = this._visible(), i = v.indexOf(li), id = li.getAttribute('data-id'), node = this._find(id), isParent = !!(node && (node.children || node.lazy));
      var go = (n) => { if (v[n]) { e.preventDefault(); this._focus(v[n]); } };
      switch (e.key) { case 'ArrowDown': go(i + 1); break; case 'ArrowUp': go(i - 1); break; case 'Home': go(0); break; case 'End': go(v.length - 1); break;
        case 'ArrowRight': e.preventDefault(); if (isParent && !this._open.has(id)) this.toggle(id); else go(i + 1); break;
        case 'ArrowLeft': e.preventDefault(); if (isParent && this._open.has(id)) this.toggle(id); else { var par = li.parentElement.closest('li'); if (par) this._focus(par); } break;
        case 'Enter': case ' ': e.preventDefault(); this.select(id); this.emit('activate', { id: id, node: node }); break; }
    }
    _focus(li) { Array.prototype.forEach.call(this._root.querySelectorAll('li[tabindex="0"]'), function (x) { x.tabIndex = -1; }); li.tabIndex = 0; li.focus(); }
    select(id) { if (String(id) === String(this.selected)) return; this.selected = id; this.emit('select', { id: id, node: this._find(id) }); }
    toggle(id) {
      var node = this._find(id); if (!node) return; var open = !this._open.has(id);
      if (open && node.lazy && !node.children && this.load) { node._loading = true; Promise.resolve(this.load(node)).then((ch) => { node.children = ch; node.lazy = false; node._loading = false; this._open.add(id); this.update(); this.emit('toggle', { id: id, open: true }); }); return; }
      open ? this._open.add(id) : this._open.delete(id); this.update(); this.emit('toggle', { id: id, open: open });
    }
    expandAll() { var walk = (l) => (l || []).forEach((n) => { if (n.children) { this._open.add(String(n.id)); walk(n.children); } }); walk(this.nodes); this.update(); }
    update() {
      this._root.innerHTML = ''; var first = true;
      var build = (list, ul) => { list.forEach((n) => { var id = String(n.id), parent = !!(n.children || n.lazy), open = this._open.has(id) || (n.expanded && !this._init);
        if (n.expanded) this._open.add(id);
        var li = h('li', { role: 'treeitem', 'data-id': id, 'aria-selected': String(id === String(this.selected)), 'aria-expanded': parent ? String(this._open.has(id)) : null, tabindex: first ? 0 : -1 }, h('div', { class: 'ui-tr-row' }, h('span', { class: 'ui-tr-caret', '.innerHTML': parent ? (n._loading ? '<ui-spinner size="sm"></ui-spinner>' : M.icon('chevron-right', { size: '10px', stroke: 3 })) : '' }), this.icons && (n.icon || parent) ? h('ui-icon', { name: n.icon || (this._open.has(id) ? 'folder-open' : 'folder'), class: 'ui-tr-ico' }) : null, h('span', { class: 'ui-tr-lbl' }, n.label))); first = false; ul.append(li);
        if (parent && n.children && this._open.has(id)) { var sub = h('ul', { role: 'group' }); li.append(sub); build(n.children, sub); } }); };
      build(this.nodes || [], this._root); this._init = true;
    }
  }
  M.define('ui-tree', Tree, { group: G, desc: 'Tree view with keyboard navigation, selection, lazy loading and expand/collapse.', events: ['ui-select', 'ui-activate', 'ui-toggle'], methods: ['toggle(id)', 'select(id)', 'expandAll()'] });
  M.alias('ui-tree-navigation', Tree, {}, { desc: 'Alias of ui-tree used for navigation.' }); M.alias('ui-folder-tree', Tree, {}, { desc: 'Tree of folders.' });

  /* ---------- Toolbar / bars ---------- */
  class Toolbar extends UIElement { static props = { label: { default: 'Barra de ferramentas' }, floating: { type: 'boolean' }, dense: { type: 'boolean' } }; bind() { this.setAttribute('role', 'toolbar'); this.setAttribute('aria-label', this.label); this._rv = M.a11y.roving(this, { selector: '.ui-btn', orientation: 'horizontal' }); } unbind() { this._rv && this._rv(); } }
  M.define('ui-toolbar', Toolbar, { group: G, desc: 'Toolbar with roving tabindex across its buttons.' });
  M.alias('ui-window-toolbar', Toolbar, { dense: false }, { desc: 'Toolbar for windows.' });
  M.define('ui-status-bar', class extends UIElement {}, { group: G, desc: 'Bottom status strip.' });
  class NavigationBar extends UIElement { static props = { heading: {}, back: { type: 'boolean' } }; build() { var c = this.slotted; this._b = h('ui-button', { class: 'ui-own', variant: 'toolbar', icon: 'chevron-left', 'aria-label': 'Voltar' }); this._t = h('div', { class: 'ui-own ui-nb-t' }); this.prepend(this._b, this._t); this._b.addEventListener('click', () => this.emit('back')); } update() { this._b.hidden = !this.back; this._t.textContent = this.heading || ''; } }
  M.define('ui-navigation-bar', NavigationBar, { group: G, desc: 'Top navigation bar with back button and title; extra children are trailing actions.', events: ['ui-back'] });

  /* ---------- Command palette ---------- */
  var cmds = [];
  M.commands = {
    register: function (c) { cmds.push(c); return function () { var i = cmds.indexOf(c); if (i > -1) cmds.splice(i, 1); }; },
    list: function () { return cmds.slice(); },
    score: function (q, t) { q = q.toLowerCase(); t = t.toLowerCase(); if (!q) return 1; var i = t.indexOf(q); if (i > -1) return 100 - i; var k = 0, s = 0; for (var j = 0; j < t.length && k < q.length; j++) if (t[j] === q[k]) { k++; s += 2; } return k === q.length ? s : 0; }
  };
  M.palette = {
    open: function (o) {
      o = o || {}; var items = (o.items || cmds).slice(), active = 0, filtered = [];
      var inp = h('input', { type: 'text', placeholder: o.placeholder || 'Digite um comando ou busque…', role: 'combobox', 'aria-expanded': 'true', 'aria-autocomplete': 'list', 'aria-label': 'Comando' }), list = h('div', { class: 'ui-cmd-list ui-scroll', role: 'listbox' });
      var el = h('div', { class: 'ui-cmd ui-glass', role: 'dialog', 'aria-label': 'Paleta de comandos' }, h('div', { class: 'ui-cmd-in' }, h('ui-icon', { name: 'search' }), inp), list);
      var handle;
      var render = function () {
        var q = inp.value.trim(); filtered = items.map(function (c) { return { c: c, s: M.commands.score(q, c.title + ' ' + (c.section || '')) }; }).filter(function (x) { return x.s > 0; }).sort(function (a, b) { return b.s - a.s; }).map(function (x) { return x.c; }); if (active >= filtered.length) active = 0; list.innerHTML = '';
        var sec = null; filtered.forEach(function (c, i) { if (c.section && c.section !== sec && !q) { list.append(h('div', { class: 'ui-cmd-sec' }, c.section)); sec = c.section; } list.append(h('div', { class: 'ui-cmd-it' + (i === active ? ' active' : ''), role: 'option', id: 'cmd-' + i, 'aria-selected': String(i === active), 'data-i': i }, c.icon ? h('ui-icon', { name: c.icon }) : null, h('span', { class: 't' }, c.title), c.shortcut ? h('ui-kbd', { keys: c.shortcut }) : null)); });
        if (!filtered.length) list.append(h('div', { class: 'ui-cmd-empty' }, 'Nenhum resultado'));
        var a = list.querySelector('.active'); if (a) { a.scrollIntoView({ block: 'nearest' }); inp.setAttribute('aria-activedescendant', a.id); }
      };
      var run = function (i) { var c = filtered[i]; if (!c) return; handle.close('run').then(function () { if (c.run) c.run(); if (o.onSelect) o.onSelect(c); }); };
      inp.addEventListener('input', function () { active = 0; render(); });
      inp.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { e.preventDefault(); active = (active + 1) % Math.max(1, filtered.length); render(); } else if (e.key === 'ArrowUp') { e.preventDefault(); active = (active - 1 + filtered.length) % Math.max(1, filtered.length); render(); } else if (e.key === 'Enter') { e.preventDefault(); run(active); } });
      list.addEventListener('click', function (e) { var it = e.target.closest('.ui-cmd-it'); if (it) run(+it.getAttribute('data-i')); }); list.addEventListener('mousemove', function (e) { var it = e.target.closest('.ui-cmd-it'); if (it && +it.getAttribute('data-i') !== active) { active = +it.getAttribute('data-i'); Array.prototype.forEach.call(list.querySelectorAll('.ui-cmd-it'), function (n) { n.classList.toggle('active', +n.getAttribute('data-i') === active); }); } });
      handle = M.overlay.open(el, { modal: true, layer: 'popover', animation: 'modal', trapFocus: true, backdropClass: 'ui-bd-top' }); render(); setTimeout(function () { inp.focus(); }, 0); return handle;
    }
  };
  class CommandPalette extends UIElement {
    static props = { shortcut: { default: 'Mod+K' }, items: { type: 'any', default: null }, placeholder: {} };
    bind() { this._off = M.keys.register(this.shortcut, () => this.open(), { description: 'Abrir paleta de comandos', allowInInput: true }); this.defer(() => this._off()); }
    open() { return M.palette.open({ items: this.items || undefined, placeholder: this.placeholder, onSelect: (c) => this.emit('run', { command: c }) }); }
  }
  M.define('ui-command-palette', CommandPalette, { group: G, desc: 'Fuzzy command palette (default Mod+K) over MiniUI.commands or custom items.', events: ['ui-run'], methods: ['open()'] });
  M.alias('ui-quick-switcher', CommandPalette, { shortcut: 'Mod+P', placeholder: 'Ir para…' }, { desc: 'Quick switcher: palette over custom `items`.' });
  M.alias('ui-command-overlay', CommandPalette, { shortcut: 'Mod+Shift+P' }, { desc: 'Alias.' });
});

/* ---- MODULE: src/components/menus/menus.js ---- */
MiniUI.module('src/components/menus/menus.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Menus';

  /**
   * Menu engine. items: { label, icon, shortcut, disabled, danger, checked, type:'checkbox'|'radio'|'separator'|'group',
   *                       items:[submenu], action(), value, id }.   "-" is a separator.
   * open(items, { anchor | point, placement, offset, onSelect, onClose, onHorizontal, focusFirst }) -> { el, close() }
   */
  M.menu = {
    fromElement: function (host) {
      var read = function (c) {
        if (c.localName === 'ui-menu-separator') return { type: 'separator' };
        var it = { label: c.getAttribute('label') || '', icon: c.getAttribute('icon') || '', shortcut: c.getAttribute('shortcut') || '', disabled: c.hasAttribute('disabled'), danger: c.hasAttribute('danger'), checked: c.hasAttribute('checked') ? true : undefined, type: c.getAttribute('type') || '', value: c.getAttribute('value'), id: c.getAttribute('id') };
        var subs = Array.prototype.filter.call(c.children, function (x) { return x.localName === 'ui-menu-item' || x.localName === 'ui-menu-separator'; });
        if (subs.length) it.items = subs.map(read); return it;
      };
      return Array.prototype.filter.call(host.children, function (x) { return x.localName === 'ui-menu-item' || x.localName === 'ui-menu-separator'; }).map(read);
    },
    open: function (items, o) {
      o = Object.assign({ placement: 'bottom-start', offset: 4 }, o);
      var prev = document.activeElement, sub = null, subTimer = null, ctrl;
      var hasIcon = items.some(function (i) { return i.icon; }), hasCheck = items.some(function (i) { return i.checked !== undefined || i.type === 'checkbox' || i.type === 'radio'; });
      var el = h('div', { class: 'ui-menu ui-glass ui-scroll', role: 'menu', tabindex: '-1' });
      var closeSub = function () { clearTimeout(subTimer); if (sub && !sub.closed) sub.close(); sub = null; };
      var rootClose = function (r) { var c = ctrl; while (c.parent) c = c.parent; c.close(r); };
      var enabled = function () { return Array.prototype.filter.call(el.querySelectorAll('.ui-mi'), function (b) { return !b.disabled; }); };
      var openSub = function (b, it, focusFirst) {
        closeSub(); sub = M.menu.open(it.items, { anchor: b, placement: 'right-start', offset: -4, parent: ctrl, onSelect: o.onSelect, focusFirst: focusFirst, onHorizontal: null });
      };
      items.forEach(function (it) {
        if (it === '-' || it.type === 'separator') { el.append(h('div', { class: 'ui-menu-sep', role: 'separator' })); return; }
        if (it.type === 'group') { el.append(h('div', { class: 'ui-menu-group', role: 'presentation' }, it.label)); return; }
        var role = it.type === 'checkbox' ? 'menuitemcheckbox' : it.type === 'radio' ? 'menuitemradio' : 'menuitem', on = !!it.checked;
        var b = h('button', { class: 'ui-mi' + (it.danger ? ' danger' : ''), type: 'button', role: role, tabindex: '-1', disabled: it.disabled, 'aria-checked': role !== 'menuitem' ? String(on) : null, 'aria-haspopup': it.items ? 'menu' : null },
          hasCheck ? h('span', { class: 'ui-mi-ck', '.innerHTML': on ? M.icon('check', { size: '12px', stroke: 3 }) : '' }) : null,
          hasIcon ? (it.icon ? h('ui-icon', { name: it.icon }) : h('span', { style: { width: '15px' } })) : null,
          h('span', { class: 'ui-mi-lbl' }, it.label), it.shortcut ? h('span', { class: 'ui-mi-sc' }, M.keys.format(it.shortcut)) : null, it.items ? h('ui-icon', { name: 'chevron-right', class: 'ui-mi-arrow' }) : null);
        b.addEventListener('mouseenter', function () { if (b.disabled) return; b.focus(); clearTimeout(subTimer); if (it.items) subTimer = setTimeout(function () { openSub(b, it, false); }, 150); else subTimer = setTimeout(closeSub, 200); });
        b.addEventListener('click', function (e) {
          e.stopPropagation(); if (it.items) { openSub(b, it, true); return; }
          if (it.type === 'checkbox') it.checked = !it.checked; if (it.type === 'radio') it.checked = true;
          if (it.action) it.action(it); if (o.onSelect) o.onSelect(it); rootClose('select');
        });
        el.append(b);
      });
      el.addEventListener('keydown', function (e) {
        var list = enabled(), i = list.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); list[(i + 1) % list.length].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); }
        else if (e.key === 'Home') { e.preventDefault(); list[0] && list[0].focus(); } else if (e.key === 'End') { e.preventDefault(); list.length && list[list.length - 1].focus(); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); var cur = document.activeElement; if (cur && cur.getAttribute('aria-haspopup')) cur.click(); else if (o.onHorizontal) o.onHorizontal(1); else { var root = ctrl; while (root.parent) root = root.parent; if (root.onHorizontal) root.onHorizontal(1); } }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); if (ctrl.parent) { var a = o.anchor; ctrl.close('left'); a && a.focus(); } else if (o.onHorizontal) o.onHorizontal(-1); }
        else if (e.key === 'Tab') { rootClose('tab'); }
        else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) { var k = e.key.toLowerCase(), n = list.slice(i + 1).concat(list.slice(0, i + 1)).filter(function (b) { return b.textContent.trim().toLowerCase().indexOf(k) === 0; })[0]; if (n) n.focus(); }
      });
      var entry = M.overlay.open(el, { anchor: o.anchor, point: o.point, placement: o.placement, offset: o.offset, layer: 'dropdown', onClose: function (r) { closeSub(); if (!ctrl.parent && prev && prev.focus && document.contains(prev) && r !== 'outside' && !o.noRestore) { try { prev.focus({ preventScroll: true }); } catch (x) {} } if (o.onClose) o.onClose(r); } });
      ctrl = { el: el, entry: entry, parent: o.parent || null, onHorizontal: o.onHorizontal || null, close: function (r) { return entry.close(r); }, get closed() { return entry.closed; } };
      setTimeout(function () { if (entry.closed) return; var f = enabled()[0]; if (o.focusFirst !== false && (o.focusFirst || o.parent)) { f && f.focus(); } else el.focus(); }, 0);
      return ctrl;
    }
  };
  M.contextMenu = { show: function (ev, items, o) { ev.preventDefault && ev.preventDefault(); return M.menu.open(items, Object.assign({ point: { x: ev.clientX, y: ev.clientY }, offset: 2, focusFirst: false }, o)); } };

  class MenuItem extends UIElement { static props = { label: {}, icon: {}, shortcut: {}, disabled: { type: 'boolean' }, checked: { type: 'boolean' }, danger: { type: 'boolean' }, type: {}, value: {}, id: {} }; }
  M.define('ui-menu-item', MenuItem, { group: G, desc: 'Declarative menu item (data element). Nest ui-menu-item children to create a submenu.' });
  M.define('ui-menu-separator', class extends UIElement {}, { group: G, desc: 'Declarative menu separator.' });
  M.alias('ui-submenu', MenuItem, {}, { desc: 'Item with nested ui-menu-item children.' }); M.alias('ui-nested-menu', MenuItem, {}, { desc: 'Alias of ui-submenu.' }); M.alias('ui-context-menu-item', MenuItem, {}, { desc: 'Context menu entry.' });

  class ContextMenu extends UIElement {
    static props = { items: { type: 'any', default: null }, disabled: { type: 'boolean' } };
    bind() {
      this.listen(this, 'contextmenu', (e) => { if (this.disabled) return; if (e.defaultPrevented) return; var items = this.items || M.menu.fromElement(this); if (!items.length) return; e.preventDefault(); M.menu.open(items, { point: { x: e.clientX, y: e.clientY }, offset: 2, focusFirst: false, onSelect: (it) => this.emit('select', { item: it }) }); this.emit('open', { x: e.clientX, y: e.clientY }); });
      this.listen(this, 'keydown', (e) => { if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) { var r = (e.target.getBoundingClientRect ? e.target : this).getBoundingClientRect(); e.preventDefault(); M.menu.open(this.items || M.menu.fromElement(this), { point: { x: r.left + 8, y: r.bottom }, focusFirst: true, onSelect: (it) => this.emit('select', { item: it }) }); } });
    }
  }
  M.define('ui-context-menu', ContextMenu, { group: G, desc: 'Wraps content and opens a context menu on right-click / Menu key / Shift+F10. Items via `items` or <ui-menu-item> children.', events: ['ui-select', 'ui-open'] });

  class MenuBar extends UIElement {
    static props = { menus: { type: 'any', doc: '[{label, bold?, items | () => items}]' }, variant: { default: '', reflect: true } };
    build() { var end = this.slotted.filter(function (n) { return n.getAttribute && n.getAttribute('slot') === 'end'; }); this._s = h('div', { class: 'ui-own ui-mb-start', role: 'menubar' }); this._e = h('div', { class: 'ui-own ui-mb-end' }, end); this.append(this._s, this._e); this._idx = null;
      this._s.addEventListener('click', (e) => { var b = e.target.closest('.ui-mb-b'); if (!b) return; var i = +b.getAttribute('data-i'); this._idx === i ? this.closeMenu() : this.openMenu(i, false); });
      this._s.addEventListener('mouseover', (e) => { var b = e.target.closest('.ui-mb-b'); if (b && this._idx !== null && +b.getAttribute('data-i') !== this._idx) this.openMenu(+b.getAttribute('data-i'), false); });
      this._s.addEventListener('keydown', (e) => { var b = e.target.closest('.ui-mb-b'); if (b && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); this.openMenu(+b.getAttribute('data-i'), true); } }); }
    bind() { this._rv = M.a11y.roving(this._s, { selector: '.ui-mb-b' }); }
    unbind() { this._rv && this._rv(); this.closeMenu(); }
    closeMenu() { if (this._h && !this._h.closed) this._h.close('api'); this._idx = null; this.$$('.ui-mb-b').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); }); }
    openMenu(i, focusFirst) {
      var ms = this.menus || [], m = ms[i]; if (!m) return; if (this._h && !this._h.closed) { var old = this._h; this._h = null; old.close('switch'); }
      var btn = this._s.querySelector('[data-i="' + i + '"]'), items = typeof m.items === 'function' ? m.items() : m.items; this._idx = i;
      this.$$('.ui-mb-b').forEach(function (b) { b.setAttribute('aria-expanded', String(b === btn)); });
      this._h = M.menu.open(items || [], { anchor: btn, placement: 'bottom-start', offset: 1, focusFirst: focusFirst, noRestore: !focusFirst, onHorizontal: (d) => { var n = ms.length; this.openMenu((i + d + n) % n, true); }, onSelect: (it) => this.emit('select', { menu: m.label, item: it }), onClose: (r) => { if (this._idx === i && r !== 'switch') { this._idx = null; btn.setAttribute('aria-expanded', 'false'); } } });
    }
    update() { this._s.innerHTML = ''; (this.menus || []).forEach((m, i) => this._s.append(h('button', { class: 'ui-mb-b' + (m.bold ? ' bold' : ''), type: 'button', role: 'menuitem', 'aria-haspopup': 'menu', 'aria-expanded': 'false', 'data-i': i, tabindex: i === 0 ? 0 : -1 }, m.icon ? h('ui-icon', { name: m.icon }) : m.label))); }
  }
  M.define('ui-menubar', MenuBar, { group: G, desc: 'Menu bar with hover switching, arrow-key navigation across menus and a slot="end" area for status items.', events: ['ui-select'], methods: ['openMenu(i)', 'closeMenu()'] });
  M.alias('ui-application-menu', MenuBar, {}, { desc: 'Application menu bar.' }); M.alias('ui-window-menu-bar', MenuBar, {}, { desc: 'Menu bar inside a window.' }); M.alias('ui-navigation-menu', MenuBar, { variant: 'nav' }, { desc: 'Horizontal navigation menu with dropdowns.' });

  var Dropdown = customElements.get('ui-dropdown');
  class ShortcutMenu extends Dropdown { get menuItems() { return M.keys.list().map(function (k) { return { label: k.description || k.combo, shortcut: k.combo, disabled: false }; }).concat([]); } }
  M.define('ui-shortcut-menu', ShortcutMenu, { group: G, desc: 'Lists the shortcuts currently registered in the Keyboard Manager.' });
  M.alias('ui-command-menu', Dropdown, { label: 'Comandos', icon: 'command' }, { desc: 'Dropdown listing MiniUI.commands.' });
  M.alias('ui-window-menu', Dropdown, { label: 'Janela' }, { desc: 'Window menu button.' });
});

/* ---- MODULE: src/components/overlays/overlays.js ---- */
MiniUI.module('src/components/overlays/overlays.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Overlays';
  var KIND_ICON = { info: 'info', success: 'check-circle', warning: 'alert-triangle', danger: 'alert-circle' };

  class Dialog extends UIElement {
    static props = { open: { type: 'boolean' }, heading: {}, size: { default: 'md', reflect: true, doc: 'sm|md|lg|xl|full' }, kind: { default: '', reflect: true, doc: 'info|success|warning|danger' }, dismissible: { type: 'boolean', default: true, doc: 'Esc / click outside close the dialog' }, hideClose: { type: 'boolean' } };
    static role = 'dialog';
    build() {
      var kids = this.slotted, foot = kids.filter(function (n) { return n.getAttribute && n.getAttribute('slot') === 'footer'; }), body = kids.filter(function (n) { return foot.indexOf(n) < 0; });
      var tid = U.uid('dlg-t');
      this._ico = h('ui-icon'); this._t = h('h3', { id: tid }); this._x = h('ui-button', { variant: 'toolbar', size: 'sm', icon: 'x', 'aria-label': 'Fechar' });
      this._body = h('div', { class: 'ui-dlg-b ui-scroll' }, body); this._foot = h('div', { class: 'ui-dlg-f' }, foot);
      this._dlg = h('div', { class: 'ui-dlg ui-glass', role: this.constructor.role, 'aria-modal': 'true', 'aria-labelledby': tid }, h('div', { class: 'ui-dlg-h' }, this._ico, this._t, this._x), this._body, this._foot);
      this._x.addEventListener('click', () => this.close('button'));
      if (this.buildExtra) this.buildExtra();
    }
    get dialogElement() { return this._dlg; }
    show() { this.open = true; } toggle() { this.open = !this.open; }
    close(reason) { if (this._h) this._h.close(reason || 'api'); else this.open = false; }
    _opts() { return { modal: true, layer: 'modal', trapFocus: true, animation: 'modal', closeOnOutside: this.dismissible, closeOnEscape: this.dismissible }; }
    _show() {
      if (this._h) return;
      this._h = M.overlay.open(this._dlg, Object.assign(this._opts(), { onClose: (r) => { this._h = null; if (this.open) this.open = false; this.emit('close', { reason: r }); this.emit('closed', { reason: r }); } }));
      if (this.afterOpen) this.afterOpen(); this.emit('open');
    }
    propChanged(n, v) { if (n === 'open' && this._built && this.isConnected) { v ? this._show() : (this._h && this._h.close('api')); } }
    unbind() { if (this._h) { var hd = this._h; this._h = null; hd.close('detached'); } }
    update() {
      this._t.textContent = this.heading || ''; this._ico.setAttribute('name', KIND_ICON[this.kind] || ''); this._dlg.setAttribute('data-kind', this.kind); this._dlg.setAttribute('data-size', this.size); this._x.hidden = this.hideClose || !this.dismissible && this.hideClose; this._foot.hidden = !this._foot.children.length;
      this._dlg.setAttribute('aria-label', this.heading || 'Diálogo'); this._dlg.removeAttribute('aria-labelledby'); this._dlg.setAttribute('aria-labelledby', this._t.id);
      if (this.open && !this._h) this._show(); else if (!this.open && this._h) this._h.close('api');
    }
  }
  M.define('ui-dialog', Dialog, { group: G, desc: 'Modal dialog with focus trap, Esc/outside dismissal and footer slot (slot="footer").', events: ['ui-open', 'ui-close', 'ui-closed'], methods: ['show()', 'close()', 'toggle()'] });
  M.alias('ui-modal', Dialog, {}, { desc: 'Alias of ui-dialog.' });
  class AlertDialog extends Dialog { static role = 'alertdialog'; static props = { dismissible: { type: 'boolean', default: false }, kind: { default: 'warning', reflect: true }, size: { default: 'sm', reflect: true }, okLabel: { default: 'OK' } };
    buildExtra() { this._ok = h('ui-button', { variant: 'primary', label: this.okLabel, 'data-autofocus': '' }); this._ok.addEventListener('click', () => { this.emit('confirm'); this.close('ok'); }); this._foot.append(this._ok); }
    update() { super.update(); if (this._ok) this._ok.setAttribute('label', this.okLabel || 'OK'); } }
  M.define('ui-alert-dialog', AlertDialog, { group: G, desc: 'Alert dialog requiring acknowledgement.', events: ['ui-confirm'] });
  class ConfirmDialog extends Dialog { static props = { okLabel: { default: 'Confirmar' }, cancelLabel: { default: 'Cancelar' }, destructive: { type: 'boolean' }, size: { default: 'sm', reflect: true }, kind: { default: 'info', reflect: true } };
    buildExtra() { this._c = h('ui-button', { variant: 'secondary', label: this.cancelLabel }); this._o = h('ui-button', { variant: 'primary', label: this.okLabel, 'data-autofocus': '' }); this._foot.append(this._c, this._o); this._c.addEventListener('click', () => { this.emit('cancel'); this.close('cancel'); }); this._o.addEventListener('click', () => { this.emit('confirm'); this.close('ok'); }); }
    update() { super.update(); if (this._c) this._c.setAttribute('label', this.cancelLabel || 'Cancelar'); if (this._o) { this._o.setAttribute('label', this.okLabel || 'Confirmar'); this._o.setAttribute('variant', this.destructive ? 'destructive' : 'primary'); } } }
  M.define('ui-confirm-dialog', ConfirmDialog, { group: G, desc: 'Confirm / cancel dialog.', events: ['ui-confirm', 'ui-cancel'] });
  class PromptDialog extends Dialog { static props = { label: {}, value: {}, placeholder: {}, rules: { type: 'any' }, size: { default: 'sm', reflect: true } };
    buildExtra() { this._f = h('ui-text-field', { 'data-autofocus': '' }); this._body.append(this._f); var c = h('ui-button', null, 'Cancelar'), o = h('ui-button', { variant: 'primary' }, 'OK'); this._foot.append(c, o); c.addEventListener('click', () => { this.emit('cancel'); this.close('cancel'); }); var ok = () => { if (this._f.validate()) { this.emit('submit', { value: this._f.value }); this.close('ok'); } }; o.addEventListener('click', ok); this._f.addEventListener('keydown', (e) => { if (e.key === 'Enter') ok(); }); }
    update() { super.update(); this._f.label = this.label; this._f.placeholder = this.placeholder; if (this.value && !this._f.value) this._f.value = this.value; this._f.rules = this.rules; } }
  M.define('ui-prompt-dialog', PromptDialog, { group: G, desc: 'Dialog asking for a text value with validation.', events: ['ui-submit', 'ui-cancel'] });

  class Drawer extends Dialog {
    static props = { side: { default: 'right', reflect: true, doc: 'left|right|bottom' } };
    _opts() { return { modal: true, layer: 'drawer', trapFocus: true, animation: 'slide-' + this.side, backdropClass: 'ui-bd-drawer', closeOnOutside: this.dismissible, closeOnEscape: this.dismissible }; }
    build() { super.build(); this._dlg.className = 'ui-drawer ui-glass'; }
    afterOpen() { this._dlg.style.position = 'absolute'; }
    update() { super.update(); this._dlg.setAttribute('data-side', this.side); this._dlg.classList.add('ui-drawer'); this._dlg.classList.remove('ui-dlg'); }
  }
  M.define('ui-drawer', Drawer, { group: G, desc: 'Edge-anchored panel (left / right / bottom).' });
  M.alias('ui-side-sheet', Drawer, { side: 'right' }, { desc: 'Right side sheet.' }); M.alias('ui-bottom-sheet', Drawer, { side: 'bottom' }, { desc: 'Bottom sheet.' });

  /* ---------- Popover family ---------- */
  class Popover extends UIElement {
    static props = { open: { type: 'boolean' }, placement: { default: 'bottom' }, trigger: { default: 'click', doc: 'click|hover|manual' }, for: { doc: 'id of an external trigger element' }, delay: { type: 'number', default: 150 }, modal: { type: 'boolean' } };
    build() { var kids = this.slotted, trig = kids.filter(function (n) { return n.getAttribute && n.getAttribute('slot') === 'trigger'; }), body = kids.filter(function (n) { return trig.indexOf(n) < 0; });
      this._pop = h('div', { class: 'ui-popover ui-glass', role: 'dialog' }, body); this._tw = h('span', { class: 'ui-own', style: { display: 'contents' } }, trig); this.append(this._tw); }
    anchor() { return (this.for && document.getElementById(this.for)) || this._tw.firstElementChild || this; }
    toggle() { this.open = !this.open; } show() { this.open = true; } hide() { this.open = false; }
    bind() {
      var a = this.anchor(), t = null;
      if (this.trigger === 'click') this.listen(a, 'click', () => this.toggle());
      else if (this.trigger === 'hover') { var on = () => { clearTimeout(t); t = setTimeout(() => this.show(), this.delay); }, off = () => { clearTimeout(t); t = setTimeout(() => this.hide(), this.delay + 100); }; this.listen(a, 'pointerenter', on); this.listen(a, 'pointerleave', off); this.listen(a, 'focusin', on); this.listen(a, 'focusout', off); this.listen(this._pop, 'pointerenter', () => clearTimeout(t)); this.listen(this._pop, 'pointerleave', off); }
      this.defer(() => clearTimeout(t)); a.setAttribute('aria-haspopup', 'dialog');
    }
    _show() { if (this._h) return; var a = this.anchor(); a.setAttribute('aria-expanded', 'true'); this._h = M.overlay.open(this._pop, { anchor: a, placement: this.placement, layer: 'popover', closeOnOutside: this.trigger !== 'hover', modal: false, onClose: () => { this._h = null; a.setAttribute('aria-expanded', 'false'); if (this.open) this.open = false; this.emit('close'); } }); this.emit('open'); }
    propChanged(n, v) { if (n === 'open' && this._built && this.isConnected) v ? this._show() : (this._h && this._h.close('api')); }
    unbind() { if (this._h) { var hd = this._h; this._h = null; hd.close('detached'); } }
    update() { if (this.open && !this._h) this._show(); }
  }
  M.define('ui-popover', Popover, { group: G, desc: 'Anchored floating panel opened by click, hover or API. Trigger = [slot="trigger"] child or `for` id.', events: ['ui-open', 'ui-close'], methods: ['show()', 'hide()', 'toggle()'] });
  M.alias('ui-hover-card', Popover, { trigger: 'hover', placement: 'bottom' }, { desc: 'Popover shown on hover/focus.' }); M.alias('ui-dropdown-overlay', Popover, { placement: 'bottom-start' }, { desc: 'Generic dropdown panel.' }); M.alias('ui-context-overlay', Popover, { trigger: 'manual' }, { desc: 'Programmatically controlled popover.' });

  /* ---------- Tooltip (global, attribute driven) ---------- */
  var tip = null, tipTimer = null, tipTarget = null, tipOn = false;
  function tipFor(t) { return t && t.closest ? t.closest('[tooltip],ui-tooltip') : null; }
  function showTip(el) {
    var text = el.getAttribute('tooltip') || el.getAttribute('text'); if (!text) return;
    if (!tip) { tip = h('div', { class: 'ui-tooltip', role: 'tooltip', id: 'ui-tooltip-el' }); }
    tip.textContent = text; M.portal.root().append(tip); tip.style.visibility = 'hidden'; tip.style.zIndex = M.overlay.LAYERS.tooltip;
    U.position(el, tip, { placement: (el.getAttribute('placement') || 'top') + '-center'.replace('-center', ''), offset: 6 }); tip.style.visibility = ''; tipOn = true; tipTarget = el; el.setAttribute('aria-describedby', 'ui-tooltip-el'); M.anim.fade(tip);
  }
  function hideTip() { clearTimeout(tipTimer); if (tip && tip.parentNode) tip.remove(); if (tipTarget) tipTarget.removeAttribute('aria-describedby'); tipOn = false; tipTarget = null; }
  M.tooltip = {
    init: function () {
      if (M.tooltip._on) return; M.tooltip._on = true;
      document.addEventListener('pointerover', function (e) { var el = tipFor(e.target); if (el === tipTarget) return; hideTip(); if (el) tipTimer = setTimeout(function () { showTip(el); }, 450); }, true);
      document.addEventListener('pointerdown', hideTip, true); document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideTip(); }, true); document.addEventListener('scroll', hideTip, true);
      document.addEventListener('focusin', function (e) { var el = tipFor(e.target); if (el && e.target.matches && e.target.matches(':focus-visible')) { hideTip(); showTip(el); } }, true); document.addEventListener('focusout', hideTip, true);
    }, show: showTip, hide: hideTip
  };
  M.define('ui-tooltip', class extends UIElement { static props = { text: {}, placement: { default: 'top' } }; update() { if (this.placement) this.setAttribute('placement', this.placement); } }, { group: G, desc: 'Wrap any element to give it a tooltip. Any element also supports the `tooltip="…"` attribute.' });

  /* ---------- Lightbox ---------- */
  M.lightbox = {
    open: function (images, index) {
      images = images.map(function (i) { return typeof i === 'string' ? { src: i } : i; }); var idx = index || 0, handle;
      var img = h('img', { alt: '' }), cap = h('div', { class: 'ui-lb-cap' }), cnt = h('div', { class: 'ui-lb-count' });
      var show = function (n) { idx = (n + images.length) % images.length; img.classList.remove('zoom'); img.src = images[idx].src; img.alt = images[idx].caption || ''; cap.textContent = images[idx].caption || ''; cnt.textContent = (idx + 1) + ' / ' + images.length; };
      var wrap = h('div', { class: 'ui-lb-wrap', role: 'dialog', 'aria-label': 'Visualizador de imagens', tabindex: '-1' }, img, cap, cnt,
        h('button', { class: 'ui-lb-close', type: 'button', 'aria-label': 'Fechar', '.innerHTML': M.icon('x', { size: '18px' }), onclick: function () { handle.close(); } }),
        images.length > 1 ? h('button', { class: 'ui-lb-nav prev', type: 'button', 'aria-label': 'Anterior', '.innerHTML': M.icon('chevron-left', { size: '22px' }), onclick: function () { show(idx - 1); } }) : null,
        images.length > 1 ? h('button', { class: 'ui-lb-nav next', type: 'button', 'aria-label': 'Próxima', '.innerHTML': M.icon('chevron-right', { size: '22px' }), onclick: function () { show(idx + 1); } }) : null);
      img.addEventListener('click', function () { img.classList.toggle('zoom'); });
      wrap.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') show(idx + 1); else if (e.key === 'ArrowLeft') show(idx - 1); });
      handle = M.overlay.open(wrap, { modal: true, layer: 'modal', trapFocus: true, animation: 'fade', backdropClass: 'ui-bd-dark' }); show(idx); return handle;
    }
  };
  class Lightbox extends UIElement { static props = { items: { type: 'any' }, index: { type: 'number', default: 0 }, open: { type: 'boolean' } }; show(i) { this.open = true; if (i != null) this.index = i; } propChanged(n, v) { if (n === 'open') { if (v) { this._h = M.lightbox.open(this.items || [], this.index); var hh = this._h, cl = hh.close; hh.o.onClose = () => { this._p.open = false; this.removeAttribute('open'); this.emit('close'); }; } else if (this._h) this._h.close(); } } }
  M.define('ui-lightbox', Lightbox, { group: G, desc: 'Full-screen image viewer with navigation and zoom.', events: ['ui-close'] });

  /* ---------- Loading / progress / fullscreen overlays ---------- */
  class LoadingOverlay extends UIElement {
    static props = { loading: { type: 'boolean' }, label: { default: 'Carregando…' }, progress: { type: 'number', default: null } };
    build() { this._o = h('div', { class: 'ui-own ui-lo', role: 'status', 'aria-live': 'polite' }, this._sp = h('ui-spinner', { size: 'lg' }), this._pr = h('ui-progress', { showValue: '' }), this._l = h('div')); this._o.hidden = true; this.append(this._o); }
    update() { this._o.hidden = !this.loading; this._l.textContent = this.label; var det = this.progress != null; this._sp.hidden = det; this._pr.hidden = !det; if (det) this._pr.value = this.progress; this.setAttribute('aria-busy', String(this.loading)); }
  }
  M.define('ui-loading-overlay', LoadingOverlay, { group: G, desc: 'Covers its content with a spinner (or progress bar) while loading.' });
  M.alias('ui-progress-overlay', LoadingOverlay, { progress: 0, label: 'Processando…' }, { desc: 'Loading overlay with determinate progress.' });
  M.loading = { show: function (o) { o = o || {}; var sp = h('ui-spinner', { size: 'xl' }), pr = h('ui-progress', { showValue: '' }), l = h('div', null, o.label || 'Carregando…'); pr.hidden = o.progress == null; sp.hidden = o.progress != null; var el = h('div', { class: 'ui-lo ui-lo-full', role: 'alertdialog', 'aria-busy': 'true', 'aria-label': o.label || 'Carregando' }, sp, pr, l); el.style.zIndex = M.overlay.LAYERS.modal + 50; M.portal.root().append(el); return { update: function (p) { if (p.label != null) l.textContent = p.label; if (p.progress != null) { pr.hidden = false; sp.hidden = true; pr.value = p.progress; } }, close: function () { el.remove(); } }; } };
  class FullscreenOverlay extends UIElement {
    static props = { open: { type: 'boolean' }, heading: {} };
    build() { var c = this.slotted; this._c = h('div', { class: 'ui-fso', role: 'dialog', 'aria-modal': 'true', style: { width: '100vw', height: '100vh', background: 'var(--ui-bg-content)', display: 'flex', flexDirection: 'column' } }, h('div', { style: { display: 'flex', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid var(--ui-separator)' } }, h('strong', { style: { flex: 1 } }, this.heading || ''), h('ui-button', { icon: 'x', variant: 'toolbar', 'aria-label': 'Fechar', onclick: () => this.open = false })), h('div', { style: { flex: 1, overflow: 'auto', padding: '16px' } }, c)); }
    propChanged(n, v) { if (n !== 'open' || !this._built) return; if (v && !this._h) this._h = M.overlay.open(this._c, { modal: true, layer: 'modal', trapFocus: true, animation: 'fade', onClose: () => { this._h = null; this._p.open = false; this.removeAttribute('open'); this.emit('close'); } }); else if (!v && this._h) this._h.close(); }
    update() { if (this.open && !this._h) this.propChanged('open', true); }
    unbind() { if (this._h) { var x = this._h; this._h = null; x.close(); } }
  }
  M.define('ui-fullscreen-overlay', FullscreenOverlay, { group: G, desc: 'Full-viewport overlay with header and close button.' });

  class ToastEl extends UIElement {
    static props = { open: { type: 'boolean' }, type: { default: 'info' }, heading: {}, duration: { type: 'number', default: 4200 }, icon: {}, actionLabel: {} };
    propChanged(n, v) { if (n === 'open' && v && this._built) this._fire(); }
    _fire() { var t = this.textContent.trim(); this._t = M.toast(t, { type: this.type, heading: this.heading, duration: this.duration, icon: this.icon || undefined, action: this.actionLabel ? { label: this.actionLabel, onClick: () => this.emit('action') } : undefined }); setTimeout(() => { this.open = false; }, Math.max(300, this.duration)); }
    update() { if (this.open && !this._fired) { this._fired = true; this._fire(); } if (!this.open) this._fired = false; }
  }
  M.define('ui-toast', ToastEl, { group: G, desc: 'Declarative toast: set `open` to show; content is the message.', events: ['ui-action'] });
  M.alias('ui-snackbar', ToastEl, { duration: 6000 }, { desc: 'Snackbar (toast with action).' }); M.alias('ui-notification-popup', ToastEl, { icon: 'bell' }, { desc: 'Notification popup.' });
});

/* ---- MODULE: src/components/feedback/feedback.js ---- */
MiniUI.module('src/components/feedback/feedback.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Feedback';
  var ICON = { info: 'info', success: 'check-circle', warning: 'alert-triangle', danger: 'alert-circle' };

  class Alert extends UIElement {
    static props = { variant: { default: 'info', reflect: true, doc: 'info|success|warning|danger' }, heading: {}, dismissible: { type: 'boolean' }, icon: {}, hideIcon: { type: 'boolean' } };
    build() { var c = this.slotted; this._i = h('ui-icon', { class: 'ui-own' }); this._h = h('strong'); this._c = h('div', null, c); this._x = h('button', { class: 'ui-own ui-al-x', type: 'button', 'aria-label': 'Dispensar', '.innerHTML': M.icon('x', { size: '14px' }) });
      this.append(this._i, h('div', { class: 'ui-own ui-al-b' }, this._h, this._c), this._x); this._x.addEventListener('click', () => { if (this.emit('dismiss', {}, { cancelable: true })) M.anim.fade(this, 'out').then(() => this.remove()); }); }
    update() { this.setAttribute('role', this.variant === 'danger' || this.variant === 'warning' ? 'alert' : 'status'); this._i.setAttribute('name', this.icon || ICON[this.variant] || 'info'); this._i.hidden = this.hideIcon; this._h.textContent = this.heading || ''; this._h.hidden = !this.heading; this._x.hidden = !this.dismissible; }
  }
  M.define('ui-alert', Alert, { group: G, desc: 'Inline alert (info / success / warning / danger), dismissible.', events: ['ui-dismiss (cancelable)'] });
  M.alias('ui-banner', Alert, { variant: 'info' }, { desc: 'Full-width banner.' }); M.alias('ui-callout', Alert, { variant: 'info', hideIcon: false }, { desc: 'Callout with accent border.' }); M.alias('ui-validation-message', Alert, { variant: 'danger' }, { desc: 'Compact inline validation message.' });

  class EmptyState extends UIElement {
    static props = { icon: { default: 'folder' }, heading: { default: 'Nada por aqui' }, description: {}, variant: { default: '', reflect: true } };
    build() { var actions = this.slotted; this._i = h('div', { class: 'ui-own ui-es-i' }); this._t = h('div', { class: 'ui-own ui-es-t' }); this._d = h('div', { class: 'ui-own ui-es-d' }); this._a = h('div', { class: 'ui-own ui-es-a' }, actions); this.prepend(this._i, this._t, this._d); this.append(this._a); }
    update() { this._i.innerHTML = M.icon(this.icon, { size: '1em' }); this._t.textContent = this.heading; this._d.textContent = this.description || ''; this._d.hidden = !this.description; this._a.hidden = !this._a.children.length; }
  }
  M.define('ui-empty-state', EmptyState, { group: G, desc: 'Placeholder for empty content; children become actions.' });
  M.alias('ui-error-state', EmptyState, { icon: 'alert-circle', heading: 'Algo deu errado', description: 'Não foi possível carregar o conteúdo.', variant: 'danger' }, { desc: 'Error state.' });
  M.alias('ui-success-state', EmptyState, { icon: 'check-circle', heading: 'Tudo certo', variant: 'success' }, { desc: 'Success state.' });
  M.alias('ui-warning-state', EmptyState, { icon: 'alert-triangle', heading: 'Atenção', variant: 'warning' }, { desc: 'Warning state.' });
  M.alias('ui-offline-state', EmptyState, { icon: 'wifi-off', heading: 'Você está offline', description: 'Verifique sua conexão e tente novamente.', variant: 'warning' }, { desc: 'Offline state.' });

  class ConnectionStatus extends UIElement {
    static props = { online: { type: 'boolean', default: true, doc: 'Current connectivity (follows the browser unless set)' }, showLabel: { type: 'boolean', default: true } };
    build() { this._s = h('ui-status', { class: 'ui-own' }); this.append(this._s); this._p.online = navigator.onLine !== false; }
    bind() { var f = () => { this.online = navigator.onLine !== false; this.emit('change', { online: this.online }); }; this.listen(window, 'online', f); this.listen(window, 'offline', f); }
    simulate(v) { this.online = !!v; this.emit('change', { online: this.online, simulated: true }); }
    update() { this._s.setAttribute('state', this.online ? 'online' : 'danger'); this._s.textContent = this.showLabel ? (this.online ? 'Conectado' : 'Sem conexão') : ''; this._s.toggleAttribute('pulse', !this.online); this.setAttribute('role', 'status'); }
  }
  M.define('ui-connection-status', ConnectionStatus, { group: G, desc: 'Online/offline indicator following navigator.onLine.', events: ['ui-change'], methods: ['simulate(bool)'] });
  M.alias('ui-status-badge', M.registry.get('ui-status').cls, {}, { desc: 'Alias of ui-status.' });

  class ResultSummary extends UIElement {
    static props = { status: { default: 'success', reflect: true }, heading: {}, description: {}, items: { type: 'any', doc: '[{label,value}]' } };
    build() { this._i = h('div', { class: 'ui-own ui-rs-i' }); this._h = h('h3', { class: 'ui-own' }); this._d = h('p', { class: 'ui-own', style: { color: 'var(--ui-text-2)' } }); this._l = h('dl', { class: 'ui-own' }); this.append(this._i, this._h, this._d, this._l); }
    update() { this._i.innerHTML = M.icon(ICON[this.status] || 'info', { size: '1em' }); this._h.textContent = this.heading || ''; this._d.textContent = this.description || ''; this._l.innerHTML = ''; (this.items || []).forEach((i) => this._l.append(h('dt', null, i.label), h('dd', null, i.value))); this._l.hidden = !(this.items || []).length; }
  }
  M.define('ui-result-summary', ResultSummary, { group: G, desc: 'Outcome summary with status icon and key/value details.' });

  class Notification extends UIElement {
    static props = { heading: {}, body: {}, time: {}, icon: { default: 'bell' }, closable: { type: 'boolean', default: true } };
    build() { this._i = h('div', { class: 'ui-own ui-n-i' }); this._h = h('span'); this._t = h('span', { class: 'ui-n-t' }); this._m = h('div', { class: 'ui-n-m' }); this._x = h('ui-button', { variant: 'toolbar', size: 'sm', icon: 'x', 'aria-label': 'Dispensar' }); this.append(this._i, h('div', { class: 'ui-own ui-n-b' }, h('div', { class: 'ui-n-h' }, this._h, this._t), this._m), this._x); this._x.addEventListener('click', () => { if (this.emit('dismiss', {}, { cancelable: true })) this.remove(); }); }
    update() { this._i.innerHTML = M.icon(this.icon, { size: '1em' }); this._h.textContent = this.heading || ''; this._t.textContent = this.time || ''; this._m.textContent = this.body || ''; this._x.hidden = !this.closable; this.setAttribute('role', 'article'); }
  }
  M.define('ui-notification', Notification, { group: G, desc: 'Inline notification card.', events: ['ui-dismiss'] });
  class NotificationGroup extends UIElement {
    static props = { heading: {}, collapsed: { type: 'boolean' } };
    static observeChildren = true;
    build() { var c = this.slotted; this._c = h('span'); this._b = h('ui-button', { variant: 'link', size: 'sm' }, 'Limpar'); this._l = h('div', { class: 'ui-own ui-ng-l' }, c); this.append(h('div', { class: 'ui-own ui-ng-h' }, h('span', null, this._t = h('span'), ' ', this._c), this._b), this._l); this._b.addEventListener('click', () => { this.querySelectorAll('ui-notification').forEach(function (n) { n.remove(); }); this.emit('clear'); }); }
    update() { var n = this._l.querySelectorAll('ui-notification').length; this._t.textContent = this.heading || ''; this._c.innerHTML = ''; this._c.append(h('ui-badge', null, String(n))); }
  }
  M.define('ui-notification-group', NotificationGroup, { group: G, desc: 'Group of notifications with counter and clear action.', events: ['ui-clear'] });
});

/* ---- MODULE: src/components/windows/window.js ---- */
MiniUI.module('src/components/windows/window.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Windows';

  /** FullscreenController: visual fullscreen of a window + (optionally) native fullscreen through Platform.windows. */
  M.fullscreen = { toggle: function (win, native) { var on = win.state !== 'fullscreen'; if (on) win._beforeFs = win.state; win.state = on ? 'fullscreen' : (win._beforeFs || 'normal'); if (native) M.Platform.windows.setFullscreen({ value: on }).catch(function () {}); win.emit('fullscreen', { on: on }); return on; } };

  class Win extends UIElement {
    static props = {
      heading: {}, icon: {}, x: { type: 'number', default: 80 }, y: { type: 'number', default: 60 }, width: { type: 'number', default: 640 }, height: { type: 'number', default: 420 }, minWidth: { type: 'number', default: 280 }, minHeight: { type: 'number', default: 160 },
      resizable: { type: 'boolean', default: true }, draggable: { type: 'boolean', default: true }, closable: { type: 'boolean', default: true }, minimizable: { type: 'boolean', default: true }, maximizable: { type: 'boolean', default: true },
      state: { default: 'normal', reflect: true, doc: 'normal|minimized|maximized|fullscreen' }, focused: { type: 'boolean' }, kind: { default: 'window', reflect: true, doc: 'window|utility|floating|modal' }, host: { type: 'boolean', doc: 'Also forwards commands to Platform.windows (native host window)' }, flush: { type: 'boolean', doc: 'Content manages its own scrolling' }
    };
    build() {
      var kids = this.slotted, pick = function (s) { return kids.filter(function (n) { return n.getAttribute && n.getAttribute('slot') === s; }); };
      var body = kids.filter(function (n) { return !(n.getAttribute && n.getAttribute('slot')); });
      var btn = (c, label, svg) => h('button', { class: c, type: 'button', 'aria-label': label, '.innerHTML': svg });
      this._close = btn('close', 'Fechar janela', '<svg viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M1.5 1.5l5 5M6.5 1.5l-5 5"/></svg>');
      this._min = btn('min', 'Minimizar', '<svg viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M1 4h6"/></svg>');
      this._max = btn('max', 'Maximizar', '<svg viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 6.5v-4h4M6.5 1.5v4h-4" fill="currentColor" fill-opacity=".5"/></svg>');
      this._title = h('div', { class: 'ui-win-title' }, this._ti = h('ui-icon'), this._tt = h('span'));
      this._tb = h('div', { class: 'ui-win-tb' }, h('div', { class: 'ui-win-ctl', role: 'group', 'aria-label': 'Controles da janela' }, this._close, this._min, this._max), this._title, this._end = h('div', { class: 'ui-win-end' }, pick('titlebar-end')));
      this._mn = h('div', { class: 'ui-win-menu' }, pick('menubar')); this._tool = h('div', { class: 'ui-win-tool' }, pick('toolbar')); this._body = h('div', { class: 'ui-win-body' }, body); this._foot = h('div', { class: 'ui-win-foot' }, pick('footer'));
      this._clip = h('div', { class: 'ui-win-clip' }, this._tb, this._mn, this._tool, this._body, this._foot); this.append(this._clip);
      ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'].forEach((d) => { var r = h('div', { class: 'ui-win-rz', 'data-d': d }); this.append(r); this._rz(r, d); });
      this._close.addEventListener('click', () => this.close()); this._min.addEventListener('click', () => this.minimize()); this._max.addEventListener('click', (e) => { if (e.altKey) M.fullscreen.toggle(this, this.host); else this.toggleMaximize(); });
      this._tb.addEventListener('dblclick', (e) => { if (!e.target.closest('button') && this.maximizable) this.toggleMaximize(); });
      this.addEventListener('pointerdown', () => this.focus(), true);
      this.setAttribute('role', 'dialog'); this.tabIndex = -1;
      M.drag.track(this._tb, { filter: (e) => this.draggable && !e.target.closest('button,input,select,ui-button,[slot]') && this.state === 'normal', onStart: () => { this._d0 = { x: this._p.x, y: this._p.y }; this.classList.add('ui-dragging-win'); }, onMove: (dx, dy) => this._moveTo(this._d0.x + dx, this._d0.y + dy), onEnd: () => { this.classList.remove('ui-dragging-win'); this.emit('move', { x: this._p.x, y: this._p.y }); } });
    }
    _area() { var m = this.closest('ui-window-manager') || this.parentElement; return m ? { w: m.clientWidth, h: m.clientHeight } : { w: innerWidth, h: innerHeight }; }
    _moveTo(x, y) { var a = this._area(); x = U.clamp(x, 80 - this._p.width, a.w - 80); y = U.clamp(y, 0, a.h - 40); this._p.x = x; this._p.y = y; this.style.left = x + 'px'; this.style.top = y + 'px'; }
    _rz(el, d) {
      var s0; M.drag.track(el, { filter: () => this.resizable && this.state === 'normal', onStart: () => { s0 = { x: this._p.x, y: this._p.y, w: this._p.width, h: this._p.height }; this.classList.add('ui-dragging-win'); },
        onMove: (dx, dy) => { var a = this._area(), x = s0.x, y = s0.y, w = s0.w, hh = s0.h; if (d.indexOf('e') > -1) w = Math.max(this.minWidth, s0.w + dx); if (d.indexOf('s') > -1) hh = Math.max(this.minHeight, s0.h + dy); if (d.indexOf('w') > -1) { w = Math.max(this.minWidth, s0.w - dx); x = s0.x + (s0.w - w); } if (d.indexOf('n') > -1) { hh = Math.max(this.minHeight, s0.h - dy); y = s0.y + (s0.h - hh); if (y < 0) { hh += y; y = 0; } } this.setBounds({ x: x, y: y, width: w, height: hh }); },
        onEnd: () => { this.classList.remove('ui-dragging-win'); this.emit('resize', { width: this._p.width, height: this._p.height }); } });
    }
    setBounds(b) { ['x', 'y', 'width', 'height'].forEach((k) => { if (b[k] != null) this._p[k] = Math.round(b[k]); }); this._applyBounds(); }
    _applyBounds() { this.style.left = this._p.x + 'px'; this.style.top = this._p.y + 'px'; this.style.width = this._p.width + 'px'; this.style.height = this._p.height + 'px'; }
    center() { var a = this._area(); this.setBounds({ x: Math.max(0, (a.w - this._p.width) / 2), y: Math.max(0, (a.h - this._p.height) / 3) }); }
    get content() { return this._body; }
    focus() { var m = this.closest('ui-window-manager'); if (m && m.focusWindow) m.focusWindow(this); else this.focused = true; }
    _native(a) { if (this.host && M.Platform.windows[a]) M.Platform.windows[a]().catch(function () {}); }
    minimize() {
      if (!this.minimizable || this.state === 'minimized') return; var from = U.rectOf(this), m = this.closest('ui-window-manager'), to = (m && m.minimizeTarget && m.minimizeTarget(this)) || { x: from.x + from.width / 2 - 40, y: innerHeight - 20, width: 80, height: 20 };
      this._prevState = this.state; this._native('minimize');
      M.anim.flipOut(this, from, to, { duration: 380 }).then(() => { M.anim.clear(this); this.state = 'minimized'; this.focused = false; this.emit('state', { state: 'minimized' }); });
      this.emit('minimize');
    }
    restore() {
      if (this.state === 'minimized') { var m = this.closest('ui-window-manager'), from = (m && m.minimizeTarget && m.minimizeTarget(this)) || null; this.state = this._prevState || 'normal'; var to = U.rectOf(this); M.anim.flip(this, from || { x: to.x + to.width / 2 - 40, y: innerHeight, width: 80, height: 20 }, to, { duration: 340 }); this.focus(); this._native('restore'); this.emit('state', { state: this.state }); this.emit('restore'); return; }
      if (this.state === 'maximized' || this.state === 'fullscreen') { var f = U.rectOf(this); this.state = 'normal'; M.anim.flip(this, f, U.rectOf(this)); this._native('restore'); this.emit('state', { state: 'normal' }); this.emit('restore'); }
    }
    maximize() { if (!this.maximizable || this.state === 'maximized') return; var f = U.rectOf(this); this.state = 'maximized'; M.anim.flip(this, f, U.rectOf(this), { duration: 300 }); this._native('maximize'); this.emit('state', { state: 'maximized' }); this.emit('maximize'); }
    toggleMaximize() { this.state === 'maximized' ? this.restore() : this.maximize(); }
    close(force) {
      if (!this.closable && !force) return false; if (!this.emit('before-close', {}, { cancelable: true })) return false;
      this._native('close'); this.emit('close', {}); M.anim.windowTransition(this, 'close').then(() => { this.remove(); }); return true;
    }
    bind() { this.listen(this, 'keydown', (e) => { if (e.key === 'Escape' && this.kind === 'modal') this.close(); }); }
    mounted() { if (this.kind === 'modal') this.focus(); this.emit('open'); M.anim.windowTransition(this, 'open'); }
    update() {
      if (this.state === 'normal') this._applyBounds();
      this._tt.textContent = this.heading || ''; this._ti.hidden = !this.icon; this._ti.setAttribute('name', this.icon || ''); this.setAttribute('aria-label', this.heading || 'Janela');
      this._close.disabled = !this.closable; this._min.disabled = !this.minimizable; this._max.disabled = !this.maximizable; this._max.setAttribute('aria-label', this.state === 'maximized' ? 'Restaurar' : 'Maximizar');
      this._body.classList.toggle('flush', this.flush); this._end.hidden = !this._end.children.length;
      if (this.kind === 'utility' || this.kind === 'modal') { this._min.hidden = this.kind === 'modal'; this._max.hidden = this.kind === 'modal'; }
    }
  }
  M.define('ui-window', Win, { group: G, desc: 'Desktop-style window: traffic-light controls, drag, 8-way resize, minimize / maximize / fullscreen with animations. Slots: toolbar, menubar, footer, titlebar-end.', events: ['ui-open', 'ui-focus', 'ui-before-close (cancelable)', 'ui-close', 'ui-minimize', 'ui-maximize', 'ui-restore', 'ui-state', 'ui-move', 'ui-resize'], methods: ['focus()', 'minimize()', 'maximize()', 'restore()', 'toggleMaximize()', 'close()', 'setBounds({x,y,width,height})', 'center()'] });
  M.alias('ui-draggable-window', Win, { resizable: false }, { desc: 'Window that can be dragged but not resized.' }); M.alias('ui-resizable-window', Win, {}, { desc: 'Alias of ui-window.' });
  M.alias('ui-floating-window', Win, { kind: 'floating', minimizable: false, maximizable: false }, { desc: 'Floating tool window.' }); M.alias('ui-utility-window', Win, { kind: 'utility', minimizable: false, maximizable: false, height: 280, width: 300 }, { desc: 'Small utility / inspector window.' });
  M.alias('ui-modal-window', Win, { kind: 'modal', minimizable: false, maximizable: false, resizable: false, width: 420, height: 240 }, { desc: 'Modal window (Esc closes).' });
  ['frame', 'title-bar', 'controls', 'content', 'footer', 'toolbar', 'menu-bar'].forEach(function (p) { M.define('ui-window-' + p, class extends UIElement {}, { group: G, desc: 'Structural part of a window (use slots on ui-window for automatic placement).' }); });

  class WindowManager extends UIElement {
    static props = { cascade: { type: 'number', default: 28 }, minimizeTarget: { type: 'any', default: null, doc: '(win) => DOMRect-like or null — where minimise animates to' } };
    static observeChildren = false;
    build() { this._z = 10; this._n = 0; }
    get windows() { return Array.prototype.filter.call(this.children, function (c) { return c.localName === 'ui-window'; }); }
    get active() { return this.windows.filter(function (w) { return w.focused; })[0] || null; }
    /** create({ heading, icon, content (Node|string|fn), width, height, x, y, kind, app, resizable, host, flush, toolbar }) */
    create(o) {
      o = o || {}; var w = document.createElement('ui-window'); ['heading', 'icon', 'kind'].forEach(function (k) { if (o[k]) w.setAttribute(k, o[k]); });
      ['width', 'height', 'minWidth', 'minHeight'].forEach(function (k) { if (o[k] != null) w[k] = o[k]; }); ['resizable', 'closable', 'minimizable', 'maximizable', 'flush', 'host'].forEach(function (k) { if (o[k] != null) w[k] = o[k]; });
      var n = this._n++ % 8, ww = o.width || 640, hh = o.height || 420; w.x = o.x != null ? o.x : Math.max(12, Math.min(this.clientWidth - ww - 12, 60 + n * this.cascade)); w.y = o.y != null ? o.y : Math.max(8, Math.min(this.clientHeight - hh - 12, 30 + n * this.cascade));
      if (o.app) w.setAttribute('data-app', o.app); var c = typeof o.content === 'function' ? o.content(w) : o.content;
      if (typeof c === 'string') w.insertAdjacentHTML('beforeend', c); else if (c) w.append(c);
      if (o.toolbar) { var t = typeof o.toolbar === 'function' ? o.toolbar(w) : o.toolbar; t.setAttribute('slot', 'toolbar'); w.append(t); } if (o.footer) { o.footer.setAttribute('slot', 'footer'); w.append(o.footer); } if (o.menubar) { o.menubar.setAttribute('slot', 'menubar'); w.append(o.menubar); }
      this.append(w); return w;
    }
    focusWindow(win) {
      if (win.state === 'minimized') { win.restore(); return; } var prev = this.active; this.windows.forEach(function (x) { x.focused = x === win; }); win.style.zIndex = ++this._z;
      if (win.state === 'fullscreen') win.style.zIndex = '';
      if (!win.contains(document.activeElement)) HTMLElement.prototype.focus.call(win, { preventScroll: true });
      if (prev !== win) { win.emit('focus'); this._notify(); }
    }
    topWindow() { var v = this.windows.filter(function (w) { return w.state !== 'minimized'; }).sort(function (a, b) { return (+b.style.zIndex || 0) - (+a.style.zIndex || 0); }); return v[0] || null; }
    minimizeAll() { this.windows.forEach(function (w) { w.minimize(); }); } closeAll() { this.windows.forEach(function (w) { w.close(true); }); }
    cascadeAll() { this.windows.forEach((w, i) => { if (w.state === 'minimized') return; if (w.state !== 'normal') w.state = 'normal'; w.setBounds({ x: 20 + i * this.cascade, y: 14 + i * this.cascade }); this.focusWindow(w); }); }
    tile(side) { var w = this.active || this.topWindow(); if (!w) return; if (w.state !== 'normal') w.state = 'normal'; var W = this.clientWidth, H = this.clientHeight, half = Math.floor(W / 2); var b = side === 'left' ? { x: 0, y: 0, width: half, height: H } : side === 'right' ? { x: half, y: 0, width: W - half, height: H } : { x: 0, y: 0, width: W, height: H }; var f = U.rectOf(w); w.setBounds(b); M.anim.flip(w, f, U.rectOf(w), { duration: 260 }); }
    _notify() { this.emit('change', { windows: this.windows.length }); M.events.emit('wm:change', { manager: this }); }
    bind() {
      this.listen(this, 'ui-open', (e) => { if (e.target.localName === 'ui-window') { this.focusWindow(e.target); this._notify(); } });
      this.listen(this, 'ui-close', (e) => { if (e.target.localName !== 'ui-window') return; var w = e.target; setTimeout(() => { var t = this.topWindow(); if (t && !this.active) this.focusWindow(t); this._notify(); }, 200); });
      this.listen(this, 'ui-state', (e) => { if (e.target.localName !== 'ui-window') return; var t = this.topWindow(); if (e.detail.state === 'minimized' && t) this.focusWindow(t); this._notify(); });
    }
  }
  M.define('ui-window-manager', WindowManager, { group: G, desc: 'Container managing many windows: z-order, focus, cascade, tiling, minimise targets.', events: ['ui-change'], methods: ['create(opts)', 'focusWindow(win)', 'minimizeAll()', 'closeAll()', 'cascadeAll()', 'tile(side)', 'windows'] });

  /** Window switcher (Alt+Tab style). */
  M.windowSwitcher = {
    open: function (wm, dir) {
      var wins = wm.windows.slice().sort(function (a, b) { return (+b.style.zIndex || 0) - (+a.style.zIndex || 0); }); if (wins.length < 1) return null; var idx = wins.length > 1 ? (dir < 0 ? wins.length - 1 : 1) : 0, handle;
      var el = h('div', { class: 'ui-wsw ui-glass', role: 'listbox', 'aria-label': 'Alternador de janelas', tabindex: '-1' });
      var render = function () { el.innerHTML = ''; wins.forEach(function (w, i) { var color = (M.apps && M.apps.get(w.getAttribute('data-app')) || {}).color || 'linear-gradient(135deg,#8e8e93,#636366)'; el.append(h('button', { class: 'ui-wsw-it' + (i === idx ? ' active' : ''), type: 'button', role: 'option', 'aria-selected': String(i === idx), onclick: function () { pick(i); } }, h('div', { class: 'ic', style: { background: color } }, h('ui-icon', { name: w.icon || 'window' })), h('span', null, w.heading || 'Janela'))); }); };
      var pick = function (i) { var w = wins[i]; handle.close('pick').then(function () { w.state === 'minimized' ? w.restore() : wm.focusWindow(w); }); };
      el.addEventListener('keydown', function (e) { if (e.key === 'Tab' || e.key === 'ArrowRight') { e.preventDefault(); idx = (idx + (e.shiftKey ? -1 : 1) + wins.length) % wins.length; render(); } else if (e.key === 'ArrowLeft') { idx = (idx - 1 + wins.length) % wins.length; render(); } else if (e.key === 'Enter') pick(idx); });
      handle = M.overlay.open(el, { modal: true, layer: 'popover', trapFocus: true, animation: 'scale', backdropClass: 'ui-bd-sw' }); render(); setTimeout(function () { el.focus(); }, 0);
      var up = function (e) { if (e.key === 'Alt') { document.removeEventListener('keyup', up); if (!handle.closed) pick(idx); } }; document.addEventListener('keyup', up); return handle;
    }
  };
  class WindowSwitcher extends UIElement {
    static props = { manager: { doc: 'id of ui-window-manager' }, shortcut: { default: 'Alt+Tab' } };
    bind() { var get = () => document.getElementById(this.manager) || document.querySelector('ui-window-manager'); this._o = M.keys.register(this.shortcut, () => { var wm = get(); if (wm) M.windowSwitcher.open(wm, 1); }, { description: 'Alternar janelas', allowInInput: true }); this._o2 = M.keys.register('Alt+Shift+W', () => { var wm = get(); if (wm) M.windowSwitcher.open(wm, 1); }, { description: 'Alternar janelas (alternativo)', allowInInput: true }); this.defer(() => { this._o(); this._o2(); }); }
  }
  M.define('ui-window-switcher', WindowSwitcher, { group: G, desc: 'Registers the Alt+Tab-style window switcher for a window manager.' });
  class InspectorPanel extends UIElement { static props = { heading: { default: 'Inspetor' } }; build() { var c = this.slotted; this.prepend(this._h = h('div', { class: 'ui-own ui-ip-h' })); this.append(h('div', { class: 'ui-own ui-ip-b' }, c)); } update() { this._h.textContent = this.heading; } }
  M.define('ui-inspector-panel', InspectorPanel, { group: G, desc: 'Titled side panel for inspectors.' });
  M.define('ui-minimize-animation', class extends UIElement {}, { group: G, desc: 'Marker; minimise animation is built into ui-window (M.anim.flipOut).' });
  M.define('ui-maximize-animation', class extends UIElement {}, { group: G, desc: 'Marker; maximise animation is built into ui-window (M.anim.flip).' });
});

/* ---- MODULE: src/components/system/system.js ---- */
MiniUI.module('src/components/system/system.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'System & Desktop';

  M.system = M.createStore({ wifi: true, bluetooth: true, dark: false, dnd: false, volume: 60, brightness: 100, dockHidden: false });
  M.system.subscribe(function (s, ch) {
    if (ch.indexOf('brightness') > -1) document.documentElement.style.filter = s.brightness < 100 ? 'brightness(' + (0.45 + s.brightness / 100 * 0.55).toFixed(2) + ')' : '';
    if (ch.indexOf('dnd') > -1) M.Notifications.setDoNotDisturb(s.dnd);
  });
  M.events.on('theme:change', function (d) { M.system.set('dark', d.scheme === 'dark'); });

  /* ----- apps registry ----- */
  var apps = new Map();
  M.apps = { register: function (a) { apps.set(a.id, a); return a; }, get: function (id) { return apps.get(id); }, list: function () { return Array.from(apps.values()); } };

  /* ----- Dock ----- */
  class DockItemEl extends UIElement { static props = { id: {}, label: {}, icon: {}, color: {}, running: { type: 'boolean' }, badge: {} }; }
  M.define('ui-dock-item', DockItemEl, { group: G, desc: 'Declarative dock item.' }); M.define('ui-dock-separator', class extends UIElement {}, { group: G, desc: 'Declarative dock separator.' }); M.define('ui-dock-indicator', class extends UIElement {}, { group: G, desc: 'Running-app dot.' });
  class Dock extends UIElement {
    static props = { items: { type: 'any', doc: '[{id,label,icon,color,running,badge} | {separator:true}]' }, magnify: { type: 'boolean', default: true }, magnification: { type: 'number', default: 1.7 }, menuFor: { type: 'any', default: null, doc: '(item) => menu items for right-click' } };
    build() { this._row = h('div', { class: 'ui-own', style: { display: 'contents' }, role: 'toolbar', 'aria-label': 'Dock' }); this.append(this._row);
      this._row.addEventListener('click', (e) => { var b = e.target.closest('.ui-dk-it'); if (b) { var id = b.getAttribute('data-id'); this.emit('select', { id: id, item: this._item(id) }); } });
      this._row.addEventListener('contextmenu', (e) => { var b = e.target.closest('.ui-dk-it'); if (!b || !this.menuFor) return; var items = this.menuFor(this._item(b.getAttribute('data-id'))); if (items && items.length) M.contextMenu.show(e, items); });
      this._row.addEventListener('pointermove', (e) => { if (!this.magnify || e.pointerType === 'touch') return; var x = e.clientX; if (this._raf) return; this._raf = requestAnimationFrame(() => { this._raf = 0; this._scale(x); }); });
      this._row.addEventListener('pointerleave', () => this._scale(null)); }
    _list() { if (Array.isArray(this.items)) return this.items; return Array.prototype.map.call(this.querySelectorAll(':scope > ui-dock-item, :scope > ui-dock-separator'), function (c) { return c.localName === 'ui-dock-separator' ? { separator: true } : { id: c.getAttribute('id'), label: c.getAttribute('label'), icon: c.getAttribute('icon'), color: c.getAttribute('color'), running: c.hasAttribute('running'), badge: c.getAttribute('badge') }; }); }
    _item(id) { return this._list().filter(function (i) { return i.id === id; })[0]; }
    _scale(x) { Array.prototype.forEach.call(this._row.querySelectorAll('.ui-dk-it'), (b) => { var s = 1; if (x != null) { var r = b.getBoundingClientRect(); s = M.anim.dockMagnification(x - (r.left + r.width / 2), { max: this.magnification, range: 64 }); } b.style.setProperty('--s', s.toFixed(3)); }); }
    itemRect(id) { var b = this._row.querySelector('[data-id="' + id + '"]'); return b ? U.rectOf(b) : null; }
    bounce(id) { var b = this._row.querySelector('[data-id="' + id + '"] .ui-dk-ic'); if (b) M.anim.bounce(b, { height: 18, iterations: 2 }); }
    update() { this._row.innerHTML = ''; this._list().forEach((it) => { if (it.separator) { this._row.append(h('div', { class: 'ui-dk-sep', role: 'separator' })); return; } this._row.append(h('button', { class: 'ui-dk-it', type: 'button', 'data-id': it.id, tooltip: it.label, placement: 'top', 'aria-label': it.label + (it.running ? ' (aberto)' : '') }, h('div', { class: 'ui-dk-ic', style: it.color ? { '--ic': it.color } : null }, h('ui-icon', { name: it.icon || 'window' })), it.badge ? h('span', { class: 'ui-dk-badge' }, it.badge) : null, it.running ? h('ui-dock-indicator') : null)); }); this.classList.add('ui-glass'); }
  }
  M.define('ui-dock', Dock, { group: G, desc: 'Application dock with magnification, running indicators, badges, bounce and context menus.', events: ['ui-select'], methods: ['itemRect(id)', 'bounce(id)'] });

  /* ----- menubar parts ----- */
  class MenubarClock extends UIElement {
    static props = { format: { default: 'datetime', doc: 'time|datetime' } };
    build() { this._b = h('button', { class: 'ui-own', type: 'button', style: { display: 'contents', font: 'inherit', color: 'inherit' } }); }
    bind() { var t = () => { var d = new Date(); this.textContent = this.format === 'time' ? M.format.time(d) : M.format.date(d, { weekday: 'short', day: 'numeric', month: 'short' }) + '  ' + M.format.time(d); }; t(); var id = setInterval(t, 1000); this.defer(() => clearInterval(id)); this.setAttribute('role', 'button'); this.tabIndex = 0; this.setAttribute('aria-label', 'Data e hora'); }
  }
  M.define('ui-menubar-clock', MenubarClock, { group: G, desc: 'Live clock for the menu bar.' });
  class StatusItem extends UIElement {
    static props = { icon: {}, label: {}, text: {}, badge: { type: 'boolean' } };
    build() { this._b = h('button', { class: 'ui-own ui-msi', type: 'button' }, this._i = h('ui-icon'), this._t = h('span'), this._d = h('span', { class: 'dot' })); this.append(this._b); this._b.addEventListener('click', () => this.emit('activate', { anchor: this._b })); }
    update() { this._i.hidden = !this.icon; this._i.setAttribute('name', this.icon || ''); this._t.textContent = this.text || ''; this._d.hidden = !this.badge; this._b.setAttribute('aria-label', this.label || this.icon || ''); }
    get button() { return this._b; }
  }
  M.define('ui-menubar-status-item', StatusItem, { group: G, desc: 'Menu bar status item (icon/text button).', events: ['ui-activate'] });
  M.define('ui-system-tray', class extends UIElement { update() { this.setAttribute('role', 'group'); this.setAttribute('aria-label', 'Bandeja do sistema'); } }, { group: G, desc: 'Container for status items.' });

  /* ----- Quick settings / Control center ----- */
  class QuickSettings extends UIElement {
    static props = { inline: { type: 'boolean' } };
    build() {
      var S = M.system, tile = (key, icon, label) => { var b = h('button', { class: 'ui-qs-tile', type: 'button', 'aria-pressed': 'false', 'data-k': key }, h('div', { class: 'ic', '.innerHTML': M.icon(icon, { size: '1em' }) }), h('div', null, h('span', null, label), h('small'))); b.addEventListener('click', () => { var v = !S.get(key); if (key === 'dark') M.ThemeManager.apply(v ? 'dark' : 'light'); else S.set(key, v); }); return b; };
      this._grid = h('div', { class: 'ui-qs-grid' }, tile('wifi', 'wifi', 'Wi-Fi'), tile('bluetooth', 'bluetooth', 'Bluetooth'), tile('dark', 'moon', 'Modo escuro'), tile('dnd', 'bell', 'Não perturbe'));
      var sl = (key, icon, label) => { var s = h('ui-slider', { 'aria-label': label, min: 0, max: 100, 'data-k': key }); s.addEventListener('ui-input', (e) => S.set(key, e.detail.value)); return h('div', { class: 'ui-qs-sl' }, h('div', null, h('ui-icon', { name: icon }), label), s); };
      this._sl = [sl('brightness', 'sun', 'Brilho'), sl('volume', 'volume', 'Som')]; this.append(this._grid, this._sl[0], this._sl[1]); this.classList.add('ui-glass');
    }
    bind() { var S = M.system, sync = () => { var s = S.get(); this.$$('.ui-qs-tile').forEach(function (b) { var k = b.getAttribute('data-k'), on = !!s[k]; b.setAttribute('aria-pressed', String(on)); b.querySelector('small').textContent = on ? 'Ativado' : 'Desativado'; }); this.$$('ui-slider').forEach(function (sl) { var k = sl.getAttribute('data-k'); if (sl.value !== s[k]) sl.value = s[k]; }); }; sync(); this.defer(S.subscribe(sync)); }
  }
  M.define('ui-quick-settings', QuickSettings, { group: G, desc: 'Toggles and sliders bound to MiniUI.system (Wi-Fi, dark mode, DND, brightness, volume).' });
  class ControlCenter extends UIElement {
    static props = { icon: { default: 'sliders' } };
    build() { this._si = h('ui-menubar-status-item', { class: 'ui-own', icon: this.icon, label: 'Central de controle' }); this.append(this._si); this._si.addEventListener('ui-activate', () => this.toggle()); this.style.display = 'inline-flex'; }
    toggle() { if (this._h && !this._h.closed) { this._h.close(); return; } var qs = h('ui-quick-settings'); this._si.button.setAttribute('aria-expanded', 'true'); this._h = M.overlay.open(qs, { anchor: this._si.button, placement: 'bottom-end', offset: 6, layer: 'popover', onClose: () => this._si.button.setAttribute('aria-expanded', 'false') }); }
    unbind() { if (this._h && !this._h.closed) this._h.close(); }
  }
  M.define('ui-control-center', ControlCenter, { group: G, desc: 'Menu bar button opening the quick settings panel.', methods: ['toggle()'] });

  /* ----- Notification center ----- */
  class NotificationCenter extends UIElement {
    static props = {};
    build() { this._si = h('ui-menubar-status-item', { class: 'ui-own', icon: 'bell', label: 'Central de notificações' }); this.append(this._si); this.style.display = 'inline-flex'; this._si.addEventListener('ui-activate', () => this.toggle()); }
    bind() { this.defer(M.Notifications.store.subscribe(() => { this._si.badge = M.Notifications.unread() > 0 && !(this._h && !this._h.closed); if (this._list) this._render(); }, ['items', 'dnd'])); }
    toggle() {
      if (this._h && !this._h.closed) { this._h.close(); return; } M.Notifications.markAllRead(); this._si.badge = false;
      var dnd = h('ui-switch', { 'aria-label': 'Não perturbe', color: 'accent' }); dnd.checked = M.Notifications.store.get('dnd'); dnd.addEventListener('ui-change', (e) => M.system.set('dnd', e.detail.checked));
      this._list = h('div', { class: 'ui-nc-l ui-scroll' }); var clear = h('ui-button', { variant: 'link', size: 'sm' }, 'Limpar tudo'); clear.addEventListener('click', () => M.Notifications.clear());
      var el = h('div', { class: 'ui-nc ui-glass', role: 'dialog', 'aria-label': 'Notificações' }, h('div', { class: 'ui-nc-h' }, h('h3', null, 'Notificações'), clear), h('div', { class: 'ui-nc-dnd' }, h('span', null, 'Não perturbe'), dnd), this._list);
      this._si.button.setAttribute('aria-expanded', 'true'); this._h = M.overlay.open(el, { noPosition: true, layer: 'popover', animation: 'notification', onClose: () => { this._si.button.setAttribute('aria-expanded', 'false'); this._list = null; } }); this._render();
    }
    _render() { var items = M.Notifications.store.get('items'), l = this._list; l.innerHTML = ''; if (!items.length) { l.append(h('ui-empty-state', { icon: 'bell', heading: 'Sem notificações', description: 'Você está em dia.' })); return; } var by = {}; items.forEach(function (i) { (by[i.app] = by[i.app] || []).push(i); }); Object.keys(by).forEach((app) => { l.append(h('div', { class: 'ui-nc-app' }, app)); by[app].forEach((n) => { var el = h('ui-notification', { heading: n.title, body: n.body, time: M.format.relative(n.time), icon: n.icon }); el.addEventListener('ui-dismiss', (e) => { e.preventDefault(); M.Notifications.remove(n.id); }); l.append(el); }); }); }
    unbind() { if (this._h && !this._h.closed) this._h.close(); }
  }
  M.define('ui-notification-center', NotificationCenter, { group: G, desc: 'Notification centre panel fed by MiniUI.Notifications (grouped by app, Do-Not-Disturb).', methods: ['toggle()'] });

  /* ----- Launchpad / app switcher ----- */
  M.launchpad = { open: function (list, onLaunch) { var handle; var g = h('div', { class: 'ui-lp-g' }, list.map(function (a) { return h('button', { class: 'ui-lp-a', type: 'button', onclick: function () { handle.close().then(function () { onLaunch(a.id); }); } }, h('div', { class: 'ic', style: { background: a.color } }, h('ui-icon', { name: a.icon })), a.name); })); var el = h('div', { class: 'ui-lp', role: 'dialog', 'aria-label': 'Aplicativos', onclick: function (e) { if (e.target === el) handle.close(); } }, h('h2', { style: { fontWeight: 600 } }, 'Aplicativos'), g); handle = M.overlay.open(el, { modal: true, layer: 'popover', trapFocus: true, animation: 'fade', backdropClass: 'ui-bd-dark' }); return handle; } };
  class AppSwitcher extends UIElement {
    static props = { apps: { type: 'any', doc: '[{id,name,icon,color}] (defaults to MiniUI.apps)' } };
    build() { this._b = h('ui-button', { class: 'ui-own', icon: 'grid', variant: 'toolbar', 'aria-label': 'Aplicativos' }); this.append(this._b); this._b.addEventListener('click', () => M.launchpad.open(this.apps || M.apps.list(), (id) => this.emit('launch', { id: id }))); }
  }
  M.define('ui-app-switcher', AppSwitcher, { group: G, desc: 'Launchpad-style application grid.', events: ['ui-launch'] });

  /* ----- Desktop widget / surface ----- */
  class DesktopWidget extends UIElement {
    static props = { heading: {}, x: { type: 'number', default: 24 }, y: { type: 'number', default: 24 }, width: { type: 'number', default: 200 } };
    build() { var c = this.slotted; this._h = h('div', { class: 'ui-own ui-dw-h' }); this.prepend(this._h); this.append(h('div', { class: 'ui-own' }, c)); this.classList.add('ui-glass'); var x0, y0; M.drag.track(this._h, { onStart: () => { x0 = this.x; y0 = this.y; }, onMove: (dx, dy) => { this.x = x0 + dx; this.y = y0 + dy; this.style.left = this.x + 'px'; this.style.top = this.y + 'px'; } }); }
    update() { this._h.textContent = this.heading || ''; this._h.hidden = !this.heading; this.style.left = this.x + 'px'; this.style.top = this.y + 'px'; this.style.setProperty('--ui-w', this.width + 'px'); }
  }
  M.define('ui-desktop-widget', DesktopWidget, { group: G, desc: 'Draggable glass widget for the desktop surface.' });
  M.define('ui-desktop-surface', class extends UIElement {}, { group: G, desc: 'Positioned layer for desktop icons/widgets.' });

  /* ----- Desktop environment ----- */
  var WALLS = [null, 'linear-gradient(160deg,#0f2027,#203a43,#2c5364)', 'radial-gradient(900px 600px at 20% 20%,#ffd89b 0%,transparent 60%),linear-gradient(160deg,#19547b,#ffd89b)', 'linear-gradient(135deg,#41295a,#2f0743)', 'linear-gradient(160deg,#134e5e,#71b280)'];
  class Desktop extends UIElement {
    static props = { wallpaper: {}, dockHidden: { type: 'boolean', reflect: false } };
    build() {
      this._mb = h('ui-menubar', { class: 'ui-glass' }); this._wm = h('ui-window-manager'); this._widgets = h('div', { class: 'ui-dt-widgets' }); this._dock = h('ui-dock', { menuFor: null });
      this._area = h('div', { class: 'ui-dt-area' }, this._widgets, this._wm);
      this.append(h('div', { class: 'ui-own ui-dt-mb' }, this._mb), this._area, h('div', { class: 'ui-own ui-dt-dock' }, this._dock));
      this._pinned = []; this._wallI = 0;
      this._dock.menuFor = (it) => { if (!it) return []; var wins = this._wm.windows.filter(function (w) { return w.getAttribute('data-app') === it.id; }); return [{ label: it.label, type: 'group' }, { label: 'Abrir nova janela', icon: 'plus', action: () => this.launch(it.id, { forceNew: true }) }, wins.length ? { label: 'Fechar todas as janelas', icon: 'x', danger: true, action: () => wins.forEach(function (w) { w.close(true); }) } : { label: 'Fechar', disabled: true }]; };
      this._dock.addEventListener('ui-select', (e) => this.launch(e.detail.id));
      this._wm.minimizeTarget = (win) => this._dock.itemRect(win.getAttribute('data-app'));
      this.addEventListener('contextmenu', (e) => { if (e.target.closest('ui-window,ui-dock,ui-menubar,.ui-menu')) return; M.contextMenu.show(e, this._desktopMenu()); });
      this._cc = h('ui-control-center'); this._nc = h('ui-notification-center'); this._clock = h('ui-menubar-clock');
      var tray = h('ui-system-tray', null, h('ui-menubar-status-item', { icon: 'wifi', label: 'Wi-Fi' }), h('ui-menubar-status-item', { icon: 'battery', label: 'Bateria', text: '87%' }), this._cc, this._nc, this._clock); tray.setAttribute('slot', 'end'); (this._mb._e || this._mb).append(tray);
    }
    get wm() { return this._wm; } get dock() { return this._dock; }
    registerApp(a) { M.apps.register(a); if (a.pinned !== false && this._pinned.indexOf(a.id) < 0) this._pinned.push(a.id); this._refreshDock(); this._refreshMenus(); return a; }
    _desktopMenu() { var dark = M.ThemeManager.scheme === 'dark'; return [{ label: 'Novo terminal', icon: 'terminal', action: () => this.launch('terminal', { forceNew: true }) }, { label: 'Nova nota', icon: 'notepad', action: () => this.launch('notes', { forceNew: true }) }, '-', { label: 'Alterar papel de parede', icon: 'image', action: () => this.nextWallpaper() }, { label: dark ? 'Aparência clara' : 'Aparência escura', icon: dark ? 'sun' : 'moon', action: () => M.ThemeManager.toggle() }, '-', { label: 'Organizar janelas em cascata', icon: 'layers', action: () => this._wm.cascadeAll() }, { label: 'Minimizar todas', action: () => this._wm.minimizeAll() }, { label: this.hasAttribute('dock-hidden') ? 'Mostrar Dock' : 'Ocultar Dock', icon: 'dock', action: () => this.toggleDock() }]; }
    nextWallpaper() { this._wallI = (this._wallI + 1) % WALLS.length; this.style.background = WALLS[this._wallI] || ''; this.style.backgroundSize = 'cover'; }
    toggleDock() { this.toggleAttribute('dock-hidden'); }
    running(id) { return this._wm.windows.some(function (w) { return w.getAttribute('data-app') === id; }); }
    _refreshDock() { var apps = this._pinned.map((id) => M.apps.get(id)), runningExtra = this._wm.windows.map(function (w) { return w.getAttribute('data-app'); }).filter(function (id, i, a) { return id && a.indexOf(id) === i && M.apps.get(id); }).filter((id) => this._pinned.indexOf(id) < 0).map((id) => M.apps.get(id));
      var items = apps.concat(runningExtra).map((a) => ({ id: a.id, label: a.name, icon: a.icon, color: a.color, running: this.running(a.id) })); this._dock.items = items.concat([{ separator: true }, { id: '__launchpad', label: 'Aplicativos', icon: 'grid', color: 'linear-gradient(135deg,#8e8e93,#48484a)' }]); }
    _appMenus(app) {
      var wm = this._wm, win = () => wm.active; var def = [
        { label: 'Arquivo', items: [{ label: 'Nova janela', icon: 'plus', shortcut: 'Mod+N', action: () => app && this.launch(app.id, { forceNew: true }) }, '-', { label: 'Fechar janela', shortcut: 'Mod+W', action: () => win() && win().close() }] },
        { label: 'Editar', items: [{ label: 'Desfazer', shortcut: 'Mod+Z', disabled: true }, { label: 'Refazer', shortcut: 'Mod+Shift+Z', disabled: true }, '-', { label: 'Copiar', shortcut: 'Mod+C', action: () => document.execCommand && document.execCommand('copy') }, { label: 'Colar', shortcut: 'Mod+V', disabled: true }] },
        { label: 'Visualizar', items: [{ label: 'Alternar tela cheia', icon: 'maximize', action: () => win() && M.fullscreen.toggle(win()) }, { label: 'Aparência escura', type: 'checkbox', checked: M.ThemeManager.scheme === 'dark', action: () => M.ThemeManager.toggle() }, { label: 'Ocultar Dock', action: () => this.toggleDock() }] },
        { label: 'Janela', items: [{ label: 'Minimizar', action: () => win() && win().minimize() }, { label: 'Zoom', action: () => win() && win().toggleMaximize() }, { label: 'Mover para a esquerda', action: () => wm.tile('left') }, { label: 'Mover para a direita', action: () => wm.tile('right') }, '-', { label: 'Organizar em cascata', action: () => wm.cascadeAll() }, { label: 'Alternar janelas', shortcut: 'Alt+Tab', action: () => M.windowSwitcher.open(wm, 1) }, '-'].concat(function () { var l = wm.windows.map(function (w) { return { label: w.heading || 'Janela', icon: w.icon || 'window', action: function () { wm.focusWindow(w); } }; }); return l.length ? l : [{ label: 'Nenhuma janela', disabled: true }]; }()) },
        { label: 'Ajuda', items: [{ label: 'Paleta de comandos', icon: 'command', shortcut: 'Mod+K', action: () => M.palette.open() }, { label: 'Sobre o Mini macOS UI', action: () => M.Dialogs.message({ heading: 'Mini macOS UI Toolkit', message: 'Versão ' + M.version + ' — SDK de interface em HTML, CSS e JavaScript nativos.', kind: 'info' }) }] }];
      return def;
    }
    _refreshMenus() {
      var app = (this._wm.active && M.apps.get(this._wm.active.getAttribute('data-app'))) || null;
      var logo = { icon: 'logo', label: 'Sistema', items: [{ label: 'Sobre este Mini macOS', action: () => M.Dialogs.message({ heading: 'Mini macOS', message: 'Ambiente demonstrativo construído com o MiniUI Toolkit.', kind: 'info' }) }, '-', { label: 'Ajustes do Sistema…', icon: 'settings', action: () => this.launch('settings') }, { label: 'Aparência escura', type: 'checkbox', checked: M.ThemeManager.scheme === 'dark', action: () => M.ThemeManager.toggle() }, '-', { label: 'Aplicativos…', icon: 'grid', action: () => this.openLaunchpad() }, { label: 'Encerrar todas as janelas', icon: 'power', danger: true, action: () => this._wm.closeAll() }].concat(this.hasAttribute('exitable') ? ['-', { label: 'Sair do ambiente', icon: 'x', action: () => this.emit('exit') }] : []) };
      var menus = [logo, { label: app ? app.name : 'Finder', bold: true, items: [{ label: 'Sobre ' + (app ? app.name : 'o Finder'), action: () => M.toast.info((app ? app.name : 'Finder') + ' — aplicativo de demonstração') }, '-', { label: 'Fechar ' + (app ? app.name : 'janela'), shortcut: 'Mod+W', action: () => this._wm.active && this._wm.active.close() }] }].concat(app && app.menus ? app.menus(this) : this._appMenus(app));
      this._mb.menus = menus;
    }
    openLaunchpad() { M.launchpad.open(M.apps.list(), (id) => this.launch(id)); }
    /** launch(id, { forceNew }) — focuses an existing window of a singleton app or creates one. */
    launch(id, o) {
      o = o || {}; if (id === '__launchpad') { this.openLaunchpad(); return null; } var app = M.apps.get(id); if (!app) return null;
      var existing = this._wm.windows.filter(function (w) { return w.getAttribute('data-app') === id; });
      if (existing.length && !o.forceNew && app.singleton !== false) { var w = existing[0]; w.state === 'minimized' ? w.restore() : this._wm.focusWindow(w); return w; }
      var win = this._wm.create({ heading: app.name, icon: app.icon, width: app.width || 720, height: app.height || 480, app: id, flush: app.flush !== false, content: (w) => app.create(w, this), toolbar: app.toolbar ? (w) => app.toolbar(w, this) : null });
      this._dock.bounce(id); return win;
    }
    bind() {
      this._refresh = () => { this._refreshDock(); this._refreshMenus(); };
      this.listen(this._wm, 'ui-change', this._refresh); this.defer(M.events.on('theme:change', this._refresh)); this._refresh();
      this._off = M.keys.register('Mod+Space', () => this.openLaunchpad(), { description: 'Abrir aplicativos', allowInInput: true }); this.defer(this._off);
    }
    update() { if (this.wallpaper) this.style.background = this.wallpaper; }
  }
  M.define('ui-desktop', Desktop, { group: G, desc: 'Complete desktop environment: wallpaper, menu bar, window manager, dock, widgets, control & notification centres, context menu. Register apps with registerApp().', methods: ['registerApp(app)', 'launch(id)', 'nextWallpaper()', 'toggleDock()', 'wm', 'dock'] });
});

/* ---- MODULE: src/components/data-display/data-display.js ---- */
MiniUI.module('src/components/data-display/data-display.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Data Display';
  var str = function (v) { return v == null ? '' : String(v); };

  /* ---------- List / VirtualList ---------- */
  class List extends UIElement {
    static props = { items: { type: 'any', doc: '[{id,label,description,icon,avatar,end}]' }, selectable: { default: 'none', doc: 'none|single|multiple' }, value: { type: 'any', default: null, doc: 'Selected id (single) or array (multiple)' }, virtual: { type: 'boolean' }, rowHeight: { type: 'number', default: 44 }, height: { type: 'number', default: 320, doc: 'Viewport height when virtual' }, renderItem: { type: 'any', default: null, doc: '(item, index) => Node' }, bordered: { type: 'boolean' }, label: { default: 'Lista' } };
    build() { this._ul = h('ul', { class: 'ui-own', role: 'listbox' }); this.append(this._ul);
      this._ul.addEventListener('click', (e) => { var li = e.target.closest('.ui-li'); if (li) this._toggle(li.getAttribute('data-id'), li); });
      this._ul.addEventListener('keydown', (e) => { var li = e.target.closest('.ui-li'); if (!li) return; if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this._toggle(li.getAttribute('data-id'), li); } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); var all = Array.prototype.slice.call(this._ul.querySelectorAll('.ui-li')), n = all[all.indexOf(li) + (e.key === 'ArrowDown' ? 1 : -1)]; if (n) { n.focus(); } else if (this._vs) { var i = +li.getAttribute('data-index') + (e.key === 'ArrowDown' ? 1 : -1); this._vs.scrollToIndex(i); setTimeout(() => { var t = this._ul.querySelector('[data-index="' + i + '"]'); t && t.focus(); }, 40); } } }); }
    _items() { return (this.items || []).map(function (i, n) { return typeof i === 'object' ? Object.assign({ id: String(n) }, i, { id: String(i.id != null ? i.id : n) }) : { id: String(n), label: String(i) }; }); }
    _sel() { return this.selectable === 'multiple' ? (Array.isArray(this.value) ? this.value.map(String) : []) : this.value == null ? [] : [String(this.value)]; }
    _toggle(id, li) { if (this.selectable === 'none') { this.emit('activate', { id: id, item: this._items().filter(function (i) { return i.id === id; })[0] }); return; } var s = this._sel(), item = this._items().filter(function (i) { return i.id === id; })[0]; if (this.selectable === 'multiple') { s = s.indexOf(id) > -1 ? s.filter(function (x) { return x !== id; }) : s.concat(id); this.value = s; } else this.value = id; this.emit('select', { id: id, item: item, value: this.value }); }
    _row(it, i, sel) { if (this.renderItem) { var n = this.renderItem(it, i); n.classList.add('ui-li'); n.setAttribute('role', 'option'); n.setAttribute('data-id', it.id); n.setAttribute('aria-selected', String(sel.indexOf(it.id) > -1)); n.tabIndex = i === 0 ? 0 : -1; return n; }
      return h('li', { class: 'ui-li', role: 'option', 'data-id': it.id, 'aria-selected': String(sel.indexOf(it.id) > -1), tabindex: i === 0 ? 0 : -1 }, it.avatar ? h('ui-avatar', { name: it.label, src: it.avatar, size: 'sm' }) : it.icon ? h('ui-icon', { name: it.icon }) : null, h('div', { class: 'main' }, h('div', { class: 't' }, it.label), it.description ? h('div', { class: 'sub' }, it.description) : null), it.end ? h('div', { class: 'end' }, it.end) : null); }
    update() {
      var items = this._items(), sel = this._sel(); this._ul.setAttribute('aria-label', this.label); this._ul.setAttribute('aria-multiselectable', String(this.selectable === 'multiple'));
      if (this.virtual) {
        this.style.height = this.height + 'px'; this.style.overflow = 'auto';
        this._cur = items;
        if (!this._vs) { this._ul.remove(); this._vs = new M.VirtualScroller(this, { count: items.length, rowHeight: this.rowHeight, render: (i) => this._row(this._cur[i], i, this._sel()) }); this._vs.inner.classList.add('ui-own'); this._vs.inner.setAttribute('role', 'listbox'); }
        this._cur = items; this._vs.o.rowHeight = this.rowHeight; this._vs.setCount(items.length);
      } else { this._ul.innerHTML = ''; items.forEach((it, i) => this._ul.append(this._row(it, i, sel))); }
    }
    teardown() { if (this._vs) { this._vs.destroy(); this._vs = null; } }
    get renderedCount() { return this._vs ? this._vs.renderedCount() : this._ul.children.length; }
  }
  M.define('ui-list', List, { group: G, desc: 'Selectable list with keyboard support. With `virtual` only visible rows exist in the DOM.', events: ['ui-select', 'ui-activate'] });
  M.alias('ui-virtual-list', List, { virtual: true, selectable: 'single' }, { desc: 'Virtualised list for very large datasets.' });
  M.define('ui-list-item', class extends UIElement {}, { group: G, desc: 'Styled row for manual list composition.' });

  /* ---------- DataTable ---------- */
  class DataTable extends UIElement {
    static props = { columns: { type: 'any', doc: '[{key,label,sortable,width,align,type,render(row)}]' }, rows: { type: 'any', doc: 'Array of row objects' }, rowKey: { default: 'id' }, selectable: { default: 'none', doc: 'none|single|multiple' }, selected: { type: 'any', default: null, doc: 'Array of selected row keys' }, pageSize: { type: 'number', default: 0, doc: '0 = no pagination' }, page: { type: 'number', default: 1 }, searchable: { type: 'boolean' }, filter: { default: '' }, sortKey: { default: '' }, sortDir: { default: 'asc' }, virtual: { type: 'boolean' }, height: { type: 'number', default: 0 }, rowHeight: { type: 'number', default: 36 }, label: { default: 'Tabela de dados' } };
    build() {
      this._bar = h('div', { class: 'ui-dt-bar' }, this._q = h('ui-search-field', { placeholder: 'Filtrar…', 'aria-label': 'Filtrar linhas' }), this._cnt = h('div', { class: 'ui-dt-count' }));
      this._head = h('div', { class: 'ui-dt-row ui-dt-head', role: 'row' }); this._sc = h('div', { class: 'ui-dt-scroll ui-scroll' }); this._body = h('div', { class: 'ui-dt-body', role: 'rowgroup' }); this._sc.append(this._body);
      this._foot = h('div', { class: 'ui-dt-foot' }, this._fi = h('span'), this._pg = h('ui-pagination'));
      this._root = h('div', { class: 'ui-own ui-dt', role: 'table', 'aria-label': this.label }, this._bar, h('div', { role: 'rowgroup' }, this._head), this._sc, this._foot); this.append(this._root);
      this._q.addEventListener('ui-search', (e) => { this.filter = e.detail.value; this.page = 1; });
      this._pg.addEventListener('ui-change', (e) => { this.page = e.detail.page; this.emit('page', e.detail); });
      this._head.addEventListener('click', (e) => { var b = e.target.closest('[data-sort]'); if (b) this.sortBy(b.getAttribute('data-sort')); var ck = e.target.closest('[data-all]'); if (ck) this._all(ck.checked); });
      this._body.addEventListener('click', (e) => { var r = e.target.closest('.ui-dt-row'); if (!r) return; var k = r.getAttribute('data-k'); if (e.target.closest('input')) { this._pick(k, e.target.checked); } else { this.emit('row-click', { key: k, row: this._byKey(k) }); if (this.selectable === 'single') this._pick(k, true); } });
      this._body.addEventListener('keydown', (e) => { var r = e.target.closest('.ui-dt-row'); if (!r) return; if (e.key === ' ' && this.selectable !== 'none') { e.preventDefault(); var k = r.getAttribute('data-k'); this._pick(k, this._selSet().indexOf(k) < 0); } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); var n = r[e.key === 'ArrowDown' ? 'nextElementSibling' : 'previousElementSibling']; n && n.focus(); } });
    }
    _cols() { return this.columns || []; }
    _byKey(k) { return (this.rows || []).filter(function (r, i) { return String(this._key(r, i)) === k; }, this)[0]; }
    _key(r, i) { return r[this.rowKey] != null ? r[this.rowKey] : i; }
    _selSet() { return (this.selected || []).map(String); }
    _pick(k, on) { var s = this._selSet(); if (this.selectable === 'single') s = on ? [k] : []; else s = on ? s.concat(k).filter(function (x, i, a) { return a.indexOf(x) === i; }) : s.filter(function (x) { return x !== k; }); this.selected = s; this.emit('select', { selected: s, rows: s.map((x) => this._byKey(x)) }); }
    _all(on) { this.selected = on ? this._view.map((r, i) => String(this._key(r, i))) : []; this.emit('select', { selected: this.selected, rows: this.selected.map((x) => this._byKey(x)) }); }
    sortBy(k) { if (this.sortKey === k) { if (this.sortDir === 'asc') this.sortDir = 'desc'; else { this.sortKey = ''; this.sortDir = 'asc'; } } else { this.sortKey = k; this.sortDir = 'asc'; } this.emit('sort', { key: this.sortKey, dir: this.sortDir }); }
    /** Filter + sort pipeline (pure; the DOM only receives the visible slice). */
    compute() {
      var rows = (this.rows || []).slice(), q = (this.filter || '').toLowerCase(), cols = this._cols();
      if (q) rows = rows.filter(function (r) { return cols.some(function (c) { return str(r[c.key]).toLowerCase().indexOf(q) > -1; }); });
      if (this.sortKey) { var k = this.sortKey, d = this.sortDir === 'desc' ? -1 : 1; rows.sort(function (a, b) { var x = a[k], y = b[k]; if (x == null) return 1; if (y == null) return -1; return (typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y), undefined, { numeric: true })) * d; }); }
      return rows;
    }
    _cell(c, r) { var v = r[c.key]; if (c.render) { var o = c.render(r, v); return o && o.nodeType ? o : document.createTextNode(str(o)); } if (c.type === 'number') return document.createTextNode(v == null ? '' : M.format.number(v)); if (c.type === 'date') return document.createTextNode(v ? M.format.date(v) : ''); if (c.type === 'currency') return document.createTextNode(M.format.currency(v)); if (c.type === 'bytes') return document.createTextNode(M.format.bytes(v)); return document.createTextNode(str(v)); }
    _rowEl(r, i) {
      var cols = this._cols(), k = String(this._key(r, i)), on = this._selSet().indexOf(k) > -1, multi = this.selectable === 'multiple';
      var el = h('div', { class: 'ui-dt-row', role: 'row', 'data-k': k, tabindex: i === 0 ? 0 : -1, 'aria-selected': this.selectable !== 'none' ? String(on) : null });
      if (multi) { var cb = h('input', { type: 'checkbox', 'aria-label': 'Selecionar linha' }); cb.checked = on; el.append(h('div', { class: 'ui-dt-c ck', role: 'cell' }, cb)); }
      cols.forEach((c) => el.append(h('div', { class: 'ui-dt-c' + (c.align === 'right' || c.type === 'number' || c.type === 'currency' || c.type === 'bytes' ? ' r' : ''), role: 'cell' }, this._cell(c, r))));
      return el;
    }
    update() {
      var cols = this._cols(), multi = this.selectable === 'multiple', tpl = (multi ? '36px ' : '') + cols.map(function (c) { return c.width ? (/^\d+$/.test(c.width) ? c.width + 'px' : c.width) : 'minmax(0,1fr)'; }).join(' ');
      this._root.style.setProperty('--cols', tpl); this._root.style.setProperty('--ui-dt-rh', this.rowHeight + 'px'); this._root.setAttribute('aria-label', this.label); this._bar.hidden = !this.searchable; if (this._q.value !== this.filter) this._q.value = this.filter;
      this._head.innerHTML = ''; if (multi) { var all = h('input', { type: 'checkbox', 'aria-label': 'Selecionar todas', 'data-all': '' }); this._head.append(h('div', { class: 'ui-dt-c ck', role: 'columnheader' }, all)); this._allCb = all; }
      cols.forEach((c) => { var right = c.align === 'right' || c.type === 'number' || c.type === 'currency' || c.type === 'bytes', active = this.sortKey === c.key; var hd = h('div', { class: 'ui-dt-c', role: 'columnheader', style: { padding: 0 }, 'aria-sort': c.sortable ? (active ? (this.sortDir === 'asc' ? 'ascending' : 'descending') : 'none') : null }); hd.append(c.sortable ? h('button', { class: 'ui-dt-h' + (right ? ' r' : ''), type: 'button', 'data-sort': c.key }, c.label, active ? h('ui-icon', { name: this.sortDir === 'asc' ? 'arrow-up' : 'arrow-down' }) : h('ui-icon', { name: 'chevrons-up-down', style: { opacity: .35 } })) : h('div', { class: 'ui-dt-h' + (right ? ' r' : ''), style: { cursor: 'default' } }, c.label)); this._head.append(hd); });
      var view = this._view = this.compute(), total = view.length, size = this.pageSize, slice = view;
      if (size > 0 && !this.virtual) { var pages = Math.max(1, Math.ceil(total / size)); if (this.page > pages) this._p.page = pages; slice = view.slice((this.page - 1) * size, this.page * size); }
      this._cnt.textContent = M.format.number(total) + ' linha' + (total === 1 ? '' : 's') + (this.filter ? ' (filtradas de ' + M.format.number((this.rows || []).length) + ')' : '');
      this._pg.hidden = !(size > 0 && !this.virtual); this._foot.hidden = this._pg.hidden; if (!this._pg.hidden) { this._pg.total = total; this._pg.pageSize = size; this._pg.page = this.page; this._fi.textContent = total ? ((this.page - 1) * size + 1) + '–' + Math.min(total, this.page * size) + ' de ' + total : ''; }
      if (this._allCb) { var s = this._selSet().length; this._allCb.checked = s > 0 && s >= view.length; this._allCb.indeterminate = s > 0 && s < view.length; }
      this._renderBody(slice);
    }
    _renderBody(slice) {
      if (this.virtual) {
        this._sc.style.height = (this.height || 360) + 'px'; this._sc.style.maxHeight = 'none';
        this._slice = slice;
        if (!this._vs) { this._body.remove(); this._vs = new M.VirtualScroller(this._sc, { count: slice.length, rowHeight: this.rowHeight, render: (i) => this._rowEl(this._slice[i], i) }); this._vs.inner.classList.add('ui-dt-body'); this._vs.inner.setAttribute('role', 'rowgroup'); }
        this._slice = slice; this._vs.o.rowHeight = this.rowHeight; this._vs.setCount(slice.length); return;
      }
      this._sc.style.height = ''; this._sc.style.setProperty('--ui-dt-h', this.height ? this.height + 'px' : 'none'); this._body.innerHTML = '';
      if (!slice.length) { this._body.append(h('div', { class: 'ui-dt-empty' }, 'Nenhum dado para exibir')); return; }
      var frag = document.createDocumentFragment(); slice.forEach((r, i) => frag.append(this._rowEl(r, i))); this._body.append(frag);
    }
    get renderedRows() { return this._vs ? this._vs.renderedCount() : this._body.querySelectorAll('.ui-dt-row').length; }
    teardown() { if (this._vs) { this._vs.destroy(); this._vs = null; } }
  }
  M.define('ui-data-table', DataTable, { group: G, desc: 'Data table: sorting, filtering, selection, pagination and virtualisation (`virtual`) for large datasets.', events: ['ui-sort', 'ui-select', 'ui-page', 'ui-row-click'], methods: ['sortBy(key)', 'compute()'] });
  M.alias('ui-data-grid', DataTable, { selectable: 'multiple', searchable: true }, { desc: 'Data grid preset: multi-select + search.' }); M.alias('ui-sortable-table', DataTable, {}, { desc: 'Alias: click headers to sort.' }); M.alias('ui-filterable-table', DataTable, { searchable: true }, { desc: 'Table with search box.' });
  ['header', 'row', 'cell'].forEach(function (p) { M.define('ui-table-' + p, class extends UIElement {}, { group: G, desc: 'Styled ' + p + ' for manual table composition.' }); });

  class ComparisonTable extends UIElement {
    static props = { plans: { type: 'any', doc: '[{name, highlight}]' }, features: { type: 'any', doc: '[{label, values:[bool|string]}]' } };
    update() { var p = this.plans || [], f = this.features || []; var t = h('table', null, h('thead', null, h('tr', null, h('th', null, ''), p.map(function (x) { return h('th', { class: x.highlight ? 'hl' : '' }, x.name); }))), h('tbody', null, f.map(function (r) { return h('tr', null, h('td', null, r.label), r.values.map(function (v, i) { return h('td', { class: p[i] && p[i].highlight ? 'hl' : '' }, v === true ? h('ui-icon', { name: 'check' }) : v === false ? h('ui-icon', { name: 'minus', class: 'no' }) : String(v)); })); }))); this.innerHTML = ''; this.append(t); }
  }
  M.define('ui-comparison-table', ComparisonTable, { group: G, desc: 'Feature comparison matrix.' });

  class DescriptionList extends UIElement { static props = { items: { type: 'any', doc: '[{term, value}] or object' }, bordered: { type: 'boolean' } }; update() { var it = this.items || []; if (!Array.isArray(it)) it = Object.keys(it).map(function (k) { return { term: k, value: it[k] }; }); this.innerHTML = ''; this.append(h('dl', null, it.map(function (x) { return [h('dt', null, x.term), h('dd', null, x.value == null ? '—' : x.value.nodeType ? x.value : String(x.value))]; }))); } }
  M.define('ui-description-list', DescriptionList, { group: G, desc: 'Term / description pairs.' }); M.alias('ui-key-value-list', DescriptionList, { bordered: true }, { desc: 'Key/value list.' });
  class Timeline extends UIElement { static props = { items: { type: 'any', doc: '[{title,time,description,icon,color}]' } }; update() { this.innerHTML = ''; this.append(h('ol', null, (this.items || []).map(function (i) { return h('li', { class: 'ui-tl', style: i.color ? { '--c': i.color } : null }, h('div', { class: 'dot', '.innerHTML': M.icon(i.icon || 'check', { size: '1em', stroke: 2.4 }) }), h('div', null, h('div', { class: 't' }, i.title), i.time ? h('div', { class: 'tm' }, i.time) : null, i.description ? h('div', { class: 'd' }, i.description) : null)); }))); } }
  M.define('ui-timeline', Timeline, { group: G, desc: 'Vertical timeline of events.' });
  class ActivityFeed extends UIElement { static props = { items: { type: 'any', doc: '[{user,action,target,time}]' } }; update() { this.innerHTML = ''; (this.items || []).forEach((i) => this.append(h('div', { class: 'ui-af' }, h('ui-avatar', { name: i.user, size: 'sm', src: i.avatar || '' }), h('div', { class: 'tx' }, h('div', null, h('strong', null, i.user), ' ', i.action, ' ', i.target ? h('strong', null, i.target) : null), h('div', { class: 'tm' }, i.time || ''))))); } }
  M.define('ui-activity-feed', ActivityFeed, { group: G, desc: 'Chronological activity stream.' });

  class StatCard extends UIElement {
    static props = { label: {}, value: { type: 'any', default: 0 }, format: { default: 'number', doc: 'number|compact|currency|percent|bytes|raw' }, delta: { type: 'number', default: null, doc: 'Percent change' }, deltaLabel: { default: 'vs. mês anterior' }, icon: {}, trend: { type: 'any', default: null, doc: 'Number[] for sparkline' }, invert: { type: 'boolean', doc: 'Lower is better' } };
    build() { this._l = h('span'); this._i = h('ui-icon'); this._v = h('div', { class: 'ui-sc-v' }); this._d = h('div', { class: 'ui-sc-d' }); this._s = h('ui-chart', { type: 'sparkline' }); this.append(h('div', { class: 'ui-own ui-sc-h' }, this._l, this._i), this._v, this._d, this._s); }
    _fmt(v) { var f = M.format; return this.format === 'compact' ? f.compact(v) : this.format === 'currency' ? f.currency(v) : this.format === 'percent' ? f.percent(v / 100) : this.format === 'bytes' ? f.bytes(v) : this.format === 'raw' ? String(v) : f.number(v); }
    update() { this._l.textContent = this.label || ''; this._i.hidden = !this.icon; this._i.setAttribute('name', this.icon || ''); var v = Number(this.value); if (isNaN(v) || this.format === 'raw') this._v.textContent = String(this.value); else { var from = this._last == null ? 0 : this._last; if (this._stop) this._stop(); this._stop = M.anim.countTo(from, v, 600, (x) => { this._v.textContent = this._fmt(x); }); this._last = v; }
      this._d.hidden = this.delta == null; if (this.delta != null) { var up = this.delta >= 0, good = this.invert ? !up : up; this._d.className = 'ui-sc-d ' + (good ? 'up' : 'down'); this._d.innerHTML = M.icon(up ? 'arrow-up' : 'arrow-down', { size: '12px', stroke: 2.6 }) + '<b>' + Math.abs(this.delta).toFixed(1) + '%</b><span>' + U.escape(this.deltaLabel) + '</span>'; }
      this._s.hidden = !this.trend; if (this.trend) this._s.data = this.trend; }
    teardown() { if (this._stop) this._stop(); }
  }
  M.define('ui-stat-card', StatCard, { group: G, desc: 'KPI card: animated value, delta indicator and sparkline.' }); M.alias('ui-metric-card', StatCard, {}, { desc: 'Alias of ui-stat-card.' });
  class Counter extends UIElement { static props = { value: { type: 'number', default: 0 }, duration: { type: 'number', default: 700 }, prefix: {}, suffix: {}, decimals: { type: 'number', default: 0 }, compact: { type: 'boolean' } }; update() { var to = this.value, from = this._last == null ? 0 : this._last; if (this._stop) this._stop(); this._stop = M.anim.countTo(from, to, this.duration, (x) => { this.textContent = (this.prefix || '') + (this.compact ? M.format.compact(x) : M.format.number(x, { minimumFractionDigits: this.decimals, maximumFractionDigits: this.decimals })) + (this.suffix || ''); }); this._last = to; this.setAttribute('role', 'status'); } teardown() { if (this._stop) this._stop(); } }
  M.define('ui-counter', Counter, { group: G, desc: 'Animated number.' }); M.alias('ui-number-display', Counter, { duration: 0 }, { desc: 'Static formatted number.' });
  class Rating extends UIElement {
    static props = { value: { type: 'number', default: 0 }, max: { type: 'number', default: 5 }, readonly: { type: 'boolean' }, size: { type: 'number', default: 20 }, label: { default: 'Avaliação' } };
    build() { this.setAttribute('role', 'radiogroup'); this.addEventListener('click', (e) => { var b = e.target.closest('.ui-rt'); if (b && !this.readonly) this._set2(+b.getAttribute('data-v')); }); this.addEventListener('keydown', (e) => { if (this.readonly) return; if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); this._set2(Math.min(this.max, this.value + 1)); this.$('[data-v="' + this.value + '"]').focus(); } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); this._set2(Math.max(0, this.value - 1)); var t = this.$('[data-v="' + Math.max(1, this.value) + '"]'); t && t.focus(); } }); }
    _set2(v) { this.value = v === this.value ? 0 : v; this.emit('change', { value: this.value }); }
    update() { this.style.setProperty('--ui-rt-s', this.size + 'px'); this.setAttribute('aria-label', this.label); this.innerHTML = ''; for (var i = 1; i <= this.max; i++) this.append(h('button', { class: 'ui-own ui-rt' + (i <= this.value ? ' on' : ''), type: 'button', role: 'radio', 'aria-checked': String(i === this.value), 'aria-label': i + (i === 1 ? ' estrela' : ' estrelas'), 'data-v': i, tabindex: (i === (this.value || 1)) ? 0 : -1, '.innerHTML': M.icon('star', { size: '1em' }) })); }
  }
  M.define('ui-rating', Rating, { group: G, desc: 'Star rating (keyboard accessible).', events: ['ui-change'] });
  class ProgressSummary extends UIElement { static props = { items: { type: 'any', doc: '[{label,value,max,variant}]' } }; update() { this.innerHTML = ''; (this.items || []).forEach((i) => this.append(h('div', { class: 'ui-own ui-ps-r' }, h('ui-progress', { label: i.label, value: i.value, max: i.max || 100, variant: i.variant || '', 'show-value': '' })))); } }
  M.define('ui-progress-summary', ProgressSummary, { group: G, desc: 'Stack of labelled progress bars.' });

  class Kanban extends UIElement {
    static props = { columns: { type: 'any', doc: '[{id,title,cards:[{id,title,tag,assignee}]}]' } };
    update() {
      this.innerHTML = '';
      (this.columns || []).forEach((col) => {
        var list = h('div', { class: 'ui-kb-cards', role: 'list' }), el = h('section', { class: 'ui-kb-col', 'data-col': col.id, 'aria-label': col.title }, h('div', { class: 'ui-kb-h' }, col.title, h('span', null, String(col.cards.length))), list);
        col.cards.forEach((c) => { var card = h('article', { class: 'ui-kb-card', role: 'listitem', tabindex: '0', 'data-id': c.id }, h('div', null, c.title), h('div', { class: 'tg' }, c.tag ? h('ui-badge', { variant: c.tagVariant || '' }, c.tag) : h('span'), c.assignee ? h('ui-avatar', { name: c.assignee, size: 'sm' }) : null)); M.dnd.draggable(card, () => ({ id: c.id, from: col.id })); card.addEventListener('keydown', (e) => { var cols = this.columns, ci = cols.indexOf(col), d = e.altKey && e.key === 'ArrowRight' ? 1 : e.altKey && e.key === 'ArrowLeft' ? -1 : 0; if (d && cols[ci + d]) { e.preventDefault(); this.move(c.id, cols[ci + d].id); setTimeout(() => { var n = this.querySelector('[data-id="' + c.id + '"]'); n && n.focus(); }, 30); } }); list.append(card); });
        M.dnd.dropTarget(el, { onDrop: (d) => { if (d) this.move(d.id, col.id); } }); this.append(el);
      });
    }
    move(cardId, toCol, index) { var cols = this.columns, card = null, from = null; cols.forEach(function (c) { var i = c.cards.findIndex(function (x) { return x.id === cardId; }); if (i > -1) { card = c.cards.splice(i, 1)[0]; from = c.id; } }); var to = cols.filter(function (c) { return c.id === toCol; })[0]; if (!card || !to) return; if (index == null) to.cards.push(card); else to.cards.splice(index, 0, card); this.requestUpdate('columns'); this.emit('move', { card: card, from: from, to: toCol }); }
  }
  M.define('ui-kanban-board', Kanban, { group: G, desc: 'Kanban board with drag & drop (and Alt+←/→ keyboard moves) between columns.', events: ['ui-move'], methods: ['move(cardId, toColumn)'] });
  M.define('ui-kanban-column', class extends UIElement {}, { group: G, desc: 'Styled column for manual composition.' }); M.define('ui-kanban-card', class extends UIElement {}, { group: G, desc: 'Styled card for manual composition.' });
});

/* ---- MODULE: src/components/charts/charts.js ---- */
MiniUI.module('src/components/charts/charts.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Charts';
  var esc = U.escape, PAL = [1, 2, 3, 4, 5, 6, 7, 8].map(function (i) { return 'var(--ui-chart-' + i + ')'; });
  var num = function (v) { return Math.abs(v) >= 10000 ? M.format.compact(v) : M.format.number(v, { maximumFractionDigits: 2 }); };
  function nice(min, max, count) {
    if (min === max) max = min + 1; var span = max - min, s0 = span / Math.max(1, count), mag = Math.pow(10, Math.floor(Math.log10(s0))), n = s0 / mag, step = (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * mag, a = Math.floor(min / step) * step, b = Math.ceil(max / step) * step, t = [];
    for (var v = a; v <= b + step / 2; v += step) t.push(+v.toFixed(10)); return { min: a, max: b, ticks: t };
  }
  function arc(cx, cy, r0, r1, a0, a1) {
    var full = a1 - a0 >= Math.PI * 2 - 1e-4; if (full) a1 = a0 + Math.PI * 2 - 1e-4; var large = a1 - a0 > Math.PI ? 1 : 0, p = function (r, a) { return (cx + r * Math.cos(a)).toFixed(2) + ' ' + (cy + r * Math.sin(a)).toFixed(2); };
    return 'M' + p(r1, a0) + 'A' + r1 + ' ' + r1 + ' 0 ' + large + ' 1 ' + p(r1, a1) + (r0 > 0 ? 'L' + p(r0, a1) + 'A' + r0 + ' ' + r0 + ' 0 ' + large + ' 0 ' + p(r0, a0) + 'Z' : 'L' + cx + ' ' + cy + 'Z');
  }
  var tipHtml = function (title, rows) { return '<b>' + esc(title) + '</b>' + rows.map(function (r) { return '<div><i style="background:' + r.color + '"></i>' + esc(r.name) + '<span>' + esc(r.value) + '</span></div>'; }).join(''); };
  var A = function (s) { return esc(s).replace(/"/g, '&quot;'); };
  function smoothPath(pts) { var d = 'M' + pts[0][0] + ' ' + pts[0][1]; for (var i = 1; i < pts.length; i++) { var mx = (pts[i - 1][0] + pts[i][0]) / 2; d += 'C' + mx + ' ' + pts[i - 1][1] + ' ' + mx + ' ' + pts[i][1] + ' ' + pts[i][0] + ' ' + pts[i][1]; } return d; }
  function linePath(pts, smooth) { return pts.length < 2 ? 'M' + pts[0][0] + ' ' + pts[0][1] : smooth ? smoothPath(pts) : 'M' + pts.map(function (p) { return p[0] + ' ' + p[1]; }).join('L'); }

  class ChartLegend extends UIElement {
    static props = { items: { type: 'any', doc: '[{label,color,hidden}]' } };
    build() { this.setAttribute('role', 'group'); this.setAttribute('aria-label', 'Legenda'); this.addEventListener('click', (e) => { var b = e.target.closest('button'); if (!b) return; var i = +b.getAttribute('data-i'); this.emit('toggle', { index: i }); }); }
    update() { this.innerHTML = ''; (this.items || []).forEach((it, i) => this.append(h('button', { class: 'ui-own', type: 'button', 'data-i': i, 'aria-pressed': String(!it.hidden), style: { '--c': it.color } }, h('i'), it.label))); }
  }
  M.define('ui-chart-legend', ChartLegend, { group: G, desc: 'Interactive chart legend (toggle series).', events: ['ui-toggle'] });
  class ChartTooltip extends UIElement { show(html, x, y) { this.innerHTML = html; this.style.left = x + 'px'; this.style.top = y + 'px'; this.classList.add('on'); } hide() { this.classList.remove('on'); } }
  M.define('ui-chart-tooltip', ChartTooltip, { group: G, desc: 'Floating tooltip used by charts.', methods: ['show(html,x,y)', 'hide()'] });

  var R = {}; // renderers: (ctx) -> svg string. ctx: {w,h,series,labels,o,hidden,uid}
  function frame(c, o) { o = o || {}; return { l: o.l != null ? o.l : (c.o.axes ? 46 : 8), r: o.r != null ? o.r : 14, t: o.t != null ? o.t : 12, b: o.b != null ? o.b : (c.o.axes ? 28 : 8) }; }
  function vis(c) { return c.series.filter(function (s, i) { return !c.hidden.has(i); }); }
  function yRange(c, stacked, zero) {
    var vs = [], n = c.labels.length; if (stacked) { for (var i = 0; i < n; i++) { var pos = 0, neg = 0; vis(c).forEach(function (s) { var v = s.data[i] || 0; v >= 0 ? pos += v : neg += v; }); vs.push(pos, neg); } } else vis(c).forEach(function (s) { s.data.forEach(function (v) { if (v != null) vs.push(v); }); });
    var mn = vs.length ? Math.min.apply(null, vs) : 0, mx = vs.length ? Math.max.apply(null, vs) : 1; if (zero) { mn = Math.min(0, mn); mx = Math.max(0, mx); } if (c.o.min != null) mn = c.o.min; if (c.o.max != null) mx = c.o.max; return nice(mn, mx, 5);
  }
  function axesY(c, f, sc) { var s = ''; var ih = c.h - f.t - f.b; sc.ticks.forEach(function (t) { var y = f.t + ih - (t - sc.min) / (sc.max - sc.min) * ih; if (c.o.grid) s += '<g class="ui-ch-grid"><line x1="' + f.l + '" x2="' + (c.w - f.r) + '" y1="' + y + '" y2="' + y + '"/></g>'; if (c.o.axes) s += '<g class="ui-ch-axis"><text x="' + (f.l - 8) + '" y="' + (y + 4) + '" text-anchor="end">' + esc(num(t) + c.o.unit) + '</text></g>'; }); return s; }
  function axesX(c, f, xs) { if (!c.o.axes) return ''; var s = '', every = Math.ceil(c.labels.length / Math.max(1, Math.floor((c.w - f.l - f.r) / 56))); c.labels.forEach(function (l, i) { if (i % every === 0) s += '<g class="ui-ch-axis"><text x="' + xs[i] + '" y="' + (c.h - f.b + 17) + '" text-anchor="middle">' + esc(l) + '</text></g>'; }); return '<g class="ui-ch-axis"><line x1="' + f.l + '" x2="' + (c.w - f.r) + '" y1="' + (c.h - f.b) + '" y2="' + (c.h - f.b) + '"/></g>' + s; }

  function lineLike(c, area) {
    var f = frame(c), n = c.labels.length, iw = c.w - f.l - f.r, ih = c.h - f.t - f.b, st = c.o.stacked && area, sc = yRange(c, st, area), y = function (v) { return f.t + ih - (v - sc.min) / (sc.max - sc.min) * ih; };
    var xs = c.labels.map(function (_, i) { return n > 1 ? f.l + i * iw / (n - 1) : f.l + iw / 2; }), out = axesY(c, f, sc) + axesX(c, f, xs), base = new Array(n).fill(0), id = c.uid;
    vis(c).forEach(function (s) {
      var si = c.series.indexOf(s), top = s.data.map(function (v, i) { return (st ? base[i] : 0) + (v || 0); }), pts = top.map(function (v, i) { return [xs[i], y(v)]; }), lp = linePath(pts, c.o.smooth);
      if (area) { var bottom = st ? base.map(function (v, i) { return [xs[i], y(v)]; }).reverse() : [[xs[n - 1], y(Math.max(sc.min, 0))], [xs[0], y(Math.max(sc.min, 0))]]; out += '<defs><linearGradient id="' + id + 'g' + si + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + s.color + '" stop-opacity=".38"/><stop offset="1" stop-color="' + s.color + '" stop-opacity=".02"/></linearGradient></defs><path class="ui-ch-fadein" d="' + lp + 'L' + bottom.map(function (p) { return p[0] + ' ' + p[1]; }).join('L') + 'Z" fill="url(#' + id + 'g' + si + ')"/>'; }
      out += '<path class="ui-ch-line" pathLength="1" d="' + lp + '" fill="none" stroke="' + s.color + '" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>';
      if (n <= 40) pts.forEach(function (p, i) { out += '<circle class="pt ui-ch-fadein" cx="' + p[0] + '" cy="' + p[1] + '" r="3.4" fill="' + s.color + '"/>'; });
      if (st) top.forEach(function (v, i) { base[i] = v; });
    });
    var bw = n > 1 ? iw / (n - 1) : iw; out += '<line class="ui-ch-guide" y1="' + f.t + '" y2="' + (c.h - f.b) + '"/>';
    c.labels.forEach(function (l, i) { var rows = vis(c).map(function (s) { return { color: s.color, name: s.name, value: num(s.data[i] == null ? 0 : s.data[i]) + c.o.unit }; }); out += '<rect class="band" data-tip="' + A(tipHtml(l, rows)) + '" data-i="' + i + '" data-x="' + xs[i] + '" x="' + (xs[i] - bw / 2) + '" y="' + f.t + '" width="' + bw + '" height="' + ih + '"/>'; });
    return out;
  }
  R.line = function (c) { return lineLike(c, false); }; R.area = function (c) { return lineLike(c, true); };
  R.bar = function (c) {
    var f = frame(c), n = c.labels.length, iw = c.w - f.l - f.r, ih = c.h - f.t - f.b, st = c.o.stacked, sc = yRange(c, st, true), y = function (v) { return f.t + ih - (v - sc.min) / (sc.max - sc.min) * ih; }, band = iw / n, vs = vis(c), gp = band * .22, bw = st ? band - gp * 2 : (band - gp * 2) / Math.max(1, vs.length), xs = c.labels.map(function (_, i) { return f.l + band * i + band / 2; });
    var out = axesY(c, f, sc) + axesX(c, f, xs), zero = y(0);
    c.labels.forEach(function (l, i) { var acc = 0; vs.forEach(function (s, k) { var v = s.data[i] || 0, x = f.l + band * i + gp + (st ? 0 : k * bw), y0 = st ? y(acc + v) : y(Math.max(v, 0)), hh = st ? Math.abs(y(acc) - y(acc + v)) : Math.abs(y(v) - zero); if (st) acc += v; out += '<rect class="ui-ch-bar" data-tip="' + A(tipHtml(l, [{ color: s.color, name: s.name, value: num(v) + c.o.unit }])) + '" data-s="' + c.series.indexOf(s) + '" data-i="' + i + '" x="' + x + '" y="' + y0 + '" width="' + Math.max(1, bw - (st ? 0 : 2)) + '" height="' + Math.max(0, hh) + '" rx="3" fill="' + s.color + '" style="animation-delay:' + (i * 35) + 'ms"/>'; }); });
    return out;
  };
  R.hbar = function (c) {
    var n = c.labels.length, lw = Math.min(110, Math.max.apply(null, c.labels.map(function (l) { return String(l).length * 6.4; }).concat([30])) + 12), f = { l: lw, r: 40, t: 8, b: c.o.axes ? 24 : 6 }, iw = c.w - f.l - f.r, ih = c.h - f.t - f.b, vs = vis(c), sc = yRange(c, c.o.stacked, true), x = function (v) { return f.l + (v - sc.min) / (sc.max - sc.min) * iw; }, band = ih / n, gp = band * .2, bh = c.o.stacked ? band - gp * 2 : (band - gp * 2) / Math.max(1, vs.length), out = '';
    sc.ticks.forEach(function (t) { var xx = x(t); if (c.o.grid) out += '<g class="ui-ch-grid"><line y1="' + f.t + '" y2="' + (c.h - f.b) + '" x1="' + xx + '" x2="' + xx + '"/></g>'; if (c.o.axes) out += '<g class="ui-ch-axis"><text x="' + xx + '" y="' + (c.h - 6) + '" text-anchor="middle">' + esc(num(t)) + '</text></g>'; });
    c.labels.forEach(function (l, i) { var acc = 0; out += '<text class="ui-ch-lbl" x="' + (f.l - 8) + '" y="' + (f.t + band * i + band / 2 + 4) + '" text-anchor="end">' + esc(l) + '</text>'; vs.forEach(function (s, k) { var v = s.data[i] || 0, x0 = c.o.stacked ? x(acc) : x(0), x1 = c.o.stacked ? x(acc + v) : x(v); if (c.o.stacked) acc += v; out += '<rect class="ui-ch-barx" data-tip="' + A(tipHtml(l, [{ color: s.color, name: s.name, value: num(v) + c.o.unit }])) + '" data-s="' + c.series.indexOf(s) + '" data-i="' + i + '" x="' + Math.min(x0, x1) + '" y="' + (f.t + band * i + gp + (c.o.stacked ? 0 : k * bh)) + '" width="' + Math.abs(x1 - x0) + '" height="' + Math.max(1, bh - 2) + '" rx="3" fill="' + s.color + '" style="animation-delay:' + (i * 35) + 'ms"/>'; }); });
    return out;
  };
  function pie(c, donut) {
    var items = c.items.filter(function (it, i) { return !c.hidden.has(i); }), tot = items.reduce(function (a, b) { return a + b.value; }, 0) || 1, cx = c.w / 2, cy = c.h / 2, r = Math.min(c.w, c.h) / 2 - 10, r0 = donut ? r * (1 - (c.o.donutWidth || 0.38)) : 0, a = -Math.PI / 2, out = '';
    items.forEach(function (it, k) { var ang = it.value / tot * Math.PI * 2; out += '<path class="ui-ch-popin" data-tip="' + A(tipHtml(it.label, [{ color: it.color, name: M.format.percent(it.value / tot), value: num(it.value) + c.o.unit }])) + '" data-i="' + c.items.indexOf(it) + '" d="' + arc(cx, cy, r0, r, a, a + ang) + '" fill="' + it.color + '" stroke="var(--ui-bg-content)" stroke-width="2" style="animation-delay:' + (k * 60) + 'ms"/>'; a += ang; });
    if (donut) out += '<text class="ui-ch-big" x="' + cx + '" y="' + (cy + 2) + '" text-anchor="middle" font-size="' + Math.round(r * .3) + '">' + esc(num(tot)) + '</text><text class="ui-ch-lbl" x="' + cx + '" y="' + (cy + r * .22) + '" text-anchor="middle">' + esc(c.o.title || 'Total') + '</text>'; return out;
  }
  R.pie = function (c) { return pie(c, false); }; R.donut = function (c) { return pie(c, true); };
  R.radar = function (c) {
    var n = c.labels.length, cx = c.w / 2, cy = c.h / 2 + 4, r = Math.min(c.w, c.h) / 2 - 30, mx = nice(0, Math.max.apply(null, vis(c).reduce(function (a, s) { return a.concat(s.data); }, [1])), 4).max, ang = function (i) { return -Math.PI / 2 + i * Math.PI * 2 / n; }, pt = function (i, v) { return [cx + Math.cos(ang(i)) * r * v / mx, cy + Math.sin(ang(i)) * r * v / mx]; }, out = '';
    for (var k = 1; k <= 4; k++) { out += '<polygon fill="none" stroke="var(--ui-separator)" points="' + c.labels.map(function (_, i) { return pt(i, mx * k / 4).join(','); }).join(' ') + '"/>'; }
    c.labels.forEach(function (l, i) { var e = pt(i, mx), t = pt(i, mx * 1.14); out += '<line stroke="var(--ui-separator)" x1="' + cx + '" y1="' + cy + '" x2="' + e[0] + '" y2="' + e[1] + '"/><text class="ui-ch-lbl" x="' + t[0] + '" y="' + (t[1] + 4) + '" text-anchor="middle">' + esc(l) + '</text>'; });
    vis(c).forEach(function (s) { var pts = s.data.map(function (v, i) { return pt(i, v); }); out += '<polygon class="ui-ch-popin" fill="' + s.color + '" fill-opacity=".2" stroke="' + s.color + '" stroke-width="2" stroke-linejoin="round" points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '"/>'; pts.forEach(function (p, i) { out += '<circle class="pt" data-tip="' + A(tipHtml(c.labels[i], [{ color: s.color, name: s.name, value: num(s.data[i]) }])) + '" cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + s.color + '"/>'; }); });
    return out;
  };
  function xy(c, bubble) {
    var f = frame(c, { l: 46 }), xsAll = [], ysAll = [], rs = []; vis(c).forEach(function (s) { s.data.forEach(function (p) { xsAll.push(p.x); ysAll.push(p.y); if (bubble) rs.push(p.r || 1); }); });
    var sx = nice(Math.min.apply(null, xsAll.concat([0])), Math.max.apply(null, xsAll.concat([1])), 6), sy = nice(Math.min.apply(null, ysAll.concat([0])), Math.max.apply(null, ysAll.concat([1])), 5), iw = c.w - f.l - f.r, ih = c.h - f.t - f.b, X = function (v) { return f.l + (v - sx.min) / (sx.max - sx.min) * iw; }, Y = function (v) { return f.t + ih - (v - sy.min) / (sy.max - sy.min) * ih; }, rmax = Math.max.apply(null, rs.concat([1])), out = axesY(c, f, sy);
    sx.ticks.forEach(function (t) { out += (c.o.grid ? '<g class="ui-ch-grid"><line x1="' + X(t) + '" x2="' + X(t) + '" y1="' + f.t + '" y2="' + (c.h - f.b) + '"/></g>' : '') + (c.o.axes ? '<g class="ui-ch-axis"><text x="' + X(t) + '" y="' + (c.h - f.b + 17) + '" text-anchor="middle">' + esc(num(t)) + '</text></g>' : ''); });
    vis(c).forEach(function (s) { s.data.forEach(function (p, i) { var r = bubble ? 6 + Math.sqrt((p.r || 1) / rmax) * 22 : 5; out += '<circle class="ui-ch-popin" data-tip="' + A(tipHtml(s.name, [{ color: s.color, name: 'x', value: num(p.x) }, { color: s.color, name: 'y', value: num(p.y) }].concat(bubble ? [{ color: s.color, name: 'tamanho', value: num(p.r || 1) }] : []))) + '" data-s="' + c.series.indexOf(s) + '" data-i="' + i + '" cx="' + X(p.x) + '" cy="' + Y(p.y) + '" r="' + r + '" fill="' + s.color + '" fill-opacity="' + (bubble ? .55 : .8) + '" stroke="' + s.color + '" style="animation-delay:' + (i * 20) + 'ms"/>'; }); });
    return out;
  }
  R.scatter = function (c) { return xy(c, false); }; R.bubble = function (c) { return xy(c, true); };
  R.sparkline = function (c) {
    var d = c.series[0].data, mn = Math.min.apply(null, d), mx = Math.max.apply(null, d), p = 3, pts = d.map(function (v, i) { return [p + i * (c.w - p * 2) / Math.max(1, d.length - 1), p + (c.h - p * 2) * (1 - (v - mn) / ((mx - mn) || 1))]; }), col = c.series[0].color, lp = linePath(pts, true), last = pts[pts.length - 1];
    return '<defs><linearGradient id="' + c.uid + 'sp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + col + '" stop-opacity=".3"/><stop offset="1" stop-color="' + col + '" stop-opacity="0"/></linearGradient></defs><path class="ui-ch-fadein" d="' + lp + 'L' + last[0] + ' ' + c.h + 'L' + pts[0][0] + ' ' + c.h + 'Z" fill="url(#' + c.uid + 'sp)"/><path class="ui-ch-line" pathLength="1" d="' + lp + '" fill="none" stroke="' + col + '" stroke-width="2" stroke-linecap="round"/><circle class="ui-ch-popin" cx="' + last[0] + '" cy="' + last[1] + '" r="3" fill="' + col + '"/>';
  };
  R.gauge = function (c) {
    var g = c.gauge, v = U.clamp(g.value, g.min, g.max), pct = (v - g.min) / ((g.max - g.min) || 1), cx = c.w / 2, cy = c.h - 22, r = Math.min(c.w / 2 - 14, c.h - 34), th = g.thresholds || [], col = 'var(--ui-chart-1)'; th.forEach(function (t) { if (v >= t.from) col = t.color; });
    return '<path d="' + arc(cx, cy, r - 16, r, Math.PI, Math.PI * 2) + '" fill="var(--ui-surface-3)"/><path class="ui-ch-popin" data-tip="' + A(tipHtml(g.label || 'Valor', [{ color: col, name: g.label || 'Valor', value: num(v) + c.o.unit }])) + '" d="' + arc(cx, cy, r - 16, r, Math.PI, Math.PI + Math.max(.001, pct) * Math.PI) + '" fill="' + col + '"/><text class="ui-ch-big" x="' + cx + '" y="' + (cy - 6) + '" text-anchor="middle" font-size="' + Math.round(r * .42) + '">' + esc(num(v) + c.o.unit) + '</text><text class="ui-ch-lbl" x="' + cx + '" y="' + (cy + 14) + '" text-anchor="middle">' + esc(g.label || '') + '</text><text class="ui-ch-lbl" x="' + (cx - r + 8) + '" y="' + (cy + 14) + '" text-anchor="middle">' + g.min + '</text><text class="ui-ch-lbl" x="' + (cx + r - 8) + '" y="' + (cy + 14) + '" text-anchor="middle">' + g.max + '</text>';
  };
  R.progress = function (c) {
    var items = c.items, cx = c.w / 2, cy = c.h / 2, out = '', r = Math.min(c.w, c.h) / 2 - 8, gap = Math.min(18, r / (items.length + 1));
    items.forEach(function (it, i) { var rr = r - i * gap, pct = U.clamp(it.value / (it.max || 100), 0, 1); out += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rr + '" fill="none" stroke="var(--ui-surface-3)" stroke-width="' + (gap - 5) + '"/><path class="ui-ch-popin" data-tip="' + A(tipHtml(it.label, [{ color: it.color, name: it.label, value: Math.round(pct * 100) + '%' }])) + '" d="' + arc(cx, cy, rr - (gap - 5) / 2, rr + (gap - 5) / 2, -Math.PI / 2, -Math.PI / 2 + Math.max(.01, pct) * Math.PI * 2) + '" fill="' + it.color + '" style="animation-delay:' + (i * 90) + 'ms"/>'; }); return out;
  };
  R.heatmap = function (c) {
    var d = c.heat, rows = d.rows, cols = d.cols, vals = d.values, f = { l: Math.min(90, Math.max.apply(null, rows.map(function (x) { return String(x).length * 6.4; })) + 12), r: 8, t: 4, b: 24 }, cw = (c.w - f.l - f.r) / cols.length, ch = (c.h - f.t - f.b) / rows.length, flat = [].concat.apply([], vals), mn = Math.min.apply(null, flat), mx = Math.max.apply(null, flat), out = '';
    rows.forEach(function (rl, r) { out += '<text class="ui-ch-lbl" x="' + (f.l - 6) + '" y="' + (f.t + ch * r + ch / 2 + 4) + '" text-anchor="end">' + esc(rl) + '</text>'; cols.forEach(function (cl, k) { var v = vals[r][k], t = (v - mn) / ((mx - mn) || 1); if (r === 0) out += '<text class="ui-ch-lbl" x="' + (f.l + cw * k + cw / 2) + '" y="' + (c.h - 8) + '" text-anchor="middle">' + esc(cl) + '</text>'; out += '<rect class="ui-ch-popin" data-tip="' + A(tipHtml(rl + ' · ' + cl, [{ color: 'var(--ui-chart-1)', name: 'Valor', value: num(v) }])) + '" x="' + (f.l + cw * k + 1) + '" y="' + (f.t + ch * r + 1) + '" width="' + Math.max(1, cw - 2) + '" height="' + Math.max(1, ch - 2) + '" rx="4" fill="var(--ui-chart-1)" fill-opacity="' + (0.08 + t * .92).toFixed(2) + '" style="animation-delay:' + ((r + k) * 14) + 'ms"/>' + (cw > 34 && ch > 18 ? '<text x="' + (f.l + cw * k + cw / 2) + '" y="' + (f.t + ch * r + ch / 2 + 4) + '" text-anchor="middle" font-size="10" fill="' + (t > .55 ? '#fff' : 'var(--ui-text-2)') + '" pointer-events="none">' + esc(num(v)) + '</text>' : ''); }); }); return out;
  };

  class Chart extends UIElement {
    static props = { type: { default: 'line', reflect: true, doc: 'line|area|bar|hbar|pie|donut|radar|scatter|bubble|sparkline|gauge|progress|heatmap' }, data: { type: 'any', doc: '{labels, series:[{name,data,color}]} · pie: {items:[{label,value,color}]} · scatter: series data [{x,y,r}] · gauge: {value,min,max,label,thresholds} · heatmap: {rows,cols,values}' }, height: { type: 'number', default: 260 }, legend: { type: 'boolean', default: true }, grid: { type: 'boolean', default: true }, axes: { type: 'boolean', default: true }, tooltip: { type: 'boolean', default: true }, stacked: { type: 'boolean' }, smooth: { type: 'boolean', default: true }, colors: { type: 'any', default: null }, min: { type: 'number', default: null }, max: { type: 'number', default: null }, unit: { default: '' }, donutWidth: { type: 'number', default: 0.38 }, title: {}, animate: { type: 'boolean', default: true }, label: { default: 'Gráfico' } };
    build() {
      this._wrap = h('div', { class: 'ui-own ui-ch-wrap' }); this._svg = h('div'); this._tip = h('ui-chart-tooltip'); this._lg = h('ui-chart-legend'); this._hidden = new Set(); this._uid = U.uid('ch');
      this._wrap.append(this._svg, this._tip); this.append(this._wrap, this._lg);
      this._lg.addEventListener('ui-toggle', (e) => { var i = e.detail.index; this._hidden.has(i) ? this._hidden.delete(i) : this._hidden.add(i); this.emit('legend-toggle', { index: i, hidden: this._hidden.has(i) }); this._static = true; this._draw(); });
      this._wrap.addEventListener('pointermove', (e) => this._hover(e)); this._wrap.addEventListener('pointerleave', () => { this._tip.hide(); this._wrap.classList.remove('hov'); var g = this._svg.querySelector('.ui-ch-guide'); if (g) g.style.opacity = 0; });
      this._wrap.addEventListener('click', (e) => { var t = e.target.closest('[data-tip]'); if (!t) return; var i = t.getAttribute('data-i'), s = t.getAttribute('data-s'); this.emit('point-click', { index: i == null ? null : +i, series: s == null ? null : +s, label: i != null && this._ctx.labels ? this._ctx.labels[+i] : null }); });
    }
    _hover(e) {
      if (!this.tooltip) return; var t = e.target.closest ? e.target.closest('[data-tip]') : null; if (!t) { this._tip.hide(); this._wrap.classList.remove('hov'); return; }
      var wr = this._wrap.getBoundingClientRect(), r = t.getBoundingClientRect(), x, y; if (t.classList.contains('band')) { x = (+t.getAttribute('data-x')) * (wr.width / this._ctx.w); y = e.clientY - wr.top - 10; var g = this._svg.querySelector('.ui-ch-guide'); if (g) { g.setAttribute('x1', t.getAttribute('data-x')); g.setAttribute('x2', t.getAttribute('data-x')); g.style.opacity = 1; } } else { x = r.left + r.width / 2 - wr.left; y = r.top - wr.top - 6; this._wrap.classList.add('hov'); }
      this._tip.show(t.getAttribute('data-tip'), U.clamp(x, 50, wr.width - 50), Math.max(30, y));
    }
    bind() { this.observeResize(U.throttle(() => { var w = Math.round(this._wrap.clientWidth); if (w && w !== this._lw) { this._lw = w; this._static = true; this._draw(); } }, 80), this._wrap); }
    _norm() {
      var t = this.type, d = this.data, cols = this.colors || PAL, o = { axes: this.axes, grid: this.grid, stacked: this.stacked, smooth: this.smooth, unit: this.unit || '', min: this.min, max: this.max, title: this.title, donutWidth: this.donutWidth }, c = { o: o, hidden: this._hidden, uid: this._uid, labels: [], series: [], items: [] }, col = function (i) { return cols[i % cols.length]; };
      if (t === 'gauge') { var g = typeof d === 'number' ? { value: d } : d || { value: 0 }; c.gauge = Object.assign({ min: 0, max: 100 }, g); return c; }
      if (t === 'heatmap') { c.heat = d || { rows: [], cols: [], values: [] }; return c; }
      if (Array.isArray(d)) d = { series: [{ name: this.title || 'Série', data: d }], labels: d.map(function (_, i) { return String(i + 1); }) };
      d = d || {}; if (t === 'pie' || t === 'donut' || t === 'progress') { var items = d.items || (d.labels || []).map(function (l, i) { return { label: l, value: (d.series && d.series[0].data[i]) || 0 }; }); c.items = items.map(function (it, i) { return Object.assign({ color: col(i), max: 100 }, it); }); c.series = c.items.map(function (it, i) { return { name: it.label, color: it.color }; }); return c; }
      c.labels = (d.labels || []).map(String); c.series = (d.series || []).map(function (s, i) { return Object.assign({ name: 'Série ' + (i + 1), data: [], color: col(i) }, s, { color: s.color || col(i) }); });
      if (t === 'scatter' || t === 'bubble') return c; if (!c.labels.length && c.series[0]) c.labels = c.series[0].data.map(function (_, i) { return String(i + 1); }); return c;
    }
    _draw() {
      var w = Math.round(this._wrap.clientWidth || this.clientWidth || 320), spark = this.type === 'sparkline', h0 = spark && !this.hasAttribute('height') ? 36 : this.height; this._lw = w; var c = this._norm(); c.w = w; c.h = h0; this._ctx = c;
      var fn = R[this.type] || R.line, body = ''; try { body = c.series.length || c.items.length || c.gauge || c.heat ? fn(c) : ''; } catch (e) { M.reportError(this, e); }
      if (!body) body = '<text x="' + w / 2 + '" y="' + h0 / 2 + '" text-anchor="middle" class="ui-ch-lbl">Sem dados</text>';
      this._svg.innerHTML = '<svg viewBox="0 0 ' + w + ' ' + h0 + '" width="' + w + '" height="' + h0 + '" role="img" aria-label="' + A(this.label + ' — ' + this.type) + '">' + body + '</svg>';
      var legendItems = (this.type === 'pie' || this.type === 'donut' || this.type === 'progress') ? c.items.map(function (it, i) { return { label: it.label, color: it.color, hidden: c.hidden.has(i) }; }) : this.type === 'heatmap' || this.type === 'gauge' || spark ? [] : c.series.map(function (s, i) { return { label: s.name, color: s.color, hidden: c.hidden.has(i) }; });
      this._lg.hidden = !this.legend || legendItems.length < (this.type === 'pie' || this.type === 'donut' ? 1 : 2); if (!this._lg.hidden) this._lg.items = legendItems;
      this.toggleAttribute('data-static', !this.animate || !!this._static || U.reducedMotion()); this._static = true; this.setAttribute('role', 'figure'); this.setAttribute('aria-label', this.label);
    }
    get summary() { var c = this._ctx; return c ? { type: this.type, series: c.series.length, points: c.labels.length } : null; }
    update(ch) { if (ch && ch.has && (ch.has('data') || ch.has('type'))) { this._hidden.clear(); this._static = ch.has('data') && this._drawn && this.type === this._lastType ? true : false; } this._lastType = this.type; this._drawn = true; this._draw(); }
  }
  M.define('ui-chart', Chart, { group: G, desc: 'SVG chart engine (no dependencies): line, area, bar, hbar, pie, donut, radar, scatter, bubble, sparkline, gauge, progress, heatmap — with axes, grid, legend toggle, tooltip, responsive resize and click events.', events: ['ui-point-click', 'ui-legend-toggle'], methods: ['summary'] });
  [['line-chart', 'line'], ['bar-chart', 'bar'], ['horizontal-bar-chart', 'hbar'], ['area-chart', 'area'], ['pie-chart', 'pie'], ['donut-chart', 'donut'], ['radar-chart', 'radar'], ['scatter-chart', 'scatter'], ['bubble-chart', 'bubble'], ['sparkline', 'sparkline'], ['gauge-chart', 'gauge'], ['progress-chart', 'progress'], ['heatmap', 'heatmap']].forEach(function (p) { M.alias('ui-' + p[0], Chart, { type: p[1] }, { desc: 'Chart preset: ' + p[1] + '.' }); });
});

/* ---- MODULE: src/components/calendars/calendars.js ---- */
MiniUI.module('src/components/calendars/calendars.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Calendars & Time', F = M.format, pad = F.pad;
  var iso = F.iso, parse = function (s) { if (!s) return null; var p = String(s).slice(0, 10).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); };
  var addDays = function (d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }, sameDay = function (a, b) { return a && b && iso(a) === iso(b); };
  M.dates = { iso: iso, parse: parse, addDays: addDays, sameDay: sameDay };
  var minutes = function (s) { var d = new Date(s); return d.getHours() * 60 + d.getMinutes(); };

  class Calendar extends UIElement {
    static props = { value: { default: '', doc: 'ISO date, or "start/end" in range mode' }, mode: { default: 'single', reflect: true, doc: 'single|range|none' }, view: { default: 'month', reflect: true, doc: 'month|week|day|agenda' }, date: { default: '', doc: 'Focused date (ISO). Defaults to value / today' }, events: { type: 'any', doc: '[{id,title,start,end,color,allDay}]' }, min: {}, max: {}, weekStart: { type: 'number', default: 0 }, compact: { type: 'boolean' }, noEvents: { type: 'boolean' }, chips: { type: 'boolean', doc: 'Show event chips inside month cells' }, header: { type: 'boolean', default: true } };
    build() {
      this._h = h('div', { class: 'ui-own ui-cal-h' }, h('ui-button', { variant: 'toolbar', icon: 'chevron-left', 'aria-label': 'Anterior', 'data-a': 'prev' }), this._t = h('div', { class: 'ui-cal-t', 'aria-live': 'polite' }), h('ui-button', { variant: 'toolbar', size: 'sm', 'data-a': 'today' }, 'Hoje'), h('ui-button', { variant: 'toolbar', icon: 'chevron-right', 'aria-label': 'Próximo', 'data-a': 'next' }));
      this._b = h('div', { class: 'ui-own' }); this.append(this._h, this._b);
      this._h.addEventListener('click', (e) => { var b = e.target.closest('[data-a]'); if (b) this[b.getAttribute('data-a')](); });
      this._b.addEventListener('click', (e) => { var d = e.target.closest('.ui-cal-d'), ev = e.target.closest('[data-ev]'); if (ev) { e.stopPropagation(); this.emit('event-click', { event: (this.events || []).filter(function (x) { return String(x.id) === ev.getAttribute('data-ev'); })[0] }); return; } if (d && !d.disabled) this._pick(d.getAttribute('data-d')); });
      this._b.addEventListener('keydown', (e) => { var d = e.target.closest('.ui-cal-d'); if (!d) return; var cur = parse(d.getAttribute('data-d')), n = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key]; if (n) { e.preventDefault(); this._focusDate(addDays(cur, n)); } else if (e.key === 'PageDown' || e.key === 'PageUp') { e.preventDefault(); var x = new Date(cur); x.setMonth(x.getMonth() + (e.key === 'PageDown' ? 1 : -1)); this._focusDate(x); } else if (e.key === 'Home') { e.preventDefault(); this._focusDate(addDays(cur, -((cur.getDay() - this.weekStart + 7) % 7))); } else if (e.key === 'End') { e.preventDefault(); this._focusDate(addDays(cur, 6 - ((cur.getDay() - this.weekStart + 7) % 7))); } });
    }
    cursor() { return parse(this.date) || parse((this.value || '').split('/')[0]) || new Date(); }
    _focusDate(d) { this._p.date = iso(d); this.update(); this.emit('view-change', { date: this.date, view: this.view }); var b = this._b.querySelector('[data-d="' + iso(d) + '"]'); b && b.focus(); }
    goto(d) { this.date = typeof d === 'string' ? d : iso(d); this.emit('view-change', { date: this.date, view: this.view }); }
    today() { this.goto(new Date()); }
    _step(dir) { var c = this.cursor(); if (this.view === 'month') c.setMonth(c.getMonth() + dir); else if (this.view === 'week') c = addDays(c, 7 * dir); else if (this.view === 'day') c = addDays(c, dir); else c = addDays(c, 14 * dir); return c; }
    prev() { this.goto(this._step(-1)); } next() { this.goto(this._step(1)); }
    _inRange(d) { return (!this.min || d >= this.min) && (!this.max || d <= this.max); }
    _pick(s) {
      if (this.mode === 'none') { this.emit('day-click', { value: s }); return; }
      if (this.mode === 'range') { var p = (this.value || '').split('/'), a = p[0], b = p[1]; if (!a || (a && b)) { this.value = s; this.emit('select', { value: s, start: s, end: '', complete: false }); } else { var lo = s < a ? s : a, hi = s < a ? a : s; this.value = lo + '/' + hi; this.emit('select', { value: this.value, start: lo, end: hi, complete: true }); } }
      else { this.value = s; this.emit('select', { value: s, date: s, complete: true }); }
    }
    _evFor(day) { return (this.events || []).filter(function (e) { var s = String(e.start).slice(0, 10), en = String(e.end || e.start).slice(0, 10); return s <= day && en >= day; }); }
    _evNode(e) { return h('span', { class: 'ui-cal-ev', 'data-ev': e.id, style: { '--c': e.color || 'var(--ui-accent)' }, title: e.title, role: 'button' }, e.title); }
    _month(c) {
      var first = new Date(c.getFullYear(), c.getMonth(), 1), start = addDays(first, -((first.getDay() - this.weekStart + 7) % 7)), p = (this.value || '').split('/'), a = p[0], b = p[1], today = iso(new Date());
      var g = h('div', { class: 'ui-cal-g', role: 'grid', 'aria-label': F.date(c, { month: 'long', year: 'numeric' }) }), fd = iso(c);
      for (var i = 0; i < 7; i++) g.append(h('div', { class: 'ui-cal-wd', role: 'columnheader' }, F.date(addDays(start, i), { weekday: 'short' }).slice(0, 3)));
      for (var k = 0; k < 42; k++) { var d = addDays(start, k), s = iso(d), evs = this.noEvents ? [] : this._evFor(s), sel = this.mode === 'range' ? (s === a || s === b) : s === a, inr = this.mode === 'range' && a && b && s > a && s < b;
        var cell = h('button', { class: 'ui-cal-d' + (d.getMonth() !== c.getMonth() ? ' out' : '') + (s === today ? ' today' : '') + (sel ? ' sel' : '') + (inr ? ' inrange' : ''), type: 'button', role: 'gridcell', 'data-d': s, tabindex: s === fd ? 0 : -1, 'aria-selected': this.mode !== 'none' ? String(sel) : null, 'aria-label': F.date(d, { dateStyle: 'full' }) + (evs.length ? ', ' + evs.length + ' eventos' : ''), disabled: !this._inRange(d) }, h('span', { class: 'n' }, String(d.getDate())));
        if (this.chips) evs.slice(0, 3).forEach((e) => cell.append(this._evNode(e))), evs.length > 3 && cell.append(h('span', { class: 'ui-cal-ev', style: { '--c': 'var(--ui-text-3)' } }, '+' + (evs.length - 3))); else if (evs.length) cell.append(h('span', { class: 'ui-cal-dots' }, evs.slice(0, 3).map(function (e) { return h('i', { style: { '--c': e.color || 'var(--ui-accent)' } }); })));
        g.append(cell); }
      return g;
    }
    _grid(c, days) {
      var start = days === 1 ? c : addDays(c, -((c.getDay() - this.weekStart + 7) % 7)), wrap = h('div', null), dh = h('div', { class: 'ui-cal-dh', style: { '--days': days } }, h('div')), tg = h('div', { class: 'ui-cal-tg', style: { '--days': days } }), today = iso(new Date());
      for (var hr = 0; hr < 24; hr++) tg.append(h('div', { class: 'ui-cal-hr' }, pad(hr) + ':00')); tg.firstChild.style.gridRow = 1;
      var gridCols = []; for (var i = 0; i < days; i++) { var d = addDays(start, i), s = iso(d); dh.append(h('div', { class: s === today ? 'today' : '' }, F.date(d, { weekday: 'short' }), h('b', null, String(d.getDate())))); var col = h('div', { class: 'ui-cal-col' }); for (var q = 0; q < 24; q++) col.append(h('div', { class: 'slot' })); this._evFor(s).forEach((e) => { var s0 = String(e.start).length > 10 ? minutes(e.start) : 0, e0 = e.end && String(e.end).length > 10 ? minutes(e.end) : s0 + 60; col.append(h('div', { class: 'ev', 'data-ev': e.id, style: { '--c': e.color || 'var(--ui-accent)', top: (s0 / 60 * 48) + 'px', height: Math.max(20, (e0 - s0) / 60 * 48 - 2) + 'px' } }, h('b', null, e.title), h('div', null, String(e.start).length > 10 ? F.time(e.start) : 'Dia todo'))); }); gridCols.push(col); }
      // column placement: hours column occupies the first column, rows flow
      var hours = []; while (tg.firstChild) hours.push(tg.removeChild(tg.firstChild)); var hc = h('div'); hours.forEach(function (x) { hc.append(x); }); tg.append(hc); gridCols.forEach(function (c2) { tg.append(c2); });
      if (this._ro0) this._ro0 = null; wrap.append(dh, tg); setTimeout(() => { tg.scrollTop = 7 * 48; }, 0); return wrap;
    }
    _agenda(c) { var box = h('div', { class: 'ui-cal-ag' }), any = false; for (var i = 0; i < 30; i++) { var d = addDays(c, i), s = iso(d), evs = this._evFor(s); if (!evs.length) continue; any = true; box.append(h('h4', null, F.date(d, { weekday: 'long', day: 'numeric', month: 'long' }))); evs.forEach((e) => box.append(h('div', { class: 'it', 'data-ev': e.id, style: { '--c': e.color || 'var(--ui-accent)' } }, h('i'), h('div', { class: 'tm' }, String(e.start).length > 10 ? F.time(e.start) + (e.end ? ' – ' + F.time(e.end) : '') : 'Dia todo'), h('div', null, e.title)))); } if (!any) box.append(h('ui-empty-state', { icon: 'calendar', heading: 'Sem eventos', description: 'Nada agendado nos próximos 30 dias.' })); return box; }
    update() {
      var c = this.cursor(), v = this.view; this._h.hidden = !this.header; this.toggleAttribute('data-chips', this.chips && v === 'month');
      this._t.textContent = v === 'day' ? F.date(c, { weekday: 'long', day: 'numeric', month: 'long' }) : v === 'week' ? F.date(addDays(c, -((c.getDay() - this.weekStart + 7) % 7)), { day: 'numeric', month: 'short' }) + ' – ' + F.date(addDays(c, 6 - ((c.getDay() - this.weekStart + 7) % 7)), { day: 'numeric', month: 'short', year: 'numeric' }) : v === 'agenda' ? 'Agenda · ' + F.date(c, { month: 'long', year: 'numeric' }) : F.date(c, { month: 'long', year: 'numeric' });
      this._b.innerHTML = ''; this._b.append(v === 'week' ? this._grid(c, 7) : v === 'day' ? this._grid(c, 1) : v === 'agenda' ? this._agenda(c) : this._month(c));
    }
  }
  M.define('ui-calendar', Calendar, { group: G, desc: 'Calendar with month / week / day / agenda views, single & range selection, events and full keyboard navigation (arrows, PageUp/Down, Home/End).', events: ['ui-select', 'ui-view-change', 'ui-event-click', 'ui-day-click'], methods: ['next()', 'prev()', 'today()', 'goto(date)'] });
  M.alias('ui-month-calendar', Calendar, { view: 'month' }, { desc: 'Month view.' }); M.alias('ui-week-calendar', Calendar, { view: 'week', mode: 'none' }, { desc: 'Week time grid.' }); M.alias('ui-day-calendar', Calendar, { view: 'day', mode: 'none' }, { desc: 'Day time grid.' });
  M.alias('ui-agenda-view', Calendar, { view: 'agenda', mode: 'none' }, { desc: 'Upcoming events list.' }); M.alias('ui-event-calendar', Calendar, { view: 'month', mode: 'single', chips: true }, { desc: 'Month calendar with event chips.' });
  M.define('ui-calendar-event', class extends UIElement { static props = { title: {}, start: {}, end: {}, color: {} }; }, { group: G, desc: 'Declarative event description (data element).' });

  class DateNavigator extends UIElement {
    static props = { date: { default: '' }, unit: { default: 'month', doc: 'day|week|month|year' } };
    build() { this._l = h('div', { class: 'lbl', 'aria-live': 'polite' }); this.append(h('ui-button', { variant: 'toolbar', icon: 'chevron-left', 'aria-label': 'Anterior', class: 'ui-own', 'data-d': -1 }), this._l, h('ui-button', { variant: 'toolbar', icon: 'chevron-right', 'aria-label': 'Próximo', class: 'ui-own', 'data-d': 1 }), h('ui-button', { size: 'sm', class: 'ui-own', 'data-d': 0 }, 'Hoje')); this._l.classList.add('ui-own'); this.addEventListener('click', (e) => { var b = e.target.closest('[data-d]'); if (!b) return; var d = +b.getAttribute('data-d'), c = parse(this.date) || new Date(); if (!d) c = new Date(); else if (this.unit === 'day') c = addDays(c, d); else if (this.unit === 'week') c = addDays(c, 7 * d); else if (this.unit === 'year') c.setFullYear(c.getFullYear() + d); else c.setMonth(c.getMonth() + d); this.date = iso(c); this.emit('change', { date: this.date }); }); }
    update() { var c = parse(this.date) || new Date(); this._l.textContent = this.unit === 'year' ? String(c.getFullYear()) : this.unit === 'month' ? F.date(c, { month: 'long', year: 'numeric' }) : F.date(c, { dateStyle: 'medium' }); }
  }
  M.define('ui-date-navigator', DateNavigator, { group: G, desc: 'Previous / next / today navigator for a date unit.', events: ['ui-change'] });

  /* ---------- time ---------- */
  function ticker(el, fn, ms) { fn(); var id = setInterval(fn, ms || 1000); el.defer(function () { clearInterval(id); }); }
  function inTz(tz) { try { var p = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).formatToParts(new Date()), g = function (t) { return +p.filter(function (x) { return x.type === t; })[0].value % 24; }; return { h: g('hour'), m: g('minute'), s: g('second') }; } catch (e) { var d = new Date(); return { h: d.getHours(), m: d.getMinutes(), s: d.getSeconds() }; } }
  class Clock extends UIElement {
    static props = { type: { default: 'analog', doc: 'analog|digital' }, timezone: { doc: 'IANA zone, e.g. America/Sao_Paulo' }, seconds: { type: 'boolean', default: true }, size: { type: 'number', default: 140 }, label: {} };
    build() { var t = ''; for (var i = 0; i < 60; i++) { var a = i * 6 * Math.PI / 180, r1 = i % 5 ? 44 : 41, x = (c) => (50 + Math.sin(a) * c).toFixed(2), y = (c) => (50 - Math.cos(a) * c).toFixed(2); t += '<line class="ui-clk-tick" x1="' + x(r1) + '" y1="' + y(r1) + '" x2="' + x(47) + '" y2="' + y(47) + '"' + (i % 5 ? ' opacity=".5"' : '') + '/>'; }
      this._a = h('div', { class: 'ui-own' }); this._a.innerHTML = '<svg viewBox="0 0 100 100" role="img"><circle class="ui-clk-face" cx="50" cy="50" r="48"/>' + t + '<line class="ui-clk-h" x1="50" y1="50" x2="50" y2="28" stroke-width="3.2"/><line class="ui-clk-m" x1="50" y1="50" x2="50" y2="18" stroke-width="2.2"/><line class="ui-clk-s" x1="50" y1="56" x2="50" y2="14" stroke-width="1"/><circle cx="50" cy="50" r="2.4" fill="var(--ui-danger)"/></svg>'; this._d = h('div', { class: 'ui-own ui-clk-d' }); this._l = h('div', { class: 'ui-own', style: { color: 'var(--ui-text-3)', fontSize: 'var(--ui-fs-sm)' } }); this.append(this._a, this._d, this._l); }
    bind() { ticker(this, () => { var t = this.timezone ? inTz(this.timezone) : (function () { var d = new Date(); return { h: d.getHours(), m: d.getMinutes(), s: d.getSeconds() }; })(); var set = (c, deg) => { var n = this._a.querySelector('.ui-clk-' + c); n && n.setAttribute('transform', 'rotate(' + deg + ' 50 50)'); }; set('h', (t.h % 12) * 30 + t.m * .5); set('m', t.m * 6 + t.s * .1); set('s', t.s * 6); this._d.textContent = pad(t.h) + ':' + pad(t.m) + (this.seconds ? ':' + pad(t.s) : ''); this.setAttribute('role', 'timer'); this.setAttribute('aria-label', (this.label || 'Relógio') + ' ' + pad(t.h) + ':' + pad(t.m)); }, 1000); }
    update() { this.style.setProperty('--ui-clock-s', this.size + 'px'); this._a.hidden = this.type !== 'analog'; this._d.hidden = this.type === 'analog'; this._d.classList.toggle('ui-clk-d', true); this._l.textContent = this.label || this.timezone || ''; this._l.hidden = !this._l.textContent; }
  }
  M.define('ui-clock', Clock, { group: G, desc: 'Analog or digital clock with timezone support.' });
  class TimeDisplay extends UIElement { static props = { format: { default: 'time', doc: 'time|date|datetime|relative' }, value: { doc: 'Fixed date (ISO) — omit for live time' }, live: { type: 'boolean', default: true } }; bind() { ticker(this, () => { var d = this.value ? new Date(this.value) : new Date(); this.textContent = this.format === 'date' ? F.date(d, { dateStyle: 'full' }) : this.format === 'datetime' ? F.date(d, { dateStyle: 'medium' }) + ' ' + F.time(d, { timeStyle: 'medium' }) : this.format === 'relative' ? F.relative(d) : F.time(d, { timeStyle: 'medium' }); this.classList.add('ui-tm-v'); }, this.live || this.format === 'relative' ? 1000 : 3600000); } }
  M.define('ui-time-display', TimeDisplay, { group: G, desc: 'Formatted (live) time or relative date.' });
  class Countdown extends UIElement {
    static props = { target: { doc: 'ISO date-time to count down to' }, seconds: { type: 'number', default: 0, doc: 'Alternative: duration in seconds' }, running: { type: 'boolean', default: true } };
    build() { this._v = h('div', { class: 'ui-own ui-tm-seg', role: 'timer', 'aria-live': 'off' }); this.append(this._v); }
    _end() { if (this.target) return new Date(this.target).getTime(); if (!this._endAt) this._endAt = Date.now() + this.seconds * 1000; return this._endAt; }
    reset() { this._endAt = null; this._done = false; this.running = true; }
    start() { this.running = true; } pause() { this._rem = Math.max(0, this._end() - Date.now()); this.running = false; }
    bind() { ticker(this, () => { var left = this.running ? Math.max(0, this._end() - Date.now()) : (this._rem != null ? this._rem : Math.max(0, this._end() - Date.now())); if (this.running && this._rem != null) { this._endAt = Date.now() + this._rem; this._rem = null; left = this._rem != null ? this._rem : left; } var s = Math.ceil(left / 1000), seg = [['dias', Math.floor(s / 86400)], ['horas', Math.floor(s % 86400 / 3600)], ['min', Math.floor(s % 3600 / 60)], ['seg', s % 60]]; this._v.innerHTML = seg.map(function (x) { return '<div><b>' + pad(x[1]) + '</b><small>' + x[0] + '</small></div>'; }).join(''); if (left <= 0 && !this._done) { this._done = true; this.emit('complete'); } }, 250); }
  }
  M.define('ui-countdown', Countdown, { group: G, desc: 'Countdown to a date or for N seconds.', events: ['ui-complete'], methods: ['start()', 'pause()', 'reset()'] });
  class Timer extends UIElement {
    static props = { seconds: { type: 'number', default: 60 } };
    build() { this._ring = h('ui-progress', { type: 'circular', size: '150', class: 'ui-own' }); this._v = h('div', { class: 'ui-own ui-tm-v', role: 'timer' }); this._go = h('ui-button', { variant: 'primary', class: 'ui-own', icon: 'play' }, 'Iniciar'); this._rs = h('ui-button', { class: 'ui-own', icon: 'refresh' }, 'Zerar'); this.append(this._ring, this._v, h('div', { class: 'ui-own ui-tm-btns' }, this._go, this._rs)); this._left = this.seconds; this._run = false;
      this._go.addEventListener('click', () => this._run ? this.pause() : this.start()); this._rs.addEventListener('click', () => this.reset()); }
    start() { if (this._left <= 0) this._left = this.seconds; this._run = true; this._t0 = Date.now(); this._base = this._left; this._paint(); }
    pause() { this._run = false; this._paint(); } reset() { this._run = false; this._left = this.seconds; this._paint(); }
    _paint() { this._v.textContent = F.duration(Math.ceil(this._left)); this._ring.value = this.seconds ? (1 - this._left / this.seconds) * 100 : 0; this._go.setAttribute('label', this._run ? 'Pausar' : 'Iniciar'); this._go.setAttribute('icon', this._run ? 'pause' : 'play'); this._go.textContent = this._run ? 'Pausar' : 'Iniciar'; }
    bind() { ticker(this, () => { if (this._run) { this._left = Math.max(0, this._base - (Date.now() - this._t0) / 1000); if (this._left <= 0) { this._run = false; this.emit('complete'); M.toast('Temporizador concluído', { type: 'success', icon: 'clock' }); } } this._paint(); }, 200); }
    update() { if (!this._run) { this._left = this.seconds; this._paint(); } }
  }
  M.define('ui-timer', Timer, { group: G, desc: 'Timer with start/pause/reset and circular progress.', events: ['ui-complete'], methods: ['start()', 'pause()', 'reset()'] });
  class Stopwatch extends UIElement {
    build() { this._v = h('div', { class: 'ui-own ui-tm-v', role: 'timer' }, '00:00.0'); this._go = h('ui-button', { variant: 'primary', class: 'ui-own' }, 'Iniciar'); this._lap = h('ui-button', { class: 'ui-own', disabled: '' }, 'Volta'); this._rs = h('ui-button', { class: 'ui-own' }, 'Zerar'); this._l = h('ol', { class: 'ui-own' }); this.append(this._v, h('div', { class: 'ui-own ui-tm-btns' }, this._go, this._lap, this._rs), this._l); this._ms = 0; this._run = false; this._laps = [];
      this._go.addEventListener('click', () => { this._run = !this._run; if (this._run) this._t0 = Date.now() - this._ms; this._go.textContent = this._run ? 'Parar' : 'Iniciar'; this._lap.toggleAttribute('disabled', !this._run); }); this._lap.addEventListener('click', () => { this._laps.unshift(this._ms); this._l.prepend(h('li', null, h('span', null, 'Volta ' + (this._laps.length)), h('span', null, this._fmt(this._ms)))); this.emit('lap', { ms: this._ms }); }); this._rs.addEventListener('click', () => { this._run = false; this._ms = 0; this._laps = []; this._l.innerHTML = ''; this._go.textContent = 'Iniciar'; this._lap.setAttribute('disabled', ''); this._v.textContent = this._fmt(0); }); }
    _fmt(ms) { var s = ms / 1000; return pad(Math.floor(s / 60)) + ':' + pad(Math.floor(s % 60)) + '.' + Math.floor(ms % 1000 / 100); }
    bind() { ticker(this, () => { if (this._run) { this._ms = Date.now() - this._t0; this._v.textContent = this._fmt(this._ms); } }, 100); }
  }
  M.define('ui-stopwatch', Stopwatch, { group: G, desc: 'Stopwatch with laps.', events: ['ui-lap'] });
  class TimeRange extends M.FieldElement {
    static props = { value: { default: '09:00/17:00' }, step: { type: 'number', default: 15 } };
    build() { this._rs = h('ui-range-slider', { min: 0, max: 1440 }); this._parts = M.fieldShell(this, this._rs); this._o = h('div', { class: 'ui-sl-val', style: { textAlign: 'center', fontSize: 'var(--ui-fs-lg)', marginTop: '4px' } }); this.append(this._parts.wrap, this._o); this._rs.addEventListener('ui-input', (e) => { e.stopPropagation(); this._p.value = this._fmt(e.detail.low) + '/' + this._fmt(e.detail.high); this._paint(); }); this._rs.addEventListener('ui-change', (e) => { e.stopPropagation(); this.emit('change', { value: this._p.value, start: this._fmt(e.detail.low), end: this._fmt(e.detail.high) }); }); }
    _fmt(m) { return pad(Math.floor(m / 60)) + ':' + pad(m % 60); } _min(s) { var p = (s || '00:00').split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
    _paint() { var p = (this._p.value || '').split('/'); this._o.textContent = (p[0] || '--') + ' – ' + (p[1] || '--'); }
    update() { var p = (this.value || '09:00/17:00').split('/'); this._rs.step = this.step; this._rs.low = this._min(p[0]); this._rs.high = this._min(p[1]); this._parts.sync(); this._paint(); }
  }
  M.define('ui-time-range-selector', TimeRange, { group: G, desc: 'Select a time-of-day range (HH:MM/HH:MM).', events: ['ui-change'] });
});

/* ---- MODULE: src/components/media/media.js ---- */
MiniUI.module('src/components/media/media.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Media & Files', F = M.format;
  var reqFs = function (el) { var r = el.requestFullscreen || el.webkitRequestFullscreen; return r ? r.call(el) : null; }, exitFs = function () { var x = document.exitFullscreen || document.webkitExitFullscreen; return x ? x.call(document) : null; }, inFs = function () { return document.fullscreenElement || document.webkitFullscreenElement; };

  /** Procedural demo audio (WAV) so players work without any external file. */
  M.demoAudio = (function () {
    var cache = {}, TR = [{ title: 'Aurora', artist: 'MiniUI Synth', notes: [261.6, 329.6, 392, 523.2, 392, 329.6], bpm: 84 }, { title: 'Maré Alta', artist: 'MiniUI Synth', notes: [220, 277.2, 329.6, 440, 329.6, 277.2, 246.9], bpm: 70 }, { title: 'Neblina', artist: 'MiniUI Synth', notes: [196, 246.9, 293.7, 392, 293.7], bpm: 60 }];
    function make(t) { var sr = 16000, dur = 24, n = sr * dur, buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf), w = function (o, s) { for (var i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); }; w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, n * 2, true);
      var beat = 60 / t.bpm; for (var i = 0; i < n; i++) { var time = i / sr, k = Math.floor(time / beat), f = t.notes[k % t.notes.length], local = time - k * beat, env = Math.min(1, local * 40) * Math.exp(-local * 2.4), s = (Math.sin(2 * Math.PI * f * time) * .6 + Math.sin(2 * Math.PI * f * 2 * time) * .2 + Math.sin(2 * Math.PI * f / 2 * time) * .25) * env * .35; v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, s)) * 32767, true); } return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' })); }
    return { tracks: function () { return TR.map(function (t, i) { return Object.assign({ index: i, duration: 24, cover: M.util.gradientImage(t.title, 300, 300, '') }, t); }); }, url: function (i) { return cache[i] || (cache[i] = make(TR[i])); } };
  })();

  class MediaTimeline extends UIElement {
    static props = { current: { type: 'number', default: 0 }, duration: { type: 'number', default: 0 } };
    build() { this._a = h('span'); this._r = h('input', { type: 'range', class: 'ui-range', min: 0, max: 1000, step: 1, 'aria-label': 'Posição' }); this._b = h('span'); this.append(this._a, this._r, this._b); this._r.addEventListener('input', () => { this._drag = true; this.emit('seek', { time: this._r.value / 1000 * this.duration }); }); this._r.addEventListener('change', () => { this._drag = false; }); }
    update() { var p = this.duration ? this.current / this.duration : 0; this._a.textContent = F.duration(this.current); this._b.textContent = F.duration(this.duration); if (!this._drag) this._r.value = Math.round(p * 1000); this._r.style.setProperty('--p', (p * 100) + '%'); this._r.disabled = !this.duration; this._r.setAttribute('aria-valuetext', F.duration(this.current) + ' de ' + F.duration(this.duration)); }
  }
  M.define('ui-media-timeline', MediaTimeline, { group: G, desc: 'Seek bar with elapsed/total time.', events: ['ui-seek'] });
  class MediaControls extends UIElement {
    static props = { playing: { type: 'boolean' }, volume: { type: 'number', default: 80 }, muted: { type: 'boolean' }, rate: { type: 'number', default: 1 }, prev: { type: 'boolean' }, next: { type: 'boolean' }, fullscreen: { type: 'boolean' }, shuffle: { type: 'boolean' }, loop: { type: 'boolean' } };
    build() {
      var b = (a, icon, label, extra) => h('ui-button', Object.assign({ variant: 'toolbar', icon: icon, 'aria-label': label, 'data-a': a, class: 'ui-own' }, extra)); this._play = b('toggle', 'play', 'Reproduzir', { size: 'lg' });
      this._vol = h('ui-slider', { min: 0, max: 100, 'aria-label': 'Volume', class: 'ui-own' }); this._mute = b('mute', 'volume', 'Mudo'); this._rate = h('ui-button', { variant: 'toolbar', size: 'sm', 'data-a': 'rate', class: 'ui-own', 'aria-label': 'Velocidade' }, '1×');
      this.append(this._shuffle = b('shuffle', 'shuffle', 'Aleatório'), this._prev = b('prev', 'skip-back', 'Anterior'), this._play, this._next = b('next', 'skip-forward', 'Próxima'), this._loop = b('loop', 'repeat', 'Repetir'), h('span', { class: 'sp ui-own' }), this._mute, this._vol, this._rate, this._fs = b('fullscreen', 'maximize', 'Tela cheia'));
      this.addEventListener('click', (e) => { var t = e.target.closest('[data-a]'); if (!t) return; var a = t.getAttribute('data-a'); if (a === 'toggle') { this.emit(this.playing ? 'pause' : 'play'); } else if (a === 'mute') { this.muted = !this.muted; this.emit('volume', { volume: this.volume, muted: this.muted }); } else if (a === 'rate') { var rs = [.75, 1, 1.25, 1.5, 2], r = rs[(rs.indexOf(this.rate) + 1) % rs.length]; this.rate = r; this.emit('rate', { rate: r }); } else if (a === 'shuffle') { this.shuffle = !this.shuffle; this.emit('shuffle', { on: this.shuffle }); } else if (a === 'loop') { this.loop = !this.loop; this.emit('loop', { on: this.loop }); } else this.emit(a); });
      this._vol.addEventListener('ui-input', (e) => { e.stopPropagation(); this.volume = e.detail.value; this.muted = false; this.emit('volume', { volume: this.volume, muted: false }); });
    }
    update() { this._play.setAttribute('icon', this.playing ? 'pause' : 'play'); this._play.setAttribute('aria-label', this.playing ? 'Pausar' : 'Reproduzir'); this._mute.setAttribute('icon', this.muted || !this.volume ? 'volume-x' : 'volume'); this._vol.value = this.muted ? 0 : this.volume; this._rate.textContent = this.rate + '×'; ['prev', 'next', 'fullscreen', 'shuffle', 'loop'].forEach((k) => { this['_' + k].hidden = !this[k] && (k === 'prev' || k === 'next' || k === 'fullscreen' || k === 'shuffle' || k === 'loop'); }); this._shuffle.setAttribute('variant', this.shuffle ? 'primary' : 'toolbar'); this._loop.setAttribute('variant', this.loop ? 'primary' : 'toolbar'); }
  }
  M.define('ui-media-controls', MediaControls, { group: G, desc: 'Transport controls: play/pause, skip, volume, speed, loop, shuffle, fullscreen.', events: ['ui-play', 'ui-pause', 'ui-prev', 'ui-next', 'ui-volume', 'ui-rate', 'ui-fullscreen'] });

  class Playlist extends UIElement {
    static props = { items: { type: 'any' }, current: { type: 'number', default: -1 }, playing: { type: 'boolean' } };
    build() { this.addEventListener('click', (e) => { var b = e.target.closest('.ui-pl-i'); if (b) this.emit('select', { index: +b.getAttribute('data-i') }); }); }
    update() { this.innerHTML = ''; (this.items || []).forEach((t, i) => this.append(h('button', { class: 'ui-own ui-pl-i', type: 'button', 'data-i': i, 'aria-current': String(i === this.current) }, h('span', { class: 'n', '.innerHTML': i === this.current && this.playing ? M.icon('volume', { size: '14px' }) : String(i + 1) }), h('span', { class: 't' }, t.title, t.artist ? h('small', null, t.artist) : null), h('span', { class: 'd' }, t.duration ? F.duration(t.duration) : '')))); }
  }
  M.define('ui-media-playlist', Playlist, { group: G, desc: 'Playlist with current-track highlight.', events: ['ui-select'] });

  class AudioPlayer extends UIElement {
    static props = { tracks: { type: 'any', doc: '[{title,artist,src | demo index, cover, duration}] (defaults to built-in synth demo tracks)' }, index: { type: 'number', default: 0 }, playlist: { type: 'boolean', default: true }, autoplay: { type: 'boolean' } };
    build() {
      this._au = new Audio(); this._au.preload = 'metadata'; this._cover = h('img', { class: 'ui-ap-cover', alt: '' }); this._t = h('div', { class: 'ui-ap-t' }); this._a = h('div', { class: 'ui-ap-a' }); this._tl = h('ui-media-timeline'); this._ct = h('ui-media-controls', { prev: '', next: '', shuffle: '', loop: '' }); this._pl = h('ui-media-playlist', { class: 'ui-ap-pl' });
      this.append(h('div', { class: 'ui-own ui-ap' }, this._cover, h('div', { class: 'ui-ap-main' }, this._t, this._a, this._tl, this._ct), this._pl));
      var au = this._au; au.addEventListener('timeupdate', () => { this._tl.current = au.currentTime; this.emit('timeupdate', { time: au.currentTime }); }); au.addEventListener('loadedmetadata', () => { this._tl.duration = au.duration; }); au.addEventListener('durationchange', () => { this._tl.duration = isFinite(au.duration) ? au.duration : 0; });
      au.addEventListener('play', () => { this._sync(true); this.emit('play'); }); au.addEventListener('pause', () => { this._sync(false); this.emit('pause'); }); au.addEventListener('ended', () => { this.emit('ended'); if (this._ct.loop && this._list().length === 1) { au.currentTime = 0; au.play(); } else this.next(true); }); au.addEventListener('error', () => { M.toast.danger('Não foi possível reproduzir a faixa.'); this._sync(false); });
      this._tl.addEventListener('ui-seek', (e) => { e.stopPropagation(); au.currentTime = e.detail.time; }); this._pl.addEventListener('ui-select', (e) => { e.stopPropagation(); this.load(e.detail.index, true); });
      this._ct.addEventListener('ui-play', (e) => { e.stopPropagation(); this.play(); }); this._ct.addEventListener('ui-pause', (e) => { e.stopPropagation(); this.pause(); }); this._ct.addEventListener('ui-prev', (e) => { e.stopPropagation(); if (au.currentTime > 3) au.currentTime = 0; else this.prev(); }); this._ct.addEventListener('ui-next', (e) => { e.stopPropagation(); this.next(); });
      this._ct.addEventListener('ui-volume', (e) => { e.stopPropagation(); au.volume = e.detail.muted ? 0 : e.detail.volume / 100; M.system.set('volume', e.detail.volume); }); this._ct.addEventListener('ui-rate', (e) => { e.stopPropagation(); au.playbackRate = e.detail.rate; });
      this._ct.volume = M.system.get('volume'); au.volume = this._ct.volume / 100; this._loaded = -1;
    }
    _list() { return Array.isArray(this.tracks) && this.tracks.length ? this.tracks : M.demoAudio.tracks(); }
    _src(t) { return t.src || (t.index != null ? M.demoAudio.url(t.index) : ''); }
    load(i, autoplay) { var l = this._list(); i = (i + l.length) % l.length; this._p.index = i; var t = l[i]; this._loaded = i; this._au.src = this._src(t); this._t.textContent = t.title; this._a.textContent = t.artist || ''; this._cover.src = t.cover || M.util.gradientImage(t.title, 300, 300); this._tl.current = 0; this._tl.duration = t.duration || 0; this._pl.current = i; this.emit('trackchange', { index: i, track: t }); if (autoplay) this.play(); }
    play() { if (this._loaded !== this.index) this.load(this.index); var p = this._au.play(); if (p && p.catch) p.catch(function (e) { if (e.name !== 'AbortError') M.toast.warning('Toque em reproduzir novamente para iniciar o áudio.'); }); }
    pause() { this._au.pause(); } toggle() { this._au.paused ? this.play() : this.pause(); }
    next(auto) { var l = this._list(), n = this._ct.shuffle ? Math.floor(Math.random() * l.length) : this.index + 1; if (auto && !this._ct.loop && !this._ct.shuffle && n >= l.length) { this._sync(false); return; } this.load(n, true); }
    prev() { this.load(this.index - 1, true); } seek(t) { this._au.currentTime = t; }
    get audio() { return this._au; }
    _sync(p) { this._ct.playing = p; this._pl.playing = p; this._pl.current = this.index; }
    unbind() { this._au.pause(); }
    update() { var l = this._list(); this._pl.items = l; this._pl.hidden = !this.playlist; if (this._loaded < 0) { this._loaded = this.index; var t = l[this.index]; this._t.textContent = t.title; this._a.textContent = t.artist || ''; this._cover.src = t.cover || M.util.gradientImage(t.title, 300, 300); this._tl.duration = t.duration || 0; this._pl.current = this.index; this._au.src = this._src(t); if (this.autoplay) this.play(); } }
  }
  M.define('ui-audio-player', AudioPlayer, { group: G, desc: 'Audio player with playlist, seek, volume, speed, shuffle/loop. Works on any URL; ships with generated demo tracks.', events: ['ui-play', 'ui-pause', 'ui-ended', 'ui-timeupdate', 'ui-trackchange'], methods: ['play()', 'pause()', 'toggle()', 'next()', 'prev()', 'seek(t)', 'load(i)'] });
  class AudioEl extends UIElement { static props = { src: {}, controls: { type: 'boolean', default: true }, loop: { type: 'boolean' } }; build() { this._a = h('audio', { class: 'ui-own', style: { width: '100%' } }); this.append(this._a); } update() { this._a.controls = this.controls; this._a.loop = this.loop; if (this.src && this._a.getAttribute('src') !== this.src) this._a.src = this.src; } unbind() { this._a.pause(); } }
  M.define('ui-audio', AudioEl, { group: G, desc: 'Native audio element wrapper.' });

  class VideoPlayer extends UIElement {
    static props = { src: {}, poster: {}, autoplay: { type: 'boolean' }, loop: { type: 'boolean' }, muted: { type: 'boolean' }, label: { default: 'Vídeo' } };
    build() {
      this._v = h('video', { playsinline: '', preload: 'metadata' }); this._big = h('div', { class: 'ui-vp-big' }, h('span', { '.innerHTML': M.icon('play', { size: '28px', fill: '#fff' }) })); this._tl = h('ui-media-timeline'); this._ct = h('ui-media-controls', { fullscreen: '' }); this._err = h('div', { style: { position: 'absolute', inset: 0, display: 'none', alignItems: 'center', justifyContent: 'center', background: '#111' } });
      this._bar = h('div', { class: 'ui-vp-bar' }, this._tl, this._ct); this.append(this._v, this._big, this._bar, this._err); this.tabIndex = 0; this.setAttribute('role', 'group');
      var v = this._v, idle; var wake = () => { this.removeAttribute('data-idle'); clearTimeout(idle); if (!v.paused) idle = setTimeout(() => this.setAttribute('data-idle', ''), 2500); };
      this.addEventListener('pointermove', wake); this.addEventListener('focusin', wake); this._big.parentElement; v.addEventListener('click', () => this.toggle());
      v.addEventListener('play', () => { this._ct.playing = true; this._big.style.display = 'none'; wake(); this.emit('play'); }); v.addEventListener('pause', () => { this._ct.playing = false; this._big.style.display = ''; wake(); this.emit('pause'); }); v.addEventListener('timeupdate', () => { this._tl.current = v.currentTime; }); v.addEventListener('durationchange', () => { this._tl.duration = isFinite(v.duration) ? v.duration : 0; }); v.addEventListener('ended', () => this.emit('ended'));
      v.addEventListener('error', () => { this._err.style.display = 'flex'; this._err.innerHTML = ''; this._err.append(h('ui-empty-state', { icon: 'video', heading: 'Vídeo indisponível', description: 'Não foi possível carregar a mídia (offline ou formato não suportado).', variant: 'warning', style: { color: '#ccc' } })); this.emit('error', { src: this.src }); });
      this._tl.addEventListener('ui-seek', (e) => { e.stopPropagation(); v.currentTime = e.detail.time; });
      this._ct.addEventListener('ui-play', (e) => { e.stopPropagation(); this.play(); }); this._ct.addEventListener('ui-pause', (e) => { e.stopPropagation(); this.pause(); }); this._ct.addEventListener('ui-volume', (e) => { e.stopPropagation(); v.volume = e.detail.volume / 100; v.muted = e.detail.muted; }); this._ct.addEventListener('ui-rate', (e) => { e.stopPropagation(); v.playbackRate = e.detail.rate; }); this._ct.addEventListener('ui-fullscreen', (e) => { e.stopPropagation(); this.toggleFullscreen(); });
      this.addEventListener('keydown', (e) => { if (e.target.closest('input,ui-button')) return; var k = e.key; if (k === ' ' || k === 'k') { e.preventDefault(); this.toggle(); } else if (k === 'ArrowRight') { v.currentTime += 5; } else if (k === 'ArrowLeft') { v.currentTime -= 5; } else if (k === 'f') this.toggleFullscreen(); else if (k === 'm') { v.muted = !v.muted; this._ct.muted = v.muted; } });
    }
    play() { var p = this._v.play(); if (p && p.catch) p.catch(function () {}); } pause() { this._v.pause(); } toggle() { this._v.paused ? this.play() : this.pause(); }
    toggleFullscreen() { if (inFs()) exitFs(); else reqFs(this); }
    get video() { return this._v; }
    unbind() { this._v.pause(); }
    update() { var v = this._v; if (this.src && v.getAttribute('src') !== this.src) { this._err.style.display = 'none'; v.src = this.src; } if (this.poster) v.poster = this.poster; v.loop = this.loop; v.muted = this.muted; this.setAttribute('aria-label', this.label); if (this.autoplay) this.play(); }
  }
  M.define('ui-video-player', VideoPlayer, { group: G, desc: 'Video player with custom controls, keyboard shortcuts (Space, ←/→, F, M), auto-hide and fullscreen.', events: ['ui-play', 'ui-pause', 'ui-ended', 'ui-error'], methods: ['play()', 'pause()', 'toggle()', 'toggleFullscreen()'] });
  class VideoEl extends UIElement { static props = { src: {}, poster: {}, controls: { type: 'boolean', default: true } }; build() { this._v = h('video', { class: 'ui-own', style: { width: '100%', borderRadius: 'var(--ui-radius-md)' } }); this.append(this._v); } update() { this._v.controls = this.controls; if (this.poster) this._v.poster = this.poster; if (this.src && this._v.getAttribute('src') !== this.src) this._v.src = this.src; } unbind() { this._v.pause(); } }
  M.define('ui-video', VideoEl, { group: G, desc: 'Native video element wrapper.' });

  /* ---------- images ---------- */
  class ImageViewer extends UIElement {
    static props = { src: {}, alt: {}, height: { type: 'number', default: 320 } };
    build() { this._i = h('img', { alt: '', draggable: 'false' }); this._s = 1; this._x = 0; this._y = 0; var bt = (ic, l, f) => h('ui-button', { variant: 'toolbar', size: 'sm', icon: ic, 'aria-label': l, onclick: f }); this.append(this._i, h('div', { class: 'ui-own ui-iv-bar ui-glass' }, bt('minus', 'Diminuir', () => this.zoom(1 / 1.25)), bt('maximize', 'Ajustar', () => this.fit()), bt('plus', 'Ampliar', () => this.zoom(1.25))));
      var x0, y0; M.drag.track(this, { filter: (e) => !e.target.closest('.ui-iv-bar'), onStart: () => { x0 = this._x; y0 = this._y; }, onMove: (dx, dy) => { this._x = x0 + dx; this._y = y0 + dy; this._apply(); } }); this.addEventListener('wheel', (e) => { e.preventDefault(); this.zoom(e.deltaY < 0 ? 1.12 : 1 / 1.12, e); }, { passive: false }); this._i.addEventListener('load', () => this.fit()); }
    _apply() { this._i.style.transform = 'translate(' + this._x + 'px,' + this._y + 'px) scale(' + this._s + ')'; }
    zoom(f, e) { var r = this.getBoundingClientRect(), cx = e ? e.clientX - r.left : r.width / 2, cy = e ? e.clientY - r.top : r.height / 2, ns = U.clamp(this._s * f, .1, 12); this._x = cx - (cx - this._x) * ns / this._s; this._y = cy - (cy - this._y) * ns / this._s; this._s = ns; this._apply(); this.emit('zoom', { scale: ns }); }
    fit() { var r = this.getBoundingClientRect(), w = this._i.naturalWidth || 1, hh = this._i.naturalHeight || 1; this._s = Math.min(r.width / w, r.height / hh, 1); this._x = (r.width - w * this._s) / 2; this._y = (r.height - hh * this._s) / 2; this._apply(); }
    update() { this.style.height = this.height + 'px'; this._i.alt = this.alt || ''; if (this.src && this._i.getAttribute('src') !== this.src) this._i.src = this.src; }
  }
  M.define('ui-image-viewer', ImageViewer, { group: G, desc: 'Zoomable, pannable image viewer (wheel, drag, buttons).', events: ['ui-zoom'], methods: ['zoom(factor)', 'fit()'] });
  class ImageGallery extends UIElement { static props = { items: { type: 'any', doc: '[{src,caption}]' }, size: { type: 'number', default: 150 } }; build() { this.addEventListener('click', (e) => { var b = e.target.closest('button'); if (b) { var i = +b.getAttribute('data-i'); this.emit('open', { index: i }); M.lightbox.open(this.items, i); } }); } update() { this.style.setProperty('--ui-gal', this.size + 'px'); this.innerHTML = ''; (this.items || []).forEach((it, i) => this.append(h('button', { class: 'ui-own', type: 'button', 'data-i': i, 'aria-label': it.caption || 'Imagem ' + (i + 1) }, h('img', { src: it.src, alt: it.caption || '', loading: 'lazy' }), it.caption ? h('span', null, it.caption) : null))); } }
  M.define('ui-image-gallery', ImageGallery, { group: G, desc: 'Thumbnail grid opening a lightbox.', events: ['ui-open'] });
  class Carousel extends UIElement {
    static props = { items: { type: 'any', doc: '[{src,caption}] — or use children as slides' }, index: { type: 'number', default: 0 }, autoplay: { type: 'number', default: 0, doc: 'ms between slides (0 = off)' }, loop: { type: 'boolean', default: true } };
    static observeChildren = true;
    build() { this._kids = this.slotted.filter(function (n) { return n.nodeType === 1; }); this._tr = h('div', { class: 'ui-own ui-cr-track', 'aria-live': 'off' }); this._d = h('div', { class: 'ui-own ui-cr-dots' }); this._pb = h('button', { class: 'ui-own ui-cr-nav p', type: 'button', 'aria-label': 'Anterior', '.innerHTML': M.icon('chevron-left', { size: '18px' }) }); this._nb = h('button', { class: 'ui-own ui-cr-nav n', type: 'button', 'aria-label': 'Próximo', '.innerHTML': M.icon('chevron-right', { size: '18px' }) }); this.append(this._tr, this._pb, this._nb, this._d); this.tabIndex = 0; this.setAttribute('role', 'region'); this.setAttribute('aria-roledescription', 'carrossel');
      this._pb.addEventListener('click', () => this.go(this.index - 1)); this._nb.addEventListener('click', () => this.go(this.index + 1)); this._d.addEventListener('click', (e) => { var b = e.target.closest('button'); if (b) this.go(+b.getAttribute('data-i')); }); this.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') this.go(this.index + 1); else if (e.key === 'ArrowLeft') this.go(this.index - 1); });
      var x0; M.drag.track(this._tr, { keepTouch: true, preventDefault: false, threshold: 6, onStart: () => { x0 = 0; }, onMove: (dx) => { x0 = dx; }, onEnd: () => { if (Math.abs(x0) > 50) this.go(this.index + (x0 < 0 ? 1 : -1)); } }); }
    count() { return (this.items && this.items.length) || this._kids.length; }
    go(i) { var n = this.count(); if (!n) return; i = this.loop ? (i + n) % n : U.clamp(i, 0, n - 1); if (i === this.index) return; this.index = i; this.emit('change', { index: i }); }
    bind() { this._arm(); this.listen(this, 'pointerenter', () => clearInterval(this._iv)); this.listen(this, 'pointerleave', () => this._arm()); this.defer(() => clearInterval(this._iv)); }
    _arm() { clearInterval(this._iv); if (this.autoplay > 0 && !U.reducedMotion()) this._iv = setInterval(() => this.go(this.index + 1), this.autoplay); }
    update() { var n = this.count(); this._tr.innerHTML = ''; if (this.items && this.items.length) this.items.forEach((it, i) => this._tr.append(h('div', { class: 'ui-cr-slide', role: 'group', 'aria-roledescription': 'slide', 'aria-label': (i + 1) + ' de ' + n }, h('img', { src: it.src, alt: it.caption || '', loading: i ? 'lazy' : 'eager' }), it.caption ? h('div', { class: 'cap' }, it.caption) : null))); else this._kids.forEach((k, i) => this._tr.append(h('div', { class: 'ui-cr-slide', role: 'group', 'aria-label': (i + 1) + ' de ' + n }, k)));
      this._tr.style.transform = 'translateX(' + (-this.index * 100) + '%)'; this._d.innerHTML = ''; for (var i = 0; i < n; i++) this._d.append(h('button', { type: 'button', 'data-i': i, 'aria-label': 'Slide ' + (i + 1), 'aria-current': String(i === this.index) })); this._pb.hidden = this._nb.hidden = n < 2; this._arm(); }
  }
  M.define('ui-carousel', Carousel, { group: G, desc: 'Carousel: arrows, dots, keyboard, swipe, optional autoplay (paused on hover, respects reduced motion).', events: ['ui-change'], methods: ['go(i)'] });
  M.alias('ui-image-carousel', Carousel, {}, { desc: 'Carousel for images.' });
  class ComparisonSlider extends UIElement {
    static props = { before: {}, after: {}, position: { type: 'number', default: 50 }, beforeLabel: { default: 'Antes' }, afterLabel: { default: 'Depois' } };
    build() { this._b = h('img', { alt: '' }); this._a = h('img', { alt: '' }); this._r = h('input', { type: 'range', min: 0, max: 100, 'aria-label': 'Posição da comparação' }); this.append(this._b, h('div', { class: 'ui-own ui-cs-top' }, this._a), h('div', { class: 'ui-own ui-cs-h' }), this._r); this._r.addEventListener('input', () => { this.position = +this._r.value; this.emit('change', { position: this.position }); }); }
    update() { this._b.src = this.before || ''; this._a.src = this.after || ''; this._r.value = this.position; this.style.setProperty('--p', this.position + '%'); this._a.alt = this.afterLabel; this._b.alt = this.beforeLabel; }
  }
  M.define('ui-comparison-slider', ComparisonSlider, { group: G, desc: 'Before/after image comparison with draggable divider (accessible range input).', events: ['ui-change'] });
  /** QR extension point: install an encoder returning a boolean matrix; the component only renders. */
  M.qr = { encoder: null, setEncoder: function (fn) { M.qr.encoder = fn; M.events.emit('qr:encoder'); } };
  class QRCode extends UIElement {
    static props = { value: {}, size: { type: 'number', default: 160 }, fg: { default: '#000' }, bg: { default: '#fff' } };
    bind() { this.defer(M.events.on('qr:encoder', () => this.requestUpdate('value'))); }
    update() { if (!M.qr.encoder) { this.innerHTML = '<div style="width:' + this.size + 'px;font:12px var(--ui-font);color:#555;line-height:1.4;padding:8px;text-align:center">QR: instale um codificador com <code>MiniUI.qr.setEncoder(text =&gt; boolean[][])</code></div>'; return; } var m = M.qr.encoder(this.value || ''), n = m.length, s = this.size / n, r = ''; for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) if (m[y][x]) r += '<rect x="' + x * s + '" y="' + y * s + '" width="' + s + '" height="' + s + '"/>'; this.innerHTML = '<svg width="' + this.size + '" height="' + this.size + '" viewBox="0 0 ' + this.size + ' ' + this.size + '" role="img" aria-label="Código QR" fill="' + this.fg + '" style="background:' + this.bg + '">' + r + '</svg>'; }
  }
  M.define('ui-qr-code', QRCode, { group: G, desc: 'Renders a QR matrix from a pluggable encoder (extension interface — no encoder is bundled to keep the core small).', methods: [] });

  /* ---------- Files ---------- */
  M.fsSource = { platform: function () { return { list: function (p) { return M.Platform.filesystem.list({ path: p }); }, stat: function (p) { return M.Platform.filesystem.stat({ path: p }); }, readText: function (p) { return M.Platform.filesystem.readText({ path: p }); }, mkdir: function (p) { return M.Platform.filesystem.mkdir({ path: p }); }, remove: function (p) { return M.Platform.filesystem.remove({ path: p }); } }; } };
  var iconFor = function (e) { var m = e.mime || ''; return e.type === 'dir' ? 'folder' : m.indexOf('image') === 0 ? 'image' : m.indexOf('audio') === 0 ? 'file-music' : m.indexOf('video') === 0 ? 'video' : /zip|tar/.test(m) ? 'archive' : /javascript|css|html|json/.test(m) ? 'code' : /text|markdown|csv|pdf/.test(m) ? 'file-text' : 'file'; };
  M.fileIcon = iconFor;
  class FileCollection extends UIElement {
    static props = { entries: { type: 'any' }, view: { default: 'list', reflect: true }, selected: { type: 'any', default: null, doc: 'Array of selected paths' } };
    build() { this.setAttribute('role', 'listbox'); this.setAttribute('aria-multiselectable', 'true'); this.addEventListener('click', (e) => { var b = e.target.closest('.ui-fi'); if (!b) { this.selected = []; this.emit('select', { entries: [] }); return; } var p = b.getAttribute('data-p'), s = this.selected || []; if (e.ctrlKey || e.metaKey) s = s.indexOf(p) > -1 ? s.filter(function (x) { return x !== p; }) : s.concat(p); else s = [p]; this.selected = s; this.emit('select', { entries: (this.entries || []).filter(function (x) { return s.indexOf(x.path) > -1; }) }); });
      this.addEventListener('dblclick', (e) => { var b = e.target.closest('.ui-fi'); if (b) this.emit('open', { entry: (this.entries || []).filter(function (x) { return x.path === b.getAttribute('data-p'); })[0] }); });
      this.addEventListener('keydown', (e) => { var b = e.target.closest('.ui-fi'); if (!b) return; if (e.key === 'Enter') { this.emit('open', { entry: (this.entries || []).filter(function (x) { return x.path === b.getAttribute('data-p'); })[0] }); } else if (['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].indexOf(e.key) > -1) { e.preventDefault(); var n = b[(e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 'nextElementSibling' : 'previousElementSibling']; if (n && n.classList.contains('ui-fi')) { n.focus(); n.click(); } } });
      this.addEventListener('contextmenu', (e) => { var b = e.target.closest('.ui-fi'); this.emit('contextmenu', { entry: b ? (this.entries || []).filter(function (x) { return x.path === b.getAttribute('data-p'); })[0] : null, x: e.clientX, y: e.clientY, event: e }); }); }
    update() { var sel = this.selected || []; this.innerHTML = ''; (this.entries || []).forEach((en, i) => this.append(h('button', { class: 'ui-own ui-fi', type: 'button', role: 'option', 'data-p': en.path, 'aria-selected': String(sel.indexOf(en.path) > -1), tabindex: i === 0 ? 0 : -1 }, h('span', { class: 'ic ' + (en.type === 'dir' ? 'dir' : en.mime && en.mime.indexOf('image') === 0 ? 'img' : ''), '.innerHTML': en.thumb && this.view === 'grid' ? '<img alt="" src="' + en.thumb + '">' : M.icon(iconFor(en), { size: '1em' }) }), h('span', { class: 'nm' }, en.name), h('span', { class: 'dt' }, en.modified ? F.date(en.modified, { dateStyle: 'medium' }) : ''), h('span', { class: 'sz' }, en.type === 'dir' ? en.size + ' itens' : F.bytes(en.size))))); }
  }
  M.define('ui-file-list', FileCollection, { group: G, desc: 'List of file entries (select, open, context menu).', events: ['ui-select', 'ui-open', 'ui-contextmenu'] });
  M.alias('ui-file-grid', FileCollection, { view: 'grid' }, { desc: 'Icon grid of file entries.' });
  M.define('ui-file-item', class extends UIElement { static props = { name: {}, type: { default: 'file' }, size: { type: 'number', default: 0 } }; update() { this.innerHTML = ''; this.append(h('div', { class: 'ui-own ui-fi' }, h('span', { class: 'ic', '.innerHTML': M.icon(this.type === 'dir' ? 'folder' : 'file', { size: '1em' }) }), h('span', { class: 'nm' }, this.name), h('span', { class: 'sz' }, this.type === 'dir' ? '' : F.bytes(this.size)))); } }, { group: G, desc: 'Single file/folder row.' });
  class FilePreview extends UIElement {
    static props = { entry: { type: 'any' }, source: { type: 'any', default: null } };
    update() { var e = this.entry; this.innerHTML = ''; if (!e) { this.append(h('ui-empty-state', { icon: 'file', heading: 'Nenhum item', description: 'Selecione um arquivo para visualizar.' })); return; } var src = this.source || M.fsSource.platform();
      if (e.thumb) this.append(h('img', { src: e.thumb, alt: e.name })); else if (e.type === 'file' && /^text|json|javascript|markdown|csv|css|html/.test(e.mime || '')) { var pre = h('pre', null, 'Carregando…'); this.append(pre); Promise.resolve(src.readText(e.path)).then((t) => { pre.textContent = t.slice(0, 2000); }, (er) => { pre.textContent = er.message; }); } else this.append(h('div', { class: 'pv-ic', '.innerHTML': M.icon(iconFor(e), { size: '1em' }) }));
      this.append(h('h4', { style: { margin: '8px 0 2px', wordBreak: 'break-word' } }, e.name), h('div', { style: { color: 'var(--ui-text-3)', fontSize: 'var(--ui-fs-sm)' } }, e.type === 'dir' ? e.size + ' itens' : F.bytes(e.size))); }
  }
  M.define('ui-file-preview', FilePreview, { group: G, desc: 'Preview of an entry: image, text snippet or icon. Reads through an abstract source.' });
  class FileProperties extends UIElement { static props = { entry: { type: 'any' } }; update() { var e = this.entry; this.innerHTML = ''; if (!e) return; this.append(h('ui-description-list', { items: [{ term: 'Nome', value: e.name }, { term: 'Tipo', value: e.mime }, { term: 'Tamanho', value: e.type === 'dir' ? e.size + ' itens' : F.bytes(e.size) + ' (' + F.number(e.size) + ' bytes)' }, { term: 'Caminho', value: e.path }, { term: 'Modificado', value: F.date(e.modified, { dateStyle: 'long', timeStyle: 'short' }) }], bordered: '' })); } }
  M.define('ui-file-properties', FileProperties, { group: G, desc: 'Key/value properties of a file entry.' });

  class FileBrowser extends UIElement {
    static props = { path: { default: '/home/user' }, root: { default: '/home/user' }, view: { default: 'list', doc: 'list|grid' }, source: { type: 'any', default: null }, inspector: { type: 'boolean' } };
    build() {
      this._src = this.source || M.fsSource.platform(); this._hist = []; this._fwd = []; this._sel = [];
      var bt = (id, ic, l) => h('ui-button', { variant: 'toolbar', icon: ic, 'aria-label': l, 'data-a': id });
      this._back = bt('back', 'chevron-left', 'Voltar'); this._fwdb = bt('fwd', 'chevron-right', 'Avançar'); this._up = bt('up', 'arrow-up', 'Pasta acima'); this._bc = h('ui-breadcrumb', { style: { flex: 1, minWidth: 0 } }); this._seg = h('ui-segmented', { size: 'sm', items: [{ value: 'list', icon: 'list', label: '' }, { value: 'grid', icon: 'grid', label: '' }], 'aria-label': 'Modo de exibição' }); this._q = h('ui-search-field', { style: { width: '150px' }, placeholder: 'Filtrar' });
      this._tb = h('ui-toolbar', null, this._back, this._fwdb, this._up, this._bc, this._q, this._seg, h('ui-button', { variant: 'toolbar', icon: 'plus', 'aria-label': 'Nova pasta', 'data-a': 'mkdir' }), h('ui-button', { variant: 'toolbar', icon: 'sidebar', 'aria-label': 'Painel de informações', 'data-a': 'info' }));
      this._tree = h('ui-tree', { class: 'ui-own' }); this._side = h('div', { class: 'ui-fb-side' }, this._tree); this._col = h('ui-file-list'); this._main = h('div', { class: 'ui-fb-main' }, this._col); this._pv = h('ui-file-preview'); this._pp = h('ui-file-properties'); this._ins = h('div', { class: 'ui-fb-ins' }, this._pv, h('ui-divider'), this._pp); this._st = h('ui-status-bar');
      this.append(this._tb, h('div', { class: 'ui-own ui-fb-body' }, this._side, this._main, this._ins), this._st);
      this._tb.addEventListener('click', (e) => { var b = e.target.closest('[data-a]'); if (!b) return; var a = b.getAttribute('data-a'); if (a === 'back') this.back(); else if (a === 'fwd') this.forward(); else if (a === 'up') this.up(); else if (a === 'mkdir') this.newFolder(); else if (a === 'info') this.inspector = !this.inspector; });
      this._seg.addEventListener('ui-change', (e) => { e.stopPropagation(); this.view = e.detail.value; }); this._q.addEventListener('ui-search', (e) => { this._filter = e.detail.value.toLowerCase(); this._paint(); });
      this._bc.addEventListener('ui-navigate', (e) => { var parts = this._parts(); this.go('/' + parts.slice(0, e.detail.index + 1 + this._rootDepth()).join('/')); });
      this._tree.addEventListener('ui-select', (e) => { e.stopPropagation(); if (e.detail.id !== this.path) this.go(e.detail.id); });
      this._col.addEventListener('ui-open', (e) => { e.stopPropagation(); this._open(e.detail.entry); }); this._col.addEventListener('ui-select', (e) => { e.stopPropagation(); this._sel = e.detail.entries; this._pv.entry = this._sel[0] || null; this._pp.entry = this._sel[0] || null; this.emit('select', { entries: this._sel }); this._status(); });
      this._col.addEventListener('ui-contextmenu', (e) => { e.stopPropagation(); var d = e.detail; d.event.preventDefault(); var en = d.entry; M.menu.open(en ? [{ label: en.type === 'dir' ? 'Abrir' : 'Abrir', icon: 'folder-open', action: () => this._open(en) }, { label: 'Copiar caminho', icon: 'copy', action: () => M.clipboard.write(en.path).then((ok) => M.toast(ok ? 'Caminho copiado' : 'Não foi possível copiar', { type: ok ? 'success' : 'danger' })) }, '-', { label: 'Excluir', icon: 'trash', danger: true, action: () => this.remove(en) }] : [{ label: 'Nova pasta', icon: 'plus', action: () => this.newFolder() }, { label: 'Atualizar', icon: 'refresh', action: () => this.refresh() }], { point: { x: d.x, y: d.y }, offset: 2, focusFirst: false }); });
    }
    _rootDepth() { return this.root.split('/').filter(Boolean).length - 1; }
    _parts() { return this.path.split('/').filter(Boolean).slice(this._rootDepth()); }
    _status() { this._st.textContent = this._count + ' itens' + (this._sel.length ? ' — ' + this._sel.length + ' selecionado(s)' : ''); }
    _open(en) { if (!en) return; if (en.type === 'dir') this.go(en.path); else this.emit('open-file', { entry: en }); }
    go(p, noHist) { if (p === this.path) { this.refresh(); return; } if (!noHist) { this._hist.push(this.path); this._fwd = []; } this.path = p; this.emit('navigate', { path: p }); }
    back() { if (!this._hist.length) return; this._fwd.push(this.path); this.go(this._hist.pop(), true); } forward() { if (!this._fwd.length) return; this._hist.push(this.path); this.go(this._fwd.pop(), true); }
    up() { var ps = this.path.split('/').filter(Boolean); if (ps.length <= this.root.split('/').filter(Boolean).length) return; ps.pop(); this.go('/' + ps.join('/')); }
    refresh() { this._load(); }
    newFolder() { M.Dialogs.prompt('Nome da nova pasta', { heading: 'Nova pasta', value: 'Nova pasta' }).then((n) => { if (!n) return; Promise.resolve(this._src.mkdir(this.path + '/' + n.replace(/[\/]/g, '-'))).then(() => { this._load(); M.toast.success('Pasta criada'); }, (e) => M.toast.danger(e.message)); }); }
    remove(en) { M.Dialogs.confirm('Excluir "' + en.name + '"? Esta ação não pode ser desfeita.', { heading: 'Excluir', okLabel: 'Excluir', destructive: true }).then((ok) => { if (ok) Promise.resolve(this._src.remove(en.path)).then(() => { this._load(); M.toast('Item excluído'); }, (e) => M.toast.danger(e.message)); }); }
    _load() {
      this._main.setAttribute('aria-busy', 'true');
      return Promise.resolve(this._src.list(this.path)).then((list) => { list.sort(function (a, b) { return (a.type === b.type ? 0 : a.type === 'dir' ? -1 : 1) || a.name.localeCompare(b.name); }); this._all = list; this._count = list.length; this._paint(); this._main.removeAttribute('aria-busy'); this._status(); }, (e) => { this._all = []; this._count = 0; this._col.entries = []; this._main.removeAttribute('aria-busy'); M.toast.danger(e.code === 'E_PERMISSION_DENIED' ? 'Acesso negado: conceda a permissão de sistema de arquivos.' : e.message); });
    }
    _paint() { var f = this._filter, l = (this._all || []).filter(function (e) { return !f || e.name.toLowerCase().indexOf(f) > -1; }); this._col.selected = []; this._col.entries = l; this._sel = []; this._pv.entry = null; this._pp.entry = null; }
    _tree0() { var rootName = this.root.split('/').pop(); this._tree.nodes = [{ id: this.root, label: rootName, icon: 'home', lazy: true, expanded: false }]; this._tree.load = (n) => Promise.resolve(this._src.list(n.id)).then((l) => l.filter(function (e) { return e.type === 'dir'; }).map(function (e) { return { id: e.path, label: e.name, lazy: true }; })); }
    mounted() { this._tree0(); this._load(); }
    propChanged(n) { if (n === 'path' && this._built && this.isConnected) this._load(); }
    update() { this._side.hidden = false; this._ins.hidden = !this.inspector; this._col.setAttribute('view', this.view); this._seg.value = this.view; this._back.toggleAttribute('disabled', !this._hist.length); this._fwdb.toggleAttribute('disabled', !this._fwd.length); this._bc.items = [{ label: this.root.split('/').pop(), icon: 'home' }].concat(this._parts().slice(1).map(function (p) { return { label: p }; })); this._tree.selected = this.path; this._col.view = this.view; }
  }
  M.define('ui-file-browser', FileBrowser, { group: G, desc: 'File manager component over an abstract source (default: Platform.filesystem). Folder tree, breadcrumb, list/grid, preview, properties, context menu, create/delete.', events: ['ui-navigate', 'ui-select', 'ui-open-file'], methods: ['go(path)', 'back()', 'forward()', 'up()', 'refresh()', 'newFolder()'] });
  M.alias('ui-breadcrumb-file-path', M.registry.get('ui-breadcrumb').cls, {}, { desc: 'Breadcrumb used for file paths (the file browser feeds it path segments).' });

  class StorageIndicator extends UIElement {
    static props = { total: { type: 'number', default: 256e9 }, segments: { type: 'any', doc: '[{label,value,color}] in bytes' } };
    update() { var seg = this.segments || [], used = seg.reduce(function (a, b) { return a + b.value; }, 0); this.innerHTML = ''; this.append(h('div', { class: 'ui-own ui-si-h' }, h('strong', null, F.bytes(used) + ' usados'), h('span', { style: { color: 'var(--ui-text-3)' } }, 'de ' + F.bytes(this.total))), h('div', { class: 'ui-own ui-si-bar', role: 'img', 'aria-label': Math.round(used / this.total * 100) + '% usado' }, seg.map(function (s, i) { return h('i', { style: { '--c': s.color || 'var(--ui-chart-' + (i + 1) + ')', width: (s.value / (this.total || 1) * 100) + '%' }, title: s.label + ': ' + F.bytes(s.value) }); }, this)), h('div', { class: 'ui-own ui-si-lg' }, seg.map(function (s, i) { return h('span', null, h('i', { style: { '--c': s.color || 'var(--ui-chart-' + (i + 1) + ')' } }), s.label + ' ' + F.bytes(s.value)); }))); }
  }
  M.define('ui-storage-indicator', StorageIndicator, { group: G, desc: 'Segmented storage usage bar.' });
  class TransferProgress extends UIElement {
    static props = { name: {}, size: { type: 'number', default: 0 }, progress: { type: 'number', default: 0 }, status: { default: 'active', doc: 'active|paused|done|error' }, kind: { default: 'upload' }, speed: { type: 'number', default: 0 }, controls: { type: 'boolean', default: true } };
    build() { this._i = h('ui-icon', { class: 'ui-own' }); this._n = h('div', { class: 'ui-own' }); this._m = h('div', { class: 'ui-own m' }); this._pr = h('ui-progress'); this._b = h('div', { class: 'ui-own', style: { display: 'flex', gap: '2px' } }); this._pa = h('ui-button', { variant: 'toolbar', size: 'sm', 'aria-label': 'Pausar/Retomar' }); this._ca = h('ui-button', { variant: 'toolbar', size: 'sm', icon: 'x', 'aria-label': 'Cancelar' }); this._b.append(this._pa, this._ca); this.append(this._i, h('div', { class: 'ui-own' }, this._n, this._m), this._b, this._pr); this._pa.addEventListener('click', () => { this.status = this.status === 'paused' ? 'active' : 'paused'; this.emit(this.status === 'paused' ? 'pause' : 'resume'); }); this._ca.addEventListener('click', () => this.emit('cancel')); }
    update() { this._i.setAttribute('name', this.kind === 'download' ? 'download' : 'upload'); this._n.textContent = this.name; var done = this.status === 'done'; this._m.textContent = F.bytes(this.size * this.progress / 100) + ' de ' + F.bytes(this.size) + (done ? ' · concluído' : this.status === 'paused' ? ' · pausado' : this.speed ? ' · ' + F.bytes(this.speed) + '/s' : ''); this._pr.value = this.progress; this._pr.setAttribute('variant', done ? 'success' : this.status === 'error' ? 'danger' : ''); this._b.hidden = done || !this.controls; this._pa.setAttribute('icon', this.status === 'paused' ? 'play' : 'pause'); }
  }
  M.define('ui-file-transfer-progress', TransferProgress, { group: G, desc: 'Single transfer row with progress, pause/resume and cancel.', events: ['ui-pause', 'ui-resume', 'ui-cancel'] });
  class TransferManager extends UIElement {
    static props = { kind: { default: 'upload' }, items: { type: 'any', default: null } };
    build() { this._l = []; this._t = setInterval(() => this._tick(), 400); }
    /** add({name,size,run?}) — `run(progress => ...)` may drive real transfers; otherwise progress is simulated. */
    add(o) { var it = Object.assign({ id: U.uid('t'), progress: 0, status: 'active', size: 1e6 }, o); this._l.push(it); this.requestUpdate('items'); this.emit('add', { item: it }); return it; }
    _tick() { var ch = false; this._l.forEach((it) => { if (it.status !== 'active') return; it.speed = 4e5 + Math.random() * 6e5; it.progress = Math.min(100, it.progress + it.speed / it.size * 100 * .4); if (it.progress >= 100) { it.status = 'done'; this.emit('complete', { item: it }); M.Notifications.push({ title: this.kind === 'download' ? 'Download concluído' : 'Envio concluído', body: it.name, icon: this.kind === 'download' ? 'download' : 'upload', app: 'Transferências', toast: false }); } ch = true; }); if (ch) this.requestUpdate('items'); }
    unbind() { clearInterval(this._t); } bind() { clearInterval(this._t); this._t = setInterval(() => this._tick(), 400); }
    update() { this.innerHTML = ''; this._l.forEach((it) => { var el = h('ui-file-transfer-progress', { name: it.name, size: it.size, progress: it.progress, status: it.status, kind: this.kind, speed: it.speed || 0, class: 'ui-own' }); el.addEventListener('ui-pause', () => { it.status = 'paused'; }); el.addEventListener('ui-resume', () => { it.status = 'active'; }); el.addEventListener('ui-cancel', () => { this._l = this._l.filter(function (x) { return x !== it; }); this.requestUpdate('items'); }); this.append(el); }); if (!this._l.length) this.append(h('ui-empty-state', { class: 'ui-own', icon: this.kind === 'download' ? 'download' : 'upload', heading: 'Sem transferências' })); }
  }
  M.define('ui-upload-manager', TransferManager, { group: G, desc: 'Queue of uploads with progress, pause, cancel and notifications.', events: ['ui-add', 'ui-complete'], methods: ['add({name,size})'] });
  M.alias('ui-download-manager', TransferManager, { kind: 'download' }, { desc: 'Queue of downloads.' });
});

/* ---- MODULE: src/components/editors/editors.js ---- */
MiniUI.module('src/components/editors/editors.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Editors & Advanced', esc = U.escape;
  var RX = {
    js: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|\b(const|let|var|function|return|if|else|for|while|do|import|from|export|default|new|class|extends|async|await|try|catch|finally|throw|switch|case|break|continue|typeof|instanceof|in|of|true|false|null|undefined|this|static)\b|(\b\d+\.?\d*\b)|(\b[A-Za-z_$][\w$]*)(?=\()/g,
    json: /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|(-?\b\d+\.?\d*(?:[eE][+-]?\d+)?\b)/g,
    css: /(\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(#[0-9a-fA-F]{3,8}\b)|(\b\d+\.?\d*(?:px|em|rem|%|vh|vw|ms|s|deg)?\b)|([\w-]+)(?=\s*:)|(@[\w-]+)/g,
    html: /(<!--[\s\S]*?-->)|(<\/?[\w-]+)|("[^"]*"|'[^']*')|(\s[\w:@-]+)(?==)/g,
    md: /(```[\s\S]*?```)|(^#{1,6}\s.*$)|(\*\*[^*]+\*\*|`[^`]+`)|(^\s*(?:[-*+]|\d+\.)\s)|(^&gt;.*$)/gm
  };
  /** Tiny regex tokenizer — dependency free. Plug in a full highlighter by replacing MiniUI.highlight. */
  M.highlight = function (code, lang) {
    lang = lang === 'javascript' ? 'js' : lang === 'markdown' ? 'md' : lang === 'xml' ? 'html' : lang;
    var rx = RX[lang]; if (!rx) return esc(code); rx.lastIndex = 0; var out = '', last = 0, m, src = lang === 'md' ? esc(code) : code;
    rx.lastIndex = 0;
    while ((m = rx.exec(src))) {
      if (m[0] === '') { rx.lastIndex++; continue; } out += lang === 'md' ? src.slice(last, m.index) : esc(src.slice(last, m.index)); var cls = '';
      if (lang === 'js') cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : m[4] ? 'n' : 'f';
      else if (lang === 'json') cls = m[1] ? (m[2] ? 'p' : 's') : m[3] ? 'k' : 'n';
      else if (lang === 'css') cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'n' : m[4] ? 'n' : m[5] ? 'p' : 'k';
      else if (lang === 'html') cls = m[1] ? 'c' : m[2] ? 'k' : m[3] ? 's' : 'p';
      else cls = m[1] ? 's' : m[2] ? 'k' : m[3] ? 'f' : m[4] ? 'n' : 'c';
      out += '<span class="tk-' + cls + '">' + (lang === 'md' ? m[0] : esc(m[0])) + '</span>'; last = m.index + m[0].length;
    }
    return out + (lang === 'md' ? src.slice(last) : esc(src.slice(last)));
  };

  /** Safe Markdown subset → HTML (all raw HTML is escaped; only http/https/mailto links). */
  M.markdown = function (src) {
    var inline = function (s) { s = esc(s); s = s.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>').replace(/~~([^~]+)~~/g, '<del>$1</del>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|#[^\s)]*)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>'); return s; };
    var lines = String(src || '').replace(/\r/g, '').split('\n'), out = [], i = 0, list = null;
    var close = function () { if (list) { out.push('</' + list + '>'); list = null; } };
    while (i < lines.length) {
      var l = lines[i], m;
      if ((m = /^```(\w*)/.exec(l))) { close(); var buf = []; i++; while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]); i++; out.push('<pre><code>' + M.highlight(buf.join('\n'), m[1] || 'plain') + '</code></pre>'); continue; }
      if ((m = /^(#{1,6})\s+(.*)$/.exec(l))) { close(); out.push('<h' + m[1].length + '>' + inline(m[2]) + '</h' + m[1].length + '>'); i++; continue; }
      if (/^\s*([-*_])\1{2,}\s*$/.test(l)) { close(); out.push('<hr>'); i++; continue; }
      if ((m = /^>\s?(.*)$/.exec(l))) { close(); var q = [m[1]]; i++; while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, '')); out.push('<blockquote>' + inline(q.join(' ')) + '</blockquote>'); continue; }
      if ((m = /^\s*([-*+]|\d+\.)\s+(.*)$/.exec(l))) { var t = /\d/.test(m[1]) ? 'ol' : 'ul'; if (list !== t) { close(); out.push('<' + t + '>'); list = t; } out.push('<li>' + inline(m[2]) + '</li>'); i++; continue; }
      if (!l.trim()) { close(); i++; continue; }
      close(); var p = [l]; i++; while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|```|>|\s*([-*+]|\d+\.)\s)/.test(lines[i])) p.push(lines[i++]); out.push('<p>' + inline(p.join(' ')) + '</p>');
    }
    close(); return out.join('\n');
  };
  M.sanitizeHtml = function (html) {
    var ok = { B: 1, I: 1, U: 1, STRONG: 1, EM: 1, P: 1, BR: 1, UL: 1, OL: 1, LI: 1, H1: 1, H2: 1, H3: 1, A: 1, BLOCKQUOTE: 1, CODE: 1, PRE: 1, DIV: 1, SPAN: 1, S: 1 }, doc = new DOMParser().parseFromString('<body>' + html, 'text/html');
    (function walk(n) { Array.prototype.slice.call(n.childNodes).forEach(function (c) { if (c.nodeType === 8) { c.remove(); return; } if (c.nodeType !== 1) return; if (!ok[c.tagName]) { if (/^(SCRIPT|STYLE|IFRAME|OBJECT|EMBED)$/.test(c.tagName)) { c.remove(); return; } walk(c); while (c.firstChild) c.parentNode.insertBefore(c.firstChild, c); c.remove(); return; } Array.prototype.slice.call(c.attributes).forEach(function (a) { if (!(c.tagName === 'A' && a.name === 'href' && /^(https?:|mailto:)/i.test(a.value))) c.removeAttribute(a.name); }); walk(c); }); })(doc.body);
    return doc.body.innerHTML;
  };

  class CodeBlock extends UIElement {
    static props = { code: {}, language: { default: 'plain' }, lineNumbers: { type: 'boolean' }, copy: { type: 'boolean', default: true } };
    build() { this._src = this.code || this.textContent.replace(/^\n/, '').replace(/\s+$/, ''); this.textContent = ''; this._c = h('code'); this._pre = h('pre', { class: 'ui-own', tabindex: '0' }, this._c); this._cp = h('ui-copy-button', { class: 'ui-own ui-cb-copy' }); this._lg = h('span', { class: 'ui-own ui-cb-lang' }); this.append(this._pre, this._cp, this._lg); }
    update() { var src = this.code || this._src; var html = M.highlight(src, this.language); if (this.lineNumbers) html = html.split('\n').map(function (l, i) { return '<span class="ln">' + (i + 1) + '</span>' + l; }).join('\n'); this._c.innerHTML = html; this._cp.text = src; this._cp.hidden = !this.copy; this._lg.textContent = this.language === 'plain' ? '' : this.language; this._pre.setAttribute('aria-label', 'Código ' + this.language); }
  }
  M.define('ui-code-block', CodeBlock, { group: G, desc: 'Syntax-highlighted code with copy button (js, json, css, html, md).' });
  ['syntax-viewer', 'source-viewer'].forEach(function (n) { M.alias('ui-' + n, CodeBlock, { lineNumbers: true }, { desc: 'Read-only source viewer with line numbers.' }); }); M.alias('ui-text-document-viewer', CodeBlock, { lineNumbers: true, language: 'plain' }, { desc: 'Plain text document viewer.' });

  class CodeEditor extends UIElement {
    static props = { value: { default: '' }, language: { default: 'plain' }, readonly: { type: 'boolean' }, lineNumbers: { type: 'boolean', default: true }, placeholder: {}, label: { default: 'Editor de código' } };
    build() {
      this._g = h('div', { class: 'ui-ce-g', 'aria-hidden': 'true' }); this._hl = h('pre', { class: 'ui-ce-hl', 'aria-hidden': 'true' }); this._ta = h('textarea', { class: 'ui-ce-ta', spellcheck: 'false', autocapitalize: 'off', autocomplete: 'off', wrap: 'off' }); this._st = h('div', { class: 'ui-ce-st' }, this._pos = h('span'), this._lg = h('span'));
      this.append(h('div', { class: 'ui-own ui-ce' }, this._g, h('div', { class: 'ui-ce-w' }, this._hl, this._ta)), this._st);
      var ta = this._ta, sync = () => { this._hl.scrollTop = ta.scrollTop; this._hl.scrollLeft = ta.scrollLeft; this._g.scrollTop = ta.scrollTop; };
      ta.addEventListener('scroll', sync); ta.addEventListener('input', () => { this._p.value = ta.value; this._paint(); this.emit('change', { value: ta.value }); }); ['keyup', 'click', 'select', 'focus'].forEach((ev) => ta.addEventListener(ev, () => this._cursor()));
      ta.addEventListener('keydown', (e) => {
        if (this.readonly) return; var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value, ins = (t, ns, ne) => { ta.focus(); if (!document.execCommand || !document.execCommand('insertText', false, t)) { ta.value = v.slice(0, s) + t + v.slice(en); } ta.setSelectionRange(ns, ne == null ? ns : ne); ta.dispatchEvent(new Event('input')); };
        if (e.key === 'Tab') { e.preventDefault(); if (s !== en && v.slice(s, en).indexOf('\n') > -1) { var a = v.lastIndexOf('\n', s - 1) + 1, blk = v.slice(a, en), nb = e.shiftKey ? blk.replace(/^ {1,2}/gm, '') : blk.replace(/^/gm, '  '); ta.setSelectionRange(a, en); ins(nb, a, a + nb.length); } else if (e.shiftKey) { var ls = v.lastIndexOf('\n', s - 1) + 1; if (v.slice(ls, ls + 2) === '  ') { ta.setSelectionRange(ls, ls + 2); ins('', Math.max(ls, s - 2)); } } else ins('  ', s + 2); }
        else if (e.key === 'Enter') { var ls2 = v.lastIndexOf('\n', s - 1) + 1, ind = /^[ \t]*/.exec(v.slice(ls2, s))[0], pre = v.slice(ls2, s).trimEnd(), extra = /[{\[(:]$/.test(pre) ? '  ' : ''; e.preventDefault(); ins('\n' + ind + extra, s + 1 + ind.length + extra.length); }
      });
    }
    focus() { this._ta.focus(); } get textarea() { return this._ta; }
    setSelection(a, b) { this._ta.focus(); this._ta.setSelectionRange(a, b); var line = this._ta.value.slice(0, a).split('\n').length - 1; this._ta.scrollTop = Math.max(0, line * 19.4 - this._ta.clientHeight / 2); this._ta.dispatchEvent(new Event('scroll')); this._cursor(); }
    getSelection() { return { start: this._ta.selectionStart, end: this._ta.selectionEnd, text: this._ta.value.slice(this._ta.selectionStart, this._ta.selectionEnd) }; }
    _cursor() { var v = this._ta.value, p = this._ta.selectionStart, ln = v.slice(0, p).split('\n'); this._pos.textContent = 'Ln ' + ln.length + ', Col ' + (ln[ln.length - 1].length + 1) + (this._ta.selectionEnd > p ? ' (' + (this._ta.selectionEnd - p) + ' sel.)' : ''); }
    _paint() { var v = this._ta.value; this._hl.innerHTML = M.highlight(v, this.language) + '\n'; var n = v.split('\n').length; if (n !== this._n) { this._n = n; var s = ''; for (var i = 1; i <= n; i++) s += i + '\n'; this._g.textContent = s; } this._hl.scrollTop = this._ta.scrollTop; }
    update() { var v = this._p.value == null ? '' : this._p.value; if (this._ta.value !== v) this._ta.value = v; this._ta.readOnly = this.readonly; this._ta.placeholder = this.placeholder || ''; this._ta.setAttribute('aria-label', this.label); this._g.hidden = !this.lineNumbers; this._lg.textContent = this.language.toUpperCase(); this._paint(); this._cursor(); }
  }
  M.define('ui-code-editor', CodeEditor, { group: G, desc: 'Lightweight code editor: syntax highlighting overlay, line numbers, Tab indent, auto-indent, cursor status.', events: ['ui-change'], methods: ['focus()', 'setSelection(a,b)', 'getSelection()'] });

  class MarkdownViewer extends UIElement { static props = { value: { default: '' } }; update() { this.innerHTML = M.markdown(this.value || this.textContent); } build() { if (!this.value && this.textContent.trim()) this._p.value = this.textContent.replace(/^\n/, '').replace(/^\s{0,8}/gm, ''); } }
  M.define('ui-markdown-viewer', MarkdownViewer, { group: G, desc: 'Renders Markdown safely (raw HTML is escaped).' });
  class MarkdownEditor extends UIElement {
    static props = { value: { default: '' }, height: { type: 'number', default: 320 } };
    build() { var wrap = (a, b) => () => this._wrap(a, b), bt = (ic, l, f) => h('ui-button', { variant: 'toolbar', size: 'sm', icon: ic, 'aria-label': l, onclick: f }); this._ed = h('ui-code-editor', { language: 'md' }); this._vw = h('ui-markdown-viewer');
      this.append(h('ui-toolbar', { dense: '', class: 'ui-own' }, bt('bold', 'Negrito', wrap('**', '**')), bt('italic', 'Itálico', wrap('*', '*')), bt('code', 'Código', wrap('`', '`')), bt('link', 'Link', () => this._wrap('[', '](https://)')), bt('list', 'Lista', () => this._line('- ')), bt('quote', 'Citação', () => this._line('> ')), bt('type', 'Título', () => this._line('## '))), h('ui-split', { class: 'ui-own' }, this._ed, h('div', null, this._vw)));
      this._ed.addEventListener('ui-change', (e) => { e.stopPropagation(); this._p.value = e.detail.value; this._vw.value = e.detail.value; this.emit('change', { value: e.detail.value }); }); }
    _wrap(a, b) { var s = this._ed.getSelection(), v = this._ed.value; this._ed.value = v.slice(0, s.start) + a + (s.text || 'texto') + b + v.slice(s.end); this._ed.requestUpdate('value'); this._ed.emit('change', { value: this._ed.value }); this._ed.focus(); }
    _line(p) { var s = this._ed.getSelection(), v = this._ed.value, ls = v.lastIndexOf('\n', s.start - 1) + 1; this._ed.value = v.slice(0, ls) + p + v.slice(ls); this._ed.emit('change', { value: this._ed.value }); this._ed.focus(); }
    update() { this.style.height = this.height + 'px'; if (this._ed.value !== this.value) { this._ed.value = this.value; this._vw.value = this.value; } }
  }
  M.define('ui-markdown-editor', MarkdownEditor, { group: G, desc: 'Split Markdown editor with formatting toolbar and live preview.', events: ['ui-change'] });

  class RichText extends UIElement {
    static props = { value: { default: '' }, placeholder: { default: 'Escreva algo…' }, readonly: { type: 'boolean' } };
    build() {
      var cmd = (c, a) => () => { this._c.focus(); if (!document.execCommand) { M.toast.warning('Edição rica indisponível neste runtime'); return; } document.execCommand(c, false, a); this._emit(); };
      var bt = (ic, l, f) => { var b = h('ui-button', { variant: 'toolbar', size: 'sm', icon: ic, 'aria-label': l, onclick: f }); b.addEventListener('mousedown', (e) => e.preventDefault()); return b; };
      this._c = h('div', { class: 'ui-rte-c', contenteditable: 'true', role: 'textbox', 'aria-multiline': 'true', 'data-ph': this.placeholder });
      this.append(h('ui-toolbar', { dense: '', class: 'ui-own', label: 'Formatação' }, bt('bold', 'Negrito', cmd('bold')), bt('italic', 'Itálico', cmd('italic')), bt('underline', 'Sublinhado', cmd('underline')), h('ui-divider', { orientation: 'vertical' }), bt('type', 'Título', cmd('formatBlock', 'H2')), bt('quote', 'Citação', cmd('formatBlock', 'BLOCKQUOTE')), bt('list', 'Lista', cmd('insertUnorderedList')), bt('list-ol', 'Lista numerada', cmd('insertOrderedList')), bt('link', 'Link', () => { M.Dialogs.prompt('URL do link', { value: 'https://' }).then((u) => { if (u && /^(https?:|mailto:)/i.test(u)) { this._c.focus(); document.execCommand('createLink', false, u); this._emit(); } }); }), h('ui-divider', { orientation: 'vertical' }), bt('undo', 'Desfazer', cmd('undo')), bt('redo', 'Refazer', cmd('redo')), bt('x', 'Limpar formatação', cmd('removeFormat'))), this._c);
      this._c.addEventListener('input', () => this._emit()); this._c.addEventListener('paste', (e) => { e.preventDefault(); var t = (e.clipboardData || window.clipboardData).getData('text/plain'); document.execCommand && document.execCommand('insertText', false, t); });
    }
    _emit() { this._p.value = M.sanitizeHtml(this._c.innerHTML); this.emit('change', { value: this._p.value, text: this._c.textContent }); }
    get text() { return this._c.textContent; } focus() { this._c.focus(); }
    update() { var v = this.value || ''; if (M.sanitizeHtml(this._c.innerHTML) !== v) this._c.innerHTML = M.sanitizeHtml(v); this._c.contentEditable = String(!this.readonly); this._c.setAttribute('data-ph', this.placeholder); }
  }
  M.define('ui-rich-text-editor', RichText, { group: G, desc: 'Rich text editor (contenteditable + toolbar). Output is sanitised through a tag/attribute allow-list. Uses document.execCommand where available.', events: ['ui-change'] });

  class JSONViewer extends UIElement {
    static props = { value: { type: 'any' }, expanded: { type: 'number', default: 2, doc: 'Depth expanded by default' } };
    build() { this.addEventListener('click', (e) => { var t = e.target.closest('.ui-j-t'); if (t) { var open = t.getAttribute('aria-expanded') !== 'true'; t.setAttribute('aria-expanded', String(open)); t.parentNode.querySelector(':scope > .ui-j-row').hidden = !open; t.parentNode.querySelector(':scope > .ui-j-m').hidden = open; } var k = e.target.closest('.ui-j-k'); if (k) { this.emit('select', { path: k.getAttribute('data-p') }); M.clipboard.write(k.getAttribute('data-p')); } }); }
    _node(k, v, d, path) {
      var key = k == null ? null : h('span', { class: 'ui-j-k', 'data-p': path, title: 'Copiar caminho' }, JSON.stringify(String(k))); var sep = key ? ': ' : '';
      if (v !== null && typeof v === 'object') {
        var arr = Array.isArray(v), ks = Object.keys(v), open = d < this.expanded, body = h('div', { class: 'ui-j-row' }); body.hidden = !open;
        ks.forEach((kk, i) => body.append(this._node(arr ? null : kk, v[kk], d + 1, path + (arr ? '[' + kk + ']' : (path ? '.' : '') + kk)), ...(i < ks.length - 1 ? [','] : [])));
        var row = h('div', null, h('button', { class: 'ui-j-t', type: 'button', 'aria-expanded': String(open), 'aria-label': 'Alternar', '.innerHTML': M.icon('chevron-right', { size: '10px', stroke: 3 }) }), key, key ? ': ' : '', arr ? '[' : '{', h('span', { class: 'ui-j-m' }, ' ' + ks.length + (arr ? ' itens' : ' chaves') + ' '), body, arr ? ']' : '}');
        var meta = row.querySelector('.ui-j-m'); meta.hidden = open; if (!ks.length) { row.querySelector('.ui-j-t').style.visibility = 'hidden'; meta.hidden = true; }
        // move the closing bracket after body (already after). Reorder: toggle + key + open + meta + body + close
        return row;
      }
      var cls = typeof v === 'string' ? 'ui-j-s' : typeof v === 'number' ? 'ui-j-n' : typeof v === 'boolean' ? 'ui-j-b' : 'ui-j-z';
      return h('div', { class: 'ui-j-row', style: { paddingLeft: '16px' } }, key, sep, h('span', { class: cls }, typeof v === 'string' ? JSON.stringify(v) : String(v)));
    }
    update() { this.innerHTML = ''; this.append(this._node(null, this.value === undefined ? null : this.value, 0, '$')); this.setAttribute('role', 'tree'); }
  }
  M.define('ui-json-viewer', JSONViewer, { group: G, desc: 'Collapsible JSON tree; click a key to copy its path.', events: ['ui-select'] });
  class JSONEditor extends UIElement {
    static props = { value: { type: 'any' }, height: { type: 'number', default: 240 } };
    build() { this._ed = h('ui-code-editor', { language: 'json', label: 'Editor JSON' }); this._msg = h('span', { class: 'ui-jed-msg' }); var bt = (l, f) => h('ui-button', { size: 'sm', onclick: f }, l); this.append(this._ed, h('div', { class: 'ui-own ui-jed-bar' }, this._msg, bt('Formatar', () => this._fmt(2)), bt('Minificar', () => this._fmt(0))));
      this._ed.addEventListener('ui-change', (e) => { e.stopPropagation(); this._parse(e.detail.value, true); }); }
    _parse(t, emit) { try { var v = JSON.parse(t); this._p.value = v; this._msg.textContent = '✓ JSON válido'; this._msg.className = 'ui-jed-msg ok'; if (emit) this.emit('change', { value: v }); return true; } catch (e) { this._msg.textContent = '✗ ' + e.message; this._msg.className = 'ui-jed-msg bad'; this.emit('invalid', { message: e.message }); return false; } }
    _fmt(n) { if (this._parse(this._ed.value)) { this._ed.value = JSON.stringify(this._p.value, null, n); this._ed.requestUpdate('value'); } }
    update() { this._ed.style.height = this.height + 'px'; if (this._p.value !== undefined && !this._own) { var t = JSON.stringify(this._p.value, null, 2); try { if (JSON.stringify(JSON.parse(this._ed.value || 'null')) !== JSON.stringify(this._p.value)) this._ed.value = t; } catch (e) { this._ed.value = t; } } this._parse(this._ed.value || 'null'); }
  }
  M.define('ui-json-editor', JSONEditor, { group: G, desc: 'JSON editor with live validation and format/minify.', events: ['ui-change', 'ui-invalid'] });
  class XMLViewer extends UIElement {
    static props = { value: { default: '' } };
    _n(n, d) { if (n.nodeType === 3) { var t = n.textContent.trim(); return t ? h('div', { class: 'ui-j-row ui-j-s' }, t) : null; } if (n.nodeType !== 1) return null; var attrs = Array.prototype.map.call(n.attributes, function (a) { return h('span', null, ' ', h('span', { class: 'ui-j-k' }, a.name), '=', h('span', { class: 'ui-j-s' }, '"' + a.value + '"')); }), kids = Array.prototype.map.call(n.childNodes, (c) => this._n(c, d + 1)).filter(Boolean);
      if (!kids.length) return h('div', { class: 'ui-j-row' }, '<', h('span', { class: 'ui-j-b' }, n.tagName), attrs, ' />'); var body = h('div', null, kids); body.hidden = d >= 3; var t = h('button', { class: 'ui-j-t', type: 'button', 'aria-expanded': String(d < 3), '.innerHTML': M.icon('chevron-right', { size: '10px', stroke: 3 }), 'aria-label': 'Alternar' });
      return h('div', { class: 'ui-j-row' }, t, '<', h('span', { class: 'ui-j-b' }, n.tagName), attrs, '>', body, '</', h('span', { class: 'ui-j-b' }, n.tagName), '>'); }
    build() { this.addEventListener('click', (e) => { var t = e.target.closest('.ui-j-t'); if (t) { var o = t.getAttribute('aria-expanded') !== 'true'; t.setAttribute('aria-expanded', String(o)); t.parentNode.querySelector(':scope > div').hidden = !o; } }); this.classList.add('ui-json-like'); this.style.font = '12.5px/1.6 var(--ui-font-mono)'; }
    update() { this.innerHTML = ''; var doc = new DOMParser().parseFromString(this.value || this.textContent || '<root/>', 'application/xml'); var err = doc.querySelector('parsererror'); if (err) { this.append(h('ui-alert', { variant: 'danger', heading: 'XML inválido' }, err.textContent.slice(0, 200))); return; } this.append(this._n(doc.documentElement, 0)); }
  }
  M.define('ui-xml-viewer', XMLViewer, { group: G, desc: 'Collapsible XML tree (DOMParser).' });

  class Terminal extends UIElement {
    static props = { prompt: { default: 'user@mini' }, welcome: { default: 'Mini Terminal — digite "help" para ver os comandos.' } };
    build() {
      this.commands = {}; this._hist = []; this._hi = 0; this.cwd = '/home/user'; this._out = h('div', { role: 'log', 'aria-live': 'polite', 'aria-label': 'Saída do terminal' }); this._ps = h('span', { class: 'ui-tm-ps' }); this._in = h('input', { type: 'text', spellcheck: 'false', autocomplete: 'off', autocapitalize: 'off', 'aria-label': 'Linha de comando' });
      this.append(this._out, h('div', { class: 'ui-own ui-tm-line' }, this._ps, this._in)); this.addEventListener('click', () => { if (!getSelection().toString()) this._in.focus(); });
      this._in.addEventListener('keydown', (e) => { if (e.key === 'Enter') { var l = this._in.value; this._in.value = ''; this.run(l); } else if (e.key === 'ArrowUp') { e.preventDefault(); if (this._hi > 0) this._in.value = this._hist[--this._hi]; } else if (e.key === 'ArrowDown') { e.preventDefault(); this._in.value = this._hi < this._hist.length - 1 ? this._hist[++this._hi] : (this._hi = this._hist.length, ''); } else if (e.key === 'Tab') { e.preventDefault(); var p = this._in.value, m = Object.keys(this.commands).filter(function (c) { return c.indexOf(p) === 0; }); if (m.length === 1) this._in.value = m[0] + ' '; else if (m.length > 1) this.print(m.join('  '), 'm'); } else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); this.clear(); } else if (e.key === 'c' && e.ctrlKey) { this.print(this._ps.textContent + ' ' + this._in.value + '^C', 'm'); this._in.value = ''; } });
      this._builtins(); this.print(this.welcome, 'm');
    }
    focus() { this._in.focus(); }
    print(t, cls) { var d = h('div', { class: 'o ' + (cls || '') }); d.textContent = t; this._out.append(d); this.scrollTop = this.scrollHeight; return d; }
    printHtml(html) { var d = h('div', { class: 'o', '.innerHTML': html }); this._out.append(d); this.scrollTop = this.scrollHeight; }
    clear() { this._out.innerHTML = ''; }
    register(name, fn, help) { this.commands[name] = fn; fn.help = help || ''; }
    resolve(p) { p = p || ''; if (p === '~' || !p) p = p ? '/home/user' : this.cwd; if (p[0] === '~') p = '/home/user' + p.slice(1); if (p[0] !== '/') p = this.cwd + '/' + p; var o = []; p.split('/').forEach(function (s) { if (!s || s === '.') return; if (s === '..') o.pop(); else o.push(s); }); return '/' + o.join('/'); }
    run(line) {
      this.print(this._ps.textContent + ' ' + line, 'k'); line = line.trim(); if (!line) return Promise.resolve(); this._hist.push(line); this._hi = this._hist.length;
      var parts = line.match(/"[^"]*"|'[^']*'|\S+/g).map(function (s) { return s.replace(/^["']|["']$/g, ''); }), name = parts[0], fn = this.commands[name];
      if (!fn) { this.print(name + ': comando não encontrado', 'e'); return Promise.resolve(); }
      return Promise.resolve().then(() => fn.call(this, parts.slice(1), this)).catch((e) => this.print(name + ': ' + (e.message || e), 'e')).then(() => { this.emit('command', { line: line }); });
    }
    _builtins() {
      var fs = M.Platform.filesystem, self = this, R = (p) => self.resolve(p);
      this.register('help', function () { self.print(Object.keys(self.commands).sort().map(function (c) { return '  ' + c.padEnd(10) + (self.commands[c].help || ''); }).join('\n')); }, 'lista os comandos');
      this.register('clear', function () { self.clear(); }, 'limpa a tela'); this.register('echo', function (a) { self.print(a.join(' ')); }, 'imprime texto'); this.register('date', function () { self.print(new Date().toString()); }, 'data e hora');
      this.register('whoami', function () { self.print('user'); }, 'usuário atual'); this.register('pwd', function () { self.print(self.cwd); }, 'diretório atual');
      this.register('ls', function (a) { return fs.list({ path: R(a[0] || '.') }).then(function (l) { self.printHtml(l.map(function (e) { return e.type === 'dir' ? '<span class="d">' + U.escape(e.name) + '/</span>' : U.escape(e.name); }).join('&nbsp;&nbsp;') || '<span class="m">(vazio)</span>'); }); }, 'lista arquivos (Platform.filesystem)');
      this.register('cd', function (a) { var p = R(a[0] || '~'); return fs.stat({ path: p }).then(function (s) { if (s.type !== 'dir') throw new Error('não é um diretório'); self.cwd = p; self._ps.textContent = self.prompt + ':' + (p === '/home/user' ? '~' : p.replace('/home/user', '~')) + '$'; }); }, 'muda de diretório');
      this.register('cat', function (a) { if (!a[0]) throw new Error('uso: cat arquivo'); return fs.readText({ path: R(a[0]) }).then(function (t) { self.print(t); }); }, 'mostra um arquivo de texto');
      this.register('mkdir', function (a) { if (!a[0]) throw new Error('uso: mkdir nome'); return fs.mkdir({ path: R(a[0]) }); }, 'cria diretório'); this.register('rm', function (a) { if (!a[0]) throw new Error('uso: rm caminho'); return fs.remove({ path: R(a[0]) }); }, 'remove (sujeito a permissão)');
      this.register('theme', function (a) { var t = a[0] || 'toggle'; if (t === 'toggle') M.ThemeManager.toggle(); else M.ThemeManager.apply(t); self.print('tema: ' + M.ThemeManager.current); }, 'theme [light|dark|midnight|rose|forest|toggle]');
      this.register('notify', function (a) { M.Notifications.push({ title: 'Terminal', body: a.join(' ') || 'olá', app: 'Terminal', icon: 'terminal' }); }, 'envia uma notificação');
      this.register('uname', function () { return M.Platform.system.info().then(function (i) { self.print('MiniUI ' + M.version + ' · adapter=' + M.Platform.adapter.name + ' · ' + i.platform + ' · ' + i.cores + ' núcleos'); }); }, 'informações do runtime');
      this.register('history', function () { self.print(self._hist.map(function (h2, i) { return (i + 1) + '  ' + h2; }).join('\n')); }, 'histórico');
      this.register('perm', function (a) { return M.Platform.permissions.query({ name: a[0] || 'filesystem' }).then(function (r) { self.print(r.name + ': ' + r.state); }); }, 'consulta permissão');
    }
    update() { this._ps.textContent = this.prompt + ':' + (this.cwd === '/home/user' ? '~' : this.cwd) + '$'; }
    mounted() { this._in.focus({ preventScroll: true }); }
  }
  M.define('ui-terminal-view', Terminal, { group: G, desc: 'Terminal emulator UI with extensible command registry. Built-in file commands use Platform.filesystem — i.e. only what the backend authorises.', events: ['ui-command'], methods: ['register(name, fn, help)', 'run(line)', 'print(text, cls)', 'clear()'] });

  class LogViewer extends UIElement {
    static props = { entries: { type: 'any', default: null }, level: { default: 'all' }, query: { default: '' }, follow: { type: 'boolean', default: true }, height: { type: 'number', default: 280 }, label: { default: 'Registro' } };
    build() { this._f = []; this._all = []; this._lv = h('ui-segmented', { size: 'sm', items: ['all', 'debug', 'info', 'warn', 'error'], 'aria-label': 'Nível' }); this._q = h('ui-search-field', { placeholder: 'Buscar no log', style: { flex: '1' } }); this._fl = h('ui-switch', { 'aria-label': 'Seguir' }, 'Seguir'); this._cn = h('span', { class: 'ui-fld-msg', style: { margin: 0 } }); this._sc = h('div', { class: 'ui-lg-sc ui-scroll', role: 'log', 'aria-label': this.label });
      this.append(h('div', { class: 'ui-own ui-lg-bar' }, this._lv, this._q, this._fl, this._cn), this._sc); this._vs = new M.VirtualScroller(this._sc, { rowHeight: 22, count: 0, render: (i) => this._row(this._f[i]) });
      this._lv.addEventListener('ui-change', (e) => { e.stopPropagation(); this.level = e.detail.value; }); this._q.addEventListener('ui-search', (e) => { this.query = e.detail.value; }); this._fl.addEventListener('ui-change', (e) => { e.stopPropagation(); this.follow = e.detail.checked; }); }
    _row(en) { var q = this.query, msg = en.message, r = h('div', { class: 'ui-lg-r', 'data-l': en.level }, h('span', { class: 't' }, M.format.time(en.time, { timeStyle: 'medium' })), h('span', { class: 'l' }, en.level)), m = h('span'); if (q) m.innerHTML = M.highlightText(msg, q); else m.textContent = msg; r.append(m); return r; }
    append(...a) { if (a[0] && a[0].level !== undefined && !a[0].nodeType) { var en = Object.assign({ time: Date.now() }, a[0]); this._all.push(en); if (this._all.length > 20000) this._all.shift(); this._filter(); return; } return super.append(...a); }
    log(level, message) { this.append({ level: level, message: String(message) }); }
    _filter() { var q = (this.query || '').toLowerCase(), lv = this.level; this._f = this._all.filter(function (e) { return (lv === 'all' || e.level === lv) && (!q || e.message.toLowerCase().indexOf(q) > -1); }); this._vs.setCount(this._f.length); this._cn.textContent = this._f.length + ' / ' + this._all.length; if (this.follow) this._sc.scrollTop = this._sc.scrollHeight; }
    clear() { this._all = []; this._filter(); }
    update() { this._sc.style.height = this.height + 'px'; if (Array.isArray(this.entries) && this.entries !== this._seed) { this._seed = this.entries; this._all = this.entries.map(function (e) { return Object.assign({ time: Date.now() }, e); }); } this._fl.checked = this.follow; this._filter(); }
    teardown() { }
  }
  M.define('ui-log-viewer', LogViewer, { group: G, desc: 'Virtualised log viewer: level filter, search with highlight, follow tail, append API (handles tens of thousands of lines).', methods: ['append({level,message})', 'log(level,msg)', 'clear()'] });

  M.highlightText = function (text, q) { if (!q) return esc(text); var out = '', low = text.toLowerCase(), ql = q.toLowerCase(), i = 0, j; while ((j = low.indexOf(ql, i)) > -1) { out += esc(text.slice(i, j)) + '<mark>' + esc(text.slice(j, j + q.length)) + '</mark>'; i = j + q.length; } return out + esc(text.slice(i)); };
  class SearchHighlight extends UIElement { static props = { text: {}, query: {} }; update() { var t = this.text != null ? this.text : this._src || (this._src = this.textContent); this.innerHTML = M.highlightText(t, this.query); } }
  M.define('ui-search-highlight', SearchHighlight, { group: G, desc: 'Highlights occurrences of a query inside text.' });

  /** Line diff via LCS. */
  M.diffLines = function (a, b) { var x = a.split('\n'), y = b.split('\n'), n = x.length, m = y.length, L = []; for (var i = 0; i <= n; i++) { L[i] = new Array(m + 1).fill(0); } for (i = n - 1; i >= 0; i--) for (var j = m - 1; j >= 0; j--) L[i][j] = x[i] === y[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]); var out = []; i = 0; j = 0; while (i < n && j < m) { if (x[i] === y[j]) { out.push({ t: '=', a: i + 1, b: j + 1, s: x[i] }); i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) { out.push({ t: '-', a: i + 1, s: x[i] }); i++; } else { out.push({ t: '+', b: j + 1, s: y[j] }); j++; } } while (i < n) { out.push({ t: '-', a: i + 1, s: x[i++] }); } while (j < m) { out.push({ t: '+', b: j + 1, s: y[j++] }); } return out; };
  class DiffViewer extends UIElement {
    static props = { before: { default: '' }, after: { default: '' }, mode: { default: 'unified', doc: 'unified|split' } };
    update() { var d = M.diffLines(this.before, this.after), add = d.filter(function (x) { return x.t === '+'; }).length, del = d.filter(function (x) { return x.t === '-'; }).length; this.innerHTML = ''; var bar = h('div', { class: 'ui-own ui-df-h' }, h('strong', { style: { color: 'var(--ui-success)' } }, '+' + add), h('strong', { style: { color: 'var(--ui-danger)' } }, '−' + del), h('span', { style: { flex: 1 } }), h('ui-segmented', { size: 'sm', value: this.mode, items: ['unified', 'split'], 'aria-label': 'Modo' })); bar.querySelector('ui-segmented').addEventListener('ui-change', (e) => { e.stopPropagation(); this.mode = e.detail.value; }); this.append(bar);
      var row = (x, cols) => cols === 3 ? h('div', { class: 'ui-df-r ' + (x.t === '+' ? 'add' : x.t === '-' ? 'del' : '') }, h('span', null, x.a || ''), h('span', null, x.b || ''), h('pre', null, (x.t === '+' ? '+ ' : x.t === '-' ? '- ' : '  ') + x.s)) : h('div', { class: 'ui-df-r ' + (x.t === '+' ? 'add' : x.t === '-' ? 'del' : '') }, h('span', null, x.a || x.b || ''), h('pre', null, x.s));
      if (this.mode === 'split') { this.append(h('div', { class: 'ui-df-split' }, h('div', null, d.filter(function (x) { return x.t !== '+'; }).map(function (x) { return row(x, 2); })), h('div', null, d.filter(function (x) { return x.t !== '-'; }).map(function (x) { return row(Object.assign({}, x, { a: x.b }), 2); })))); } else d.forEach((x) => this.append(row(x, 3))); }
  }
  M.define('ui-diff-viewer', DiffViewer, { group: G, desc: 'Line diff (LCS) with unified / split modes.' });
  class SearchReplace extends UIElement {
    static props = { target: { type: 'any', doc: 'ui-code-editor / textarea element (or selector string)' } };
    build() { this._f = h('input', { placeholder: 'Buscar', 'aria-label': 'Buscar', class: 'ui-fld-input', style: { border: '1px solid var(--ui-control-border)', borderRadius: '6px', padding: '0 8px', height: '28px', background: 'var(--ui-control-bg)' } }); this._r = h('input', { placeholder: 'Substituir', 'aria-label': 'Substituir', class: 'ui-fld-input', style: { border: '1px solid var(--ui-control-border)', borderRadius: '6px', padding: '0 8px', height: '28px', background: 'var(--ui-control-bg)' } }); this._c = h('span', { class: 'ui-sr-c' }); this._cs = h('ui-button', { variant: 'toolbar', size: 'sm', toggle: '', 'aria-label': 'Diferenciar maiúsculas' }, 'Aa'); this._rx = h('ui-button', { variant: 'toolbar', size: 'sm', toggle: '', 'aria-label': 'Expressão regular' }, '.*');
      this.append(h('div', { class: 'ui-own ui-sr-row' }, this._f, this._cs, this._rx, this._c, h('ui-button', { variant: 'toolbar', size: 'sm', icon: 'chevron-up', 'aria-label': 'Anterior', onclick: () => this.find(-1) }), h('ui-button', { variant: 'toolbar', size: 'sm', icon: 'chevron-down', 'aria-label': 'Próximo', onclick: () => this.find(1) })), h('div', { class: 'ui-own ui-sr-row' }, this._r, h('ui-button', { size: 'sm', onclick: () => this.replace() }, 'Substituir'), h('ui-button', { size: 'sm', onclick: () => this.replaceAll() }, 'Todos')));
      this._f.addEventListener('input', () => this._count()); this._f.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); this.find(e.shiftKey ? -1 : 1); } }); this._cs.addEventListener('ui-toggle', () => this._count()); this._rx.addEventListener('ui-toggle', () => this._count()); }
    _t() { var t = typeof this.target === 'string' ? document.querySelector(this.target) : this.target; return t ? (t.textarea || t) : null; }
    _re() { var q = this._f.value; if (!q) return null; try { return new RegExp(this._rx.pressed ? q : q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g' + (this._cs.pressed ? '' : 'i')); } catch (e) { return null; } }
    _count() { var t = this._t(), re = this._re(); if (!t || !re) { this._c.textContent = ''; return 0; } var n = (t.value.match(re) || []).length; this._c.textContent = n + (n === 1 ? ' resultado' : ' resultados'); return n; }
    find(dir) { var t = this._t(), re = this._re(); if (!t || !re) return false; var v = t.value, ms = []; var m; re.lastIndex = 0; while ((m = re.exec(v))) { if (m[0] === '') { re.lastIndex++; continue; } ms.push([m.index, m.index + m[0].length]); } if (!ms.length) { this._c.textContent = '0 resultados'; return false; } var pos = dir > 0 ? t.selectionEnd : t.selectionStart - 1, pick = dir > 0 ? ms.filter(function (x) { return x[0] >= pos; })[0] || ms[0] : ms.slice().reverse().filter(function (x) { return x[0] <= pos; })[0] || ms[ms.length - 1]; var host = t.closest && t.closest('ui-code-editor'); if (host && host.setSelection) host.setSelection(pick[0], pick[1]); else { t.focus(); t.setSelectionRange(pick[0], pick[1]); } this._c.textContent = (ms.indexOf(pick) + 1) + ' de ' + ms.length; return true; }
    _write(t, v) { t.value = v; t.dispatchEvent(new Event('input', { bubbles: true })); }
    replace() { var t = this._t(), re = this._re(); if (!t || !re) return; var sel = t.value.slice(t.selectionStart, t.selectionEnd); if (sel && new RegExp('^(?:' + re.source + ')$', re.flags.replace('g', '')).test(sel)) { var s = t.selectionStart, r = this._rx.pressed ? sel.replace(new RegExp(re.source, re.flags.replace('g', '')), this._r.value) : this._r.value; this._write(t, t.value.slice(0, s) + r + t.value.slice(t.selectionEnd)); t.setSelectionRange(s + r.length, s + r.length); } this.find(1); }
    replaceAll() { var t = this._t(), re = this._re(); if (!t || !re) return; var n = this._count(); this._write(t, t.value.replace(re, this._r.value)); this._c.textContent = n + ' substituídos'; this.emit('replace-all', { count: n }); }
  }
  M.define('ui-search-and-replace', SearchReplace, { group: G, desc: 'Find / replace panel for a ui-code-editor or textarea (case, regex, next/prev, replace all).', events: ['ui-replace-all'], methods: ['find(dir)', 'replace()', 'replaceAll()'] });

  /* ----- schema driven fields (PropertyInspector / SettingsEditor) ----- */
  M.renderField = function (def, value, onChange) {
    var t = def.type || (typeof value === 'boolean' ? 'boolean' : typeof value === 'number' ? 'number' : 'text'), el;
    if (t === 'boolean') { el = h('ui-switch', { color: 'accent', 'aria-label': def.label }); el.checked = !!value; el.addEventListener('ui-change', function (e) { e.stopPropagation(); onChange(e.detail.checked); }); }
    else if (t === 'select') { el = h('ui-select', { 'aria-label': def.label }); el.items = def.options; el.value = String(value); el.addEventListener('ui-change', function (e) { e.stopPropagation(); onChange(e.detail.value); }); }
    else if (t === 'color') { el = h('ui-color-picker', { 'aria-label': def.label }); el.value = value; el.addEventListener('ui-change', function (e) { e.stopPropagation(); onChange(e.detail.value); }); }
    else if (t === 'range') { el = h('ui-slider', { min: def.min != null ? def.min : 0, max: def.max != null ? def.max : 100, step: def.step || 1, 'show-value': '', 'aria-label': def.label }); el.value = value; el.addEventListener('ui-change', function (e) { e.stopPropagation(); onChange(e.detail.value); }); }
    else if (t === 'number') { el = h('ui-number-field', { 'aria-label': def.label }); if (def.min != null) el.min = def.min; if (def.max != null) el.max = def.max; el.value = String(value); el.addEventListener('ui-change', function (e) { e.stopPropagation(); onChange(Number(e.detail.value)); }); }
    else { el = h('ui-text-field', { 'aria-label': def.label }); el.value = value == null ? '' : String(value); el.addEventListener('ui-change', function (e) { e.stopPropagation(); onChange(e.detail.value); }); }
    return el;
  };
  class PropertyInspector extends UIElement {
    static props = { target: { type: 'any', doc: 'Object being edited' }, schema: { type: 'any', doc: '[{key,label,type:text|number|boolean|select|color|range,options}] — inferred if omitted' } };
    update() { var o = this.target || {}, schema = this.schema || Object.keys(o).map(function (k) { return { key: k, label: k }; }); this.innerHTML = ''; schema.forEach((d) => { var row = h('div', { class: 'ui-own ui-pi-r' }, h('label', null, d.label || d.key), M.renderField(Object.assign({ label: d.label || d.key }, d), o[d.key], (v) => { o[d.key] = v; this.emit('change', { key: d.key, value: v, target: o }); })); this.append(row); }); }
  }
  M.define('ui-property-inspector', PropertyInspector, { group: G, desc: 'Schema-driven object editor (text, number, boolean, select, color, range).', events: ['ui-change'] });
  class SettingsEditor extends UIElement {
    static props = { schema: { type: 'any', doc: '[{section,description?,items:[{key,label,type,default,options,description}]}]' }, persist: { default: '', doc: 'Storage namespace to persist values' }, values: { type: 'any', default: null } };
    update() { var vals = this.values || (this.values = {}); var go = () => { this.innerHTML = ''; (this.schema || []).forEach((sec) => { var box = h('ui-section', { class: 'ui-own', heading: sec.section, description: sec.description || '' }); sec.items.forEach((d) => { var v = vals[d.key] !== undefined ? vals[d.key] : d.default; box.append(h('ui-settings-row', { label: d.label, description: d.description || '' }, M.renderField(d, v, (nv) => { vals[d.key] = nv; if (this.persist) M.Storage.set(this.persist + '.' + d.key, nv); this.emit('change', { key: d.key, value: nv, values: vals }); }))); }); this.append(box); }); };
      if (this.persist && !this._loaded) { this._loaded = true; Promise.all((this.schema || []).reduce(function (a, s) { return a.concat(s.items); }, []).map((d) => M.Storage.get(this.persist + '.' + d.key).then(function (v) { if (v !== undefined && v !== null) vals[d.key] = v; }))).then(go); } else go(); }
  }
  M.define('ui-settings-editor', SettingsEditor, { group: G, desc: 'Schema-driven settings form with optional persistence through MiniUI.Storage.', events: ['ui-change'] });
  class ColorThemeEditor extends UIElement {
    static props = { tokens: { type: 'any', default: null } };
    build() { this._g = h('div', { class: 'ui-cte' }); this._n = h('ui-text-field', { placeholder: 'nome-do-tema', label: 'Nome do tema', value: 'meu-tema', style: { width: '180px' } }); this.append(this._g, h('div', { class: 'ui-own', style: { display: 'flex', gap: '8px', marginTop: '14px', alignItems: 'flex-end', flexWrap: 'wrap' } }, this._n, h('ui-button', { variant: 'primary', onclick: () => this.save() }, 'Registrar e aplicar'), h('ui-button', { onclick: () => { M.ThemeManager.resetTokens(); this.update(); } }, 'Redefinir'), h('ui-button', { onclick: () => this.export() }, 'Exportar JSON'))); }
    bind() { this.defer(M.events.on('theme:change', () => this.update())); }
    _tokens() { return this.tokens || ['accent', 'bg', 'bg-content', 'bg-sidebar', 'surface', 'surface-2', 'text', 'text-2', 'border', 'danger', 'success', 'warning']; }
    _hex(v) { var m = /^#([0-9a-f]{6})$/i.exec(v.trim()); if (m) return v.trim(); var rgb = /rgba?\((\d+)[ ,]+(\d+)[ ,]+(\d+)/.exec(v); return rgb ? '#' + [rgb[1], rgb[2], rgb[3]].map(function (x) { return ('0' + (+x).toString(16)).slice(-2); }).join('') : '#000000'; }
    update() { this._g.innerHTML = ''; this._tokens().forEach((t) => { var cp = h('ui-color-picker', { 'aria-label': t }); cp.value = this._hex(M.ThemeManager.getToken(t) || '#000'); cp.addEventListener('ui-input', (e) => { e.stopPropagation(); M.ThemeManager.setToken(t, e.detail.value); }); this._g.append(h('div', { class: 'ui-cte-r' }, h('span', null, t), cp)); }); }
    export() { var o = {}, self = this; this._tokens().forEach(function (t) { o[t] = M.ThemeManager.getToken(t); }); var json = JSON.stringify({ name: this._n.value, scheme: M.ThemeManager.scheme, tokens: o }, null, 2); M.clipboard.write(json).then(function (ok) { M.toast(ok ? 'Tema copiado como JSON' : 'Não foi possível copiar', { type: ok ? 'success' : 'warning' }); }); self.emit('export', { json: json }); }
    save() { var name = (this._n.value || 'meu-tema').replace(/[^\w-]/g, '-'), o = {}; this._tokens().forEach(function (t) { o[t] = M.ThemeManager.getToken(t); }); M.ThemeManager.create(name, { extends: M.ThemeManager.scheme, tokens: o, label: name }); M.ThemeManager.apply(name); M.toast.success('Tema "' + name + '" registrado'); this.emit('save', { name: name }); }
  }
  M.define('ui-color-theme-editor', ColorThemeEditor, { group: G, desc: 'Live editor for design tokens: tweak colours, register them as a new theme, export JSON.', events: ['ui-save', 'ui-export'] });
});

/* ---- MODULE: src/components/settings/settings.js ---- */
MiniUI.module('src/components/settings/settings.js', function (M) {
  var U = M.util, h = M.h, UIElement = M.UIElement, G = 'Settings & Extras';

  class SettingsRow extends UIElement { static props = { label: {}, description: {} }; build() { var c = this.slotted; this._t = h('div', { class: 'ui-own ui-sr-t' }, this._l = h('div', { class: 'ui-sr-l' }), this._d = h('div', { class: 'ui-sr-d' })); this._c = h('div', { class: 'ui-own ui-sr-c' }, c); this.append(this._t, this._c); } update() { this._l.textContent = this.label || ''; this._d.textContent = this.description || ''; this._d.hidden = !this.description; var ctl = this._c.querySelector('[aria-label]'); if (!this._c.querySelector('[aria-label]') && this._c.firstElementChild) this._c.firstElementChild.setAttribute('aria-label', this.label || ''); } }
  M.define('ui-settings-row', SettingsRow, { group: G, desc: 'Label + description on the left, control on the right.' });
  class SettingsGroup extends UIElement { static props = { heading: {} }; build() { if (this.heading) { this._h = h('div', { class: 'ui-sg-h' }); this.before && this.parentNode && this.parentNode.insertBefore(this._h, this); } } update() { if (this._h) { this._h.textContent = this.heading; if (!this._h.parentNode && this.parentNode) this.parentNode.insertBefore(this._h, this); } } teardown() { if (this._h) this._h.remove(); } }
  M.define('ui-settings-group', SettingsGroup, { group: G, desc: 'Rounded card grouping settings rows; `heading` renders a caption above it.' });
  M.alias('ui-settings-section', SettingsGroup, {}, { desc: 'Alias of ui-settings-group.' }); M.alias('ui-preference-item', SettingsRow, {}, { desc: 'Alias of ui-settings-row.' });
  class SettingsCategory extends UIElement { static props = { id: {}, label: {}, icon: {} }; }
  M.define('ui-settings-category', SettingsCategory, { group: G, desc: 'One page of a preference pane (id, label, icon).' });
  class PreferencePane extends UIElement {
    static props = { value: { default: '' } };
    static observeChildren = true;
    build() { var cats = this.slotted.filter(function (n) { return n.localName === 'ui-settings-category'; }); this._sb = h('ui-sidebar', { variant: 'plain' }); this._t = h('div', { class: 'ui-pp-t' }); this._c = h('div', { class: 'ui-own ui-pp-c ui-scroll' }, this._t, cats); this.append(h('div', { class: 'ui-own ui-pp-s' }, this._sb), this._c); this._sb.addEventListener('ui-select', (e) => { e.stopPropagation(); this.value = e.detail.id; this.emit('change', { value: this.value }); }); }
    cats() { return Array.prototype.slice.call(this._c.querySelectorAll(':scope > ui-settings-category')); }
    update() { var cs = this.cats(); if (!this.value && cs[0]) this._p.value = cs[0].getAttribute('id'); this._sb.items = cs.map(function (c) { return { id: c.getAttribute('id'), label: c.getAttribute('label'), icon: c.getAttribute('icon') }; }); this._sb.value = this.value; cs.forEach((c) => { c.hidden = c.getAttribute('id') !== this.value; if (!c.hidden) this._t.textContent = c.getAttribute('label'); }); }
  }
  M.define('ui-preference-pane', PreferencePane, { group: G, desc: 'System-settings layout: sidebar of categories + content pages (<ui-settings-category id label icon>).', events: ['ui-change'] });
  M.alias('ui-settings-window', PreferencePane, {}, { desc: 'Preference pane intended to fill a window.' }); M.alias('ui-settings-sidebar', M.registry.get('ui-sidebar').cls, {}, { desc: 'Sidebar variant for settings.' });

  class ThemeSelector extends UIElement {
    build() { this.setAttribute('role', 'radiogroup'); this.setAttribute('aria-label', 'Tema'); this.addEventListener('click', (e) => { var b = e.target.closest('.ui-th'); if (b) { M.ThemeManager.apply(b.getAttribute('data-t')); this.emit('change', { theme: b.getAttribute('data-t') }); } }); }
    bind() { this.defer(M.events.on('theme:change', () => this.update())); this.defer(M.events.on('theme:registered', () => this.update())); }
    update() { var cur = M.ThemeManager.preference === 'system' ? null : M.ThemeManager.current; this.innerHTML = ''; M.ThemeManager.list().forEach((t) => { var dark = t.scheme === 'dark', tk = t.tokens || {}, bg = tk['bg'] || (dark ? '#1d1d1f' : '#f4f4f6'), sb = tk['bg-sidebar'] || (dark ? '#2a2a2e' : '#ececf0'), ac = tk['accent'] || (dark ? '#0a84ff' : '#0a7aff'), ct = tk['bg-content'] || (dark ? '#242427' : '#fff'); this.append(h('button', { class: 'ui-own ui-th', type: 'button', role: 'radio', 'aria-checked': String(t.name === cur), 'data-t': t.name }, h('div', { class: 'pv', style: { background: ct } }, h('i', { style: { background: sb } }), h('b', { style: { background: ac, height: '14px', width: '40%' } })), h('span', null, t.label))); }); }
  }
  M.define('ui-theme-selector', ThemeSelector, { group: G, desc: 'Visual picker for every registered theme (built-in and custom).', events: ['ui-change'] });
  class LanguageSelector extends UIElement { static props = { label: { default: 'Idioma' } }; build() { this._s = h('ui-select', { class: 'ui-own' }); this._s.items = [{ value: 'pt-BR', label: 'Português (Brasil)' }, { value: 'en', label: 'English' }]; this.append(this._s); this._s.addEventListener('ui-change', (e) => { e.stopPropagation(); M.i18n.setLocale(e.detail.value); this.emit('change', { locale: e.detail.value }); }); } bind() { this.defer(M.events.on('locale:change', () => { this._s.value = M.i18n.locale; })); } update() { this._s.value = M.i18n.locale; this._s.setAttribute('aria-label', this.label); } }
  M.define('ui-language-selector', LanguageSelector, { group: G, desc: 'Locale switcher bound to MiniUI.i18n.', events: ['ui-change'] });
  class AppearanceSelector extends UIElement {
    build() { var modes = [['light', 'Claro', 'sun'], ['dark', 'Escuro', 'moon'], ['system', 'Automático', 'monitor']]; this._seg = h('ui-segmented', { block: '', items: modes.map(function (m) { return { value: m[0], label: m[1], icon: m[2] }; }), 'aria-label': 'Aparência' }); this._ac = h('div', { class: 'ui-ap-sw', role: 'radiogroup', 'aria-label': 'Cor de destaque' });
      ['#0a84ff', '#5e5ce6', '#bf5af2', '#ff375f', '#ff9f0a', '#30d158', '#8e8e93'].forEach((c) => this._ac.append(h('button', { type: 'button', role: 'radio', 'aria-label': c, 'data-c': c, style: { background: c }, 'aria-checked': 'false' })));
      this._hc = h('ui-switch', { color: 'accent' }, 'Alto contraste'); this._rm = h('ui-switch', { color: 'accent' }, 'Reduzir movimento');
      this.append(h('ui-settings-group', { class: 'ui-own' }, h('ui-settings-row', { label: 'Aparência', description: 'Claro, escuro ou seguir o sistema' }, this._seg), h('ui-settings-row', { label: 'Cor de destaque' }, this._ac), h('ui-settings-row', { label: 'Alto contraste', description: 'Aumenta bordas e contraste de texto' }, this._hc), h('ui-settings-row', { label: 'Reduzir movimento', description: 'Desativa animações' }, this._rm)));
      this._seg.addEventListener('ui-change', (e) => { e.stopPropagation(); M.ThemeManager.apply(e.detail.value); }); this._ac.addEventListener('click', (e) => { var b = e.target.closest('button'); if (b) { var c = b.getAttribute('data-c'); M.ThemeManager.setToken('accent', c); M.ThemeManager.setToken('accent-soft', c + '33'); M.ThemeManager.setToken('accent-hover', c); M.ThemeManager.setToken('focus-ring', c); this._cur = c; this.update(); } });
      this._hc.addEventListener('ui-change', (e) => { e.stopPropagation(); M.ThemeManager.setContrast(e.detail.checked); }); this._rm.addEventListener('ui-change', (e) => { e.stopPropagation(); M.ThemeManager.setMotion(e.detail.checked ? 'reduce' : 'auto'); }); }
    bind() { this.defer(M.events.on('theme:change', () => this.update())); }
    update() { this._seg.value = M.ThemeManager.preference === 'system' ? 'system' : M.ThemeManager.scheme === 'dark' ? 'dark' : 'light'; this._hc.checked = document.documentElement.getAttribute('data-contrast') === 'high'; this._rm.checked = document.documentElement.getAttribute('data-motion') === 'reduce'; Array.prototype.forEach.call(this._ac.children, (b) => b.setAttribute('aria-checked', String(b.getAttribute('data-c') === this._cur))); }
  }
  M.define('ui-appearance-selector', AppearanceSelector, { group: G, desc: 'Appearance settings: scheme, accent colour, high contrast and reduced motion.' });

  class ShortcutEditor extends UIElement {
    static props = { shortcuts: { type: 'any', doc: '[{id,label,combo}]' }, persist: { default: '' } };
    build() { this.addEventListener('click', (e) => { var b = e.target.closest('.ui-se-k'); if (b) this._rec(b); var r = e.target.closest('[data-reset]'); if (r) { var s = this.shortcuts.filter(function (x) { return x.id === r.getAttribute('data-reset'); })[0]; s.combo = s.default || s.combo; this.requestUpdate('shortcuts'); this._save(s); } }); }
    _save(s) { if (this.persist) M.Storage.set(this.persist + '.' + s.id, s.combo); this.emit('change', { id: s.id, combo: s.combo }); }
    _rec(btn) { var id = btn.getAttribute('data-id'), s = this.shortcuts.filter(function (x) { return x.id === id; })[0]; btn.classList.add('rec'); btn.textContent = 'Pressione as teclas…'; var done = (combo) => { document.removeEventListener('keydown', on, true); btn.classList.remove('rec'); if (combo) { var clash = this.shortcuts.filter(function (x) { return x !== s && x.combo === combo; })[0]; if (clash) { M.toast.warning('"' + combo + '" já é usado por "' + clash.label + '"'); } else { s.combo = combo; this._save(s); } } this.requestUpdate('shortcuts'); }; var on = (e) => { e.preventDefault(); e.stopPropagation(); if (e.key === 'Escape') { done(null); return; } var c = M.keys.fromEvent(e); if (c && (e.ctrlKey || e.altKey || e.metaKey || /^F\d+$/.test(c.split('+').pop()))) done(c); else if (c) M.a11y.announce('Use ao menos um modificador (Ctrl, Alt, Meta)'); }; document.addEventListener('keydown', on, true); }
    update() { this.innerHTML = ''; (this.shortcuts || []).forEach((s) => this.append(h('div', { class: 'ui-own ui-se-r' }, h('span', null, s.label), h('span', { style: { display: 'flex', gap: '6px' } }, h('button', { class: 'ui-se-k', type: 'button', 'data-id': s.id, 'aria-label': 'Alterar atalho de ' + s.label }, s.combo ? h('ui-kbd', { keys: s.combo.replace(/^Meta/, 'Mod') }) : 'Definir'), s.default && s.default !== s.combo ? h('ui-button', { variant: 'toolbar', size: 'sm', icon: 'undo', 'data-reset': s.id, 'aria-label': 'Restaurar padrão' }) : null)))); }
  }
  M.define('ui-shortcut-editor', ShortcutEditor, { group: G, desc: 'Records key combinations, detects conflicts, restores defaults.', events: ['ui-change'] });

  class AccountPanel extends UIElement { static props = { name: { default: 'Maria Silva' }, email: { default: 'maria@exemplo.com' } }; build() { this._av = h('ui-avatar', { size: 'xl', class: 'ui-own', status: 'online' }); this._i = h('div', { class: 'ui-own ui-ac-i' }, this._n = h('h3'), this._e = h('div', { style: { color: 'var(--ui-text-3)' } })); this._b = h('ui-button', { class: 'ui-own', size: 'sm' }, 'Editar'); this.append(this._av, this._i, this._b); this._b.addEventListener('click', () => { M.Dialogs.prompt('Nome de exibição', { value: this.name, heading: 'Editar perfil' }).then((v) => { if (v) { this.name = v; this.emit('change', { name: v }); } }); }); } update() { this._av.setAttribute('name', this.name); this._n.textContent = this.name; this._e.textContent = this.email; } }
  M.define('ui-account-panel', AccountPanel, { group: G, desc: 'Account summary with avatar and edit action.', events: ['ui-change'] });
  class AboutPanel extends UIElement {
    static props = { name: { default: 'Mini macOS UI' }, version: { default: '' } };
    build() { this._l = h('ui-description-list', { bordered: '', class: 'ui-own' }); this.append(h('div', { class: 'ui-own lg', '.innerHTML': M.icon('logo', { size: '1em', stroke: 1.6 }) }), this._n = h('h3', { class: 'ui-own' }), this._v = h('div', { class: 'ui-own', style: { color: 'var(--ui-text-3)' } }), this._l); }
    update() { this._n.textContent = this.name; this._v.textContent = 'Versão ' + (this.version || M.version); Promise.all([M.Platform.runtime.info().catch(function () { return {}; }), M.Platform.system.info().catch(function () { return {}; })]).then((r) => { var i = r[0], s = r[1]; this._l.items = [{ term: 'Adaptador', value: i.adapter || M.Platform.adapter.name }, { term: 'Protocolo', value: 'v' + (i.protocol || M.Platform.PROTOCOL) }, { term: 'Plataforma', value: s.platform || '—' }, { term: 'Idioma', value: s.language || '—' }, { term: 'Núcleos', value: s.cores || '—' }, { term: 'Tela', value: s.screen ? s.screen.width + '×' + s.screen.height + ' @' + s.screen.dpr + 'x' : '—' }, { term: 'Métodos disponíveis', value: (i.capabilities || []).length }]; }); }
  }
  M.define('ui-about-panel', AboutPanel, { group: G, desc: 'About screen fed by Platform.runtime/system info.' });
  class UpdatePanel extends UIElement {
    static props = { checker: { type: 'any', default: null, doc: 'async () => ({available, version, notes}) — supplied by the runtime' } };
    build() { this._s = h('ui-text', { class: 'ui-own' }); this._b = h('ui-button', { variant: 'primary', class: 'ui-own', icon: 'refresh', 'auto-loading': '' }, 'Verificar atualizações'); this._r = h('div', { class: 'ui-own', style: { marginTop: '10px' } }); this.append(h('ui-alert', { class: 'ui-own', variant: 'info', heading: 'Canal de atualização' }, 'O SDK não impõe um servidor de updates: o runtime fornece o `checker`. Sem ele, o painel usa a verificação local.'), this._b, this._r);
      this._b.addEventListener('click', () => { var run = this.checker || (() => U.sleep(900).then(() => ({ available: false, version: M.version }))); this._r.innerHTML = ''; Promise.resolve(run()).then((r) => { this._b.done(); this._r.append(r.available ? h('ui-alert', { variant: 'success', heading: 'Versão ' + r.version + ' disponível', dismissible: '' }, r.notes || '') : h('ui-alert', { variant: 'success', heading: 'Tudo atualizado', hideIcon: false }, 'Você está usando a versão ' + (r.version || M.version) + '.')); this.emit('checked', r); }, (e) => { this._b.done(); this._r.append(h('ui-alert', { variant: 'danger', heading: 'Falha na verificação' }, e.message)); }); }); }
  }
  M.define('ui-update-panel', UpdatePanel, { group: G, desc: 'Update check UI; the check itself is pluggable.', events: ['ui-checked'] });
  class PermissionPanel extends UIElement {
    build() { this._l = h('div', { class: 'ui-own' }); this.append(this._l); }
    bind() { this.defer(M.events.on('permission:change', () => this.update())); }
    update() { var names = M.Platform.permissions, labels = { filesystem: ['Sistema de arquivos', 'Ler e gravar na pasta pessoal autorizada', 'folder'], clipboard: ['Área de transferência', 'Ler e escrever texto copiado', 'copy'], notifications: ['Notificações', 'Exibir alertas do sistema', 'bell'] };
      Promise.all(names.map(function (n) { return M.Platform.permissions.query({ name: n }).then(function (r) { return r; }, function () { return { name: n, state: 'prompt' }; }); })).then((rs) => { this._l.innerHTML = ''; var g = h('ui-settings-group'); rs.forEach((r) => { var lab = labels[r.name] || [r.name, '', 'shield'], sw = h('ui-switch', { color: 'accent' }); sw.checked = r.state === 'granted'; sw.addEventListener('ui-change', (e) => { e.stopPropagation(); var a = M.Platform.adapter; if (e.detail.checked) M.Platform.permissions.request({ name: r.name }).then(() => this.update()); else if (a.setPermission) { a.setPermission(r.name, 'denied'); M.toast.info('Permissão "' + lab[0] + '" revogada'); } else { M.toast.warning('Este adaptador não permite revogar pela interface'); this.update(); } }); g.append(h('ui-settings-row', { label: lab[0], description: lab[1] + ' · ' + ({ granted: 'concedida', denied: 'negada', prompt: 'não solicitada' }[r.state]) }, sw)); }); this._l.append(g); }); }
  }
  M.define('ui-permission-panel', PermissionPanel, { group: G, desc: 'Lists Platform permissions with grant/revoke — the UI only requests; the adapter/backend decides.' });

  /* ----- extras ----- */
  class CopyButton extends UIElement {
    static props = { text: {}, target: { doc: 'CSS selector whose textContent is copied' }, label: { default: '' } };
    build() { this._b = h('ui-button', { class: 'ui-own', variant: 'toolbar', size: 'sm', icon: 'copy', 'aria-label': 'Copiar' }); this.append(this._b); this._b.addEventListener('click', () => { var t = this.text || (this.target && document.querySelector(this.target) ? document.querySelector(this.target).textContent : ''); M.clipboard.write(t).then((ok) => { this._b.setAttribute('icon', ok ? 'check' : 'x'); this._b.setAttribute('aria-label', ok ? 'Copiado' : 'Falhou'); M.a11y.announce(ok ? 'Copiado' : 'Falha ao copiar'); this.emit(ok ? 'copied' : 'error', { text: t }); setTimeout(() => { this._b.setAttribute('icon', 'copy'); this._b.setAttribute('aria-label', 'Copiar'); }, 1400); }); }); }
    update() { if (this.label) this._b.textContent = this.label; }
  }
  M.define('ui-copy-button', CopyButton, { group: G, desc: 'Copies text or a target element through Platform.clipboard with visual feedback.', events: ['ui-copied'] });
  class ClipboardField extends UIElement { static props = { value: {}, label: {} }; build() { this._f = h('ui-text-field', { readonly: '', class: 'ui-own' }); this._c = h('ui-copy-button', { class: 'ui-own' }); this.append(h('ui-input-group', { class: 'ui-own' }, this._f, h('ui-input-addon', null, this._c))); } update() { this._f.value = this.value || ''; this._f.label = this.label || ''; this._c.text = this.value || ''; } }
  M.define('ui-clipboard-field', ClipboardField, { group: G, desc: 'Read-only value with a copy button.' });
  class TextTruncation extends UIElement { static props = { text: {}, mode: { default: 'end', doc: 'end|middle' }, lines: { type: 'number', default: 1 } }; build() { this._src = this.text || this.textContent; } bind() { this.observeResize(() => this.update()); } update() { var t = this.text || this._src || ''; this.title = t; if (this.mode === 'middle') { this.style.whiteSpace = 'nowrap'; this.style.overflow = 'hidden'; this.textContent = t; var w = this.clientWidth; if (this.scrollWidth > w && w > 20) { var keep = Math.max(4, Math.floor((t.length * w / this.scrollWidth - 1) / 2)); this.textContent = t.slice(0, keep) + '…' + t.slice(t.length - keep); } } else { this.textContent = t; this.style.overflow = 'hidden'; if (this.lines > 1) { this.style.display = '-webkit-box'; this.style.webkitBoxOrient = 'vertical'; this.style.webkitLineClamp = this.lines; } else { this.style.whiteSpace = 'nowrap'; this.style.textOverflow = 'ellipsis'; } } } }
  M.define('ui-text-truncation', TextTruncation, { group: G, desc: 'Truncates text at the end or in the middle (file names) and keeps the full text in the title.' });
  class ScrollToTop extends UIElement { static props = { target: { doc: 'Selector of the scrolling element (default: window)' }, threshold: { type: 'number', default: 300 } }; build() { this._b = h('ui-button', { class: 'ui-own', variant: 'primary', icon: 'arrow-up', 'aria-label': 'Voltar ao topo' }); this.append(this._b); this._b.addEventListener('click', () => { var t = this._t(); (t === window ? window : t).scrollTo({ top: 0, behavior: U.reducedMotion() ? 'auto' : 'smooth' }); }); } _t() { return this.target ? document.querySelector(this.target) || window : window; } bind() { var t = this._t(), f = () => { this.hidden = (t === window ? window.scrollY : t.scrollTop) < this.threshold; }; this.listen(t, 'scroll', f, { passive: true }); f(); } }
  M.define('ui-scroll-to-top', ScrollToTop, { group: G, desc: 'Floating button that appears after scrolling.' });
  class AnchorNav extends UIElement {
    static props = { container: { doc: 'Selector of the element containing headings' }, selector: { default: 'h2,h3' } };
    bind() { var root = document.querySelector(this.container) || document.body, hs = Array.prototype.slice.call(root.querySelectorAll(this.selector)); this.innerHTML = ''; hs.forEach((hd) => { hd.id = hd.id || U.uid('a'); var a = h('a', { href: '#' + hd.id, class: 'ui-own', style: { paddingLeft: hd.tagName === 'H3' ? '22px' : '10px' } }, hd.textContent); a.addEventListener('click', (e) => { e.preventDefault(); hd.scrollIntoView({ behavior: U.reducedMotion() ? 'auto' : 'smooth', block: 'start' }); }); this.append(a); });
      if (U.supports.intersectionObserver) { var io = new IntersectionObserver((en) => { en.forEach((x) => { if (x.isIntersecting) Array.prototype.forEach.call(this.children, (a) => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + x.target.id))); }); }, { rootMargin: '0px 0px -70% 0px' }); hs.forEach(function (x) { io.observe(x); }); this.defer(() => io.disconnect()); } this.setAttribute('role', 'navigation'); this.setAttribute('aria-label', 'Nesta página'); }
  }
  M.define('ui-anchor-navigation', AnchorNav, { group: G, desc: 'In-page table of contents with scroll-spy (IntersectionObserver).' });
});

/* ---- MODULE: src/by-lite/bridge.js ---- */
/**
 * by-lite/bridge.js — SDK Bridge Adapter
 * ============================================================================
 * Bridges MiniUI's RustAdapter transport protocol with by-lite's native IPC
 * mechanism (window.webkit.messageHandlers.by_lite.postMessage).
 *
 * The by-lite CSD runtime (injected by Rust) exposes:
 *   window.__BY_LITE__  / window.by / window.byLite
 *     → close(), minimize(), maximize(), toggleMaximize(), fullscreen(),
 *       startDrag(), resize(w,h), setTitle(title),
 *       invoke(cmd, args) → Promise, postMessage(msg)
 *   window.__BY_LITE_RESOLVE__(id, result)    — invoke callback
 *   window.__BY_LITE_STATE_CHANGED__(state)   — window state events
 *   Declarative HTML attributes:
 *     data-by-action="close|minimize|maximize|fullscreen"
 *     data-by-drag, data-by-resize
 *
 * MiniUI RustAdapter expects a transport: { send(string), onMessage(fn) → off }
 * Messages are JSON: { v: 1, id: "r12", method: "filesystem.list", params: {} }
 *
 * @module src/by-lite/bridge.js
 */
MiniUI.module('src/by-lite/bridge.js', function (M) {
  'use strict';

  var BY_LITE_VERSION = '1.0.0';

  /* ---- Detecção de ambiente ---- */
  var _byLite = window.__BY_LITE__ || window.by || window.byLite || null;
  var _isByLite = !!_byLite;

  /**
   * ByLiteTransport — adapta o IPC nativo do by-lite ao formato de transporte
   * esperado pelo RustAdapter do MiniUI.
   *
   * O by-lite usa:
   *   - postMessage(msg)  para enviar dados ao backend Rust
   *   - invoke(cmd, args) para chamadas com resposta (Promise)
   *
   * O MiniUI RustAdapter espera:
   *   - transport.send(string)         — envia mensagem serializada
   *   - transport.onMessage(fn) → off  — registra callback de recebimento
   */
  function ByLiteTransport() {
    this._listeners = [];
    this._seq = 0;
    this._pendingInvokes = new Map();
    this._init();
  }

  ByLiteTransport.prototype._init = function () {
    var self = this;

    // Intercepta respostas do backend via __BY_LITE_RESOLVE__
    var _origResolve = window.__BY_LITE_RESOLVE__;
    window.__BY_LITE_RESOLVE__ = function (id, result) {
      // Primeiro tenta processar como resposta do protocolo MiniUI
      var pending = self._pendingInvokes.get(id);
      if (pending) {
        self._pendingInvokes.delete(id);
        pending.resolve(result);
        return;
      }
      // Tenta despachar como mensagem do protocolo para os listeners
      var msg = result;
      if (typeof msg === 'string') {
        try { msg = JSON.parse(msg); } catch (e) { /* ignora */ }
      }
      if (msg && typeof msg === 'object') {
        self._dispatch(msg);
      }
      // Repassa ao handler original se existir
      if (typeof _origResolve === 'function') {
        _origResolve(id, result);
      }
    };

    // Intercepta eventos de estado da janela
    var _origStateChanged = window.__BY_LITE_STATE_CHANGED__;
    window.__BY_LITE_STATE_CHANGED__ = function (state) {
      // Emite como evento do protocolo MiniUI
      var evt = {
        v: M.Platform.PROTOCOL,
        event: 'window.stateChanged',
        data: state
      };
      self._dispatch(evt);

      // Emite no event bus do MiniUI
      if (M.events) {
        M.events.emit('by-lite:state', state);
      }

      if (typeof _origStateChanged === 'function') {
        _origStateChanged(state);
      }
    };
  };

  ByLiteTransport.prototype._dispatch = function (msg) {
    var raw = typeof msg === 'string' ? msg : JSON.stringify(msg);
    this._listeners.forEach(function (fn) {
      try { fn(raw); } catch (e) {
        console.error('[ByLiteTransport] erro no listener:', e);
      }
    });
  };

  /**
   * send(string) — envia mensagem serializada para o backend by-lite.
   * Tenta usar postMessage primeiro; se não disponível, usa invoke.
   */
  ByLiteTransport.prototype.send = function (raw) {
    if (!_byLite) {
      console.warn('[ByLiteTransport] by-lite não disponível');
      return;
    }

    var msg;
    try { msg = JSON.parse(raw); } catch (e) {
      console.error('[ByLiteTransport] mensagem inválida:', raw);
      return;
    }

    var self = this;

    // Mapeia métodos de janela diretamente para chamadas by-lite nativas
    var windowAction = this._mapWindowAction(msg);
    if (windowAction) {
      // Responde imediatamente para ações de janela mapeadas
      var response = { v: msg.v, id: msg.id, ok: true, result: windowAction.result };
      Promise.resolve().then(function () { self._dispatch(response); });
      windowAction.exec();
      return;
    }

    // Para outros métodos, usa invoke do by-lite
    if (_byLite.invoke) {
      _byLite.invoke('miniui.protocol', { payload: raw })
        .then(function (result) {
          if (typeof result === 'string') {
            self._dispatch(result);
          } else if (result && typeof result === 'object') {
            self._dispatch(result);
          }
        })
        .catch(function (err) {
          var errResponse = {
            v: msg.v, id: msg.id, ok: false,
            error: { code: 'E_INTERNAL', message: String(err && err.message || err) }
          };
          self._dispatch(errResponse);
        });
    } else if (_byLite.postMessage) {
      _byLite.postMessage(raw);
    } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.by_lite) {
      window.webkit.messageHandlers.by_lite.postMessage(raw);
    }
  };

  /**
   * Mapeia métodos de janela do protocolo MiniUI para ações nativas do by-lite.
   * Retorna null se o método não é uma ação de janela.
   */
  ByLiteTransport.prototype._mapWindowAction = function (msg) {
    if (!msg || !msg.method) return null;

    var actionMap = {
      'windows.close':         function () { _byLite.close && _byLite.close(); },
      'windows.minimize':      function () { _byLite.minimize && _byLite.minimize(); },
      'windows.maximize':      function () { _byLite.maximize && _byLite.maximize(); },
      'windows.restore':       function () { _byLite.toggleMaximize && _byLite.toggleMaximize(); },
      'windows.setFullscreen':  function (p) { _byLite.fullscreen && _byLite.fullscreen(p && p.value); },
      'windows.setTitle':      function (p) { _byLite.setTitle && _byLite.setTitle(p && p.title); }
    };

    var fn = actionMap[msg.method];
    if (!fn) return null;

    return {
      exec: function () { fn(msg.params); },
      result: { ok: true, native: true }
    };
  };

  /**
   * onMessage(fn) → off — registra callback para mensagens recebidas do backend.
   */
  ByLiteTransport.prototype.onMessage = function (fn) {
    this._listeners.push(fn);
    var self = this;
    return function () {
      self._listeners = self._listeners.filter(function (f) { return f !== fn; });
    };
  };

  /* ======================================================================
     ByLiteSDK — ponto de entrada unificado
     ====================================================================== */

  var SDK = {
    version: BY_LITE_VERSION,
    isByLite: _isByLite,
    transport: null,
    adapter: null,
    native: _byLite,

    /**
     * Inicializa o SDK: cria transporte, conecta adapter, configura bindings.
     * @returns {Promise} Resolvida quando o adapter estiver conectado.
     */
    init: function () {
      if (!_isByLite) {
        console.info('[ByLiteSDK] Ambiente by-lite não detectado. Usando BrowserAdapter.');
        return Promise.resolve({ adapter: 'browser', native: false });
      }

      console.info('[ByLiteSDK] Ambiente by-lite detectado. Inicializando bridge...');

      // 1. Cria o transporte
      SDK.transport = new ByLiteTransport();

      // 2. Instancia o RustAdapter com o transporte by-lite
      if (M.adapters && M.adapters.RustAdapter) {
        SDK.adapter = new M.adapters.RustAdapter({ transport: SDK.transport, timeout: 10000 });

        // 3. Substitui o adapter padrão do MiniUI
        M.Platform.use(SDK.adapter);

        // 4. Tenta conectar (handshake)
        return SDK.adapter.connect()
          .then(function (info) {
            console.info('[ByLiteSDK] Conectado ao backend:', info);
            SDK._setupDeclarativeBindings();
            SDK._setupWindowActions();
            M.events.emit('by-lite:connected', { info: info });
            return { adapter: 'by-lite', native: true, info: info };
          })
          .catch(function (err) {
            console.warn('[ByLiteSDK] Handshake falhou, usando mapeamento direto:', err);
            // Mesmo sem handshake completo, as ações nativas de janela funcionam
            SDK._setupDeclarativeBindings();
            SDK._setupWindowActions();
            M.events.emit('by-lite:connected', { info: null, partial: true });
            return { adapter: 'by-lite', native: true, partial: true };
          });
      }

      // Fallback: sem RustAdapter disponível, conecta apenas ações nativas
      SDK._setupDeclarativeBindings();
      SDK._setupWindowActions();
      return Promise.resolve({ adapter: 'by-lite-native', native: true });
    },

    /**
     * Configura bindings declarativos HTML do by-lite:
     * data-by-action, data-by-drag, data-by-resize
     */
    _setupDeclarativeBindings: function () {
      // Delega cliques em data-by-action
      document.addEventListener('click', function (e) {
        var el = e.target.closest('[data-by-action]');
        if (!el) return;

        var action = el.getAttribute('data-by-action');
        var actions = {
          close:    function () { _byLite.close && _byLite.close(); },
          minimize: function () { _byLite.minimize && _byLite.minimize(); },
          maximize: function () { _byLite.toggleMaximize && _byLite.toggleMaximize(); },
          fullscreen: function () { _byLite.fullscreen && _byLite.fullscreen(); }
        };

        if (actions[action]) {
          e.preventDefault();
          e.stopPropagation();
          actions[action]();
        }
      }, true);

      // Drag em data-by-drag
      document.addEventListener('mousedown', function (e) {
        var el = e.target.closest('[data-by-drag]');
        if (!el) return;
        // Não inicia drag se clicar em botões/controles dentro da área
        if (e.target.closest('button, a, input, select, textarea, [data-by-action]')) return;
        if (_byLite.startDrag) {
          e.preventDefault();
          _byLite.startDrag();
        }
      });

      // Resize em data-by-resize
      document.addEventListener('mousedown', function (e) {
        var el = e.target.closest('[data-by-resize]');
        if (!el) return;
        // Resize é iniciado pelo runtime; aqui marcamos a intenção
        if (_byLite.resize) {
          var dir = el.getAttribute('data-by-resize') || 'se';
          e.preventDefault();
          // Notifica o runtime da direção do resize
          _byLite.postMessage && _byLite.postMessage(JSON.stringify({
            type: 'resize-start', direction: dir
          }));
        }
      });
    },

    /**
     * Mapeia ações de janela do MiniUI Platform para chamadas nativas by-lite.
     * Permite que componentes existentes (ui-window, etc.) funcionem sem alterações.
     */
    _setupWindowActions: function () {
      // Escuta eventos de host-window e redireciona ao by-lite
      if (M.events) {
        M.events.on('host-window', function (data) {
          if (!_byLite) return;
          var map = {
            close: 'close', minimize: 'minimize',
            maximize: 'maximize', restore: 'toggleMaximize'
          };
          var fn = map[data.action];
          if (fn && _byLite[fn]) _byLite[fn]();
        });
      }
    },

    /* ---- APIs de conveniência ---- */

    /** Fecha a janela nativa */
    close: function () { _byLite && _byLite.close && _byLite.close(); },

    /** Minimiza a janela */
    minimize: function () { _byLite && _byLite.minimize && _byLite.minimize(); },

    /** Maximiza a janela */
    maximize: function () { _byLite && _byLite.maximize && _byLite.maximize(); },

    /** Alterna maximizar */
    toggleMaximize: function () { _byLite && _byLite.toggleMaximize && _byLite.toggleMaximize(); },

    /** Tela cheia */
    fullscreen: function () { _byLite && _byLite.fullscreen && _byLite.fullscreen(); },

    /** Inicia arraste da janela */
    startDrag: function () { _byLite && _byLite.startDrag && _byLite.startDrag(); },

    /** Redimensiona a janela */
    resize: function (w, h) { _byLite && _byLite.resize && _byLite.resize(w, h); },

    /** Define o título da janela */
    setTitle: function (title) { _byLite && _byLite.setTitle && _byLite.setTitle(title); },

    /**
     * Invoca um comando no backend by-lite.
     * @param {string} cmd   Nome do comando
     * @param {Object} args  Argumentos
     * @returns {Promise}
     */
    invoke: function (cmd, args) {
      if (!_byLite || !_byLite.invoke) {
        return Promise.reject(new Error('[ByLiteSDK] invoke não disponível'));
      }
      return _byLite.invoke(cmd, args || {});
    },

    /**
     * Envia mensagem ao backend by-lite.
     * @param {*} msg  Mensagem (será serializada se objeto)
     */
    postMessage: function (msg) {
      if (!_byLite || !_byLite.postMessage) return;
      _byLite.postMessage(typeof msg === 'string' ? msg : JSON.stringify(msg));
    }
  };

  /* ---- Exportações ---- */
  M.ByLiteSDK = SDK;
  M.ByLiteTransport = ByLiteTransport;
  window.ByLiteSDK = SDK;
});

/* ---- MODULE: src/by-lite/components.js ---- */
/**
 * by-lite/components.js — Componentes de conveniência para by-lite
 * ============================================================================
 * Web Components de alto nível que encapsulam primitivas ui-* existentes para
 * padrões comuns de aplicativos macOS no runtime by-lite.
 *
 * Componentes:
 *   <by-titlebar>    — Barra de título estilo macOS com semáforo (traffic lights)
 *   <by-sidebar>     — Barra lateral de navegação
 *   <by-app-layout>  — Scaffold completo: titlebar + sidebar + conteúdo
 *   <by-toolbar>     — Barra de ferramentas abaixo do titlebar
 *   <by-player-bar>  — Barra de reprodução estilo Spotify
 *
 * Todos usam Shadow DOM, tokens CSS do design system e estética glassmórfica
 * escura inspirada no macOS Sonoma.
 *
 * @module src/by-lite/components.js
 */
MiniUI.module('src/by-lite/components.js', function (M) {
  'use strict';

  var GROUP = 'by-lite';

  /* ======================================================================
     Utilitários internos
     ====================================================================== */

  /** CSS compartilhado conectado aos tokens nativos (--ui-*) do Design System (Claro por padrão) */
  var SHARED_CSS = /* css */`
    :host {
      --by-glass-bg: var(--ui-glass, rgba(246, 246, 249, 0.78));
      --by-glass-solid: var(--ui-glass-solid, #f6f6f9);
      --by-glass-border: var(--ui-border, rgba(0, 0, 0, 0.1));
      --by-glass-blur: var(--ui-blur, 22px);
      --by-bg: var(--ui-bg, #f4f4f6);
      --by-bg-content: var(--ui-bg-content, #ffffff);
      --by-bg-sidebar: var(--ui-bg-sidebar, #ececf0);
      --by-text: var(--ui-text, #1d1d1f);
      --by-text-2: var(--ui-text-2, #5b5b63);
      --by-text-3: var(--ui-text-3, #8a8a92);
      --by-accent: var(--ui-accent, #0a7aff);
      --by-separator: var(--ui-separator, rgba(0, 0, 0, 0.08));
      --by-surface: var(--ui-surface, #ffffff);
      --by-surface-2: var(--ui-surface-2, #f3f3f6);
      --by-surface-hover: var(--ui-hover, rgba(0, 0, 0, 0.05));
      --by-surface-active: var(--ui-pressed, rgba(0, 0, 0, 0.1));
      --by-control-bg: var(--ui-control-bg, #ffffff);
      --by-control-border: var(--ui-control-border, rgba(0, 0, 0, 0.16));
      --by-radius: var(--ui-radius-md, 8px);
      --by-transition: var(--ui-dur, 200ms) var(--ui-ease, cubic-bezier(.22, .8, .3, 1));

      box-sizing: border-box;
      font-family: var(--ui-font, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif);
      color: var(--by-text);
      -webkit-font-smoothing: antialiased;
    }
    :host *, :host *::before, :host *::after { box-sizing: border-box; }
  `;

  /* ======================================================================
     <by-titlebar> — Barra de título estilo macOS
     ====================================================================== */

  class ByTitlebar extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'subtitle', 'searchable', 'transparent', 'hide-controls'];
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this._render();
      this._bindEvents();
    }

    attributeChangedCallback() {
      if (this.shadowRoot && this.shadowRoot.querySelector('.titlebar')) {
        this._render();
        this._bindEvents();
      }
    }

    _render() {
      var title = this.getAttribute('title') || '';
      var subtitle = this.getAttribute('subtitle') || '';
      var searchable = this.hasAttribute('searchable');
      var transparent = this.hasAttribute('transparent');
      var hideControls = this.hasAttribute('hide-controls');

      this.shadowRoot.innerHTML = /* html */`
        <style>
          ${SHARED_CSS}
          :host {
            display: block;
            width: 100%;
            height: var(--ui-titlebar-h, 38px);
            flex-shrink: 0;
            user-select: none;
            -webkit-user-select: none;
            -webkit-app-region: drag;
            z-index: 100;
          }
          .titlebar {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 12px;
            background: ${transparent ? 'transparent' : 'var(--by-glass-bg)'};
            backdrop-filter: ${transparent ? 'none' : 'blur(var(--by-glass-blur))'};
            -webkit-backdrop-filter: ${transparent ? 'none' : 'blur(var(--by-glass-blur))'};
            border-bottom: 1px solid var(--by-glass-border);
            position: relative;
          }

          /* Semáforo (traffic lights) */
          .traffic-lights {
            display: ${hideControls ? 'none' : 'flex'};
            align-items: center;
            gap: 8px;
            -webkit-app-region: no-drag;
            flex-shrink: 0;
            z-index: 2;
          }
          .tl-btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            position: relative;
            transition: filter var(--by-transition);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            outline: none;
          }
          .tl-btn svg {
            width: 8px;
            height: 8px;
            opacity: 0;
            transition: opacity 120ms ease;
            stroke: rgba(0, 0, 0, 0.55);
            stroke-width: 1.5;
            fill: none;
          }
          .traffic-lights:hover .tl-btn svg,
          .tl-btn:focus-visible svg {
            opacity: 1;
          }
          .tl-close {
            background: #ff5f57;
          }
          .tl-close:hover { filter: brightness(1.1); }
          .tl-minimize {
            background: #febc2e;
          }
          .tl-minimize:hover { filter: brightness(1.1); }
          .tl-maximize {
            background: #28c840;
          }
          .tl-maximize:hover { filter: brightness(1.1); }
          /* Estado inativo */
          :host([inactive]) .tl-btn {
            background: rgba(255, 255, 255, 0.12) !important;
          }
          :host([inactive]) .tl-btn svg {
            display: none;
          }

          /* Área central — título */
          .title-area {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            pointer-events: none;
            max-width: 50%;
          }
          .title-text {
            font-size: var(--ui-fs-sm, 12px);
            font-weight: var(--ui-fw-semibold, 600);
            color: var(--by-text);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .subtitle-text {
            font-size: 10px;
            color: var(--by-text-3);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 1px;
          }

          /* Busca (opcional) */
          .search-area {
            display: ${searchable ? 'flex' : 'none'};
            align-items: center;
            margin-left: auto;
            -webkit-app-region: no-drag;
            flex-shrink: 0;
          }
          .search-input {
            height: 24px;
            width: 180px;
            border-radius: var(--ui-radius-sm, 6px);
            border: 1px solid var(--by-control-border);
            background: var(--by-control-bg);
            color: var(--by-text);
            font-size: 12px;
            padding: 0 8px 0 28px;
            outline: none;
            transition: all var(--by-transition);
            font-family: inherit;
          }
          .search-input::placeholder {
            color: var(--by-text-3);
          }
          .search-input:focus {
            border-color: var(--by-accent);
            box-shadow: 0 0 0 2px var(--ui-accent-soft, rgba(10,122,255,.15));
            width: 240px;
          }
          .search-wrap {
            position: relative;
          }
          .search-icon {
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            width: 14px;
            height: 14px;
            color: var(--by-text-3);
            pointer-events: none;
          }

          /* Slot para conteúdo adicional */
          .trailing {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 4px;
            -webkit-app-region: no-drag;
          }
        </style>
        <div class="titlebar" data-by-drag>
          <div class="traffic-lights">
            <button class="tl-btn tl-close" data-by-action="close" aria-label="Fechar" title="Fechar">
              <svg viewBox="0 0 12 12"><path d="M3.5 3.5l5 5M8.5 3.5l-5 5"/></svg>
            </button>
            <button class="tl-btn tl-minimize" data-by-action="minimize" aria-label="Minimizar" title="Minimizar">
              <svg viewBox="0 0 12 12"><path d="M2.5 6h7"/></svg>
            </button>
            <button class="tl-btn tl-maximize" data-by-action="maximize" aria-label="Maximizar" title="Maximizar">
              <svg viewBox="0 0 12 12"><path d="M3 8.5V3.5h5M9 3.5v5h-5" stroke-linejoin="round"/></svg>
            </button>
          </div>
          <div class="title-area">
            ${title ? '<div class="title-text">' + this._esc(title) + '</div>' : ''}
            ${subtitle ? '<div class="subtitle-text">' + this._esc(subtitle) + '</div>' : ''}
          </div>
          <div class="trailing">
            ${searchable ? `
              <div class="search-wrap">
                <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/>
                </svg>
                <input type="text" class="search-input" placeholder="Buscar…" />
              </div>
            ` : ''}
            <slot></slot>
          </div>
        </div>
      `;
    }

    _bindEvents() {
      var self = this;
      var root = this.shadowRoot;

      // Eventos do semáforo
      var closeBt = root.querySelector('.tl-close');
      var minBt = root.querySelector('.tl-minimize');
      var maxBt = root.querySelector('.tl-maximize');

      if (closeBt) closeBt.addEventListener('click', function (e) {
        e.stopPropagation();
        self.dispatchEvent(new CustomEvent('by-close', { bubbles: true, composed: true }));
        if (window.ByLiteSDK) window.ByLiteSDK.close();
      });
      if (minBt) minBt.addEventListener('click', function (e) {
        e.stopPropagation();
        self.dispatchEvent(new CustomEvent('by-minimize', { bubbles: true, composed: true }));
        if (window.ByLiteSDK) window.ByLiteSDK.minimize();
      });
      if (maxBt) maxBt.addEventListener('click', function (e) {
        e.stopPropagation();
        self.dispatchEvent(new CustomEvent('by-maximize', { bubbles: true, composed: true }));
        if (window.ByLiteSDK) window.ByLiteSDK.toggleMaximize();
      });

      // Drag na titlebar
      var bar = root.querySelector('.titlebar');
      if (bar) {
        bar.addEventListener('mousedown', function (e) {
          if (e.target.closest('.traffic-lights, .trailing, button, a, input')) return;
          if (window.ByLiteSDK) window.ByLiteSDK.startDrag();
        });
        // Duplo clique para maximizar
        bar.addEventListener('dblclick', function (e) {
          if (e.target.closest('.traffic-lights, .trailing, button, a, input')) return;
          if (window.ByLiteSDK) window.ByLiteSDK.toggleMaximize();
        });
      }

      // Busca
      var searchInput = root.querySelector('.search-input');
      if (searchInput) {
        searchInput.addEventListener('input', function () {
          self.dispatchEvent(new CustomEvent('by-search', {
            bubbles: true, composed: true,
            detail: { value: searchInput.value }
          }));
        });
        searchInput.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.blur();
            self.dispatchEvent(new CustomEvent('by-search', {
              bubbles: true, composed: true,
              detail: { value: '' }
            }));
          }
        });
      }
    }

    _esc(s) {
      var d = document.createElement('div');
      d.textContent = s;
      return d.innerHTML;
    }
  }

  if (!customElements.get('by-titlebar')) {
    customElements.define('by-titlebar', ByTitlebar);
  }

  /* ======================================================================
     <by-sidebar> — Barra lateral de navegação estilo macOS
     ====================================================================== */

  class BySidebar extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'collapsible', 'collapsed'];
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this._render();
    }

    attributeChangedCallback() {
      if (this.shadowRoot && this.shadowRoot.querySelector('.sidebar')) {
        this._render();
      }
    }

    get collapsed() { return this.hasAttribute('collapsed'); }
    set collapsed(v) { v ? this.setAttribute('collapsed', '') : this.removeAttribute('collapsed'); }

    toggle() {
      this.collapsed = !this.collapsed;
      this.dispatchEvent(new CustomEvent('by-sidebar-toggle', {
        bubbles: true, composed: true,
        detail: { collapsed: this.collapsed }
      }));
    }

    _render() {
      var width = this.getAttribute('width') || '220px';
      var collapsible = this.hasAttribute('collapsible');
      var collapsed = this.hasAttribute('collapsed');
      var railWidth = '46px';

      this.shadowRoot.innerHTML = /* html */`
        <style>
          ${SHARED_CSS}
          :host {
            display: block;
            width: ${collapsed ? railWidth : width};
            min-width: ${collapsed ? railWidth : width};
            height: 100%;
            transition: width var(--by-transition), min-width var(--by-transition);
            overflow: hidden;
            flex-shrink: 0;
          }
          .sidebar {
            width: 100%;
            height: 100%;
            background: var(--by-bg-sidebar);
            backdrop-filter: saturate(180%) blur(var(--by-glass-blur));
            -webkit-backdrop-filter: saturate(180%) blur(var(--by-glass-blur));
            border-right: 1px solid var(--by-separator);
            display: flex;
            flex-direction: column;
            overflow-y: ${collapsed ? 'hidden' : 'auto'};
            overflow-x: hidden;
            padding: 8px 0;
          }
          .sidebar::-webkit-scrollbar {
            width: 6px;
          }
          .sidebar::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.16);
            border-radius: 3px;
          }
          .sidebar::-webkit-scrollbar-track {
            background: transparent;
          }

          /* Cabeçalho do botão de colapso/expansão sempre visível */
          .collapse-header {
            display: ${collapsible ? 'flex' : 'none'};
            align-items: center;
            justify-content: ${collapsed ? 'center' : 'space-between'};
            padding: 2px 8px 6px;
            flex-shrink: 0;
          }
          .collapse-title {
            display: ${collapsed ? 'none' : 'inline'};
            font-size: 11px;
            font-weight: 600;
            color: var(--by-text-3);
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding-left: 4px;
          }
          .collapse-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 28px;
            border-radius: var(--ui-radius-sm, 6px);
            border: 1px solid transparent;
            background: transparent;
            color: var(--by-text-2);
            cursor: pointer;
            transition: all var(--by-transition);
            padding: 0;
            flex-shrink: 0;
          }
          .collapse-btn:hover {
            background: var(--by-surface-hover);
            border-color: var(--by-separator);
            color: var(--by-text);
          }
          .collapse-btn svg {
            width: 16px;
            height: 16px;
          }

          /* Estilos para itens de navegação (slot) */
          ::slotted(by-nav-item),
          ::slotted([slot="nav"]) {
            display: block;
          }
          ::slotted(by-nav-section) {
            display: block;
            margin-top: 12px;
          }

          .nav-content {
            flex: 1;
            padding: 0 8px;
            display: ${collapsed ? 'none' : 'block'};
          }

          .footer-slot {
            padding: 8px;
            border-top: 1px solid var(--by-separator);
            margin-top: auto;
            display: ${collapsed ? 'none' : 'block'};
          }
        </style>
        <div class="sidebar">
          ${collapsible ? `
            <div class="collapse-header">
              <span class="collapse-title">Navegação</span>
              <button class="collapse-btn" aria-label="${collapsed ? 'Mostrar lista lateral' : 'Ocultar lista lateral'}" title="${collapsed ? 'Mostrar lista lateral' : 'Ocultar lista lateral'}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
                  <path d="M9 3v18"/>
                  ${collapsed ? '<path d="M13 9l3 3-3 3"/>' : '<path d="M15 9l-3 3 3 3"/>'}
                </svg>
              </button>
            </div>
          ` : ''}
          <div class="nav-content">
            <slot></slot>
          </div>
          <div class="footer-slot">
            <slot name="footer"></slot>
          </div>
        </div>
      `;

      // Bind do botão de colapso
      var self = this;
      var collapseBtn = this.shadowRoot.querySelector('.collapse-btn');
      if (collapseBtn) {
        collapseBtn.addEventListener('click', function () {
          self.toggle();
        });
      }
    }
  }

  if (!customElements.get('by-sidebar')) {
    customElements.define('by-sidebar', BySidebar);
  }

  /* ======================================================================
     <by-app-layout> — Scaffold completo de aplicativo
     ====================================================================== */

  class ByAppLayout extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'subtitle', 'sidebar-width', 'show-sidebar', 'searchable', 'hide-controls'];
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this._render();
    }

    attributeChangedCallback() {
      if (this.shadowRoot && this.shadowRoot.querySelector('.app-layout')) {
        this._render();
      }
    }

    _render() {
      var title = this.getAttribute('title') || '';
      var subtitle = this.getAttribute('subtitle') || '';
      var sidebarWidth = this.getAttribute('sidebar-width') || '220px';
      var showSidebar = this.hasAttribute('show-sidebar');
      var searchable = this.hasAttribute('searchable');
      var hideControls = this.hasAttribute('hide-controls');

      this.shadowRoot.innerHTML = /* html */`
        <style>
          ${SHARED_CSS}
          :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;
            background: var(--by-bg);
            color: var(--by-text);
            overflow: hidden;
          }
          .app-layout {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
          }

          /* Corpo: sidebar + main */
          .body {
            display: flex;
            flex: 1;
            overflow: hidden;
          }

          .main-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background: var(--by-bg-content);
          }

          .content {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
          }
          .content::-webkit-scrollbar {
            width: 8px;
          }
          .content::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.12);
            border-radius: 4px;
          }
          .content::-webkit-scrollbar-track {
            background: transparent;
          }

          .footer-area {
            flex-shrink: 0;
          }

          /* Toolbar slot */
          ::slotted([slot="toolbar"]) {
            flex-shrink: 0;
          }
        </style>
        <div class="app-layout">
          <by-titlebar
            ${title ? 'title="' + this._esc(title) + '"' : ''}
            ${subtitle ? 'subtitle="' + this._esc(subtitle) + '"' : ''}
            ${searchable ? 'searchable' : ''}
            ${hideControls ? 'hide-controls' : ''}
          ></by-titlebar>
          <slot name="toolbar"></slot>
          <div class="body">
            ${showSidebar ? `
              <by-sidebar width="${sidebarWidth}" collapsible>
                <slot name="sidebar"></slot>
              </by-sidebar>
            ` : ''}
            <div class="main-area">
              <div class="content">
                <slot></slot>
              </div>
              <div class="footer-area">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    _esc(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    }
  }

  if (!customElements.get('by-app-layout')) {
    customElements.define('by-app-layout', ByAppLayout);
  }

  /* ======================================================================
     <by-toolbar> — Barra de ferramentas estilo macOS
     ====================================================================== */

  class ByToolbar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this._render();
    }

    _render() {
      this.shadowRoot.innerHTML = /* html */`
        <style>
          ${SHARED_CSS}
          :host {
            display: block;
            width: 100%;
            flex-shrink: 0;
          }
          .toolbar {
            display: flex;
            align-items: center;
            height: var(--ui-toolbar-h, 44px);
            padding: 0 12px;
            gap: 6px;
            background: var(--by-glass-bg);
            backdrop-filter: blur(var(--by-glass-blur));
            -webkit-backdrop-filter: blur(var(--by-glass-blur));
            border-bottom: 1px solid var(--by-glass-border);
          }
          ::slotted(*) {
            -webkit-app-region: no-drag;
          }
          .leading {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .center {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
          }
          .trailing {
            display: flex;
            align-items: center;
            gap: 4px;
          }
        </style>
        <div class="toolbar">
          <div class="leading"><slot name="leading"></slot></div>
          <div class="center"><slot></slot></div>
          <div class="trailing"><slot name="trailing"></slot></div>
        </div>
      `;
    }
  }

  if (!customElements.get('by-toolbar')) {
    customElements.define('by-toolbar', ByToolbar);
  }

  /* ======================================================================
     <by-player-bar> — Barra de reprodução de mídia estilo Spotify
     ====================================================================== */

  class ByPlayerBar extends HTMLElement {
    static get observedAttributes() {
      return [
        'track-title', 'track-artist', 'track-artwork',
        'playing', 'progress', 'duration'
      ];
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._dragging = false;
    }

    connectedCallback() {
      this._render();
      this._bindEvents();
    }

    attributeChangedCallback() {
      if (this.shadowRoot && this.shadowRoot.querySelector('.player-bar')) {
        this._updateDisplay();
      }
    }

    get playing() { return this.hasAttribute('playing'); }
    set playing(v) { v ? this.setAttribute('playing', '') : this.removeAttribute('playing'); }

    get progress() { return parseFloat(this.getAttribute('progress')) || 0; }
    set progress(v) { this.setAttribute('progress', String(v)); }

    get duration() { return parseFloat(this.getAttribute('duration')) || 0; }
    set duration(v) { this.setAttribute('duration', String(v)); }

    _formatTime(s) {
      s = Math.max(0, Math.floor(s));
      var m = Math.floor(s / 60);
      var sec = s % 60;
      return m + ':' + (sec < 10 ? '0' : '') + sec;
    }

    _render() {
      var trackTitle = this.getAttribute('track-title') || 'Sem título';
      var trackArtist = this.getAttribute('track-artist') || 'Artista desconhecido';
      var trackArtwork = this.getAttribute('track-artwork') || '';
      var playing = this.hasAttribute('playing');
      var progress = this.progress;
      var duration = this.duration;
      var pct = duration > 0 ? (progress / duration) * 100 : 0;

      this.shadowRoot.innerHTML = /* html */`
        <style>
          ${SHARED_CSS}
          :host {
            display: block;
            width: 100%;
            flex-shrink: 0;
          }
          .player-bar {
            display: flex;
            align-items: center;
            height: 72px;
            padding: 0 16px;
            gap: 16px;
            background: var(--by-glass-bg);
            backdrop-filter: blur(var(--by-glass-blur));
            -webkit-backdrop-filter: blur(var(--by-glass-blur));
            border-top: 1px solid var(--by-glass-border);
          }

          /* Info da faixa */
          .track-info {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 220px;
            min-width: 180px;
            flex-shrink: 0;
          }
          .artwork {
            width: 48px;
            height: 48px;
            border-radius: var(--ui-radius-sm, 6px);
            background: var(--by-surface);
            overflow: hidden;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .artwork img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .artwork-placeholder {
            color: var(--by-text-3);
          }
          .track-text {
            overflow: hidden;
          }
          .track-title {
            font-size: 13px;
            font-weight: 500;
            color: var(--by-text);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .track-artist {
            font-size: 11px;
            color: var(--by-text-3);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 2px;
          }

          /* Controles centrais */
          .controls {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
          }
          .control-buttons {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .ctrl-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            background: transparent;
            color: var(--by-text);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            transition: all var(--by-transition);
          }
          .ctrl-btn:hover {
            color: #ffffff;
            transform: scale(1.05);
          }
          .ctrl-btn svg {
            width: 18px;
            height: 18px;
          }
          .play-btn {
            width: 36px;
            height: 36px;
            background: var(--by-accent);
            color: var(--ui-text-on-accent, #ffffff);
            border-radius: 50%;
            box-shadow: var(--ui-shadow-1);
          }
          .play-btn:hover {
            transform: scale(1.08);
            background: var(--ui-accent-hover, #006be0);
            color: var(--ui-text-on-accent, #ffffff);
          }
          .play-btn svg {
            width: 20px;
            height: 20px;
          }

          /* Barra de progresso */
          .progress-row {
            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;
            max-width: 600px;
          }
          .time-label {
            font-size: 10px;
            color: var(--by-text-3);
            min-width: 36px;
            text-align: center;
            font-variant-numeric: tabular-nums;
          }
          .progress-track {
            flex: 1;
            height: 4px;
            border-radius: 2px;
            background: var(--by-separator);
            cursor: pointer;
            position: relative;
            transition: height 100ms ease;
          }
          .progress-track:hover {
            height: 6px;
          }
          .progress-fill {
            height: 100%;
            border-radius: 2px;
            background: var(--by-accent);
            width: ${pct}%;
            position: relative;
            transition: width 100ms linear;
          }
          .progress-track:hover .progress-fill {
            background: var(--ui-accent-hover, var(--by-accent));
          }
          .progress-thumb {
            display: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--by-surface);
            border: 1px solid var(--by-glass-border);
            position: absolute;
            right: -6px;
            top: 50%;
            transform: translateY(-50%);
            box-shadow: var(--ui-shadow-1);
          }
          .progress-track:hover .progress-thumb {
            display: block;
          }

          /* Controles secundários */
          .secondary {
            display: flex;
            align-items: center;
            gap: 8px;
            width: 180px;
            min-width: 120px;
            justify-content: flex-end;
          }
          .volume-track {
            width: 80px;
            height: 4px;
            border-radius: 2px;
            background: var(--by-separator);
            cursor: pointer;
            position: relative;
          }
          .volume-fill {
            height: 100%;
            border-radius: 2px;
            background: var(--by-text-2);
            width: 70%;
          }
        </style>
        <div class="player-bar">
          <div class="track-info">
            <div class="artwork">
              ${trackArtwork
                ? '<img src="' + trackArtwork + '" alt="' + this._esc(trackTitle) + '" />'
                : '<svg class="artwork-placeholder" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
              }
            </div>
            <div class="track-text">
              <div class="track-title">${this._esc(trackTitle)}</div>
              <div class="track-artist">${this._esc(trackArtist)}</div>
            </div>
          </div>

          <div class="controls">
            <div class="control-buttons">
              <button class="ctrl-btn shuffle-btn" aria-label="Aleatório" title="Aleatório">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>
                </svg>
              </button>
              <button class="ctrl-btn prev-btn" aria-label="Anterior" title="Anterior">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 20L9 12l10-8z"/><path d="M5 19V5"/>
                </svg>
              </button>
              <button class="ctrl-btn play-btn" aria-label="${playing ? 'Pausar' : 'Reproduzir'}" title="${playing ? 'Pausar' : 'Reproduzir'}">
                ${playing
                  ? '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>'
                  : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'
                }
              </button>
              <button class="ctrl-btn next-btn" aria-label="Próxima" title="Próxima">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 4l10 8-10 8z"/><path d="M19 5v14"/>
                </svg>
              </button>
              <button class="ctrl-btn repeat-btn" aria-label="Repetir" title="Repetir">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/>
                </svg>
              </button>
            </div>
            <div class="progress-row">
              <span class="time-label time-current">${this._formatTime(progress)}</span>
              <div class="progress-track">
                <div class="progress-fill">
                  <div class="progress-thumb"></div>
                </div>
              </div>
              <span class="time-label time-total">${this._formatTime(duration)}</span>
            </div>
          </div>

          <div class="secondary">
            <button class="ctrl-btn vol-btn" aria-label="Volume" title="Volume">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/>
              </svg>
            </button>
            <div class="volume-track">
              <div class="volume-fill"></div>
            </div>
            <slot></slot>
          </div>
        </div>
      `;
    }

    _bindEvents() {
      var self = this;
      var root = this.shadowRoot;

      // Play/Pause
      var playBtn = root.querySelector('.play-btn');
      if (playBtn) playBtn.addEventListener('click', function () {
        var isPlaying = self.playing;
        self.playing = !isPlaying;
        self.dispatchEvent(new CustomEvent(isPlaying ? 'pause' : 'play', {
          bubbles: true, composed: true
        }));
        self._updateDisplay();
      });

      // Anterior
      var prevBtn = root.querySelector('.prev-btn');
      if (prevBtn) prevBtn.addEventListener('click', function () {
        self.dispatchEvent(new CustomEvent('prev', { bubbles: true, composed: true }));
      });

      // Próxima
      var nextBtn = root.querySelector('.next-btn');
      if (nextBtn) nextBtn.addEventListener('click', function () {
        self.dispatchEvent(new CustomEvent('next', { bubbles: true, composed: true }));
      });

      // Seek na barra de progresso
      var progressTrack = root.querySelector('.progress-track');
      if (progressTrack) {
        var seekTo = function (e) {
          var rect = progressTrack.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          var dur = self.duration;
          if (dur > 0) {
            self.progress = pct * dur;
            self.dispatchEvent(new CustomEvent('seek', {
              bubbles: true, composed: true,
              detail: { position: self.progress, percentage: pct }
            }));
            self._updateDisplay();
          }
        };

        progressTrack.addEventListener('click', seekTo);

        progressTrack.addEventListener('mousedown', function (e) {
          self._dragging = true;
          seekTo(e);
          var onMove = function (ev) { if (self._dragging) seekTo(ev); };
          var onUp = function () {
            self._dragging = false;
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
          };
          document.addEventListener('mousemove', onMove);
          document.addEventListener('mouseup', onUp);
        });
      }
    }

    _updateDisplay() {
      var root = this.shadowRoot;
      if (!root) return;

      var progress = this.progress;
      var duration = this.duration;
      var pct = duration > 0 ? (progress / duration) * 100 : 0;

      var fill = root.querySelector('.progress-fill');
      if (fill) fill.style.width = pct + '%';

      var timeCurrent = root.querySelector('.time-current');
      if (timeCurrent) timeCurrent.textContent = this._formatTime(progress);

      var timeTotal = root.querySelector('.time-total');
      if (timeTotal) timeTotal.textContent = this._formatTime(duration);

      // Atualiza ícone de play/pause
      var playBtn = root.querySelector('.play-btn');
      if (playBtn) {
        var playing = this.playing;
        playBtn.setAttribute('aria-label', playing ? 'Pausar' : 'Reproduzir');
        playBtn.setAttribute('title', playing ? 'Pausar' : 'Reproduzir');
        playBtn.innerHTML = playing
          ? '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
      }

      // Atualiza info da faixa
      var titleEl = root.querySelector('.track-title');
      if (titleEl) titleEl.textContent = this.getAttribute('track-title') || 'Sem título';

      var artistEl = root.querySelector('.track-artist');
      if (artistEl) artistEl.textContent = this.getAttribute('track-artist') || 'Artista desconhecido';
    }

    _esc(s) {
      var d = document.createElement('div');
      d.textContent = s;
      return d.innerHTML;
    }
  }

  if (!customElements.get('by-player-bar')) {
    customElements.define('by-player-bar', ByPlayerBar);
  }

  /* ---- Aliases declarativos estilo *-macos ---- */
  function defineAlias(aliasTag, BaseClass) {
    if (customElements.get(aliasTag)) return;
    class AliasElement extends BaseClass {}
    customElements.define(aliasTag, AliasElement);
  }
  defineAlias('titlebar-macos', ByTitlebar);
  defineAlias('sidebar-macos', BySidebar);
  defineAlias('app-layout-macos', ByAppLayout);
  defineAlias('toolbar-macos', ByToolbar);
  defineAlias('player-bar-macos', ByPlayerBar);

  /* ---- Registro no catálogo MiniUI (informativo) ---- */
  if (M.registry && M.registry.components) {
    var reg = function (tag, desc) {
      if (!M.registry.components.has(tag)) {
        M.registry.components.set(tag, { tag: tag, group: GROUP, desc: desc, events: [], methods: [], slots: '' });
      }
    };
    reg('by-titlebar', 'Barra de título macOS com semáforo (traffic lights) e área de arraste.');
    reg('titlebar-macos', 'Alias para <by-titlebar>: Barra de título macOS com semáforo.');
    reg('by-sidebar', 'Barra lateral de navegação colapsável.');
    reg('sidebar-macos', 'Alias para <by-sidebar>: Barra lateral macOS.');
    reg('by-app-layout', 'Scaffold completo: titlebar + sidebar + conteúdo + footer.');
    reg('app-layout-macos', 'Alias para <by-app-layout>: Layout de app macOS completo.');
    reg('by-toolbar', 'Barra de ferramentas abaixo do titlebar.');
    reg('toolbar-macos', 'Alias para <by-toolbar>: Barra de ferramentas macOS.');
    reg('by-player-bar', 'Barra de reprodução de mídia estilo Spotify.');
    reg('player-bar-macos', 'Alias para <by-player-bar>: Barra de reprodução macOS.');
  }
});

/* ---- MODULE: src/by-lite/sdk-loader.js ---- */
/**
 * by-lite/sdk-loader.js — Auto-inicialização do SDK by-lite
 * ============================================================================
 * Script de loader que:
 *   1. Verifica se MiniUI está carregado
 *   2. Detecta o ambiente (by-lite vs browser)
 *   3. Inicializa o bridge se estiver no by-lite
 *   4. Registra todos os componentes by-*
 *   5. Despacha evento 'by-lite-sdk-ready'
 *
 * @module src/by-lite/sdk-loader.js
 */
MiniUI.module('src/by-lite/sdk-loader.js', function (M) {
  'use strict';

  /* ---- Verificação do MiniUI ---- */
  if (!window.MiniUI || !M) {
    console.error('[by-lite-sdk] MiniUI não está carregado. O SDK by-lite requer o MiniUI.');
    return;
  }

  /* ---- Verificação dos módulos necessários ---- */
  var requiredModules = [
    'src/by-lite/bridge.js',
    'src/by-lite/components.js'
  ];

  var loadedModules = (M.modules || []).map(function (m) { return m.path; });
  var missing = requiredModules.filter(function (path) {
    return loadedModules.indexOf(path) < 0;
  });

  if (missing.length > 0) {
    console.warn('[by-lite-sdk] Módulos não encontrados (podem não ter sido carregados ainda):', missing);
  }

  /* ---- Detecção de ambiente ---- */
  var isByLite = !!(window.__BY_LITE__ || window.by || window.byLite);
  var environment = isByLite ? 'by-lite' : 'browser';

  console.info('[by-lite-sdk] Ambiente detectado:', environment);

  /* ---- Informações do SDK ---- */
  var SDK_INFO = {
    name: 'by-lite-sdk',
    version: '1.0.0',
    environment: environment,
    miniuiVersion: M.version || '0.1.0',
    components: [
      'by-titlebar',
      'titlebar-macos',
      'by-sidebar',
      'sidebar-macos',
      'by-app-layout',
      'app-layout-macos',
      'by-toolbar',
      'toolbar-macos',
      'by-player-bar',
      'player-bar-macos'
    ],
    ready: false,
    readyAt: null
  };

  /* ---- Inicialização ---- */
  function init() {
    var startTime = performance.now();

    // 1. Verificar componentes registrados
    var registeredComponents = SDK_INFO.components.filter(function (tag) {
      return !!customElements.get(tag);
    });
    console.info('[by-lite-sdk] Componentes registrados:', registeredComponents.length + '/' + SDK_INFO.components.length);

    // 2. Inicializar bridge se no by-lite
    var bridgePromise;
    if (isByLite && M.ByLiteSDK) {
      console.info('[by-lite-sdk] Inicializando bridge by-lite...');
      bridgePromise = M.ByLiteSDK.init();
    } else if (isByLite) {
      console.warn('[by-lite-sdk] Ambiente by-lite detectado mas bridge não carregado.');
      bridgePromise = Promise.resolve({ adapter: 'by-lite', native: true, bridge: false });
    } else {
      console.info('[by-lite-sdk] Modo navegador — usando BrowserAdapter existente.');
      bridgePromise = Promise.resolve({ adapter: 'browser', native: false });
    }

    return bridgePromise.then(function (result) {
      var elapsed = Math.round(performance.now() - startTime);

      SDK_INFO.ready = true;
      SDK_INFO.readyAt = Date.now();
      SDK_INFO.initTime = elapsed;
      SDK_INFO.bridgeResult = result;

      // 3. Expor informações do SDK
      window.BY_LITE_SDK_INFO = SDK_INFO;

      // 4. Configurar tema claro (padrão original do toolkit) se o HTML não especificou outro
      var rootEl = document.documentElement;
      if (!rootEl.getAttribute('data-theme')) {
        rootEl.setAttribute('data-theme', 'light');
      }
      if (!rootEl.getAttribute('data-scheme')) {
        var th = rootEl.getAttribute('data-theme');
        var isDarkTheme = th === 'dark' || th === 'midnight' || th === 'forest';
        rootEl.setAttribute('data-scheme', isDarkTheme ? 'dark' : 'light');
      }
      if (M.ThemeManager && typeof M.ThemeManager.init === 'function') {
        M.ThemeManager.init();
      }

      // 5. Despachar evento de pronto
      var readyEvent = new CustomEvent('by-lite-sdk-ready', {
        bubbles: true,
        composed: true,
        detail: {
          environment: environment,
          components: registeredComponents,
          bridge: result,
          initTime: elapsed,
          sdk: SDK_INFO
        }
      });

      document.dispatchEvent(readyEvent);
      window.dispatchEvent(readyEvent);

      // 6. Emitir no event bus do MiniUI
      if (M.events) {
        M.events.emit('by-lite-sdk:ready', SDK_INFO);
      }

      console.info(
        '[by-lite-sdk] ✓ Pronto em ' + elapsed + 'ms' +
        ' | Ambiente: ' + environment +
        ' | Componentes: ' + registeredComponents.length +
        ' | Adapter: ' + result.adapter
      );

      return SDK_INFO;
    }).catch(function (err) {
      console.error('[by-lite-sdk] Erro na inicialização:', err);

      // Ainda despacha o evento, mas com flag de erro
      SDK_INFO.ready = true;
      SDK_INFO.error = String(err && err.message || err);

      var readyEvent = new CustomEvent('by-lite-sdk-ready', {
        bubbles: true, composed: true,
        detail: { environment: environment, error: SDK_INFO.error, sdk: SDK_INFO }
      });
      document.dispatchEvent(readyEvent);
      window.dispatchEvent(readyEvent);

      return SDK_INFO;
    });
  }

  /* ---- Execução ---- */
  // Inicializa automaticamente quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM já carregado — inicializa na próxima microtask
    Promise.resolve().then(init);
  }

  /* ---- Exportação ---- */
  M.byLiteSDKInfo = SDK_INFO;
});

