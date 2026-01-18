"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CONSENT_KEY = "cookie-consent"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === null) {
      setShowBanner(true)
    } else if (consent === "accepted") {
      loadGoogleAnalytics()
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setShowBanner(false)
    loadGoogleAnalytics()
  }

  const declineCookies = () => {
    localStorage.setItem(CONSENT_KEY, "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm rounded-xl border border-border bg-card p-4 shadow-lg">
      <p className="text-sm text-muted-foreground">
        Koristimo kolačiće za analitiku.{" "}
        <Link href="/kolacici" className="text-primary underline hover:no-underline">
          Saznaj više
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <Button onClick={acceptCookies} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Prihvati
        </Button>
        <Button onClick={declineCookies} variant="outline" size="sm" className="border-border">
          Odbij
        </Button>
      </div>
    </div>
  )
}

function loadGoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  if (!GA_ID || typeof window === "undefined") return
  if (document.getElementById("ga-script")) return

  // Load gtag.js
  const script = document.createElement("script")
  script.id = "ga-script"
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  script.async = true
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  gtag("js", new Date())
  gtag("config", GA_ID)
}

// Type declaration for gtag
declare global {
  interface Window {
    dataLayer: unknown[]
  }
}
