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
- `/energetski-certifikat`
- `/procjena-nekretnine`
- `/etaziranje`
- `/faq`
- `/cjenik`
- `/o-nama`
- `/kontakt`
- `/privatnost`
- `/kolacici`
- `/uvjeti`

---

## Navigation Requirements

### Desktop navigation

- Do not include "Početna" (logo links to homepage)
- Keep menu compact; must fit in one row
- Allowed to use a dropdown if needed

Recommended structure:

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
- Opens a full-screen overlay panel
- Contains the same items as desktop navigation:
  - Usluge (expandable section or list)
  - FAQ
  - Cjenik
  - O nama
  - Kontakt
- Clear close button and accessible focus handling

---

## 7) Global Requirements (All Pages)

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
- Header must use the full logo (icon + text) from `/public/brand/logo.svg`
- Icon-only logo (`logo-icon.svg`) must NOT be used in the header
- Icon-only logo may be used in other contexts if needed (e.g. mobile menu toggle), but not as the primary header logo

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

## 8) Content Management (Editable Markdown Per Page)

Goal: make page copy easy to update by non-developers without editing React components.

Approach:

- Store page text content in human-readable Markdown files.
- One file per page under `/content/pages/`.

Required files:

- `/content/pages/home.md`
- `/content/pages/energetski-certifikat.md`
- `/content/pages/procjena-nekretnine.md`
- `/content/pages/etaziranje.md`
- `/content/pages/faq.md`
- `/content/pages/cjenik.md`
- `/content/pages/o-nama.md`
- `/content/pages/kontakt.md`
- `/content/pages/privatnost.md`
- `/content/pages/kolacici.md`
- `/content/pages/uvjeti.md`

Implementation:

- Pages load Markdown on the server and render it (SEO-friendly).
- Keep layout/sections in React, but page copy (headings/paragraphs/bullets) comes from Markdown wherever practical.
- Avoid complex MDX components for now; keep it simple Markdown.
- Provide helper `getPageContent(slug)` to read and parse markdown.

---

## 9) Homepage Structure

1. Sticky Header

   - Logo (links to homepage)
   - Navigation
   - CTA: "Kontakt"

2) Hero (H1)

   - Clear promise + short supporting copy
   - Primary CTA: “Nazovi” + secondary “Pošalji email” (no form)

3) Services Overview (3 cards)

   - Energetski certifikati
   - Procjena vrijednosti nekretnina
   - Etažiranje

4) How it works (3–4 steps)

5) Trust Indicators

   - Iskustvo, stručnost, ovlaštenja (placeholder)

6) Local SEO Block

   - Zagreb + okolica + Hrvatska

7) CTA Block

8) Footer
   - ENERGOCENTAR d.o.o., OIB
   - phone/email with copy icons
   - legal links

---

## 10) Service Pages (Template)

Applies to:

- Energetski certifikat
- Procjena nekretnine
- Etažiranje

Sections:

1. Service hero (H1 + CTA via phone/email)
2. What it is
3. Why it’s needed
4. Process steps
5. What client receives
6. FAQ teaser + link
7. CTA block

Tone: professional but approachable.

---

## 11) FAQ Page

- Group by topic
- Plain Croatian answers
- CTA at end
- Add FAQ structured data JSON-LD

---

## 12) Pricing (Cjenik)

- Show ranges / “od”
- Explain what affects price
- CTA to request a quote via phone/email

---

## 13) Contact Page

No contact form.

Required:

- Phone (click-to-call): tel:+385992265707
- Email (mailto): certifikati@energocentar.com
- Copy-to-clipboard icons next to both
- Mention Zagreb + okolica + Hrvatska

---

## 14) SEO & Technical SEO

- Per-route `metadata` in Next.js
- XML sitemap + robots.txt
- `next/image` for images
- Internal linking strategy
- Lighthouse/performance oriented setup

Structured data:

- LocalBusiness JSON-LD on homepage (`/app/page.tsx`)
- FAQPage JSON-LD on `/faq`

Local SEO:

- Mention Zagreb naturally (not spammy)
- Keep NAP consistent everywhere

LocalBusiness JSON-LD (minimum, no address yet):
{
"@context":"https://schema.org",
"@type":"LocalBusiness",
"name":"ENERGOCENTAR d.o.o.",
"telephone":"+385992265707",
"email":"certifikati@energocentar.com",
"areaServed":["Zagreb","Zagrebačka županija","Hrvatska"],
"url":"https://www.energocentar.com"
}

---

## 15) Non-goals

- No blog
- No CMS/admin
- No database
- No auth
- No heavy animations

---

## 16) Code Organization Rules

- `/app` for routes
- `/components` for reusable components
- `/components/ui` for shadcn/ui
- `/content/pages` contains editable page copy (Markdown)
- Create server-side content loader in `/src/lib/content.ts`
- Create site config constants in `/src/config/site.ts` (NAP/contact)
- Tailwind preferred, minimal custom CSS
