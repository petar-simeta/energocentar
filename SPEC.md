# Energocentar – Web Project Specification (Next.js)

## 1) Goal

Build a modern, minimalist, premium-looking website for a Zagreb-based company offering:

- Energetski certifikati (stanovi, kuće, zgrade, poslovni prostori)
- Procjena vrijednosti nekretnina
- Etažiranje

Primary goals:

- SEO-first: rank well on Google for Croatia, with emphasis on Zagreb + surrounding area
- Lead generation: increase inquiries via phone/email (no form)
- Trust: convey expertise, professionalism, and authority

No CMS.
No blog (for now).
No database.
No admin.

---

## 2) Company Identity (NAP)

Company name: ENERGOCENTAR d.o.o.
OIB: 33876995825
Phone (display): 099 2265 707
Phone (tel href): +385992265707
Email: certifikati@energocentar.com
Service area: Zagreb + okolica Zagreba + cijela Hrvatska
Website: https://www.energocentar.com

---

## 3) Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Minimal client-side JS (Server Components by default)
- Deployment: Vercel (free tier compatible)

---

## 4) Design System

### Visual Style

- Premium, clean, minimalist
- Strong typography, plenty of whitespace
- Images/photos used strategically
- Sticky header

### Colors

- Primary green: #2E6E3E
- Background light: #F6F6E6
- Text: dark green / near-black
- CTA accent: tasteful red/orange (used sparingly)
- Optional deeper green for contrast

### Typography

- Headings: Bricolage Grotesque
- Body: Inter or Poppins
- Clear SEO-friendly heading hierarchy (H1 once per page)

---

## 5) Logo

Two SVGs provided:

1. Icon-only logo
2. Full logo (icon + text)

Placement rules:

- Header: full logo (desktop), optionally icon-only on small screens
- Footer: full logo

File location:

- `/public/brand/logo.svg` (full)
- `/public/brand/logo-icon.svg` (icon)

---

## 6) Sitemap (Routes)

- `/` – Početna
- `/energetski-certifikati`
- `/procjena-nekretnina`
- `/etaziranje`
- `/faq`
- `/cjenik`
- `/o-nama`
- `/kontakt`
- `/privatnost`
- `/kolacici`
- `/uvjeti`

---

## 7) Navigation Requirements

### Desktop navigation

- Do not include "Početna" (logo links to homepage)
- Keep menu compact; must fit in one row
- Allowed to use a dropdown if needed

Implemented structure:

- Usluge (dropdown):
  - Energetski certifikati
  - Procjena nekretnina
  - Etažiranje
- FAQ
- Cjenik
- O nama
- CTA button/link on the right: Kontakt

### Mobile navigation

- Hamburger menu
- Opens a full-screen overlay panel (Sheet component)
- Contains the same items as desktop navigation
- Clear close button and accessible focus handling

---

## 8) Content Management (TypeScript Data Files)

Goal: make page copy easy to update without editing React component JSX directly.

Approach:

- Store page content in TypeScript files under `/content/`
- Content is typed, easy to edit, and imported directly into pages
- No Markdown parsing needed - plain TS objects

Content files:

```
/content/
├── faq.ts                           # FAQ groups and questions
├── cjenik.ts                        # Pricing tables and price factors
├── o-nama.ts                        # About page content (mission, values, services)
└── services/
    ├── energetski-certifikati.ts    # Energy certificate service content
    ├── procjena-nekretnina.ts       # Property valuation service content
    └── etaziranje.ts                # Condominium division service content
```

Each service content file contains:
- `meta` - SEO metadata (title, description, keywords)
- `hero` - Hero section (title, description, image)
- `whatIs` - What is section (title, content paragraphs, highlights)
- `processSteps` - Process steps (iconName, title, description)
- `deliverables` - What client receives (title, description, items, image)
- `faqs` - Service-specific FAQs (question, answer)

Pages import content like:
```typescript
import { energetskiCertifikati } from "@/content/services/energetski-certifikati"
```

Site-wide constants (NAP) are in `/lib/config/site.ts`.

---

## 9) Global Requirements (All Pages)

- Mobile-first, responsive
- Fast loading, optimized images
- One H1 per page
- Section headings with H2/H3
- Prominent CTA(s) focused on phone/email
- Internal links between related pages (services ↔ FAQ ↔ contact)
- Metadata per route (title, description)
- Canonical URLs
- Open Graph

### Header

