"use client"

import { useSyncExternalStore } from "react"
import { Button } from "@/components/ui/button"
import {
  getConsentServerSnapshot,
  getConsentSnapshot,
  setConsent,
  subscribeConsent,
} from "@/lib/analytics/consent"

export function CookiePreferences() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  )

  const statusLabel =
    consent === "accepted"
      ? "Prihvatili ste analitičke kolačiće."
      : consent === "declined"
      ? "Odbili ste analitičke kolačiće."
      : "Još niste odabrali postavke kolačića."

  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-4">
      <p className="text-sm text-muted-foreground">{statusLabel}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button
          size="sm"
          onClick={() => setConsent("accepted")}
          disabled={consent === "accepted"}
        >
          Prihvati analitiku
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setConsent("declined")}
          disabled={consent === "declined"}
        >
          Odbij analitiku
        </Button>
      </div>
    </div>
  )
}
