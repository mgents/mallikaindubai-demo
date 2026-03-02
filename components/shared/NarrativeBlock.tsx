'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles } from 'lucide-react'

interface NarrativeBlockProps {
  text: string
  className?: string
}

export default function NarrativeBlock({ text, className = '' }: NarrativeBlockProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-4 max-w-3xl mb-12 ${className}`}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
          <Sparkles className="w-4 h-4" style={{ color: '#D4A853' }} />
        </div>
      </div>
      <p className="text-lg md:text-xl leading-relaxed opacity-70 italic">
        {text}
      </p>
    </motion.div>
  )
}
