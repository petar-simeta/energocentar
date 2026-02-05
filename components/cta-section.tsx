"use client"

import { Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config/site"
import { FadeIn } from "@/components/motion/fade-in"
import { EnergyBarReveal } from "@/components/motion/energy-bar-reveal"

export function CtaSection() {
  return (
    <section className="bg-green-950 py-20 sm:py-28">
      <EnergyBarReveal className="-mt-20 sm:-mt-28 mb-20 sm:mb-28" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <h2 className="text-fluid-section font-display font-bold text-white text-balance">
              Trebate energetski certifikat ili procjenu vrijednosti nekretnine?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Nazovite nas ili pošaljite upit i saznajte cijenu i rok izrade već
              danas.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent-hover sm:w-auto"
              >
                <a
                  href={`tel:${siteConfig.phone.href}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone.display}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  {siteConfig.email}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
