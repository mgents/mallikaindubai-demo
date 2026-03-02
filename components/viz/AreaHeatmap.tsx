'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { areas, type AreaData } from '@/data/mockAreas'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface AreaHeatmapProps {
  onSelectArea?: (areaId: string) => void
  selectedArea?: string
}

function getColorByMomentum(score: number): string {
  if (score >= 85) return 'rgba(14,165,233,0.25)'
  if (score >= 70) return 'rgba(212,168,83,0.2)'
  return 'rgba(255,255,255,0.05)'
}

function getBorderByMomentum(score: number): string {
  if (score >= 85) return 'rgba(14,165,233,0.4)'
  if (score >= 70) return 'rgba(212,168,83,0.3)'
  return 'rgba(255,255,255,0.08)'
}

export default function AreaHeatmap({ onSelectArea, selectedArea }: AreaHeatmapProps) {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {areas.slice(0, 8).map((area, index) => (
        <motion.div
          key={area.id}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: index * 0.08,
          }}
          className={`relative rounded-xl p-4 md:p-5 cursor-pointer transition-all duration-300 backdrop-blur-xl
            ${area.gridSize === 'large' ? 'md:col-span-2 md:row-span-1' : ''}
            ${selectedArea === area.id ? 'ring-1 ring-gold/40' : ''}
          `}
          style={{
            background: getColorByMomentum(area.momentumScore),
            border: `1px solid ${getBorderByMomentum(area.momentumScore)}`,
          }}
          onMouseEnter={() => setHoveredArea(area.id)}
          onMouseLeave={() => setHoveredArea(null)}
          onClick={() => onSelectArea?.(area.id)}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
          {/* Glow pulse */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            animate={{
              boxShadow: [
                `inset 0 0 20px ${getColorByMomentum(area.momentumScore)}`,
                `inset 0 0 40px ${getColorByMomentum(area.momentumScore)}`,
                `inset 0 0 20px ${getColorByMomentum(area.momentumScore)}`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <h3 className="text-sm md:text-base font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
            {area.name}
          </h3>
          <div className="text-xs text-white/40 mb-2">Score: {area.momentumScore}/100</div>

          <AnimatePresence>
            {hoveredArea === area.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 overflow-hidden"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">90d Txns</span>
                  <AnimatedCounter value={area.transactions90d} className="font-semibold text-teal-light" duration={0.8} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Rent YoY</span>
                  <span className="flex items-center gap-1">
                    {area.rentYoY > 0 ? (
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-400" />
                    )}
                    <span className={area.rentYoY > 0 ? 'text-green-400' : 'text-red-400'}>
                      {area.rentYoY > 0 ? '+' : ''}{area.rentYoY}%
                    </span>
                  </span>
                </div>
                <div className="text-sm">
                  <span className="text-white/50">Off-plan</span>
                  <div className="mt-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${area.offPlanRatio}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-teal to-teal-light"
                    />
                  </div>
                  <span className="text-xs text-white/40">{area.offPlanRatio}%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