- Sticky header
- Logo (clickable, links to homepage)
- Primary navigation (compact, must fit in one row on desktop)
- One CTA link/button on the right: "Kontakt" (accent color)
- Header must NOT display phone/email (keep header clean)
- Header must use the full logo from `/public/brand/logo.svg`

### Footer

- Footer must show full NAP:
  - ENERGOCENTAR d.o.o.
  - OIB: 33876995825
  - Phone (click-to-call) + copy icon
  - Email (mailto) + copy icon
  - Service area: Zagreb + okolica Zagreba + Hrvatska
- Legal links in footer

No contact form anywhere.

---

## 10) Homepage Structure

1. Sticky Header (Logo + Navigation + "Kontakt" CTA)
2. Hero (H1) with background image, CTA buttons (phone/email)
3. Services Overview (3 cards linking to service pages)
4. How it works (4 steps)
5. Trust Indicators (experience, expertise, certifications)
6. Local SEO Block (Zagreb + okolica + Hrvatska)
7. CTA Block (phone/email)
8. Footer (NAP + legal links)

---

## 11) Service Pages

Three service pages with identical structure:
- `/energetski-certifikati`
- `/procjena-nekretnina`
- `/etaziranje`

Content loaded from `/content/services/*.ts` files.

Sections (in order):
1. **ServiceHero** - H1, description, background image
2. **ServiceWhatIs** - What it is, why needed, bullet highlights
3. **ServiceProcess** - 4-step process with icons
4. **ServiceDeliverables** - What client receives (list + image)
5. **ServiceFaqTeaser** - 4 FAQs specific to service
6. **CtaSection** - Phone/email CTA

Components used:
- `ServiceHero`, `ServiceWhatIs`, `ServiceProcess`, `ServiceDeliverables`, `ServiceFaqTeaser`, `CtaSection`

---

## 12) FAQ Page

- Groups FAQs by topic (Energetski certifikati, Procjena nekretnina, Etažiranje)
- Uses Accordion component for expandable Q&A
- Content loaded from `/content/faq.ts`
- FAQPage JSON-LD structured data for Google rich results
- Ends with CtaSection

---

## 13) Pricing Page (Cjenik)

- Three pricing tables (one per service)
- Shows "od X €" pricing with "Po dogovoru" for complex cases
- Content loaded from `/content/cjenik.ts`
- Price factors section explaining what affects pricing
- Ends with CtaSection

---

## 14) Contact Page (Kontakt)

No contact form.

Contains:
- Phone (click-to-call) with copy button
- Email (mailto) with copy button
- Working hours
- Service area (Zagreb + okolica + Hrvatska)
- "How to get a quote" steps
- Company info (name, OIB)

---

## 15) SEO & Technical SEO

- Per-route `metadata` in Next.js
- XML sitemap + robots.txt
- `next/image` for images
- Internal linking strategy
- Lighthouse/performance oriented setup

Structured data:
- LocalBusiness JSON-LD on homepage (`/app/page.tsx`)
- FAQPage JSON-LD on `/faq`

Analytics:
- Vercel Analytics (cookieless, always active)
- Google Analytics (loads only after cookie consent)

Cookie consent:
- Minimal banner in bottom-left corner
- Stores choice in localStorage
- GA loads only if accepted

---

## 16) Non-goals

- No blog
- No CMS/admin
- No database
- No auth
- No heavy animations
- No contact forms

---

## 17) Code Organization

```
/app                    # Next.js App Router pages
/components             # React components
  /ui                   # shadcn/ui components
/content                # Content data files (TypeScript)
  /services             # Service page content
/lib
  /config/site.ts       # NAP and site-wide constants
  /utils.ts             # Utility functions (cn)
/public
  /brand                # Logo SVGs
```

Key patterns:
- Pages import content from `/content/*.ts`
- All NAP data comes from `/lib/config/site.ts`
- Icons referenced by string name in content, mapped to Lucide components in pages
- shadcn/ui components in `/components/ui`

---

## 18) Maintenance Notes

- Source of truth:
  - Content lives in `content/` files.
  - NAP data lives in `lib/config/site.ts`.
  - UI patterns and constraints live in `ARCHITECTURE.md`.
- Language rules:
  - Documentation, code comments, class names, and identifiers are in English.
  - Website content remains in Croatian.
- If a change affects scope (e.g., forms, CMS, SSR), update this spec and architecture docs.
- Keep diffs small and focused; avoid refactors unrelated to the task.
- Use `npm run lint` before shipping changes that touch UI or content structure.
