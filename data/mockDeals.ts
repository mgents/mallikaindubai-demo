export interface Deal {
  id: string
  name: string
  developer: string
  developerRating: string
  area: string
  type: string
  price: number
  irr: number
  riskRating: number // 1-5 dots
  paymentSplit: string
  matchScore: number
  unitsRemaining: number
  totalUnits: number
  thesis: string
  metrics: {
    yield: number
    growth: number
    risk: number
    liquidity: number
    developer: number
  }
  highlights: string[]
}

export const deals: Deal[] = [
  {
    id: 'creek-harbour',
    name: 'The Residence at Creek Harbour',
    developer: 'Emaar Properties',
    developerRating: 'A+',
    area: 'Dubai Creek Harbour',
    type: '2BR Apartment',
    price: 2100000,
    irr: 14.2,
    riskRating: 2,
    paymentSplit: '60/40',
    matchScore: 87,
    unitsRemaining: 12,
    totalUnits: 20,
    thesis: 'Prime waterfront positioning in Dubai\'s fastest-growing corridor. Emaar\'s track record ensures delivery confidence. Creek Harbour\'s 42% QoQ transaction surge signals strong price appreciation potential through 2027 handover.',
    metrics: {
      yield: 72,
      growth: 88,
      risk: 28,
      liquidity: 65,
      developer: 95,
    },
    highlights: [
      'Emaar — highest developer reliability in UAE',
      'Creek Harbour momentum score: 95/100',
      'Golden Visa eligible (>AED 2M)',
      '60/40 payment plan with post-handover option',
    ],
  },
  {
    id: 'marina-gate',
    name: 'Marina Gate Tower 2',
    developer: 'Select Group',
    developerRating: 'A',
    area: 'Dubai Marina',
    type: '1BR Apartment',
    price: 3400000,
    irr: 11.8,
    riskRating: 1,
    paymentSplit: '100% Complete',
    matchScore: 74,
    unitsRemaining: 5,
    totalUnits: 15,
    thesis: 'Completed, income-producing asset in Dubai\'s most liquid secondary market. Marina\'s consistent 6.5% rental yield provides immediate cashflow. Low risk profile suitable for capital preservation strategies with moderate appreciation upside.',
    metrics: {
      yield: 85,
      growth: 55,
      risk: 15,
      liquidity: 92,
      developer: 82,
    },
    highlights: [
      'Completed & tenanted — immediate rental income',
      'Dubai Marina: highest liquidity for resale',
      'Consistent 6-7% net rental yield',
      'Premium waterfront views & amenities',
    ],
  },
  {
    id: 'business-bay-tower',
    name: 'Volta Business Bay',
    developer: 'Damac Properties',
    developerRating: 'B+',
    area: 'Business Bay',
    type: 'Studio',
    price: 1600000,
    irr: 16.1,
    riskRating: 3,
    paymentSplit: '50/50',
    matchScore: 68,
    unitsRemaining: 18,
    totalUnits: 25,
    thesis: 'High-yield entry point in Business Bay\'s 31% growth surge. Studio format maximizes rental yield per sqft. Higher risk tolerance required given Damac\'s variable delivery history, offset by aggressive IRR potential and low absolute entry price.',
    metrics: {
      yield: 90,
      growth: 78,
      risk: 55,
      liquidity: 58,
      developer: 62,
    },
    highlights: [
      'Lowest entry price — AED 1.6M',
      'Business Bay: 31% QoQ transaction growth',
      'Highest projected IRR at 16.1%',
      '50/50 payment plan reduces upfront capital',
    ],
  },
]
