'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip } from 'recharts'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import GlowCard from '@/components/shared/GlowCard'
import AIBadge from '@/components/shared/AIBadge'
import { yieldForecasts, scenarios, modelInfo } from '@/data/mockForecasts'

export default function PredictiveYield() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedScenario, setSelectedScenario] = useState('Base')

  return (
    <SectionWrapper id="predictive-yield" className="theme-growth">
      <div className="container mx-auto px-6" ref={ref}>
        <SectionHeading
          number="06"
          title="Predictive Yield Forecast"
          subtitle="ML-powered 36-month rental projections"
        />

        <NarrativeBlock text="Stop guessing future yields. Our AI models 36-month rental trajectories with quantified confidence—so you invest with foresight, not hope." />

        <GlowCard className="p-8 mb-8">
          {/* Scenario Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-teal-light" style={{ fontFamily: 'var(--font-display)' }}>
              Rental Yield Projections
            </h3>
            <div className="flex gap-2">
              {scenarios.map((scenario) => (
                <button
                  key={scenario}
                  onClick={() => setSelectedScenario(scenario)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    selectedScenario === scenario
                      ? 'bg-teal text-black'
                      : 'glass text-white/70 hover:text-white'
                  }`}
                >
                  {scenario}
                </button>
              ))}
            </div>
          </div>

          {/* Forecast Chart */}
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart>
              <defs>
                {yieldForecasts.map((forecast) => (
                  <linearGradient key={forecast.area} id={`gradient-${forecast.area}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={forecast.color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={forecast.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              <XAxis dataKey="month" stroke="#0EA5E9" label={{ value: 'Months', position: 'insideBottom' }} />
              <YAxis stroke="#0EA5E9" label={{ value: 'Yield %', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0A0A12', border: '1px solid #0EA5E9' }}
                formatter={(value) => `${Number(value).toFixed(1)}%`}
              />
              {yieldForecasts.map((forecast) => (
                <Area
                  key={forecast.area}
                  data={forecast.data}
                  dataKey="yield"
                  stroke={forecast.color}
                  fill={`url(#gradient-${forecast.area})`}
                  strokeWidth={2}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>

          {/* AI Model Info */}
          <div className="mt-6 flex items-center justify-between glass p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <AIBadge />
              <p className="text-sm text-white/70">
                Model trained on <span className="text-teal font-bold">{modelInfo.trainingYears} years</span> DLD
                data + <span className="text-gold font-bold">{modelInfo.variables} macro variables</span>
              </p>
            </div>
          </div>
        </GlowCard>

        {/* Area Legend */}
        <div className="flex flex-wrap gap-4 justify-center">
          {yieldForecasts.map((forecast, i) => (
            <motion.div
              key={forecast.area}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="px-4 py-2 glass rounded-full flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: forecast.color }} />
              <span className="text-sm">{forecast.area}</span>
              <span className="text-xs text-white/50">({forecast.confidence})</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
