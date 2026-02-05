# Energocentar – Web Project Specification (Next.js)

## 1) Goal

Build a modern, unique, premium-looking website for a Zagreb-based company offering:

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

- Premium, clean, unique
- Strong typography, plenty of whitespace
- Images/photos used strategically
- Sticky header

### Colors

- Primary/secondary greens: `#2c652b` / `#5c9253`

### Typography

- Jost (display/headings) + DM Sans (body text)
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

## 8) Global Requirements (All Pages)

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
  - Adress + link to Google maps
  - OIB: 33876995825
  - Phone (click-to-call) + copy icon
  - Email (mailto) + copy icon
  - Service area: Zagreb + okolica Zagreba + Hrvatska
- Legal links in footer

No contact form anywhere.

## 9) FAQ Page

- Groups FAQs by topic (Energetski certifikati, Procjena nekretnina, Etažiranje)
- Uses Accordion component for expandable Q&A
- Content loaded from `/content/faq.ts`
- FAQPage JSON-LD structured data for Google rich results
- Ends with CtaSection

## 10) SEO & Technical SEO

- Per-route `metadata` in Next.js
- XML sitemap + robots.txt
- `next/image` for images
- Internal linking strategy
- Lighthouse/performance oriented setup

Structured data:

- LocalBusiness JSON-LD on homepage (`/app/page.tsx`)
- FAQPage JSON-LD on `/faq`

Analytics:

- Vercel Analytics (cookieless, enabled after consent)
- Google Analytics (loads only after cookie consent)

Cookie consent:

- Minimal banner in bottom-left corner
- Stores choice in localStorage
- GA loads only if accepted

---

## 11) Non-goals

- No blog
- No CMS/admin
- No database
- No auth
- No contact forms

---

## 12) Maintenance Notes

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
