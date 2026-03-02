'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import { developers, scorecardColumns } from '@/data/mockDevelopers'

export default function DeveloperScorecard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedDev, setSelectedDev] = useState<string | null>(null)

  return (
    <SectionWrapper id="developer-scorecard" className="theme-institutional">
      <div className="container mx-auto px-6" ref={ref}>
        <SectionHeading
          number="08"
          title="Developer Scorecard Matrix"
          subtitle="Compare top 10 Dubai developers on 6 dimensions"
        />

        <NarrativeBlock text="Not all developers are equal. Our scorecard distills decades of delivery data into one decision-making grid." />

        <GlowCard className="p-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-teal/20">
                <th className="text-left p-3 text-teal-light font-bold">Developer</th>
                {scorecardColumns.map((col) => (
                  <th key={col} className="text-center p-3 text-white/70 font-normal">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {developers.map((dev, i) => (
                <motion.tr
                  key={dev.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                  onClick={() => setSelectedDev(selectedDev === dev.name ? null : dev.name)}
                >
                  <td className="p-3 font-bold text-gold-light">{dev.name}</td>
                  <td className="p-3 text-center">
                    <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-teal" style={{ width: `${dev.deliveryRecord}%` }} />
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-gold" style={{ width: `${dev.qualityScore}%` }} />
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: `${dev.financialStrength}%` }} />
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${dev.pipeline}%` }} />
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: `${dev.pricePremium}%` }} />
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
                      <div className="h-full bg-teal-light" style={{ width: `${dev.investorSentiment}%` }} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          {selectedDev && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-6 glass rounded-lg"
            >
              {developers.find((d) => d.name === selectedDev) && (
                <>
                  <h4 className="text-xl font-bold text-gold-light mb-3">{selectedDev}</h4>
                  <p className="text-sm text-white/70 mb-2">Recent Projects:</p>
                  <div className="flex flex-wrap gap-2">
                    {developers.find((d) => d.name === selectedDev)?.recentProjects.map((proj) => (
                      <span key={proj} className="px-3 py-1 glass rounded-full text-xs">{proj}</span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </GlowCard>
      </div>
    </SectionWrapper>
  )
}
