# ZS Horne Saliby Next.js Starter

Modern starter repository aligned with the redesign architecture.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Sanity client scaffolding
- React Hook Form + Zod validation
- Sentry integration hooks
- Plausible analytics hook
- Playwright + axe accessibility tests
- Lighthouse CI config

## Quick start
```bash
nvm use 24.13.1
npm install
cp .env.example .env.local
npm run dev
```

Open `http://127.0.0.1:3000`.

## Project structure
- `src/app`: application routes and global styling
- `src/components`: reusable UI and form components
- `src/lib/sanity`: Sanity client + image helper
- `tests`: Playwright end-to-end checks
- `.github/workflows/ci.yml`: lint/typecheck/build/e2e pipeline

## Environment variables
Use `.env.example` as baseline.

## Commands
- `npm run dev`: local dev server
- `npm run lint`: ESLint checks
- `npm run typecheck`: TypeScript checks
- `npm run build`: production build
- `npm run test:e2e`: Playwright tests
- `npm run lhci`: Lighthouse CI run
