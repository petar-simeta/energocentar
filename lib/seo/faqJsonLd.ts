export type FaqItem = {
  question: string
  answer: string
}

type BuildOptions = {
  maxItems?: number
}

const stripTags = (value: string) => value.replace(/<[^>]*>/g, "").trim()

export function buildFaqJsonLd(faqs: FaqItem[], options?: BuildOptions) {
  const maxItems = options?.maxItems ?? 25
  if (!Array.isArray(faqs) || maxItems <= 0) return null

  const sanitizedFaqs = faqs
    .map((faq) => ({
      question: stripTags(faq?.question ?? ""),
      answer: stripTags(faq?.answer ?? ""),
    }))
    .filter((faq) => faq.question && faq.answer)
    .slice(0, maxItems)

  if (sanitizedFaqs.length === 0) return null

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sanitizedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
