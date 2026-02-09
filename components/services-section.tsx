"use client"

import Link from "next/link"
import { ArrowRight, FileCheck, Building2, Layers } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger"
import { ParallaxImage } from "@/components/motion/parallax-image"

const services = [
  {
    icon: FileCheck,
    title: "Energetski certifikati",
    description:
      "Izrada energetskih certifikata za stanove, kuće, poslovne prostore i zgrade. Obavezno pri prodaji ili iznajmljivanju nekretnine, u skladu s važećim zakonima.",
    href: "/energetski-certifikati",
    image: "/energetski-certifikat-zgrade-zagreb.jpeg",
  },
  {
    icon: Building2,
    title: "Procjena vrijednosti",
    description:
      "Ovlaštena procjena tržišne vrijednosti nekretnina za banke, sudove, kupoprodaju, nasljeđivanje i kreditne potrebe.",
    href: "/procjena-nekretnina",
    image: "/procjena-vrijednosti-nekretnine-strucni-pregled.jpg",
  },
  {
    icon: Layers,
    title: "Etažiranje",
    description:
      "Izrada dokumentacije i provedba etažiranja stanova i zgrada radi upisa vlasništva u zemljišne knjige.",
    href: "/etaziranje",
    image: "/etaziranje-zgrade-strucno-savjetovanje.jpeg",
  },
]

export function ServicesSection() {
  return (
    <section id="usluge" className="bg-surface-default py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="text-fluid-section font-display font-bold text-foreground text-balance">
              Naše usluge
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Sve što vam treba za vašu nekretninu na jednom mjestu — brzo,
              stručno i po fer cijenama.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Energy bar accent at top */}
                <div className="energy-bar" />

                <div className="relative aspect-4/3 overflow-hidden">
                  <ParallaxImage
                    src={service.image}
                    alt={service.title}
                    speed={0.12}
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                    <service.icon className="h-5 w-5 text-green-700" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-green-700 transition-colors group-hover:text-green-600">
                    Saznajte više
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
