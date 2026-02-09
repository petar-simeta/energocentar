export const CONSENT_KEY = "cookie-consent"
export const CONSENT_EVENT = "analytics-consent"

export type ConsentStatus = "accepted" | "declined"

export function subscribeConsent(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined
  window.addEventListener(CONSENT_EVENT, onStoreChange)
  return () => window.removeEventListener(CONSENT_EVENT, onStoreChange)
}

export function getConsentSnapshot(): ConsentStatus | null {
  if (typeof window === "undefined") return null
  const consent = localStorage.getItem(CONSENT_KEY)
  return consent === "accepted" || consent === "declined" ? consent : null
}

export function getConsentServerSnapshot() {
  return null
}

export function setConsent(consent: ConsentStatus) {
  if (typeof window === "undefined") return
  localStorage.setItem(CONSENT_KEY, consent)
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { consent } }))
}
