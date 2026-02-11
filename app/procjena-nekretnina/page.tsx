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
import { procjenaNekretnina } from "@/content/services/procjena-nekretnina";
import { getServiceFaqs } from "@/content/faq";
import { siteConfig } from "@/lib/config/site";

const canonical = `${siteConfig.url}/procjena-nekretnina`;

export const metadata: Metadata = {
  title: procjenaNekretnina.meta.title,
  description: procjenaNekretnina.meta.description,
  keywords: procjenaNekretnina.meta.keywords,
  alternates: {
    canonical,
  },
  openGraph: {
    title: procjenaNekretnina.meta.title,
    description: procjenaNekretnina.meta.description,
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
    title: procjenaNekretnina.meta.title,
    description: procjenaNekretnina.meta.description,
    images: ["/og.jpg"],
  },
};

const processSteps = procjenaNekretnina.processSteps.map((step) => ({
  iconName: step.iconName,
  title: step.title,
  description: step.description,
}));

export default function PropertyValuationPage() {
  const faqs = getServiceFaqs("procjena-nekretnina");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Procjena nekretnina", path: "/procjena-nekretnina" },
        ]}
      />
      <ServiceJsonLd
        name="Procjena vrijednosti nekretnina"
        description={procjenaNekretnina.meta.description}
        path="/procjena-nekretnina"
        serviceType="Procjena vrijednosti nekretnina"
      />
      <FaqJsonLd faqs={faqs} />
      <Header variant="transparent" />
      <main id="main-content" tabIndex={-1}>
        <ServiceHero
          iconName="Building2"
          title={procjenaNekretnina.hero.title}
          description={procjenaNekretnina.hero.description}
          image={procjenaNekretnina.hero.image}
        />

        <ServiceWhatIs
          title={procjenaNekretnina.whatIs.title}
          content={procjenaNekretnina.whatIs.content}
          highlightsTitle={procjenaNekretnina.whatIs.highlightsTitle}
          highlights={procjenaNekretnina.whatIs.highlights}
          preparation={procjenaNekretnina.whatIs.preparation}
        />

        <ServiceProcess steps={processSteps} />

        <ServiceDeliverables
          title={procjenaNekretnina.deliverables.title}
          description={procjenaNekretnina.deliverables.description}
          items={procjenaNekretnina.deliverables.items}
          image={procjenaNekretnina.deliverables.image}
        />

        <ServiceFaqTeaser faqs={faqs} />

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
