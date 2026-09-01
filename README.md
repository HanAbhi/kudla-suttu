# Kudla Suttu | ಕುಡ್ಲ ಸುತ್ತು

**Kudla Suttu** is an open-source civic discovery and hardware/essential services map for **Mangalore (Kudla), Karnataka**. 

Built entirely with OpenStreetMap (OSM) data and Leaflet.js, it empowers residents, students, tradespeople, and visitors to locate essential local services while actively improving open local map data for the community.

---

## 🌟 Features

- **Focused Local Categories**:
  - 🔧 **Hardware & Supplies**: Hardware, paint, electrical, plumbing, tools, and building supplies.
  - ⚙️ **Repair & Craft Services**: Electronics, mobile, motorcycle, bicycle repairs, cobblers/shoemakers, and tailors.
  - 📚 **Stationery & Student Essentials**: Bookstores, xerox/print centers, spiral binding, and office stationery.
  - 💊 **Pharmacies & Healthcare**: 24x7 chemists, medical shops, and outpatient clinics.
  - ☕ **Food & Eateries**: Vegetarian messes, cafes, coastal snack points, and restaurants.
  - 🚻 **Public Toilets & Drinking Water**: Sulabh Shouchalays, pay-and-use washrooms, and free clean drinking water points.
  - 🚌 **Bus Stops & Transit**: Mangalore City Bus Terminus (State Bank), KSRTC Bejai, and city route stops.
- **Fast & Responsive Directory**: Instant client-side search by name, street, or category with synced map markers.
- **Civic Contribution Flow**: 1-click links to OpenStreetMap's built-in **iD Editor** and **OSM Notes** to add missing shops or fix details with accurate coordinates.
- **Resilient Data Architecture**: Queries live OpenStreetMap data via **Overpass API** with fallback to curated Mangalore seed data so the map is always responsive even when offline or during Overpass rate limits.
- **Location-Aware ("Near Me")**: Computes great-circle distances and sorts the directory by nearest places first.
- **Mangalore Coastal Palette**: Styled with coastal teal, warm coral/terracotta, sand parchment, and charcoal slate.

---

## 🚀 Getting Started Locally

Kudla Suttu is a pure client-side static web application with **zero build steps** and no server dependencies.

### Option 1: Open in Any Browser
Simply double-click `index.html` or open it directly in your browser:
```bash
# On Windows PowerShell
Start-Process index.html
```

### Option 2: Run with a Local Static Server
If you use Node.js or Python:
```bash
# Using Python 3
python -m http.server 8080

# Using Node.js (npx serve)
npx serve .
```
Then visit `http://localhost:8080` in your web browser.

---

## 🗺️ How Kudla Suttu Uses OpenStreetMap

1. **Overpass API Query**: When the app starts, it constructs an Overpass QL query covering the Mangalore bounding box `[12.80, 74.80, 13.02, 74.96]`.
2. **Tag Parsing**: It extracts `nodes` and `ways` matching our category tags (e.g., `shop=hardware`, `amenity=toilets`, `craft=shoemaker`).
3. **Dynamic Direct Links**:
   - **View Object**: `https://www.openstreetmap.org/node/<id>`
   - **Edit Object in iD**: `https://www.openstreetmap.org/edit?node=<id>#map=19/<lat>/<lon>`
   - **Add Place at Map Center**: `https://www.openstreetmap.org/edit#map=<zoom>/<lat>/<lon>`

---

## 🤝 How You Can Contribute to OpenStreetMap Mangalore

Any information you add to OpenStreetMap becomes permanent, freely available to everyone, and immediately visible in Kudla Suttu!

### Step 1: Open the iD Web Editor
Click **"Contribute Data"** or **"Add Place at Center"** in Kudla Suttu, or visit [openstreetmap.org](https://www.openstreetmap.org). Log in or create a free account.

### Step 2: Add a Point or Outline
- Click **Point** at the top toolbar and click on the building or shop location.
- Type the category (e.g. `Hardware Store`, `Pharmacy`, `Public Toilets`).

### Step 3: Add Essential Tags & Local Languages
Fill in the form fields. For best local mapping quality in Mangalore:

| Field | OSM Tag | Example |
|---|---|---|
| **English Name** | `name=*` | `Pai Hardware & Paints` |
| **Kannada Name** | `name:kn=*` | `ಪೈ ಹಾರ್ಡ್‌ವೇರ್ & ಪೇಂಟ್ಸ್` |
| **Tulu Name** | `name:tcy=*` | `ಪೈ ಹಾರ್ಡ್‌ವೇರ್` |
| **Street / Locality** | `addr:street=*` | `K.S. Rao Road, Hampankatta` |
| **Phone Number** | `phone=*` | `+91 824 2440123` |
| **Opening Hours** | `opening_hours=*` | `Mo-Sa 09:00-20:00; Su off` |
| **Wheelchair Access** | `wheelchair=*` | `yes` / `limited` / `no` |

### Recommended Tags for Mangalore Essentials

- **Hardware**: `shop=hardware`, `shop=electrical`, `shop=plumbing`, `shop=paint`, `shop=doityourself`, `shop=building_materials`
- **Repairs**: `shop=electronics_repair`, `shop=mobile_phone`, `shop=motorcycle_repair`, `craft=shoemaker`, `craft=tailor`, `craft=electrician`, `craft=plumber`
- **Student Essentials**: `shop=stationery`, `shop=books`, `shop=copyshop`
- **Healthcare**: `amenity=pharmacy`, `amenity=chemist`, `amenity=clinic`
- **Sanitation**: `amenity=toilets`, `fee=yes/no`, `amenity=drinking_water`
- **Transit**: `highway=bus_stop`, `amenity=bus_station`

---

## 📁 Project Structure

```
kudla-suttu/
├── index.html       # Semantic HTML layout, modals, and templates
├── style.css        # Mangalore coastal design system and Leaflet customizations
├── script.js        # Leaflet map logic, Overpass API, seed data, and search/filtering
└── README.md        # Documentation and open-source contributor guide
```

---

## 💡 Future Roadmap

- 🌐 **Multilingual UI Toggle**: Switch app interface between English, Kannada (ಕನ್ನಡ), and Tulu.
- 📱 **PWA & Offline Directory**: Installable web app with offline vector tile caching for field mappers.
- ✅ **Community Verification Flags**: Allow local users to verify if a shop or water point is currently operational.
- 🗺️ **Kudla Mapping Drives**: Coordinate community mapathons with local colleges (NITK, St. Aloysius, Canara, Sahyadri).

---

## 📄 License

- Code: MIT License
- Map Data: &copy; [OpenStreetMap contributors](https://www.openstreetmap.org/copyright) (ODbL)
