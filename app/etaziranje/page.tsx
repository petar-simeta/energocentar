import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceHero } from "@/components/service-hero";
import { ServiceWhatIs } from "@/components/service-what-is";
import { ServiceProcess } from "@/components/service-process";
import { ServiceDeliverables } from "@/components/service-deliverables";
import { ServiceFaqTeaser } from "@/components/service-faq-teaser";
import { CtaSection } from "@/components/cta-section";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { etaziranje } from "@/content/services/etaziranje";
import { getServiceFaqs } from "@/content/faq";
import { siteConfig } from "@/lib/config/site";

const canonical = `${siteConfig.url}/etaziranje`;

export const metadata: Metadata = {
  title: etaziranje.meta.title,
  description: etaziranje.meta.description,
  keywords: etaziranje.meta.keywords,
  alternates: {
    canonical,
  },
  openGraph: {
    title: etaziranje.meta.title,
    description: etaziranje.meta.description,
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
    title: etaziranje.meta.title,
    description: etaziranje.meta.description,
    images: ["/og.jpg"],
  },
};

const processSteps = etaziranje.processSteps.map((step) => ({
  iconName: step.iconName,
  title: step.title,
  description: step.description,
}));

export default function CondominiumPage() {
  const faqs = getServiceFaqs("etaziranje");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Etažiranje", path: "/etaziranje" },
        ]}
      />
      <ServiceJsonLd
        name="Etažiranje"
        description={etaziranje.meta.description}
        path="/etaziranje"
        serviceType="Etažiranje"
      />
      <FaqJsonLd faqs={faqs} />
      <Header variant="transparent" />
      <main id="main-content" tabIndex={-1}>
        <ServiceHero
          iconName="Layers"
          title={etaziranje.hero.title}
          description={etaziranje.hero.description}
          image={etaziranje.hero.image}
        />

        <ServiceWhatIs
          title={etaziranje.whatIs.title}
          content={etaziranje.whatIs.content}
          highlightsTitle={etaziranje.whatIs.highlightsTitle}
          highlights={etaziranje.whatIs.highlights}
          preparation={etaziranje.whatIs.preparation}
        />

        <ServiceProcess steps={processSteps} />

        <ServiceDeliverables
          title={etaziranje.deliverables.title}
          description={etaziranje.deliverables.description}
          items={etaziranje.deliverables.items}
          image={etaziranje.deliverables.image}
        />

        <ServiceFaqTeaser faqs={faqs} />

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
