import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { LocationSection } from "@/components/location-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
