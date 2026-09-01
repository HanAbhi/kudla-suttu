/**
 * Kudla Suttu - Open Local Utility Map Engine
 * Powered by OpenStreetMap & Leaflet.js
 */

// Core Configuration
const MANGALORE_CONFIG = {
  center: [12.9141, 74.8560], // Hampankatta / Mangalore City Center
  defaultZoom: 14,
  minZoom: 11,
  maxZoom: 19,
  bbox: {
    south: 12.8000,
    west: 74.8000,
    north: 13.0200,
    east: 74.9600
  },
  overpassEndpoints: [
    'https://overpass-api.de/api/interpreter',
    'https://lz4.overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.private.coffee/api/interpreter'
  ]
};

// 8 Core Everyday Utility Categories
const CATEGORIES = {
  hardware: {
    id: 'hardware',
    name: 'Hardware',
    icon: '🔧',
    color: '#ba5122'
  },
  repair: {
    id: 'repair',
    name: 'Repair',
    icon: '⚙️',
    color: '#226bb0'
  },
  stationery: {
    id: 'stationery',
    name: 'Xerox & Print',
    icon: '📚',
    color: '#1e7049'
  },
  pharmacy: {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: '💊',
    color: '#be2626'
  },
  toilet: {
    id: 'toilet',
    name: 'Toilets',
    icon: '🚻',
    color: '#007d96'
  },
  water: {
    id: 'water',
    name: 'Drinking Water',
    icon: '💧',
    color: '#0280c2'
  },
  bus: {
    id: 'bus',
    name: 'Bus Stops',
    icon: '🚌',
    color: '#693eb8'
  },
  food: {
    id: 'food',
    name: 'Food',
    icon: '☕',
    color: '#cc5e1b'
  }
};

