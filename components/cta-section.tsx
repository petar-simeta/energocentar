import { Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config/site"

export function CtaSection() {
  return (
    <section className="border-t border-border bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Zatrebate energetski certifikat ili procjenu?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Javite nam se već danas i dobit ćete besplatnu procjenu troškova i termina izrade.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
              <a href={`tel:${siteConfig.phone.href}`} className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                {siteConfig.phone.display}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground sm:w-auto bg-transparent"
            >
              <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                {siteConfig.email}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{siteConfig.workingHours.display}</p>
        </div>
      </div>
    </section>
  )
}
