# Kudla Suttu — Design System & Tokens (Google Stitch Spec)

An accessible, modern civic utility design system tailored for **Mangalore (Kudla), Karnataka**, combining coastal regional identity with modern UI patterns.

---

## 🎨 Color Palette & Tokens

### Primary Palette (Arabian Sea Teal)
- `--teal-950: #041f23` (Deepest Navy Teal)
- `--teal-900: #08373d` (Primary Header Background)
- `--teal-800: #0d545c` (Primary Brand Solid)
- `--teal-700: #14727d` (Interactive Hover)
- `--teal-600: #1a8f9c` (Accent Borders)
- `--teal-100: #e1f2f4` (Light Soft Container)
- `--teal-50:  #f0f8f9` (Subtle Tint Background)

### Accent Palette (Coastal Coral & Terracotta)
- `--coral-700: #b83f25` (Dark Coral Pressed)
- `--coral-600: #d95338` (Primary Action Brand)
- `--coral-500: #eb694e` (Hover Light)
- `--coral-100: #fdeee9` (Badge Background)
- `--coral-50:  #fff7f5` (Ultra Light Tint)

### Neutral Canvas (Sandstone & Handmade Linen)
- `--sand-900: #26221c` (Deepest Charcoal Tint)
- `--sand-700: #544d41` (Secondary Body Text)
- `--sand-500: #887e6d` (Muted Placeholder & Meta)
- `--sand-300: #d4cbba` (Active Borders)
- `--sand-200: #e6dfce` (Subtle Divider Lines)
- `--sand-100: #f3ede1` (Card Neutral Surface)
- `--sand-50:  #faf7f2` (App Body Canvas)

---

## 📐 Typography Hierarchy

- **Primary Font**: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
- **Kannada Script**: `'Noto Sans Kannada', 'Plus Jakarta Sans', sans-serif`

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `text-display` | 1.35rem (22px) | 800 | 1.15 | Brand titles |
| `text-h1` | 1.15rem (18px) | 800 | 1.25 | Section & Drawer headers |
| `text-h2` | 0.95rem (15px) | 700 | 1.3 | Place card titles |
| `text-body` | 0.85rem (13.6px) | 400 / 500 | 1.45 | Descriptions & metadata |
| `text-caption` | 0.74rem (11.8px) | 600 / 700 | 1.3 | Category badges, distance, chips |
| `text-micro` | 0.68rem (10.8px) | 700 | 1.2 | Count badges & status tags |

---

## 🧱 Component Specs

### 1. Interactive Category Chips
- Pill geometry with `border-radius: 9999px`.
- Left-aligned icon + bold label + counter pill.
- Active state: Deep Teal background with subtle box shadow + Coral active pip.

### 2. 3-Step Civic Contribution Strip
- Minimal step pills with connected directional arrows.
- Micro numeric badge (`1`, `2`, `3`) with Coral circular container.

### 3. Place Directory Card
- Paper texture card surface (`#ffffff`) with 1px border (`#ece5d8`).
- Hover elevation (`translateY(-2px)` + soft dual-layer shadow).
- Clear metadata icon rows: Address, Hours, Clickable Telephone (`tel:`).
- One-tap action buttons: "Show on Map", "Directions", "Edit on OSM".

### 4. Custom Leaflet Markers
- 32x32px circular SVG badge with high-contrast category icon.
- White 2px border + 3px ambient shadow.
- Hover bloom scaling (`transform: scale(1.22)`).
