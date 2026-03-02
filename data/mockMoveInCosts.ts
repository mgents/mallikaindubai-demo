// Move-in cost breakdown for Personal Home Buyers
export const moveInCostCategories = [
  {
    category: 'Furniture Package',
    min: 35000,
    max: 120000,
    variable: true,
    description: 'Choose from Essential, Comfort, or Luxury packages',
  },
  {
    category: 'DEWA Deposit',
    amount: 2000,
    fixed: true,
    description: 'Dubai Electricity & Water Authority connection',
  },
  {
    category: 'Internet/TV Setup',
    amount: 500,
    recurring: 'monthly',
    description: 'du or Etisalat installation + monthly fee',
  },
  {
    category: 'Chiller Deposit',
    amount: 5000,
    conditional: true,
    description: 'If applicable (district cooling)',
  },
  {
    category: 'Parking Registration',
    amount: 300,
    fixed: true,
    description: 'Annual parking permit',
  },
  {
    category: 'Community Access Cards',
    amount: 200,
    perPerson: true,
    description: 'Access cards for residents',
  },
]

export const furniturePackages = [
  {
    name: 'Essential',
    price: 35000,
    image: 'minimalist',
    includes: [
      'Bed + mattress',
      'Sofa + coffee table',
      'Dining table + 4 chairs',
      'Basic kitchen appliances',
      'Wardrobes',
    ],
    style: 'Minimalist, functional basics',
    vendors: ['IKEA', 'Home Centre'],
  },
  {
    name: 'Comfort',
    price: 60000,
    image: 'cozy',
    includes: [
      'All Essential items +',
      'Quality appliances (Samsung, LG)',
      'Decorative items',
      'Curtains + blinds',
      'TV + entertainment unit',
      'Outdoor furniture (if applicable)',
    ],
    style: 'Comfortable, homey feel',
    vendors: ['Home Centre', '2XL', 'Pan Emirates'],
  },
  {
    name: 'Luxury',
    price: 120000,
    image: 'premium',
    includes: [
      'Designer furniture',
      'Premium appliances (Miele, Bosch)',
      'Smart home integration',
      'Art + decor consultation',
      'Custom built-ins',
      'High-end finishes',
    ],
    style: 'Designer, bespoke interiors',
    vendors: ['The One', 'Milano', 'Bespoke interior designer'],
  },
]

export const moveInTimeline = [
  {
    day: 1,
    task: 'DEWA activation',
    detail: 'Book online 48hrs before move',
    link: 'https://www.dewa.gov.ae',
  },
  {
    day: 2,
    task: 'Internet installation',
    detail: 'du vs Etisalat comparison',
    options: [
      { provider: 'du', speed: '250 Mbps', price: 'AED 389/month' },
      { provider: 'Etisalat', speed: '250 Mbps', price: 'AED 399/month' },
    ],
  },
  {
    day: 3,
    task: 'Furniture delivery',
    detail: 'Popular vendors: IKEA, Home Centre, 2XL',
    tip: 'Schedule delivery 2-3 days post-move for flexibility',
  },
  {
    day: 5,
    task: 'Chiller account setup',
    detail: 'Register with Empower/Tabreed (if applicable)',
    conditional: true,
  },
  {
    day: 7,
    task: 'Community registration',
    detail: 'Obtain access cards, parking permits',
    location: 'Building management office',
  },
]

export const totalMoveInCost = {
  minimum: 47500, // Essential package + all fixed costs
  typical: 71000, // Comfort package + all costs
  maximum: 135500, // Luxury package + all costs
}

export const hiddenCosts = [
  {
    item: 'Shipping belongings',
    cost: '5,000-15,000',
    description: 'If relocating from abroad',
  },
  {
    item: 'School enrollment',
    cost: '15,000-30,000',
    description: 'Registration + first term fees',
  },
  {
    item: 'Car purchase',
    cost: '60,000-150,000',
    description: 'If buying a vehicle in Dubai',
  },
  {
    item: 'Temporary accommodation',
    cost: '8,000-15,000',
    description: 'Hotel/Airbnb while property is being furnished',
  },
]
