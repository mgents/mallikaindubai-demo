'use client'

import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

interface DealScoreRadarProps {
  metrics: {
    yield: number
    growth: number
    risk: number
    liquidity: number
    developer: number
  }
}

export default function DealScoreRadar({ metrics }: DealScoreRadarProps) {
  const data = [
    { subject: 'Yield', value: metrics.yield },
    { subject: 'Growth', value: metrics.growth },
    { subject: 'Safety', value: 100 - metrics.risk },
    { subject: 'Liquidity', value: metrics.liquidity },
    { subject: 'Developer', value: metrics.developer },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-48"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#0EA5E9"
            fill="#0EA5E9"
            fillOpacity={0.15}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
