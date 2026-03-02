// Monthly vacancy rate data by area
export const vacancyRates = [
  {
    month: 'Jan',
    Downtown: 2.1,
    Marina: 2.8,
    JBR: 3.2,
    BusinessBay: 3.5,
    JVC: 4.8,
    DubaiHills: 2.4,
  },
  {
    month: 'Feb',
    Downtown: 1.9,
    Marina: 2.5,
    JBR: 2.9,
    BusinessBay: 3.2,
    JVC: 4.5,
    DubaiHills: 2.2,
  },
  {
    month: 'Mar',
    Downtown: 2.2,
    Marina: 2.7,
    JBR: 3.0,
    BusinessBay: 3.4,
    JVC: 4.6,
    DubaiHills: 2.5,
  },
  {
    month: 'Apr',
    Downtown: 2.8,
    Marina: 3.4,
    JBR: 3.8,
    BusinessBay: 4.2,
    JVC: 5.4,
    DubaiHills: 3.1,
  },
  {
    month: 'May',
    Downtown: 3.5,
    Marina: 4.2,
    JBR: 4.6,
    BusinessBay: 5.1,
    JVC: 6.2,
    DubaiHills: 3.8,
  },
  {
    month: 'Jun',
    Downtown: 4.1,
    Marina: 5.0,
    JBR: 5.4,
    BusinessBay: 5.9,
    JVC: 7.1,
    DubaiHills: 4.5,
  },
  {
    month: 'Jul',
    Downtown: 4.8,
    Marina: 5.8,
    JBR: 6.2,
    BusinessBay: 6.7,
    JVC: 8.2,
    DubaiHills: 5.3,
  },
  {
    month: 'Aug',
    Downtown: 5.2,
    Marina: 6.3,
    JBR: 6.7,
    BusinessBay: 7.2,
    JVC: 8.8,
    DubaiHills: 5.8,
  },
  {
    month: 'Sep',
    Downtown: 3.8,
    Marina: 4.6,
    JBR: 5.0,
    BusinessBay: 5.5,
    JVC: 6.8,
    DubaiHills: 4.2,
  },
  {
    month: 'Oct',
    Downtown: 2.5,
    Marina: 3.1,
    JBR: 3.5,
    BusinessBay: 3.9,
    JVC: 5.2,
    DubaiHills: 2.9,
  },
  {
    month: 'Nov',
    Downtown: 1.8,
    Marina: 2.4,
    JBR: 2.7,
    BusinessBay: 3.0,
    JVC: 4.3,
    DubaiHills: 2.1,
  },
  {
    month: 'Dec',
    Downtown: 1.6,
    Marina: 2.1,
    JBR: 2.4,
    BusinessBay: 2.7,
    JVC: 3.9,
    DubaiHills: 1.9,
  },
]

export const vacancyThresholds = {
  low: 3.0, // < 3% = green
  moderate: 6.0, // 3-6% = amber
  // > 6% = red
}

export const seasonalInsights = [
  {
    period: 'Summer (Jun-Aug)',
    impact: 'Summer exodus drives +40% vacancy spike',
    recommendation: 'Price competitively or offer flexible terms',
  },
  {
    period: 'Winter (Nov-Mar)',
    impact: 'Peak tourist season = lowest vacancy rates',
    recommendation: 'Optimal time to maximize rental rates',
  },
  {
    period: 'Back-to-School (Sep)',
    impact: 'Families return, vacancy normalizes quickly',
    recommendation: 'Target family tenants for 2-3 year leases',
  },
]
