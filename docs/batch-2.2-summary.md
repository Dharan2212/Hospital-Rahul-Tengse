# Phase 2 — Batch 2.2 Summary

## Batch completed

Phase 2 — Batch 2.2: Routing + Layout Shell.

## Created

- `src/data/siteData.js`
- `src/data/navigationData.js`
- `src/routes/AppRoutes.jsx`
- `src/components/layout/Header.jsx`
- `src/components/layout/MobileMenu.jsx`
- `src/components/layout/Footer.jsx`
- `src/utils/contactLinks.js`
- Placeholder pages for all locked routes
- `src/pages/NotFound.jsx`

## Modified

- `src/App.jsx`
- `src/styles/globals.css`
- `README.md`

## Routes added

- `/`
- `/about`
- `/services`
- `/dialysis-care`
- `/kidney-transplant-guidance`
- `/patient-awareness`
- `/media-news`
- `/gallery`
- `/appointment`
- `/contact`
- `*` fallback

## Layout shell

The app now uses BrowserRouter, Header, main content region, AppRoutes, Footer, and a skip-to-content link.

## Accessibility basics

- Semantic header/nav/main/footer structure
- Skip-to-content link
- Mobile menu `aria-expanded`
- Drawer Escape close
- Overlay close
- Active route state
- Safe disabled-style call link when phone is unconfirmed

## Checks performed

Static file validation was performed. Dependency installation, build, and lint should be run locally after applying this batch over Batch 2.1.

## Intentionally not touched

- No full homepage sections
- No inner page content build
- No appointment wizard
- No design-system component batch
- No SEO Helmet metadata batch
- No image imports
- No Phase 3 work

## Next batch

Phase 3 — Batch 3.1: Design System Components.
