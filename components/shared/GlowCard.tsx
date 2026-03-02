'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'gold' | 'teal'
  onClick?: () => void
  hover?: boolean
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'gold',
  onClick,
  hover = true,
}: GlowCardProps) {
  const glowStyles = {
    gold: 'hover:shadow-[0_0_40px_rgba(212,168,83,0.15)] hover:border-[rgba(212,168,83,0.2)]',
    teal: 'hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] hover:border-[rgba(14,165,233,0.2)]',
  }

  return (
    <motion.div
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300',
        hover && glowStyles[glowColor],
        hover && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      onClick={onClick}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
