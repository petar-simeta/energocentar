import { Phone, ClipboardCheck, FileText, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kontaktirajte nas",
    description: "Nazovite ili pošaljite upit s osnovnim podacima o nekretnini.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Dogovaramo termin",
    description: "Organiziramo dolazak stručnjaka u vrijeme koje vama odgovara.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Pregled i izrada",
    description: "Obavljamo mjerenja i prikupljamo potrebne podatke na terenu.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Dostava dokumenta",
    description: "Primate gotov certifikat ili elaborat u dogovorenom roku.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">Kako funkcionira?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Jednostavan proces u četiri koraka — od upita do gotovog dokumenta.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-primary-foreground/20 lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="mt-4 font-serif text-sm font-semibold text-primary-foreground/60">{step.number}</span>
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
