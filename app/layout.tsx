import type React from "react"
import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import { Toaster } from "sonner"
import { AnalyticsConsent } from "@/components/analytics-consent"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
})

export const metadata: Metadata = {
  title: "ENERGOCENTAR d.o.o. | Energetski certifikati, Procjene i Etažiranje",
  description:
    "Stručna izrada energetskih certifikata za stanove, kuće i poslovne prostore u Zagrebu i cijeloj Hrvatskoj. Brzo, pouzdano i po pristupačnim cijenama.",
  keywords:
    "energetski certifikat zagreb, energetski certifikat cijena, procjena nekretnina, etažiranje, energetski certifikat stan, energetski certifikat kuća",
  alternates: {
    canonical: "https://www.energocentar.com",
  },
  openGraph: {
    title: "ENERGOCENTAR d.o.o. | Energetski certifikati, Procjene i Etažiranje",
    description:
      "Stručna izrada energetskih certifikata za stanove, kuće i poslovne prostore u Zagrebu i cijeloj Hrvatskoj.",
    locale: "hr_HR",
    type: "website",
    url: "https://www.energocentar.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENERGOCENTAR d.o.o. | Energetski certifikati, Procjene i Etažiranje",
    description:
      "Stručna izrada energetskih certifikata za stanove, kuće i poslovne prostore u Zagrebu i cijeloj Hrvatskoj.",
  },
  metadataBase: new URL("https://www.energocentar.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`${inter.variable} ${bricolage.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
        >
          Preskoči na glavni sadržaj
        </a>
        {children}
        <Toaster position="bottom-center" richColors />
        <AnalyticsConsent />
        <CookieBanner />
      </body>
    </html>
  )
}
