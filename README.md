# Kudla Suttu | ಕುಡ್ಲ ಸುತ್ತು

**Kudla Suttu** is an open-source local utility map for discovering and improving everyday places around **Mangalore (Kudla), Karnataka** using [OpenStreetMap](https://www.openstreetmap.org) (OSM) data.

Rather than being a generic directory or single-purpose store finder, Kudla Suttu focuses on essential, high-utility everyday needs: finding a nearby hardware shop for sudden plumbing/electrical fixes, getting an urgent printout or xerox near campus, finding a working cobbler or mobile repair technician, spotting clean drinking water points and public washrooms, catching the right bus stop, or discovering budget-friendly local food spots.

---

## 🎯 Why Open-Source & OpenStreetMap?

1. **Community-Owned Data**: Proprietary map platforms often miss small neighbourhood repair shacks, public water fountains, community toilets, or xerox shops. On OpenStreetMap, anyone in Kudla can add or correct data permanently for the entire community.
2. **Privacy & No Tracking**: Kudla Suttu runs as a pure static web app without tracking cookies, accounts, or proprietary lock-in.
3. **Always Free & Open**: The map data is licensed under the Open Database License (ODbL) and the code is open under the MIT License.

---

## 🛠️ Core MVP Utility Categories

| Category | Icon | What it covers | Key OSM Tags |
|---|---|---|---|
| **Hardware & Supplies** | 🔧 | Hardware, paint, electrical, plumbing, sanitaryware, tools, building supplies | `shop=hardware`, `shop=paint`, `shop=electrical`, `shop=plumbing`, `shop=building_materials` |
| **Repair Services** | ⚙️ | Mobile screen/battery, laptop care, bike/motorcycle clinic, cobbler, tailor | `shop=electronics_repair`, `shop=mobile_phone`, `shop=motorcycle_repair`, `craft=shoemaker`, `craft=tailor` |
| **Stationery & Xerox** | 📚 | Photocopying, printouts, spiral binding, college supplies, books | `shop=stationery`, `shop=copyshop`, `shop=books` |
| **Pharmacies & Clinics** | 💊 | 24x7 medical stores, chemists, outpatient clinics | `amenity=pharmacy`, `amenity=chemist`, `amenity=clinic` |
| **Public Toilets** | 🚻 | Sulabh Shouchalays, pay-and-use washrooms, railway/bus station washrooms | `amenity=toilets` (`fee=yes/no`) |
| **Drinking Water** | 💧 | Clean RO water dispensers, public drinking water kiosks, park taps | `amenity=drinking_water` |
| **Bus Stops & Transit** | 🚌 | State Bank City Bus Stand, Bejai KSRTC terminal, route bus stops | `highway=bus_stop`, `amenity=bus_station` |
| **Budget & Student Food** | ☕ | Vegetarian tiffin messes, snack points, cafes, student-friendly eateries | `amenity=restaurant`, `amenity=cafe`, `amenity=fast_food` |

---

## 🗺️ How it Works

1. **Leaflet.js + OSM Standard Tiles**: Interactive map centered directly on Mangalore (`12.9141° N, 74.8560° E`).
2. **Overpass API Ingestion**: Live Overpass QL queries fetch nodes and ways matching the utility categories across the Mangalore bounding box (`12.80, 74.80, 13.02, 74.96`).
3. **Resilient Seed Fallback**: Contains a curated baseline seed dataset for Mangalore (Hampankatta, Kadri, Kankanady, Bejai, Car Street, Balmatta, Bunder, Surathkal) so the tool works instantly offline or during Overpass rate limits.
4. **Geolocation ("Near Me")**: Calculates real-time distance and sorts places nearest to the user.
5. **Direct OSM Contribution Workflow**: One-click links open OpenStreetMap's built-in **iD Editor** centered at the current map view coordinates to add missing shops or update opening hours and phone numbers.

---

## 🤝 How to Contribute Local Data

### Step 1: Open OpenStreetMap iD Editor
Click **"Add / Edit Place at Map View"** inside Kudla Suttu, or visit [openstreetmap.org/edit](https://www.openstreetmap.org/edit). You can sign up with Google, GitHub, or email in seconds.

### Step 2: Add a Feature
- Click **"Point"** at the top toolbar and click on the shop or facility location.
- Type the category (e.g. `Hardware Store`, `Drinking Water`, `Shoemaker`, `Pharmacy`).

### Step 3: Add Accurate Local Tags
Add useful information for Kudla residents:

```ini
name=Coastal Hardware & Paints
name:kn=ಕೋಸ್ಟಲ್ ಹಾರ್ಡ್‌ವೇರ್ & ಪೇಂಟ್ಸ್
name:tcy=ಕೋಸ್ಟಲ್ ಹಾರ್ಡ್‌ವೇರ್
addr:street=Kadri Temple Road, Kadri
phone=+91 824 2218900
opening_hours=Mo-Sa 08:30-20:00
wheelchair=yes
```

---

## 🚀 Running Locally

Kudla Suttu is a static frontend with **no build step** and **no backend required**.

```bash
# Clone the repository
git clone https://github.com/<your-username>/kudla-suttu.git
cd kudla-suttu

# Start any static server (Python or Node.js)
python -m http.server 8085
```
Open **`http://localhost:8085`** in your browser.

---

## 🧭 Future Roadmap

- 🌐 **Multilingual UI Support**: Full Kannada (ಕನ್ನಡ), Tulu (ತುಳು), and Konkani UI language options.
- ♿ **Accessibility & Wheelchair Mapping**: Highlight step-free entrances and accessible washrooms across Mangalore.
- 📶 **Offline PWA Support**: Installable progressive web app with cached local utility datasets for field volunteers.
- 🗺️ **Community Mapathons**: Collaborative mapping drives in partnership with Mangalore colleges and civic groups.

---

## 📄 License

- **Source Code**: [MIT License](LICENSE)
- **Map Data**: &copy; [OpenStreetMap contributors](https://www.openstreetmap.org/copyright) (ODbL)
