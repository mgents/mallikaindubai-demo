// Macro economic data for Macro Intelligence Layer
export const oilPriceData = [
  { month: 'Jan', price: 78 },
  { month: 'Feb', price: 82 },
  { month: 'Mar', price: 85 },
  { month: 'Apr', price: 79 },
  { month: 'May', price: 83 },
  { month: 'Jun', price: 88 },
  { month: 'Jul', price: 91 },
  { month: 'Aug', price: 87 },
  { month: 'Sep', price: 89 },
  { month: 'Oct', price: 92 },
  { month: 'Nov', price: 90 },
  { month: 'Dec', price: 94 },
]

export const oilCorrelation = 87 // % correlation to Dubai luxury segment

export const fxRate = {
  pair: 'USD/AED',
  rate: 3.6725,
  stability: 'AAA',
  change: '+0.0001',
}

export const capitalFlows = [
  { from: 'Singapore', volume: 2400, color: '#0EA5E9' },
  { from: 'United Kingdom', volume: 1800, color: '#D4A853' },
  { from: 'China', volume: 1500, color: '#38BDF8' },
  { from: 'India', volume: 2100, color: '#E8C97A' },
]

export const economicIndicators = [
  { name: 'GDP Growth', value: '+5.1%', trend: [3.8, 4.2, 4.6, 4.9, 5.1] },
  { name: 'Tourism', value: '+12.3%', trend: [8.2, 9.1, 10.5, 11.4, 12.3] },
  { name: 'Expo Impact', value: '+8.7%', trend: [2.1, 4.3, 6.8, 7.9, 8.7] },
  { name: 'Real Estate Txns', value: '+23%', trend: [15, 17, 19, 21, 23] },
]
