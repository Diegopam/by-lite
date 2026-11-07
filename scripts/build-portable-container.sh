#!/usr/bin/env bash
set -e

# ==============================================================================
# by-lite — Build Portable Runtime via Podman (Ubuntu 24.04 LTS / glibc 2.39)
# ==============================================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

echo "======================================================="
echo "   by-lite — Compilador do Runtime Portatil (Podman)   "
echo "======================================================="
echo "[by-lite] Diretorio raiz: $PROJECT_ROOT"

if ! command -v podman >/dev/null 2>&1 && ! command -v docker >/dev/null 2>&1; then
    echo "[by-lite] Erro: Nem 'podman' nem 'docker' foram encontrados no sistema."
    exit 1
fi

ENGINE="podman"
if ! command -v podman >/dev/null 2>&1; then
    ENGINE="docker"
fi

echo "[by-lite] Utilizando ferramenta de container: $ENGINE"
mkdir -p dist

# 1. Build container image with full WPE WebKit 2.0 and by-lite
echo "[by-lite] Compilando imagem do runtime hermetico... (isso pode levar algum tempo)"
"$ENGINE" build -t by-lite-portable-builder -f scripts/Dockerfile.portable-builder .

# 2. Extract distribution archive
echo "[by-lite] Extraindo pacote gerado para ./dist/by-lite-portable-linux-x86_64.tar.gz..."
CONTAINER_ID=$("$ENGINE" create by-lite-portable-builder)
"$ENGINE" cp "${CONTAINER_ID}:/dist/by-lite-portable-linux-x86_64.tar.gz" "./dist/by-lite-portable-linux-x86_64.tar.gz"
"$ENGINE" rm "${CONTAINER_ID}"

echo "======================================================="
echo "[by-lite] Sucesso! Pacote gerado com exito:"
ls -lh ./dist/by-lite-portable-linux-x86_64.tar.gz
echo "======================================================="
echo "Voce pode distribuir este arquivo para qualquer instalacao do Zorin OS ou Debian/Ubuntu."
