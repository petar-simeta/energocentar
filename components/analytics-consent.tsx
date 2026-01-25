"use client"

import { useSyncExternalStore } from "react"
import { Analytics } from "@vercel/analytics/next"

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

export function AnalyticsConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (consent !== "accepted") return null

  return <Analytics />
}
