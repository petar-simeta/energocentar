"use client"

import { useEffect, useSyncExternalStore } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CONSENT_KEY = "cookie-consent"
const CONSENT_EVENT = "analytics-consent"

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined
  window.addEventListener(CONSENT_EVENT, onStoreChange)
  return () => window.removeEventListener(CONSENT_EVENT, onStoreChange)
}

function getSnapshot(): "accepted" | "declined" | null {
  if (typeof window === "undefined") return null
  const consent = localStorage.getItem(CONSENT_KEY)
  return consent === "accepted" || consent === "declined" ? consent : null
}

function getServerSnapshot() {
  return null
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    if (consent === "accepted") {
      loadGoogleAnalytics()
    } else if (consent === "declined") {
      disableGoogleAnalytics()
    }
  }, [consent])

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    notifyConsent("accepted")
  }

  const declineCookies = () => {
    localStorage.setItem(CONSENT_KEY, "declined")
    notifyConsent("declined")
  }

  if (consent !== null) return null

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

function isValidGA4Id(id: string): boolean {
  return /^G-[A-Z0-9]+$/.test(id)
}

function loadGoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  if (!GA_ID || typeof window === "undefined" || !isValidGA4Id(GA_ID)) return
  window[`ga-disable-${GA_ID}`] = false
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

function disableGoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  if (!GA_ID || typeof window === "undefined" || !isValidGA4Id(GA_ID)) return
  window[`ga-disable-${GA_ID}`] = true
  const script = document.getElementById("ga-script")
  if (script?.parentNode) {
    script.parentNode.removeChild(script)
  }
  window.dataLayer = []
}

function notifyConsent(consent: "accepted" | "declined") {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { consent } }))
}

// Type declaration for gtag and GA disable flags
declare global {
  interface Window {
    dataLayer: unknown[]
    [key: `ga-disable-${string}`]: boolean
  }
}
