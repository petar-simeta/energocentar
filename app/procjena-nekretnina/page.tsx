import type { Metadata } from "next"
import { Building2, Phone, Search, Calculator, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceWhatIs } from "@/components/service-what-is"
import { ServiceProcess } from "@/components/service-process"
import { ServiceDeliverables } from "@/components/service-deliverables"
import { ServiceFaqTeaser } from "@/components/service-faq-teaser"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Procjena vrijednosti nekretnina Zagreb | Ovlašteni procjenitelj",
  description:
    "Stručna procjena tržišne vrijednosti nekretnina od ovlaštenih procjenitelja u Zagrebu. Za banke, sudove, porezne potrebe. Brza izrada. Nazovite!",
  keywords:
    "procjena nekretnina zagreb, procjena vrijednosti stana, procjena kuće, sudski vještak nekretnine, procjena za banku",
}

const processSteps = [
  {
    icon: Phone,
    title: "Upit i dogovor",
    description: "Kontaktirate nas s osnovnim podacima — definiramo svrhu i opseg procjene.",
  },
  {
    icon: Search,
    title: "Pregled nekretnine",
    description: "Naš procjenitelj obavlja detaljan pregled i fotografiranje nekretnine.",
  },
  {
    icon: Calculator,
    title: "Analiza i izračun",
    description: "Analiziramo tržište, usporedive prodaje i specifičnosti vaše nekretnine.",
  },
  {
    icon: FileText,
    title: "Elaborat procjene",
    description: "Izrađujemo detaljan elaborat s obrazloženjem procijenjene vrijednosti.",
  },
]

const faqs = [
  {
    question: "Zašto mi treba procjena nekretnine?",
    answer:
      "Procjena je potrebna za bankovne kredite, sudske postupke (nasljedstvo, razvod), porezne potrebe, osiguranje, ili jednostavno za informativne svrhe prije prodaje.",
  },
  {
    question: "Koliko dugo traje izrada procjene?",
    answer: "Standardna izrada traje 5-7 radnih dana. Hitne procjene možemo izraditi u roku od 48-72 sata uz doplatu.",
  },
  {
    question: "Je li vaša procjena važeća za banku?",
    answer: "Da, naši procjenitelji su ovlašteni i naše procjene prihvaćaju sve banke u Hrvatskoj.",
  },
  {
    question: "Što utječe na vrijednost nekretnine?",
    answer:
      "Lokacija, površina, stanje nekretnine, kat, orijentacija, parking, energetski razred i brojni drugi faktori utječu na konačnu vrijednost.",
  },
]

export default function PropertyValuationPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          icon={Building2}
          title="Procjena vrijednosti nekretnina"
          description="Stručna i objektivna procjena tržišne vrijednosti vaše nekretnine od ovlaštenih procjenitelja. Izrađujemo elaborat priznat od svih banaka, sudova i državnih institucija."
          image="/luxury-apartment-interior-real-estate-valuation-pr.jpg"
        />

        <ServiceWhatIs
          title="Što je procjena nekretnine i kada vam treba?"
          content={[
            "Procjena vrijednosti nekretnine je stručna analiza kojom ovlašteni procjenitelj utvrđuje tržišnu vrijednost nekretnine na temelju niza faktora — lokacije, površine, stanja, usporedivih prodaja i tržišnih trendova.",
            "Procjenu izrađuju ovlašteni sudski vještaci i procjenitelji s licencom, a elaborat je priznat u svim pravnim i bankarskim postupcima u Hrvatskoj.",
          ]}
          highlights={[
            "Zahtjev banke za hipotekarni kredit",
            "Ostavinski postupak (nasljedstvo)",
            "Brakorazvodna parnica i podjela imovine",
            "Porezne potrebe i osiguranje",
            "Informativna procjena prije prodaje",
          ]}
        />

        <ServiceProcess steps={processSteps} />

        <ServiceDeliverables
          title="Što dobivate?"
          description="Izrađujemo detaljan elaborat procjene koji je priznat od svih relevantnih institucija — banaka, sudova i poreznih uprava."
          items={[
            "Detaljan elaborat procjene s obrazloženjem",
            "Procijenjena tržišna vrijednost nekretnine",
            "Fotografska dokumentacija",
            "Analiza usporedivih prodaja na tržištu",
            "Ovjera ovlaštenog procjenitelja",
          ]}
          image="/property-valuation-report-documents-professional-r.jpg"
        />

        <ServiceFaqTeaser faqs={faqs} />

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
