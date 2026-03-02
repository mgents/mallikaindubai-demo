'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
  trigger?: boolean
}

export default function TypewriterText({
  text,
  speed = 25,
  delay = 0,
  className = '',
  onComplete,
  trigger = true,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!trigger) return
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [trigger, delay])

  useEffect(() => {
    if (!started) return
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      onComplete?.()
    }
  }, [displayText, started, text, speed, onComplete])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayText}
      {started && displayText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-[1em] bg-teal ml-0.5 align-text-bottom"
        />
      )}
    </motion.span>
  )
}
