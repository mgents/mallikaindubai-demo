'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeadingProps {
  number: string
  title: string
  subtitle: string
  accent?: 'gold' | 'teal'
}

export default function SectionHeading({ number, title, subtitle, accent = 'gold' }: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const accentColor = accent === 'gold' ? '#D4A853' : '#0EA5E9'

  return (
    <div ref={ref} className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        <span
          className="text-sm font-mono tracking-widest"
          style={{ color: accentColor }}
        >
          {number}
        </span>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px"
          style={{ backgroundColor: accentColor }}
        />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl opacity-60 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
