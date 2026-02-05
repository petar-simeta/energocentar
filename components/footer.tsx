import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { EnergyBar } from "@/components/energy-bar";
import { siteConfig } from "@/lib/config/site";
import { services, company, legal } from "@/lib/config/navigation";

export function Footer() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city} ${siteConfig.address.postalCode}`
  )}`;

  return (
    <footer className="bg-green-950 text-white">
      <EnergyBar />
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Company Info */}
          <div className="md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/logo-icon.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="font-display text-xl font-semibold">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${siteConfig.phone.href}`}
                  className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
                >
                  <Phone className="h-4 w-4 text-green-400" />
                  {siteConfig.phone.display}
                </a>
                <CopyButton
                  value={siteConfig.phone.href.replace("+385", "0")}
                  label="Telefonski broj"
                  className="text-white/60 hover:bg-white/10 hover:text-white focus-visible:ring-white/30"
                />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
                >
                  <Mail className="h-4 w-4 text-green-400" />
                  {siteConfig.email}
                </a>
                <CopyButton
                  value={siteConfig.email}
                  label="E-mail adresa"
                  className="text-white/60 hover:bg-white/10 hover:text-white focus-visible:ring-white/30"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-green-400" />
                <span>{siteConfig.address.display}</span>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/60 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  aria-label="Otvori Google Maps"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold">Usluge</h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-lg font-semibold">Tvrtka</h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-lg font-semibold">
              Pravne informacije
            </h3>
            <ul className="mt-4 space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} {siteConfig.name}. Sva prava
              pridržana.
            </p>
            <p className="text-sm text-white/50">
              OIB: {siteConfig.oib}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