// Curated Seed Data for guaranteed availability & fast startup
const MANGALORE_SEED_DATA = [
  // Hardware
  {
    id: 'seed-h1',
    osmType: 'node',
    osmId: 30101,
    name: 'Pai & Sons Hardware & Electricals',
    nameKn: 'ಪೈ & ಸನ್ಸ್ ಹಾರ್ಡ್‌ವೇರ್',
    category: 'hardware',
    subType: 'hardware',
    lat: 12.8698,
    lon: 74.8423,
    street: 'K.S. Rao Road, Hampankatta',
    phone: '+91 824 2440123',
    openingHours: 'Mo-Sa 09:00-20:00',
    tags: { 'shop': 'hardware' }
  },
  {
    id: 'seed-h2',
    osmType: 'node',
    osmId: 30102,
    name: 'Coastal Asian Paints & Building Supplies',
    nameKn: 'ಕೋಸ್ಟಲ್ ಪೇಂಟ್ಸ್ & ಬಿಲ್ಡಿಂಗ್ ಮೆಟೀರಿಯಲ್ಸ್',
    category: 'hardware',
    subType: 'paint',
    lat: 12.8752,
    lon: 74.8485,
    street: 'Kadri Temple Road, Kadri',
    phone: '+91 824 2218900',
    openingHours: 'Mo-Sa 08:30-19:30',
    tags: { 'shop': 'paint' }
  },
  {
    id: 'seed-h3',
    osmType: 'node',
    osmId: 30103,
    name: 'Mangalore Electricals & Plumbing Mart',
    nameKn: 'ಮಂಗಳೂರು ಎಲೆಕ್ಟ್ರಿಕಲ್ಸ್ & ಪ್ಲಂಬಿಂಗ್',
    category: 'hardware',
    subType: 'electrical',
    lat: 12.8621,
    lon: 74.8584,
    street: 'Pumpwell Circle, Kankanady',
    phone: '+91 824 2434555',
    openingHours: 'Mo-Sa 09:00-20:30',
    tags: { 'shop': 'electrical' }
  },
  {
    id: 'seed-h4',
    osmType: 'node',
    osmId: 30104,
    name: 'Surathkal Hardware & Sanitary Depot',
    nameKn: 'ಸುರತ್ಕಲ್ ಹಾರ್ಡ್‌ವೇರ್ ಡಿಪೋ',
    category: 'hardware',
    subType: 'hardware',
    lat: 12.9810,
    lon: 74.7985,
    street: 'NH 66 Main Road, Surathkal',
    phone: '+91 824 2475510',
    openingHours: 'Mo-Sa 09:00-20:00',
    tags: { 'shop': 'hardware' }
  },

  // Repair
  {
    id: 'seed-r1',
    osmType: 'node',
    osmId: 30201,
    name: 'Modern Mobile & Laptop Repair Hub',
    nameKn: 'ಮಾಡರ್ನ್ ಮೊಬೈಲ್ & ಲ್ಯಾಪ್‌ಟಾಪ್ ರಿಪೇರ್',
    category: 'repair',
    subType: 'electronics_repair',
    lat: 12.8712,
    lon: 74.8415,
    street: 'Saibeen Complex, Lalbagh',
    phone: '+91 98450 12345',
    openingHours: 'Mo-Sa 10:00-21:00',
    tags: { 'shop': 'electronics_repair' }
  },
  {
    id: 'seed-r2',
    osmType: 'node',
    osmId: 30202,
    name: 'Kankanady Two-Wheeler & Bike Clinic',
    nameKn: 'ಕಂಕನಾಡಿ ಬೈಕ್ ಕ್ಲಿನಿಕ್',
    category: 'repair',
    subType: 'motorcycle_repair',
    lat: 12.8660,
    lon: 74.8620,
    street: 'Fr Muller Road, Kankanady',
    phone: '+91 94481 67890',
    openingHours: 'Mo-Sa 08:30-20:00',
    tags: { 'shop': 'motorcycle_repair' }
  },
  {
    id: 'seed-r3',
    osmType: 'node',
    osmId: 30203,
    name: 'Babu Master Shoe Repair & Cobbler',
    nameKn: 'ಬಾಬು ಮಾಸ್ಟರ್ ಶೂ ರಿಪೇರ್',
    category: 'repair',
    subType: 'shoemaker',
    lat: 12.8735,
    lon: 74.8385,
    street: 'Car Street, Venkataramana Temple Lane',
    openingHours: 'Mo-Sa 09:30-19:00',
    tags: { 'craft': 'shoemaker' }
  },
  {
    id: 'seed-r4',
    osmType: 'node',
    osmId: 30204,
    name: 'City Cycle Works & Puncture Repair',
    nameKn: 'ಸಿಟಿ ಸೈಕಲ್ ವರ್ಕ್ಸ್',
    category: 'repair',
    subType: 'bicycle_repair',
    lat: 12.8675,
    lon: 74.8445,
    street: 'Bhavanthi Street, Bunder',
    openingHours: 'Mo-Sa 08:30-20:00',
    tags: { 'shop': 'bicycle_repair' }
  },

  // Stationery & Xerox
  {
    id: 'seed-s1',
    osmType: 'node',
    osmId: 30301,
    name: 'School Book Co. & Student Stationery',
    nameKn: 'ಸ್ಕೂಲ್ ಬುಕ್ ಕಂಪನಿ',
    category: 'stationery',
    subType: 'books',
    lat: 12.8690,
    lon: 74.8430,
    street: 'Car Street, Hampankatta',
    phone: '+91 824 2495000',
    openingHours: 'Mo-Sa 09:00-20:30',
    tags: { 'shop': 'books' }
  },
  {
    id: 'seed-s2',
    osmType: 'node',
    osmId: 30302,
    name: 'Balmatta Xerox, Spiral Binding & Print Hub',
    nameKn: 'ಬಲ್ಮಠ ಜೆರಾಕ್ಸ್ & ಪ್ರಿಂಟ್ ಸೆಂಟರ್',
    category: 'stationery',
    subType: 'copyshop',
    lat: 12.8682,
    lon: 74.8495,
    street: 'Balmatta Junction',
    phone: '+91 824 2221234',
    openingHours: 'Mo-Sa 08:00-21:30',
    tags: { 'shop': 'copyshop' }
  },

  // Pharmacies
  {
    id: 'seed-p1',
    osmType: 'node',
    osmId: 30401,
    name: 'Apollo Pharmacy 24x7',
    nameKn: 'ಅಪೊಲೊ ಫಾರ್ಮಸಿ',
    category: 'pharmacy',
    subType: 'pharmacy',
    lat: 12.8740,
    lon: 74.8440,
    street: 'MG Road, Kodialbail',
    phone: '+91 824 2445678',
    openingHours: '24/7',
    tags: { 'amenity': 'pharmacy', 'opening_hours': '24/7' }
  },
  {
    id: 'seed-p2',
    osmType: 'node',
    osmId: 30402,
    name: 'KMC Hospital Pharmacy & Outpatient Clinic',
    nameKn: 'ಕೆ.ಎಂ.ಸಿ ಫಾರ್ಮಸಿ',
    category: 'pharmacy',
    subType: 'pharmacy',
    lat: 12.8795,
    lon: 74.8510,
    street: 'Dr B R Ambedkar Circle (Jyothi)',
    phone: '+91 824 2444590',
    openingHours: '24/7',
    tags: { 'amenity': 'pharmacy' }
  },

  // Public Toilets
  {
    id: 'seed-t1',
    osmType: 'node',
    osmId: 30501,
    name: 'Sulabh Public Toilet & Washrooms',
    nameKn: 'ಸುಲಭ್ ಸಾರ್ವಜನಿಕ ಶೌಚಾಲಯ',
    category: 'toilet',
    subType: 'toilets',
    lat: 12.8625,
    lon: 74.8390,
    street: 'Near State Bank Bus Stand, Bunder',
    openingHours: 'Mo-Su 05:00-23:00',
    tags: { 'amenity': 'toilets', 'fee': 'yes' }
  },
  {
    id: 'seed-t2',
    osmType: 'node',
    osmId: 30502,
    name: 'Central Market Public Toilet Block',
    nameKn: 'ಸೆಂಟ್ರಲ್ ಮಾರ್ಕೆಟ್ ಸಾರ್ವಜನಿಕ ಶೌಚಾಲಯ',
    category: 'toilet',
    subType: 'toilets',
    lat: 12.8670,
    lon: 74.8420,
    street: 'Market Road, Hampankatta',
    openingHours: 'Mo-Su 05:30-22:00',
    tags: { 'amenity': 'toilets' }
  },

  // Drinking Water Points
  {
    id: 'seed-w1',
    osmType: 'node',
    osmId: 30601,
    name: 'Kadri Park Free RO Clean Drinking Water Kiosk',
    nameKn: 'ಕದ್ರಿ ಪಾರ್ಕ್ ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು',
    category: 'water',
    subType: 'drinking_water',
    lat: 12.8780,
    lon: 74.8620,
    street: 'Kadri Park Main Entrance',
    openingHours: 'Mo-Su 06:00-20:00',
    tags: { 'amenity': 'drinking_water' }
  },
  {
    id: 'seed-w2',
    osmType: 'node',
    osmId: 30602,
    name: 'Urwa Marigudi Clean Drinking Water Dispenser',
    nameKn: 'ಉರ್ವ ಮಾರಿಗುಡಿ ಕುಡಿಯುವ ನೀರು',
    category: 'water',
    subType: 'drinking_water',
    lat: 12.8870,
    lon: 74.8365,
    street: 'Urwa Market Junction',
    openingHours: '24/7',
    tags: { 'amenity': 'drinking_water' }
  },

  // Bus Stops
  {
    id: 'seed-b1',
    osmType: 'node',
    osmId: 30701,
    name: 'State Bank City Bus Terminus (Service Bus Stand)',
    nameKn: 'ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಸಿಟಿ ಬಸ್ ನಿಲ್ದಾಣ',
    category: 'bus',
    subType: 'bus_station',
    lat: 12.8630,
    lon: 74.8395,
    street: 'State Bank Circle, Hampankatta',
    tags: { 'amenity': 'bus_station' }
  },
  {
    id: 'seed-b2',
    osmType: 'node',
    osmId: 30702,
    name: 'KSRTC Intercity Bus Terminus Bejai',
    nameKn: 'ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ ಬಿಜೈ',
    category: 'bus',
    subType: 'bus_station',
    lat: 12.8885,
    lon: 74.8480,
    street: 'Bejai Main Road, Mangalore',
    phone: '+91 824 2211244',
    openingHours: '24/7',
    tags: { 'amenity': 'bus_station' }
  },
  {
    id: 'seed-b3',
    osmType: 'node',
    osmId: 30703,
    name: 'Jyothi Circle Bus Stop (Dr Ambedkar Circle)',
    nameKn: 'ಜ್ಯೋತಿ ಸರ್ಕಲ್ ಬಸ್ ಸ್ಟಾಪ್',
    category: 'bus',
    subType: 'bus_stop',
    lat: 12.8725,
    lon: 74.8480,
    street: 'Balmatta Road / St Aloysius',
    tags: { 'highway': 'bus_stop' }
  },

  // Food
  {
    id: 'seed-f1',
    osmType: 'node',
    osmId: 30801,
    name: 'Ideal Ice Cream Parlour & Snacks',
    nameKn: 'ಐಡಿಯಲ್ ಐಸ್ ಕ್ರೀಮ್',
    category: 'food',
    subType: 'cafe',
    lat: 12.8685,
    lon: 74.8410,
    street: 'Market Road, Hampankatta',
    phone: '+91 824 2440321',
    openingHours: 'Mo-Su 09:30-22:30',
    tags: { 'amenity': 'cafe' }
  },
  {
    id: 'seed-f2',
    osmType: 'node',
    osmId: 30802,
    name: 'Janatha Deluxe Veg Restaurant',
    nameKn: 'ಜನತಾ ಡೀಲಕ್ಸ್ ಹೋಟೆಲ್',
    category: 'food',
    subType: 'restaurant',
    lat: 12.8720,
    lon: 74.8418,
    street: 'Shanbhag Chamber, KS Rao Road',
    phone: '+91 824 2426860',
    openingHours: 'Mo-Su 06:30-22:00',
    tags: { 'amenity': 'restaurant' }
  }
];

