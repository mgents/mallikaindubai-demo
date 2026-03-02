'use client'

import { motion } from 'framer-motion'

interface StressTestGaugeProps {
  score: number // 0-100
  label: string
}

export default function StressTestGauge({ score, label }: StressTestGaugeProps) {
  const radius = 80
  const strokeWidth = 10
  const circumference = Math.PI * radius // half circle
  const progress = (score / 100) * circumference

  const getColor = (s: number) => {
    if (s >= 70) return '#22c55e'
    if (s >= 40) return '#D4A853'
    return '#ef4444'
  }

  const getGrade = (s: number) => {
    if (s >= 80) return 'A'
    if (s >= 70) return 'A-'
    if (s >= 60) return 'B+'
    if (s >= 50) return 'B'
    if (s >= 40) return 'B-'
    if (s >= 30) return 'C+'
    return 'C'
  }

  return (
    <div className="flex flex-col items-center">
      <svg width="200" height="120" viewBox="0 0 200 120">
        {/* Background arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <motion.path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={getColor(score)}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: score / 100 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          style={{
            filter: `drop-shadow(0 0 6px ${getColor(score)}40)`,
          }}
        />
        {/* Score text */}
        <text x="100" y="85" textAnchor="middle" fill={getColor(score)} fontSize="28" fontWeight="bold">
          {getGrade(score)}
        </text>
        <text x="100" y="105" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">
          {label}
        </text>
      </svg>
    </div>
  )
}
