# ZS Dolne Saliby Production Redesign

Production-ready redesign baseline for a school website, with source content mapped from:
`https://zsdolnesaliby.edupage.org/`

## What is implemented
- Next.js 16 App Router + TypeScript + Tailwind CSS 4
- Production app shell (responsive header, section templates, footer)
- Structured section routes:
  - `/school`
  - `/news`
  - `/calendar`
  - `/timetable`
  - `/teachers`
  - `/kruzky`
  - `/contact`
- SEO baseline:
  - route metadata
  - `robots.ts`
  - `sitemap.ts`
  - `manifest.ts`
  - JSON-LD organization schema
- Security baseline:
  - CSP and core security headers in `next.config.ts`
- Contact flow:
  - validated client form
  - validated API endpoint: `POST /api/contact`
  - honeypot anti-bot field
- CI quality gates:
  - lint
  - typecheck
  - build
  - Playwright + axe checks

## Quick start
```bash
nvm use 24.13.1
npm install
cp .env.example .env.local
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Open `http://127.0.0.1:3001`.

## Commands
- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run test:e2e`
- `npm run lhci`

## Source and migration note
Current page copy is intentionally sourced from `zsdolnesaliby.edupage.org` and structured for later CMS migration.
