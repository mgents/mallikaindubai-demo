// Rental income and operating cost data for Cashflow Seekers
export const rentalIncomeDefaults = {
  monthlyRent: 12000, // AED
  occupancyRate: 92, // %
  propertyValue: 1500000, // AED
  sqft: 1000,
}

export const operatingCosts = {
  serviceCharges: {
    perSqft: 15, // AED per sqft annually
    annual: 15000,
    trend: 3.2, // % annual increase
  },
  propertyManagement: {
    percentage: 6, // % of rent
    annual: 8640,
    optional: true,
  },
  maintenanceReserve: {
    percentage: 2, // % of property value
    annual: 30000,
  },
  dewaDeposits: {
    oneTime: 2000,
    monthly: 0,
  },
  chillerFees: {
    annual: 6000,
    seasonal: true,
  },
  insurance: {
    annual: 1500,
  },
}

export const cashOnCashComparisons = [
  { market: 'Dubai Average', return: 5.8 },
  { market: 'Singapore', return: 2.1 },
  { market: 'London', return: 3.4 },
  { market: 'Your Return', return: 7.2, highlight: true },
]

export const areaServiceCharges = [
  { area: 'Downtown', perSqft: 18, quality: 'Premium' },
  { area: 'Marina', perSqft: 16, quality: 'High' },
  { area: 'JBR', perSqft: 17, quality: 'High' },
  { area: 'Business Bay', perSqft: 14, quality: 'Standard' },
  { area: 'JVC', perSqft: 12, quality: 'Moderate' },
  { area: 'Dubai Hills', perSqft: 15, quality: 'High' },
  { area: 'Creek Harbour', perSqft: 13, quality: 'Standard' },
  { area: 'Palm Jumeirah', perSqft: 22, quality: 'Luxury' },
]
