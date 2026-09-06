# Expo App Starter Stack

> Production-ready Expo + React Native (TypeScript) starter stack for cross-platform iOS & Android apps.
> Batteries included: NativeWind/Tailwind dark-mode theming, React Native Reusables UI, Expo Router,
> Supabase auth, Drizzle + SQLite, plus an Expo Go & dev-build setup guide with every common pitfall
> already solved.

---

## What this is

A **repeatable foundation for building new mobile apps** on a proven Expo + React Native stack. Instead
of starting from scratch (and re-hitting the same setup and Expo Go vs. development-build pitfalls), you
fork one base template, follow the setup guide here, and reach a **running, themed, batteries-included
app foundation** before designing a single product screen.

Use it yourself, or hand it to an AI agent: *"Build a new mobile app with these features using this
stack,"* point them at the guide, and they set everything up correctly first, then build screens.

## What's inside this repo

| Path | Purpose |
|---|---|
| [`expo-app-starter-playbook.md`](expo-app-starter-playbook.md) | The full setup guide: base repo, install steps, Expo Go vs. dev-build guards, theme planning, screen/logic phase, and an appendix of proven packages/services. |
| [`code/`](code/) | Drop-in reusable files (environment + storage guards, NativeWind config, design tokens, a host system-check script) to copy into a new project. |

## How to use it (the flow)

The guide is ordered on purpose — do not skip ahead to screens:

1. **Set up the repo** — fork the base template, detach its Git history, make it your own project,
   install the foundation packages, wire the UI, choose Expo Go or a development build, and **confirm the
   empty app runs.**
2. **Define the theme** — answer the brand/color questions, apply the tokens, confirm light/dark.
3. **Build screens, APIs & logic** — mock-first, reusing what the template already ships.
4. **Pull packages as needed** — from the categorized appendix tables.

Full details, commands, and links are in [`expo-app-starter-playbook.md`](expo-app-starter-playbook.md).

## Quick start

```bash
# 1. Fork the base template into your app folder and detach it
git clone https://github.com/Simonstorms/expo-app-template.git <your-app>
cd <your-app> && rm -rf .git && git init && git branch -M main

# 2. Install + verify (see the guide for the dedupe/trust steps)
bun install && bunx expo-doctor && bun run typecheck && bun run lint

# 3. Configure env (empty is fine for the demo) and run
cp .env.example .env
bunx expo start --web     # fastest preview; or --tunnel for Expo Go on a phone
```

> Then follow the guide from **Section 1.5** onward to add the UI foundation, theme, and screens.

## Key things to know first

- **Two ways to run:** *Expo Go* (quick, standard-SDK apps only) vs. a *development build* (required
  once you add custom native modules like Bluetooth, camera, Skia, or on-device AI). The guide explains
  both and includes the guards that let one codebase run on web, Expo Go, and a dev build.
  See: https://docs.expo.dev/develop/development-builds/introduction/
- **Confirm the foundation runs before building screens.** The most common failure is stacking packages
  and screens before ever launching the app.
- **Keep secrets out of Git.** `.env` and any token files stay git-ignored.

## Maintaining this stack

The appendix package/service tables are a living menu of **proven-working** dependencies. When you adopt
or retire a package on a real project, **update the tables** so the list stays a reliable source for the
next app.

## Credits & license

Built on the MIT-licensed [`Simonstorms/expo-app-template`](https://github.com/Simonstorms/expo-app-template).
Retain its `LICENSE`/`NOTICE` when you fork. This starter documentation and the `code/` helpers are
provided for internal reuse.
