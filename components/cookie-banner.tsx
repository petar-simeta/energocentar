"use client"

import { useEffect, useSyncExternalStore } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  getConsentServerSnapshot,
  getConsentSnapshot,
  setConsent,
  subscribeConsent,
} from "@/lib/analytics/consent"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim()
const GA_SCRIPT_ID = "ga-script"

const CONSENT_DENIED: ConsentPayload = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
}

const CONSENT_GRANTED: ConsentPayload = {
  analytics_storage: "granted",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
}

export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  )

  useEffect(() => {
    if (consent === "accepted") {
      enableGoogleAnalytics()
    } else if (consent === "declined") {
      disableGoogleAnalytics()
    }
  }, [consent])

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
        <Button
          onClick={() => setConsent("accepted")}
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Prihvati
        </Button>
        <Button
          onClick={() => setConsent("declined")}
          variant="outline"
          size="sm"
          className="border-border"
        >
          Odbij
        </Button>
      </div>
    </div>
  )
}

function isValidGA4Id(id: string): boolean {
  return /^G-[A-Z0-9]+$/.test(id)
}

function enableGoogleAnalytics() {
  if (!GA_ID || typeof window === "undefined" || !isValidGA4Id(GA_ID)) return

  window[`ga-disable-${GA_ID}`] = false
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }

  window.gtag("consent", "default", CONSENT_DENIED)
  window.gtag("consent", "update", CONSENT_GRANTED)

  if (document.getElementById(GA_SCRIPT_ID)) {
    initializeGoogleAnalytics()
    return
  }

  const script = document.createElement("script")
  script.id = GA_SCRIPT_ID
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  script.async = true
  script.onload = () => {
    initializeGoogleAnalytics()
  }
  script.onerror = () => {
    console.warn("Google Analytics script failed to load.")
  }
  document.head.appendChild(script)
}

function disableGoogleAnalytics() {
  if (!GA_ID || typeof window === "undefined" || !isValidGA4Id(GA_ID)) return

  window[`ga-disable-${GA_ID}`] = true
  window.gtag?.("consent", "update", CONSENT_DENIED)
  clearGoogleAnalyticsCookies()

  const script = document.getElementById(GA_SCRIPT_ID)
  if (script?.parentNode) {
    script.parentNode.removeChild(script)
  }

  window.dataLayer = []
  window.gtag = undefined
  window.__gaInitializedId = undefined
}

function initializeGoogleAnalytics() {
  if (!GA_ID || typeof window === "undefined") return
  if (!window.gtag) return
  if (window.__gaInitializedId === GA_ID) return

  window.gtag("js", new Date())
  window.gtag("config", GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: false,
  })
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
  })

  window.__gaInitializedId = GA_ID
}

function clearGoogleAnalyticsCookies() {
  if (typeof document === "undefined") return
  const cookieNames = getGaCookieNames()
  for (const name of cookieNames) {
    expireCookie(name)
  }
}

function getGaCookieNames(): string[] {
  const allCookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter(Boolean)

  return allCookies.filter((name) => name === "_ga" || name.startsWith("_ga_"))
}

function expireCookie(name: string) {
  const expires = "Thu, 01 Jan 1970 00:00:00 GMT"
  document.cookie = `${name}=; expires=${expires}; path=/; SameSite=Lax`
  document.cookie = `${name}=; expires=${expires}; path=/; SameSite=Lax; Secure`

  const hostnameParts = window.location.hostname.split(".")
  for (let i = 0; i < hostnameParts.length - 1; i += 1) {
    const domain = `.${hostnameParts.slice(i).join(".")}`
    document.cookie = `${name}=; expires=${expires}; path=/; domain=${domain}; SameSite=Lax`
    document.cookie = `${name}=; expires=${expires}; path=/; domain=${domain}; SameSite=Lax; Secure`
  }
}

// Type declaration for gtag and GA disable flags
type ConsentPayload = {
  analytics_storage: "granted" | "denied"
  ad_storage: "granted" | "denied"
  ad_user_data: "granted" | "denied"
  ad_personalization: "granted" | "denied"
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
    __gaInitializedId?: string
    [key: `ga-disable-${string}`]: boolean
  }
}
