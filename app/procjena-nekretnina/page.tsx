import type { Metadata } from "next"
import { Building2, Phone, Search, Calculator, FileText, type LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceWhatIs } from "@/components/service-what-is"
import { ServiceProcess } from "@/components/service-process"
import { ServiceDeliverables } from "@/components/service-deliverables"
import { ServiceFaqTeaser } from "@/components/service-faq-teaser"
import { CtaSection } from "@/components/cta-section"
import { procjenaNekretnina } from "@/content/services/procjena-nekretnina"
import { getServiceFaqs } from "@/content/faq"

export const metadata: Metadata = {
  title: procjenaNekretnina.meta.title,
  description: procjenaNekretnina.meta.description,
  keywords: procjenaNekretnina.meta.keywords,
}

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Search,
  Calculator,
  FileText,
}

const processSteps = procjenaNekretnina.processSteps.map((step) => ({
  icon: iconMap[step.iconName],
  title: step.title,
  description: step.description,
}))

export default function PropertyValuationPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          icon={Building2}
          title={procjenaNekretnina.hero.title}
          description={procjenaNekretnina.hero.description}
          image={procjenaNekretnina.hero.image}
        />

        <ServiceWhatIs
          title={procjenaNekretnina.whatIs.title}
          content={procjenaNekretnina.whatIs.content}
          highlights={procjenaNekretnina.whatIs.highlights}
        />

        <ServiceProcess steps={processSteps} />

        <ServiceDeliverables
          title={procjenaNekretnina.deliverables.title}
          description={procjenaNekretnina.deliverables.description}
          items={procjenaNekretnina.deliverables.items}
          image={procjenaNekretnina.deliverables.image}
        />

        <ServiceFaqTeaser faqs={getServiceFaqs("procjena-nekretnina")} />

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
