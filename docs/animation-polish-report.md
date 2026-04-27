# Phase 7 — Animation Polish Report

## Phase title
Phase 7 — Batch 7.1: Full Motion Polish + Reduced Motion Review

## Motion areas audited
- Central motion utilities in `src/utils/motion.js`
- Reduced-motion hook in `src/hooks/useReducedMotionPreference.js`
- Common motion wrappers: `AnimatedCard`, `MotionReveal`, `StaggerGroup`, `FloatingMotion`, `CTASection`
- Mobile drawer animation flow
- Homepage hero, trust cards, service/preview cards, and CTA pulse support
- FAQ accordion motion
- Media/gallery image hover motion
- Gallery image modal motion
- Appointment step transition utility usage

## Issues found
1. Motion constants were present but several hover/modal patterns were not consistently routed through centralized utilities.
2. Reduced-motion handling existed, but the hook relied only on Framer Motion preference and did not provide an explicit media-query fallback.
3. Gallery/media image hover zoom used plain CSS transitions in some places instead of centralized media hover motion.
4. Gallery modal had no centralized fade/scale motion wiring.
5. Large stagger groups needed a safer cap to avoid long mobile stagger chains.

## Fixes applied
- Rebuilt `src/utils/motion.js` around centralized durations, easings, reveal, stagger, drawer, modal, accordion, appointment, CTA pulse, floating icon, hover lift, and media hover utilities.
- Added a media-query fallback to `useReducedMotionPreference()`.
- Updated `AnimatedCard` to use centralized reveal/hover values and motion-safe transform hints.
- Updated `StaggerGroup` to reduce excessive stagger delay for groups with more than 6 children.
- Updated `MediaCard` and `GalleryGrid` to use centralized image hover zoom motion.
- Updated `ImageModal` to use centralized modal backdrop/content motion while preserving Radix Dialog accessibility.
- Added global reduced-motion CSS safeguards for blob/keyframe animations and transform helpers.

## Components updated
- `src/utils/motion.js`
- `src/hooks/useReducedMotionPreference.js`
- `src/components/common/AnimatedCard.jsx`
- `src/components/common/StaggerGroup.jsx`
- `src/components/media/MediaCard.jsx`
- `src/components/gallery/GalleryGrid.jsx`
- `src/components/gallery/ImageModal.jsx`
- `src/styles/globals.css`

## Reduced-motion behavior
When `prefers-reduced-motion: reduce` is active:
- reveal/slide/scale motion becomes opacity-only
- duration is capped to 0.15s
- CTA pulse returns no repeating animation
- floating icon loops return no animation
- modal and drawer remain usable with quick fade behavior
- CSS hero blobs are paused
- transform optimization classes are disabled

## Mobile performance notes
- Stagger delay is capped for larger groups.
- Section reveals use `viewport.once` and `amount: 0.15` by default.
- Hover zoom is localized to media/gallery images only.
- No JS-driven background animation was added.
- No new infinite loops were added beyond the existing reduced-motion-safe floating icon utility.

## Manual QA checklist
- Verify homepage hero text fade-up and visual slide-in.
- Verify floating icons animate only when reduced motion is disabled.
- Verify trust/service cards reveal and hover smoothly.
- Verify mobile drawer opens/closes and Escape still works.
- Verify FAQ accordion expands/collapses smoothly.
- Verify gallery modal opens with fade/scale and closes with Escape.
- Verify appointment step transitions remain smooth and form data is preserved.
- Toggle OS/browser reduced-motion setting and confirm motion reduces to quick fades.

## Remaining risks/blockers
- Build/lint must be verified after installing dependencies locally.
- Approved media/gallery images are still missing, so media/gallery hover/modal behavior is structurally prepared but not visually testable with real assets yet.

## Next phase handoff notes
Phase 8 can proceed with SEO and accessibility work. Keep the centralized motion utilities as the source of truth for any additional animated SEO/accessibility components.
