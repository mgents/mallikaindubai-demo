'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { moveInCostCategories, furniturePackages, moveInTimeline, totalMoveInCost } from '@/data/mockMoveInCosts'

export default function MoveInCostPlanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedPackage, setSelectedPackage] = useState(furniturePackages[1]) // Default to Comfort

  const totalCost = moveInCostCategories.reduce((sum, cat) => {
    if (cat.fixed) return sum + cat.amount
    if (cat.variable && cat.category === 'Furniture Package') return sum + selectedPackage.price
    if (cat.conditional) return sum + cat.amount * 0.7 // 70% chance
    return sum
  }, 0)

  return (
    <SectionWrapper id="move-in-cost" className="theme-personal">
      <div className="container mx-auto px-6" ref={ref}>
        <SectionHeading
          number="15"
          title="Move-In Cost Planner"
          subtitle="What it really costs to move into your Dubai home"
        />

        <NarrativeBlock text="Your AED 2.1M property needs another AED 50-80K to become a home. DEWA deposits, furniture, internet setup—we break it all down so moving to Dubai feels planned, not chaotic." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Furniture Packages */}
          <GlowCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-peach" style={{ fontFamily: 'var(--font-display)' }}>
              Furniture Packages
            </h3>
            <div className="space-y-4">
              {furniturePackages.map((pkg, i) => (
                <motion.button
                  key={pkg.name}
                  onClick={() => setSelectedPackage(pkg)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15 }}
                  className={`w-full text-left p-6 rounded-lg transition-all ${
                    selectedPackage.name === pkg.name
                      ? 'bg-coral/30 border-2 border-coral scale-105'
                      : 'glass border border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">{pkg.name}</h4>
                    <span className="text-2xl font-bold text-coral">
                      AED {(pkg.price / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <p className="text-sm text-white/60 mb-3">{pkg.style}</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.vendors.map((vendor) => (
                      <span key={vendor} className="px-2 py-1 bg-white/5 rounded text-xs text-white/70">
                        {vendor}
                      </span>
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>
          </GlowCard>

          {/* Cost Breakdown */}
          <GlowCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-coral" style={{ fontFamily: 'var(--font-display)' }}>
              Total Move-In Cost
            </h3>
            <div className="text-center mb-8">
              <p className="text-5xl font-bold text-gold mb-2">
                AED <AnimatedCounter value={Math.round(totalCost / 1000)} duration={1.5} />K
              </p>
              <p className="text-sm text-white/50">Estimated total to move in</p>
            </div>

            <div className="space-y-3">
              {moveInCostCategories.map((cat, i) => {
                const amount = cat.variable && cat.category === 'Furniture Package'
                  ? selectedPackage.price
                  : cat.amount
                return (
                  <motion.div
                    key={cat.category}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between p-4 glass rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-bold text-white">{cat.category}</p>
                      <p className="text-xs text-white/50">{cat.description}</p>
                    </div>
                    <p className="text-lg font-bold text-gold ml-4">
                      {amount ? `AED ${amount.toLocaleString()}` : cat.recurring}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between p-4 bg-coral/20 rounded-lg">
                <p className="font-bold text-white">Total Estimate</p>
                <p className="text-2xl font-bold text-coral">
                  AED <AnimatedCounter value={Math.round(totalCost / 1000)} duration={1.5} />K
                </p>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Move-In Timeline */}
        <GlowCard className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-peach" style={{ fontFamily: 'var(--font-display)' }}>
            Week 1 Timeline
          </h3>
          <div className="space-y-4">
            {moveInTimeline.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + i * 0.15 }}
                className="flex gap-4 p-4 glass rounded-lg"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral/20 border-2 border-coral flex items-center justify-center text-coral font-bold">
                  D{day.day}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white mb-1">{day.task}</p>
                  <p className="text-sm text-white/60">{day.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlowCard>
      </div>
    </SectionWrapper>
  )
}
