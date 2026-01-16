import type { Metadata } from "next"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CopyButton } from "@/components/copy-button"
import { siteConfig } from "@/lib/config/site"

export const metadata: Metadata = {
  title: "Kontakt | ENERGOCENTAR d.o.o.",
  description:
    "Kontaktirajte ENERGOCENTAR d.o.o. za energetske certifikate, procjene nekretnina i etažiranje. Nazovite ili pošaljite email.",
}

const steps = [
  {
    number: "1",
    title: "Nazovite nas ili pošaljite email",
    description: "Javite nam se s osnovnim podacima o nekretnini (vrsta, površina, lokacija).",
  },
  {
    number: "2",
    title: "Dobit ćete ponudu istog dana",
    description: "Pripremit ćemo vam ponudu s cijenom i procijenjenim vremenom izrade.",
  },
  {
    number: "3",
    title: "Dogovorimo termin pregleda",
    description: "Izlazimo na teren u vrijeme koje vama odgovara - radnim danom ili vikendom.",
  },
  {
    number: "4",
    title: "Izrada dokumenta u dogovorenom roku",
    description: "Certifikat ili procjenu izrađujemo brzo i kvalitetno.",
  },
]

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Kontakt</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Javite nam se za besplatnu ponudu ili bilo kakva pitanja. Stojimo vam na raspolaganju.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Details */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Kontakt podaci</h2>

                <div className="mt-8 space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">Telefon</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <a
                          href={`tel:${siteConfig.phone.href}`}
                          className="text-lg font-semibold text-primary hover:underline"
                        >
                          {siteConfig.phone.display}
                        </a>
                        <CopyButton
                          value={siteConfig.phone.href.replace("+385", "0")}
                          label="Telefonski broj"
                          className="text-muted-foreground"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">Email</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-lg font-semibold text-primary hover:underline"
                        >
                          {siteConfig.email}
                        </a>
                        <CopyButton value={siteConfig.email} label="E-mail adresa" className="text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Radno vrijeme</h3>
                      <div className="mt-1 space-y-1 text-muted-foreground">
                        <p>Ponedjeljak - Petak: 8:00 - 18:00</p>
                        <p>Subota: 9:00 - 13:00</p>
                        <p>Nedjelja: zatvoreno</p>
                      </div>
                    </div>
                  </div>

                  {/* Area */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Područje djelovanja</h3>
                      <div className="mt-1 space-y-1 text-muted-foreground">
                        <p>Zagreb</p>
                        <p>Zagrebačka županija</p>
                        <p>Cijela Hrvatska</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to get a quote */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Kako do ponude?</h2>
                <p className="mt-4 text-muted-foreground">Ponuda je besplatna i bez obveze.</p>

                <div className="mt-8 space-y-6">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{step.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="border-t border-border bg-card py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Podaci o tvrtki</h2>
              <div className="mt-6 space-y-1 text-muted-foreground">
                <p className="text-lg font-semibold text-foreground">{siteConfig.name}</p>
                <p>OIB: {siteConfig.oib}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
