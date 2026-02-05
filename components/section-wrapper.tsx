import { type ReactNode } from "react"

type SurfaceVariant = "light" | "default" | "muted" | "dark" | "darker"

interface SectionWrapperProps {
  children: ReactNode
  surface?: SurfaceVariant
  className?: string
  id?: string
}

const surfaceStyles: Record<SurfaceVariant, string> = {
  light: "bg-surface-light text-foreground",
  default: "bg-surface-default text-foreground",
  muted: "bg-surface-muted text-foreground",
  dark: "bg-surface-dark text-white",
  darker: "bg-surface-darker text-white",
}

export function SectionWrapper({
  children,
  surface = "light",
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${surfaceStyles[surface]} ${className}`}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
