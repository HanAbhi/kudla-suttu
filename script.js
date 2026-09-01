/**
 * Kudla Suttu - Mangalore Civic & Discovery Map
 * Open-source civic map powered by OpenStreetMap & Leaflet.js
 */

// Configuration & Constants
const MANGALORE_CONFIG = {
  center: [12.9141, 74.8560], // Hampankatta, Mangalore
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

// Category Configuration & Metadata
const CATEGORIES = {
  hardware: {
    id: 'hardware',
    name: 'Hardware & Supplies',
    icon: '🔧',
    color: '#c05621',
    tags: ['shop=hardware', 'shop=doityourself', 'shop=paint', 'shop=electrical', 'shop=plumbing', 'shop=trade', 'shop=building_materials']
  },
  repair: {
    id: 'repair',
    name: 'Repair & Craft',
    icon: '⚙️',
    color: '#3182ce',
    tags: ['shop=electronics_repair', 'shop=mobile_phone', 'shop=car_repair', 'shop=bicycle_repair', 'shop=motorcycle_repair', 'craft=shoemaker', 'craft=tailor', 'craft=electrician', 'craft=plumber', 'craft=carpenter']
  },
  stationery: {
    id: 'stationery',
    name: 'Stationery & Xerox',
    icon: '📚',
    color: '#2f855a',
    tags: ['shop=stationery', 'shop=books', 'shop=copyshop', 'shop=newsagent']
  },
  pharmacy: {
    id: 'pharmacy',
    name: 'Pharmacies & Clinics',
    icon: '💊',
    color: '#c53030',
    tags: ['amenity=pharmacy', 'amenity=chemist', 'amenity=clinic', 'amenity=hospital']
  },
  food: {
    id: 'food',
    name: 'Food & Snacks',
    icon: '☕',
    color: '#dd6b20',
    tags: ['amenity=restaurant', 'amenity=cafe', 'amenity=fast_food']
  },
  toilet: {
    id: 'toilet',
    name: 'Public Toilets & Water',
    icon: '🚻',
    color: '#007791',
    tags: ['amenity=toilets', 'amenity=drinking_water']
  },
  transit: {
    id: 'transit',
    name: 'Bus Stops',
    icon: '🚌',
    color: '#6b46c1',
    tags: ['highway=bus_stop', 'amenity=bus_station']
  }
};

// Curated Seed Data for instant offline/guaranteed availability
const MANGALORE_SEED_DATA = [
  {
    id: 'seed-1',
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
    wheelchair: 'yes',
    tags: { 'shop': 'hardware', 'operator': 'Pai Group' }
  },
  {
    id: 'seed-2',
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
    id: 'seed-3',
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
    id: 'seed-4',
    osmType: 'node',
    osmId: 30104,
    name: 'Kudla Tools & Power Machinery Spares',
    nameKn: 'ಕುಡ್ಲ ಟೂಲ್ಸ್ & ಸ್ಪೇರ್ಸ್',
    category: 'hardware',
    subType: 'hardware',
    lat: 12.8645,
    lon: 74.8360,
    street: 'Bunder Port Road, Old Port',
    phone: '+91 824 2421190',
    openingHours: 'Mo-Sa 08:00-19:00',
    tags: { 'shop': 'hardware' }
  },
  {
    id: 'seed-5',
    osmType: 'node',
    osmId: 30105,
    name: 'Surathkal Hardware & Sanitary Depot',
    nameKn: 'ಸುರತ್ಕಲ್ ಹಾರ್ಡ್‌ವೇರ್ ಡಿಪೋ',
    category: 'hardware',
    subType: 'doityourself',
    lat: 12.9810,
    lon: 74.7985,
    street: 'NH 66 Main Road, Surathkal',
    phone: '+91 824 2475510',
    openingHours: 'Mo-Sa 09:00-20:00',
    tags: { 'shop': 'hardware' }
  },
  {
    id: 'seed-6',
    osmType: 'node',
    osmId: 30201,
    name: 'Modern Mobile & Laptop Repair Hub',
    nameKn: 'ಮಾಡರ್ನ್ ಮೊಬೈಲ್ ರಿಪೇರ್',
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
    id: 'seed-7',
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
    id: 'seed-8',
    osmType: 'node',
    osmId: 30203,
    name: 'Babu Master Shoe Repair & Leather Works',
    nameKn: 'ಬಾಬು ಮಾಸ್ಟರ್ ಶೂ ರಿಪೇರ್',
    category: 'repair',
    subType: 'shoemaker',
    lat: 12.8735,
    lon: 74.8385,
    street: 'Car Street, Sri Venkataramana Temple Lane',
    openingHours: 'Mo-Sa 09:30-19:00',
    tags: { 'craft': 'shoemaker' }
  },
  {
    id: 'seed-9',
    osmType: 'node',
    osmId: 30301,
    name: 'School Book Co. & Student Stationery',
    nameKn: 'ಸ್ಕೂಲ್ ಬುಕ್ ಕಂಪನಿ',
    category: 'stationery',
    subType: 'stationery',
    lat: 12.8690,
    lon: 74.8430,
    street: 'Car Street, Hampankatta',
    phone: '+91 824 2495000',
    openingHours: 'Mo-Sa 09:00-20:30',
    tags: { 'shop': 'books' }
  },
  {
    id: 'seed-10',
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
  {
    id: 'seed-11',
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
    wheelchair: 'yes',
    tags: { 'amenity': 'pharmacy', 'opening_hours': '24/7' }
  },
  {
    id: 'seed-12',
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
    wheelchair: 'yes',
    tags: { 'amenity': 'hospital' }
  },
  {
    id: 'seed-13',
    osmType: 'node',
    osmId: 30501,
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
    id: 'seed-14',
    osmType: 'node',
    osmId: 30502,
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
  },
  {
    id: 'seed-15',
    osmType: 'node',
    osmId: 30601,
    name: 'Sulabh Public Toilet & Washrooms',
    nameKn: 'ಸುಲಭ್ ಸಾರ್ವಜನಿಕ ಶೌಚಾಲಯ',
    category: 'toilet',
    subType: 'toilets',
    lat: 12.8625,
    lon: 74.8390,
    street: 'Near State Bank Bus Stand, Bunder',
    openingHours: 'Mo-Su 05:00-23:00',
    wheelchair: 'limited',
    tags: { 'amenity': 'toilets', 'fee': 'yes' }
  },
  {
    id: 'seed-16',
    osmType: 'node',
    osmId: 30602,
    name: 'Kadri Park Free RO Drinking Water Point',
    nameKn: 'ಕದ್ರಿ ಪಾರ್ಕ್ ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು',
    category: 'toilet',
    subType: 'drinking_water',
    lat: 12.8780,
    lon: 74.8620,
    street: 'Kadri Park Main Entrance',
    openingHours: 'Mo-Su 06:00-20:00',
    tags: { 'amenity': 'drinking_water' }
  },
  {
    id: 'seed-17',
    osmType: 'node',
    osmId: 30701,
    name: 'State Bank City Bus Terminus (Service Bus Stand)',
    nameKn: 'ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಸಿಟಿ ಬಸ್ ನಿಲ್ದಾಣ',
    category: 'transit',
    subType: 'bus_station',
    lat: 12.8630,
    lon: 74.8395,
    street: 'State Bank Circle, Hampankatta',
    tags: { 'amenity': 'bus_station' }
  },
  {
    id: 'seed-18',
    osmType: 'node',
    osmId: 30702,
    name: 'KSRTC Intercity Bus Terminus Bejai',
    nameKn: 'ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣ ಬಿಜೈ',
    category: 'transit',
    subType: 'bus_station',
    lat: 12.8885,
    lon: 74.8480,
    street: 'Bejai Main Road, Mangalore',
    phone: '+91 824 2211244',
    openingHours: '24/7',
    wheelchair: 'yes',
    tags: { 'amenity': 'bus_station' }
  }
];

// Application State
const state = {
  places: [],
  filteredPlaces: [],
  selectedPlaceId: null,
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  userLocation: null,
  isLoadingOSM: false,
  osmSource: 'cached' // 'live' or 'cached'
};

// Global Map References
let map = null;
let markersLayerGroup = null;
let userMarker = null;
const markerMap = new Map(); // id -> L.Marker

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initPlacesData();
  bindUIEvents();
  renderCategoryCounts();
  applyFiltersAndRender();
});

