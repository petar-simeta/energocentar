import Link from "next/link"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { CopyButton } from "@/components/copy-button"
import { siteConfig } from "@/lib/config/site"
import { services, company, legal } from "@/lib/config/navigation"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/brand/logo-icon.svg" alt="" width={40} height={40} className="h-10 w-10 brightness-0 invert" />
              <span className="font-serif text-xl font-semibold">{siteConfig.shortName}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${siteConfig.phone.href}`}
                  className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone.display}
                </a>
                <CopyButton
                  value={siteConfig.phone.href.replace("+385", "0")}
                  label="Telefonski broj"
                  className="text-primary-foreground/70 hover:bg-primary-foreground/10"
                />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
                <CopyButton
                  value={siteConfig.email}
                  label="E-mail adresa"
                  className="text-primary-foreground/70 hover:bg-primary-foreground/10"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Usluge</h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-opacity hover:opacity-100 hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Tvrtka</h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-opacity hover:opacity-100 hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Pravne informacije</h3>
            <ul className="mt-4 space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-opacity hover:opacity-100 hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} {siteConfig.name}. Sva prava pridržana.
            </p>
            <p className="text-sm text-primary-foreground/70">OIB: {siteConfig.oib}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
