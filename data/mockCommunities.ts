// Dubai communities with lifestyle attributes for Personal Home Buyers
export const communities = [
  {
    name: 'Dubai Hills Estate',
    image: '/images/dubai-hills.jpg',
    price: 'AED 2.5-6M',
    type: 'Mixed (Villas & Apartments)',
    lifestyle: ['School-Age Kids', 'Golf Course', 'Pet-Friendly'],
    schools: [
      { name: 'GEMS Wellington', distance: 2.4, rating: 'Outstanding' },
      { name: 'Dubai Heights Academy', distance: 1.8, rating: 'Very Good' },
      { name: 'Nord Anglia', distance: 3.1, rating: 'Good' },
    ],
    amenities: {
      mall: 'Dubai Hills Mall (800m)',
      hospital: 'Mediclinic (2.1km)',
      parks: '4 community parks',
      golf: 'Dubai Hills Championship Golf Course',
    },
    commute: {
      downtown: '15 min',
      airport: '25 min',
      beach: '20 min',
    },
    vibe: 'Family-oriented, active lifestyle, modern community',
    match: 92,
  },
  {
    name: 'Jumeirah Beach Residence (JBR)',
    image: '/images/jbr.jpg',
    price: 'AED 1.8-8M',
    type: 'Apartments',
    lifestyle: ['Beachfront', 'Metro Access'],
    schools: [
      { name: 'Dubai British School', distance: 8.5, rating: 'Good' },
    ],
    amenities: {
      beach: 'The Walk (beachfront promenade)',
      restaurants: '200+ dining options',
      entertainment: 'Marina Walk, outdoor cinema',
      metro: 'DMCC Metro (1.2km)',
    },
    commute: {
      downtown: '25 min',
      airport: '35 min',
      beach: '0 min (beachfront)',
    },
    vibe: 'Active nightlife, beach lifestyle, NOT ideal for young kids',
    match: 65,
  },
  {
    name: 'Arabian Ranches',
    image: '/images/arabian-ranches.jpg',
    price: 'AED 3-7M',
    type: 'Villas',
    lifestyle: ['School-Age Kids', 'Quiet Retreat', 'Pet-Friendly', 'Golf Course'],
    schools: [
      { name: 'JESS Arabian Ranches', distance: 0.5, rating: 'Outstanding' },
      { name: 'Ranches Primary', distance: 1.2, rating: 'Very Good' },
    ],
    amenities: {
      golf: 'Arabian Ranches Golf Club',
      equestrian: 'Dubai Polo & Equestrian Club',
      retail: 'Ranches Souk (community center)',
      parks: 'Multiple community parks',
    },
    commute: {
      downtown: '30 min',
      airport: '40 min',
      beach: '25 min',
    },
    vibe: 'Very quiet, villa community, desert landscape, family-centric',
    match: 88,
  },
  {
    name: 'Business Bay',
    image: '/images/business-bay.jpg',
    price: 'AED 1.2-4M',
    type: 'Apartments',
    lifestyle: ['Metro Access'],
    schools: [
      { name: 'GEMS Modern Academy', distance: 5.2, rating: 'Good' },
    ],
    amenities: {
      metro: 'Business Bay Metro (500m)',
      dining: '150+ restaurants',
      canal: 'Dubai Canal waterfront',
      downtown: 'Walking distance to Downtown',
    },
    commute: {
      downtown: '5 min',
      airport: '15 min',
      beach: '18 min',
    },
    vibe: 'Urban, business district, young professionals, central location',
    match: 58,
  },
  {
    name: 'Palm Jumeirah',
    image: '/images/palm-jumeirah.jpg',
    price: 'AED 3-50M',
    type: 'Villas & Apartments',
    lifestyle: ['Beachfront', 'Quiet Retreat'],
    schools: [
      { name: 'Al Ittihad Private School', distance: 6.8, rating: 'Very Good' },
    ],
    amenities: {
      beach: 'Private beach access',
      hotels: '5-star hotel amenities',
      dining: 'Nakheel Mall, Golden Mile',
      exclusive: 'Atlantis, Nakheel Mall',
    },
    commute: {
      downtown: '25 min',
      airport: '35 min',
      beach: '0 min (on island)',
    },
    vibe: 'Exclusive, luxury, iconic location, resort-style living',
    match: 71,
  },
]

export const lifestyleFilters = [
  'School-Age Kids',
  'Beachfront',
  'Golf Course',
  'Metro Access',
  'Pet-Friendly',
  'Quiet Retreat',
]

export const amenityIcons = {
  schools: '📚',
  hospitals: '🏥',
  malls: '🛍️',
  beaches: '🏖️',
  metro: '🚇',
  golf: '⛳',
  parks: '🌳',
}
