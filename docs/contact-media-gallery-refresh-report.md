# Batch 4 — Contact, Media/Gallery Refresh Report

## Contact Updates

### Pages
- **Contact.jsx** — completely refreshed with improved kidney-care wording
  - Hero description: "Reach the team at Shivneri Super Speciality & Surya ICU Hospital, Parbhani, to schedule a kidney care appointment or ask a general query."
  - Section heading: "Hospital contact information" with patient-friendly subtitle
  - Phone card: now shows "+91 8432842222" format with proper ariaLabel
  - Address card: now renders full multi-line address with pincode 431401
  - OPD timing card: shows conditional message if timing not confirmed, with "Call for Timing" CTA
  - Added new "Connect with us" section with social/WhatsApp/email row links

### Social Link Rows (new component in Contact.jsx)
- Each social link is a consistent, accessible, full-width row button
- Instagram, Facebook, WhatsApp, Email all use same SocialLinkRow pattern
- Disabled state with aria-disabled + tabIndex=-1 for unconfirmed links
- ExternalLink icon for confirmed external links (accessibility + UX)

### WhatsApp
- WhatsApp message pre-text updated to professional appointment inquiry wording:
  `Hello, I would like to book an appointment with Dr. Rahul Bhaskarrao Tengse at Shivneri Super Speciality Hospital, Parbhani.`
- Unchanged: still requires `VITE_WHATSAPP_NUMBER` env var — client confirmation required

### Facebook Link
- **siteData.js** — `facebookUrl: 'https://www.facebook.com/share/18xSSn4rsg/'` already present ✓
- **Footer.jsx** — Facebook icon button added alongside Instagram in Column 1 social section
- **Contact.jsx** — Facebook SocialLinkRow added in Connect section
- **schema.js** — `buildSameAsProfiles()` helper now includes both Instagram + Facebook in `sameAs` arrays for Physician and MedicalClinic schemas

---

## Media/News Updates

### mediaData.js
- Items 1–2 (approved): improved title and summary wording
  - Item 1: "Kidney Disease Awareness Drive — Parbhani"
  - Item 2: "Dialysis Care & Patient Support Programme"
- Items 3–6 (pending): 4 structured entries added for news1–4 images
  - Titles: Kidney Transplant Guidance, CKD Community Outreach, Diabetic Kidney Disease Education, World Kidney Day
  - All marked `approvalStatus: 'pending'`, `frontendUseAllowed: false` — will NOT render until images are placed and client approves
  - Clear activation instructions in comments

### MediaNews.jsx
- Hero description improved: professional summary of coverage scope
- Section heading: "Kidney care media coverage" with context paragraph
- New "About this coverage" section added below grid — explains awareness focus
- Pending count notice shown when no approved media (helpful for dev, not intrusive)
- CTA updated: "Request a Kidney Care Consultation" (more specific)

---

## Gallery Updates

### galleryData.js
- Item 1 caption: now describes hospital as "kidney care and multi-speciality facility providing dialysis support and nephrology consultation"
- Item 2 caption: expanded to mention CKD, warning signs, kidney screening
- Item 1 alt: "Shivneri Super Speciality & Surya ICU Hospital building exterior, Parbhani, Maharashtra"
- Item 2 alt: "Kidney health awareness programme poster — Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist, Parbhani"
- Placeholder slot comments added for Doctor Photos and Dialysis Awareness categories

### Gallery.jsx
- Hero description: expanded to list all image categories
- Section description: improved patient-friendly wording
- Secondary CTA added: "View Media Coverage" → /media-news

---

## Footer Updates

### Footer.jsx
- Facebook icon link added alongside Instagram in Column 1
- Both social links only render if `isConfirmedValue()` returns true
- Phone now shows "+91 8432842222" format
- OPD timing: shows safe fallback "Call hospital for OPD timing" if not confirmed
- Address: renders as multi-line with hospital name, address, city/state
- Copyright bar: added hospital name for local SEO benefit

---

## SEO Improvements

### seo.js — updated pages: /media-news, /gallery, /appointment, /contact

| Page | Change |
|------|--------|
| /media-news | Richer title + description including CKD, dialysis, nephrology keywords; added twitterDescription |
| /gallery | Added "awareness programmes", "dialysis care" and "nephrology education" to descriptions |
| /appointment | Added "dialysis care, transplant guidance, report review" to description |
| /contact | Added "WhatsApp, email, address, OPD timing" context; improved ogDescription |

### schema.js
- `buildSameAsProfiles()` helper: returns both Instagram + Facebook if confirmed
- Physician schema now includes sameAs with social profiles
- MedicalClinic schema: refactored to use same buildSameAsProfiles() helper

---

## Accessibility Improvements

- All SocialLinkRow elements: aria-label, aria-disabled, tabIndex=-1 on disabled state
- Contact cards: icon containers use aria-hidden="true"
- Footer social links: aria-label on each social button
- Gallery page: aria-labelledby on section pointing to SectionHeader h2
- Media page: aria-label on privacy notice section, aria-labelledby on grid section
- All new external links: rel="noreferrer noopener"

---

## Items Intentionally Unchanged

- Layout structure — no changes
- Animations/Framer Motion — no changes
- Tailwind design tokens — no changes
- Typography hierarchy — no changes
- Responsive breakpoints — no changes
- Component structure — no changes (only Contact.jsx added SocialLinkRow as a local function)
- Homepage sections — not in scope for this batch
