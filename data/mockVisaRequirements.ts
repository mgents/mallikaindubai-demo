// Golden Visa pathway information for Personal Home Buyers
export const visaSteps = [
  {
    step: 1,
    title: 'Purchase AED 2M+ property',
    description: 'You qualify!',
    icon: '✅',
    duration: 'Depends on purchase timeline',
    status: 'eligible',
  },
  {
    step: 2,
    title: 'Obtain Title Deed',
    description: 'Register with Dubai Land Department',
    icon: '📄',
    duration: '2-4 weeks',
    status: 'pending',
  },
  {
    step: 3,
    title: 'Submit Visa Application',
    description: 'Online via ICP portal',
    icon: '📋',
    duration: '3-5 days processing',
    status: 'pending',
  },
  {
    step: 4,
    title: 'Medical & Biometrics',
    description: 'Health screening at approved center',
    icon: '🏥',
    duration: '1 week',
    status: 'pending',
  },
  {
    step: 5,
    title: '10-Year Visa Issued',
    description: 'Renewable Golden Visa',
    icon: '🛂',
    duration: '2-3 days',
    status: 'pending',
  },
]

export const visaBenefits = [
  {
    title: '10-Year Residency',
    description: 'Renewable, no sponsor needed',
    icon: '⏰',
    color: '#D4A853',
  },
  {
    title: 'Family Inclusion',
    description: 'Spouse + children + 1 domestic helper',
    icon: '👨‍👩‍👧‍👦',
    color: '#0EA5E9',
  },
  {
    title: '100% Foreign Ownership',
    description: 'No Emirati partner required',
    icon: '🏠',
    color: '#FF6B6B',
  },
  {
    title: 'Tax Efficiency',
    description: '0% personal income tax',
    icon: '💰',
    color: '#10b981',
  },
]

export const qualifyingCriteria = {
  minimumValue: 2000000, // AED
  propertyTypes: ['Residential', 'Commercial', 'Mixed-use'],
  eligibleAreas: [
    'Downtown',
    'Marina',
    'JBR',
    'Business Bay',
    'Palm Jumeirah',
    'Dubai Hills',
    'Arabian Ranches',
    'Creek Harbour',
  ],
  notes: [
    'Property must be completed (not off-plan for visa purposes)',
    'Mortgaged properties qualify (based on purchase price, not equity)',
    'Can combine multiple properties to reach AED 2M threshold',
  ],
}

export const processTimeline = {
  total: '6-8 weeks',
  breakdown: [
    { phase: 'Title Deed', weeks: 2-4 },
    { phase: 'Application', weeks: 1 },
    { phase: 'Medical/Biometrics', weeks: 1 },
    { phase: 'Visa Issuance', weeks: 1 },
  ],
}
