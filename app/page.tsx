import type { Metadata } from "next"
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

const title = "Energetski certifikati i procjena nekretnina | ENERGOCENTAR Zagreb"
const description =
  "Energetski certifikati, procjena vrijednosti nekretnina i etažiranje u Zagrebu, okolici i cijeloj Hrvatskoj. Stručno, brzo i uz jasne rokove."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title,
    description,
    url: siteConfig.url,
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
    title,
    description,
    images: ["/og.jpg"],
  },
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  telephone: siteConfig.phone.href,
  email: siteConfig.email,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/brand/logo.svg`,
  image: `${siteConfig.url}/og.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone.href,
      email: siteConfig.email,
      areaServed: siteConfig.areaServed,
      availableLanguage: ["hr"],
    },
  ],
  areaServed: siteConfig.areaServed,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      description: "Po dogovoru",
      byAppointment: true,
    },
  ],
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
