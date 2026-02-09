"use client"

import { useSyncExternalStore } from "react"
import { Analytics } from "@vercel/analytics/next"
import {
  getConsentServerSnapshot,
  getConsentSnapshot,
  subscribeConsent,
} from "@/lib/analytics/consent"

export function AnalyticsConsent() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  )

  if (consent !== "accepted") return null

  return <Analytics />
}
