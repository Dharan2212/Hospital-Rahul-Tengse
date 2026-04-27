# Dr. Rahul Tengse — Kidney Specialist Website

Frontend-only doctor personal-brand and hospital-association website for Dr. Rahul Tengse, Consultant Nephrologist / Kidney Specialist in Parbhani.

## Source of truth

The locked project reference is `Dr. Rahul Tengse — Kidney Specialist Website Frontend UI/UX Blueprint v2.0`.

## Current batch status

Completed through: **Phase 9 — Batch 9.1 Responsive QA + Compliance Review**

Per-page SEO metadata, OG/Twitter tags, canonical URLs, Schema JSON-LD, sitemap/robots, and WCAG accessibility pass are implemented.

Phase 9 responsive QA and compliance cleanup applied final source-level fixes for navigation breakpoints, mobile drawer sizing, contact placeholder safety, appointment wording, and narrow-screen wrapping. Final command-based build/lint rerun and ZIP packaging must be completed when command execution is available.

Phase 1 asset-preparation outputs are preserved. Images remain pending client approval and must not be imported into frontend pages until approved and optimized.

## Routes

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
- `*` fallback: Page Not Found

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router v6
- React Hook Form
- Zod
- Lucide React
- React Helmet Async
- Radix UI Dialog
- Radix UI Accordion

## Setup

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Environment variables

Copy `.env.example` to `.env` when local values are confirmed.

```bash
VITE_WHATSAPP_NUMBER=
VITE_API_BASE_URL=
VITE_SITE_URL=
```

Do not add fake phone numbers, WhatsApp numbers, domains, or API URLs.

## Design system status

Batch 3.1 added reusable common design-system components: Button, Container, SectionHeader, AnimatedCard, CTASection, Disclaimer, and PageHero.

Batch 3.2 added the reusable motion system: centralized Framer Motion utilities, reduced-motion helpers, MotionReveal, StaggerGroup, FloatingMotion, and refactored motion behavior for AnimatedCard, MobileMenu, and CTASection.

Batch 4.1 implemented the homepage hero and trust highlight sections using safe data-driven content, approved-image checks, reduced-motion-safe animation utilities, and a placeholder visual because approved doctor images are not available yet.

Batch 4.2 completed the remaining homepage sections from About Doctor Preview through Contact Preview using safe placeholder visuals, data-driven services/FAQs, media/gallery approval gates, and medically compliant language.

Batch 6.1 implements the appointment wizard UI, React Hook Form state management, Zod validation, step flow, and review screen.

Batch 6.2 completes the frontend appointment submission flow. The form now generates the locked WhatsApp appointment request message, opens WhatsApp only when a confirmed `VITE_WHATSAPP_NUMBER` is configured, and shows a safe thank-you/fallback state without instant-confirmation claims.

Batch 7.1 completes animation polish across hero, cards, drawer, modal, FAQ, CTA pulse, media/gallery hover states, and appointment transitions with centralized motion utilities and reduced-motion support.

Phase 8 Batch 8.1 implements the SEO and accessibility foundation: central metadata utilities, React Helmet Async page metadata, safe Schema.org JSON-LD, robots/sitemap updates, NotFound noindex, focus/keyboard improvements, and SEO/accessibility documentation.

Phase 9 Batch 9.1 completes the source-level responsive QA and compliance cleanup pass, including small breakpoint, drawer, wrapping, placeholder-safety, and appointment wording fixes. Final browser/command verification is pending because local command execution was blocked during the handoff run.

## Notes

Inner pages in the attached base may need the latest Phase 5 ZIP applied if not already present. SEO Helmet implementation and approved image usage are scheduled for later batches. Pending or unapproved images must not be imported into frontend pages. Do not configure a WhatsApp number until the client confirms the final reception/doctor WhatsApp destination.
