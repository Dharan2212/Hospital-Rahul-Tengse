# Batch 3.2 — Motion Utilities System

## Batch title

Phase 3 — Batch 3.2: Motion Utilities

## Motion principles

The motion system centralizes animation behavior for the Dr. Rahul Tengse Kidney Specialist Website. Motion must support trust, clarity, and a premium medical user experience. It must never create panic, urgency pressure, or motion-only meaning.

Core principles:

- Use Framer Motion consistently.
- Keep motion lightweight and mobile-safe.
- Respect `prefers-reduced-motion`.
- Use one shared motion utility file instead of scattered hardcoded values.
- Avoid continuous animations except small decorative future floating icons.
- Keep reveal animations viewport-based and `once: true` by default.
- Do not animate content in a way that blocks reading or navigation.

## Blueprint timing table

| Pattern | Motion | Duration | Easing | Reduced motion behavior |
|---|---|---:|---|---|
| Hero text | Fade up from `y:30` to `y:0` | 0.6s | easeOut | Opacity only, max 0.15s |
| Hero image | Slide from `x:60` to `x:0` | 0.7s with 0.2s delay | easeOut | Opacity only, max 0.15s |
| Floating icons | `y: [0, -12, 0]` loop | 3.5s | easeInOut | Disabled |
| Trust cards | Stagger fade-up | 0.5s, 0.08s stagger | easeOut | Opacity only |
| Service hover | Lift `y:-6` | 0.4s | easeOut | Disabled |
| Media hover | Image zoom `scale:1.06` | 0.35s | easeOut | Disabled |
| Modal | Fade + scale `0.95 → 1` | 0.3s | easeOut | Opacity only |
| Appointment step | Slide `x:40 → 0`, exit `x:-40` | 0.35s | easeInOut | Opacity only |
| FAQ accordion | Height `0 → auto` | 0.3s | easeInOut | Max 0.15s |
| Mobile drawer | `x:100% → 0` | 0.28s | easeOut | Opacity only |
| Menu items | Stagger fade-up | 0.3s, 0.06s stagger | easeOut | Opacity only |
| CTA pulse | `scale: [1, 1.04, 1]` loop | 3s | easeInOut | Disabled |
| Section reveal | Viewport fade-up | 0.5s | easeOut | Opacity only |

## Utility files created

### `src/utils/motion.js`

Central export file for reusable animation patterns:

- `easings`
- `durations`
- `viewportReveal`
- `fadeUp`
- `fadeIn`
- `slideInLeft`
- `slideInRight`
- `heroTextMotion()`
- `heroImageMotion()`
- `sectionRevealMotion()`
- `cardRevealMotion()`
- `staggerContainer()`
- `staggerItem()`
- `drawerOverlayMotion()`
- `drawerPanelMotion()`
- `menuItemMotion()`
- `menuStaggerContainer()`
- `modalBackdropMotion()`
- `modalContentMotion()`
- `accordionContentMotion()`
- `appointmentStepMotion()`
- `ctaPulseMotion()`
- `floatingIconMotion()`
- `hoverLiftMotion()`
- `mediaImageHoverMotion()`

### `src/hooks/useReducedMotionPreference.js`

Small hook that wraps Framer Motion `useReducedMotion()` and returns a boolean.

## Components created

### `MotionReveal`

Reusable viewport reveal wrapper.

Example:

```jsx
<MotionReveal as="section" direction="up" delay={0.1}>
  <SectionHeader heading="Kidney Care Services" />
</MotionReveal>
```

Use for future page sections, cards, and content blocks.

### `StaggerGroup`

Reusable parent wrapper for staggered child animation. Future child components can use variants from `staggerItem()`.

Example:

```jsx
<StaggerGroup as="ul" staggerDelay={0.08}>
  {items.map((item) => (
    <motion.li key={item.id} variants={staggerItem()}>{item.title}</motion.li>
  ))}
</StaggerGroup>
```

### `FloatingMotion`

Small wrapper for future decorative medical icons. It disables looping motion automatically for reduced-motion users.

Example:

```jsx
<FloatingMotion delay={0.2}>
  <KidneyIcon aria-hidden="true" />
</FloatingMotion>
```

## Components refactored

### `AnimatedCard`

Now uses centralized `cardRevealMotion()` and `hoverLiftMotion()`.

### `MobileMenu`

Now uses centralized drawer overlay, drawer panel, and menu item motion utilities.

### `CTASection`

Now supports optional `pulsePrimary` prop. The pulse is disabled automatically for reduced-motion users and is off by default.

## Reduced motion behavior

Reduced motion is handled through:

- `useReducedMotionPreference()` hook
- utility functions in `src/utils/motion.js`
- CSS fallback in `src/styles/globals.css`

When reduced motion is active:

- translate/scale reveal motions become opacity-only fades
- floating icon animations are disabled
- CTA pulse animation is disabled
- durations are capped at 0.15s
- looping decorative animation is avoided

## Mobile motion rules

Future page batches should:

- keep large layout reveal animations to 0.35s or below on mobile where possible
- avoid long stagger chains on mobile
- avoid animating large images repeatedly
- keep modal/drawer animation simple
- use viewport reveal only once per section

## How to use motion utilities in future pages

Use `MotionReveal` for section entry, `AnimatedCard` for reusable cards, and raw utilities only when a custom Framer Motion wrapper is needed.

Recommended future patterns:

- Hero text: `heroTextMotion(reducedMotion)`
- Hero image: `heroImageMotion(reducedMotion)`
- Service cards: `cardRevealMotion()` + `hoverLiftMotion()`
- Gallery modal: `modalBackdropMotion()` + `modalContentMotion()`
- FAQ accordion: `accordionContentMotion()`
- Appointment wizard: `appointmentStepMotion()`

## What not to do

Do not:

- hardcode random durations in page files
- add urgency/panic motion around medical CTAs
- run infinite animation when reduced motion is active
- make content accessible only after animation
- animate patient-sensitive content or unapproved images
- use motion to imply guaranteed medical outcomes or instant appointments

## Accessibility notes

Motion must never replace semantic structure, headings, focus states, or descriptive text. Animated content must remain keyboard accessible and readable with animations disabled.

## Performance notes

- Viewport reveal should use `once: true` by default.
- Continuous animation is limited to small decorative icons.
- Avoid animating layout-heavy properties when possible.
- Do not introduce new animation dependencies.

## Handoff notes for Phase 4 homepage batches

Phase 4 can now reuse:

- `heroTextMotion()` for hero copy
- `heroImageMotion()` for approved doctor image later
- `MotionReveal` for homepage sections
- `StaggerGroup` for trust cards
- `AnimatedCard` for reusable card blocks
- `FloatingMotion` for decorative medical icon movement

No homepage sections were built in this batch.