// State
const state = {
  places: [],
  filteredPlaces: [],
  selectedPlaceId: null,
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  userLocation: null,
  isLoadingOSM: false,
  osmSource: 'cached'
};

// Map References
let map = null;
let markersLayerGroup = null;
let userMarker = null;
const markerMap = new Map();

/**
 * Initialize on DOM Loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initPlacesData();
  bindUIEvents();
  renderCategoryCounts();
  applyFiltersAndRender();
});

/**
 * Setup Leaflet Map
 */
function initMap() {
  map = L.map('map', {
    center: MANGALORE_CONFIG.center,
    zoom: MANGALORE_CONFIG.defaultZoom,
    minZoom: MANGALORE_CONFIG.minZoom,
    maxZoom: MANGALORE_CONFIG.maxZoom,
    zoomControl: true
  });

  const osmStandard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  const cartoPositron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    maxZoom: 19
  });

  L.control.layers({
    'OpenStreetMap Standard': osmStandard,
    'Carto Light': cartoPositron
  }, null, { position: 'topright' }).addTo(map);

  markersLayerGroup = L.layerGroup().addTo(map);

  map.on('moveend', updateModalCenterLinks);
  updateModalCenterLinks();
}

/**
 * Places Data initialization & Overpass query
 */
function initPlacesData() {
  state.places = [...MANGALORE_SEED_DATA];
  updateStatusBadge('cached', `${state.places.length} Kudla Places`);
  fetchOverpassData();
}

