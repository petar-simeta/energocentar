import type { Metadata } from "next"
import { Cookie } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { CookiePreferences } from "@/components/cookie-preferences"
import { siteConfig } from "@/lib/config/site"

const canonical = `${siteConfig.url}/kolacici`

export const metadata: Metadata = {
  title: "Politika kolačića | ENERGOCENTAR d.o.o.",
  description: "Politika korištenja kolačića na web stranici ENERGOCENTAR d.o.o. Saznajte koje kolačiće koristimo i zašto.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Politika kolačića | ENERGOCENTAR d.o.o.",
    description:
      "Politika korištenja kolačića na web stranici ENERGOCENTAR d.o.o. Saznajte koje kolačiće koristimo i zašto.",
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
    title: "Politika kolačića | ENERGOCENTAR d.o.o.",
    description:
      "Politika korištenja kolačića na web stranici ENERGOCENTAR d.o.o. Saznajte koje kolačiće koristimo i zašto.",
    images: ["/og.jpg"],
  },
}

export default function KolaciciPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Politika kolačića", path: "/kolacici" },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-[67px]">
        <PageHero
          icon={Cookie}
          title="Politika kolačića"
          subtitle="Ova stranica objašnjava kako koristimo kolačiće i slične tehnologije na našoj web stranici."
        />

        {/* Content */}
        <section className="bg-surface-light py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Što su kolačići?</h2>
                <p className="mt-4 text-stone-600">
                  Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju kada posjetite web stranicu.
                  Omogućuju stranici da zapamti vaše radnje i postavke.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Tehnologije koje koristimo</h2>

                <h3 className="mt-8 font-display text-xl font-semibold text-foreground">Vercel Analytics (bez kolačića)</h3>
                <p className="mt-4 text-stone-600">
                  Koristimo Vercel Analytics koji <strong className="text-foreground">ne koristi kolačiće</strong>. Ova tehnologija prikuplja
                  anonimizirane podatke o posjećenosti bez pohrane informacija na vašem uređaju.
                </p>
                <p className="mt-4 text-stone-600">
                  Ova analitika se aktivira samo nakon vašeg pristanka kroz cookie banner.
                </p>
                <p className="mt-4 text-stone-600">Prikupljeni podaci uključuju:</p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Broj posjetitelja</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Stranice koje posjećujete</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Vrsta uređaja i preglednika</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Država pristupa</li>
                </ul>

                <h3 className="mt-8 font-display text-xl font-semibold text-foreground">Google Analytics (uz pristanak)</h3>
                <p className="mt-4 text-stone-600">
                  Ako prihvatite kolačiće putem bannera na stranici, aktivira se Google Analytics koji koristi kolačiće
                  za detaljniju analizu ponašanja korisnika. Ovi kolačići se postavljaju <strong className="text-foreground">samo uz vaš pristanak</strong>.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Vaš izbor</h2>
                <p className="mt-4 text-stone-600">
                  Prilikom prvog posjeta stranici prikazat će vam se banner za odabir kolačića. Možete:
                </p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" /><strong className="text-foreground">Prihvatiti</strong> - aktivira se Google Analytics uz Vercel Analytics</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" /><strong className="text-foreground">Odbiti</strong> - analitički alati ostaju isključeni</li>
                </ul>
                <p className="mt-4 text-stone-600">
                  Vaš odabir pohranjujemo u lokalnu pohranu preglednika (localStorage) koja nije kolačić.</p>
                <p className="mt-4 text-stone-600">
                  Svoj izbor možete promijeniti u bilo kojem trenutku:
                </p>
                <CookiePreferences />
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Upravljanje kolačićima</h2>
                <p className="mt-4 text-stone-600">
                  Možete kontrolirati i upravljati kolačićima kroz postavke svog preglednika:
                </p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Chrome: Postavke &rarr; Privatnost i sigurnost &rarr; Kolačići</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Firefox: Postavke &rarr; Privatnost i sigurnost</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Safari: Postavke &rarr; Privatnost</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Edge: Postavke &rarr; Kolačići i dopuštenja web-mjesta</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Isključivanje kolačića</h2>
                <p className="mt-4 text-stone-600">
                  Ako isključite kolačiće, neke funkcionalnosti web stranice možda neće raditi ispravno.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Kontakt</h2>
                <p className="mt-4 text-stone-600">
                  Za pitanja o kolačićima kontaktirajte nas na: {siteConfig.email}
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
