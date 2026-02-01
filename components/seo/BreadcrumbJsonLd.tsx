import { siteConfig } from "@/lib/config/site"

type BreadcrumbItem = {
  name: string
  path: string
}

type Props = {
  items: BreadcrumbItem[]
}

export function BreadcrumbJsonLd({ items }: Props) {
  if (!items.length) return null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
