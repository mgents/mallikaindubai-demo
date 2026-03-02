'use client'

import { motion } from 'framer-motion'

interface GradientBlobProps {
  color: 'gold' | 'teal'
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  size?: number
  className?: string
}

const positionMap = {
  'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
  'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
  'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}

export default function GradientBlob({ color, position, size = 600, className = '' }: GradientBlobProps) {
  const gradient = color === 'gold'
    ? 'radial-gradient(circle, rgba(212,168,83,0.12) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)'

  return (
    <motion.div
      className={`absolute pointer-events-none ${positionMap[position]} ${className}`}
      style={{
        width: size,
        height: size,
        background: gradient,
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
