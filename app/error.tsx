"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10">
          <AlertTriangle className="h-7 w-7 text-destructive" />
        </div>
        <h1 className="mt-6 font-sans text-2xl font-bold text-foreground sm:text-3xl">
          Došlo je do pogreške
        </h1>
        <p className="mt-4 text-muted-foreground">
          Nažalost, došlo je do neočekivane pogreške. Pokušajte ponovno ili nas kontaktirajte ako problem potraje.
        </p>
        <div className="mt-8">
          <Button onClick={reset} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Pokušaj ponovno
          </Button>
        </div>
      </div>
    </div>
  )
}
