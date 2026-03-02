// Correlation coefficients between Dubai areas (for Portfolio Intelligence Dashboard)
export const areaCorrelations = {
  areas: ['Downtown', 'Marina', 'JBR', 'Business Bay'],
  matrix: [
    [1.00, 0.82, 0.75, 0.88], // Downtown correlations
    [0.82, 1.00, 0.91, 0.79], // Marina correlations
    [0.75, 0.91, 1.00, 0.71], // JBR correlations
    [0.88, 0.79, 0.71, 1.00], // Business Bay correlations
  ],
}

export const portfolioAllocation = [
  { area: 'Downtown', percentage: 35, color: '#0EA5E9' },
  { area: 'Marina', percentage: 25, color: '#38BDF8' },
  { area: 'JBR', percentage: 20, color: '#67E8F9' },
  { area: 'Business Bay', percentage: 20, color: '#7DD3FC' },
]

export const diversificationScore = 87

export const propertyPins = [
  { area: 'Downtown', lat: 25.1972, lng: 55.2744, count: 3 },
  { area: 'Marina', lat: 25.0805, lng: 55.1390, count: 2 },
  { area: 'JBR', lat: 25.0784, lng: 55.1330, count: 2 },
  { area: 'Business Bay', lat: 25.1862, lng: 55.2650, count: 2 },
]
