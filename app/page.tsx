'use client'

import dynamic from 'next/dynamic'
import FloatingNav from '@/components/layout/FloatingNav'
import ScrollProgress from '@/components/layout/ScrollProgress'
import HeroSection from '@/components/sections/HeroSection'

// Original sections
const InvestorWorkspace = dynamic(() => import('@/components/sections/InvestorWorkspace'))
const SignalLayer = dynamic(() => import('@/components/sections/SignalLayer'))
const UnderwritingTools = dynamic(() => import('@/components/sections/UnderwritingTools'))
const DealRooms = dynamic(() => import('@/components/sections/DealRooms'))
const SegmentPositioning = dynamic(() => import('@/components/sections/SegmentPositioning'))
const PartnerEnablement = dynamic(() => import('@/components/sections/PartnerEnablement'))
const ComplianceLayer = dynamic(() => import('@/components/sections/ComplianceLayer'))
const ClosingCTA = dynamic(() => import('@/components/sections/ClosingCTA'))

// NEW: Institutional Investor sections (teal theme)
const MarketDepthScanner = dynamic(() => import('@/components/sections/MarketDepthScanner'))
const PredictiveYield = dynamic(() => import('@/components/sections/PredictiveYield'))
const PortfolioIntelligence = dynamic(() => import('@/components/sections/PortfolioIntelligence'))
const DeveloperScorecard = dynamic(() => import('@/components/sections/DeveloperScorecard'))
const MacroIntelligence = dynamic(() => import('@/components/sections/MacroIntelligence'))

// NEW: Cashflow Seeker sections (gold theme)
const RentalIncomeOptimizer = dynamic(() => import('@/components/sections/RentalIncomeOptimizer'))
const TenantMarketIntelligence = dynamic(() => import('@/components/sections/TenantMarketIntelligence'))
const TrueCostOfOwnership = dynamic(() => import('@/components/sections/TrueCostOfOwnership'))

// NEW: Personal Home Buyer sections (warm gradient theme)
const LifestyleMatcher = dynamic(() => import('@/components/sections/LifestyleMatcher'))
const GoldenVisaPathway = dynamic(() => import('@/components/sections/GoldenVisaPathway'))
const MoveInCostPlanner = dynamic(() => import('@/components/sections/MoveInCostPlanner'))

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <FloatingNav />

      {/* Universal Sections (1-4) */}
      <HeroSection />
      <InvestorWorkspace />
      <SignalLayer />
      <UnderwritingTools />

      {/* 🏦 INSTITUTIONAL INVESTOR BLOCK (5-9) */}
      <MarketDepthScanner />
      <PredictiveYield />
      <PortfolioIntelligence />
      <DeveloperScorecard />
      <MacroIntelligence />

      {/* 💰 CASHFLOW SEEKER BLOCK (10-12) */}
      <RentalIncomeOptimizer />
      <TenantMarketIntelligence />
      <TrueCostOfOwnership />

      {/* 🏡 PERSONAL HOME BUYER BLOCK (13-15) */}
      <LifestyleMatcher />
      <GoldenVisaPathway />
      <MoveInCostPlanner />

      {/* Universal Sections Continued (16-20) */}
      <DealRooms />
      <SegmentPositioning />
      <PartnerEnablement />
      <ComplianceLayer />
      <ClosingCTA />
    </main>
  )
}
