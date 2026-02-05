# ENERGOCENTAR Website Redesign Plan

## Design Concept: "Energy Gradient"

Energy certificate rating scale (A+ green → G red) becomes the visual DNA. Editorial typography, scroll-driven motion, dark/light section rhythm, and the energy-bar signature element throughout.

**Fonts**: Jost (display/headings) + DM Sans (body text)
**Dark sections**: Bold contrast — 4-5 dark forest green sections for dramatic rhythm

### Image Note

Placeholder spaces will be left where new imagery could enhance the design (hero backgrounds, section illustrations, decorative elements). These can be filled in afterwards.

---

## Phase 0: Foundation

### 0A. Install framer-motion

```bash
npm install framer-motion
```

### 0B. `app/layout.tsx`

- Add **DM Sans** as second font (body text), Jost becomes display/heading font
- Register both CSS variables: `--font-jost`, `--font-dm-sans`

### 0C. `app/globals.css` — Full token + utility rebuild

- **Background**: `#f5f3f0` (warmer parchment)
- **Foreground**: `#1a1a1a`
- **Primary/secondary greens**: keep `#2c652b` / `#5c9253`
- **New surface-dark**: `#1a3a1a` (deep forest green for dark sections)
- **Energy scale colors**: `--energy-a` through `--energy-g` (emerald → green → lime → yellow → amber → orange → red)
- **Accent**: `#d4552a` (warmer, punchier orange-red)
- **Radius**: `0.75rem`
- Font mapping: `--font-sans` → DM Sans, `--font-display` → Jost

New CSS utilities:

- `.energy-bar` — 4px horizontal gradient bar (green-to-red), signature divider
- `.energy-gradient-text` — gradient text fill using energy scale
- `.glass` / `.glass-dark` — glassmorphism (blur + translucent bg)
- `.gradient-border` — card wrapper with gradient border on hover
- `.gradient-mesh-bg` — animated gradient mesh background for heroes
- `.section-energy-divider` — full-width section separator
- Updated `.nav-link::after` — gradient underline
- `body::after` — subtle grain/noise texture overlay (inline SVG, opacity 0.03)
- Remove unused `.dark` theme and sidebar variables

---

## Phase 1: New Shared Motion Components

### 1A. `components/motion-wrapper.tsx` (new, client)

- Scroll-triggered animation wrapper using `useInView`
- Variants: fade-up, fade-in, slide-left, slide-right, scale-up
- Props: animation, delay, duration, once

### 1B. `components/stagger-wrapper.tsx` (new, client)

- `StaggerWrapper` — parent container with staggerChildren
- `StaggerItem` — child with fade-up variant
- Used by service cards, trust stats, process steps

### 1C. `components/animated-counter.tsx` (new, client)

- Animates numeric values (e.g. "500+", "48h") counting up from 0
- Uses `useSpring` + `useMotionValue` from framer-motion
- Triggers on scroll into view

---

## Phase 2: Header + Footer

### 2A. `components/header.tsx`

- Fixed energy-bar (3px) at very top of page (`z-60`)
- Header becomes glassmorphism (`.glass`), positioned at `top-[3px]`
- Remove border-b, use subtle shadow instead
- Height increase: h-16 → h-18
- Nav links: `font-display text-base font-medium tracking-tight`
- CTA button: `rounded-full` with accent shadow
- Mobile sheet: energy-bar at top, updated styling

### 2B. `components/footer.tsx`

- Background: `bg-surface-dark` (deep forest green)
- Energy-bar as top divider (replaces border-t)
- Large editorial statement (company description in Jost 3xl-4xl, white)
- Column grid with subtle separators
- Second energy-bar above copyright
- Typography: headings `font-display`, body DM Sans

---

## Phase 3: Homepage Sections

### 3A. `components/hero-section.tsx` → client component

- Animated gradient-mesh background + hero image at 20% opacity
- **[IMAGE PLACEHOLDER: hero background — could use a new atmospheric Zagreb/architecture photo]**
- Parallax on scroll (`useScroll`/`useTransform`)
- Massive display title (7xl-9xl), "Energetski certifikati" in `energy-gradient-text`
- Badge + subtitle + CTAs in a `glass-dark` card, positioned bottom-right on desktop
- Floating decorative geometric shapes with parallax
- Energy-bar at bottom edge
- Fade-up + slide-in entrance animations

