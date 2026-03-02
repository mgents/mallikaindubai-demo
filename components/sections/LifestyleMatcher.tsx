'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { School, Umbrella, MapPin, Train, Dog, TreePine } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import NarrativeBlock from '@/components/shared/NarrativeBlock'
import PersonaBadge from '@/components/shared/PersonaBadge'
import GlowCard from '@/components/shared/GlowCard'
import { communities, lifestyleFilters } from '@/data/mockCommunities'

const iconMap: Record<string, any> = {
  'School-Age Kids': School,
  'Beachfront': Umbrella,
  'Golf Course': MapPin,
  'Metro Access': Train,
  'Pet-Friendly': Dog,
  'Quiet Retreat': TreePine,
}

export default function LifestyleMatcher() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState<string[]>(['School-Age Kids'])

  const toggleFilter = (filter: string) => {
    setSelected(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    )
  }

  const matchedCommunities = communities.filter(c =>
    selected.some(s => c.lifestyle.includes(s))
  ).slice(0, 3)

  return (
    <SectionWrapper id="lifestyle-matcher" className="theme-personal">
      <div className="container mx-auto px-6" ref={ref}>
        <PersonaBadge type="personal" className="mb-12" />

        <SectionHeading
          number="13"
          title="Lifestyle Matcher"
          subtitle="Find your Dubai home, not just an investment"
        />

        <NarrativeBlock text="You're not buying an investment—you're choosing where your kids go to school, where you grocery shop on Fridays, how long you sit in traffic. We match Dubai's communities to how you actually live." />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {lifestyleFilters.map((filter) => {
            const Icon = iconMap[filter]
            const isSelected = selected.includes(filter)
            return (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-5 py-3 rounded-full flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-coral/30 border-2 border-coral text-coral scale-105'
                    : 'glass border border-white/10 text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{filter}</span>
              </button>
            )
          })}
        </div>

        {/* Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matchedCommunities.map((community, i) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              <GlowCard className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-peach">{community.name}</h3>
                  <span className="px-2 py-1 bg-coral/20 text-coral text-xs font-bold rounded">
                    {community.match}% match
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-4">{community.vibe}</p>

                <div className="space-y-2 text-sm mb-4">
                  <p><span className="text-white/50">Type:</span> <span className="text-white">{community.type}</span></p>
                  <p><span className="text-white/50">Price:</span> <span className="text-gold">{community.price}</span></p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50 mb-2">Key Amenities:</p>
                  <div className="flex flex-wrap gap-1">
                    {community.lifestyle.map((item) => {
                      const Icon = iconMap[item]
                      return (
                        <span key={item} className="px-2 py-1 bg-white/5 rounded-full text-xs flex items-center gap-1">
                          <Icon className="w-3 h-3" />
                          {item}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {community.schools && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-2">📚 Nearby Schools:</p>
                    {community.schools.slice(0, 2).map((school) => (
                      <div key={school.name} className="text-xs mb-1">
                        <span className="text-white">{school.name}</span>
                        <span className="text-white/50"> — {school.distance}km</span>
                      </div>
                    ))}
                  </div>
                )}

                {community.commute && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-2">🚗 Commute Times:</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="text-white/50">Downtown</p>
                        <p className="text-white font-bold">{community.commute.downtown}</p>
                      </div>
                      <div>
                        <p className="text-white/50">Airport</p>
                        <p className="text-white font-bold">{community.commute.airport}</p>
                      </div>
                      <div>
                        <p className="text-white/50">Beach</p>
                        <p className="text-white font-bold">{community.commute.beach}</p>
                      </div>
                    </div>
                  </div>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
