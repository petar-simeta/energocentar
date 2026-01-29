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
import { energetskiCertifikati } from "@/content/services/energetski-certifikati"
import { getServiceFaqs } from "@/content/faq"

export const metadata: Metadata = {
  title: energetskiCertifikati.meta.title,
  description: energetskiCertifikati.meta.description,
  keywords: energetskiCertifikati.meta.keywords,
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
  return (
    <>
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
          highlights={energetskiCertifikati.whatIs.highlights}
        />

        <ServiceProcess steps={processSteps} />

        <ServiceDeliverables
          title={energetskiCertifikati.deliverables.title}
          description={energetskiCertifikati.deliverables.description}
          items={energetskiCertifikati.deliverables.items}
          image={energetskiCertifikati.deliverables.image}
        />

        <ServiceFaqTeaser faqs={getServiceFaqs("energetski-certifikati")} />

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
