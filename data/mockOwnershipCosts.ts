// 5-year total cost of ownership projection
export const fiveYearCosts = [
  {
    year: 1,
    serviceCharges: 18000,
    maintenance: 5200,
    propertyMgmt: 8640,
    insuranceUtilities: 3500,
    total: 35340,
  },
  {
    year: 2,
    serviceCharges: 18576, // +3.2%
    maintenance: 8900, // higher in year 2
    propertyMgmt: 8640,
    insuranceUtilities: 3650,
    total: 39766,
  },
  {
    year: 3,
    serviceCharges: 19170,
    maintenance: 24000, // AC replacement event
    propertyMgmt: 8640,
    insuranceUtilities: 3800,
    total: 55610,
  },
  {
    year: 4,
    serviceCharges: 19783,
    maintenance: 6100,
    propertyMgmt: 8640,
    insuranceUtilities: 3950,
    total: 38473,
  },
  {
    year: 5,
    serviceCharges: 20416,
    maintenance: 7200,
    propertyMgmt: 8640,
    insuranceUtilities: 4100,
    total: 40356,
  },
]

export const costCategories = [
  {
    category: 'Service Charges',
    amount: 18000,
    perSqft: 15,
    sqft: 1200,
    trend: '+3.2%/yr',
    color: '#ef4444',
    description: 'Building maintenance, common areas, amenities',
  },
  {
    category: 'Chiller Fees',
    amount: 6000,
    seasonal: true,
    color: '#f97316',
    description: 'District cooling charges (peaks in summer)',
    monthlyChart: [300, 350, 450, 600, 800, 900, 950, 900, 700, 500, 400, 350],
  },
  {
    category: 'Maintenance Fund',
    amount: 30000,
    percentage: 2,
    propertyValue: 1500000,
    color: '#f59e0b',
    description: '2% of property value annually',
    events: [
      { year: 3, event: 'AC replacement', cost: 15000 },
      { year: 5, event: 'Painting refresh', cost: 8000 },
    ],
  },
  {
    category: 'Property Management',
    amount: 8640,
    percentage: 6,
    monthlyRent: 12000,
    optional: true,
    selfManageSavings: 8640,
    color: '#eab308',
    description: '6% of annual rent or self-manage',
  },
]

export const breakEvenCalculation = {
  purchasePrice: 1500000,
  downPayment: 375000, // 25%
  monthlyMortgage: 5200,
  monthlyRent: 12000,
  monthlyNetIncome: 3500, // after all costs
  breakEvenMonth: 50.4, // months
  breakEvenYear: 4.2,
}
