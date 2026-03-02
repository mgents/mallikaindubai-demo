'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { oilPriceData, oilCorrelation, fxRate, capitalFlows, economicIndicators } from '@/data/mockMacro'

export default function MacroIntelligence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="macro-intelligence" className="theme-growth">
      <div className="container mx-auto px-6" ref={ref}>
        <SectionHeading
          number="09"
          title="Macro Intelligence Layer"
          subtitle="Global forces that move Dubai real estate"
        />

        <NarrativeBlock text="Dubai doesn't exist in a vacuum. Track the macro forces—oil, FX, capital flows—that move your market before headlines catch up." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Oil Prices */}
          <GlowCard className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gold-light" style={{ fontFamily: 'var(--font-display)' }}>
                Brent Crude Oil
              </h3>
              <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-bold">
                {oilCorrelation}% correlated to Dubai luxury
              </span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={oilPriceData}>
                <XAxis dataKey="month" stroke="#D4A853" />
                <YAxis stroke="#D4A853" />
                <Line type="monotone" dataKey="price" stroke="#D4A853" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </GlowCard>

          {/* FX Rate */}
          <GlowCard className="p-8">
            <h3 className="text-xl font-bold text-teal-light mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              USD/AED Exchange Rate
            </h3>
            <div className="text-center">
              <p className="text-5xl font-bold text-gold mb-2">
                {fxRate.rate}
              </p>
              <p className="text-sm text-white/50 mb-4">{fxRate.pair}</p>
              <div className="flex items-center justify-center gap-4">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-bold">
                  Stability: {fxRate.stability}
                </span>
                <span className="text-green-400">{fxRate.change}</span>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Capital Flows */}
        <GlowCard className="p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-teal-light" style={{ fontFamily: 'var(--font-display)' }}>
            Capital Flows to Dubai
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={capitalFlows}>
              <XAxis dataKey="from" stroke="#0EA5E9" />
              <YAxis stroke="#0EA5E9" />
              <Bar dataKey="volume" radius={[8, 8, 0, 0]}>
                {capitalFlows.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlowCard>

        {/* Economic Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {economicIndicators.map((indicator, i) => (
            <motion.div
              key={indicator.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <GlowCard className="p-6 text-center">
                <p className="text-sm text-white/50 mb-2">{indicator.name}</p>
                <p className="text-3xl font-bold text-gold mb-2">{indicator.value}</p>
                <div className="flex justify-center gap-0.5">
                  {indicator.trend.map((val, j) => (
                    <div
                      key={j}
                      className="w-1 bg-teal"
                      style={{ height: `${val * 2}px`, opacity: 0.3 + (j / indicator.trend.length) * 0.7 }}
                    />
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