async function fetchOverpassData() {
  state.isLoadingOSM = true;
  updateStatusBadge('loading', 'Syncing live OSM...');

  const { south, west, north, east } = MANGALORE_CONFIG.bbox;
  const bboxStr = `${south},${west},${north},${east}`;

  const query = `
    [out:json][timeout:20];
    (
      // Hardware
      node["shop"~"^(hardware|doityourself|paint|electrical|plumbing|trade|building_materials)$"](${bboxStr});
      way["shop"~"^(hardware|doityourself|paint|electrical|plumbing|trade|building_materials)$"](${bboxStr});

      // Repairs
      node["shop"~"^(electronics_repair|mobile_phone|car_repair|bicycle_repair|motorcycle_repair)$"](${bboxStr});
      node["craft"~"^(shoemaker|tailor|electrician|plumber|carpenter)$"](${bboxStr});

      // Stationery & Xerox
      node["shop"~"^(stationery|books|copyshop)$"](${bboxStr});

      // Pharmacy
      node["amenity"~"^(pharmacy|chemist|clinic)$"](${bboxStr});

      // Public Toilets
      node["amenity"="toilets"](${bboxStr});

      // Drinking Water
      node["amenity"="drinking_water"](${bboxStr});

      // Bus Stops & Stations
      node["highway"="bus_stop"](${bboxStr});
      node["amenity"="bus_station"](${bboxStr});
      way["amenity"="bus_station"](${bboxStr});

      // Budget Food
      node["amenity"~"^(restaurant|cafe|fast_food)$"](${bboxStr});
    );
    out center tags;
  `;

  let success = false;
  let parsed = [];

  for (const endpoint of MANGALORE_CONFIG.overpassEndpoints) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 12000);

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(query),
        signal: controller.signal
      });

      clearTimeout(timer);

      if (res.ok) {
        const json = await res.json();
        if (json && json.elements && json.elements.length > 0) {
          parsed = normalizeOSMElements(json.elements);
          success = true;
          break;
        }
      }
    } catch (e) {
      console.warn(`Endpoint ${endpoint} failed:`, e.message);
    }
  }

  state.isLoadingOSM = false;

  if (success && parsed.length > 0) {
    const liveIds = new Set(parsed.map(p => `${p.osmType}-${p.osmId}`));
    const extraSeeds = MANGALORE_SEED_DATA.filter(s => !liveIds.has(`${s.osmType}-${s.osmId}`));
    
    state.places = [...parsed, ...extraSeeds];
    state.osmSource = 'live';
    updateStatusBadge('live', `${state.places.length} Live OSM Places`);
    showToast(`Loaded ${state.places.length} places from OpenStreetMap!`);
  } else {
    state.osmSource = 'cached';
    updateStatusBadge('cached', `${state.places.length} Kudla Places`);
  }

  renderCategoryCounts();
  applyFiltersAndRender();
}

