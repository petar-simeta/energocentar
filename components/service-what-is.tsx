"use client"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger"

interface ServiceWhatIsProps {
  title: string
  content: string[]
  highlightsTitle: string
  highlights: string[]
  preparation?: {
    title: string
    items: string[]
  }
}

export function ServiceWhatIs({
  title,
  content,
  highlightsTitle,
  highlights,
  preparation,
}: ServiceWhatIsProps) {
  return (
    <section className="bg-surface-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-fluid-section font-display font-bold text-foreground text-balance">
                {title}
              </h2>
              <div className="mt-6 space-y-4">
                {content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-relaxed text-stone-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Highlights & Preparation */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <div className="rounded-2xl border-l-4 border-l-green-600 bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {highlightsTitle}
                </h3>
                <StaggerChildren staggerDelay={0.1} className="mt-6 space-y-4">
                  {highlights.map((highlight, index) => (
                    <StaggerItem key={highlight}>
                      <div className="flex gap-4">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>

              {preparation && (
                <div className="rounded-2xl border-l-4 border-l-green-400 bg-white p-8 shadow-sm">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {preparation.title}
                  </h3>
                  <StaggerChildren staggerDelay={0.1} className="mt-6 space-y-4">
                    {preparation.items.map((item, index) => (
                      <StaggerItem key={item}>
                        <div className="flex gap-4">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-semibold text-white">
                            {index + 1}
                          </span>
                          <span className="text-foreground">{item}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
