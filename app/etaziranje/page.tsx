import type { Metadata } from "next"
import { Layers, Phone, FileSearch, PenTool, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceWhatIs } from "@/components/service-what-is"
import { ServiceProcess } from "@/components/service-process"
import { ServiceDeliverables } from "@/components/service-deliverables"
import { ServiceFaqTeaser } from "@/components/service-faq-teaser"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Etažiranje Zagreb | Elaborat etažiranja za zemljišne knjige",
  description:
    "Stručna izrada elaborata etažiranja za upis posebnih dijelova nekretnine u zemljišne knjige. Brzo i povoljno u Zagrebu i okolici. Nazovite!",
  keywords: "etažiranje zagreb, elaborat etažiranja, upis u zemljišne knjige, etažiranje stana, etažiranje zgrade",
}

const processSteps = [
  {
    icon: Phone,
    title: "Upit i dokumentacija",
    description: "Kontaktirate nas i dostavljate postojeću dokumentaciju o nekretnini.",
  },
  {
    icon: FileSearch,
    title: "Pregled i snimanje",
    description: "Naš stručnjak obavlja detaljan pregled i mjerenja na terenu.",
  },
  {
    icon: PenTool,
    title: "Izrada elaborata",
    description: "Izrađujemo tehnički elaborat s tlocrtima i opisom posebnih dijelova.",
  },
  {
    icon: BookOpen,
    title: "Upis u zemljišne knjige",
    description: "Pomažemo vam s predajom dokumentacije i upisom u gruntovnicu.",
  },
]

const faqs = [
  {
    question: "Što je etažiranje?",
    answer:
      "Etažiranje je postupak utvrđivanja posebnih dijelova zgrade (stanova, poslovnih prostora, garaža) i njihov upis u zemljišne knjige kao samostalnih vlasničkih jedinica.",
  },
  {
    question: "Kada je potrebno etažiranje?",
    answer:
      "Etažiranje je potrebno kad želite prodati stan u zgradi koja nije etažirana, prilikom legalizacije, ili kod razdvajanja vlasništva među suvlasnicima.",
  },
  {
    question: "Koliko traje postupak etažiranja?",
    answer:
      "Izrada elaborata traje 7-14 dana. Ukupno vrijeme ovisi i o zemljišnoknjižnom sudu — cijeli postupak može trajati od 1 do 3 mjeseca.",
  },
  {
    question: "Koji dokumenti su potrebni?",
    answer:
      "Potrebni su izvadak iz zemljišne knjige, građevinska dozvola ili potvrda o legalizaciji, uporabna dozvola i eventualno postojeće tlocrte.",
  },
]

export default function CondominiumPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          icon={Layers}
          title="Etažiranje nekretnina"
          description="Stručna izrada elaborata etažiranja za upis posebnih dijelova nekretnine u zemljišne knjige. Rješavamo kompleksne slučajeve i vodimo vas kroz cijeli postupak do uspješnog upisa."
          image="/architectural-floor-plan-blueprint-technical-drawi.jpg"
        />

        <ServiceWhatIs
          title="Što je etažiranje i zašto je važno?"
          content={[
            "Etažiranje je postupak kojim se zgrada dijeli na posebne dijelove — stanove, poslovne prostore, garaže, spremišta — koji se zatim mogu upisati u zemljišne knjige kao samostalne vlasničke jedinice.",
            "Bez provedenog etažiranja, stan u zgradi ne možete prodati ili opteretiti hipotekom kao samostalnu jedinicu. Etažiranje je preduvjet za svaku pravnu transakciju s nekretninom u višestambenoj zgradi.",
          ]}
          highlights={[
            "Prodaja stana u neetažiranoj zgradi",
            "Dobivanje hipotekarnog kredita",
            "Legalizacija i ozakonjenje objekta",
            "Razdvajanje vlasništva među suvlasnicima",
            "Upis novogradnje u zemljišne knjige",
          ]}
        />

        <ServiceProcess steps={processSteps} />

        <ServiceDeliverables
          title="Što dobivate?"
          description="Izrađujemo kompletan elaborat etažiranja spreman za predaju zemljišnoknjižnom sudu, uključujući sve potrebne tehničke crteže i dokumentaciju."
          items={[
            "Tehnički elaborat etažiranja",
            "Tlocrti svih etaža s označenim posebnim dijelovima",
            "Opis i popis posebnih dijelova nekretnine",
            "Izračun površina i udjela u vlasništvu",
            "Pomoć pri predaji dokumentacije sudu",
          ]}
          image="/floor-plan-technical-drawing-apartment-layout-prof.jpg"
        />

        <ServiceFaqTeaser faqs={faqs} />

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
