import type { Metadata } from "next"
import { Cookie } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config/site"

export const metadata: Metadata = {
  title: "Politika kolačića | ENERGOCENTAR d.o.o.",
  description: "Politika korištenja kolačića na web stranici ENERGOCENTAR d.o.o. Saznajte koje kolačiće koristimo i zašto.",
}

export default function KolaciciPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Cookie className="h-7 w-7 text-primary" />
              </div>
              <h1 className="mt-6 font-sans text-4xl font-bold text-foreground sm:text-5xl">Politika kolačića</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Ova stranica objašnjava kako koristimo kolačiće i slične tehnologije na našoj web stranici.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <h2 className="font-sans text-2xl font-bold text-foreground">Što su kolačići?</h2>
              <p className="text-muted-foreground">
                Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju kada posjetite web stranicu.
                Omogućuju stranici da zapamti vaše radnje i postavke.
              </p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Tehnologije koje koristimo</h2>

              <h3 className="mt-8 font-sans text-xl font-semibold text-foreground">Vercel Analytics (bez kolačića)</h3>
              <p className="text-muted-foreground">
                Koristimo Vercel Analytics koji <strong>ne koristi kolačiće</strong>. Ova tehnologija prikuplja
                anonimizirane podatke o posjećenosti bez pohrane informacija na vašem uređaju.
              </p>
              <p className="text-muted-foreground">Prikupljeni podaci uključuju:</p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Broj posjetitelja</li>
                <li>Stranice koje posjećujete</li>
                <li>Vrsta uređaja i preglednika</li>
                <li>Država pristupa</li>
              </ul>

              <h3 className="mt-8 font-sans text-xl font-semibold text-foreground">Google Analytics (uz pristanak)</h3>
              <p className="text-muted-foreground">
                Ako prihvatite kolačiće putem bannera na stranici, aktivira se Google Analytics koji koristi kolačiće
                za detaljniju analizu ponašanja korisnika. Ovi kolačići se postavljaju <strong>samo uz vaš pristanak</strong>.
              </p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Vaš izbor</h2>
              <p className="text-muted-foreground">
                Prilikom prvog posjeta stranici prikazat će vam se banner za odabir kolačića. Možete:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Prihvatiti</strong> - aktivira se Google Analytics uz Vercel Analytics</li>
                <li><strong>Odbiti</strong> - koristi se samo Vercel Analytics (bez kolačića)</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Vaš odabir pohranjujemo u lokalnu pohranu preglednika (localStorage) koja nije kolačić.</p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Upravljanje kolačićima</h2>
              <p className="text-muted-foreground">
                Možete kontrolirati i upravljati kolačićima kroz postavke svog preglednika:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Chrome: Postavke → Privatnost i sigurnost → Kolačići</li>
                <li>Firefox: Postavke → Privatnost i sigurnost</li>
                <li>Safari: Postavke → Privatnost</li>
                <li>Edge: Postavke → Kolačići i dopuštenja web-mjesta</li>
              </ul>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Isključivanje kolačića</h2>
              <p className="text-muted-foreground">
                Ako isključite kolačiće, neke funkcionalnosti web stranice možda neće raditi ispravno.
              </p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Kontakt</h2>
              <p className="text-muted-foreground">
                Za pitanja o kolačićima kontaktirajte nas na: {siteConfig.email}
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