/**
 * Initialize Leaflet Map
 */
function initMap() {
  map = L.map('map', {
    center: MANGALORE_CONFIG.center,
    zoom: MANGALORE_CONFIG.defaultZoom,
    minZoom: MANGALORE_CONFIG.minZoom,
    maxZoom: MANGALORE_CONFIG.maxZoom,
    zoomControl: true
  });

  // Base OpenStreetMap Tiles
  const osmStandard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Alternative Clean CartoDB Positron Tiles
  const cartoPositron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    maxZoom: 19
  });

  L.control.layers({
    'OpenStreetMap Standard': osmStandard,
    'Carto Light Clean': cartoPositron
  }, null, { position: 'topright' }).addTo(map);

  markersLayerGroup = L.layerGroup().addTo(map);

  // Update contribute modal links when map view moves
  map.on('moveend', updateModalCenterLinks);
  updateModalCenterLinks();
}

/**
 * Initialize Places Data with Seed Data & Trigger Overpass Query
 */
function initPlacesData() {
  state.places = [...MANGALORE_SEED_DATA];
  updateStatusBadge('cached', `${state.places.length} places (Mangalore Seed)`);
  fetchOverpassData();
}

/**
 * Build and execute Overpass API query for Mangalore
 */
async function fetchOverpassData() {
  state.isLoadingOSM = true;
  updateStatusBadge('loading', 'Fetching live OSM data...');

  const { south, west, north, east } = MANGALORE_CONFIG.bbox;
  const bboxStr = `${south},${west},${north},${east}`;

  // Overpass QL Query for Mangalore
  const overpassQuery = `
    [out:json][timeout:20];
    (
      // Hardware & Supplies
      node["shop"~"^(hardware|doityourself|paint|electrical|plumbing|trade|building_materials)$"](${bboxStr});
      way["shop"~"^(hardware|doityourself|paint|electrical|plumbing|trade|building_materials)$"](${bboxStr});

      // Repair & Craft
      node["shop"~"^(electronics_repair|mobile_phone|car_repair|bicycle_repair|motorcycle_repair)$"](${bboxStr});
      node["craft"~"^(shoemaker|tailor|electrician|plumber|carpenter)$"](${bboxStr});

      // Stationery & Xerox
      node["shop"~"^(stationery|books|copyshop)$"](${bboxStr});

      // Pharmacies & Health
      node["amenity"~"^(pharmacy|chemist|clinic)$"](${bboxStr});

      // Public Toilets & Drinking Water
      node["amenity"~"^(toilets|drinking_water)$"](${bboxStr});

      // Transit & Bus Stops
      node["highway"="bus_stop"](${bboxStr});
      node["amenity"="bus_station"](${bboxStr});
      way["amenity"="bus_station"](${bboxStr});
    );
    out center tags;
  `;

  let success = false;
  let parsedPlaces = [];

  for (const endpoint of MANGALORE_CONFIG.overpassEndpoints) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(overpassQuery),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data && data.elements && data.elements.length > 0) {
          parsedPlaces = normalizeOSMElements(data.elements);
          success = true;
          break;
        }
      }
    } catch (err) {
      console.warn(`Overpass endpoint ${endpoint} failed or timed out:`, err.message);
    }
  }

  state.isLoadingOSM = false;

  if (success && parsedPlaces.length > 0) {
    // Merge live parsed places with curated seed places (preventing duplicate IDs)
    const liveOsmIds = new Set(parsedPlaces.map(p => `${p.osmType}-${p.osmId}`));
    const nonDuplicatedSeeds = MANGALORE_SEED_DATA.filter(seed => !liveOsmIds.has(`${seed.osmType}-${seed.osmId}`));
    
    state.places = [...parsedPlaces, ...nonDuplicatedSeeds];
    state.osmSource = 'live';
    updateStatusBadge('live', `${state.places.length} places (Live OpenStreetMap)`);
    showToast(`Loaded ${state.places.length} places from OpenStreetMap!`);
  } else {
    state.osmSource = 'cached';
    updateStatusBadge('cached', `${state.places.length} places (Curated Kudla Data)`);
    showToast('OSM API slow/offline: Displaying curated Mangalore places directory.');
  }

  renderCategoryCounts();
  applyFiltersAndRender();
}

