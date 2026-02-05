import Image from "next/image";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Zagreb - centar",
  "Novi Zagreb",
  "Sesvete",
  "Velika Gorica",
  "Samobor",
  "Zaprešić",
  "Dugo Selo",
  "Ivanić-Grad",
];

export function LocationSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/zagreb-city-panorama-aerial-view-modern-architectu.jpg"
              alt="Panorama Zagreba"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-primary-foreground">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Zagreb i okolica</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Radimo u Zagrebu, okolici i cijeloj Hrvatskoj
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Naš tim stručnjaka pokriva područje Grada Zagreba i Zagrebačke
              županije. Energetske certifikate i procjene nekretnina najčešće
              izrađujemo u Zagrebu i okolici, a po potrebi radimo i na području
              cijele Hrvatske.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{area}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              <strong className="text-foreground">Niste iz Zagreba?</strong>{" "}
              Radimo po cijeloj Hrvatskoj — kontaktirajte nas za ponudu
              prilagođenu vašoj lokaciji.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
