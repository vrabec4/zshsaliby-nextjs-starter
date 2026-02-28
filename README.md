# ZS Dolne Saliby - Full Content Redesign

Production-ready school website with fully local content rendering (no embedding, no redirecting to origin).

## Implemented
- Next.js 16 + TypeScript + Tailwind CSS 4
- Functional school website with all major EduPage modules:
  - `/school`
  - `/news`
  - `/calendar`
  - `/timetable`
  - `/substitution`
  - `/teachers`
  - `/forms`
  - `/subjects`
  - `/classrooms`
  - `/kruzky`
  - `/library`
  - `/album`
  - `/contact`
- Each module page contains:
  - local context/highlights
  - locally stored module content from `src/content/edupage-snapshot.json`
- Contact form + API endpoint:
  - `POST /api/contact`
  - zod validation + honeypot field
- SEO baseline:
  - metadata
  - `robots.txt`, `sitemap.xml`, `manifest.webmanifest`
  - JSON-LD organization schema
- Security baseline:
  - CSP and HTTP security headers in `next.config.ts`
- Quality tooling:
  - ESLint, TypeScript checks
  - Playwright + axe tests
  - Lighthouse CI config

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
