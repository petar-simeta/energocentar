import type { Metadata } from "next"
import { FileCheck, Phone, ClipboardCheck, Ruler, FileText, type LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceWhatIs } from "@/components/service-what-is"
import { ServiceProcess } from "@/components/service-process"
import { ServiceDeliverables } from "@/components/service-deliverables"
import { ServiceFaqTeaser } from "@/components/service-faq-teaser"
import { CtaSection } from "@/components/cta-section"
import { FaqJsonLd } from "@/components/seo/FaqJsonLd"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd"
import { energetskiCertifikati } from "@/content/services/energetski-certifikati"
import { getServiceFaqs } from "@/content/faq"
import { siteConfig } from "@/lib/config/site"

const canonical = `${siteConfig.url}/energetski-certifikati`

export const metadata: Metadata = {
  title: energetskiCertifikati.meta.title,
  description: energetskiCertifikati.meta.description,
  keywords: energetskiCertifikati.meta.keywords,
  alternates: {
    canonical,
  },
  openGraph: {
    title: energetskiCertifikati.meta.title,
    description: energetskiCertifikati.meta.description,
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
    title: energetskiCertifikati.meta.title,
    description: energetskiCertifikati.meta.description,
    images: ["/og.jpg"],
  },
}

const iconMap: Record<string, LucideIcon> = {
  Phone,
  ClipboardCheck,
  Ruler,
  FileText,
}

const processSteps = energetskiCertifikati.processSteps.map((step) => ({
  icon: iconMap[step.iconName],
  title: step.title,
  description: step.description,
}))

export default function EnergyCertificatePage() {
  const faqs = getServiceFaqs("energetski-certifikati")

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Energetski certifikati", path: "/energetski-certifikati" },
        ]}
      />
      <ServiceJsonLd
        name="Energetski certifikati"
        description={energetskiCertifikati.meta.description}
        path="/energetski-certifikati"
        serviceType="Energetsko certificiranje"
      />
      <FaqJsonLd faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          icon={FileCheck}
          title={energetskiCertifikati.hero.title}
          description={energetskiCertifikati.hero.description}
          image={energetskiCertifikati.hero.image}
        />

        <ServiceWhatIs
          title={energetskiCertifikati.whatIs.title}
          content={energetskiCertifikati.whatIs.content}
          highlightsTitle={energetskiCertifikati.whatIs.highlightsTitle}
          highlights={energetskiCertifikati.whatIs.highlights}
          preparation={energetskiCertifikati.whatIs.preparation}
        />

        <ServiceProcess steps={processSteps} />

        <ServiceDeliverables
          title={energetskiCertifikati.deliverables.title}
          description={energetskiCertifikati.deliverables.description}
          items={energetskiCertifikati.deliverables.items}
          note={energetskiCertifikati.deliverables.note}
          image={energetskiCertifikati.deliverables.image}
        />

        <ServiceFaqTeaser faqs={faqs} />

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
