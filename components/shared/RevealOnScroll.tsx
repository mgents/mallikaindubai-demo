'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { variants, transitions } from '@/lib/animations'

interface RevealOnScrollProps {
  children: ReactNode
  variant?: keyof typeof variants
  delay?: number
  className?: string
  once?: boolean
}

export default function RevealOnScroll({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ ...transitions.smooth, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
