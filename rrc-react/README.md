# RRC Next.js

This app runs on Next.js (pages router) and renders the existing static content with shared routing and assets.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```

## Content

Page components live in `src/content/pages.jsx` and are rendered via `StaticPage` alongside per-page CSS from `public/assets`.
