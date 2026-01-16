import type React from "react"
import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Energo Cert Zagreb | Energetski certifikati, Procjene i Etažiranje",
  description:
    "Stručna izrada energetskih certifikata za stanove, kuće i poslovne prostore u Zagrebu i cijeloj Hrvatskoj. Brzo, pouzdano i po pristupačnim cijenama.",
  keywords:
    "energetski certifikat zagreb, energetski certifikat cijena, procjena nekretnina, etažiranje, energetski certifikat stan, energetski certifikat kuća",
  openGraph: {
    title: "Energo Cert Zagreb | Energetski certifikati, Procjene i Etažiranje",
    description:
      "Stručna izrada energetskih certifikata za stanove, kuće i poslovne prostore u Zagrebu i cijeloj Hrvatskoj.",
    locale: "hr_HR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`${inter.variable} ${bricolage.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
