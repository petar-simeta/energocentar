import type { LucideIcon } from "lucide-react"

interface ProcessStep {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceProcessProps {
  steps: ProcessStep[]
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section id="proces" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">Proces izrade</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Transparentan i jednostavan proces od prvog kontakta do gotovog dokumenta.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-primary-foreground/20 lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10">
                  <step.icon className="h-9 w-9 text-primary-foreground" />
                </div>
                <span className="mt-4 font-serif text-sm font-semibold text-primary-foreground/60">
                  Korak {index + 1}
                </span>
                <h3 className="mt-2 font-serif text-lg font-semibold text-primary-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
