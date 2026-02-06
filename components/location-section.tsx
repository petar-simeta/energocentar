"use client"

import { MapPin, CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"
import { ParallaxImage } from "@/components/motion/parallax-image"

const areas = [
  "Zagreb - centar",
  "Novi Zagreb",
  "Sesvete",
  "Velika Gorica",
  "Samobor",
  "Zaprešić",
  "Dugo Selo",
  "Ivanić-Grad",
]

export function LocationSection() {
  return (
    <section className="bg-surface-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <ParallaxImage
                src="/zagreb-from-the-sky.jpg"
                alt="Panorama Zagreba"
                speed={0.15}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Zagreb i okolica</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-fluid-section font-display font-bold text-foreground text-balance">
                Radimo u Zagrebu, okolici i cijeloj Hrvatskoj
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                Naš tim stručnjaka pokriva područje Grada Zagreba i Zagrebačke
                županije. Energetske certifikate i procjene nekretnina najčešće
                izrađujemo u Zagrebu i okolici, a po potrebi radimo i na području
                cijele Hrvatske.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5">
                    <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                    <span className="text-sm text-foreground">{area}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-stone-600">
                <strong className="text-foreground">Niste iz Zagreba?</strong>{" "}
                Radimo po cijeloj Hrvatskoj — kontaktirajte nas za ponudu
                prilagođenu vašoj lokaciji.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
