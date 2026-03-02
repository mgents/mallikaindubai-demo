'use client'

import { motion } from 'framer-motion'

interface MonteCarloFanProps {
  baseIrr: number
  stressed: boolean
}

export default function MonteCarloFan({ baseIrr, stressed }: MonteCarloFanProps) {
  const years = [0, 1, 2, 3, 4, 5]
  const width = 400
  const height = 180
  const padding = 30

  const getY = (value: number) => {
    const range = stressed ? 30 : 25
    const min = stressed ? -5 : 0
    return height - padding - ((value - min) / range) * (height - 2 * padding)
  }

  const getX = (yearIndex: number) => {
    return padding + (yearIndex / 5) * (width - 2 * padding)
  }

  // Generate fan paths
  const bands = stressed
    ? [
        { spread: 0.8, opacity: 0.05, color: '#ef4444' },
        { spread: 0.6, opacity: 0.1, color: '#ef4444' },
        { spread: 0.4, opacity: 0.15, color: '#D4A853' },
        { spread: 0.2, opacity: 0.25, color: '#D4A853' },
      ]
    : [
        { spread: 0.8, opacity: 0.05, color: '#0EA5E9' },
        { spread: 0.6, opacity: 0.1, color: '#0EA5E9' },
        { spread: 0.4, opacity: 0.15, color: '#22c55e' },
        { spread: 0.2, opacity: 0.25, color: '#22c55e' },
      ]

  const baseLine = years.map((yr, i) => {
    const value = baseIrr - (stressed ? 4 : 0) + yr * (stressed ? 0.5 : 1.2)
    return { x: getX(i), y: getY(value), value }
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40 md:h-48">
        {/* Fan bands */}
        {bands.map((band, bi) => {
          const upper = baseLine.map((p, i) => ({
            x: p.x,
            y: getY(p.value + (i * band.spread * (stressed ? 3 : 4))),
          }))
          const lower = baseLine.map((p, i) => ({
            x: p.x,
            y: getY(p.value - (i * band.spread * (stressed ? 2 : 1.5))),
          }))

          const pathData = `
            M ${upper[0].x} ${upper[0].y}
            ${upper.map((p) => `L ${p.x} ${p.y}`).join(' ')}
            ${[...lower].reverse().map((p) => `L ${p.x} ${p.y}`).join(' ')}
            Z
          `

          return (
            <motion.path
              key={bi}
              d={pathData}
              fill={band.color}
              opacity={0}
              animate={{ opacity: band.opacity }}
              transition={{ duration: 0.8, delay: 0.5 + bi * 0.2 }}
            />
          )
        })}

        {/* Base line */}
        <motion.polyline
          points={baseLine.map((p) => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke={stressed ? '#D4A853' : '#22c55e'}
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* X axis labels */}
        {years.map((yr, i) => (
          <text
            key={yr}
            x={getX(i)}
            y={height - 5}
            textAnchor="middle"
            fill="rgba(255,255,255,0.3)"
            fontSize="10"
          >
            Yr {yr}
          </text>
        ))}

        {/* Y axis labels */}
        {[0, 10, 20].map((v) => (
          <text
            key={v}
            x={15}
            y={getY(v)}
            textAnchor="middle"
            fill="rgba(255,255,255,0.2)"
            fontSize="9"
          >
            {v}%
          </text>
        ))}
      </svg>
    </motion.div>
  )
}
