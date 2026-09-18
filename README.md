# Expo App Starter Playbook

A reusable, agent-friendly system for generating an independently owned Expo application. It combines
a maintained local template, a pinned upstream snapshot, one project-plan contract, capability
selection, host checks, and guarded release commands.

The runnable generic starter lives in `starter/template`; generated apps copy it and receive their own
Git history. LUMNI remains a proven implementation reference, not a runtime dependency.

## Start here

- Human quick start: [`QUICKSTART.md`](QUICKSTART.md)
- Agent entry point: [`AGENT_START.md`](AGENT_START.md)
- Full technical guide: [`expo-app-starter-playbook.md`](expo-app-starter-playbook.md)
- Owned template: [`starter/README.md`](starter/README.md)
- Template adoption history: [`docs/TEMPLATE_ADOPTION_PLAN.md`](docs/TEMPLATE_ADOPTION_PLAN.md)

## Fastest path

From Git Bash, macOS, or Linux:

```bash
bash start.sh system
cp starter/project-plan.example.json ../my-app-plan.json
# Edit the plan.
bash start.sh create ../my-app --plan ../my-app-plan.json --install
cd ../my-app
bash start.sh run web
```

The generator copies the owned template, applies identity and theme, records the plan/source,
initializes an independent `main` branch, and optionally installs and verifies. It refuses non-empty
targets and does not create or push a remote. The older `bootstrap` command remains available when a
fresh clone of the preserved upstream project is specifically wanted.

For an existing app:

```bash
bash start.sh setup ../existing-app
bash start.sh verify ../existing-app
bash start.sh capabilities list
```

## What is included

| Path | Purpose |
| --- | --- |
| `start.sh` | Entry point for generation, setup, verification, running, capabilities, and releases. |
| `starter/upstream-snapshot/` | Complete pinned Simonstorms source, minus nested Git metadata. |
| `starter/template/` | Generic owned Expo app with UI, local SQL, optional services, scripts, and docs. |
| `starter/generator/` | Deterministic plan validation, copying, identity, and theme application. |
| `scripts/startup/` | Setup automation for existing or direct-upstream projects. |
| `config/capabilities.json` | Opt-in UI, auth, sync, payments, analytics, device, IoT, camera, audio, sensor, and AI catalog. |
| `code/` | Smaller drop-in reference files for existing projects. |

## Core rules

1. Keep the owned template and generator testable; never edit the upstream snapshot as application code.
2. Install one capability at a time and verify after each native/config change.
3. Use a development build for custom native modules and physical devices for hardware evidence.
4. Keep public client configuration separate from server secrets.
5. Never publish, submit, overwrite, or force-push without explicit authority.
6. Preserve the upstream MIT license and pinned source record.

## Requirements

- Git
- Node.js 22.18 or newer
- Bun
- Git Bash on Windows, or Bash on macOS/Linux
- Optional: Android Studio/JDK for local Android builds, macOS/Xcode for local iOS builds, and an Expo
  account for EAS builds/updates

Run `bash start.sh system` for a read-only host report.

## Credits and license

Generated applications are derived from Simonstorms' MIT-licensed Expo App Template. Preserve its
`LICENSE`, pinned source record, and attribution. Review all target-application licenses before
distribution.
