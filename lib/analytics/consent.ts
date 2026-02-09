export const CONSENT_KEY = "cookie-consent"
export const CONSENT_EVENT = "analytics-consent"

export type ConsentStatus = "accepted" | "declined"

let memoryConsent: ConsentStatus | null = null

export function subscribeConsent(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_KEY) onStoreChange()
  }

  window.addEventListener(CONSENT_EVENT, onStoreChange)
  window.addEventListener("storage", onStorage)
  return () => {
    window.removeEventListener(CONSENT_EVENT, onStoreChange)
    window.removeEventListener("storage", onStorage)
  }
}

export function getConsentSnapshot(): ConsentStatus | null {
  if (typeof window === "undefined") return memoryConsent

  try {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === "accepted" || consent === "declined") {
      memoryConsent = consent
      return consent
    }
  } catch {
    // Ignore storage errors and fallback to in-memory state.
  }

  return memoryConsent
}

export function getConsentServerSnapshot() {
  return memoryConsent
}

export function setConsent(consent: ConsentStatus) {
  memoryConsent = consent
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(CONSENT_KEY, consent)
  } catch {
    // Ignore storage errors and keep consent in memory for current session.
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { consent } }))
}
