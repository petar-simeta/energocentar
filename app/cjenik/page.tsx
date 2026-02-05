import type { Metadata } from "next"
import { Banknote } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
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
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Banknote className="h-7 w-7 text-primary" />
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl">Cjenik usluga</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Transparentne cijene bez skrivenih troškova. Sve cijene su izražene u eurima i uključuju PDV.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {pricingTables.map((table) => (
                <div key={table.title} className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="font-display text-xl font-bold text-foreground">{table.title}</h2>
                  <div className="mt-6 space-y-4">
                    {table.items.map((item) => (
                      <div key={item.service} className="flex items-center justify-between border-b border-border pb-3">
                        <span className="text-sm text-muted-foreground">{item.service}</span>
                        <span className="font-medium text-foreground">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  {table.note && <p className="mt-4 text-sm text-primary">{table.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Factors */}
        <section className="border-t border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Što utječe na cijenu?</h2>
              <p className="mt-4 text-muted-foreground">
                Konačna cijena ovisi o nekoliko faktora. Za točnu ponudu, kontaktirajte nas s podacima o nekretnini.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {priceFactors.map((factor) => (
                <div key={factor.title} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-medium text-foreground">{factor.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{factor.description}</p>
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
