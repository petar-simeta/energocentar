"use client"

import { FadeIn } from "@/components/motion/fade-in"
import { EnergyBarReveal } from "@/components/motion/energy-bar-reveal"

export function AboutTextSection() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn direction="up">
            <p className="text-xl leading-relaxed text-stone-800 sm:text-2xl lg:text-3xl lg:leading-relaxed">
              <strong className="font-semibold text-green-900">
                ENERGOCENTAR d.o.o.
              </strong>{" "}
              bavi se izradom{" "}
              <strong className="font-semibold text-green-900">
                energetskih certifikata
              </strong>
              ,{" "}
              <strong className="font-semibold text-green-900">
                procjenom vrijednosti nekretnina
              </strong>{" "}
              i{" "}
              <strong className="font-semibold text-green-900">
                etažiranjem stanova i zgrada
              </strong>
              .{" "}
              <strong className="font-semibold text-green-900">
                Energetski certifikati
              </strong>{" "}
              obavezni su pri{" "}
              <strong className="font-semibold text-green-900">
                prodaji i iznajmljivanju
              </strong>{" "}
              nekretnina, a naši{" "}
              <strong className="font-semibold text-green-900">
                ovlašteni stručnjaci
              </strong>{" "}
              osiguravaju{" "}
              <strong className="font-semibold text-green-900">
                brzu i zakonitu izradu dokumentacije
              </strong>
              .
            </p>
          </FadeIn>
          <EnergyBarReveal variant="green" className="mx-auto mt-10 max-w-md" />
        </div>
      </div>
    </section>
  )
}
