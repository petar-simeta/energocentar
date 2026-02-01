import { siteConfig } from "@/lib/config/site"

type Props = {
  name: string
  description: string
  path: string
  serviceType: string
}

export function ServiceJsonLd({ name, description, path, serviceType }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: siteConfig.areaServed,
    url: `${siteConfig.url}${path}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
