import type { Metadata } from "next"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CopyButton } from "@/components/copy-button"
import { PageHero } from "@/components/page-hero"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { siteConfig } from "@/lib/config/site"
import { kontakt } from "@/content/kontakt"

const canonical = `${siteConfig.url}/kontakt`

export const metadata: Metadata = {
  title: "Kontakt | ENERGOCENTAR d.o.o.",
  description:
    "Kontaktirajte ENERGOCENTAR d.o.o. za energetske certifikate, procjene nekretnina i etažiranje. Nazovite ili pošaljite email.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Kontakt | ENERGOCENTAR d.o.o.",
    description:
      "Kontaktirajte ENERGOCENTAR d.o.o. za energetske certifikate, procjene nekretnina i etažiranje. Nazovite ili pošaljite email.",
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
    title: "Kontakt | ENERGOCENTAR d.o.o.",
    description:
      "Kontaktirajte ENERGOCENTAR d.o.o. za energetske certifikate, procjene nekretnina i etažiranje. Nazovite ili pošaljite email.",
    images: ["/og.jpg"],
  },
}

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone.href,
      email: siteConfig.email,
      priceRange: siteConfig.priceRange,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      areaServed: siteConfig.areaServed,
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
    },
    {
      "@type": "ContactPage",
      "@id": `${canonical}/#contact-page`,
      url: canonical,
      name: "Kontakt | ENERGOCENTAR d.o.o.",
      description:
        "Kontaktirajte ENERGOCENTAR d.o.o. za energetske certifikate, procjene nekretnina i etažiranje.",
      inLanguage: "hr-HR",
      mainEntity: {
        "@id": `${siteConfig.url}/#business`,
      },
    },
  ],
}

export default function KontaktPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ]}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-[67px]">
        <PageHero
          icon={Phone}
          title={kontakt.hero.title}
          subtitle={kontakt.hero.description}
        />

        {/* Contact Info */}
        <section className="bg-surface-light py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Details */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Kontakt podaci</h2>

                <div className="mt-8 space-y-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-3 rounded-xl bg-green-50 p-4 sm:flex-row sm:items-start sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <Phone className="h-6 w-6 text-green-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-foreground">Telefon</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <a
                          href={`tel:${siteConfig.phone.href}`}
                          className="text-base font-semibold text-green-700 hover:underline sm:text-lg"
                        >
                          {siteConfig.phone.display}
                        </a>
                        <CopyButton
                          value={siteConfig.phone.href.replace("+385", "0")}
                          label="Telefonski broj"
                          className="text-stone-500 hover:bg-green-100 hover:text-green-700 focus-visible:ring-green-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-3 rounded-xl bg-green-50 p-4 sm:flex-row sm:items-start sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <Mail className="h-6 w-6 text-green-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-foreground">Email</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="break-all text-base font-semibold text-green-700 hover:underline sm:text-lg"
                        >
                          {siteConfig.email}
                        </a>
                        <CopyButton
                          value={siteConfig.email}
                          label="E-mail adresa"
                          className="text-stone-500 hover:bg-green-100 hover:text-green-700 focus-visible:ring-green-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex flex-col gap-3 rounded-xl bg-green-50 p-4 sm:flex-row sm:items-start sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <Clock className="h-6 w-6 text-green-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-foreground">Radno vrijeme</h3>
                      <div className="mt-1 space-y-1 text-stone-600">
                        {kontakt.workingHours.map((wh) => (
                          <p key={wh.label}>{wh.label}: {wh.value}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-3 rounded-xl bg-green-50 p-4 sm:flex-row sm:items-start sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <MapPin className="h-6 w-6 text-green-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-foreground">Adresa</h3>
                      <p className="mt-1 break-words text-stone-600">{siteConfig.address.display}</p>
                    </div>
                  </div>

                  {/* Area */}
                  <div className="flex flex-col gap-3 rounded-xl bg-green-50 p-4 sm:flex-row sm:items-start sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <MapPin className="h-6 w-6 text-green-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-foreground">Područje djelovanja</h3>
                      <div className="mt-1 space-y-1 text-stone-600">
                        {kontakt.areas.map((area) => (
                          <p key={area}>{area}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to get a quote - vertical timeline */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Kako do ponude?</h2>
                <p className="mt-4 text-stone-600">Ponuda je besplatna i bez obveze.</p>

                <div className="mt-8 space-y-0">
                  {kontakt.steps.map((step, index) => (
                    <div key={step.number} className="relative flex gap-4 pb-8 last:pb-0">
                      {/* Vertical connector line */}
                      {index < kontakt.steps.length - 1 && (
                        <div className="absolute left-5 top-12 h-[calc(100%-2rem)] w-0.5 bg-green-200" />
                      )}
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-white font-semibold">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{step.title}</h3>
                        <p className="mt-1 text-sm text-stone-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="bg-surface-muted py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Podaci o tvrtki</h2>
              <div className="mt-6 space-y-1 text-stone-600">
                <p className="text-lg font-semibold text-foreground">{siteConfig.name}</p>
                <p>OIB: {siteConfig.oib}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
