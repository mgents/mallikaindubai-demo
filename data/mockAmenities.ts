// Amenity locations for Dubai map visualization
export const amenityLocations = [
  // Schools
  { type: 'school', name: 'GEMS Wellington', lat: 25.1089, lng: 55.2708, community: 'Dubai Hills' },
  { type: 'school', name: 'JESS Arabian Ranches', lat: 25.0478, lng: 55.2619, community: 'Arabian Ranches' },
  { type: 'school', name: 'Dubai British School', lat: 25.0625, lng: 55.1398, community: 'Emirates Hills' },
  { type: 'school', name: 'GEMS Modern Academy', lat: 25.2217, lng: 55.3086, community: 'Nad Al Sheba' },

  // Hospitals
  { type: 'hospital', name: 'Mediclinic Dubai Hills', lat: 25.1045, lng: 55.2645, community: 'Dubai Hills' },
  { type: 'hospital', name: 'American Hospital', lat: 25.1472, lng: 55.2286, community: 'Oud Metha' },
  { type: 'hospital', name: 'Saudi German Hospital', lat: 25.2264, lng: 55.2784, community: 'Barsha' },

  // Malls
  { type: 'mall', name: 'Dubai Hills Mall', lat: 25.1098, lng: 55.2534, community: 'Dubai Hills' },
  { type: 'mall', name: 'Dubai Mall', lat: 25.1975, lng: 55.2797, community: 'Downtown' },
  { type: 'mall', name: 'Mall of the Emirates', lat: 25.1184, lng: 55.2003, community: 'Al Barsha' },
  { type: 'mall', name: 'City Walk', lat: 25.2109, lng: 55.2644, community: 'Jumeirah' },

  // Beaches
  { type: 'beach', name: 'JBR Beach', lat: 25.0784, lng: 55.1330, community: 'JBR' },
  { type: 'beach', name: 'Kite Beach', lat: 25.2000, lng: 55.2400, community: 'Jumeirah' },
  { type: 'beach', name: 'La Mer', lat: 25.2286, lng: 55.2596, community: 'Jumeirah 1' },

  // Metro Stations
  { type: 'metro', name: 'Business Bay Metro', lat: 25.1868, lng: 55.2650, community: 'Business Bay' },
  { type: 'metro', name: 'Dubai Mall Metro', lat: 25.1975, lng: 55.2794, community: 'Downtown' },
  { type: 'metro', name: 'DMCC Metro', lat: 25.0698, lng: 55.1391, community: 'JLT' },
]

export const communityCoordinates = {
  'Dubai Hills Estate': { lat: 25.1089, lng: 55.2534 },
  'JBR': { lat: 25.0784, lng: 55.1330 },
  'Arabian Ranches': { lat: 25.0478, lng: 55.2619 },
  'Business Bay': { lat: 25.1868, lng: 55.2650 },
  'Palm Jumeirah': { lat: 25.1124, lng: 55.1390 },
  'Downtown': { lat: 25.1975, lng: 55.2744 },
  'Marina': { lat: 25.0805, lng: 55.1390 },
}

export const amenityColors = {
  school: '#3b82f6',
  hospital: '#ef4444',
  mall: '#8b5cf6',
  beach: '#06b6d4',
  metro: '#f59e0b',
}