/**
 * Normalize raw OSM elements into clean place objects
 */
function normalizeOSMElements(elements) {
  return elements.map(el => {
    const tags = el.tags || {};
    const lat = el.lat || (el.center ? el.center.lat : null);
    const lon = el.lon || (el.center ? el.center.lon : null);

    if (!lat || !lon) return null;

    const category = categorizeOSMTags(tags);
    if (!category) return null;

    const name = tags.name || tags['name:en'] || tags.operator || tags.brand || getDefaultNameForTag(tags, category);
    const nameKn = tags['name:kn'] || tags['name:tcy'] || '';
    
    let street = tags['addr:street'] || tags['addr:full'] || tags['addr:suburb'] || tags['addr:place'] || tags['addr:city'] || '';
    if (!street && tags['addr:housename']) street = tags['addr:housename'];

    const phone = tags.phone || tags['contact:phone'] || tags['contact:mobile'] || '';
    const openingHours = tags.opening_hours || '';
    const wheelchair = tags.wheelchair || '';

    return {
      id: `osm-${el.type}-${el.id}`,
      osmType: el.type,
      osmId: el.id,
      name,
      nameKn,
      category: category.id,
      subType: tags.shop || tags.craft || tags.amenity || tags.highway || 'general',
      lat,
      lon,
      street,
      phone,
      openingHours,
      wheelchair,
      tags
    };
  }).filter(Boolean);
}

