# Expo App Starter Playbook

A reusable, agent-friendly system for turning the
[`Simonstorms/expo-app-template`](https://github.com/Simonstorms/expo-app-template) foundation into an
independent Expo application. It combines a proven setup order, reusable code, capability selection,
host checks, and guarded release commands.

This repository is a **playbook and automation kit**, not an application. It uses the LUMNI mobile
project as a proven implementation reference while keeping generated apps generic and independently
owned.

## Start here

- **Human quick start:** [`QUICKSTART.md`](QUICKSTART.md)
- **Agent entry point:** [`AGENT_START.md`](AGENT_START.md)
- **Full technical guide:** [`expo-app-starter-playbook.md`](expo-app-starter-playbook.md)
- **What changed:** [`docs/CHANGELOG.md`](docs/CHANGELOG.md)
- **Template ownership plan:** [`docs/TEMPLATE_ADOPTION_PLAN.md`](docs/TEMPLATE_ADOPTION_PLAN.md)

## Fastest path

From Git Bash, WSL, macOS, or Linux:

```bash
bash start.sh system
bash start.sh bootstrap ../my-app \
  --name "My App" \
  --slug my-app \
  --bundle-id com.example.myapp
cd ../my-app
bunx expo start --web
```

The bootstrap script clones the upstream template, records its exact source commit in `NOTICE`,
removes the upstream Git metadata, initializes a new `main` branch, configures the app identity,
creates `.env` from `.env.example`, installs locked dependencies, and runs verification. It does not
create or push a remote repository.

To work with an existing app instead:

```bash
bash start.sh setup ../existing-app
bash start.sh verify ../existing-app
bash start.sh capabilities list
bash start.sh capabilities show supabase-auth
```

## What is included

| Path | Purpose |
|---|---|
| `start.sh` | Single command/menu entry point for setup, verification, running, capabilities, and releases. |
| `scripts/startup/` | Reusable shell automation and small Node helpers. |
| `config/capabilities.json` | Optional feature catalog: UI, auth, SQLite, sync, payments, analytics, notifications, BLE/IoT, camera, audio, and AI. |
| `code/` | Drop-in NativeWind, environment, storage, haptics, theme, and host-check files. |
| `QUICKSTART.md` | Automated and manual setup instructions. |
| `AGENT_START.md` | Required staged workflow for coding agents. |
| `expo-app-starter-playbook.md` | Detailed architecture, package, and platform reference. |

## Core rules

1. Prove the untouched template works before adding features.
2. Install one capability at a time and rerun verification after each.
3. Use Expo Go only for Expo-Go-compatible modules; use a development build for custom native code.
4. Keep client-visible `EXPO_PUBLIC_*` values separate from server secrets.
5. Never publish, submit, or overwrite a remote without an explicit user decision.
6. Preserve the upstream MIT `LICENSE` and a `NOTICE` containing the source URL and commit.

## Requirements

- Git
- Node.js 22.18 or newer (the current `.mts` tooling requirement; follow the target's `.nvmrc`)
- Bun
- Bash (Git Bash or WSL on Windows)
- Optional: Android Studio/JDK for local Android native builds; macOS/Xcode for local iOS builds;
  an Expo account for EAS cloud builds and updates

Run `bash start.sh system` for a read-only host report.

## Credits and license

Generated applications are derived from Simon Gneuß's MIT-licensed Expo App Template. Preserve its
`LICENSE` and attribution. This playbook's automation and documentation are maintained separately;
review the target application's licenses before distribution.
