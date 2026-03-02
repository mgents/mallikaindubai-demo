'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'investor-workspace', label: 'Investor Workspace' },
  { id: 'signal-layer', label: 'Signal Layer' },
  { id: 'underwriting', label: 'Underwriting' },
  { id: 'deal-rooms', label: 'Deal Rooms' },
  { id: 'segments', label: 'Segments' },
  { id: 'partners', label: 'Partners' },
  { id: 'compliance', label: 'Compliance' },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5)

      const sectionElements = sections.map(s => ({
        id: s.id,
        el: document.getElementById(s.id),
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          setActiveSection(sectionElements[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Logo - always visible */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src="/images/logo-white.png"
          alt="Mallika in Dubai"
          width={140}
          height={40}
          className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => scrollTo('hero')}
        />
      </motion.div>

      {/* Floating nav dots */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
          >
            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="group flex items-center gap-3 justify-end"
              >
                <span className="text-xs text-white/0 group-hover:text-white/60 transition-all duration-300 whitespace-nowrap">
                  {section.label}
                </span>
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gold scale-125 shadow-[0_0_10px_rgba(212,168,83,0.5)]'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
