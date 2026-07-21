# AGENTS.md

## Cursor Cloud specific instructions

This repo (`menintrees`) is a React 19 + TypeScript single-page web app built with Vite, Tailwind CSS v4, and GSAP animations. It is a static marketing site for an arborist studio (no backend).

Standard commands live in `package.json` scripts:
- Dev server: `npm run dev` (Vite, defaults to port 5173). Pass `-- --host 0.0.0.0 --port 5173` when you need it reachable outside localhost.
- Lint: `npm run lint` (ESLint flat config in `eslint.config.js`).
- Build: `npm run build` (`tsc -b` then `vite build`, output in `dist/`).

Notes:
- Dependencies (`npm install`) are refreshed automatically by the Cloud Agent update script; you normally do not need to reinstall.
- The React Compiler / Babel plugin is enabled in `vite.config.ts`, which slows dev and build slightly — this is expected.
- `@` is aliased to `./src` (see `vite.config.ts`).
