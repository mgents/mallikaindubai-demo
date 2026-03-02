'use client'

import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: ReactNode
  id: string
  className?: string
  theme?: 'dark' | 'light'
  grain?: boolean
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  theme = 'dark',
  grain = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative min-h-screen py-24 md:py-32 px-6 md:px-12 overflow-hidden',
        theme === 'dark' ? 'bg-[#050507] text-white' : 'bg-white text-black',
        grain && 'grain',
        className
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
