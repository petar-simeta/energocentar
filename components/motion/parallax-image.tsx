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
  imageClassName?: string
  motionClassName?: string
  yRange?: [string, string]
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.2,
  priority = false,
  className = "",
  imageClassName = "object-cover object-bottom",
  motionClassName = "absolute inset-x-0 -top-[20%] bottom-0",
  yRange,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    yRange ?? ["0%", `${speed * 100}%`],
  )

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div ref={ref} className="relative h-full w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={imageClassName}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div ref={ref} className="relative h-full w-full overflow-hidden">
        <motion.div className={motionClassName} style={{ y }}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={imageClassName}
          />
        </motion.div>
      </div>
    </div>
  )
}