### 3B. `components/trust-section.tsx` → client component

- Background: `bg-surface-dark` (dark green)
- Animated counters (`AnimatedCounter`)
- Mini energy-bars below each stat value
- Cards: translucent dark glass (`bg-white/5 border-white/10 backdrop-blur`)
- Icons: `text-energy-c` on `bg-energy-a/20`
- StaggerWrapper animation
- Centered energy-bar below section heading

### 3C. `components/services-section.tsx`

- `gradient-border` cards (gradient appears on hover)
- Hover lift + glow: `-translate-y-2 shadow-xl shadow-energy-a/10`
- **[IMAGE PLACEHOLDER: service card images — could use new images per service]**
- Image overlay: subtle energy-tinted gradient
- Icon badge: glass treatment
- Arrow animates right on hover
- StaggerWrapper
- Heading: `font-display` + centered energy-bar

### 3D. `components/process-section.tsx` → client component

- Background: `gradient-mesh-bg` (animated)
- Horizontal timeline with energy-gradient connector lines
- Connectors animate width 0→full on scroll
- Larger step circles with glow ring
- Steps stagger in
- Mobile: vertical line connector

### 3E. `components/location-section.tsx`

- Energy gradient overlay on image
- **[IMAGE PLACEHOLDER: Zagreb panorama — could use a higher-quality aerial photo]**
- Overlapping layout: content overlaps image by ~60px
- Area chips as pills with gradient borders
- MotionWrapper: image slide-left, content slide-right

### 3F. `components/about-text-section.tsx`

- Background: gradient `surface-dark` → `primary`
- White text, bold keywords in `energy-gradient-text`
- Larger font: `text-2xl sm:text-3xl lg:text-4xl font-display`
- Decorative quotation marks at ~10% opacity
- Small centered energy-bar
- MotionWrapper fade-in

### 3G. `components/cta-section.tsx`

- Energy-bar as top border
- **[IMAGE PLACEHOLDER: optional decorative background element or illustration]**
- Typography: `font-display`, larger
- Primary CTA: pulsing shadow glow
- Secondary button: gradient border on hover
- MotionWrapper fade-up, button stagger

---

## Phase 4: Service Page Components

### 4A. `components/service-hero.tsx` → client component

- Same treatment as homepage hero: gradient-mesh bg, image overlay at reduced opacity
- **[IMAGE PLACEHOLDER: each service page has its own hero image — could upgrade these]**
- Ultra-large title, glass-dark CTA card
- Icon badge: glassmorphism with energy-gradient ring
- Energy-bar at bottom, parallax

### 4B. `components/service-what-is.tsx`

- `gradient-border` on highlight card
- Number badges cycle through energy-scale colors
- `font-display` headings
- MotionWrapper: slide-left / slide-right for columns
- Preparation card: subtle amber tint to differentiate

### 4C. `components/service-process.tsx`

- Same treatment as homepage ProcessSection (gradient-mesh bg, animated connectors, stagger)

### 4D. `components/service-deliverables.tsx`

- Check icons cycle through energy-scale colors
- **[IMAGE PLACEHOLDER: deliverable document images — could use better photos]**
- Image: shadow + slight hover rotation
- Checklist in subtle glass card
- MotionWrapper for image + stagger for list items

### 4E. `components/service-faq-teaser.tsx`

- Energy-bar as top border (replaces border-t)
- Open accordion items get energy-gradient left-border
- Icon badge: glass treatment
- MotionWrapper for header, stagger for accordion

---

## Phase 5: Content Pages

### 5A. `app/faq/page.tsx`

- Hero: `font-display`, energy-bar below heading, glass icon badge, subtle green tint bg
- FAQ groups: colored left-border per group (green, amber, orange)
- Accordion: gradient left-border on open
- MotionWrapper per group

### 5B. `app/cjenik/page.tsx`

- Pricing cards: `gradient-border`, colored left-border per service
- Price values: `font-display`
- StaggerWrapper for cards
- Price factors: `bg-surface-dark` with white text
- Energy-bar between sections

### 5C. `app/o-nama/page.tsx`

