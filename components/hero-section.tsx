"use client";

import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { FadeIn } from "@/components/motion/fade-in";
import { EnergyBarReveal } from "@/components/motion/energy-bar-reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden">
      {/* Background Image with parallax */}
      <div className="absolute inset-0 -z-10">
        <ParallaxImage
          src="/hero-background.jpg"
          alt="Moderna arhitektura u Zagrebu"
          speed={0.15}
          priority
          className="absolute inset-0"
          imageClassName="object-cover object-bottom"
          motionClassName="absolute inset-x-0 -top-[20%] bottom-0"
          yRange={["0%", "15%"]}
        />
        <div className="absolute inset-0 bg-linear-to-t from-green-950/85 via-green-950/55 to-green-950/28" />
      </div>

      <div className="mx-auto max-w-350 w-full px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-16">
          <FadeIn direction="up" duration={0.8} className="lg:col-span-3">
            <h1 className="text-fluid-hero lg:text-[clamp(3.5rem,6vw,6.2rem)] font-display font-bold tracking-tight text-white max-w-3xl lg:max-w-none text-balance">
              Energetski certifikati i procjene nekretnina
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.8} className="lg:col-span-2">
            <div className="space-y-6 lg:ml-auto lg:max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-green-300" />
                Zagreb i cijela Hrvatska
              </div>

              <p className="text-lg text-white/80 sm:text-xl text-pretty">
                Brza i stručna izrada energetskih certifikata za stanove, kuće i
                poslovne prostore te ovlaštena procjena nekretnina za prodaju,
                najam i kredit. Radimo u Zagrebu, okolici i cijeloj Hrvatskoj.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
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
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Energy bar at very bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <EnergyBarReveal />
      </div>
    </section>
  );
}
