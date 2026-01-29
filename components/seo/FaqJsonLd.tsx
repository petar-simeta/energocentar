import { buildFaqJsonLd, type FaqItem } from "@/lib/seo/faqJsonLd"

type Props = {
  faqs: FaqItem[]
}

export function FaqJsonLd({ faqs }: Props) {
  const jsonLd = buildFaqJsonLd(faqs)
  if (!jsonLd) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
