'use client'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts'
import { motion } from 'framer-motion'

interface CashflowWaterfallProps {
  bookingPct: number
  constructionYears: number
  mortgageRate: number
  rentalYield: number
}

export default function CashflowWaterfall({
  bookingPct,
  constructionYears,
  mortgageRate,
  rentalYield,
}: CashflowWaterfallProps) {
  const totalPrice = 2100000
  const bookingAmount = totalPrice * (bookingPct / 100)
  const constructionPayments = totalPrice * ((100 - bookingPct - 20) / 100)
  const handoverPayment = totalPrice * 0.2
  const annualRental = totalPrice * (rentalYield / 100)
  const annualMortgage = totalPrice * 0.6 * (mortgageRate / 100)

  const data = [
    { name: 'Booking', value: -bookingAmount / 1000, type: 'outflow' },
    { name: 'Construction', value: -constructionPayments / 1000 / constructionYears, type: 'outflow' },
    { name: 'Handover', value: -handoverPayment / 1000, type: 'outflow' },
    { name: 'Yr 1 Rent', value: annualRental / 1000, type: 'inflow' },
    { name: 'Yr 2 Rent', value: (annualRental * 1.05) / 1000, type: 'inflow' },
    { name: 'Mortgage', value: -annualMortgage / 1000, type: 'outflow' },
    { name: 'Net CF', value: (annualRental - annualMortgage) / 1000, type: 'net' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-56 md:h-64"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="name"
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}K`}
            width={45}
          />
          <Tooltip
            contentStyle={{
              background: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px',
            }}
            formatter={(value) => [`AED ${Math.abs(Number(value)).toFixed(0)}K`, '']}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry.type === 'inflow'
                    ? '#22c55e'
                    : entry.type === 'outflow'
                    ? '#ef4444'
                    : '#D4A853'
                }
                opacity={0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
