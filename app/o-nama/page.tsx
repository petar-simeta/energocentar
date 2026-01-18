import type { Metadata } from "next"
import { Building2, Award, Clock, MapPin, type LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { siteConfig } from "@/lib/config/site"
import { mission, values, servicesList } from "@/content/o-nama"

export const metadata: Metadata = {
  title: "O nama | ENERGOCENTAR d.o.o.",
  description:
    "Saznajte više o tvrtki ENERGOCENTAR d.o.o. - vašem pouzdanom partneru za energetske certifikate, procjene nekretnina i etažiranje.",
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Building2,
  MapPin,
}

export default function ONamaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">O nama</h1>
              <p className="mt-6 text-lg text-muted-foreground">{siteConfig.description}</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{mission.title}</h2>
              {mission.paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-lg text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Što nas izdvaja</h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = iconMap[value.iconName]
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      {Icon && <Icon className="h-7 w-7 text-primary" />}
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Naše usluge</h2>
              <p className="mt-4 text-muted-foreground">Sve što trebate za vašu nekretninu na jednom mjestu.</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {servicesList.map((service, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="border-t border-border bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Podaci o tvrtki</h2>
              <div className="mt-8 space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">{siteConfig.name}</strong>
                </p>
                <p>OIB: {siteConfig.oib}</p>
                <p>Telefon: {siteConfig.phone.display}</p>
                <p>Email: {siteConfig.email}</p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
