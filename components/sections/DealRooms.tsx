'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GradientBlob from '@/components/shared/GradientBlob'
import DealScoreRadar from '@/components/viz/DealScoreRadar'
import { deals, type Deal } from '@/data/mockDeals'

function DealCard({ deal, index, isFlipped, onFlip }: {
  deal: Deal
  index: number
  isFlipped: boolean
  onFlip: () => void
}) {
  const riskDots = Array.from({ length: 5 }, (_, i) => i < deal.riskRating)

  return (
    <motion.div
      initial={{ opacity: 0, rotate: (index - 1) * 6, scale: 0.9 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: index * 0.15,
      }}
      whileHover={{ y: -12 }}
      className="cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <motion.div
        className="relative w-full min-h-[460px]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-gold/20 transition-colors"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Header gradient */}
          <div className="h-2 bg-gradient-to-r from-gold to-teal" />

          <div className="p-6">
            <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              {deal.name}
            </h3>
            <p className="text-xs text-white/40 mb-4">{deal.area} · {deal.type} · {deal.developer}</p>

            <p className="text-sm text-white/60 mb-4 line-clamp-2">{deal.thesis.split('.')[0]}.</p>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div>
                <div className="text-xs text-white/40">IRR</div>
                <div className="text-lg font-bold text-gold-light">{deal.irr}%</div>
              </div>
              <div>
                <div className="text-xs text-white/40">Risk</div>
                <div className="flex gap-1 mt-1">
                  {riskDots.map((filled, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${filled ? 'bg-red-400' : 'bg-white/10'}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs text-white/40">Payment</div>
                <div className="text-sm font-medium">{deal.paymentSplit}</div>
              </div>
            </div>

            {/* AI Match Score */}
            <div className="flex items-center gap-3 glass rounded-lg p-3">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 40 40" className="w-12 h-12 -rotate-90">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                  <motion.circle
                    cx="20" cy="20" r="16"
                    fill="none"
                    stroke="#0EA5E9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: deal.matchScore / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.2 }}
                    style={{ filter: 'drop-shadow(0 0 4px rgba(14,165,233,0.4))' }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-teal-light">
                  {deal.matchScore}
                </span>
              </div>
              <div>
                <div className="text-xs text-white/40">AI Match Score</div>
                <div className="text-sm text-teal-light font-medium">Strong Fit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="glass rounded-2xl p-6 absolute inset-0 border border-teal/20"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="text-xs uppercase tracking-widest text-teal mb-4 flex items-center gap-2">
            <div className="w-6 h-0.5 bg-teal" />
            Deal Analysis
          </div>

          <p className="text-xs text-white/60 mb-4 leading-relaxed">{deal.thesis}</p>

          <DealScoreRadar metrics={deal.metrics} />

          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-white/40">Units Remaining</span>
              <span className="text-gold-light">{deal.unitsRemaining} / {deal.totalUnits}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                initial={{ width: 0 }}
                animate={{ width: `${(1 - deal.unitsRemaining / deal.totalUnits) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>

          <button className="mt-4 w-full py-2.5 rounded-lg bg-gradient-to-r from-gold to-gold-light text-black text-sm font-semibold">
            Request Allocation
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function DealRooms() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  return (
    <SectionWrapper id="deal-rooms">
      <GradientBlob color="teal" position="bottom-right" size={500} />

      <SectionHeading
        number="04"
        title="Investment Packets, Not Listings"
        subtitle="Curated deal rooms with AI-powered matching and analysis"
        accent="teal"
      />

      <NarrativeBlock
        text="Properties become investment opportunities. Each deal is packaged with a thesis, risk analysis, comparable data, and an AI-generated fit score — personalized to each investor."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {deals.map((deal, i) => (
          <DealCard
            key={deal.id}
            deal={deal}
            index={i}
            isFlipped={flippedCard === deal.id}
            onFlip={() => setFlippedCard(flippedCard === deal.id ? null : deal.id)}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center text-sm mt-8"
      >
        Click any card to flip and view detailed analysis
      </motion.p>
    </SectionWrapper>
  )
}
