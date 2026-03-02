'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import PersonaBadge from '@/components/shared/PersonaBadge'
import GlowCard from '@/components/shared/GlowCard'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { rentalIncomeDefaults, operatingCosts, cashOnCashComparisons } from '@/data/mockRentalCosts'

export default function RentalIncomeOptimizer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [monthlyRent, setMonthlyRent] = useState(rentalIncomeDefaults.monthlyRent)
  const [occupancy, setOccupancy] = useState(rentalIncomeDefaults.occupancyRate)

  const annualGross = monthlyRent * 12 * (occupancy / 100)
  const totalCosts = operatingCosts.serviceCharges.annual + operatingCosts.propertyManagement.annual +
                     operatingCosts.maintenanceReserve.annual + operatingCosts.chillerFees.annual
  const annualNet = annualGross - totalCosts
  const cashOnCash = ((annualNet / rentalIncomeDefaults.propertyValue) * 100)

  const costBreakdown = [
    { name: 'Gross Income', amount: annualGross, color: '#10b981' },
    { name: 'Service Charges', amount: -operatingCosts.serviceCharges.annual, color: '#ef4444' },
    { name: 'Property Mgmt', amount: -operatingCosts.propertyManagement.annual, color: '#f97316' },
    { name: 'Maintenance', amount: -operatingCosts.maintenanceReserve.annual, color: '#f59e0b' },
    { name: 'Chiller/Utils', amount: -operatingCosts.chillerFees.annual, color: '#eab308' },
    { name: 'Net Income', amount: annualNet, color: '#D4A853' },
  ]

  return (
    <SectionWrapper id="rental-income" className="theme-cashflow">
      <div className="container mx-auto px-6" ref={ref}>
        <PersonaBadge type="cashflow" className="mb-12" />

        <SectionHeading
          number="10"
          title="Rental Income Optimizer"
          subtitle="True cash-on-cash returns with all costs revealed"
        />

        <NarrativeBlock text="Rental income isn't just gross rent minus mortgage. We show every dirham—service charges, DEWA, chiller fees, property management—so your 6.5% yield projection is real, not aspirational." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Controls */}
          <GlowCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gold-light" style={{ fontFamily: 'var(--font-display)' }}>
              Income Inputs
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-white/70">Monthly Rent</label>
                  <span className="text-gold font-bold">AED {monthlyRent.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="8000"
                  max="25000"
                  step="500"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: '#D4A853' }}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-white/70">Occupancy Rate</label>
                  <span className="text-gold font-bold">{occupancy}%</span>
                </div>
                <input
                  type="range"
                  min="85"
                  max="98"
                  step="1"
                  value={occupancy}
                  onChange={(e) => setOccupancy(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: '#D4A853' }}
                />
              </div>
            </div>

            {/* Cash-on-Cash Gauge */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-lg font-bold mb-4 text-gold-light">Cash-on-Cash Return</h4>
              <div className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">
                  <AnimatedCounter value={cashOnCash} decimals={1} duration={1} />%
                </div>
                <p className="text-sm text-white/50">Annual net return on investment</p>
              </div>
            </div>
          </GlowCard>

          {/* Cost Breakdown */}
          <GlowCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gold-light" style={{ fontFamily: 'var(--font-display)' }}>
              Annual Cost Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={costBreakdown} layout="horizontal">
                <XAxis type="number" stroke="#D4A853" />
                <YAxis type="category" dataKey="name" stroke="#D4A853" width={120} />
                <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                  {costBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Comparisons */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-white/50 mb-3">Market Comparison</p>
              <div className="flex flex-wrap gap-2">
                {cashOnCashComparisons.map((comp) => (
                  <div
                    key={comp.market}
                    className={`px-4 py-2 rounded-lg ${
                      comp.highlight ? 'bg-gold/20 border border-gold' : 'glass'
                    }`}
                  >
                    <p className="text-xs text-white/60">{comp.market}</p>
                    <p className={`text-lg font-bold ${comp.highlight ? 'text-gold' : 'text-white'}`}>
                      {comp.return}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </SectionWrapper>
  )
}
