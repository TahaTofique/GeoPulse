# GeoPulse

GeoPulse is an immersive Earth intelligence experience built around a living, full-screen map. It brings seismic activity, atmospheric conditions, orbital context, and place exploration into one premium dark-mode interface.

## Highlights

- Full-screen animated Earth surface with moving cloud cover, star field, scan lines, and ambient lighting
- Live USGS earthquake feed with pulsing geographic markers and a continuously populated event feed
- Premium event detail panel: magnitude, depth, coordinates, timestamp, risk, and activity sparkline
- Search-and-fly interactions for major world cities, location-aware “Near me” action, map controls, and keyboard shortcuts
- Layer controls for earthquakes, cloud cover, ISS and future intelligence streams
- Earth Replay timeline with scrubbable event visibility
- Responsive floating controls designed for desktop, tablet, and mobile screens
- First-visit cinematic boot sequence that synchronizes feeds before revealing the application

## Getting started

This version is dependency-free and can be opened directly in any modern browser:

1. Open `index.html`.
2. Wait for the short Earth synchronization sequence.
3. Select an earthquake marker or event feed item to inspect it.

For local development, serve the directory with any static web server. A network connection enables the USGS live earthquake feed; a graceful cached activity state is shown if it cannot be reached.

## Architecture

```
index.html   Semantic application structure and overlays
style.css    Visual system, animations, responsive layouts, Earth surface
app.js       Live data integration and interface interactions
```

The experience is intentionally implemented as a lightweight static prototype so it runs without an installation step. Its UI modules map cleanly to a future React/Vite feature architecture:

```
features/
  earthquakes/  feed, marker layer, event panel
  earth/        map surface, clouds, timeline
  search/       destination search and fly-to
  location/     user location conditions
components/     glass panels, controls, ticker
```

## Data APIs

- [USGS Earthquake GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) — current global seismic events
- Browser Geolocation API — optional user location for the “Near me” view

## Interactions

- `Cmd/Ctrl + K` — focus place search
- `L` — show/hide the layer sidebar on compact screens
- `Esc` — dismiss search results or an event panel
- Timeline play button — start/pause Earth Replay

## Deployment

Deploy the four static files to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host. No build step or environment variables are required for the present implementation.

## Roadmap

- MapLibre GL basemap and globe projection
- Open-Meteo weather overlays and OpenAQ readings
- NASA APOD, moon phase, and solar activity
- Flights, vessels, wildfires, lightning, and satellite traffic
- Saved locations, rich notifications, screenshots, and share cards
- React 19, TypeScript, TanStack Query, Framer Motion, and test coverage for the production application

## Screenshots

Capture the map view and an open seismic event panel after launching the application to populate this section.
