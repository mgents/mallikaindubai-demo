export interface AreaData {
  id: string
  name: string
  transactions90d: number
  qoqChange: number
  rentIndex: number
  rentYoY: number
  offPlanRatio: number
  momentumScore: number
  gridSize: 'large' | 'medium' | 'small'
}

export const areas: AreaData[] = [
  {
    id: 'downtown',
    name: 'Downtown Dubai',
    transactions90d: 847,
    qoqChange: 23,
    rentIndex: 142,
    rentYoY: 8.2,
    offPlanRatio: 62,
    momentumScore: 92,
    gridSize: 'large',
  },
  {
    id: 'marina',
    name: 'Dubai Marina',
    transactions90d: 723,
    qoqChange: 18,
    rentIndex: 138,
    rentYoY: 6.5,
    offPlanRatio: 45,
    momentumScore: 85,
    gridSize: 'large',
  },
  {
    id: 'jbr',
    name: 'JBR',
    transactions90d: 312,
    qoqChange: 12,
    rentIndex: 155,
    rentYoY: 9.1,
    offPlanRatio: 28,
    momentumScore: 78,
    gridSize: 'medium',
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    transactions90d: 634,
    qoqChange: 31,
    rentIndex: 118,
    rentYoY: 11.3,
    offPlanRatio: 71,
    momentumScore: 88,
    gridSize: 'medium',
  },
  {
    id: 'jvc',
    name: 'JVC',
    transactions90d: 892,
    qoqChange: 15,
    rentIndex: 98,
    rentYoY: 4.2,
    offPlanRatio: 58,
    momentumScore: 65,
    gridSize: 'medium',
  },
  {
    id: 'palm',
    name: 'Palm Jumeirah',
    transactions90d: 198,
    qoqChange: 8,
    rentIndex: 185,
    rentYoY: 12.8,
    offPlanRatio: 35,
    momentumScore: 72,
    gridSize: 'medium',
  },
  {
    id: 'creek',
    name: 'Creek Harbour',
    transactions90d: 456,
    qoqChange: 42,
    rentIndex: 112,
    rentYoY: 15.6,
    offPlanRatio: 82,
    momentumScore: 95,
    gridSize: 'medium',
  },
  {
    id: 'mbr',
    name: 'MBR City',
    transactions90d: 378,
    qoqChange: 35,
    rentIndex: 105,
    rentYoY: 13.2,
    offPlanRatio: 78,
    momentumScore: 90,
    gridSize: 'small',
  },
  {
    id: 'hills',
    name: 'Dubai Hills',
    transactions90d: 567,
    qoqChange: 22,
    rentIndex: 125,
    rentYoY: 7.8,
    offPlanRatio: 55,
    momentumScore: 82,
    gridSize: 'small',
  },
  {
    id: 'difc',
    name: 'DIFC',
    transactions90d: 145,
    qoqChange: 5,
    rentIndex: 198,
    rentYoY: 3.4,
    offPlanRatio: 15,
    momentumScore: 58,
    gridSize: 'small',
  },
]

export const aiInsights = [
  'Downtown Dubai showing 23% transaction surge — early cycle momentum detected',
  'JVC rental yields compressing — consider rebalancing to Creek Harbour',
  'Palm Jumeirah: off-plan ratio rising to 35% — developer confidence signal',
  'Creek Harbour momentum score at 95 — highest in Dubai, 42% QoQ growth',
  'MBR City emerging as next growth corridor — 35% QoQ transaction increase',
]
