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

export default function CjenikPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Cjenik", path: "/cjenik" },
        ]}
      />
      <Header />
      <main className="pt-[67px]">
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
                    <div className="space-y-0">
                      {table.items.map((item, index) => (
                        <div
                          key={item.service}
                          className={`flex items-center justify-between py-3 ${
                            index % 2 === 0 ? "bg-stone-50" : ""
                          } -mx-3 px-3 rounded`}
                        >
                          <span className="text-sm text-stone-600">{item.service}</span>
                          <span className="font-display font-bold text-foreground">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    {table.note && <p className="mt-4 text-sm text-green-700">{table.note}</p>}
                  </div>
                </div>
              ))}
            </div>
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
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
