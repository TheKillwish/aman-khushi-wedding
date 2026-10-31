# Aman & Khushi Wedding Website

A responsive Angular standalone single-page wedding invitation. Images are intentionally placeholders and can be added later.

## Requirements
- Node.js version supported by your installed Angular CLI (for Angular 21, use a supported Node 20.19+, 22.12+, or 24+ release)
- npm

## Run locally
```bash
npm install
npm start
```
Open http://localhost:4200.

## Build
```bash
npm run build
```
The static production output is `dist/aman-khushi-wedding/browser`.

## Netlify
This repository includes `netlify.toml`. Connect the GitHub repository to Netlify; the build command and publish directory are already configured.

## Add images later
- Couple portrait: replace the CSS placeholder inside `src/app/components/welcome/welcome.component.html` with an `<img>` using `src/assets/images/couple/`.
- Story photo: `src/app/components/our-story/our-story.component.html`.
- Gallery: update `src/app/components/engagement-gallery/engagement-gallery.component.ts` to use an image path array, then bind each tile to its image.
- Venue QR: replace the QR placeholder in `venue-map.component.html` with your actual QR image in `src/assets/qr/`.

## Update event information
Event dates and titles are in `src/app/components/wedding-events/wedding-events.component.ts`. Baraat and Preeti Bhoj timing is in `baraat.component.html`. Venue details are in `venue-map.component.ts`.