function normalizeOSMElements(elements) {
  return elements.map(el => {
    const tags = el.tags || {};
    const lat = el.lat || (el.center ? el.center.lat : null);
    const lon = el.lon || (el.center ? el.center.lon : null);

    if (!lat || !lon) return null;

    const catKey = determineCategory(tags);
    if (!catKey) return null;

    const name = tags.name || tags['name:en'] || tags.operator || tags.brand || fallbackName(tags, catKey);
    const nameKn = tags['name:kn'] || tags['name:tcy'] || '';
    
    let street = tags['addr:street'] || tags['addr:full'] || tags['addr:suburb'] || tags['addr:place'] || tags['addr:city'] || '';
    if (!street && tags['addr:housename']) street = tags['addr:housename'];

    const phone = tags.phone || tags['contact:phone'] || tags['contact:mobile'] || '';
    const openingHours = tags.opening_hours || '';

    return {
      id: `osm-${el.type}-${el.id}`,
      osmType: el.type,
      osmId: el.id,
      name,
      nameKn,
      category: catKey,
      subType: tags.shop || tags.craft || tags.amenity || tags.highway || 'general',
      lat,
      lon,
      street,
      phone,
      openingHours,
      tags
    };
  }).filter(Boolean);
}

function determineCategory(tags) {
  if (tags.amenity === 'drinking_water') return 'water';
  if (tags.amenity === 'toilets') return 'toilet';
  if (tags.highway === 'bus_stop' || tags.amenity === 'bus_station') return 'bus';

  if (tags.shop) {
    if (['hardware', 'doityourself', 'paint', 'electrical', 'plumbing', 'trade', 'building_materials'].includes(tags.shop)) {
      return 'hardware';
    }
    if (['electronics_repair', 'mobile_phone', 'car_repair', 'bicycle_repair', 'motorcycle_repair'].includes(tags.shop)) {
      return 'repair';
    }
    if (['stationery', 'books', 'copyshop'].includes(tags.shop)) {
      return 'stationery';
    }
  }

  if (tags.craft && ['shoemaker', 'tailor', 'electrician', 'plumber', 'carpenter'].includes(tags.craft)) {
    return 'repair';
  }

  if (tags.amenity) {
    if (['pharmacy', 'chemist', 'clinic', 'hospital'].includes(tags.amenity)) {
      return 'pharmacy';
    }
    if (['restaurant', 'cafe', 'fast_food'].includes(tags.amenity)) {
      return 'food';
    }
  }

  return null;
}

