import type { Metadata } from "next"
import { FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h1 className="mt-6 font-sans text-4xl font-bold text-foreground sm:text-5xl">Uvjeti korištenja</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Ovi uvjeti korištenja reguliraju korištenje web stranice i usluga tvrtke {siteConfig.name}.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <h2 className="font-sans text-2xl font-bold text-foreground">O tvrtki</h2>
              <p className="text-muted-foreground">
                <strong className="text-foreground">{siteConfig.name}</strong>
                <br />
                OIB: {siteConfig.oib}
                <br />
                Email: {siteConfig.email}
                <br />
                Telefon: {siteConfig.phone.display}
              </p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Korištenje web stranice</h2>
              <p className="text-muted-foreground">
                Korištenjem ove web stranice prihvaćate ove uvjete korištenja. Ako se ne slažete s uvjetima, molimo vas
                da ne koristite stranicu.
              </p>

              <h3 className="mt-8 font-sans text-xl font-semibold text-foreground">Dopušteno korištenje</h3>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Pregledavanje informacija o našim uslugama</li>
                <li>Kontaktiranje radi upita ili narudžbe usluga</li>
                <li>Dijeljenje sadržaja uz navođenje izvora</li>
              </ul>

              <h3 className="mt-8 font-sans text-xl font-semibold text-foreground">Zabranjeno korištenje</h3>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Kopiranje sadržaja bez dopuštenja</li>
                <li>Korištenje stranice za nezakonite svrhe</li>
                <li>Pokušaji neovlaštenog pristupa</li>
              </ul>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Naše usluge</h2>

              <h3 className="mt-8 font-sans text-xl font-semibold text-foreground">Energetski certifikati</h3>
              <p className="text-muted-foreground">
                Izrađujemo energetske certifikate u skladu s važećim hrvatskim propisima. Certifikati se upisuju u
                službeni registar Ministarstva graditeljstva.
              </p>

              <h3 className="mt-8 font-sans text-xl font-semibold text-foreground">Procjena nekretnina</h3>
              <p className="text-muted-foreground">
                Procjene izrađuju ovlašteni procjenitelji u skladu s propisima o procjeni vrijednosti nekretnina.
              </p>

              <h3 className="mt-8 font-sans text-xl font-semibold text-foreground">Etažiranje</h3>
              <p className="text-muted-foreground">
                Postupak etažiranja provodimo u skladu sa Zakonom o vlasništvu i drugim stvarnim pravima.
              </p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Cijene i plaćanje</h2>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Cijene su izražene u eurima (€)</li>
                <li>Plaćanje se vrši po isporuci usluge</li>
                <li>Prihvaćamo gotovinu i bankovni prijenos</li>
                <li>Izdajemo račun za svaku uslugu</li>
              </ul>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Odgovornost</h2>
              <p className="text-muted-foreground">
                {siteConfig.name} jamči za točnost i kvalitetu izrađene dokumentacije u skladu s važećim propisima. Ne
                odgovaramo za štetu nastalu:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Davanjem netočnih podataka od strane klijenta</li>
                <li>Korištenjem dokumentacije protivno namjeni</li>
                <li>Višom silom ili odlukama državnih tijela</li>
              </ul>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Intelektualno vlasništvo</h2>
              <p className="text-muted-foreground">
                Sav sadržaj na ovoj web stranici (tekstovi, slike, logotipi) vlasništvo je tvrtke {siteConfig.name} i
                zaštićen je autorskim pravima.
              </p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Izmjene uvjeta</h2>
              <p className="text-muted-foreground">
                Zadržavamo pravo izmjene ovih uvjeta. Nastavkom korištenja stranice nakon izmjena smatrat će se da ste
                prihvatili nove uvjete.
              </p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Primjenjivo pravo</h2>
              <p className="text-muted-foreground">
                Na ove uvjete primjenjuje se pravo Republike Hrvatske. Za sve sporove nadležan je sud u Zagrebu.
              </p>

              <h2 className="mt-12 font-sans text-2xl font-bold text-foreground">Kontakt</h2>
              <p className="text-muted-foreground">
                Za pitanja o uvjetima korištenja kontaktirajte nas na: {siteConfig.email}
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
