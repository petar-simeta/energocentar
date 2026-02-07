"use client"

import { type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

const directionOffset = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const isHorizontalMotion = direction === "left" || direction === "right"

  if (shouldReduceMotion) {
    return (
      <div className={cn(className, isHorizontalMotion && "overflow-x-clip")}>
        {children}
      </div>
    )
  }

  const offset = directionOffset[direction]

  if (isHorizontalMotion) {
    return (
      <div className={cn(className, "overflow-x-clip")}>
        <motion.div
          initial={{ opacity: 0, ...offset }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children}
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
