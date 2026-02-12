import type { Metadata } from "next"
import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { PageHero } from "@/components/page-hero"
import { EnergyBar } from "@/components/energy-bar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { faqGroups } from "@/content/faq"
import { siteConfig } from "@/lib/config/site"

const canonical = `${siteConfig.url}/faq`

export const metadata: Metadata = {
  title: "Česta pitanja (FAQ) | ENERGOCENTAR d.o.o.",
  description:
    "Odgovori na najčešća pitanja o energetskim certifikatima, procjenama nekretnina i etažiranju. Saznajte sve što vas zanima.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Česta pitanja (FAQ) | ENERGOCENTAR d.o.o.",
    description:
      "Odgovori na najčešća pitanja o energetskim certifikatima, procjenama nekretnina i etažiranju. Saznajte sve što vas zanima.",
    url: canonical,
    siteName: siteConfig.shortName,
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "ENERGOCENTAR - Energetski certifikati i procjene",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Česta pitanja (FAQ) | ENERGOCENTAR d.o.o.",
    description:
      "Odgovori na najčešća pitanja o energetskim certifikatima, procjenama nekretnina i etažiranju. Saznajte sve što vas zanima.",
    images: ["/og.jpg"],
  },
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
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Česta pitanja", path: "/faq" },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-[67px]">
        <PageHero
          icon={HelpCircle}
          title="Česta pitanja"
          subtitle="Ovdje ćete pronaći odgovore na najčešća pitanja o našim uslugama. Ne možete pronaći odgovor? Slobodno nas kontaktirajte."
        />

        {/* FAQ Groups */}
        <section className="bg-surface-light py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {faqGroups.map((group, groupIndex) => (
                <div key={group.title}>
                  {groupIndex > 0 && <EnergyBar variant="green" className="mb-16" />}
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{group.title}</h2>
                  <Accordion type="single" collapsible className="mt-6 w-full">
                    {group.faqs.map((faq) => (
                      <AccordionItem
                        key={faq.question}
                        value={faq.question}
                        className="border-stone-300 border-l-2 border-l-transparent pl-4 transition-colors hover:border-l-green-400 data-[state=open]:border-l-green-600"
                      >
                        <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-green-700 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-stone-600">
                          <p>{faq.answer}</p>
                          {faq.links?.length ? (
                            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                              {faq.links.map((link) => (
                                <Link
                                  key={`${faq.question}-${link.href}`}
                                  href={link.href}
                                  className="font-medium text-green-700 underline-offset-2 transition-colors hover:text-green-600 hover:underline"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