function fallbackName(tags, catKey) {
  if (catKey === 'water') return 'Public Drinking Water Point';
  if (catKey === 'toilet') return 'Public Toilet';
  if (catKey === 'bus') return tags.bus_stop || 'Bus Stop';
  if (catKey === 'hardware') return 'Hardware & Tools Store';
  if (catKey === 'repair') return 'Repair & Service Shop';
  if (catKey === 'pharmacy') return 'Pharmacy & Medical Store';
  if (catKey === 'stationery') return 'Stationery & Xerox';
  if (catKey === 'food') return 'Local Eatery / Food Point';
  return 'Local Utility Point';
}

/**
 * UI Event Bindings
 */
function bindUIEvents() {
  // Start Exploring Button (smooth scroll to map)
  const btnScrollToMap = document.getElementById('btn-scroll-to-map');
  if (btnScrollToMap) {
    btnScrollToMap.addEventListener('click', () => {
      scrollToMapArea();
    });
  }

  // Search Input
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  searchInput.addEventListener('input', debounce((e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    searchClear.style.display = state.searchQuery ? 'inline-block' : 'none';
    applyFiltersAndRender();
  }, 180));

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    searchClear.style.display = 'none';
    searchInput.focus();
    applyFiltersAndRender();
  });

  // Intro Category Chips
  document.getElementById('category-chips').addEventListener('click', (e) => {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;

    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    state.activeCategory = chip.dataset.category;
    applyFiltersAndRender();
    
    // Smooth scroll down to map on category tap if at top
    if (window.scrollY < 120) {
      scrollToMapArea();
    }
  });

  // Sort dropdown
  document.getElementById('sort-select').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFiltersAndRender();
  });

  // Reset Filters in empty state
  document.getElementById('btn-reset-filters').addEventListener('click', () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    searchInput.value = '';
    searchClear.style.display = 'none';
    document.querySelectorAll('.cat-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.category === 'all');
    });
    applyFiltersAndRender();
  });

  // Geolocation
  document.getElementById('btn-intro-locate').addEventListener('click', () => {
    locateUser();
    scrollToMapArea();
  });

  // Contribution Modal Dialog
  const modal = document.getElementById('contrib-modal');
  document.getElementById('btn-open-contrib-modal').addEventListener('click', () => modal.style.display = 'flex');
  document.getElementById('btn-sidebar-add-osm').addEventListener('click', () => modal.style.display = 'flex');
  document.getElementById('btn-close-modal').addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Floating map actions
  document.getElementById('btn-add-here').addEventListener('click', () => {
    const center = map.getCenter();
    const zoom = Math.max(17, map.getZoom());
    window.open(`https://www.openstreetmap.org/edit#map=${zoom}/${center.lat.toFixed(5)}/${center.lng.toFixed(5)}`, '_blank', 'noopener');
  });

  document.getElementById('btn-report-note').addEventListener('click', () => {
    const center = map.getCenter();
    const zoom = Math.max(16, map.getZoom());
    window.open(`https://www.openstreetmap.org/note/new#map=${zoom}/${center.lat.toFixed(5)}/${center.lng.toFixed(5)}`, '_blank', 'noopener');
  });

  // Mobile Drawer Toggle
  const mobileToggleBtn = document.getElementById('btn-mobile-drawer');
  const sidebarPanel = document.getElementById('sidebar-panel');
  const toggleLabel = document.getElementById('mobile-toggle-label');

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => {
      sidebarPanel.classList.toggle('collapsed');
      const isCollapsed = sidebarPanel.classList.contains('collapsed');
      toggleLabel.textContent = isCollapsed ? 'View Results List' : 'Hide Results List';
    });
  }
}

function scrollToMapArea() {
  const mapSection = document.getElementById('map-section');
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 400);
  }
}

/**
 * Filter, Sort, Render
 */
function applyFiltersAndRender() {
  let list = state.places.filter(place => {
    if (state.activeCategory !== 'all' && place.category !== state.activeCategory) {
      return false;
    }

    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchName = place.name.toLowerCase().includes(q);
      const matchKn = place.nameKn.toLowerCase().includes(q);
      const matchStreet = place.street.toLowerCase().includes(q);
      const matchSub = place.subType.toLowerCase().includes(q);
      const catObj = CATEGORIES[place.category];
      const matchCatName = catObj && catObj.name.toLowerCase().includes(q);

      if (!matchName && !matchKn && !matchStreet && !matchSub && !matchCatName) {
        return false;
      }
    }

    return true;
  });

  if (state.sortBy === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortBy === 'distance' && state.userLocation) {
    list.sort((a, b) => (a.distanceKm || 9999) - (b.distanceKm || 9999));
  }

  state.filteredPlaces = list;

  renderSidebarCards(list);
  renderMapPins(list);
  updateResultCount(list.length);
}

