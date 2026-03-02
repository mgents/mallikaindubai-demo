'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { areaCorrelations, portfolioAllocation, diversificationScore } from '@/data/mockCorrelations'

export default function PortfolioIntelligence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="portfolio-intelligence" className="theme-institutional">
      <div className="container mx-auto px-6" ref={ref}>
        <SectionHeading
          number="07"
          title="Portfolio Intelligence Dashboard"
          subtitle="Correlation analysis for true diversification"
        />

        <NarrativeBlock text="Build resilient portfolios. Our correlation engine shows which areas move together—so you can diversify with precision, not guesswork." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Correlation Matrix */}
          <GlowCard className="lg:col-span-2 p-8">
            <h3 className="text-2xl font-bold mb-6 text-teal-light" style={{ fontFamily: 'var(--font-display)' }}>
              Area Correlation Matrix
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {areaCorrelations.matrix.map((row, i) => (
                row.map((value, j) => {
                  const isHigh = value > 0.8
                  const isLow = value < 0.4
                  const color = isHigh ? '#ef4444' : isLow ? '#10b981' : '#f59e0b'
                  return (
                    <motion.div
                      key={`${i}-${j}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: (i * 4 + j) * 0.05 }}
                      className="aspect-square glass rounded flex flex-col items-center justify-center p-2"
                      style={{ borderColor: color, borderWidth: 1 }}
                    >
                      <p className="text-xs text-white/50">{areaCorrelations.areas[i].slice(0, 3)}</p>
                      <p className="text-lg font-bold" style={{ color }}>
                        {value.toFixed(2)}
                      </p>
                      <p className="text-xs text-white/50">{areaCorrelations.areas[j].slice(0, 3)}</p>
                    </motion.div>
                  )
                })
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-500" />
                <span className="text-white/60">Low correlation (good diversification)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500" />
                <span className="text-white/60">High correlation (concentration risk)</span>
              </div>
            </div>
          </GlowCard>

          {/* Diversification Score & Allocation */}
          <div className="space-y-6">
            <GlowCard className="p-8">
              <h3 className="text-lg font-bold mb-4 text-gold-light" style={{ fontFamily: 'var(--font-display)' }}>
                Diversification Score
              </h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#0A0A12"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#D4A853"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 352' }}
                      animate={isInView ? { strokeDasharray: `${352 * (diversificationScore / 100)} 352` } : {}}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-4xl font-bold text-gold">
                      <AnimatedCounter value={diversificationScore} duration={1.5} />
                    </p>
                    <p className="text-sm text-white/50">/ 100</p>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className="text-lg font-bold mb-4 text-teal-light" style={{ fontFamily: 'var(--font-display)' }}>
                Portfolio Allocation
              </h3>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie data={portfolioAllocation} dataKey="percentage" nameKey="area" cx="50%" cy="50%" outerRadius={60}>
                    {portfolioAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {portfolioAllocation.map((item) => (
                  <div key={item.area} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                      <span className="text-white/70">{item.area}</span>
                    </div>
                    <span className="font-bold text-white">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