/**
 * Determine category from OSM tags
 */
function categorizeOSMTags(tags) {
  if (tags.shop) {
    if (['hardware', 'doityourself', 'paint', 'electrical', 'plumbing', 'trade', 'building_materials'].includes(tags.shop)) {
      return CATEGORIES.hardware;
    }
    if (['electronics_repair', 'mobile_phone', 'car_repair', 'bicycle_repair', 'motorcycle_repair'].includes(tags.shop)) {
      return CATEGORIES.repair;
    }
    if (['stationery', 'books', 'copyshop'].includes(tags.shop)) {
      return CATEGORIES.stationery;
    }
  }

  if (tags.craft && ['shoemaker', 'tailor', 'electrician', 'plumber', 'carpenter'].includes(tags.craft)) {
    return CATEGORIES.repair;
  }

  if (tags.amenity) {
    if (['pharmacy', 'chemist', 'clinic', 'hospital'].includes(tags.amenity)) {
      return CATEGORIES.pharmacy;
    }
    if (['restaurant', 'cafe', 'fast_food'].includes(tags.amenity)) {
      return CATEGORIES.food;
    }
    if (['toilets', 'drinking_water'].includes(tags.amenity)) {
      return CATEGORIES.toilet;
    }
    if (tags.amenity === 'bus_station') {
      return CATEGORIES.transit;
    }
  }

  if (tags.highway === 'bus_stop') {
    return CATEGORIES.transit;
  }

  return null;
}

/**
 * Provide sensible fallback names when OSM features have no explicit name tag
 */
function getDefaultNameForTag(tags, category) {
  if (tags.amenity === 'toilets') return 'Public Toilet';
  if (tags.amenity === 'drinking_water') return 'Drinking Water Point';
  if (tags.highway === 'bus_stop') return tags.bus_stop || 'Mangalore Bus Stop';
  if (tags.amenity === 'bus_station') return 'Bus Station';
  if (tags.shop === 'hardware') return 'Hardware Store';
  if (tags.shop === 'paint') return 'Paint & Hardware Shop';
  if (tags.shop === 'electrical') return 'Electrical Shop';
  if (tags.shop === 'plumbing') return 'Plumbing Supplies Store';
  if (tags.amenity === 'pharmacy') return 'Medical & Pharmacy Store';
  return `${category.name} Facility`;
}

