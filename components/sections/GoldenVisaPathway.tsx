'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, FileText, ClipboardCheck, Activity, BadgeCheck } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import { visaSteps, visaBenefits, qualifyingCriteria } from '@/data/mockVisaRequirements'

const stepIcons = [CheckCircle2, FileText, ClipboardCheck, Activity, BadgeCheck]

export default function GoldenVisaPathway() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="golden-visa" className="theme-personal">
      <div className="container mx-auto px-6" ref={ref}>
        <SectionHeading
          number="14"
          title="Golden Visa Pathway"
          subtitle="10-year UAE residency through property ownership"
        />

        <NarrativeBlock text="A AED 2 million Dubai property isn't just a home—it's a 10-year residency visa for you and your family. No sponsor, no renewals every 2 years, 100% ownership. This is how thousands of families secure their future in the UAE." />

        {/* Visa Steps */}
        <GlowCard className="p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-coral" style={{ fontFamily: 'var(--font-display)' }}>
              5-Step Process
            </h3>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-bold">
              ✅ AED 2M+ property — You qualify!
            </span>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <motion.div
              className="absolute top-8 left-0 h-0.5 bg-gradient-to-r from-coral to-peach"
              initial={{ width: 0 }}
              animate={isInView ? { width: 'calc(100% - 64px)' } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
            />

            <div className="flex justify-between">
              {visaSteps.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <motion.div
                    key={step.step}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-coral/20 border-2 border-coral flex items-center justify-center mb-3">
                      <Icon className="w-8 h-8 text-coral" />
                    </div>
                    <p className="text-xs text-white/50 mb-1">Step {step.step}</p>
                    <p className="text-sm font-bold text-white text-center mb-1 max-w-[120px]">{step.title}</p>
                    <p className="text-xs text-white/60 text-center">{step.duration}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </GlowCard>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visaBenefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, rotateY: 180 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
            >
              <GlowCard className="p-6 text-center h-full">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-peach">{benefit.title}</h4>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Qualifying Criteria */}
        <GlowCard className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-coral" style={{ fontFamily: 'var(--font-display)' }}>
            Qualifying Criteria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-white/50 mb-3">Minimum Property Value</p>
              <p className="text-4xl font-bold text-gold mb-1">
                AED {(qualifyingCriteria.minimumValue / 1000000).toFixed(1)}M
              </p>
              <p className="text-xs text-white/60">Purchase price, not equity</p>
            </div>
            <div>
              <p className="text-sm text-white/50 mb-3">Property Types</p>
              <div className="flex flex-wrap gap-2">
                {qualifyingCriteria.propertyTypes.map((type) => (
                  <span key={type} className="px-3 py-1 bg-coral/20 text-coral rounded-full text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-white/50 mb-3">Important Notes:</p>
            <ul className="space-y-2">
              {qualifyingCriteria.notes.map((note, i) => (
                <li key={i} className="flex gap-2 text-sm text-white/70">
                  <span className="text-green-400">✓</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </GlowCard>
      </div>
    </SectionWrapper>
  )
}
