#!/usr/bin/env bash
set -e

# ==============================================================================
# by-lite Portable Runtime — Universal One-Line Installer
# ==============================================================================
# Installs by-lite with bundled WPE WebKit 2.0 without requiring package managers
# or root/sudo privileges. Compatible with Zorin OS, Ubuntu, Debian, Arch, Fedora.
# ==============================================================================

echo "======================================================="
echo "   by-lite Portable Runtime — Instalador Universal     "
echo "   (Motor WPE WebKit 2.0 Embutido para Zorin OS)       "
echo "======================================================="

REPO="Diegopam/by-lite"
INSTALL_DIR="$HOME/.local/share/by-lite"
BIN_DIR="$HOME/.local/bin"
TMP_DIR="$(mktemp -d)"

cleanup() {
    rm -rf "$TMP_DIR"
}
trap cleanup EXIT

mkdir -p "$BIN_DIR" "$INSTALL_DIR"

# Check if local tarball was provided as argument
BUNDLE_FILE=""
if [ -n "$1" ] && [ -f "$1" ]; then
    BUNDLE_FILE="$1"
    echo "[by-lite] Utilizando pacote local: $BUNDLE_FILE"
elif [ -f "./dist/by-lite-portable-linux-x86_64.tar.gz" ]; then
    BUNDLE_FILE="./dist/by-lite-portable-linux-x86_64.tar.gz"
    echo "[by-lite] Utilizando pacote compilado localmente em ./dist/"
fi

if [ -z "$BUNDLE_FILE" ]; then
    echo "[by-lite] Baixando a versao mais recente do runtime portatil no GitHub..."
    LATEST_URL="https://github.com/${REPO}/releases/latest/download/by-lite-portable-linux-x86_64.tar.gz"

    if command -v curl >/dev/null 2>&1; then
        curl -fsSL "$LATEST_URL" -o "$TMP_DIR/bundle.tar.gz" || true
    elif command -v wget >/dev/null 2>&1; then
        wget -q "$LATEST_URL" -O "$TMP_DIR/bundle.tar.gz" || true
    fi

    if [ ! -f "$TMP_DIR/bundle.tar.gz" ] || [ ! -s "$TMP_DIR/bundle.tar.gz" ]; then
        echo "[by-lite] Erro ao baixar release. Baixe manualmente de: https://github.com/${REPO}/releases"
        exit 1
    fi
    BUNDLE_FILE="$TMP_DIR/bundle.tar.gz"
fi

echo "[by-lite] Extraindo motor WPE WebKit 2.0 e executaveis..."
tar -xzf "$BUNDLE_FILE" -C "$TMP_DIR"

echo "[by-lite] Instalando em $INSTALL_DIR..."
rm -rf "$INSTALL_DIR"/*
cp -r "$TMP_DIR/by-lite-portable"/* "$INSTALL_DIR/"

ln -sf "$INSTALL_DIR/by-lite" "$BIN_DIR/by-lite"
chmod +x "$BIN_DIR/by-lite"

# Register MIME types and desktop handlers
echo "[by-lite] Registrando tipo MIME e associacoes FreeDesktop..."
"$BIN_DIR/by-lite" install-mime

# Ensure ~/.local/bin is in PATH
if ! echo "$PATH" | tr ':' '\n' | grep -qx "$BIN_DIR"; then
    echo "[by-lite] Adicionando $BIN_DIR ao PATH..."
    echo "export PATH=\"\$HOME/.local/bin:\$PATH\"" >> "$HOME/.bashrc"
    if [ -f "$HOME/.zshrc" ]; then
        echo "export PATH=\"\$HOME/.local/bin:\$PATH\"" >> "$HOME/.zshrc"
    fi
    export PATH="$BIN_DIR:$PATH"
fi

echo ""
echo "======================================================="
echo "by-lite instalado com sucesso em $BIN_DIR/by-lite!"
echo "Motor WPE WebKit 2.0 portatil pronto para uso imediato no Zorin OS."
echo "======================================================="
