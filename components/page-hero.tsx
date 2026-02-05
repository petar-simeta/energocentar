import type { LucideIcon } from "lucide-react"
import { EnergyBar } from "@/components/energy-bar"

interface PageHeroProps {
  icon?: LucideIcon
  title: string
  subtitle?: string
}

export function PageHero({ icon: Icon, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-surface-light py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {Icon && (
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <Icon className="h-7 w-7 text-green-700" />
            </div>
          )}
          <h1 className="mt-6 font-display text-fluid-section font-bold tracking-tight text-foreground sm:text-fluid-hero">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-stone-600">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <EnergyBar className="mt-16" />
    </section>
  )
}
