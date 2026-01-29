import type { Metadata } from "next"
import { Layers, Phone, FileSearch, PenTool, BookOpen, type LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceWhatIs } from "@/components/service-what-is"
import { ServiceProcess } from "@/components/service-process"
import { ServiceDeliverables } from "@/components/service-deliverables"
import { ServiceFaqTeaser } from "@/components/service-faq-teaser"
import { CtaSection } from "@/components/cta-section"
import { etaziranje } from "@/content/services/etaziranje"
import { getServiceFaqs } from "@/content/faq"

export const metadata: Metadata = {
  title: etaziranje.meta.title,
  description: etaziranje.meta.description,
  keywords: etaziranje.meta.keywords,
}

const iconMap: Record<string, LucideIcon> = {
  Phone,
  FileSearch,
  PenTool,
  BookOpen,
}

const processSteps = etaziranje.processSteps.map((step) => ({
  icon: iconMap[step.iconName],
  title: step.title,
  description: step.description,
}))

export default function CondominiumPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          icon={Layers}
          title={etaziranje.hero.title}
          description={etaziranje.hero.description}
          image={etaziranje.hero.image}
        />

        <ServiceWhatIs
          title={etaziranje.whatIs.title}
          content={etaziranje.whatIs.content}
          highlights={etaziranje.whatIs.highlights}
        />

        <ServiceProcess steps={processSteps} />

        <ServiceDeliverables
          title={etaziranje.deliverables.title}
          description={etaziranje.deliverables.description}
          items={etaziranje.deliverables.items}
          image={etaziranje.deliverables.image}
        />

        <ServiceFaqTeaser faqs={getServiceFaqs("etaziranje")} />

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
