import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const services = [
  { name: "Energetski certifikati", href: "/energetski-certifikati" },
  { name: "Procjena nekretnina", href: "/procjena-nekretnina" },
  { name: "Etažiranje", href: "/etaziranje" },
]

const legal = [
  { name: "Uvjeti korištenja", href: "/uvjeti" },
  { name: "Privatnost", href: "/privatnost" },
  { name: "Kolačići", href: "/kolacici" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="font-serif text-lg font-bold text-primary">EC</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Energo Cert</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Vaš pouzdan partner za energetske certifikate, procjene nekretnina i etažiranje u Zagrebu i cijeloj
              Hrvatskoj. Radimo brzo, stručno i po pristupačnim cijenama.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+385912345678"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
              >
                <Phone className="h-4 w-4" />
                +385 91 234 5678
              </a>
              <a
                href="mailto:info@energocert.hr"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
              >
                <Mail className="h-4 w-4" />
                info@energocert.hr
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Ilica 123, 10000 Zagreb, Hrvatska</span>
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
              © {new Date().getFullYear()} Energo Cert d.o.o. Sva prava pridržana.
            </p>
            <p className="text-sm text-primary-foreground/70">OIB: 12345678901</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