/**
 * Render Sidebar Cards
 */
function renderSidebarCards(places) {
  const container = document.getElementById('places-list');
  const emptyState = document.getElementById('empty-state');

  if (places.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';

  const html = places.map(place => {
    const cat = CATEGORIES[place.category] || { name: 'Utility', icon: '📍' };
    const isSelected = state.selectedPlaceId === place.id;
    const osmEditUrl = `https://www.openstreetmap.org/edit?${place.osmType || 'node'}=${place.osmId}#map=19/${place.lat}/${place.lon}`;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`;

    return `
      <div class="place-card ${isSelected ? 'selected' : ''}" data-id="${place.id}" role="listitem">
        <div class="card-top">
          <span class="category-tag ${place.category}">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
          </span>
          ${place.distanceText ? `<span class="card-distance">${place.distanceText}</span>` : ''}
        </div>

        <div>
          <h4 class="card-title">${escapeHTML(place.name)}</h4>
          ${place.nameKn ? `<div class="card-kn">${escapeHTML(place.nameKn)}</div>` : ''}
        </div>

        <div class="card-details">
          ${place.street ? `
            <div class="card-row">
              <svg class="card-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>${escapeHTML(place.street)}</span>
            </div>
          ` : ''}

          ${place.openingHours ? `
            <div class="card-row">
              <svg class="card-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>${escapeHTML(place.openingHours)}</span>
            </div>
          ` : ''}

          ${place.phone ? `
            <div class="card-row">
              <svg class="card-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:${escapeHTML(place.phone)}" class="card-link">${escapeHTML(place.phone)}</a>
            </div>
          ` : ''}
        </div>

        <div class="card-actions">
          <button class="card-act-btn primary btn-focus-marker" data-id="${place.id}">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Show on Map
          </button>
          
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="card-act-btn" title="Get Directions">
            Directions
          </a>

          <a href="${osmEditUrl}" target="_blank" rel="noopener" class="card-act-btn" title="Edit on OpenStreetMap">
            Edit OSM
          </a>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  container.querySelectorAll('.place-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return;
      selectAndFocusPlace(card.dataset.id, true);
    });
  });

  container.querySelectorAll('.btn-focus-marker').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectAndFocusPlace(btn.dataset.id, true);
    });
  });
}

/**
 * Render Map Pins
 */
