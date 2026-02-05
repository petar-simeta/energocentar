"use client";

import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { FadeIn } from "@/components/motion/fade-in";
import { Counter } from "@/components/motion/counter";
import { EnergyBarReveal } from "@/components/motion/energy-bar-reveal";

const stats = [
  { value: "500+", label: "certifikata" },
  { value: "48h", label: "prosječna izrada" },
  { value: "10+", label: "godina iskustva" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-end overflow-hidden">
      {/* Background Image with parallax */}
      <div className="absolute inset-0 -z-10">
        <ParallaxImage
          src="/hero-background.jpg"
          alt="Moderna arhitektura u Zagrebu"
          speed={0.15}
          priority
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-green-950/95 via-green-950/60 to-green-950/30" />
      </div>

      <div className="mx-auto max-w-350 w-full px-4 pt-32 pb-0 sm:px-6 lg:px-8">
        <div className="pb-20 sm:pb-28 lg:pb-32">
          <FadeIn direction="up" duration={0.8}>
            <h1 className="text-fluid-hero font-display font-bold tracking-tight text-white max-w-4xl text-balance">
              Energetski certifikati i procjene nekretnina
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl text-pretty">
              Brza i stručna izrada energetskih certifikata za stanove, kuće i
              poslovne prostore te ovlaštena procjena nekretnina za prodaju,
              najam i kredit. Radimo u Zagrebu, okolici i cijeloj Hrvatskoj.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} duration={0.8}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <a href="#usluge" className="flex items-center gap-2">
                  Pogledajte usluge
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/15 py-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <Counter
                  value={stat.value}
                  className="font-display text-3xl font-bold text-white sm:text-4xl"
                />
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Energy bar at very bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <EnergyBarReveal />
      </div>
    </section>
  );
}
