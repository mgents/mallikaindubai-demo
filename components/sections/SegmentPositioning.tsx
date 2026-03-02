'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AIBadge from '@/components/shared/AIBadge'
import AnimatedCounter from '@/components/shared/AnimatedCounter'

const Canvas3D = dynamic(() => import('@/components/three/Canvas3D'), { ssr: false })
const GlobeViz = dynamic(() => import('@/components/three/GlobeViz'), { ssr: false })

interface SegmentData {
  id: string
  label: string
  flag: string
  currency: string
  currencySymbol: string
  convertedAmount: number
  originalAmount: number
  blueprint: string
  taxComparison: { region: string; rate: string; color: string }[]
  aiInsight: string
}

const segments: SegmentData[] = [
  {
    id: 'sg',
    label: 'Singapore',
    flag: '🇸🇬',
    currency: 'SGD',
    currencySymbol: 'S$',
    originalAmount: 500000,
    convertedAmount: 1375000,
    blueprint: 'Dubai Investment Blueprint for Singapore Families',
    taxComparison: [
      { region: 'Singapore CGT', rate: '0%', color: '#22c55e' },
      { region: 'Dubai CGT', rate: '0%', color: '#22c55e' },
      { region: 'UK CGT', rate: '28%', color: '#ef4444' },
    ],
    aiInsight: 'SGD/AED at 12-month low — favorable entry window for Singapore investors. Family office structures offer additional tax optimization.',
  },
  {
    id: 'uk',
    label: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP',
    currencySymbol: '£',
    originalAmount: 300000,
    convertedAmount: 1380000,
    blueprint: 'Dubai Property Strategy for UK Professionals',
    taxComparison: [
      { region: 'UK Income Tax', rate: '45%', color: '#ef4444' },
      { region: 'Dubai Income Tax', rate: '0%', color: '#22c55e' },
      { region: 'UK CGT', rate: '28%', color: '#ef4444' },
    ],
    aiInsight: 'GBP weakness creates attractive entry pricing. Non-dom rule changes making Dubai relocation more appealing for HNWI clients.',
  },
  {
    id: 'eu',
    label: 'European Union',
    flag: '🇪🇺',
    currency: 'EUR',
    currencySymbol: '€',
    originalAmount: 400000,
    convertedAmount: 1620000,
    blueprint: 'Dubai Real Estate Guide for European Investors',
    taxComparison: [
      { region: 'Germany CGT', rate: '26.4%', color: '#ef4444' },
      { region: 'Dubai CGT', rate: '0%', color: '#22c55e' },
      { region: 'France CGT', rate: '30%', color: '#ef4444' },
    ],
    aiInsight: 'EUR/AED stable corridor. German investors represent fastest growing segment — Schengen flexibility plus Golden Visa creates compelling dual-residency strategy.',
  },
]

export default function SegmentPositioning() {
  const [activeSegment, setActiveSegment] = useState('sg')
  const segment = segments.find((s) => s.id === activeSegment)!

  return (
    <SectionWrapper id="segments">
      <SectionHeading
        number="05"
        title="Globally Aware, Locally Precise"
        subtitle="Geo-detected personalization for every investor segment"
        accent="teal"
      />

      <NarrativeBlock
        text="Your platform detects where each investor is from and adapts everything — currency, tax context, case studies, and market framing — automatically."
      />

      {/* Globe */}
      <div className="relative h-64 md:h-80 mb-8 rounded-2xl overflow-hidden">
        <Canvas3D>
          <ambientLight intensity={0.5} />
          <GlobeViz />
        </Canvas3D>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
      </div>

      {/* Segment Tabs */}
      <div className="flex gap-3 mb-8 justify-center">
        {segments.map((seg) => (
          <button
            key={seg.id}
            onClick={() => setActiveSegment(seg.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeSegment === seg.id
                ? 'glass-strong ring-1 ring-gold/40 text-gold-light'
                : 'glass text-white/50 hover:text-white/70'
            }`}
          >
            <span className="text-lg">{seg.flag}</span>
            {seg.label}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSegment}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Currency + Blueprint */}
            <GlowCard hover={false}>
              {/* Currency Converter */}
              <div className="mb-6">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-3">Currency Conversion</div>
                <div className="flex items-center gap-3">
                  <div className="glass rounded-lg px-4 py-3 flex-1 text-center">
                    <div className="text-xs text-white/40">{segment.currency}</div>
                    <div className="text-xl font-bold">
                      {segment.currencySymbol}
                      <AnimatedCounter value={segment.originalAmount} duration={0.8} />
                    </div>
                  </div>
                  <motion.span
                    className="text-gold text-xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                  <div className="glass rounded-lg px-4 py-3 flex-1 text-center">
                    <div className="text-xs text-white/40">AED</div>
                    <div className="text-xl font-bold text-gold-light">
                      <AnimatedCounter value={segment.convertedAmount} prefix="AED " duration={1} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blueprint */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-strong rounded-lg p-4 border border-gold/10"
              >
                <div className="text-xs text-gold uppercase tracking-wider mb-2">Lead Magnet</div>
                <div className="text-sm font-semibold mb-1">{segment.blueprint}</div>
                <div className="text-xs text-white/40">PDF · 24 pages · Free download</div>
              </motion.div>
            </GlowCard>

            {/* Right: Tax + AI Insight */}
            <GlowCard glowColor="teal" hover={false}>
              {/* Tax Comparison */}
              <div className="mb-6">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-3">Tax Comparison</div>
                <div className="space-y-3">
                  {segment.taxComparison.map((tax, i) => (
                    <motion.div
                      key={tax.region}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center justify-between glass rounded-lg px-4 py-2.5"
                    >
                      <span className="text-sm text-white/70">{tax.region}</span>
                      <span className="text-sm font-bold" style={{ color: tax.color }}>
                        {tax.rate}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AI Insight */}
              <div className="glass-strong rounded-lg p-4 border border-teal/10">
                <div className="flex items-center gap-2 mb-2">
                  <AIBadge label="Regional Insight" />
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{segment.aiInsight}</p>
              </div>
            </GlowCard>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
