// Tenant demographics and market intelligence
export const tenantProfiles = [
  {
    type: 'Young Professionals',
    avatar: '👔',
    areas: ['Marina', 'JBR', 'Business Bay', 'DIFC'],
    incomeRange: 'AED 15-30K/month',
    leaseDuration: '1 year',
    marketShare: 38,
    turnover: 'High',
    premium: 'Moderate',
    demographics: {
      age: '25-35',
      nationality: 'European, Asian',
      family: 'Single / Couples',
    },
  },
  {
    type: 'Expat Families',
    avatar: '👨‍👩‍👧‍👦',
    areas: ['Arabian Ranches', 'Dubai Hills', 'JVC', 'MBR City'],
    incomeRange: 'AED 40-80K/month',
    leaseDuration: '2-3 years',
    marketShare: 42,
    turnover: 'Low',
    premium: 'High',
    demographics: {
      age: '35-50',
      nationality: 'Western, Indian',
      family: '2-4 children',
    },
  },
  {
    type: 'Corporate Housing',
    avatar: '🏢',
    areas: ['Business Bay', 'DIFC', 'Downtown', 'Palm Jumeirah'],
    incomeRange: 'Company-paid',
    leaseDuration: '6-12 months',
    marketShare: 20,
    turnover: 'Very High',
    premium: 'Premium',
    demographics: {
      age: '30-55',
      nationality: 'Global executives',
      family: 'Variable',
    },
  },
]

export const demandDrivers = [
  {
    factor: 'Metro accessibility',
    impact: '+18% tenant demand',
    icon: '🚇',
  },
  {
    factor: 'School proximity',
    impact: '+24% family tenants',
    icon: '🏫',
  },
  {
    factor: 'Beach/waterfront',
    impact: '+31% premium achievable',
    icon: '🏖️',
  },
  {
    factor: 'Mall within 2km',
    impact: '+12% tenant retention',
    icon: '🛍️',
  },
]

export const areaTenantMix = [
  {
    area: 'Marina',
    professionals: 68,
    families: 22,
    corporate: 10,
    avgLease: '11 months',
    turnover: 'High',
  },
  {
    area: 'Arabian Ranches',
    professionals: 8,
    families: 87,
    corporate: 5,
    avgLease: '26 months',
    turnover: 'Low',
  },
  {
    area: 'Business Bay',
    professionals: 42,
    families: 18,
    corporate: 40,
    avgLease: '9 months',
    turnover: 'Very High',
  },
  {
    area: 'Dubai Hills',
    professionals: 25,
    families: 65,
    corporate: 10,
    avgLease: '20 months',
    turnover: 'Moderate',
  },
]