- Hero: `font-display`, energy-bar
- **[IMAGE PLACEHOLDER: potential team/office photo or about illustration]**
- Values: `bg-surface-dark`, energy-scale colored icons, StaggerWrapper
- Services cards: `gradient-border`
- Company info: editorial `font-display` treatment

### 5D. `app/kontakt/page.tsx`

- Hero: `font-display`, energy-bar
- Contact icons: energy-scale colors per type
- Steps: number badges cycle through energy colors, stagger
- Company info: `bg-surface-dark`

### 5E. Legal pages (`privatnost`, `kolacici`, `uvjeti`)

- Minimal: `font-display` on headings, energy-bar below hero heading, glass icon badge
- No motion animations (legal pages = instant, clean)
- Remain server components

---

## Phase 6: UI Component Updates

### 6A. `components/ui/button.tsx`

- Base: `rounded-md` → `rounded-lg`, add `transition-all duration-200`
- New `energy` variant with gradient border

### 6B. `components/ui/card.tsx`

- Remove default `shadow-sm`, add `hover:shadow-lg transition-shadow duration-300`
- `rounded-xl` → `rounded-2xl`, softer border (`border-border/50`)

### 6C. `components/ui/accordion.tsx`

- Open state: `data-[state=open]:border-l-2 data-[state=open]:border-l-primary data-[state=open]:pl-4`

---

## Phase 7: Page-Level Composition

### 7A. `app/page.tsx`

- Add energy-bar dividers between TrustSection↔ServicesSection, LocationSection↔AboutTextSection

### 7B-D. Service page files

- Add energy-bar dividers between sections where needed

---

## Implementation Order

1. Phase 0 (foundation: deps, fonts, CSS tokens/utilities)
2. Phase 1 (motion components)
3. Phase 6 (UI component updates)
4. Phase 2 (header + footer)
5. Phase 3 (homepage sections)
6. Phase 4 (service page components)
7. Phase 5 (content pages)
8. Phase 7 (page-level dividers)

## Verification

- `npm run build` — ensure no type errors or build failures
- `npm run dev` — visual check on all 11 pages
- Check mobile responsiveness at 375px, 768px, 1024px, 1440px
- Verify all text content unchanged (Croatian copy preserved)
- Verify JSON-LD structured data still renders in page source
- Test scroll animations fire correctly (once, on scroll into view)
- Test header glassmorphism on scroll
- Lighthouse: ensure performance score stays above 90

## Files Modified (26 total)

- `app/globals.css`, `app/layout.tsx`, `app/page.tsx`
- `app/faq/page.tsx`, `app/cjenik/page.tsx`, `app/o-nama/page.tsx`, `app/kontakt/page.tsx`
- `app/privatnost/page.tsx`, `app/kolacici/page.tsx`, `app/uvjeti/page.tsx`
- `app/energetski-certifikati/page.tsx`, `app/procjena-nekretnina/page.tsx`, `app/etaziranje/page.tsx`
- `components/header.tsx`, `components/footer.tsx`
- `components/hero-section.tsx`, `components/trust-section.tsx`, `components/services-section.tsx`
- `components/process-section.tsx`, `components/location-section.tsx`, `components/about-text-section.tsx`
- `components/cta-section.tsx`, `components/service-hero.tsx`, `components/service-what-is.tsx`
- `components/service-process.tsx`, `components/service-deliverables.tsx`, `components/service-faq-teaser.tsx`
- `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/accordion.tsx`

## Files Created (3 new)

- `components/motion-wrapper.tsx`
- `components/stagger-wrapper.tsx`
- `components/animated-counter.tsx`

## Image Placeholders Summary

Locations where new/upgraded images could be added after implementation:

1. **Hero background** (`hero-section.tsx`) — atmospheric Zagreb/architecture photo
2. **Service card images** (`services-section.tsx`) — 3 images, one per service
3. **Zagreb panorama** (`location-section.tsx`) — higher-quality aerial photo
4. **CTA section** (`cta-section.tsx`) — optional decorative background
5. **Service hero images** (`service-hero.tsx`) — one per service page (3 total)
6. **Deliverable images** (`service-deliverables.tsx`) — document/report photos (3 total)
7. **About page** (`o-nama/page.tsx`) — team/office photo or illustration
