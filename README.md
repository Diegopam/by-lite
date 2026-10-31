# ⚡ by-lite

> **Ultra-lightweight, human-friendly desktop application runtime in Rust.**  
> A high-performance alternative to Electron and Tauri designed for modern Linux (Wayland).

[![Rust](https://img.shields.io/badge/Rust-1.80+-orange.svg)](https://www.rust-lang.org)
[![Engine](https://img.shields.io/badge/Engine-WPE%20WebKit%202.0-blue.svg)](https://wpewebkit.org)
[![Display](https://img.shields.io/badge/Display-Native%20Wayland-brightgreen.svg)](https://wayland.freedesktop.org)
[![License](https://img.shields.io/badge/License-MIT%20OR%20Apache--2.0-blue.svg)](LICENSE)

---

## 🎯 Por que o by-lite? (Why by-lite?)

Para criar uma aplicação desktop simples (como uma calculadora ou reprodutor de mídia), as opções tradicionais cobram um preço alto:
- **Electron**: Empacota uma cópia completa do Chromium e do Node.js para cada aplicativo. Um app simples pesa mais de **100 MB** em disco e consome **150 MB+ de RAM** ao abrir.
- **Tauri**: Melhorou o peso, mas introduziu uma curva de aprendizado burocrática, com dezenas de arquivos de configuração, permissões estritas em JSON e tempos lentos de compilação.

O **`by-lite`** une o melhor dos dois mundos:
1. **Leveza Absoluta**: Usa o **WPE WebKit 2.0** diretamente no Wayland/EGL. **Sem GTK, sem Qt, sem Chromium**. O executável de runtime pesa **menos de 800 KB** e consome cerca de **30 MB de RAM**.
2. **Inicialização Instantânea (Sub-100ms)**: Compilado em Rust com LTO agressivo (`fat`), strip de símbolos e vetorização SIMD. Abre antes do ambiente gráfico desenhar a primeira tela de splash.
3. **Formato `.byt` (App Bundles)**: Distribua seus apps em pacotes compactos de **50 KB a poucos megabytes** que abrem com **dois cliques** uma vez instalado o runtime.
4. **Client-Side Decorations (CSD) 100% Customizáveis**: Liberdade visual total. Crie barras de título com HTML/CSS/SVGs com arrasto suave a 120/144Hz via compositor Wayland (`xdg_toplevel.move`) e redimensionamento nativo em 8 direções (`xdg_toplevel.resize`).
5. **Backend Livre**: Funcione com Rust puro ou conecte facilmente qualquer backend local em **Go, Python, Bun, Node.js ou C**.

---

## 📊 Comparativo

| Métrica | Electron Tradicional | Tauri 2.0 | **by-lite** |
| :--- | :--- | :--- | :--- |
| **Tamanho do Binário** | ~120 MB | ~10 MB | **~760 KB** |
| **Uso de RAM Inicial** | ~150 MB | ~50 MB | **~30 MB** |
| **Tempo de Cold-Start** | ~800ms - 1.5s | ~250ms | **< 100ms** |
| **Motor Web** | Chromium Monolítico | WebKitGTK / WebView2 | **WPE WebKit 2.0** |
| **Frameworks de Janela** | Chromium Shell | GTK / Cocoa / Win32 | **Zero GTK / Zero Qt** (Wayland Puro) |
| **Tamanho do Pacote App** | ~100 MB+ | ~10 MB | **50 KB a 5 MB** (formato `.byt`) |

---

## 🚀 Instalação do Runtime (Para Usuários Finais)

Para rodar qualquer aplicativo `.byt` com dois cliques, execute o instalador universal:

```bash
git clone https://github.com/Diegopam/by-lite.git
cd by-lite
bash scripts/install-runtime.sh
```

O script automaticamente:
- Detecta a sua distribuição (**Ubuntu, Debian, Pop!_OS, Linux Mint, Fedora, Arch Linux, Manjaro, openSUSE**).
- Instala a biblioteca do WPE WebKit via gerenciador de pacotes nativo (`pacman`, `apt`, `dnf`, `zypper`).
- Instala o executável `by-lite` em `/usr/local/bin`.
- Registra o tipo MIME `application/x-by-lite` no sistema para habilitar abertura com **dois cliques** no Dolphin (KDE Plasma) e Nautilus (GNOME).

---

## 🛠️ Como Desenvolver Apps com o by-lite

### 1. Estrutura de um Projeto `.byt`

Um aplicativo `by-lite` precisa apenas de um manifesto `by-lite.json` e uma pasta com seus arquivos web (`ui/`):

```text
meu-app/
├── by-lite.json           # Configurações da janela e do app
└── ui/
    ├── index.html        # Estrutura HTML
    ├── style.css         # Estilização
    └── app.js            # Lógica JavaScript
```

### 2. O Manifesto (`by-lite.json`)

```json
{
  "name": "meu-app",
  "title": "Meu Aplicativo Incrível",
  "version": "1.0.0",
  "width": 1000,
  "height": 700,
  "resizable": true,
  "csd": true,
  "devtools": true,
  "entrypoint": "ui/index.html"
}
```

Se o seu app usa um backend local (como um servidor em **Go**, **Python** ou **Bun**), você pode declará-lo para que o `by-lite` inicie e encerre o processo automaticamente:

```json
{
  "backend": {
    "command": "bin/meu-servidor-go",
    "args": [],
    "port": 8080,
    "wait_ms": 3000
  }
}
```

---

### 3. Barra de Título Customizada (CSD) no HTML

O `by-lite` injeta automaticamente no DOM os listeners para atributos declarativos:

```html
<!-- Barra customizada desenhada pelo desenvolvedor -->
<header class="titlebar" data-by-drag>
  <div class="logo">Meu App</div>

  <!-- Botões de ação do sistema -->
  <button data-by-action="minimize" title="Minimizar">🗕</button>
  <button data-by-action="toggle-maximize" title="Maximizar">🗖</button>
  <button data-by-action="close" title="Fechar">✕</button>
</header>
```

- **`data-by-drag`**: Transforma qualquer elemento em uma área de arrasto acelerada por hardware a 120/144Hz.
- **`data-by-no-drag`**: Impede o arrasto em elementos internos (como botões, inputs de busca ou links).
- **`data-by-action="minimize"`**: Minimiza a janela.
- **`data-by-action="toggle-maximize"`**: Alterna entre maximizado e restaurado.
- **`data-by-action="close"`**: Fecha a janela e encerra o app.
- **`data-by-resize="bottom-right"`**: Transforma elementos em alças de redimensionamento em 8 direções.

---

### 4. API JavaScript (`window.by`)

O runtime expõe a API global `window.by` (ou `window.byLite`):

```javascript
// Controle da janela
window.by.minimize();
window.by.toggleMaximize();
window.by.close();
window.by.setTitle("Novo Título");
window.by.resize(800, 600);

// Iniciar arrasto ou redimensionamento interativo manualmente
window.by.startDrag();
window.by.startResize("bottom-right"); // 'top', 'bottom', 'left', 'right', 'top-left', etc.

// Chamadas IPC para o backend Rust (se estiver usando by-lite-core)
const resultado = await window.by.invoke("calcular", { a: 10, b: 20 });
console.log(resultado);
```

---

### 5. Empacotando e Testando seu App (`.byt`)

Use o CLI do `by-lite` para empacotar e executar:

```bash
# 1. Testar o app diretamente da pasta durante o desenvolvimento:
by-lite run ./meu-app

# 2. Empacotar a pasta em um arquivo .byt comprimido:
by-lite pack ./meu-app -o meu-app.byt

# 3. Testar o pacote .byt gerado:
by-lite run meu-app.byt
```

Envie o arquivo `meu-app.byt` para qualquer pessoa com o runtime instalado. Ela só precisa dar **dois cliques** no arquivo!

---

## 🦀 Desenvolvimento Nativo em Rust (`by-lite-core`)

Se preferir criar uma aplicação standalone compilada em binário único nativo em Rust:

```rust
use by_lite_core::{App, WindowBuilder};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let app = App::new()?;

    let window = WindowBuilder::new()
        .title("Meu App em Rust")
        .size(900, 600)
        .resizable(true)
        .csd(true)
        .url("file:///caminho/para/ui/index.html")
        // Registra comandos IPC acessíveis via window.by.invoke('somar', ...)
        .command("somar", |args| {
            let args = args.ok_or("Sem argumentos")?;
            let a = args["a"].as_f64().unwrap_or(0.0);
            let b = args["b"].as_f64().unwrap_or(0.0);
            Ok(serde_json::json!({ "total": a + b }))
        })
        .build(&app)?;

    app.run()?;
    Ok(())
}
```

---

## 📦 Estrutura do Workspace

```text
by-lite/
├── Cargo.toml                    # Configurações do workspace e flags de LTO/SIMD
├── scripts/
│   └── install-runtime.sh        # Instalador universal para distros Linux
├── crates/
│   ├── by-lite-sys/              # Bindings FFI de baixo nível para WPE WebKit 2.0 e Wayland
│   ├── by-lite-core/             # Motor principal em Rust (CSD, IPC, empacotador .byt)
│   └── by-lite-cli/              # CLI binário (`by-lite pack`, `run`, `install-mime`)
└── examples/
    └── calculator/               # Exemplo de calculadora com CSD em HTML/CSS e IPC em Rust
```

---

## 🔧 Compilando a partir do Código-Fonte

Certifique-se de ter o compilador Rust e as bibliotecas do WPE instaladas no seu sistema:

```bash
# No Arch Linux / Manjaro:
sudo pacman -S rust cargo wpewebkit glib2 libsoup3 wayland

# No Ubuntu / Debian:
sudo apt install cargo rustc libwpewebkit-2.0-1 libglib2.0-dev libsoup-3.0-dev libwayland-dev

# Compilar todas as crates em modo release otimizado:
cargo build --release --workspace

# Os binários gerados estarão em:
# target/release/by-lite      (CLI e Launcher universal)
# target/release/calculator   (App de exemplo)
```

---

## 📄 Licença

Distribuído sob licença dupla **MIT** ou **Apache-2.0**.
