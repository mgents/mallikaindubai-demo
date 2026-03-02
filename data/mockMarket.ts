export interface MonthlyData {
  month: string
  transactions: number
  rentIndex: number
  offPlanPct: number
}

export interface AreaTimeSeries {
  areaId: string
  data: MonthlyData[]
}

const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb']

export const marketData: Record<string, MonthlyData[]> = {
  downtown: months.map((month, i) => ({
    month,
    transactions: 220 + Math.round(i * 18 + Math.sin(i) * 30),
    rentIndex: 125 + Math.round(i * 1.5),
    offPlanPct: 48 + Math.round(i * 1.2),
  })),
  marina: months.map((month, i) => ({
    month,
    transactions: 190 + Math.round(i * 14 + Math.cos(i) * 20),
    rentIndex: 128 + Math.round(i * 0.9),
    offPlanPct: 35 + Math.round(i * 0.8),
  })),
  jbr: months.map((month, i) => ({
    month,
    transactions: 80 + Math.round(i * 6 + Math.sin(i + 1) * 15),
    rentIndex: 140 + Math.round(i * 1.3),
    offPlanPct: 22 + Math.round(i * 0.5),
  })),
  'business-bay': months.map((month, i) => ({
    month,
    transactions: 150 + Math.round(i * 20 + Math.sin(i) * 25),
    rentIndex: 100 + Math.round(i * 1.6),
    offPlanPct: 55 + Math.round(i * 1.4),
  })),
  jvc: months.map((month, i) => ({
    month,
    transactions: 250 + Math.round(i * 12 + Math.cos(i) * 30),
    rentIndex: 88 + Math.round(i * 0.8),
    offPlanPct: 45 + Math.round(i * 1.1),
  })),
  palm: months.map((month, i) => ({
    month,
    transactions: 50 + Math.round(i * 4 + Math.sin(i) * 10),
    rentIndex: 168 + Math.round(i * 1.5),
    offPlanPct: 28 + Math.round(i * 0.6),
  })),
  creek: months.map((month, i) => ({
    month,
    transactions: 80 + Math.round(i * 22 + Math.sin(i) * 15),
    rentIndex: 92 + Math.round(i * 1.8),
    offPlanPct: 65 + Math.round(i * 1.5),
  })),
  mbr: months.map((month, i) => ({
    month,
    transactions: 70 + Math.round(i * 16 + Math.cos(i) * 20),
    rentIndex: 90 + Math.round(i * 1.4),
    offPlanPct: 62 + Math.round(i * 1.4),
  })),
  hills: months.map((month, i) => ({
    month,
    transactions: 140 + Math.round(i * 15 + Math.sin(i + 2) * 18),
    rentIndex: 112 + Math.round(i * 1.2),
    offPlanPct: 42 + Math.round(i * 1.1),
  })),
  difc: months.map((month, i) => ({
    month,
    transactions: 35 + Math.round(i * 3 + Math.cos(i) * 8),
    rentIndex: 188 + Math.round(i * 0.9),
    offPlanPct: 10 + Math.round(i * 0.4),
  })),
}
