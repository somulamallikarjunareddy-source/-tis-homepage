# TIS Homepage

Animated homepage redesign for Tulas International School.
Stack: React 18, Vite, Framer Motion, CSS Modules.

## Features
- Custom cursor that scales on links, buttons and `[data-cursor]` elements
- Staggered scroll-triggered reveals (`whileInView`, runs once)
- Animated dark/light theme switch, saved in localStorage
- Spring-smoothed scroll progress bar

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy
Vercel or Netlify: import the repo, build command `npm run build`, output directory `dist`.

## Structure
- `src/components/` UI pieces (cursor, progress, toggle, reveal)
- `src/hooks/useTheme.js` theme state and persistence
- `src/data.js` all page copy
