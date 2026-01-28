import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { LocationSection } from "@/components/location-section"
import { AboutTextSection } from "@/components/about-text-section"
import { CtaSection } from "@/components/cta-section"
import { siteConfig } from "@/lib/config/site"

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  telephone: siteConfig.phone.href,
  email: siteConfig.email,
  areaServed: siteConfig.areaServed,
  url: siteConfig.url,
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <LocationSection />
        <AboutTextSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
