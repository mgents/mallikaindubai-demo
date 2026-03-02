'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AIBadge from '@/components/shared/AIBadge'
import TypewriterText from '@/components/shared/TypewriterText'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import GradientBlob from '@/components/shared/GradientBlob'
import CashflowWaterfall from '@/components/viz/CashflowWaterfall'
import StressTestGauge from '@/components/viz/StressTestGauge'
import MonteCarloFan from '@/components/viz/MonteCarloFan'

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  suffix: string
  onChange: (v: number) => void
}

function GoldSlider({ label, value, min, max, step, suffix, onChange }: SliderProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-white/50">{label}</span>
        <span className="text-gold-light font-medium">{value}{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold
          [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(212,168,83,0.4)]
          [&::-webkit-slider-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, #D4A853 0%, #D4A853 ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
    </div>
  )
}

export default function UnderwritingTools() {
  const [bookingPct, setBookingPct] = useState(20)
  const [constructionYears, setConstructionYears] = useState(3)
  const [mortgageRate, setMortgageRate] = useState(4.5)
  const [rentalYield, setRentalYield] = useState(7)

  const [stressVacancy, setStressVacancy] = useState(false)
  const [stressRate, setStressRate] = useState(false)
  const [stressRent, setStressRent] = useState(false)
  const [stressMarket, setStressMarket] = useState(false)

  const stressCount = [stressVacancy, stressRate, stressRent, stressMarket].filter(Boolean).length

  const irr = useMemo(() => {
    const base = rentalYield * 1.8 + (30 - bookingPct) * 0.15 - constructionYears * 0.8 - mortgageRate * 0.5
    return Math.max(5, Math.min(25, base))
  }, [bookingPct, constructionYears, mortgageRate, rentalYield])

  const resilienceScore = useMemo(() => {
    let score = 85
    if (stressVacancy) score -= 15
    if (stressRate) score -= 12
    if (stressRent) score -= 10
    if (stressMarket) score -= 20
    return Math.max(10, score)
  }, [stressVacancy, stressRate, stressRent, stressMarket])

  const stressedIrr = useMemo(() => {
    let adj = irr
    if (stressVacancy) adj -= 2.5
    if (stressRate) adj -= 1.8
    if (stressRent) adj -= 1.5
    if (stressMarket) adj -= 3.2
    return Math.max(2, adj)
  }, [irr, stressVacancy, stressRate, stressRent, stressMarket])

  const aiNarrative = `This investment demonstrates ${resilienceScore >= 60 ? 'strong' : 'moderate'} resilience with an ${irr.toFixed(1)}% base-case IRR. ${stressCount > 0 ? `Under ${stressCount > 2 ? 'severe' : 'moderate'} stress (${[stressVacancy && '20% vacancy', stressRate && '2% rate increase', stressRent && '15% rent compression', stressMarket && '25% correction'].filter(Boolean).join(', ')}), IRR compresses to ${stressedIrr.toFixed(1)}%${stressedIrr > 10 ? ' — still above your 10% threshold' : ' — approaching risk threshold'}.` : 'No stress scenarios active — toggle scenarios to test resilience.'} Primary risk: construction delays extending beyond ${constructionYears * 14} months.`

  return (
    <SectionWrapper id="underwriting">
      <GradientBlob color="gold" position="center" size={600} className="opacity-30" />

      <SectionHeading
        number="03"
        title="Institutional-Grade Analysis"
        subtitle="Monte Carlo simulations, stress testing, and AI-narrated insights"
        accent="gold"
      />

      <NarrativeBlock
        text="Move beyond simple ROI calculators. Monte Carlo simulations, stress testing, and AI-narrated insights — the tools institutional investors expect."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
        {/* Left: Cashflow Modeler */}
        <GlowCard hover={false}>
          <div className="text-xs uppercase tracking-widest text-gold mb-6 flex items-center gap-2">
            <div className="w-6 h-0.5 bg-gold" />
            Cashflow Modeler
          </div>

          <CashflowWaterfall
            bookingPct={bookingPct}
            constructionYears={constructionYears}
            mortgageRate={mortgageRate}
            rentalYield={rentalYield}
          />

          <div className="mt-6 space-y-1">
            <GoldSlider label="Booking %" value={bookingPct} min={10} max={30} step={5} suffix="%" onChange={setBookingPct} />
            <GoldSlider label="Construction" value={constructionYears} min={2} max={5} step={1} suffix=" yr" onChange={setConstructionYears} />
            <GoldSlider label="Mortgage Rate" value={mortgageRate} min={3} max={7} step={0.5} suffix="%" onChange={setMortgageRate} />
            <GoldSlider label="Rental Yield" value={rentalYield} min={5} max={10} step={0.5} suffix="%" onChange={setRentalYield} />
          </div>

          {/* IRR Display */}
          <motion.div
            className="mt-6 text-center p-4 rounded-xl glass-strong"
            layout
          >
            <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Projected IRR</div>
            <div className="text-4xl font-bold text-gold-gradient">
              <AnimatedCounter value={irr} suffix="%" decimals={1} duration={0.6} />
            </div>
          </motion.div>
        </GlowCard>

        {/* Right: Stress Test */}
        <GlowCard glowColor="teal" hover={false}>
          <div className="text-xs uppercase tracking-widest text-teal mb-6 flex items-center gap-2">
            <div className="w-6 h-0.5 bg-teal" />
            Stress Test
          </div>

          <StressTestGauge score={resilienceScore} label="Resilience Score" />

          {/* Stress toggles */}
          <div className="space-y-3 mt-6">
            {[
              { label: 'Vacancy +20%', active: stressVacancy, toggle: () => setStressVacancy(!stressVacancy) },
              { label: 'Rate Hike +2%', active: stressRate, toggle: () => setStressRate(!stressRate) },
              { label: 'Rent Drop -15%', active: stressRent, toggle: () => setStressRent(!stressRent) },
              { label: 'Market -25%', active: stressMarket, toggle: () => setStressMarket(!stressMarket) },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.toggle}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                  item.active
                    ? 'glass-strong border border-teal/30 text-teal-light'
                    : 'glass text-white/50 hover:text-white/70'
                }`}
              >
                <span>{item.label}</span>
                <motion.div
                  className={`w-8 h-4 rounded-full relative ${
                    item.active ? 'bg-teal/30' : 'bg-white/10'
                  }`}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-teal absolute top-0.5"
                    animate={{ left: item.active ? 18 : 2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </motion.div>
              </button>
            ))}
          </div>

          {/* Monte Carlo Fan */}
          <div className="mt-6">
            <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Probability Distribution</div>
            <MonteCarloFan baseIrr={irr} stressed={stressCount > 0} />
          </div>
        </GlowCard>
      </div>

      {/* AI Narrative */}
      <motion.div
        className="glass rounded-xl p-6 border border-gold/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <AIBadge label="AI Analysis" />
        </div>
        <p className="text-sm leading-relaxed text-white/60">{aiNarrative}</p>
      </motion.div>
    </SectionWrapper>
  )
}
