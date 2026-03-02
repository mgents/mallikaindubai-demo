'use client'

import { motion } from 'framer-motion'

interface AIBadgeProps {
  label?: string
  className?: string
}

export default function AIBadge({ label = 'AI-Powered', className = '' }: AIBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium tracking-wide ${className}`}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-teal"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span className="text-teal-light">{label}</span>
    </motion.div>
  )
}
