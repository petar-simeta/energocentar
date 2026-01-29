import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-background.jpg"
          alt="Moderna arhitektura u Zagrebu"
          fill
          priority
          className="object-cover object-bottom opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/30 via-background/50 to-background/90" />
      </div>

      <div className="mx-auto max-w-350 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-56 xl:py-64">
        <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-16 lg:items-center">
          {/* Left Column: Title (first on mobile too) */}
          <div>
            <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Energetski certifikati i procjene nekretnina
            </h1>
          </div>

          {/* Right Column: Badge, Description, CTAs */}
          <div className="mt-8 lg:mt-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Zagreb i cijela Hrvatska
            </div>

            {/* Subheadline */}
            <p className="mt-4 text-muted-foreground text-pretty">
              Brza i stručna izrada energetskih certifikata za stanove, kuće i
              poslovne prostore te ovlaštena procjena nekretnina za prodaju,
              najam i kredit. Radimo u Zagrebu, okolici i cijeloj Hrvatskoj.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-hover"
              >
                <a
                  href={`tel:${siteConfig.phone.href}`}
                  className="flex items-center gap-2"
                >
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
      </div>
    </section>
  );
}
