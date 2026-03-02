'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, DollarSign, Home } from 'lucide-react'

interface PersonaBadgeProps {
  type: 'growth' | 'cashflow' | 'entry'
  className?: string
}

const badgeConfig = {
  growth: {
    icon: Building2,
    label: 'FOR GROWTH SEEKERS',
    emoji: '🎯',
    color: 'teal',
  },
  cashflow: {
    icon: DollarSign,
    label: 'FOR CASHFLOW SEEKERS',
    emoji: '💰',
    color: 'gold',
  },
  entry: {
    icon: Home,
    label: 'FOR ENTRY SEEKERS',
    emoji: '🚀',
    color: 'coral',
  },
}

export default function PersonaBadge({ type, className = '' }: PersonaBadgeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const config = badgeConfig[type]
  const Icon = config.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center gap-3 px-6 py-3 glass rounded-full backdrop-blur-xl border-2 ${className}`}
      style={{
        borderColor: config.color === 'teal' ? '#0EA5E9' : config.color === 'gold' ? '#D4A853' : '#FF6B6B',
      }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
        <Icon
          className="w-5 h-5"
          style={{
            color: config.color === 'teal' ? '#38BDF8' : config.color === 'gold' ? '#E8C97A' : '#FFB4A2',
          }}
        />
      </div>

      {/* Label */}
      <span
        className="text-sm md:text-base font-bold tracking-wide"
        style={{
          fontFamily: 'var(--font-display)',
          color: config.color === 'teal' ? '#38BDF8' : config.color === 'gold' ? '#E8C97A' : '#FFB4A2',
        }}
      >
        {config.emoji} {config.label}
      </span>

      {/* Pulsing dot */}
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{
          backgroundColor:
            config.color === 'teal' ? '#0EA5E9' : config.color === 'gold' ? '#D4A853' : '#FF6B6B',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}
