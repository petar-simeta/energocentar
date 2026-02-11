import type { Metadata } from "next"
import { FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { siteConfig } from "@/lib/config/site"

const canonical = `${siteConfig.url}/uvjeti`

export const metadata: Metadata = {
  title: "Uvjeti korištenja | ENERGOCENTAR d.o.o.",
  description: "Uvjeti korištenja web stranice i usluga tvrtke ENERGOCENTAR d.o.o.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Uvjeti korištenja | ENERGOCENTAR d.o.o.",
    description: "Uvjeti korištenja web stranice i usluga tvrtke ENERGOCENTAR d.o.o.",
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
    title: "Uvjeti korištenja | ENERGOCENTAR d.o.o.",
    description: "Uvjeti korištenja web stranice i usluga tvrtke ENERGOCENTAR d.o.o.",
    images: ["/og.jpg"],
  },
}

export default function UvjetiPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Uvjeti korištenja", path: "/uvjeti" },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-[67px]">
        <PageHero
          icon={FileText}
          title="Uvjeti korištenja"
          subtitle={`Ovi uvjeti korištenja reguliraju korištenje web stranice i usluga tvrtke ${siteConfig.name}.`}
        />

        {/* Content */}
        <section className="bg-surface-light py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">O tvrtki</h2>
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
                <h2 className="font-display text-2xl font-bold text-foreground">Korištenje web stranice</h2>
                <p className="mt-4 text-stone-600">
                  Korištenjem ove web stranice prihvaćate ove uvjete korištenja. Ako se ne slažete s uvjetima, molimo vas
                  da ne koristite stranicu.
                </p>

                <h3 className="mt-8 font-display text-xl font-semibold text-foreground">Dopušteno korištenje</h3>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Pregledavanje informacija o našim uslugama</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Kontaktiranje radi upita ili narudžbe usluga</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Dijeljenje sadržaja uz navođenje izvora</li>
                </ul>

                <h3 className="mt-8 font-display text-xl font-semibold text-foreground">Zabranjeno korištenje</h3>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Kopiranje sadržaja bez dopuštenja</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Korištenje stranice za nezakonite svrhe</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Pokušaji neovlaštenog pristupa</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Naše usluge</h2>

                <h3 className="mt-8 font-display text-xl font-semibold text-foreground">Energetski certifikati</h3>
                <p className="mt-4 text-stone-600">
                  Izrađujemo energetske certifikate u skladu s važećim hrvatskim propisima. Certifikati se upisuju u
                  službeni registar Ministarstva graditeljstva.
                </p>

                <h3 className="mt-8 font-display text-xl font-semibold text-foreground">Procjena nekretnina</h3>
                <p className="mt-4 text-stone-600">
                  Procjene izrađuju ovlašteni procjenitelji u skladu s propisima o procjeni vrijednosti nekretnina.
                </p>

                <h3 className="mt-8 font-display text-xl font-semibold text-foreground">Etažiranje</h3>
                <p className="mt-4 text-stone-600">
                  Postupak etažiranja provodimo u skladu sa Zakonom o vlasništvu i drugim stvarnim pravima.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Cijene i plaćanje</h2>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Cijene su izražene u eurima (&euro;)</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Plaćanje se vrši po isporuci usluge</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Prihvaćamo gotovinu i bankovni prijenos</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Izdajemo račun za svaku uslugu</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Odgovornost</h2>
                <p className="mt-4 text-stone-600">
                  {siteConfig.name} jamči za točnost i kvalitetu izrađene dokumentacije u skladu s važećim propisima. Ne
                  odgovaramo za štetu nastalu:
                </p>
                <ul className="mt-4 space-y-2 pl-6 text-stone-600">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Davanjem netočnih podataka od strane klijenta</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Korištenjem dokumentacije protivno namjeni</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />Višom silom ili odlukama državnih tijela</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Intelektualno vlasništvo</h2>
                <p className="mt-4 text-stone-600">
                  Sav sadržaj na ovoj web stranici (tekstovi, slike, logotipi) vlasništvo je tvrtke {siteConfig.name} i
                  zaštićen je autorskim pravima.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Izmjene uvjeta</h2>
                <p className="mt-4 text-stone-600">
                  Zadržavamo pravo izmjene ovih uvjeta. Nastavkom korištenja stranice nakon izmjena smatrat će se da ste
                  prihvatili nove uvjete.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Primjenjivo pravo</h2>
                <p className="mt-4 text-stone-600">
                  Na ove uvjete primjenjuje se pravo Republike Hrvatske. Za sve sporove nadležan je sud u Zagrebu.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Kontakt</h2>
                <p className="mt-4 text-stone-600">
                  Za pitanja o uvjetima korištenja kontaktirajte nas na: {siteConfig.email}
                </p>
              </div>

              <p className="text-sm text-stone-500">
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
