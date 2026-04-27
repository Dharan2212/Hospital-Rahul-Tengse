# Phase 6 — Batch 6.1 Summary: Appointment Wizard UI

## Pre-development audit result

The uploaded current project ZIP was inspected before development. The codebase includes the Vite/Tailwind foundation, routing/layout shell, homepage sections through Batch 4.2, common components, and motion utilities. The uploaded ZIP did not include the previously generated Phase 5 inner-page updates, but that gap does not block Batch 6.1 because this batch only modifies the Appointment page and creates appointment-specific data, validation, and components.

## Pre-development corrections

No previous-batch blocking correction was required for Batch 6.1.

## Files created

- `src/data/appointmentData.js`
- `src/utils/validation.js`
- `src/components/appointment/AppointmentForm.jsx`
- `src/components/appointment/StepIndicator.jsx`
- `src/components/appointment/Step1Type.jsx`
- `src/components/appointment/Step2Details.jsx`
- `src/components/appointment/Step3Schedule.jsx`
- `src/components/appointment/Step4Review.jsx`
- `src/components/appointment/Step5ThankYou.jsx`
- `src/components/appointment/index.js`
- `docs/batch-6.1-summary.md`

## Files modified

- `src/pages/Appointment.jsx`
- `src/styles/globals.css`
- `README.md`

## Appointment wizard behavior

Batch 6.1 implements a 5-step frontend appointment wizard:

1. Type
2. Details
3. Schedule
4. Review
5. Submitted placeholder

The fifth step is intentionally a Batch 6.1 handoff placeholder. It does not submit data, open WhatsApp, or display the final thank-you confirmation. Final submission behavior is reserved for Batch 6.2.

## Validation rules implemented

Validation is implemented with Zod schemas in `src/utils/validation.js` and React Hook Form state management in `AppointmentForm.jsx`.

Rules implemented:

- Appointment type is required.
- Patient name is required, 2–80 characters, letters and spaces only.
- Age is required, integer, 1–120.
- Gender is required.
- Mobile number is required and must match Indian mobile format `/^[6-9]\d{9}$/`.
- City/location is required, 2–60 characters.
- Preferred date is required, today or future date, maximum 90 days ahead.
- Preferred time is optional but must be Morning, Afternoon, or Evening when provided.
- Symptoms/message is optional and limited to 500 characters.

## Accessibility notes

- Appointment page keeps exactly one H1 through `PageHero`.
- Inputs use visible labels, not placeholder-only labels.
- Error messages are visible and connected with `aria-describedby`.
- Radio groups are presented with `fieldset` and `legend`.
- Step indicator uses labels, numbers/checkmarks, and `aria-current`.
- Buttons are keyboard-accessible and meet minimum touch target expectations.
- Review edit controls are buttons.

## Reduced-motion notes

Step transitions use the existing Batch 3.2 `appointmentStepMotion()` utility. Reduced motion converts movement to opacity-only transitions.

## Deferred to Batch 6.2

Batch 6.2 will implement:

- WhatsApp message generation
- WhatsApp redirect
- final thank-you state
- Call Now fallback after submit
- reset or submit another request behavior

## What was intentionally not touched

- No WhatsApp redirect
- No WhatsApp message builder
- No final thank-you confirmation
- No backend/API submission
- No image asset changes
- No unrelated page changes
- No fake phone or WhatsApp number
- No Phase 7 work

## Tests/checks performed

Static checks performed:

- Appointment page H1 count check
- Appointment component file existence check
- React Hook Form usage check
- Zod schema usage check
- Required validation message check
- Review disclaimer check
- Step 5 placeholder text check
- No `wa.me`, `api.whatsapp.com`, `window.open`, or submitted-confirmation text introduced

## Build/lint result

Build/lint could not run in this sandbox because dependencies are not installed:

- `vite: not found`
- `eslint: not found`

Run locally after applying the ZIP:

```bash
npm install
npm run build
npm run lint
```

## Risks/blockers

- Local build/lint must be verified after installing dependencies.
- Final contact/WhatsApp number remains pending client confirmation.
- Final WhatsApp flow is intentionally deferred to Batch 6.2.

## Next batch

Phase 6 — Batch 6.2: WhatsApp Submit + Thank You
