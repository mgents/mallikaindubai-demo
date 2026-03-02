'use client'

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { motion } from 'framer-motion'
import { marketData } from '@/data/mockMarket'

interface MomentumChartProps {
  areaId: string
  metric: 'transactions' | 'rentIndex' | 'offPlanPct'
}

const metricColors = {
  transactions: '#0EA5E9',
  rentIndex: '#D4A853',
  offPlanPct: '#38BDF8',
}

const metricLabels = {
  transactions: 'Monthly Transactions',
  rentIndex: 'Rent Index',
  offPlanPct: 'Off-Plan %',
}

export default function MomentumChart({ areaId, metric }: MomentumChartProps) {
  const data = marketData[areaId] || marketData['downtown']
  const color = metricColors[metric]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-64 md:h-80"
    >
      <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">{metricLabels[metric]}</div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${metric}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.3} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip
            contentStyle={{
              background: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px',
            }}
          />
          <Area
            type="monotone"
            dataKey={metric}
            stroke={color}
            strokeWidth={2}
            fill={`url(#gradient-${metric})`}
            dot={false}
            activeDot={{ r: 4, fill: color, stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
