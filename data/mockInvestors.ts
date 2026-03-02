export interface InvestorProfile {
  id: string
  name: string
  origin: string
  archetype: 'conservative' | 'growth' | 'aggressive'
  riskAppetite: number // 1-10
  riskLabel: string
  horizon: string
  budget: string
  budgetMin: number
  budgetMax: number
  visaIntent: boolean
  strategy: string
  liquidityNeed: string
  memo: InvestorMemo
}

export interface InvestorMemo {
  thesis: string
  areas: string[]
  risks: { label: string; level: number }[]
  nextSteps: string[]
}

export const investors: InvestorProfile[] = [
  {
    id: 'conservative',
    name: 'James Mitchell',
    origin: 'United Kingdom',
    archetype: 'conservative',
    riskAppetite: 3,
    riskLabel: 'Conservative',
    horizon: '3-5 years',
    budget: 'AED 1–2M',
    budgetMin: 1000000,
    budgetMax: 2000000,
    visaIntent: false,
    strategy: 'Capital Preservation + Yield',
    liquidityNeed: 'High',
    memo: {
      thesis: 'UK-based investor seeking stable, income-generating Dubai assets with minimal downside exposure. Focus on completed properties in established communities with proven rental demand and strong secondary market liquidity.',
      areas: ['Dubai Marina', 'JBR', 'Downtown Dubai'],
      risks: [
        { label: 'Market Risk', level: 25 },
        { label: 'Currency Risk', level: 40 },
        { label: 'Liquidity Risk', level: 20 },
      ],
      nextSteps: [
        'Review 3 pre-selected completed units in Marina',
        'GBP/AED hedge strategy consultation',
        'Schedule virtual property tour',
        'Connect with UK tax advisor for HMRC implications',
      ],
    },
  },
  {
    id: 'growth',
    name: 'Sarah Chen',
    origin: 'Singapore',
    archetype: 'growth',
    riskAppetite: 6,
    riskLabel: 'Growth',
    horizon: '5-7 years',
    budget: 'AED 3–5M',
    budgetMin: 3000000,
    budgetMax: 5000000,
    visaIntent: true,
    strategy: 'Capital Appreciation + Rental',
    liquidityNeed: 'Medium',
    memo: {
      thesis: 'Singapore family office seeking 5-7 year growth exposure in Dubai\'s emerging corridors. Golden Visa eligibility through AED 2M+ investment creates additional strategic value. Balanced approach blending off-plan appreciation with rental yield on delivery.',
      areas: ['Dubai Hills', 'Creek Harbour', 'Business Bay'],
      risks: [
        { label: 'Market Risk', level: 45 },
        { label: 'Currency Risk', level: 30 },
        { label: 'Liquidity Risk', level: 50 },
      ],
      nextSteps: [
        'Review 2 off-plan opportunities in Creek Harbour (Emaar)',
        'Golden Visa eligibility assessment',
        'Payment plan structure review (60/40 split)',
        'Schedule Dubai visit for site inspections',
      ],
    },
  },
  {
    id: 'aggressive',
    name: 'Klaus Weber',
    origin: 'Germany',
    archetype: 'aggressive',
    riskAppetite: 9,
    riskLabel: 'Aggressive',
    horizon: '7-10 years',
    budget: 'AED 5–10M',
    budgetMin: 5000000,
    budgetMax: 10000000,
    visaIntent: true,
    strategy: 'Maximum Capital Appreciation',
    liquidityNeed: 'Low',
    memo: {
      thesis: 'German HNWI seeking high-conviction, concentrated positions in Dubai\'s next growth corridors. Comfortable with construction-phase risk for maximum IRR. Portfolio approach across 3-4 off-plan projects with staggered delivery dates to optimize cashflow and exit timing.',
      areas: ['MBR City', 'Dubai Creek Harbour', 'Palm Jumeirah'],
      risks: [
        { label: 'Market Risk', level: 70 },
        { label: 'Currency Risk', level: 35 },
        { label: 'Liquidity Risk', level: 75 },
      ],
      nextSteps: [
        'Deep-dive on 4 off-plan projects across target areas',
        'Monte Carlo scenario modeling session',
        'Multi-property portfolio stress test',
        'Developer reliability assessment for shortlisted projects',
      ],
    },
  },
]