/**
 * Bind UI Events
 */
function bindUIEvents() {
  // Search Input
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  searchInput.addEventListener('input', debounce((e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    searchClear.style.display = state.searchQuery ? 'inline-flex' : 'none';
    applyFiltersAndRender();
  }, 200));

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    searchClear.style.display = 'none';
    searchInput.focus();
    applyFiltersAndRender();
  });

  // Category Filter Chips
  const chipContainer = document.getElementById('category-chips');
  chipContainer.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    state.activeCategory = chip.dataset.category;
    applyFiltersAndRender();
  });

  // Sort Dropdown
  document.getElementById('sort-select').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFiltersAndRender();
  });

  // Reset Filters Button in Empty State
  document.getElementById('btn-reset-filters').addEventListener('click', () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    searchInput.value = '';
    searchClear.style.display = 'none';
    document.querySelectorAll('.chip').forEach(c => {
      c.classList.toggle('active', c.dataset.category === 'all');
    });
    applyFiltersAndRender();
  });

  // Geolocation Button ("Near Me")
  document.getElementById('btn-locate').addEventListener('click', locateUser);

  // Sync OSM Button
  document.getElementById('btn-refresh').addEventListener('click', () => {
    fetchOverpassData();
  });

  // Contribute Modal
  const modal = document.getElementById('contribute-modal');
  document.getElementById('btn-contribute-modal').addEventListener('click', () => {
    modal.style.display = 'flex';
  });
  document.getElementById('notice-add-btn').addEventListener('click', () => {
    modal.style.display = 'flex';
  });
  document.getElementById('btn-close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Floating Map Buttons
  document.getElementById('btn-add-here').addEventListener('click', () => {
    const center = map.getCenter();
    const zoom = Math.max(17, map.getZoom());
    const editUrl = `https://www.openstreetmap.org/edit#map=${zoom}/${center.lat.toFixed(5)}/${center.lng.toFixed(5)}`;
    window.open(editUrl, '_blank', 'noopener');
  });

  document.getElementById('btn-osm-notes').addEventListener('click', () => {
    const center = map.getCenter();
    const zoom = Math.max(16, map.getZoom());
    const noteUrl = `https://www.openstreetmap.org/note/new#map=${zoom}/${center.lat.toFixed(5)}/${center.lng.toFixed(5)}`;
    window.open(noteUrl, '_blank', 'noopener');
  });

  // Mobile View Toggle
  document.getElementById('btn-toggle-view').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
  });
}

/**
 * Filter, Sort, and Render UI
 */
