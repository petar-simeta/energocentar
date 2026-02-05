import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck, Building2, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileCheck,
    title: "Energetski certifikati",
    description:
      "Izrada energetskih certifikata za stanove, kuće, poslovne prostore i zgrade. Obavezno pri prodaji ili iznajmljivanju nekretnine, u skladu s važećim zakonima.",
    href: "/energetski-certifikati",
    image: "/energy-efficiency-certificate-document-professiona.jpg",
  },
  {
    icon: Building2,
    title: "Procjena vrijednosti",
    description:
      "Ovlaštena procjena tržišne vrijednosti nekretnina za banke, sudove, kupoprodaju, nasljeđivanje i kreditne potrebe.",
    href: "/procjena-nekretnina",
    image: "/property-valuation-real-estate-professional-inspec.jpg",
  },
  {
    icon: Layers,
    title: "Etažiranje",
    description:
      "Izrada dokumentacije i provedba etažiranja stanova i zgrada radi upisa vlasništva u zemljišne knjige.",
    href: "/etaziranje",
    image: "/floor-plan-architectural-blueprint-professional.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="usluge" className="py-20 sm:py-28">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Naše usluge
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Sve što vam treba za vašu nekretninu na jednom mjestu — brzo,
            stručno i po fer cijenama.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Saznajte više
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
