"use client"

import {
  Phone, ArrowRight,
  FileCheck, Building2, Layers, CircleDot,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config/site"
import { ParallaxImage } from "@/components/motion/parallax-image"
import { FadeIn } from "@/components/motion/fade-in"
import { EnergyBarReveal } from "@/components/motion/energy-bar-reveal"

const iconMap: Record<string, LucideIcon> = {
  FileCheck,
  Building2,
  Layers,
}

interface ServiceHeroProps {
  iconName: string
  title: string
  description: string | string[]
  image: string
}

export function ServiceHero({
  iconName,
  title,
  description,
  image,
}: ServiceHeroProps) {
  const Icon = iconMap[iconName] ?? CircleDot
  const paragraphs = Array.isArray(description) ? description : [description]

  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background Image with parallax */}
      <div className="absolute inset-0 -z-10">
        <ParallaxImage
          src={image}
          alt={title}
          speed={0.15}
          priority
          className="absolute inset-0"
          imageClassName="object-cover object-bottom"
          motionClassName="absolute inset-x-0 -top-[20%] bottom-0"
          yRange={["0%", "15%"]}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-950/50 to-green-950/20" />
      </div>

      <div className="mx-auto max-w-[1400px] w-full px-4 pt-32 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl">
          {/* Icon Badge */}
          <FadeIn direction="up" duration={0.6}>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Icon className="h-7 w-7 text-white" />
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn direction="up" delay={0.15} duration={0.8}>
            <h1 className="mt-6 text-fluid-hero font-display font-bold tracking-tight text-white text-balance">
              {title}
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn direction="up" delay={0.3} duration={0.8}>
            <div className="mt-6 space-y-4">
              {paragraphs.map((text, index) => (
                <p
                  key={`${index}-${text.slice(0, 20)}`}
                  className="text-lg leading-relaxed text-white/75 sm:text-xl text-pretty"
                >
                  {text}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn direction="up" delay={0.45} duration={0.8}>
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
                  Zatražite ponudu
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <a href="#proces" className="flex items-center gap-2">
                  Kako funkcionira
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Energy bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <EnergyBarReveal />
      </div>
    </section>
  )
}
