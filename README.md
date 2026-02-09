# ENERGOCENTAR d.o.o. - Website

Marketing website for a company offering energy certificates, property valuation, and condominium division in Zagreb and across Croatia.

**Live:** https://www.energocentar.hr
**Stack:** Next.js 16, TypeScript, Tailwind CSS, shadcn/ui
**Hosting:** Vercel

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
```

### Scripts

| Script          | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Local dev server        |
| `npm run build` | Production build        |
| `npm run start` | Start production server |
| `npm run lint`  | ESLint check            |

---

## Project Overview

| Aspect    | Details                                                             |
| --------- | ------------------------------------------------------------------- |
| Type      | Static marketing site, SEO-first                                    |
| Pages     | 11 routes (home, 3 services, FAQ, pricing, about, contact, 3 legal) |
| CMS       | None - content in TypeScript files                                  |
| Database  | None                                                                |
| Auth      | None                                                                |
| Forms     | None - phone/email CTA only                                         |
| Analytics | Vercel (cookieless, consent-gated) + GA (after consent)             |

---

## Environment Variables

```bash
# .env.local (create from .env.example)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Required for GA, loaded only after consent
```

---

## Deployment

Auto-deploy on push to `main` via Vercel.

```bash
git add -A && git commit -m "message" && git push
```
