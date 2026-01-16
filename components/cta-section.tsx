import { Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
              <a href="tel:+385912345678" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                +385 91 234 5678
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground sm:w-auto bg-transparent"
            >
              <a href="mailto:info@energocert.hr" className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                info@energocert.hr
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">Radnim danom od 8:00 do 18:00 · Subotom od 9:00 do 13:00</p>
        </div>
      </div>
    </section>
  )
}
