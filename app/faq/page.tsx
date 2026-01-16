import type { Metadata } from "next"
import { HelpCircle, Phone, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config/site"

export const metadata: Metadata = {
  title: "Česta pitanja (FAQ) | ENERGOCENTAR d.o.o.",
  description:
    "Odgovori na najčešća pitanja o energetskim certifikatima, procjenama nekretnina i etažiranju. Saznajte sve što vas zanima.",
}

const faqGroups = [
  {
    title: "Energetski certifikati",
    faqs: [
      {
        question: "Koliko vrijedi energetski certifikat?",
        answer:
          "Energetski certifikat vrijedi 10 godina od dana izdavanja. Nakon isteka potrebno je izraditi novi certifikat.",
      },
      {
        question: "Je li energetski certifikat obavezan?",
        answer:
          "Da, energetski certifikat je obavezan pri prodaji ili iznajmljivanju nekretnine u Hrvatskoj prema Zakonu o gradnji.",
      },
      {
        question: "Koliko traje izrada certifikata?",
        answer:
          "Nakon obavljenog pregleda, certifikat izrađujemo u roku od 24-48 sati. Hitne izrade moguće su isti dan uz doplatu.",
      },
      {
        question: "Što trebam pripremiti za pregled?",
        answer:
          "Potrebni su nam podatci o nekretnini (adresa, površina) i pristup svim prostorijama. Ako imate, korisna je i građevinska dokumentacija.",
      },
      {
        question: "Koja je cijena energetskog certifikata?",
        answer:
          "Cijena ovisi o veličini i vrsti nekretnine. Za stan do 50 m² cijena je od 80€. Za točnu ponudu, javite nam se s osnovnim podacima o nekretnini.",
      },
    ],
  },
  {
    title: "Procjena nekretnina",
    faqs: [
      {
        question: "Kada je potrebna procjena nekretnine?",
        answer:
          "Procjena je potrebna pri kupoprodaji, nasljeđivanju, diobi imovine, sudskim postupcima ili za potrebe bankovnog kredita.",
      },
      {
        question: "Koliko traje izrada procjene?",
        answer: "Procjena se obično izrađuje u roku od 3-5 radnih dana, ovisno o složenosti nekretnine.",
      },
      {
        question: "Tko može izrađivati procjene nekretnina?",
        answer: "Procjene mogu izrađivati samo ovlašteni sudski vještaci i procjenitelji s važećom licencom.",
      },
      {
        question: "Je li procjena prihvatljiva za banku?",
        answer: "Da, naše procjene izrađuju ovlašteni procjenitelji i prihvatljive su za sve banke u Hrvatskoj.",
      },
    ],
  },
  {
    title: "Etažiranje",
    faqs: [
      {
        question: "Što je etažiranje?",
        answer:
          "Etažiranje je postupak uspostave vlasništva posebnog dijela nekretnine (stana, poslovnog prostora) i upis u zemljišne knjige.",
      },
      {
        question: "Kada je potrebno etažiranje?",
        answer:
          "Etažiranje je potrebno ako želite prodati, kupiti ili naslijediti stan u zgradi koja još nije etažirana.",
      },
      {
        question: "Koliko traje postupak etažiranja?",
        answer:
          "Postupak etažiranja traje od 30 do 90 dana, ovisno o složenosti i brzini rada zemljišnoknjižnog odjela.",
      },
      {
        question: "Trebam li suglasnost svih suvlasnika?",
        answer:
          "Da, za etažiranje je potrebna suglasnost suvlasnika koji posjeduju više od polovice suvlasničkih dijelova.",
      },
    ],
  },
]

// Generate JSON-LD for FAQ page
function generateFaqJsonLd() {
  const allFaqs = faqGroups.flatMap((group) => group.faqs)
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export default function FaqPage() {
  const jsonLd = generateFaqJsonLd()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <HelpCircle className="h-7 w-7 text-primary" />
              </div>
              <h1 className="mt-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">Česta pitanja</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Ovdje ćete pronaći odgovore na najčešća pitanja o našim uslugama. Ne možete pronaći odgovor? Slobodno
                nas kontaktirajte.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Groups */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {faqGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{group.title}</h2>
                  <Accordion type="single" collapsible className="mt-6 w-full">
                    {group.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${groupIndex}-${faqIndex}`} className="border-border">
                        <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-t border-border bg-card py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Imate dodatnih pitanja?</h2>
              <p className="mt-4 text-muted-foreground">
                Ako niste pronašli odgovor na svoje pitanje, slobodno nas kontaktirajte. Rado ćemo vam pomoći.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                  <a href={`tel:${siteConfig.phone.href}`} className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    {siteConfig.phone.display}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground sm:w-auto bg-transparent"
                >
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    {siteConfig.email}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
