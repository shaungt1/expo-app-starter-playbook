#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
mode="${1:-}"
if (($#)); then shift; fi
cd "$ROOT"
case "$mode" in
  web) bunx expo start --web "$@" ;;
  go) bunx expo start --go "$@" ;;
  go-tunnel) bunx expo start --go --tunnel "$@" ;;
  dev-client) bunx expo start --dev-client "$@" ;;
  android) bunx expo run:android "$@" ;;
  ios) bunx expo run:ios "$@" ;;
  *) echo 'Usage: bash scripts/run.sh web|go|go-tunnel|dev-client|android|ios' >&2; exit 2 ;;
esac