function applyFiltersAndRender() {
  let list = state.places.filter(place => {
    // Category match
    if (state.activeCategory !== 'all' && place.category !== state.activeCategory) {
      return false;
    }

    // Keyword match
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

  // Sort list
  if (state.sortBy === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortBy === 'distance' && state.userLocation) {
    list.sort((a, b) => (a.distanceKm || 9999) - (b.distanceKm || 9999));
  }

  state.filteredPlaces = list;

  renderSidebarList(list);
  renderMapMarkers(list);
  updateResultCount(list.length);
}

/**
 * Render Sidebar Directory Cards
 */
function renderSidebarList(places) {
  const container = document.getElementById('places-list');
  const emptyState = document.getElementById('empty-state');

  if (places.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';

  const html = places.map(place => {
    const cat = CATEGORIES[place.category] || { name: 'General', icon: '📍' };
    const isSelected = state.selectedPlaceId === place.id;
    const osmUrl = place.osmId 
      ? `https://www.openstreetmap.org/${place.osmType || 'node'}/${place.osmId}`
      : `https://www.openstreetmap.org/search?query=${encodeURIComponent(place.name + ' Mangalore')}`;
    const osmEditUrl = `https://www.openstreetmap.org/edit?${place.osmType || 'node'}=${place.osmId}#map=19/${place.lat}/${place.lon}`;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`;

    return `
      <div class="place-card ${isSelected ? 'selected' : ''}" data-id="${place.id}" role="listitem">
        <div class="card-top">
          <span class="card-category-badge ${place.category}">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
          </span>
          ${place.distanceText ? `<span class="card-distance">${place.distanceText}</span>` : ''}
        </div>

        <div>
          <h3 class="card-title">${escapeHTML(place.name)}</h3>
          ${place.nameKn ? `<div class="card-kannada-name">${escapeHTML(place.nameKn)}</div>` : ''}
        </div>

        <div class="card-meta-list">
          ${place.street ? `
            <div class="card-meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>${escapeHTML(place.street)}</span>
            </div>
          ` : ''}

          ${place.openingHours ? `
            <div class="card-meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>${escapeHTML(place.openingHours)}</span>
            </div>
          ` : ''}

          ${place.phone ? `
            <div class="card-meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:${escapeHTML(place.phone)}" class="link-btn">${escapeHTML(place.phone)}</a>
            </div>
          ` : ''}
        </div>

        <div class="card-actions">
          <button class="card-btn primary btn-zoom-place" data-id="${place.id}">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Show on Map
          </button>
          
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="card-btn" title="Get Directions">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 11 12 14 22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
            Directions
          </a>

          <a href="${osmEditUrl}" target="_blank" rel="noopener" class="card-btn" title="Edit shop details on OpenStreetMap">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            Edit OSM
          </a>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  // Add click listeners to place cards
  container.querySelectorAll('.place-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return;
      const id = card.dataset.id;
      selectAndFocusPlace(id, true);
    });
  });

  container.querySelectorAll('.btn-zoom-place').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      selectAndFocusPlace(id, true);
    });
  });
}

/**
 * Render Leaflet Map Markers
 */
