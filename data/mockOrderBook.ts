// Order book data for Market Depth & Liquidity Scanner
export const orderBookData = {
  buyers: [
    { pricePerSqft: 1800, volume: 45 },
    { pricePerSqft: 1850, volume: 38 },
    { pricePerSqft: 1900, volume: 32 },
    { pricePerSqft: 1950, volume: 25 },
    { pricePerSqft: 2000, volume: 18 },
  ],
  sellers: [
    { pricePerSqft: 2050, volume: 22 },
    { pricePerSqft: 2100, volume: 28 },
    { pricePerSqft: 2150, volume: 35 },
    { pricePerSqft: 2200, volume: 42 },
    { pricePerSqft: 2250, volume: 50 },
  ],
}

export const liquidityMetrics = {
  bidAskSpread: '2.5%',
  daysToLiquidity: 23,
  activeBuyers: 847,
  inventoryTurnover: '4.2 months',
}

export const liquidityTreemap = [
  { area: 'Downtown', size: 12500, liquidity: 0.85, color: '#10b981' },
  { area: 'Marina', size: 9800, liquidity: 0.92, color: '#059669' },
  { area: 'Business Bay', size: 8200, liquidity: 0.78, color: '#34d399' },
  { area: 'JBR', size: 6100, liquidity: 0.88, color: '#10b981' },
  { area: 'Palm Jumeirah', size: 5400, liquidity: 0.62, color: '#fbbf24' },
  { area: 'JVC', size: 4700, liquidity: 0.71, color: '#34d399' },
  { area: 'Dubai Hills', size: 3900, liquidity: 0.68, color: '#fbbf24' },
  { area: 'Creek Harbour', size: 2800, liquidity: 0.55, color: '#f59e0b' },
]
