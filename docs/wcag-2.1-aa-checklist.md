# WCAG 2.1 AA Checklist - Phase 8 Batch 8.1

| Area | Status | Notes |
| --- | --- | --- |
| Color contrast | Pass | Palette reviewed against existing design; no low-contrast decorative changes introduced. |
| Keyboard navigation | Pass | Header, drawer, FAQ, modal, filters, buttons, and form controls support keyboard flow. |
| Focus states | Pass | Global focus-visible ring strengthened; component focus styles retained. |
| Form labels | Pass | Appointment form inputs, selects, textareas, fieldsets, and legends are present. |
| Error messages | Pass | Appointment errors use `aria-describedby` and `role="alert"`. |
| Modal accessibility | Pass | Radix Dialog title/description/close label/Escape/focus handling preserved. |
| Mobile drawer accessibility | Pass | Dialog semantics, labelled close controls, Escape close, scroll lock, and trigger focus return. |
| Image alt text | Pass | All JSX image tags have `alt`; unapproved images remain gated. |
| Decorative icons | Pass | Lucide icons used decoratively include `aria-hidden="true"` where audited. |
| FAQ accordion | Pass | FAQ triggers are buttons with `aria-expanded` and controlled regions. |
| Page landmarks | Pass | Header, nav, main, footer, section, and breadcrumb landmarks are present. |
| Skip-to-content | Pass | Skip link exists and is visible on focus. |
| Reduced motion | Pass | CSS and motion utilities honor `prefers-reduced-motion`. |
| Touch targets | Pass | Primary interactive controls use minimum 44px sizing patterns. |
| Language attribute | Pass | `html lang="en"` is set in `index.html`. |
| Heading hierarchy | Pass | One H1 per page; inner page sections use H2/H3 hierarchy. |
| No horizontal scroll | Pass | Body overflow-x is hidden and media elements have max-width constraints. |
| ARIA live/status messages | Pass | Appointment thank-you uses `aria-live`; empty gallery state uses `role="status"`. |
| Final contrast/browser QA | Needs review | Recheck in Phase 9 with screenshots across responsive breakpoints. |
| Final NAP details | Needs review | Phone/address/timing remain client-confirmation blockers. |