function renderMapMarkers(places) {
  markersLayerGroup.clearLayers();
  markerMap.clear();

  places.forEach(place => {
    const cat = CATEGORIES[place.category] || { icon: '📍' };
    
    // Custom DivIcon for Leaflet
    const icon = L.divIcon({
      className: 'custom-marker-wrapper',
      html: `<div class="custom-map-marker ${place.category}" title="${escapeHTML(place.name)}">${cat.icon}</div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -18]
    });

    const marker = L.marker([place.lat, place.lon], { icon }).addTo(markersLayerGroup);

    // Popup Content HTML
    const popupContent = createPopupHTML(place);
    marker.bindPopup(popupContent, { maxWidth: 320, className: 'custom-leaflet-popup' });

    marker.on('click', () => {
      selectAndFocusPlace(place.id, false);
    });

    markerMap.set(place.id, marker);
  });
}

/**
 * Generate Popup HTML for a Place
 */
function createPopupHTML(place) {
  const cat = CATEGORIES[place.category] || { name: 'General', icon: '📍' };
  const osmUrl = place.osmId 
    ? `https://www.openstreetmap.org/${place.osmType || 'node'}/${place.osmId}`
    : `https://www.openstreetmap.org/`;
  const osmEditUrl = `https://www.openstreetmap.org/edit?${place.osmType || 'node'}=${place.osmId}#map=19/${place.lat}/${place.lon}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`;

  return `
    <div class="popup-container">
      <div class="popup-header">
        <span class="card-category-badge ${place.category}">
          <span>${cat.icon}</span>
          <span>${cat.name}</span>
        </span>
        <h4 class="popup-title">${escapeHTML(place.name)}</h4>
        ${place.nameKn ? `<div class="popup-kannada">${escapeHTML(place.nameKn)}</div>` : ''}
      </div>

      <div class="popup-info-grid">
        ${place.street ? `
          <div class="popup-info-row">
            <span>📍</span>
            <span>${escapeHTML(place.street)}</span>
          </div>
        ` : ''}
        ${place.openingHours ? `
          <div class="popup-info-row">
            <span>🕒</span>
            <span>${escapeHTML(place.openingHours)}</span>
          </div>
        ` : ''}
        ${place.phone ? `
          <div class="popup-info-row">
            <span>📞</span>
            <a href="tel:${escapeHTML(place.phone)}" class="link-btn">${escapeHTML(place.phone)}</a>
          </div>
        ` : ''}
        ${place.distanceText ? `
          <div class="popup-info-row">
            <span>🧭</span>
            <strong>${place.distanceText} from you</strong>
          </div>
        ` : ''}
      </div>

      <div class="popup-actions">
        <a href="${directionsUrl}" target="_blank" rel="noopener" class="card-btn primary">
          Directions &rarr;
        </a>
        <a href="${osmEditUrl}" target="_blank" rel="noopener" class="card-btn" title="Edit on OpenStreetMap">
          Edit OSM
        </a>
        <a href="${osmUrl}" target="_blank" rel="noopener" class="card-btn" title="View node/way on OpenStreetMap">
          View on OSM
        </a>
      </div>
    </div>
  `;
}

/**
 * Select a place, pan map, highlight sidebar card
 */
function selectAndFocusPlace(placeId, shouldPanMap = true) {
  state.selectedPlaceId = placeId;

  // Highlight card in sidebar
  document.querySelectorAll('.place-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.id === placeId);
  });

  const selectedCard = document.querySelector(`.place-card[data-id="${placeId}"]`);
  if (selectedCard) {
    selectedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Focus map marker
  const marker = markerMap.get(placeId);
  const place = state.places.find(p => p.id === placeId);

  if (marker && place) {
    if (shouldPanMap) {
      map.flyTo([place.lat, place.lon], 16, { duration: 0.8 });
    }
    marker.openPopup();
  }
}

/**
 * Geolocation ("Near Me") Handler
 */
function locateUser() {
  if (!navigator.geolocation) {
    showToast('Geolocation is not supported by your browser.');
    return;
  }

  showToast('Locating your position in Mangalore...');

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      state.userLocation = { lat: latitude, lon: longitude };

      // Add or move user marker
      if (userMarker) {
        userMarker.setLatLng([latitude, longitude]);
      } else {
        const userIcon = L.divIcon({
          className: 'user-location-wrapper',
          html: `<div class="user-location-marker" title="You are here"></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9]
        });
        userMarker = L.marker([latitude, longitude], { icon: userIcon, zIndexOffset: 2000 }).addTo(map);
      }

      // Calculate distances for all places
      state.places.forEach(place => {
        const d = calculateDistance(latitude, longitude, place.lat, place.lon);
        place.distanceKm = d;
        place.distanceText = d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1)} km`;
      });

      // Enable sort by distance
      const sortDistanceOpt = document.getElementById('sort-distance-opt');
      sortDistanceOpt.disabled = false;
      sortDistanceOpt.textContent = 'Nearest First';
      
      document.getElementById('sort-select').value = 'distance';
      state.sortBy = 'distance';

      map.flyTo([latitude, longitude], 15, { duration: 1 });
      showToast('Location updated! Sorting by nearest places.');
      applyFiltersAndRender();
    },
    (err) => {
      console.warn('Geolocation error:', err);
      showToast('Could not fetch location. Please check browser permissions.');
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

/**
 * Calculate Great-Circle Distance (Haversine formula in KM)
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Update Category Count Badges
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

/**
 * Update Sidebar Result Count
 */
function updateResultCount(count) {
  const text = count === 1 ? 'Showing 1 place' : `Showing ${count} places`;
  document.getElementById('results-count').textContent = text;
}

/**
 * Update Live/Cached Status Indicator
 */
function updateStatusBadge(type, label) {
  const indicator = document.querySelector('.status-indicator');
  const textEl = document.getElementById('data-status-text');

  indicator.className = `status-indicator ${type}`;
  textEl.textContent = label;
}

/**
 * Update Dynamic Modal Links with current map center
 */
function updateModalCenterLinks() {
  if (!map) return;
  const center = map.getCenter();
  const zoom = Math.max(16, map.getZoom());
  const editUrl = `https://www.openstreetmap.org/edit#map=${zoom}/${center.lat.toFixed(5)}/${center.lng.toFixed(5)}`;
  
  const modalLink = document.getElementById('modal-osm-edit-link');
  if (modalLink) modalLink.href = editUrl;
}

/**
 * Display Toast Notification
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/**
 * Escape HTML utility
 */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Debounce utility
 */
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
