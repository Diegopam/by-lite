# by-lite

> **Runtime ultraleve e ergonomico para aplicativos desktop em Rust.**  
> Uma alternativa de altissimo desempenho ao Electron e Tauri projetada para o Linux moderno (Wayland).

---

## Sumario

- [Por que o by-lite?](#por-que-o-by-lite)
- [Novidades e Arquitetura do Motor](#novidades-e-arquitetura-do-motor)
- [Instalacao do Runtime](#instalacao-do-runtime)
  - [Instalador Universal (Ubuntu, Debian, Zorin OS, Arch Linux, Fedora)](#instalador-universal)
  - [Compilando a partir do Codigo-Fonte](#compilando-a-partir-do-codigo-fonte)
- [Referencia da CLI](#referencia-da-cli)
- [Especificacao Completa do by-lite.json](#especificacao-completa-do-by-litejson)
- [Desenvolvimento de Aplicativos (.byt)](#desenvolvimento-de-aplicativos-byt)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Barra de Titulo e CSD no HTML](#barra-de-titulo-e-csd-no-html)
  - [API JavaScript (window.by)](#api-javascript-windowby)
  - [macOS UI Toolkit SDK Embutido](#macos-ui-toolkit-sdk-embutido)
  - [Backend Embutido (Go, Python, Bun, Rust)](#backend-embutido)
- [Variaveis de Ambiente e Diagnostico](#variaveis-de-ambiente-e-diagnostico)
- [Comparativo com Electron e Tauri](#comparativo-com-electron-e-tauri)
- [Licenca](#licenca)

---

## Por que o by-lite?

Ao criar aplicacoes desktop multiplataforma, os desenvolvedores enfrentam gargalos historicos:
- **Electron:** Empacota uma copia completa do navegador Chromium e do Node.js em cada instalacao. Um aplicativo simples consome facilmente mais de 100 MB em disco e 150 MB a 250 MB de memoria RAM logo ao iniciar.
- **Tauri:** Reduz o peso do executavel, mas introduz compilacoes lentas, dezenas de arquivos de configuracao rigidos e uma curva de aprendizado burocratica de permissoes.

O **by-lite** entrega a solucao definitiva para o ecossistema Linux moderno:

1. **Leveza Extrema:** Utiliza o motor **WPE WebKit 2.0** diretamente sobre Wayland nativo e EGL. Sem camadas intermediarias de GTK ou Qt, sem Chromium monolítico. O executavel final do runtime pesa menos de **800 KB** e consome tipicamente **30 MB de RAM**.
2. **Inicializacao Instantanea (Sub-100ms):** Compilado em Rust com otimizacoes de Link-Time Optimization (LTO fat), strip de simbolos e vetorizacao SIMD. O app abre de forma praticamente imperceptivel antes mesmo da renderizacao da primeira animacao.
3. **Formato .byt (App Bundles):** Distribua suas aplicacoes em arquivos unicos compactados `.byt` (comprimidos em `tar.gz`) variando entre **50 KB e poucos megabytes**, abrindo com duplo clique no Dolphin (KDE Plasma), Nautilus (GNOME) ou Thunar (XFCE).
4. **Integracao Nativa ao Desktop Linux (XDG / FreeDesktop):** O proprio runtime gerencia a instalacao de lancadores `.desktop`, extracao e distribuicao de icones em multiplas resolucoes (`hicolor` de 32x32 ate 512x512) e atualizacao do banco de dados de servicos do sistema.
5. **Client-Side Decorations (CSD) Aceleradas por Hardware:** Crie barras de titulo no proprio HTML/CSS com suporte nativo a arrasto a 120/144Hz via compositor Wayland (`xdg_toplevel.move`) e redimensionamento em 8 direcoes (`xdg_toplevel.resize`).
6. **Backend Livre e Agnostico:** Desenvolva a interface em HTML5/CSS/JavaScript e conecte qualquer backend nativo em **Go, Rust, Python, Bun, Node.js ou C** sem configuracoes complexas.

---

## Novidades e Arquitetura do Motor

O motor do by-lite evoluiu significativamente, tornando-se uma solucao robusta para aplicacoes graficas, reprodutores multimídia, centros de entretenimento e ferramentas de sistema:

- **Sistema Integrador de Menu do Sistema:** Comandos nativos `by-lite integrate`, `by-lite unintegrate`, `by-lite integrate-all` e `by-lite list-integrated` para gerenciar atalhos no menu do sistema sem scripts adicionais.
- **macOS UI Toolkit SDK Embutido:** O runtime injeta automaticamente o SDK do Toolkit no topo da aplicacao (`window.by` e `window.byLiteSDK`), fornecendo componentes de interface, pontes de IPC e manipulacao de janelas.
- **Motor Multimidia Avancado:** Suporte completo a HTML5 Video, MediaSource Extensions (MSE), HLS (`.m3u8`), Encrypted Media Extensions (EME) e WebGL com aceleracao grafica.
- **Autoplay Incondicional com Som:** Politica ativa de reproducao automatica sem exigir clique previo do usuario (`WEBKIT_AUTOPLAY_ALLOW`).
- **Bloqueador de Anuncios e Anti-Popup:** Modulo de intercepcao integrado para reprodutores web que bloqueia redirecionamentos indevidos e chamadas `window.open` invasivas.
- **Gerenciador de Ciclo de Vida de Daemons:** Gerencia automaticamente processos de backend locais (Go, Python, etc.), inicializando a porta requerida e encerrando os subprocessos junto com a janela.

---

## Instalacao do Runtime

### 1. Instalacao do Runtime Portatil Hermetico (Recomendado para Zorin OS, Ubuntu e Debian)

Como distribuicoes como o **Zorin OS 18** e **Ubuntu 24.04** nao possuem o `wpewebkit-2.0` empacotado em seus repositorios oficiais APT, o by-lite fornece um pacote portatil autonomo que ja embute o motor WPE WebKit 2.0 LTS compilado contra a glibc compativel, sem depender de pacotes externos do sistema.

Para instalar em qualquer distribuicao com um unico comando (sem precisar de compilador nem sudo):

```bash
curl -fsSL https://raw.githubusercontent.com/Diegopam/by-lite/main/scripts/install-portable.sh | bash
```

O script automaticamente:
- Baixa o motor oficial WPE WebKit 2.0 e o binario `by-lite` compilado em container isolado.
- Extrai em `~/.local/share/by-lite/` com bibliotecas configuradas via `RPATH`.
- Cria o symlink universal em `~/.local/bin/by-lite`.
- Registra as associacoes de arquivo `.byt` no sistema para duplo clique no Dolphin e Nautilus.

---

### 2. Instalador Universal para Distros com WPE 2.0 Nativo (Arch, Fedora, openSUSE)

O script de instalacao detecta automaticamente a sua distribuicao Linux, instala as dependencias de sistema necessarias, compila/instala o executavel do `by-lite` e registra as associacoes MIME para abertura com duplo clique.

Compativel com:
- **Ubuntu, Debian, Pop!_OS, Linux Mint, Elementary OS, Zorin OS, KDE Neon**
- **Arch Linux, Manjaro, EndeavourOS, Garuda, CachyOS**
- **Fedora, RHEL, CentOS, Rocky Linux, AlmaLinux**
- **openSUSE Tumbleweed / Leap**

Execute no terminal:

```bash
git clone https://github.com/Diegopam/by-lite.git
cd by-lite
bash scripts/install-runtime.sh
```

#### Notas Especificas para o Zorin OS e Derivados do Debian/Ubuntu

No **Zorin OS**, as dependencias compartilhadas sao instaladas atraves do gerenciador APT:

```bash
sudo apt-get update -y
sudo apt-get install -y libwpewebkit-2.0-1 libglib2.0-0 libsoup-3.0-0 libwayland-client0 shared-mime-info desktop-file-utils
```

O instalador universal ja inclui verificacao especifica para o Zorin OS (`DISTRO=zorin` ou `DISTRO_LIKE=ubuntu debian`), configurando permissoes e associacoes sem intervencao manual.

---

### Compilando a partir do Codigo-Fonte

Caso prefira compilar manualmente usando o Cargo:

```bash
# 1. Dependencias no Arch Linux / Manjaro:
sudo pacman -S rust cargo wpewebkit glib2 libsoup3 wayland

# 1. Dependencias no Ubuntu / Debian / Zorin OS:
sudo apt install cargo rustc libwpewebkit-2.0-1 libglib2.0-dev libsoup-3.0-dev libwayland-dev

# 2. Compilar todas as crates com otimizacoes de producao:
cargo build --release --workspace

# 3. Os binarios gerados estarao disponiveis em:
# target/release/by-lite (Runtime e CLI)
# target/release/calculator (Exemplo)
```

Para instalar o binario compilado globalmente no sistema:

```bash
sudo install -m 755 target/release/by-lite /usr/local/bin/by-lite
by-lite install-mime
```

---

## Referencia da CLI

O executavel `by-lite` possui comandos para execucao, empacotamento, integracao e manutencao:

```text
USO:
    by-lite [OPCOES] [CAMINHO_OU_URL_OU_BYT]
    by-lite run [OPCOES] <CAMINHO_OU_URL_OU_BYT>
    by-lite pack <DIRETORIO> [-o <PACOTE.byt>]
    by-lite integrate <CAMINHO_DO_BYT>
    by-lite unintegrate <NOME_OU_BYT>
    by-lite integrate-all [DIRETORIO]
    by-lite list-integrated
    by-lite install-mime

COMANDOS:
    run <ALVO>             Executa um pacote .byt, diretorio de app, arquivo HTML ou URL.
    pack <DIR> [-o SAIDA]  Empacota um diretorio em um pacote compactado .byt.
    integrate <BYT>        Instala o app no menu do sistema (.desktop e icones hicolor).
    unintegrate <NOME>     Remove o aplicativo e icones do menu do sistema.
    integrate-all [DIR]    Escaneia e integra todos os .byt de uma pasta ao menu.
    list-integrated        Lista todos os aplicativos .byt instalados no menu do sistema.
    install-mime           Registra o MIME type e a associacao no Dolphin/Nautilus.

OPCOES:
    --fixed-menu           Integra o aplicativo ao menu do sistema antes de abrir.
    -t, --title <TITULO>   Sobrescreve o titulo da janela.
    -w, --width <LARGURA>  Largura inicial da janela em pixels.
    -H, --height <ALTURA>  Altura inicial da janela em pixels.
    -d, --devtools         Habilita o inspecionador web (WebKit Web Inspector).
    --no-csd               Desativa os helpers de Client-Side Decoration.
    -o, --output <ARQUIVO> Caminho de saida do arquivo .byt (no comando pack).
    -h, --help             Exibe a mensagem de ajuda.
    -v, --version          Exibe informacoes da versao.
```

### Exemplos Rapidos de Uso

```bash
# Executar pasta local de desenvolvimento:
by-lite run ./meu-app

# Empacotar aplicativo em arquivo .byt:
by-lite pack ./meu-app -o meu-app.byt

# Integrar o app ao menu de aplicativos do KDE Plasma / GNOME / Zorin:
by-lite integrate meu-app.byt

# Listar aplicativos integrados:
by-lite list-integrated

# Remover aplicativo do menu:
by-lite unintegrate meu-app
```

---

## Especificacao Completa do by-lite.json

O arquivo `by-lite.json` fica localizado na raiz do seu aplicativo e define a identidade, dimensoes da janela, recursos do motor e microservicos auxiliares.

### Exemplo Completo com Todos os Campos

```json
{
  "name": "meu-player-pro",
  "title": "Meu Player Pro — Streaming e Midia",
  "version": "1.2.0",
  "width": 1280,
  "height": 840,
  "resizable": true,
  "csd": true,
  "frameless": true,
  "devtools": true,
  "entrypoint": "ui/index.html",
  "icon": "ui/assets/icon.png",
  "categories": "AudioVideo;Player;Network;",
  "comment": "Reprodutor de midia ultraleve com interface moderna",
  "sdk": true,
  "adblock": true,
  "autoplay_helper": true,
  "backend": {
    "command": "bin/servidor-local",
    "args": ["-porta", "8080"],
    "port": 8080,
    "wait_ms": 2000
  },
  "tunnel": "warp",
  "proxy": "http://127.0.0.1:9090"
}
```

### Tabela de Parametros

| Campo | Tipo | Padrao | Descricao |
| :--- | :--- | :--- | :--- |
| `name` | String | Obrigatório | Identificador unico do app (usado no WMClass, nome do `.desktop` e caches). |
| `title` | String | `by-lite Application` | Titulo padrao da janela e nome exibido no menu do sistema. |
| `version` | String | `0.1.0` | Versao semantica do aplicativo. |
| `width` | Inteiro | `1024` | Largura inicial da janela em pixels. |
| `height` | Inteiro | `720` | Altura inicial da janela em pixels. |
| `resizable` | Booleano | `true` | Permite que o usuario redimensione a janela. |
| `csd` | Booleano | `true` | Habilita Client-Side Decorations com listeners de arrasto e botoes nativos. |
| `frameless` | Booleano | `false` | Remove bordas tradicionais da janela para estilizacao propria. |
| `devtools` | Booleano | `true` | Ativa ferramentas de desenvolvedor (F12 ou botao direito -> Inspecionar). |
| `entrypoint` | String | `ui/index.html` | Arquivo inicial ou URL local (`http://localhost:...`). |
| `icon` | String | Auto-detectado | Caminho relativo para o icone do app (ex: `ui/assets/icon.png`). |
| `categories` | String | `AudioVideo;Player;` | Categorias FreeDesktop para organizacao no menu do sistema. |
| `comment` | String | Gerado auto | Descricao / tooltip exibido ao passar o mouse no menu de aplicativos. |
| `sdk` | Booleano | `true` | Injeta o macOS UI Toolkit SDK e ponte `window.by` no frame principal. |
| `adblock` | Booleano | `false` | Bloqueador de popups e anuncios indesejados para reprodutores web. |
| `autoplay_helper` | Booleano | `false` | Forca reproducao automatica sem necessidade de gesto do usuario. |
| `backend` | Objeto | `null` | Configuracao de microservico local (Go, Python, etc.) iniciado com o app. |
| `backend.command`| String | Obrigatorio | Caminho para o executavel do backend relativo a pasta do app. |
| `backend.args` | Array | `[]` | Argumentos passados na inicializacao do backend. |
| `backend.port` | Inteiro | `null` | Porta TCP local esperada para confirmacao de disponibilidade. |
| `backend.wait_ms`| Inteiro | `3000` | Tempo maximo em milissegundos para aguardar o backend responder. |
| `tunnel` | String | `null` | Configuracao de tunel local (ex: `warp`). |
| `proxy` | String | `null` | Proxy HTTP/SOCKS para roteamento de requisicoes do webview. |

---

## Desenvolvimento de Aplicativos (.byt)

### Estrutura do Projeto

Para criar um novo aplicativo, basta estruturar uma pasta comum com os arquivos da sua aplicacao web:

```text
meu-projeto/
├── by-lite.json              # Manifesto do aplicativo
└── ui/
    ├── index.html           # Interface HTML
    ├── styles.css           # Estilos CSS
    ├── app.js               # Logica da aplicacao
    └── assets/
        └── icon.png         # Icone do aplicativo (recomendado 512x512)
```

---

### Barra de Titulo e CSD no HTML

Com `csd: true`, o `by-lite` processa atributos declarativos no HTML com aceleracao Wayland:

```html
<header class="titlebar" data-by-drag>
  <div class="traffic-lights" data-by-no-drag>
    <button class="btn close" data-by-action="close" title="Fechar"></button>
    <button class="btn minimize" data-by-action="minimize" title="Minimizar"></button>
    <button class="btn maximize" data-by-action="toggle-maximize" title="Maximizar"></button>
  </div>
  <div class="window-title">Meu Aplicativo</div>
</header>
```

- **`data-by-drag`**: Transforma o elemento em regiao de arrasto da janela pelo compositor Wayland a 120/144Hz.
- **`data-by-no-drag`**: Isola botoes, campos de texto e elementos clicaveis dentro da regiao de arrasto.
- **`data-by-action="minimize"`**: Minimiza a janela.
- **`data-by-action="toggle-maximize"`**: Alterna entre maximizado e tamanho original.
- **`data-by-action="close"`**: Encerra a janela e o processo do aplicativo.
- **`data-by-resize="bottom-right"`**: Transforma elementos em alcas de redimensionamento nativo em 8 direcoes (`top`, `bottom`, `left`, `right`, `top-left`, etc.).

---

### API JavaScript (window.by)

Alem dos atributos HTML, qualquer script tem acesso a API nativa:

```javascript
// Acoes da janela
window.by.minimize();
window.by.toggleMaximize();
window.by.close();
window.by.setTitle("Nova Secao");
window.by.resize(1100, 750);

// Disparar arrasto programaticamente
window.by.startDrag();

// Comunicacao IPC com backend Rust (quando usando by-lite-core)
const resposta = await window.by.invoke("meuComando", { id: 42 });
console.log(resposta);
```

---

### macOS UI Toolkit SDK Embutido

Quando `sdk: true` (habilitado por padrao), o `by-lite` injeta automaticamente no frame principal uma biblioteca completa de mais de 340 componentes e elementos customizados (`Custom Elements`) inspirados no design do macOS Sonoma e Sequoia:

- Botoes estilizados, seletores, toggles e caixas de dialogo.
- Abas (`ui-tabs`), split views (`ui-split`), paineis de navegacao e barras de ferramentas.
- Paletas de cores com suporte automatico a tema claro e tema escuro.

---

### Backend Embutido

Se o seu aplicativo precisa de funcionalidades em **Go**, **Python**, **Bun** ou **C**, coloque o binario na pasta do app e declare no `by-lite.json`:

```json
{
  "entrypoint": "http://localhost:8484/",
  "backend": {
    "command": "bin/meu-servidor",
    "args": ["-port", "8484"],
    "port": 8484,
    "wait_ms": 2500
  }
}
```

O `by-lite`:
1. Inicia o processo `bin/meu-servidor` em segundo plano.
2. Aguarda a porta `8484` responder.
3. Carrega a interface no webview.
4. Ao fechar a janela, encerra o processo do backend de forma limpa (`SIGTERM` / `SIGKILL`).

---

## Variaveis de Ambiente e Diagnostico

Para ambientes de teste ou depuracao avancada, o runtime aceita as seguintes variaveis de ambiente:

| Variavel | Descricao |
| :--- | :--- |
| `BY_NO_SDK=1` | Desativa a injecao automatica do macOS UI Toolkit SDK. |
| `BY_NO_ADBLOCK=1` | Desativa o filtro de bloqueio de popups e anuncios. |
| `BY_NO_AUTOPLAY=1` | Desativa os scripts de reproducao automatica forçada. |
| `BY_WEBSEC=1` | Reativa as restricoes rigidas de seguranca web (CORS padrao do navegador). |
| `BY_NO_MEDIAOVR=1` | Desativa o override de capacidades de midia de hardware. |

---

## Comparativo com Electron e Tauri

| Caracteristica | Electron | Tauri 2.0 | **by-lite** |
| :--- | :--- | :--- | :--- |
| **Tamanho do Binario** | ~120 MB | ~10 MB | **~760 KB** |
| **Consumo Inicial de RAM** | ~150 MB - 250 MB | ~50 MB | **~30 MB** |
| **Tempo de Inicializacao** | ~800ms - 1.5s | ~250ms | **< 100ms** |
| **Motor Web** | Chromium Monolitico | WebKitGTK / WebView2 | **WPE WebKit 2.0 (Wayland Puro)** |
| **Dependencias de Janela** | Chromium Shell | GTK / Cocoa / Win32 | **Zero GTK / Zero Qt** |
| **Tamanho do Pacote App** | ~100 MB+ | ~10 MB | **50 KB a 5 MB (formato .byt)** |
| **Integracao ao Sistema** | Requer empacotamento externo | Requer bundler complexo | **Nativo via `by-lite integrate`** |

---

## Licenca

Distribuido sob licenca dupla **MIT** ou **Apache-2.0**.
