# Architecture

Detailed technical documentation for the ENERGOCENTAR website.

---

## Tech Stack Details

| Technology       | Version | Purpose              |
| ---------------- | ------- | -------------------- |
| Next.js          | 16.x    | App Router, SSG      |
| React            | 19.x    | UI framework         |
| TypeScript       | 5.x     | Type safety          |
| Tailwind CSS     | 4.x     | Styling              |
| shadcn/ui        | latest  | UI components        |
| Lucide React     | latest  | Icons                |
| Sonner           | latest  | Toast notifications  |
| Vercel Analytics | latest  | Cookieless analytics |

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
├── analytics-consent.tsx  # gates analytics by consent
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
├── AnalyticsConsent (vercel)
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

## Analytics & Privacy

### Vercel Analytics

- Cookieless, GDPR-compliant
- Enabled after consent (paired with CookieBanner)

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
