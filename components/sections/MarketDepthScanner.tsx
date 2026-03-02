'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import PersonaBadge from '@/components/shared/PersonaBadge'
import GlowCard from '@/components/shared/GlowCard'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { orderBookData, liquidityMetrics, liquidityTreemap } from '@/data/mockOrderBook'

export default function MarketDepthScanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const buyersData = orderBookData.buyers.map((item) => ({
    price: item.pricePerSqft,
    volume: item.volume,
  }))

  const sellersData = orderBookData.sellers.map((item) => ({
    price: item.pricePerSqft,
    volume: -item.volume, // Negative for visual symmetry
  }))

  return (
    <SectionWrapper id="market-depth" className="theme-institutional">
      <div className="container mx-auto px-6" ref={ref}>
        <PersonaBadge type="institutional" className="mb-12" />

        <SectionHeading
          number="05"
          title="Market Depth & Liquidity Scanner"
          subtitle="Order book-style transparency for real estate"
        />

        <NarrativeBlock text="Liquidity isn't luck—it's data. Know exactly how long it takes to exit any Dubai market, at any price point." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Depth Chart */}
          <GlowCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-teal-light" style={{ fontFamily: 'var(--font-display)' }}>
              Order Book Depth
            </h3>
            <div className="flex gap-4">
              {/* Buyers (left) */}
              <div className="flex-1">
                <p className="text-sm text-white/50 mb-4">Buyer Demand</p>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={buyersData} layout="vertical">
                    <XAxis type="number" stroke="#0EA5E9" />
                    <YAxis type="category" dataKey="price" stroke="#0EA5E9" width={60} />
                    <Bar dataKey="volume" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* Sellers (right) */}
              <div className="flex-1">
                <p className="text-sm text-white/50 mb-4">Seller Supply</p>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sellersData} layout="vertical">
                    <XAxis type="number" stroke="#ef4444" reversed />
                    <YAxis type="category" dataKey="price" stroke="#ef4444" width={60} />
                    <Bar dataKey="volume" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </GlowCard>

          {/* Metrics */}
          <GlowCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-teal-light" style={{ fontFamily: 'var(--font-display)' }}>
              Liquidity Metrics
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm text-white/50 mb-2">Bid-Ask Spread</p>
                <p className="text-3xl font-bold text-gold">{liquidityMetrics.bidAskSpread}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-white/50 mb-2">Days to Liquidity</p>
                <p className="text-3xl font-bold text-teal">
                  <AnimatedCounter value={liquidityMetrics.daysToLiquidity} duration={1.5} />
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm text-white/50 mb-2">Active Buyers</p>
                <p className="text-3xl font-bold text-gold">
                  <AnimatedCounter value={liquidityMetrics.activeBuyers} duration={1.5} />
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-white/50 mb-2">Avg Turnover</p>
                <p className="text-2xl font-bold text-teal">{liquidityMetrics.inventoryTurnover}</p>
              </motion.div>
            </div>

            {/* Liquidity Treemap (simplified) */}
            <div className="mt-8">
              <p className="text-sm text-white/50 mb-4">Liquidity by Area</p>
              <div className="grid grid-cols-4 gap-2">
                {liquidityTreemap.slice(0, 8).map((area, i) => (
                  <motion.div
                    key={area.area}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="p-3 rounded glass"
                    style={{ backgroundColor: `${area.color}20` }}
                  >
                    <p className="text-xs text-white/70">{area.area}</p>
                    <p className="text-sm font-bold" style={{ color: area.color }}>
                      {Math.round(area.liquidity * 100)}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </SectionWrapper>
  )
}
