#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
node scripts/check-system.mjs
if [[ ! -f .env ]]; then cp .env.example .env; fi
bun install --frozen-lockfile
bash scripts/verify.sh
