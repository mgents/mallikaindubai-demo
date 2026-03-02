'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientBlob from '@/components/shared/GradientBlob'

const features = [
  'Investor Workspace',
  'Signal Layer',
  'Underwriting Tools',
  'Deal Rooms',
  'Segment Positioning',
  'Partner Enablement',
  'Compliance Layer',
]

export default function ClosingCTA() {
  return (
    <SectionWrapper id="closing" className="flex flex-col items-center justify-center text-center min-h-screen">
      <GradientBlob color="gold" position="center" size={400} />
      <GradientBlob color="teal" position="center" size={300} className="opacity-50" />

      {/* Transformation text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <p className="text-xl md:text-2xl text-white/50 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          From
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Premium Broker
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
        className="mb-8"
      >
        <svg width="60" height="40" viewBox="0 0 60 40">
          <motion.path
            d="M10 20 L50 20"
            stroke="#D4A853"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          <motion.path
            d="M42 12 L50 20 L42 28"
            stroke="#D4A853"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.2 }}
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-12"
      >
        <p className="text-xl md:text-2xl text-white/50 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          To
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient max-w-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          AI-Enabled Investment Intelligence Platform
        </h2>
      </motion.div>

      {/* Feature tags */}
      <motion.div
        className="flex flex-wrap gap-3 justify-center max-w-2xl mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
      >
        {features.map((feature, i) => (
          <motion.span
            key={feature}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 + i * 0.1, type: 'spring', stiffness: 200 }}
            className="px-4 py-2 glass rounded-full text-sm text-white/70"
          >
            {feature}
          </motion.span>
        ))}
      </motion.div>

      {/* Profile + tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2 }}
        className="flex flex-col items-center gap-4 mb-12"
      >
        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-gold/30">
          <Image
            src="/images/mallika-profile.png"
            alt="Mallika Boobna"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
            Mallika Boobna
          </p>
          <p className="text-sm text-white/40">Partner & Singapore Country Director, Marrfa</p>
        </div>
        <p className="text-2xl text-gold-gradient font-bold" style={{ fontFamily: 'var(--font-display)' }}>
          We Inform. You Decide.
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5 }}
      >
        <button className="relative px-10 py-4 rounded-xl text-lg font-bold text-black bg-gradient-to-r from-gold to-gold-light overflow-hidden group">
          <span className="relative z-10">Let&apos;s Build This Together</span>
          {/* Shimmer */}
          <div className="absolute inset-0 shimmer-border opacity-50" />
        </button>
      </motion.div>
    </SectionWrapper>
  )
}
