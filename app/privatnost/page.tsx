import type { Metadata } from "next"
import { Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config/site"

export const metadata: Metadata = {
  title: "Politika privatnosti | ENERGOCENTAR d.o.o.",
  description:
    "Politika privatnosti tvrtke ENERGOCENTAR d.o.o. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke.",
}

export default function PrivatnostPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h1 className="mt-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">Politika privatnosti</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Ova politika privatnosti opisuje kako prikupljamo, koristimo i štitimo vaše osobne podatke.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <h2 className="font-serif text-2xl font-bold text-foreground">Voditelj obrade podataka</h2>
              <p className="text-muted-foreground">
                <strong className="text-foreground">{siteConfig.name}</strong>
                <br />
                OIB: {siteConfig.oib}
                <br />
                Email: {siteConfig.email}
                <br />
                Telefon: {siteConfig.phone.display}
              </p>

              <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">Koje podatke prikupljamo</h2>
              <p className="text-muted-foreground">Prikupljamo sljedeće osobne podatke:</p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Ime i prezime</li>
                <li>Kontakt podaci (email, telefon)</li>
                <li>Podaci o nekretnini (adresa, površina)</li>
                <li>Dokumentacija potrebna za izradu certifikata/procjene</li>
              </ul>

              <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">Svrha prikupljanja podataka</h2>
              <p className="text-muted-foreground">Vaše podatke koristimo isključivo za:</p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Izradu energetskih certifikata</li>
                <li>Izradu procjena nekretnina</li>
                <li>Provođenje postupka etažiranja</li>
                <li>Komunikaciju vezanu uz naše usluge</li>
              </ul>

              <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">Pravna osnova obrade</h2>
              <p className="text-muted-foreground">Obrađujemo vaše podatke na temelju:</p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Izvršenja ugovora (pružanje usluga)</li>
                <li>Zakonskih obveza (vođenje poslovne dokumentacije)</li>
                <li>Legitimnog interesa (poboljšanje usluga)</li>
              </ul>

              <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">Čuvanje podataka</h2>
              <p className="text-muted-foreground">Vaše podatke čuvamo:</p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Dokumentaciju o certifikatima: 10 godina</li>
                <li>Poslovnu dokumentaciju: prema zakonskim propisima</li>
                <li>Komunikaciju: do 2 godine nakon završetka usluge</li>
              </ul>

              <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">Vaša prava</h2>
              <p className="text-muted-foreground">Imate pravo na:</p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Pristup svojim podacima</li>
                <li>Ispravak netočnih podataka</li>
                <li>Brisanje podataka (&quot;pravo na zaborav&quot;)</li>
                <li>Ograničenje obrade</li>
                <li>Prenosivost podataka</li>
                <li>Prigovor na obradu</li>
              </ul>

              <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">Kontakt za zaštitu podataka</h2>
              <p className="text-muted-foreground">
                Za sva pitanja vezana uz zaštitu osobnih podataka možete nas kontaktirati na:
                <br />
                Email: {siteConfig.email}
              </p>

              <h2 className="mt-12 font-serif text-2xl font-bold text-foreground">Izmjene politike</h2>
              <p className="text-muted-foreground">
                Zadržavamo pravo izmjene ove politike privatnosti. Sve izmjene bit će objavljene na ovoj stranici.
              </p>

              <p className="mt-8 text-sm text-muted-foreground">
                <em>Posljednja izmjena: siječanj 2026.</em>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
