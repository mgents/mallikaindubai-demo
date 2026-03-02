'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import { tenantProfiles, demandDrivers, areaTenantMix } from '@/data/mockTenantProfiles'
import { vacancyRates, vacancyThresholds } from '@/data/mockVacancyRates'

export default function TenantMarketIntelligence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="tenant-intelligence" className="theme-cashflow">
      <div className="container mx-auto px-6" ref={ref}>
        <SectionHeading
          number="11"
          title="Tenant Market Intelligence"
          subtitle="Who actually rents in each Dubai area"
        />

        <NarrativeBlock text="In Marina, 68% of tenants are single professionals on 1-year leases—higher turnover, but premium rents. In Arabian Ranches, it's families on 2-3 year contracts—stable, but seasonal. Know your tenant before you buy." />

        {/* Tenant Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tenantProfiles.map((profile, i) => (
            <motion.div
              key={profile.type}
              initial={{ opacity: 0, rotateY: 180 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <GlowCard className="p-6">
                <div className="text-4xl mb-3">{profile.avatar}</div>
                <h3 className="text-xl font-bold mb-3 text-gold-light">{profile.type}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-white/50">Income:</span> <span className="text-white">{profile.incomeRange}</span></p>
                  <p><span className="text-white/50">Lease:</span> <span className="text-white">{profile.leaseDuration}</span></p>
                  <p><span className="text-white/50">Market Share:</span> <span className="text-gold font-bold">{profile.marketShare}%</span></p>
                  <p><span className="text-white/50">Turnover:</span> <span className="text-white">{profile.turnover}</span></p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50 mb-2">Primary Areas:</p>
                  <div className="flex flex-wrap gap-1">
                    {profile.areas.slice(0, 3).map((area) => (
                      <span key={area} className="px-2 py-1 bg-white/5 rounded text-xs">{area}</span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Vacancy Heatmap */}
        <GlowCard className="p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gold-light" style={{ fontFamily: 'var(--font-display)' }}>
            12-Month Vacancy Calendar
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="text-left p-2 text-white/70">Area</th>
                  {vacancyRates.map((month) => (
                    <th key={month.month} className="text-center p-2 text-white/50">{month.month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['Marina', 'JBR', 'Downtown', 'DubaiHills'].map((area) => (
                  <tr key={area} className="border-t border-white/5">
                    <td className="p-2 text-white font-bold">{area.replace('DubaiHills', 'Dubai Hills')}</td>
                    {vacancyRates.map((month) => {
                      const value = month[area as keyof typeof month] as number
                      const color = value < vacancyThresholds.low
                        ? 'bg-green-500/30'
                        : value < vacancyThresholds.moderate
                        ? 'bg-amber-500/30'
                        : 'bg-red-500/30'
                      return (
                        <td key={month.month} className="p-2">
                          <div className={`${color} rounded p-2 text-center text-white`}>
                            {value}%
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500/30" />
              <span className="text-white/60">&lt;3% (Low)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-amber-500/30" />
              <span className="text-white/60">3-6% (Moderate)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500/30" />
              <span className="text-white/60">&gt;6% (High)</span>
            </div>
          </div>
        </GlowCard>

        {/* Demand Drivers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {demandDrivers.map((driver, i) => (
            <motion.div
              key={driver.factor}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <GlowCard className="p-4 text-center">
                <div className="text-3xl mb-2">{driver.icon}</div>
                <p className="text-xs text-white/60 mb-1">{driver.factor}</p>
                <p className="text-sm font-bold text-gold">{driver.impact}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
