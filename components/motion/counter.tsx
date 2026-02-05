"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

interface CounterProps {
  value: string
  className?: string
}

function parseNumeric(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/)
  if (!match) return { prefix: "", number: 0, suffix: value }
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] }
}

export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const shouldReduceMotion = useReducedMotion()
  const { prefix, number, suffix } = parseNumeric(value)
  const [displayNumber, setDisplayNumber] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return

    if (shouldReduceMotion) {
      hasAnimated.current = true
      // Use a microtask to avoid synchronous setState in effect body
      queueMicrotask(() => setDisplayNumber(number))
      return
    }

    let start = 0
    const duration = 2000
    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * number)
      setDisplayNumber(start)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    hasAnimated.current = true
    requestAnimationFrame(animate)
  }, [isInView, number, shouldReduceMotion])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? displayNumber : 0}
      {suffix}
    </span>
  )
}
