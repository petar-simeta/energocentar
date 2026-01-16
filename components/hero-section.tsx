import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/modern-zagreb-architecture-building-aerial-view-pr.jpg"
          alt="Moderna arhitektura u Zagrebu"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Zagreb i cijela Hrvatska
          </div>

          {/* Headline */}
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Energetski certifikati i procjene nekretnina
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">
            Brza i stručna izrada energetskih certifikata za stanove, kuće i poslovne prostore. Certificirani stručnjaci
            s višegodišnjim iskustvom u Zagrebu i okolici.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="tel:+385912345678" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Nazovite nas odmah
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a href="#usluge" className="flex items-center gap-2">
                Pogledajte usluge
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
