# Launchpad Expo starter

An owned Expo SDK 57 foundation for shipping unrelated mobile products without inheriting a demo app.
It includes Expo Router, NativeWind and accessible React Native Reusables-style UI primitives,
SQLite/Drizzle, typed API and device boundaries, optional Supabase auth, RevenueCat entitlements,
PostHog analytics, notifications, EAS profiles, checks, and guarded release scripts.

## Start

Requirements: Node 22.18+, Bun, Git, and Git Bash/WSL on Windows.

```bash
bash start.sh setup
bash start.sh run web
# or: bash start.sh run go
```

Edit `PROJECT_PLAN.json`, run `bash start.sh theme`, then replace icons and legal URLs. Use `.env.example`
as the environment contract. With blank service keys the app runs locally in guest mode.

## Verify

```bash
bash start.sh verify
```

This runs host/config checks, Expo Doctor, TypeScript, lint, formatting, unit tests, and dead-code checks.
See `docs/TESTING.md` for native and service-specific gates.

## Where to work

- `src/app/`: routes and navigation gates
- `src/features/`: product feature screens, controllers/hooks, and feature APIs
- `src/components/ui/`: reusable accessible primitives
- `src/data/`: SQLite/Drizzle schema and repository adapters
- `src/core/`: provider-neutral API and hardware contracts
- `src/lib/`: configured infrastructure adapters
- `supabase/`: optional cloud schema, Edge Functions, and security tests

Read `AGENT_START.md` before agent-driven changes and `docs/CAPABILITIES.md` before adding native SDKs.
