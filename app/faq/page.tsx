import type { Metadata } from "next"
import { HelpCircle, Phone, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config/site"
import { faqGroups } from "@/content/faq"

export const metadata: Metadata = {
  title: "Česta pitanja (FAQ) | ENERGOCENTAR d.o.o.",
  description:
    "Odgovori na najčešća pitanja o energetskim certifikatima, procjenama nekretnina i etažiranju. Saznajte sve što vas zanima.",
}

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
