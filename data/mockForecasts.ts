// 36-month rental yield predictions
export const yieldForecasts = [
  {
    area: 'Downtown',
    color: '#D4A853',
    confidence: 'high',
    data: [
      { month: 0, yield: 5.2, lower: 4.8, upper: 5.6 },
      { month: 6, yield: 5.4, lower: 4.9, upper: 5.9 },
      { month: 12, yield: 5.7, lower: 5.1, upper: 6.3 },
      { month: 18, yield: 6.0, lower: 5.3, upper: 6.7 },
      { month: 24, yield: 6.3, lower: 5.4, upper: 7.2 },
      { month: 30, yield: 6.5, lower: 5.5, upper: 7.5 },
      { month: 36, yield: 6.8, lower: 5.6, upper: 8.0 },
    ],
  },
  {
    area: 'Marina',
    color: '#0EA5E9',
    confidence: 'high',
    data: [
      { month: 0, yield: 6.1, lower: 5.7, upper: 6.5 },
      { month: 6, yield: 6.3, lower: 5.8, upper: 6.8 },
      { month: 12, yield: 6.5, lower: 5.9, upper: 7.1 },
      { month: 18, yield: 6.8, lower: 6.0, upper: 7.6 },
      { month: 24, yield: 7.0, lower: 6.1, upper: 7.9 },
      { month: 30, yield: 7.2, lower: 6.2, upper: 8.2 },
      { month: 36, yield: 7.4, lower: 6.3, upper: 8.5 },
    ],
  },
  {
    area: 'JVC',
    color: '#38BDF8',
    confidence: 'moderate',
    data: [
      { month: 0, yield: 7.8, lower: 7.0, upper: 8.6 },
      { month: 6, yield: 8.0, lower: 7.1, upper: 8.9 },
      { month: 12, yield: 8.2, lower: 7.2, upper: 9.2 },
      { month: 18, yield: 8.3, lower: 7.2, upper: 9.4 },
      { month: 24, yield: 8.4, lower: 7.2, upper: 9.6 },
      { month: 30, yield: 8.5, lower: 7.2, upper: 9.8 },
      { month: 36, yield: 8.6, lower: 7.2, upper: 10.0 },
    ],
  },
  {
    area: 'Business Bay',
    color: '#E8C97A',
    confidence: 'high',
    data: [
      { month: 0, yield: 6.8, lower: 6.3, upper: 7.3 },
      { month: 6, yield: 7.1, lower: 6.5, upper: 7.7 },
      { month: 12, yield: 7.4, lower: 6.7, upper: 8.1 },
      { month: 18, yield: 7.7, lower: 6.9, upper: 8.5 },
      { month: 24, yield: 8.0, lower: 7.1, upper: 8.9 },
      { month: 30, yield: 8.2, lower: 7.2, upper: 9.2 },
      { month: 36, yield: 8.5, lower: 7.3, upper: 9.7 },
    ],
  },
  {
    area: 'Creek Harbour',
    color: '#67E8F9',
    confidence: 'moderate',
    data: [
      { month: 0, yield: 5.9, lower: 5.2, upper: 6.6 },
      { month: 6, yield: 6.2, lower: 5.4, upper: 7.0 },
      { month: 12, yield: 6.6, lower: 5.6, upper: 7.6 },
      { month: 18, yield: 7.0, lower: 5.8, upper: 8.2 },
      { month: 24, yield: 7.4, lower: 6.0, upper: 8.8 },
      { month: 30, yield: 7.8, lower: 6.2, upper: 9.4 },
      { month: 36, yield: 8.2, lower: 6.4, upper: 10.0 },
    ],
  },
]

export const scenarios = ['Conservative', 'Base', 'Aggressive']

export const modelInfo = {
  trainingYears: 15,
  variables: 42,
  dataSource: 'Dubai Land Department (DLD)',
}
