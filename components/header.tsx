"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { services, navigation } from "@/lib/config/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesExpanded, setServicesExpanded] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo.svg"
            alt="ENERGOCENTAR"
            width={180}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Usluge Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 font-serif text-base font-extrabold text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-haspopup="menu"
                aria-controls="services-menu"
              >
                Usluge
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" id="services-menu">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="w-full">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Nav Links */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 font-serif text-base font-extrabold text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex">
            <Link href="/kontakt">Kontakt</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Otvori izbornik">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Navigacija</SheetTitle>
              <div className="flex h-full flex-col">
                {/* Mobile Logo */}
                <div className="mb-8 mt-4">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="/brand/logo.svg"
                      alt="ENERGOCENTAR"
                      width={180}
                      height={40}
                      className="h-9 w-auto"
                    />
                  </Link>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-1 flex-col gap-1">
                  {/* Usluge Expandable */}
                  <div>
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                      aria-expanded={servicesExpanded}
                    >
                      Usluge
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {servicesExpanded && (
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-4">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-md px-3 py-2 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other Nav Links */}
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-md px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto pb-8 pt-6">
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    size="lg"
                  >
                    <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                      Kontakt
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
