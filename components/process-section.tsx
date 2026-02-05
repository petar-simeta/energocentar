import { Phone, ClipboardCheck, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kontaktirajte nas",
    description:
      "Javite nam se telefonom ili e-mailom i dostavite osnovne podatke o nekretnini.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Dogovaramo termin",
    description:
      "Organiziramo izlazak stručnjaka na teren u najkraćem mogućem roku.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Pregled i izrada",
    description:
      "Obavljamo pregled i izrađujemo energetski certifikat ili procjenu nekretnine.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Dostava dokumenta",
    description:
      "Gotov certifikat ili elaborat dostavljamo elektronički ili osobno.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Kako funkcionira?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Jednostavan proces u četiri koraka — od upita do gotovog dokumenta.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 hidden h-0.5 w-[calc(100%-3rem)] bg-primary-foreground/20 lg:block left-[calc(50%+2.5rem)]" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="mt-4 font-display text-sm font-semibold text-primary-foreground/60">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-primary-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
