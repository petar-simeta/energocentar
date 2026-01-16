import type { Metadata } from "next"
import { Banknote } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Cjenik usluga | ENERGOCENTAR d.o.o.",
  description:
    "Cjenik energetskih certifikata, procjena nekretnina i etažiranja. Transparentne cijene bez skrivenih troškova.",
}

const pricingTables = [
  {
    title: "Energetski certifikati",
    items: [
      { service: "Stan do 50 m²", price: "80 €" },
      { service: "Stan 50-100 m²", price: "100 €" },
      { service: "Stan preko 100 m²", price: "120 €" },
      { service: "Kuća do 150 m²", price: "120 €" },
      { service: "Kuća preko 150 m²", price: "150 €" },
      { service: "Poslovni prostor", price: "Po dogovoru" },
    ],
    note: "Hitna izrada (isti dan): +30 €",
  },
  {
    title: "Procjena nekretnina",
    items: [
      { service: "Procjena stana", price: "200 €" },
      { service: "Procjena kuće", price: "300 €" },
      { service: "Procjena zemljišta", price: "150 €" },
      { service: "Procjena poslovnog prostora", price: "Po dogovoru" },
    ],
  },
  {
    title: "Etažiranje",
    items: [
      { service: "Etažiranje (do 4 stana)", price: "500 €" },
      { service: "Etažiranje (5-10 stanova)", price: "800 €" },
      { service: "Etažiranje (preko 10 stanova)", price: "Po dogovoru" },
    ],
  },
]

const priceFactors = [
  {
    title: "Veličina nekretnine",
    description: "Veće nekretnine zahtijevaju više vremena za pregled i analizu",
  },
  {
    title: "Lokacija",
    description: "Udaljenije lokacije mogu uključivati dodatne putne troškove",
  },
  {
    title: "Složenost",
    description: "Nestandardne nekretnine zahtijevaju dodatnu analizu",
  },
  {
    title: "Hitnost",
    description: "Hitne izrade imaju dodatnu naknadu",
  },
]

export default function CjenikPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Banknote className="h-7 w-7 text-primary" />
              </div>
              <h1 className="mt-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">Cjenik usluga</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Transparentne cijene bez skrivenih troškova. Sve cijene su izražene u eurima i uključuju PDV.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {pricingTables.map((table, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="font-serif text-xl font-bold text-foreground">{table.title}</h2>
                  <div className="mt-6 space-y-4">
                    {table.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between border-b border-border pb-3">
                        <span className="text-sm text-muted-foreground">{item.service}</span>
                        <span className="font-medium text-foreground">od {item.price}</span>
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
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Što utječe na cijenu?</h2>
              <p className="mt-4 text-muted-foreground">
                Konačna cijena ovisi o nekoliko faktora. Za točnu ponudu, kontaktirajte nas s podacima o nekretnini.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {priceFactors.map((factor, index) => (
                <div key={index} className="rounded-xl border border-border bg-background p-6">
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
