"use client"

import { Copy, Check } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { toast } from "sonner"

interface CopyButtonProps {
  value: string
  label?: string
  className?: string
}

export function CopyButton({ value, label, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const getSuccessMessage = (messageLabel?: string) => {
    if (!messageLabel) return "Kopirano"
    if (messageLabel === "Telefonski broj") return "Telefonski broj kopiran"
    if (messageLabel === "E-mail adresa") return "E-mail adresa kopirana"
    return `${messageLabel} kopirano`
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast.success(getSuccessMessage(label))
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Kopiranje nije uspjelo")
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 ${className}`}
      aria-label={label ? `Kopiraj ${label}` : "Kopiraj"}
      type="button"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-current" /> : <Copy className="h-3.5 w-3.5 text-current" />}
    </button>
  )
}
