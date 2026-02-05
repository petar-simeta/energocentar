"use client"

import {
  CircleDot,
  Phone, ClipboardCheck, Ruler, FileText,
  Search, Calculator,
  FileSearch, PenTool, BookOpen,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger"

const iconMap: Record<string, LucideIcon> = {
  Phone, ClipboardCheck, Ruler, FileText,
  Search, Calculator,
  FileSearch, PenTool, BookOpen,
}

interface ProcessStep {
  iconName?: string
  title: string
  description: string
}

interface ServiceProcessProps {
  steps: ProcessStep[]
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section id="proces" className="bg-green-900 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="text-fluid-section font-display font-bold text-white">Proces izrade</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Transparentan i jednostavan proces od prvog kontakta do gotovog dokumenta.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon: LucideIcon = (step.iconName ? iconMap[step.iconName] : undefined) ?? CircleDot
            return (
              <StaggerItem key={step.title}>
                <div className="relative">
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 hidden h-[2px] w-[calc(100%-4rem)] bg-white/15 lg:block left-[calc(50%+3rem)]" />
                  )}

                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/10">
                      <Icon className="h-9 w-9 text-green-300" />
                    </div>
                    <span className="mt-4 font-display text-sm font-semibold text-white/40">
                      Korak {index + 1}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
