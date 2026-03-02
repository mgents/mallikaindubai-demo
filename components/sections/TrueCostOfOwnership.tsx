'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { fiveYearCosts, costCategories, breakEvenCalculation } from '@/data/mockOwnershipCosts'

export default function TrueCostOfOwnership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="true-cost" className="theme-cashflow">
      <div className="container mx-auto px-6" ref={ref}>
        <SectionHeading
          number="12"
          title="True Cost of Ownership"
          subtitle="5-year operating expense projection"
        />

        <NarrativeBlock text="Most investors only see the purchase price. We model 5 years of operating costs—because a cheap property with AED 25K annual service charges isn't cheap at all." />

        {/* 5-Year Timeline */}
        <GlowCard className="p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gold-light" style={{ fontFamily: 'var(--font-display)' }}>
            5-Year Cost Projection
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={fiveYearCosts}>
              <defs>
                <linearGradient id="serviceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="maintenanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="mgmtGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="utilsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#eab308" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" stroke="#D4A853" />
              <YAxis stroke="#D4A853" />
              <Tooltip contentStyle={{ backgroundColor: '#0A0A12', border: '1px solid #D4A853' }} />
              <Area type="monotone" dataKey="serviceCharges" stackId="1" stroke="#ef4444" fill="url(#serviceGradient)" />
              <Area type="monotone" dataKey="maintenance" stackId="1" stroke="#f97316" fill="url(#maintenanceGradient)" />
              <Area type="monotone" dataKey="propertyMgmt" stackId="1" stroke="#f59e0b" fill="url(#mgmtGradient)" />
              <Area type="monotone" dataKey="insuranceUtilities" stackId="1" stroke="#eab308" fill="url(#utilsGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </GlowCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {costCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
            >
              <GlowCard className="p-6">
                <p className="text-sm text-white/50 mb-2">{cat.category}</p>
                <p className="text-2xl font-bold mb-1" style={{ color: cat.color }}>
                  AED <AnimatedCounter value={cat.amount} duration={1.5} />
                </p>
                <p className="text-xs text-white/60">{cat.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Break-Even */}
        <GlowCard className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gold-light" style={{ fontFamily: 'var(--font-display)' }}>
            Break-Even Analysis
          </h3>
          <div className="text-center mb-6">
            <p className="text-sm text-white/50 mb-2">With these costs, you break even in</p>
            <p className="text-5xl font-bold text-gold mb-1">
              Year <AnimatedCounter value={breakEvenCalculation.breakEvenYear} decimals={1} duration={2} />
            </p>
            <p className="text-white/60">(Month {Math.round(breakEvenCalculation.breakEvenMonth)})</p>
          </div>
          <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold-light"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${(breakEvenCalculation.breakEvenYear / 5) * 100}%` } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
            <div
              className="absolute top-0 w-1 h-6 bg-gold -mt-1.5"
              style={{ left: `${(breakEvenCalculation.breakEvenYear / 5) * 100}%` }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gold text-black text-xs font-bold rounded whitespace-nowrap">
                Break-even
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/50">
            <span>Year 0</span>
            <span>Year 5</span>
          </div>
        </GlowCard>
      </div>
    </SectionWrapper>
  )
}
