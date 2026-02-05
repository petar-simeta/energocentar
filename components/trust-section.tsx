"use client"

import { Shield, Clock, Award, Users } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger"
import { Counter } from "@/components/motion/counter"
import { EnergyBarReveal } from "@/components/motion/energy-bar-reveal"

const stats = [
  {
    icon: Award,
    value: "500+",
    label: "izrađenih energetskih certifikata i procjena",
  },
  {
    icon: Clock,
    value: "48h",
    label: "prosječno vrijeme izrade certifikata",
  },
  {
    icon: Users,
    value: "100%",
    label: "zakonski važeći dokumenti",
  },
  {
    icon: Shield,
    value: "10+",
    label: "godina iskustva u struci",
  },
]

export function TrustSection() {
  return (
    <section className="bg-surface-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="text-fluid-section font-display font-bold text-foreground">
              Zašto odabrati nas?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-stone-600">
              Ovlaštena izrada energetskih certifikata i procjena nekretnina uz
              jasno definirane rokove, transparentne cijene i dugogodišnje
              iskustvo na području Zagreba i Hrvatske.
            </p>
          </div>
        </FadeIn>

        <EnergyBarReveal variant="green" className="mx-auto mt-8 max-w-xs" />

        <StaggerChildren staggerDelay={0.15} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <stat.icon className="h-7 w-7 text-green-700" />
                </div>
                <Counter
                  value={stat.value}
                  className="mt-4 block font-display text-3xl font-bold text-foreground"
                />
                <p className="mt-1 text-sm text-stone-600">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
