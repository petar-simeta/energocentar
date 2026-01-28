import type React from "react";
import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Toaster } from "sonner";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Energetski certifikati i procjena nekretnina | ENERGOCENTAR Zagreb",
  description:
    "Energetski certifikati, procjena vrijednosti nekretnina i etažiranje u Zagrebu, okolici i cijeloj Hrvatskoj. Stručno, brzo i uz jasne rokove.",
  metadataBase: new URL("https://www.energocentar.com"),
  alternates: {
    canonical: "https://www.energocentar.com",
  },
  openGraph: {
    title: "Energetski certifikati i procjena nekretnina | ENERGOCENTAR Zagreb",
    description:
      "Energetski certifikati, procjena vrijednosti nekretnina i etažiranje u Zagrebu, okolici i cijeloj Hrvatskoj.",
    url: "https://www.energocentar.com",
    siteName: "ENERGOCENTAR",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "ENERGOCENTAR - Energetski certifikati i procjene",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energetski certifikati i procjena nekretnina | ENERGOCENTAR Zagreb",
    description:
      "Energetski certifikati, procjena vrijednosti nekretnina i etažiranje u Zagrebu, okolici i cijeloj Hrvatskoj.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${inter.variable} ${bricolage.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
        >
          Preskoči na glavni sadržaj
        </a>
        {children}
        <Toaster position="bottom-center" richColors />
        <AnalyticsConsent />
        <CookieBanner />
      </body>
    </html>
  );
}
