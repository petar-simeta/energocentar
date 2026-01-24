# Architecture

Detailed technical documentation for the ENERGOCENTAR website.

---

## Tech Stack Details

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | App Router, SSG |
| React | 19.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| shadcn/ui | latest | UI components |
| Lucide React | latest | Icons |
| Sonner | latest | Toast notifications |
| Vercel Analytics | latest | Cookieless analytics |

---

## Rendering Strategy

All pages are **statically generated (SSG)** at build time:
- No `getServerSideProps` or dynamic rendering
- No API routes
- Content baked into HTML at build
- Fast TTFB, excellent Core Web Vitals

### Guardrails for Future Changes
- Keep routes statically rendered unless there is a strong reason.
- Avoid adding client components; keep interactivity scoped and intentional.
- Do not introduce forms or backend dependencies without updating `SPEC.md`.
- Preserve JSON-LD coverage for homepage and FAQ.
- Keep documentation, comments, class names, and identifiers in English (website content remains Croatian).

---

## Component Architecture

### Server vs Client Components

```
Server Components (default):
├── All page.tsx files
├── header.tsx (wrapper)
├── footer.tsx
├── cta-section.tsx
├── hero-section.tsx
├── service-*.tsx
└── Most UI components

Client Components ("use client"):
├── cookie-banner.tsx      # localStorage, dynamic script loading
├── copy-button.tsx        # navigator.clipboard, toast
├── ui/accordion.tsx       # Radix interactive
├── ui/dropdown-menu.tsx   # Radix interactive
└── ui/sheet.tsx           # Radix interactive (mobile menu)
```

### Component Hierarchy

```
layout.tsx
├── {children} (pages)
├── Toaster (sonner)
├── Analytics (vercel)
└── CookieBanner

page.tsx (example: service page)
├── Header
│   ├── Logo (Link)
│   ├── DropdownMenu (Usluge)
│   ├── Nav links
│   └── Sheet (mobile menu)
├── main
│   ├── ServiceHero
│   ├── ServiceWhatIs
│   ├── ServiceProcess
│   ├── ServiceDeliverables
│   ├── ServiceFaqTeaser
│   └── CtaSection
└── Footer
    ├── Logo
    ├── CopyButton (phone)
    ├── CopyButton (email)
    └── Legal links
```

---

## Content System

### Pattern: Content as TypeScript

Instead of Markdown/MDX, content lives in plain TypeScript objects:

```typescript
// content/services/energetski-certifikati.ts
export const energetskiCertifikati = {
  meta: {
    title: "Energetski certifikati Zagreb | ...",
    description: "...",
    keywords: "..."
  },
  hero: {
    title: "Energetski certifikati",
    description: "...",
    image: "/image.jpg"
  },
  // ... more sections
}
```

**Benefits:**
- Type-safe content
- IDE autocomplete
- No build-time markdown parsing
- Easy to refactor

**Trade-offs:**
- Non-technical users need to edit .ts files
- No rich text formatting (intentional - keeps output predictable)

### Icon String Mapping

Content files use string icon names to avoid importing React components:

```typescript
// In content file
processSteps: [{ iconName: "Phone", title: "..." }]

// In page file
const iconMap: Record<string, LucideIcon> = { Phone, FileText, ... }
const Icon = iconMap[step.iconName]
```

---

## Site Configuration

### NAP (Name, Address, Phone)

All company info centralized in one file:

```typescript
// lib/config/site.ts
export const siteConfig = {
  name: "ENERGOCENTAR d.o.o.",
  shortName: "ENERGOCENTAR",
  oib: "33876995825",
  phone: {
    display: "099 2265 707",
    href: "+385992265707"
  },
  email: "certifikati@energocentar.com",
  url: "https://www.energocentar.com",
  description: "...",
  areaServed: ["Zagreb", "Zagrebačka županija", "Hrvatska"]
}
```

Used everywhere via import:
```typescript
import { siteConfig } from "@/lib/config/site"
```

---

## Styling

### Tailwind Configuration

Custom colors defined in `app/globals.css` as CSS variables:

```css
:root {
  --background: 60 33% 93%;      /* #F6F6E6 cream */
  --foreground: 147 41% 20%;     /* dark green */
  --primary: 147 41% 30%;        /* #2E6E3E green */
  --accent: 15 53% 51%;          /* #C45C3E orange */
  /* ... */
}
```

### Typography

```css
--font-inter: Inter (body)
--font-bricolage: Bricolage Grotesque (headings)
```

Usage:
```tsx
<h1 className="font-serif">...</h1>  // Bricolage
<p className="font-sans">...</p>     // Inter (default)
```

---

## SEO Implementation

### Per-Page Metadata

Each page exports metadata:

```typescript
export const metadata: Metadata = {
  title: "Page Title | ENERGOCENTAR d.o.o.",
  description: "...",
  keywords: "..."
}
```

### Structured Data (JSON-LD)

**Homepage - LocalBusiness:**
```typescript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ENERGOCENTAR d.o.o.",
  "telephone": "+385992265707",
  "email": "certifikati@energocentar.com",
  "areaServed": ["Zagreb", ...],
  "url": "https://www.energocentar.com"
}
</script>
```

**FAQ Page - FAQPage:**
```typescript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{ "@type": "Question", ... }]
}
</script>
```

---

## Analytics & Privacy

### Vercel Analytics
- Cookieless, GDPR-compliant
- Always active
- No consent required

### Google Analytics
- Loads only after cookie consent
- Controlled by `CookieBanner` component
- Stores consent in `localStorage` (not a cookie)

```typescript
// Cookie consent flow
1. User visits → check localStorage("cookie-consent")
2. If null → show banner
3. If "accepted" → load GA script
4. If "declined" → do nothing
```

---

## shadcn/ui Components Used

| Component | File | Usage |
|-----------|------|-------|
| Button | `ui/button.tsx` | CTAs, nav |
| Accordion | `ui/accordion.tsx` | FAQ |
| DropdownMenu | `ui/dropdown-menu.tsx` | Usluge nav |
| Sheet | `ui/sheet.tsx` | Mobile menu |
| Card | `ui/card.tsx` | Service cards |

All from Radix UI primitives, styled with Tailwind.

---

## Build & Deploy

### Build Process
```bash
npm run build
# → next build
# → Static HTML generated for all routes
# → Output in .next/
```

### Deployment
- Connected to Vercel
- Auto-deploy on push to `main`
- Preview deploys on PRs
- Domain: www.energocentar.com

### Environment Variables
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional
```

---

## Common Tasks

### Add a new FAQ question
1. Edit `content/faq.ts`
2. Add to appropriate group's `faqs` array
3. Commit & push

### Change pricing
1. Edit `content/cjenik.ts`
2. Update `pricingTables` array
3. Include "od" prefix for range prices
4. Use "Po dogovoru" for variable pricing

### Add new service page
1. Create `content/services/new-service.ts` (copy existing structure)
2. Create `app/new-service/page.tsx` (copy existing service page)
3. Update navigation in `header.tsx`
4. Add to FAQ groups if needed

### Change contact info
1. Edit `lib/config/site.ts`
2. All pages automatically use new values

---

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Pages | `app/{route}/page.tsx` | `app/faq/page.tsx` |
| Components | kebab-case | `cookie-banner.tsx` |
| Content | kebab-case | `energetski-certifikati.ts` |
| UI components | lowercase | `ui/button.tsx` |
