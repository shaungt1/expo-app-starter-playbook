#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
node scripts/check-system.mjs
node scripts/check-config.mjs
bunx expo-doctor
bun run typecheck
bun run lint
bun run format:check
bun run test:unit
bun run knip
