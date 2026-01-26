import Link from "next/link"
import { ArrowRight, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteConfig } from "@/lib/config/site"

interface FaqItem {
  question: string
  answer: string
}

interface ServiceFaqTeaserProps {
  faqs: FaqItem[]
}

export function ServiceFaqTeaser({ faqs }: ServiceFaqTeaserProps) {
  return (
    <section className="border-t border-border bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Header */}
          <div className="lg:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">Česta pitanja</h2>
            <p className="mt-4 text-muted-foreground">
              Odgovori na najčešća pitanja naših klijenata. Imate dodatnih pitanja? Slobodno nas kontaktirajte.
            </p>
            <Link
              href={`tel:${siteConfig.phone.href}`}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Nazovite za više informacija
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* FAQs */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-border">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
