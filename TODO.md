# TODO (remove each item from this list as it gets resolved)

## P0 - Critical (SEO foundations / indexing)

### Web (tehnicki)
- Fix canonical domain strategy: use one canonical host everywhere (recommended: `https://energocentar.hr`) in metadata, OpenGraph URLs, JSON-LD, `robots.txt`, and `sitemap.xml`.
- Resolve `www` behavior as permanent redirect (308) to canonical host.
: Best practice on Vercel: set primary domain, add `www` as redirect domain, verify redirect code is permanent (not temporary), and ensure canonical tags match final destination host.
- Resolve `.com` domain strategy and redirects to `.hr`.
: Ensure both `http/https` and `www/non-www` variants of `.com` permanently redirect to canonical `.hr` URLs.
- Generate `lastModified` dynamically in sitemap (no hardcoded date).

### Za tebe (operativa)
- Contact POSLUH and resolve `.com` hosting/domain + SSL + redirect plan before hosting expiry in April.
- Confirm canonical domain decision (`energocentar.hr` vs `www.energocentar.hr`) so all web settings can be aligned once.

## P1 - High impact (rich results, CTR, internal linking)

### Web (tehnicki)
- Create unique OG images for service pages (`/energetski-certifikati`, `/procjena-nekretnina`, `/etaziranje`) and optionally core pages (`/faq`, `/cjenik`, `/kontakt`).
- Add/extend schema markup:
: Add `priceRange: "€€"` on `LocalBusiness`/`ProfessionalService`.
: Add `ContactPage` JSON-LD on `/kontakt`.
: Evaluate `Offer` + `PriceSpecification` for pages with explicit prices (especially `/cjenik`) and implement where data is stable enough.
- Improve internal linking on FAQ page to service pages + pricing page.
- Improve internal linking on service pages to FAQ, pricing, contact, and related services.
- Fix trust counters so values are not `0` in initial HTML (SSR-friendly output).

### Odluka / ne implementirati bez razloga
- Do **not** add old `meta geo.region` / `geo.placename` tags by default.
: They are not a modern ranking lever for Google; prioritize structured data + Google Business Profile + consistent NAP.

### Za tebe (operativa)
- Provide final working hours that must match website + Google Business Profile.
- Provide verified trust data for publication (years of experience, counts, licenses, authorizations, registries, partnerships).
- Approve which pricing data is stable enough to expose in `Offer` / `PriceSpecification` schema.

## P2 - Content / E-E-A-T (growth)

### Web + content
- Add expert credentials (licenses, author info, proof of expertise) to About/Service pages.
- Add case studies/references/testimonials with real project context.
- Add local landing pages (Zagreb/okolica; later kvart pages) based on real references and unique content.
- Review and standardize all website copy (legal, service claims, timelines, prices, terminology) for consistency.

## P3 - Operations / distribution
- Set up/verify Google Search Console and Bing Webmaster Tools, submit sitemap, and monitor indexing coverage.
- Keep business profile data aligned across website, Google Business Profile, and citation platforms.

### Za tebe (operativa)
- Build review flow: request reviews from clients/partners and respond consistently to all new reviews.
- Request partner mentions/backlinks where relevant and credible.
