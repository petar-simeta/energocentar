# ENERGOCENTAR d.o.o. - Website

Marketing website for a company offering energy certificates, property valuation, and condominium division in Zagreb and across Croatia.

**Live:** https://www.energocentar.com
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

| Script | Description |
|--------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint check |

---

## Project Overview

| Aspect | Details |
|--------|---------|
| Type | Static marketing site, SEO-first |
| Pages | 11 routes (home, 3 services, FAQ, pricing, about, contact, 3 legal) |
| CMS | None - content in TypeScript files |
| Database | None |
| Auth | None |
| Forms | None - phone/email CTA only |
| Analytics | Vercel (cookieless) + GA (after consent) |

---

## File Structure

```
energocentar/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, analytics, cookie banner)
│   ├── page.tsx                  # Homepage
│   ├── energetski-certifikati/   # Service page
│   ├── procjena-nekretnina/      # Service page
│   ├── etaziranje/               # Service page
│   ├── faq/                      # FAQ page
│   ├── cjenik/                   # Pricing page
│   ├── o-nama/                   # About page
│   ├── kontakt/                  # Contact page
│   ├── privatnost/               # Privacy policy
│   ├── kolacici/                 # Cookie policy
│   └── uvjeti/                   # Terms of use
│
├── components/
│   ├── header.tsx                # Sticky header + navigation
│   ├── footer.tsx                # Footer with NAP
│   ├── hero-section.tsx          # Homepage hero
│   ├── cta-section.tsx           # Reusable CTA block
│   ├── cookie-banner.tsx         # Cookie consent (client component)
│   ├── copy-button.tsx           # Copy to clipboard (client component)
│   ├── service-*.tsx             # Service page section components
│   └── ui/                       # shadcn/ui components
│
├── content/                      # Editable content (TypeScript)
│   ├── faq.ts                    # FAQ questions grouped by topic
│   ├── cjenik.ts                 # Pricing tables
│   ├── o-nama.ts                 # About page content
│   └── services/
│       ├── energetski-certifikati.ts
│       ├── procjena-nekretnina.ts
│       └── etaziranje.ts
│
├── lib/
│   ├── config/site.ts            # Company info (NAP), contact details
│   └── utils.ts                  # cn() helper
│
├── public/
│   └── brand/                    # Logo SVGs
│
├── SPEC.md                       # Full project specification
├── ARCHITECTURE.md               # Technical architecture details
└── .env.example                  # Environment variables template
```

---

## Key Files Reference

### Content (most frequently edited)

| File | Content |
|------|---------|
| `lib/config/site.ts` | NAP data (name, tax ID, phone, email) |
| `content/services/*.ts` | Service page content (hero, FAQ, process steps) |
| `content/faq.ts` | Questions and answers for FAQ page |
| `content/cjenik.ts` | Pricing tables and price factors |
| `content/o-nama.ts` | Mission, values, list of services |

### Components (main)

| Component | Description | Client? |
|-----------|-------------|---------|
| `header.tsx` | Sticky nav, dropdown, mobile menu | Partial (Sheet) |
| `footer.tsx` | NAP, legal links, copy buttons | No |
| `cta-section.tsx` | Phone/email CTA block | No |
| `cookie-banner.tsx` | Cookie consent | Yes |
| `copy-button.tsx` | Copy to clipboard + toast | Yes |

### Pages with special logic

| Page | Special |
|------|---------|
| `app/page.tsx` | LocalBusiness JSON-LD |
| `app/faq/page.tsx` | FAQPage JSON-LD, Accordion |
| `app/layout.tsx` | Fonts, Vercel Analytics, Toaster, CookieBanner |

---

## Content Editing Patterns

### Editing service content

```typescript
// content/services/energetski-certifikati.ts
export const energetskiCertifikati = {
  meta: { title, description, keywords },
  hero: { title, description, image },
  whatIs: { title, content: string[], highlights: string[] },
  processSteps: [{ iconName, title, description }],
  deliverables: { title, description, items: string[], image },
  faqs: [{ question, answer }]
}
```

Icons are strings (`"Phone"`, `"FileText"`) mapped to Lucide icons in page files.

### Editing FAQ

```typescript
// content/faq.ts
export const faqGroups = [
  {
    title: "Energetski certifikati",
    faqs: [{ question: "...", answer: "..." }]
  }
]
```

### Editing pricing

```typescript
// content/cjenik.ts
export const pricingTables = [
  {
    title: "Energetski certifikati",
    items: [{ service: "Stan do 50 m²", price: "od 80 €" }],
    note: "Optional note"
  }
]
```

---

## Environment Variables

```bash
# .env.local (create from .env.example)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional, GA loads only after consent
```

---

## Design System

| Element | Value |
|---------|-------|
| Primary | `#2E6E3E` (green) |
| Background | `#F6F6E6` (cream) |
| Accent | `#C45C3E` (orange-red for CTAs) |
| Heading font | Bricolage Grotesque |
| Body font | Inter |

---

## Deployment

Auto-deploy on push to `main` via Vercel.

```bash
git add -A && git commit -m "message" && git push
```

---

## Related Docs

- `SPEC.md` - Full project specification
- `ARCHITECTURE.md` - Technical architecture details
- `CLAUDE.md` - AI assistant instructions
- `CODEX.md` - Codex assistant instructions

---

## Language and Collaboration (Claude Code + Codex)

Guidelines for future development with AI assistants:
- All documentation, code comments, class names, and identifiers must be in English.
- Website content stays in Croatian (copy, headings, and UI text in `content/`).
- Read `README.md`, `ARCHITECTURE.md`, `SPEC.md`, then `CLAUDE.md` and `CODEX.md`.
- Follow the existing content system (`content/`) and NAP source of truth (`lib/config/site.ts`).
- Avoid refactors and new dependencies unless clearly justified.
- Do not change marketing copy unless explicitly requested.
- Prefer small, clean changes and describe them in the task summary.
