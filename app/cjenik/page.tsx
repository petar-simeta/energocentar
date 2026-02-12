import type { Metadata } from "next"
import { Banknote } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { PageHero } from "@/components/page-hero"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { pricingTables, priceFactors } from "@/content/cjenik"
import { siteConfig } from "@/lib/config/site"

const canonical = `${siteConfig.url}/cjenik`

export const metadata: Metadata = {
  title: "Cjenik usluga | ENERGOCENTAR d.o.o.",
  description:
    "Cjenik energetskih certifikata, procjena nekretnina i etažiranja. Transparentne cijene bez skrivenih troškova.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Cjenik usluga | ENERGOCENTAR d.o.o.",
    description:
      "Cjenik energetskih certifikata, procjena nekretnina i etažiranja. Transparentne cijene bez skrivenih troškova.",
    url: canonical,
    siteName: siteConfig.shortName,
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "ENERGOCENTAR - Energetski certifikati i procjene",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cjenik usluga | ENERGOCENTAR d.o.o.",
    description:
      "Cjenik energetskih certifikata, procjena nekretnina i etažiranja. Transparentne cijene bez skrivenih troškova.",
    images: ["/og.jpg"],
  },
}

const pricingCatalogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone.href,
      email: siteConfig.email,
      priceRange: siteConfig.priceRange,
    },
    {
      "@type": "OfferCatalog",
      "@id": `${canonical}/#offer-catalog`,
      name: "Cjenik usluga ENERGOCENTAR",
      url: canonical,
      inLanguage: "hr-HR",
      itemListElement: [
    {
      "@type": "Offer",
      name: "Energetski certifikat - Stanovi na zajedničko grijanje",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 160,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: "Stanovi na zajedničko grijanje",
        category: "Energetski certifikati",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
      seller: { "@id": `${siteConfig.url}/#business` },
      url: canonical,
    },
    {
      "@type": "Offer",
      name: "Energetski certifikat - Stanovi na zasebno grijanje",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 185,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: "Stanovi na zasebno grijanje",
        category: "Energetski certifikati",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
      seller: { "@id": `${siteConfig.url}/#business` },
      url: canonical,
    },
    {
      "@type": "Offer",
      name: "Energetski certifikat - Kuća do 200 m2",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 265,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: "Kuća do 200 m2",
        category: "Energetski certifikati",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
      seller: { "@id": `${siteConfig.url}/#business` },
      url: canonical,
    },
    {
      "@type": "Offer",
      name: "Energetski certifikat - Kuća preko 200 m2",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 330,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: "Kuća preko 200 m2",
        category: "Energetski certifikati",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
      seller: { "@id": `${siteConfig.url}/#business` },
      url: canonical,
    },
    {
      "@type": "Offer",
      name: "Energetski certifikat - Nove obiteljske kuće",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 370,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: "Nove obiteljske kuće",
        category: "Energetski certifikati",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
      seller: { "@id": `${siteConfig.url}/#business` },
      url: canonical,
    },
    {
      "@type": "Offer",
      name: "Procjena nekretnina - Procjena stana",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 200,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: "Procjena stana",
        category: "Procjena nekretnina",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
      seller: { "@id": `${siteConfig.url}/#business` },
      url: canonical,
    },
    {
      "@type": "Offer",
      name: "Procjena nekretnina - Procjena kuće",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 300,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: "Procjena kuće",
        category: "Procjena nekretnina",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
      seller: { "@id": `${siteConfig.url}/#business` },
      url: canonical,
    },
    {
      "@type": "Offer",
      name: "Procjena nekretnina - Procjena zemljišta",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 200,
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        "@type": "Service",
        name: "Procjena zemljišta",
        category: "Procjena nekretnina",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
      seller: { "@id": `${siteConfig.url}/#business` },
      url: canonical,
    },
      ],
    },
  ],
}

export default function CjenikPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingCatalogJsonLd) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Cjenik", path: "/cjenik" },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-[67px]">
        <PageHero
          icon={Banknote}
          title="Cjenik usluga"
          subtitle="Transparentne cijene bez skrivenih troškova. Sve cijene su izražene u eurima i uključuju PDV."
        />

        {/* Pricing Tables */}
        <section className="bg-surface-light py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {pricingTables.map((table) => (
                <div key={table.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  {/* Energy bar accent */}
                  <div className="energy-bar" />
                  <div className="bg-green-50 px-6 py-5">
                    <h2 className="font-display text-xl font-bold text-foreground">{table.title}</h2>
                  </div>
                  <div className="p-6">
                    {table.title === "Etažiranje" ? (
                      <p className="leading-relaxed text-stone-600">
                        Cijena etažiranja je{" "}
                        <span className="font-display font-bold text-foreground">{table.items[0]?.price}</span>.
                      </p>
                    ) : (
                      <div className="space-y-0">
                        {table.items.map((item, index) => (
                          <div
                            key={item.service}
                            className={`-mx-3 flex items-start justify-between gap-8 rounded px-4 py-3 sm:gap-12 ${
                              index % 2 === 0 ? "bg-stone-50" : ""
                            }`}
                          >
                            <span className="flex-1 text-sm text-stone-600">
                              <span className="block">{item.service}</span>
                              {"detail" in item && item.detail && (
                                <span className="mt-0.5 block text-xs italic text-stone-500">{item.detail}</span>
                              )}
                            </span>
                            <span className="shrink-0 pl-4 font-display font-bold text-foreground">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs italic text-stone-500">Sve cijene uključuju PDV.</p>
          </div>
        </section>

        {/* Price Factors */}
        <section className="bg-surface-muted py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Što utječe na cijenu?</h2>
              <p className="mt-4 text-stone-600">
                Konačna cijena ovisi o nekoliko faktora. Za točnu ponudu, kontaktirajte nas s podacima o nekretnini.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {priceFactors.map((factor) => (
                <div key={factor.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-medium text-foreground">{factor.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
