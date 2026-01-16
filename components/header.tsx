import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Početna", href: "/" },
  { name: "Energetski certifikati", href: "/energetski-certifikati" },
  { name: "Procjena nekretnina", href: "/procjena-nekretnina" },
  { name: "Etažiranje", href: "/etaziranje" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-serif text-lg font-bold text-primary-foreground">EC</span>
          </div>
          <span className="hidden font-serif text-xl font-semibold text-foreground sm:block">Energo Cert</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="tel:+385912345678" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Nazovite nas</span>
            <span className="sm:hidden">Nazovi</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
