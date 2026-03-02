'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AIBadge from '@/components/shared/AIBadge'
import TypewriterText from '@/components/shared/TypewriterText'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import GradientBlob from '@/components/shared/GradientBlob'
import { investors, type InvestorProfile } from '@/data/mockInvestors'
import { Check } from 'lucide-react'

const archetypeColors = {
  conservative: 'from-blue-400 to-blue-600',
  growth: 'from-gold to-gold-light',
  aggressive: 'from-red-400 to-orange-500',
}

export default function InvestorWorkspace() {
  const [activeArchetype, setActiveArchetype] = useState<string>('growth')
  const [memoReady, setMemoReady] = useState(false)
  const [key, setKey] = useState(0)

  const investor = investors.find((i) => i.id === activeArchetype) || investors[1]

  const switchArchetype = useCallback((id: string) => {
    setMemoReady(false)
    setActiveArchetype(id)
    setKey((k) => k + 1)
  }, [])

  return (
    <SectionWrapper id="investor-workspace">
      {/* Decorative blobs */}
      <GradientBlob color="gold" position="bottom-left" size={500} />
      <GradientBlob color="teal" position="top-right" size={400} />

      <SectionHeading
        number="01"
        title="Your Investment Identity"
        subtitle="Persistent investor profiles that generate institutional-grade memos"
        accent="gold"
      />

      <NarrativeBlock
        text="Imagine every investor who visits your site leaves with a persistent identity — a living profile that learns, adapts, and generates institutional-grade memos automatically."
      />

      {/* Archetype Selector */}
      <div className="flex gap-3 mb-10">
        {investors.map((inv) => (
          <button
            key={inv.id}
            onClick={() => switchArchetype(inv.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeArchetype === inv.id
                ? 'glass-strong ring-1 ring-gold/40 text-gold-light'
                : 'glass text-white/50 hover:text-white/70'
            }`}
          >
            {inv.riskLabel}
          </button>
        ))}
      </div>

      {/* Two-panel layout */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left: Investor Profile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`profile-${key}`}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlowCard hover={false} className="h-full">
              <div className="text-xs uppercase tracking-widest text-gold mb-6 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-gold" />
                Investor Profile
              </div>

              <ProfileField label="Name" delay={0.1}>
                <span className="text-lg font-semibold">{investor.name}</span>
              </ProfileField>

              <ProfileField label="Origin" delay={0.2}>
                <span>{investor.origin}</span>
              </ProfileField>

              <ProfileField label="Risk Appetite" delay={0.3}>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${investor.riskAppetite * 10}%` }}
                      transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
                      className={`h-full rounded-full bg-gradient-to-r ${archetypeColors[investor.archetype]}`}
                    />
                  </div>
                  <span className="text-sm text-gold-light font-medium">{investor.riskLabel}</span>
                </div>
              </ProfileField>

              <ProfileField label="Horizon" delay={0.4}>
                <div className="flex gap-2">
                  {['3-5yr', '5-7yr', '7-10yr', '10yr+'].map((h) => (
                    <span
                      key={h}
                      className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                        investor.horizon.includes(h.replace('yr', ''))
                          ? 'glass-strong border border-gold/30 text-gold-light'
                          : 'glass text-white/30'
                      }`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </ProfileField>

              <ProfileField label="Budget" delay={0.5}>
                <AnimatedCounter
                  value={investor.budgetMax}
                  prefix="AED "
                  className="text-lg font-semibold"
                  duration={1}
                />
              </ProfileField>

              <ProfileField label="Golden Visa Intent" delay={0.6}>
                <motion.div
                  className={`w-10 h-5 rounded-full relative ${
                    investor.visaIntent ? 'bg-gold/30' : 'bg-white/10'
                  }`}
                  initial={false}
                  animate={{ backgroundColor: investor.visaIntent ? 'rgba(212,168,83,0.3)' : 'rgba(255,255,255,0.1)' }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gold absolute top-0.5"
                    animate={{ left: investor.visaIntent ? 22 : 2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </motion.div>
              </ProfileField>

              <ProfileField label="Strategy" delay={0.7}>
                <span className="text-sm text-white/80">{investor.strategy}</span>
              </ProfileField>
            </GlowCard>
          </motion.div>
        </AnimatePresence>

        {/* Right: AI Memo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`memo-${key}`}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlowCard glowColor="teal" hover={false} className="h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="text-xs uppercase tracking-widest text-teal flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-teal" />
                  Investment Committee Memo
                </div>
                <AIBadge label="AI Generated" />
              </div>

              {/* Investment Thesis */}
              <div className="mb-6">
                <MemoSectionTitle title="Investment Thesis" />
                <TypewriterText
                  text={investor.memo.thesis}
                  speed={15}
                  delay={1500}
                  className="text-sm leading-relaxed text-white/70"
                  trigger={true}
                  onComplete={() => setMemoReady(true)}
                  key={`thesis-${key}`}
                />
              </div>

              {/* Recommended Areas */}
              <div className="mb-6">
                <MemoSectionTitle title="Recommended Areas" />
                <div className="flex gap-2 mt-2">
                  {investor.memo.areas.map((area, i) => (
                    <motion.span
                      key={area}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3 + i * 0.2, type: 'spring', stiffness: 200 }}
                      className="px-3 py-1 rounded-full glass text-xs text-teal-light border border-teal/20"
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="mb-6">
                <MemoSectionTitle title="Risk Assessment" />
                <div className="space-y-2 mt-2">
                  {investor.memo.risks.map((risk, i) => (
                    <motion.div
                      key={risk.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.5 + i * 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xs text-white/40 w-24">{risk.label}</span>
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${risk.level}%` }}
                          transition={{ duration: 0.8, delay: 3.5 + i * 0.15 }}
                          className={`h-full rounded-full ${
                            risk.level > 60 ? 'bg-red-400' : risk.level > 35 ? 'bg-gold' : 'bg-green-400'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div>
                <MemoSectionTitle title="Next Steps" />
                <div className="space-y-2 mt-2">
                  {investor.memo.nextSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 4 + i * 0.2 }}
                      className="flex items-start gap-2"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 4.5 + i * 0.2, type: 'spring' }}
                        className="flex-shrink-0 w-4 h-4 rounded border border-teal/30 flex items-center justify-center mt-0.5"
                      >
                        <Check className="w-2.5 h-2.5 text-teal" />
                      </motion.div>
                      <span className="text-xs text-white/60">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}

function ProfileField({ label, children, delay }: { label: string; children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{label}</div>
      {children}
    </motion.div>
  )
}

function MemoSectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className="text-xs font-semibold uppercase tracking-wider text-teal-light">{title}</span>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-px bg-gradient-to-r from-teal to-transparent"
      />
    </div>
  )
}
