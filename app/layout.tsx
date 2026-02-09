import type React from "react";
import type { Metadata } from "next";
import { Jost, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { CookieBanner } from "@/components/cookie-banner";
import { siteConfig } from "@/lib/config/site";
import "./globals.css";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: "9GK6SSdePVyAQQMwlzG_407tShwAJXakQJsvWPvuko4",
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
        className={`${jost.variable} ${dmSans.variable} font-sans antialiased`}
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
        <SpeedInsights />
      </body>
    </html>
  );
}
