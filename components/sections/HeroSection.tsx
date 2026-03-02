'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ChevronDown } from 'lucide-react'

const Canvas3D = dynamic(() => import('@/components/three/Canvas3D'), { ssr: false })
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false })

export default function HeroSection() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),    // logo
      setTimeout(() => setPhase(2), 1000),    // pain lines
      setTimeout(() => setPhase(3), 2800),    // dissolve
      setTimeout(() => setPhase(4), 3500),    // golden line
      setTimeout(() => setPhase(5), 4000),    // tagline
      setTimeout(() => setPhase(6), 5500),    // subtitle
      setTimeout(() => setPhase(7), 6200),    // scroll indicator
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const tagline = 'We Inform. You Decide.'

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050507]">
      {/* 3D Particle Background */}
      <Canvas3D>
        <ParticleField count={400} speed={0.2} />
      </Canvas3D>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Pain points */}
        <AnimatePresence>
          {phase >= 2 && phase < 3 && (
            <motion.div className="space-y-3 mb-8">
              {['Too many agents.', 'Too many projects.', 'Too much noise.'].map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, delay: i * 0.4 }}
                  className="text-2xl md:text-3xl lg:text-4xl text-white/80"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: `${2.5 - i * 0.15}rem`,
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Golden line */}
        {phase >= 4 && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 400, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
            style={{ maxWidth: '80vw', boxShadow: '0 0 20px rgba(212,168,83,0.3)' }}
          />
        )}

        {/* Tagline */}
        {phase >= 5 && (
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 max-w-5xl px-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {tagline.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="text-gold-gradient inline-block"
                style={char === ' ' ? { width: '0.25em' } : undefined}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        )}

        {/* Subtitle */}
        {phase >= 6 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-white max-w-xl mx-auto"
          >
            Explore what your platform could become.
          </motion.p>
        )}

        {/* Scroll indicator */}
        {phase >= 7 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/40 tracking-widest uppercase">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-5 h-5 text-gold/60" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
