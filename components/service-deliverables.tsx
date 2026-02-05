"use client"

import { CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger"
import { ParallaxImage } from "@/components/motion/parallax-image"

interface ServiceDeliverablesProps {
  title: string
  description: string
  items: string[]
  note?: string
  image: string
}

export function ServiceDeliverables({
  title,
  description,
  items,
  note,
  image,
}: ServiceDeliverablesProps) {
  return (
    <section className="bg-surface-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-fluid-section font-display font-bold text-foreground text-balance">
                {title}
              </h2>
              <p className="mt-4 text-lg text-stone-600">{description}</p>
              <StaggerChildren staggerDelay={0.1} className="mt-8 space-y-4">
                {items.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
              {note ? (
                <p className="mt-6 text-sm leading-relaxed text-stone-600">
                  {note}
                </p>
              ) : null}
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="right">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <ParallaxImage
                src={image}
                alt={title}
                speed={0.15}
                className="absolute inset-0"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
