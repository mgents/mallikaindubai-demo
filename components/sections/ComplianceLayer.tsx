'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import AIBadge from '@/components/shared/AIBadge'
import TypewriterText from '@/components/shared/TypewriterText'
import { Shield, Lock, Award, Check } from 'lucide-react'

const checklistItems = [
  'Developer RERA registration verified',
  'Escrow account compliance confirmed',
  'Title deed status checked',
  'Payment plan terms reviewed',
  'Construction milestone validation',
  'Service charge history analyzed',
]

const pillars = [
  {
    icon: Shield,
    title: 'Permit Verified',
    description: 'Every listing cross-referenced with Dubai Land Department permit records',
    color: '#22c55e',
  },
  {
    icon: Lock,
    title: 'Escrow Protected',
    description: 'Funds held in regulated escrow accounts per RERA guidelines',
    color: '#D4A853',
  },
  {
    icon: Award,
    title: 'DLD Regulated',
    description: 'Full compliance with Dubai Land Department regulatory framework',
    color: '#0EA5E9',
  },
]

export default function ComplianceLayer() {
  const shieldRef = useRef(null)
  const shieldInView = useInView(shieldRef, { once: true })
  const [chatVisible, setChatVisible] = useState(false)
  const [responseReady, setResponseReady] = useState(false)

  useEffect(() => {
    if (shieldInView) {
      setTimeout(() => setChatVisible(true), 3000)
    }
  }, [shieldInView])

  return (
    <SectionWrapper id="compliance" theme="light">
      <SectionHeading
        number="07"
        title="Trust as a Feature"
        subtitle="Compliance and transparency embedded into the investor experience"
        accent="gold"
      />

      <NarrativeBlock
        text="In a market where trust is the real differentiator, embed compliance and transparency directly into the investor experience."
        className="text-black/70"
      />

      {/* Shield icon */}
      <div ref={shieldRef} className="flex justify-center mb-16">
        <motion.div className="relative w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-24 h-24">
            <motion.path
              d="M50 5 L90 25 L90 55 Q90 80 50 95 Q10 80 10 55 L10 25 Z"
              fill="none"
              stroke="#D4A853"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={shieldInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            <motion.path
              d="M35 50 L45 60 L65 40"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={shieldInView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Three pillars */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
            className="glass-light rounded-xl p-6 text-center"
          >
            <motion.div
              className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}
            >
              <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
            </motion.div>
            <h3 className="text-lg font-bold mb-2 text-black" style={{ fontFamily: 'var(--font-display)' }}>
              {pillar.title}
            </h3>
            <p className="text-sm text-black/50">{pillar.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Checklist */}
      <div className="max-w-md mx-auto mb-16">
        <h3 className="text-lg font-bold mb-4 text-black text-center" style={{ fontFamily: 'var(--font-display)' }}>
          Investor Due Diligence
        </h3>
        <div className="space-y-2">
          {checklistItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.2, duration: 0.4 }}
              className="flex items-center gap-3 glass-light rounded-lg px-4 py-2.5"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 + i * 0.2, type: 'spring', stiffness: 300 }}
                className="w-5 h-5 rounded border border-green-500/30 bg-green-500/10 flex items-center justify-center flex-shrink-0"
              >
                <Check className="w-3 h-3 text-green-600" />
              </motion.div>
              <span className="text-sm text-black/60">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Due Diligence Chat */}
      {chatVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto glass-light rounded-xl p-6"
        >
          <AIBadge label="AI Due Diligence" className="mb-4 bg-black/5 border-black/10" />

          {/* User question */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="ml-auto max-w-xs bg-black/5 rounded-xl rounded-br-sm px-4 py-3 mb-3"
          >
            <p className="text-sm text-black/70">Is the Creek Harbour Phase 2 escrow account compliant?</p>
          </motion.div>

          {/* AI response */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="mr-auto max-w-sm bg-teal/5 rounded-xl rounded-bl-sm px-4 py-3 border border-teal/10"
          >
            <TypewriterText
              text="Yes. Creek Harbour Phase 2 (Emaar) maintains a compliant escrow account registered with Dubai Land Department (Ref: ESC-2024-XXXX). Construction is at 43% completion with funds properly segregated per RERA guidelines."
              speed={20}
              delay={1500}
              className="text-sm text-black/70 leading-relaxed"
              onComplete={() => setResponseReady(true)}
            />

            {responseReady && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-2 mt-3"
              >
                <span className="text-[10px] px-2 py-1 rounded-full bg-teal/10 text-teal-600">DLD Database</span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-teal/10 text-teal-600">RERA Registry</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </SectionWrapper>
  )
}
