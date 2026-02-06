"use client"

import Link from "next/link"
import { ArrowRight, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteConfig } from "@/lib/config/site"
import { FadeIn } from "@/components/motion/fade-in"
import { EnergyBarReveal } from "@/components/motion/energy-bar-reveal"

interface FaqItem {
  question: string
  answer: string
}

interface ServiceFaqTeaserProps {
  faqs: FaqItem[]
}

export function ServiceFaqTeaser({ faqs }: ServiceFaqTeaserProps) {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <EnergyBarReveal variant="green" className="-mt-20 sm:-mt-28 mb-20 sm:mb-28" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Header */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <HelpCircle className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="mt-6 text-fluid-section font-display font-bold text-foreground">Česta pitanja</h2>
              <p className="mt-4 text-stone-600">
                Odgovori na najčešća pitanja naših klijenata. Imate dodatnih pitanja? Slobodno nas kontaktirajte.
              </p>
              <Link
                href={`tel:${siteConfig.phone.href}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-green-700 transition-colors hover:text-green-600"
              >
                Nazovite za više informacija
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* FAQs */}
          <FadeIn direction="right" className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className="border-stone-300 border-l-2 border-l-transparent pl-4 transition-colors hover:border-l-green-400 data-[state=open]:border-l-green-600"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-green-700 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
