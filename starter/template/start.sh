#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
command="${1:-help}"
if (($#)); then shift; fi

case "$command" in
  setup) bash "$ROOT/scripts/setup.sh" "$@" ;;
  verify) bash "$ROOT/scripts/verify.sh" "$@" ;;
  theme) node "$ROOT/scripts/apply-theme.mjs" "$@" ;;
  run) bash "$ROOT/scripts/run.sh" "$@" ;;
  release) bash "$ROOT/scripts/release.sh" "$@" ;;
  system) node "$ROOT/scripts/check-system.mjs" ;;
  help|-h|--help)
    cat <<'EOF'
Usage: bash start.sh setup|verify|theme|run MODE|release ARGS|system

Modes: web, go, go-tunnel, dev-client, android, ios
Theme: edit PROJECT_PLAN.json, then run `bash start.sh theme`.
EOF
    ;;
  *) echo "Unknown command: $command" >&2; exit 2 ;;
esac
