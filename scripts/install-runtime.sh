#!/usr/bin/env bash
set -e

# ==============================================================================
# by-lite Runtime — Linux Universal Installer
# ==============================================================================

echo "======================================================="
echo "       by-lite Runtime — Instalador Universal Linux    "
echo "======================================================="

# Detect distro
DISTRO="unknown"
DISTRO_LIKE=""
if [ -f /etc/os-release ]; then
    . /etc/os-release
    DISTRO="${ID:-unknown}"
    DISTRO_LIKE="${ID_LIKE:-}"
fi

echo "[by-lite] Distribuição detectada: $DISTRO ($DISTRO_LIKE)"

# Check privilege level and sudo availability
CAN_SUDO=false
if [ "$(id -u)" -eq 0 ]; then
    CAN_SUDO=true
elif command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null; then
    CAN_SUDO=true
fi

# 1. Install dependencies if needed and permitted
echo "[by-lite] Verificando dependências do sistema..."
case "$DISTRO" in
    arch|manjaro|endeavouros|garuda|cachyos)
        if ! pacman -Q wpewebkit >/dev/null 2>&1; then
            if [ "$CAN_SUDO" = true ]; then
                echo "[by-lite] Instalando wpewebkit e bibliotecas essenciais..."
                sudo pacman -S --needed --noconfirm wpewebkit glib2 libsoup3 wayland
            else
                echo "[by-lite] Aviso: 'wpewebkit' não instalado. Execute: sudo pacman -S wpewebkit"
            fi
        else
            echo "[by-lite] Pacote wpewebkit já instalado."
        fi
        ;;
    ubuntu|debian|pop|linuxmint|elementary|zorin|zorinos|tuxedo|neon)
        if ! dpkg -s libwpewebkit-2.0-1 >/dev/null 2>&1; then
            if [ "$CAN_SUDO" = true ]; then
                sudo apt-get update -y
                sudo apt-get install -y libwpewebkit-2.0-1 libglib2.0-0 libsoup-3.0-0 libwayland-client0 shared-mime-info desktop-file-utils
            else
                echo "[by-lite] Aviso: Execute: sudo apt install libwpewebkit-2.0-1"
            fi
        else
            echo "[by-lite] Pacote libwpewebkit-2.0-1 já instalado."
        fi
        ;;
    fedora|rhel|centos|rocky|alma)
        if ! rpm -q wpewebkit >/dev/null 2>&1; then
            if [ "$CAN_SUDO" = true ]; then
                sudo dnf install -y wpewebkit glib2 libsoup3 wayland-client shared-mime-info desktop-file-utils
            else
                echo "[by-lite] Aviso: Execute: sudo dnf install wpewebkit"
            fi
        else
            echo "[by-lite] Pacote wpewebkit já instalado."
        fi
        ;;
    *)
        echo "[by-lite] Distribuição genérica. Certifique-se de que wpewebkit está disponível."
        ;;
esac

# 2. Locate and install by-lite binary
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

SOURCE_BIN=""
if [ -f "$PROJECT_ROOT/target/release/by-lite" ]; then
    SOURCE_BIN="$PROJECT_ROOT/target/release/by-lite"
elif [ -f "$PROJECT_ROOT/by-lite" ]; then
    SOURCE_BIN="$PROJECT_ROOT/by-lite"
elif [ -f "./target/release/by-lite" ]; then
    SOURCE_BIN="./target/release/by-lite"
fi

if [ -z "$SOURCE_BIN" ] && command -v cargo >/dev/null 2>&1; then
    echo "[by-lite] Compilando versão de lançamento..."
    (cd "$PROJECT_ROOT" && cargo build --release -p by-lite-cli)
    SOURCE_BIN="$PROJECT_ROOT/target/release/by-lite"
fi

if [ -z "$SOURCE_BIN" ] || [ ! -f "$SOURCE_BIN" ]; then
    echo "[by-lite] Erro: Binário 'by-lite' não encontrado."
    exit 1
fi

DEST_DIR=""
USE_SUDO_FOR_INSTALL=false

if [ "$(id -u)" -eq 0 ]; then
    DEST_DIR="/usr/local/bin"
elif [ -w "/usr/local/bin" ]; then
    DEST_DIR="/usr/local/bin"
elif [ "$CAN_SUDO" = true ]; then
    DEST_DIR="/usr/local/bin"
    USE_SUDO_FOR_INSTALL=true
else
    DEST_DIR="$HOME/.local/bin"
    mkdir -p "$DEST_DIR"
fi

echo "[by-lite] Instalando executável em $DEST_DIR/by-lite..."
if [ "$USE_SUDO_FOR_INSTALL" = true ]; then
    sudo install -m 755 "$SOURCE_BIN" "$DEST_DIR/by-lite"
else
    install -m 755 "$SOURCE_BIN" "$DEST_DIR/by-lite"
fi

# Ensure user PATH includes ~/.local/bin if installed there
if [ "$DEST_DIR" = "$HOME/.local/bin" ]; then
    if ! echo "$PATH" | tr ':' '\n' | grep -qx "$HOME/.local/bin"; then
        export PATH="$HOME/.local/bin:$PATH"
    fi
fi

# 3. Register MIME types and desktop associations
echo "[by-lite] Registrando tipo MIME e lançador no FreeDesktop..."
if [ -x "$DEST_DIR/by-lite" ]; then
    "$DEST_DIR/by-lite" install-mime
else
    "$SOURCE_BIN" install-mime
fi

echo ""
echo "======================================================="
echo "by-lite Runtime instalado com sucesso! Agora você pode abrir qualquer arquivo .byt com dois cliques."
echo "======================================================="