function renderMapPins(places) {
  markersLayerGroup.clearLayers();
  markerMap.clear();

  places.forEach(place => {
    const cat = CATEGORIES[place.category] || { icon: '📍' };

    const icon = L.divIcon({
      className: 'marker-wrap',
      html: `<div class="custom-map-marker ${place.category}" title="${escapeHTML(place.name)}">${cat.icon}</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });

    const marker = L.marker([place.lat, place.lon], { icon }).addTo(markersLayerGroup);
    const popupHTML = createPopupHTML(place);
    marker.bindPopup(popupHTML, { maxWidth: 310 });

    marker.on('click', () => {
      selectAndFocusPlace(place.id, false);
    });

    markerMap.set(place.id, marker);
  });
}

function createPopupHTML(place) {
  const cat = CATEGORIES[place.category] || { name: 'Utility', icon: '📍' };
  const osmUrl = place.osmId 
    ? `https://www.openstreetmap.org/${place.osmType || 'node'}/${place.osmId}`
    : `https://www.openstreetmap.org/search?query=${encodeURIComponent(place.name)}`;
  const osmEditUrl = `https://www.openstreetmap.org/edit?${place.osmType || 'node'}=${place.osmId}#map=19/${place.lat}/${place.lon}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`;

  return `
    <div class="popup-container">
      <span class="category-tag ${place.category}">
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
      </span>
      <h4 class="popup-title">${escapeHTML(place.name)}</h4>
      ${place.nameKn ? `<div class="popup-kn">${escapeHTML(place.nameKn)}</div>` : ''}

      <div class="popup-meta">
        ${place.street ? `<div>📍 ${escapeHTML(place.street)}</div>` : ''}
        ${place.openingHours ? `<div>🕒 ${escapeHTML(place.openingHours)}</div>` : ''}
        ${place.phone ? `<div>📞 <a href="tel:${escapeHTML(place.phone)}" class="card-link">${escapeHTML(place.phone)}</a></div>` : ''}
        ${place.distanceText ? `<div>🧭 <strong>${place.distanceText} from you</strong></div>` : ''}
      </div>

      <div class="popup-actions">
        <a href="${directionsUrl}" target="_blank" rel="noopener" class="card-act-btn primary">
          Directions &rarr;
        </a>
        <a href="${osmEditUrl}" target="_blank" rel="noopener" class="card-act-btn" title="Edit on OpenStreetMap">
          Edit OSM
        </a>
        <a href="${osmUrl}" target="_blank" rel="noopener" class="card-act-btn" title="View on OpenStreetMap">
          View on OSM
        </a>
      </div>
    </div>
  `;
}

function selectAndFocusPlace(placeId, shouldFly = true) {
  state.selectedPlaceId = placeId;

  document.querySelectorAll('.place-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.id === placeId);
  });

  const card = document.querySelector(`.place-card[data-id="${placeId}"]`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  const marker = markerMap.get(placeId);
  const place = state.places.find(p => p.id === placeId);

  if (marker && place) {
    if (shouldFly) {
      map.flyTo([place.lat, place.lon], 16, { duration: 0.8 });
    }
    marker.openPopup();
  }
}

/**
 * Geolocation ("Near Me")
 */
function locateUser() {
  if (!navigator.geolocation) {
    showToast('Geolocation is not supported on this device.');
    return;
  }

  showToast('Locating your position in Mangalore...');

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      state.userLocation = { lat: latitude, lon: longitude };

      if (userMarker) {
        userMarker.setLatLng([latitude, longitude]);
      } else {
        const userIcon = L.divIcon({
          className: 'user-icon-pulse',
          html: `<div class="user-location-marker" title="You are here"></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9]
        });
        userMarker = L.marker([latitude, longitude], { icon: userIcon, zIndexOffset: 2000 }).addTo(map);
      }

      state.places.forEach(p => {
        const d = calculateDistance(latitude, longitude, p.lat, p.lon);
        p.distanceKm = d;
        p.distanceText = d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1)} km`;
      });

      const opt = document.getElementById('sort-distance-opt');
      opt.disabled = false;
      opt.textContent = 'Distance (Nearest First)';
      
      document.getElementById('sort-select').value = 'distance';
      state.sortBy = 'distance';

      map.flyTo([latitude, longitude], 15, { duration: 1 });
      showToast('Location updated! Sorted by nearest places.');
      applyFiltersAndRender();
    },
    (err) => {
      console.warn('Geolocation error:', err);
      showToast('Could not access location. Please check browser permissions.');
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

/**
 * Counts & Badges
 */
function renderCategoryCounts() {
  const counts = { all: state.places.length };
  Object.keys(CATEGORIES).forEach(k => counts[k] = 0);

  state.places.forEach(p => {
    if (counts[p.category] !== undefined) {
      counts[p.category]++;
    }
  });

  document.getElementById('count-all').textContent = counts.all;
  Object.keys(CATEGORIES).forEach(k => {
    const el = document.getElementById(`count-${k}`);
    if (el) el.textContent = counts[k] || 0;
  });
}

function updateResultCount(count) {
  document.getElementById('results-count').textContent = count === 1 ? 'Showing 1 place' : `Showing ${count} places`;
}

function updateStatusBadge(type, text) {
  const pip = document.querySelector('.status-pip');
  const textEl = document.getElementById('status-text');

  if (pip && textEl) {
    if (type === 'live') pip.style.backgroundColor = '#10b981';
    else if (type === 'loading') pip.style.backgroundColor = '#3b82f6';
    else pip.style.backgroundColor = '#f59e0b';
    textEl.textContent = text;
  }
}

function updateModalCenterLinks() {
  if (!map) return;
  const center = map.getCenter();
  const zoom = Math.max(16, map.getZoom());
  const link = document.getElementById('modal-edit-link');
  if (link) {
    link.href = `https://www.openstreetmap.org/edit#map=${zoom}/${center.lat.toFixed(5)}/${center.lng.toFixed(5)}`;
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
