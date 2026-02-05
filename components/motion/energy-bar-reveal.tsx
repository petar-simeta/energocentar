"use client"

import { motion, useReducedMotion } from "framer-motion"

interface EnergyBarRevealProps {
  variant?: "full" | "green"
  className?: string
}

export function EnergyBarReveal({ variant = "full", className = "" }: EnergyBarRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const barClass = variant === "green" ? "energy-bar-green" : "energy-bar"

  if (shouldReduceMotion) {
    return <div className={`${barClass} ${className}`} />
  }

  return (
    <motion.div
      className={`${barClass} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ transformOrigin: "left" }}
    />
  )
}
