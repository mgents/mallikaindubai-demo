'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AIBadge from '@/components/shared/AIBadge'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import GradientBlob from '@/components/shared/GradientBlob'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const partnerLogos = ['Citi Private Bank', 'DBS Treasures', 'UBS Wealth']

const referralData = [
  { month: 'Sep', referrals: 8 },
  { month: 'Oct', referrals: 12 },
  { month: 'Nov', referrals: 15 },
  { month: 'Dec', referrals: 11 },
  { month: 'Jan', referrals: 19 },
  { month: 'Feb', referrals: 24 },
]

export default function PartnerEnablement() {
  const [currentLogo, setCurrentLogo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((i) => (i + 1) % partnerLogos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const referralLink = 'mallikaindubai.com/partners/abc123'

  return (
    <SectionWrapper id="partners">
      <GradientBlob color="teal" position="bottom-left" size={500} />

      <SectionHeading
        number="06"
        title="Scale Through Partnerships"
        subtitle="Measurable partner channels with co-branded experiences"
        accent="teal"
      />

      <NarrativeBlock
        text="Turn private banks, family offices, and referral partners into measurable acquisition channels with co-branded portals and AI-powered performance insights."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left: Co-branded microsite */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-teal mb-4 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-teal" />
              Co-Branded Microsite
            </div>

            {/* Browser chrome */}
            <div className="glass-strong rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
                <div className="flex-1 mx-4 glass rounded px-3 py-1 text-[10px] text-white/30 text-center">
                  mallikaindubai.com/partners/...
                </div>
              </div>

              <div className="p-6">
                {/* Split branding */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-bold text-gold-light">Mallika in Dubai</div>
                  <div className="text-xs text-white/30">×</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLogo}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm font-bold text-teal-light"
                    >
                      {partnerLogos[currentLogo]}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="space-y-3">
                  <div className="h-3 bg-white/5 rounded w-3/4" />
                  <div className="h-3 bg-white/5 rounded w-1/2" />
                  <div className="h-8 bg-gold/10 rounded w-40 mt-4" />
                </div>
              </div>
            </div>

            {/* Referral link */}
            <div className="mt-4 glass rounded-lg p-3 font-mono text-xs text-teal-light">
              <span className="text-white/30">https://</span>
              {referralLink}
            </div>
          </GlowCard>
        </motion.div>

        {/* Right: Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowCard glowColor="teal" hover={false}>
            <div className="text-xs uppercase tracking-widest text-gold mb-6 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-gold" />
              Partner Dashboard
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="glass rounded-lg p-3 text-center">
                <div className="text-xs text-white/40">Referrals</div>
                <div className="text-2xl font-bold text-teal-light">
                  <AnimatedCounter value={24} duration={1} />
                </div>
              </div>
              <div className="glass rounded-lg p-3 text-center">
                <div className="text-xs text-white/40">Conversion</div>
                <div className="text-2xl font-bold text-gold-light">
                  <AnimatedCounter value={18} suffix="%" duration={1} />
                </div>
              </div>
              <div className="glass rounded-lg p-3 text-center">
                <div className="text-xs text-white/40">Revenue</div>
                <div className="text-lg font-bold text-gold-light">
                  <AnimatedCounter value={2.4} suffix="M" prefix="AED " decimals={1} duration={1} />
                </div>
              </div>
            </div>

            {/* Bar chart */}
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={referralData}>
                  <XAxis
                    dataKey="month"
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Bar dataKey="referrals" radius={[4, 4, 0, 0]}>
                    {referralData.map((_, i) => (
                      <Cell key={i} fill={i === referralData.length - 1 ? '#0EA5E9' : 'rgba(14,165,233,0.3)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* AI Insight */}
            <div className="mt-4 glass-strong rounded-lg p-3 border border-teal/10">
              <AIBadge label="Partner Intel" className="mb-2" />
              <p className="text-xs text-white/50 leading-relaxed">
                Partner segment &apos;Singapore Private Banks&apos; converting 3x above average — recommend increasing allocation and expanding RM training program.
              </p>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
