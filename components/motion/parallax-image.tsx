"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  priority?: boolean
  className?: string
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.2,
  priority = false,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`])

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div ref={ref} className="relative h-full w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div ref={ref} className="relative h-full w-full overflow-hidden">
        <motion.div className="absolute inset-[-20%]" style={{ y }}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}
