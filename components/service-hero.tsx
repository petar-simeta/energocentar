import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config/site"
import type { LucideIcon } from "lucide-react"

interface ServiceHeroProps {
  icon: LucideIcon
  title: string
  description: string | string[]
  image: string
}

export function ServiceHero({ icon: Icon, title, description, image }: ServiceHeroProps) {
  const paragraphs = Array.isArray(description) ? description : [description]

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src={image || "/placeholder.svg"} alt={title} fill priority className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          {/* Icon Badge */}
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-7 w-7 text-primary" />
          </div>

          {/* Title */}
          <h1 className="mt-6 font-sans text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl text-balance">
            {title}
          </h1>

          {/* Description */}
          <div className="mt-6 space-y-4">
            {paragraphs.map((text, index) => (
              <p key={`${index}-${text.slice(0, 20)}`} className="text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">
                {text}
              </p>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
              <a href={`tel:${siteConfig.phone.href}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Zatražite ponudu
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a href="#proces" className="flex items-center gap-2">
                Kako funkcionira
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
