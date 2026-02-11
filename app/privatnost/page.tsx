import type { Metadata } from "next"
import { Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { siteConfig } from "@/lib/config/site"

const canonical = `${siteConfig.url}/privatnost`

export const metadata: Metadata = {
  title: "Politika privatnosti | ENERGOCENTAR d.o.o.",
  description:
    "Politika privatnosti tvrtke ENERGOCENTAR d.o.o. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Politika privatnosti | ENERGOCENTAR d.o.o.",
    description:
      "Politika privatnosti tvrtke ENERGOCENTAR d.o.o. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke.",
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
    title: "Politika privatnosti | ENERGOCENTAR d.o.o.",
    description:
      "Politika privatnosti tvrtke ENERGOCENTAR d.o.o. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke.",
    images: ["/og.jpg"],
  },
}

export default function PrivatnostPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Politika privatnosti", path: "/privatnost" },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-[67px]">
        <PageHero
          icon={Shield}
          title="Politika privatnosti"
          subtitle="Ova politika privatnosti opisuje kako prikupljamo, koristimo i štitimo vaše osobne podatke."
        />

        {/* Content */}
        <section className="bg-surface-light py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Voditelj obrade podataka</h2>
                <p className="mt-4 text-stone-600">
                  <strong className="text-foreground">{siteConfig.name}</strong>
                  <br />
                  OIB: {siteConfig.oib}
                  <br />
                  Email: {siteConfig.email}
                  <br />
                  Telefon: {siteConfig.phone.display}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Koje podatke prikupljamo</h2>
                <p className="mt-4 text-stone-600">Prikupljamo sljedeće osobne podatke:</p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Ime i prezime</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Kontakt podaci (email, telefon)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Podaci o nekretnini (adresa, površina)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Dokumentacija potrebna za izradu certifikata/procjene</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Svrha prikupljanja podataka</h2>
                <p className="mt-4 text-stone-600">Vaše podatke koristimo isključivo za:</p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Izradu energetskih certifikata</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Izradu procjena nekretnina</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Provođenje postupka etažiranja</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Komunikaciju vezanu uz naše usluge</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Pravna osnova obrade</h2>
                <p className="mt-4 text-stone-600">Obrađujemo vaše podatke na temelju:</p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Izvršenja ugovora (pružanje usluga)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Zakonskih obveza (vođenje poslovne dokumentacije)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Privole (analitički kolačići)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Legitimnog interesa (poboljšanje usluga)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Čuvanje podataka</h2>
                <p className="mt-4 text-stone-600">Vaše podatke čuvamo:</p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Dokumentaciju o certifikatima: 10 godina</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Poslovnu dokumentaciju: prema zakonskim propisima</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Komunikaciju: do 2 godine nakon završetka usluge</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Vaša prava</h2>
                <p className="mt-4 text-stone-600">Imate pravo na:</p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Pristup svojim podacima</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Ispravak netočnih podataka</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Brisanje podataka (&quot;pravo na zaborav&quot;)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Ograničenje obrade</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Prenosivost podataka</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Prigovor na obradu</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Kontakt za zaštitu podataka</h2>
                <p className="mt-4 text-stone-600">
                  Za sva pitanja vezana uz zaštitu osobnih podataka možete nas kontaktirati na:
                  <br />
                  Email: {siteConfig.email}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Izmjene politike</h2>
                <p className="mt-4 text-stone-600">
                  Zadržavamo pravo izmjene ove politike privatnosti. Sve izmjene bit će objavljene na ovoj stranici.
                </p>
              </div>

              <p className="text-sm text-stone-500">
                <em>Posljednja izmjena: veljača 2026.</em>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
