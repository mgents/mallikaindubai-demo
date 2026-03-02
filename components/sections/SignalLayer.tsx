'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import AIBadge from '@/components/shared/AIBadge'
import AreaHeatmap from '@/components/viz/AreaHeatmap'
import MomentumChart from '@/components/viz/MomentumChart'
import { aiInsights } from '@/data/mockAreas'

type Metric = 'transactions' | 'rentIndex' | 'offPlanPct'

const metrics: { key: Metric; label: string }[] = [
  { key: 'transactions', label: 'Transactions' },
  { key: 'rentIndex', label: 'Rent Index' },
  { key: 'offPlanPct', label: 'Off-Plan %' },
]

export default function SignalLayer() {
  const [selectedArea, setSelectedArea] = useState('downtown')
  const [activeMetric, setActiveMetric] = useState<Metric>('transactions')
  const [insightIndex, setInsightIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setInsightIndex((i) => (i + 1) % aiInsights.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <SectionWrapper id="signal-layer" className="grid-bg">
      <SectionHeading
        number="02"
        title="Dubai's Pulse, Decoded"
        subtitle="Real-time market intelligence powered by official data"
        accent="teal"
      />

      <NarrativeBlock
        text="Real-time market intelligence drawn from official Dubai Land Department data. AI detects momentum shifts before they become headlines."
      />

      {/* Heatmap Grid */}
      <div className="mb-12">
        <AreaHeatmap onSelectArea={setSelectedArea} selectedArea={selectedArea} />
      </div>

      {/* Metric toggles */}
      <div className="flex gap-2 mb-6">
        {metrics.map((m) => (
          <button
            key={m.key}
            onClick={() => setActiveMetric(m.key)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              activeMetric === m.key
                ? 'glass-strong text-teal-light border border-teal/30'
                : 'glass text-white/50 hover:text-white/70'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Momentum Chart */}
      <div className="glass rounded-2xl p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedArea}-${activeMetric}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MomentumChart areaId={selectedArea} metric={activeMetric} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* AI Insight Card */}
      <motion.div
        className="mt-8 glass rounded-xl p-5 max-w-lg ml-auto border border-gold/10"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <AIBadge label="Market Pulse" />
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={insightIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-sm leading-relaxed"
          >
            {aiInsights[insightIndex]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}
