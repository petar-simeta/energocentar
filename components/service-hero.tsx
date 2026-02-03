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
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          priority
          className="object-cover object-bottom opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-light-green/60 via-background/40 to-background/90" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24 lg:px-8">
        <div className="max-w-3xl">
          {/* Icon Badge */}
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-7 w-7 text-primary" />
          </div>

          {/* Title */}
          <h1 className="mt-6 font-sans text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl text-balance">
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
              className="border-light-green bg-light-green text-white hover:bg-primary hover:text-primary-foreground hover:border-primary"
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
