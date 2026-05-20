# Content Inventory — Dr. Rahul Bhaskarrao Tengse Website
# Phase: Content Refinement | Batch 1

> **Status:** Documentation only. No UI changes made. No production content rewritten.
> **Inspected:** All pages, data files, SEO utilities, schema, image manifest, components.

---

## DOCTOR IDENTITY — CURRENT STATE

| Field | Current Value | Source File | Status |
|-------|--------------|-------------|--------|
| Display Name | Dr. Rahul Bhaskarrao Tengse | `src/data/siteData.js` | ✅ Updated (Bhaskarrao added) |
| Alternate Name | Dr. Rahul Tengse Patil | Not in any file | ⚠️ Not referenced — confirm with client |
| Subtitle | Consultant Nephrologist \| Kidney Disease, Dialysis & Kidney Transplant Guidance | `src/data/siteData.js` | ✅ Active |
| Hero Subtitle | Consultant Nephrologist and Kidney Transplant Physician | `src/data/homeData.js` | ⚠️ Differs from siteData subtitle — inconsistency |
| Qualification | MBBS, MD Medicine, DM Nephrology | `src/data/siteData.js` | ⚠️ DRAFT — client must confirm |
| Qualification (hero) | MBBS \| MD General Medicine \| DM Nephrology | `src/data/homeData.js` | ⚠️ "MD General Medicine" vs "MD Medicine" — inconsistency |
| Specialty | Kidney Specialist | `src/data/siteData.js` | ✅ Active |
| Location | Parbhani, Maharashtra, India | `src/data/siteData.js` | ✅ Active |

---

## PAGE-BY-PAGE CONTENT INVENTORY

---

### PAGE 1 — Home (`/`)

**Source:** `src/pages/Home.jsx` + `src/data/homeData.js`

#### Hero Section (`src/components/home/HomeHero.jsx`)
| Element | Content | Status |
|---------|---------|--------|
| Eyebrow tag | "Advanced Kidney Care in Parbhani" | ✅ Safe |
| H1 | "Dr. Rahul Bhaskarrao Tengse" | ✅ Active |
| Subtitle | "Consultant Nephrologist and Kidney Transplant Physician" | ⚠️ Differs from siteData.doctor.subtitle |
| Qualification | "MBBS \| MD General Medicine \| DM Nephrology" | ⚠️ DRAFT — needs client confirmation |
| Description | "Specialized consultation for kidney disease, dialysis care, kidney transplant guidance, diabetic kidney disease, blood pressure-related kidney problems, and report review." | ✅ Safe |
| Primary CTA | "Book Appointment" → /appointment | ✅ Correct |
| Secondary CTA | "View Services" → /services | ✅ Correct |
| Tertiary CTA | "Call Now" → tel: (phone from siteData) | ✅ Correct |
| Hospital badge | "Consulting at Shivneri Super Speciality & Surya ICU Hospital" | ✅ Safe |

#### Trust Highlights (`src/components/home/TrustHighlights.jsx`)
| Card | Title | Description | Status |
|------|-------|-------------|--------|
| 1 | Experienced Nephrologist | "Specialized kidney care consultation with a patient-focused approach." | ✅ Safe |
| 2 | Dialysis Care | "Guidance for patients who may require or are already undergoing dialysis." | ✅ Safe |
| 3 | Transplant Guidance | "Pre and post kidney transplant guidance with required medical evaluation." | ✅ Safe |
| 4 | Patient Awareness | "Kidney health education to help patients and families understand warning signs." | ✅ Safe |

#### About Doctor Preview (`src/components/home/AboutDoctorPreview.jsx`)
| Element | Content | Status |
|---------|---------|--------|
| Eyebrow | "About the doctor" | ✅ |
| Heading | "Specialized kidney care with a patient-focused approach" | ✅ Safe |
| Para 1 | "Dr. Rahul Bhaskarrao Tengse provides kidney care with a patient-focused approach..." | ✅ |
| Para 2 | "The website uses a medically safe patient-awareness approach..." | ⚠️ Sounds meta/internal — should be replaced with real content |
| Para 3 | "Final qualification details, OPD timing, and image approval must be confirmed..." | 🚨 PLACEHOLDER — must be replaced before launch |
| CTA | "Read Full Profile" → /about | ✅ |

#### Hospital Association Preview (`src/components/home/HospitalAssociationPreview.jsx`)
| Element | Content | Status |
|---------|---------|--------|
| Heading | "Consulting at Shivneri Super Speciality & Surya ICU Hospital" | ✅ |
| Association line | "Hospital association shown for patient convenience and care coordination." | ⚠️ Placeholder/generic — needs better copy |
| Location | "Parbhani, Maharashtra, India" | ✅ |
| CTA | "Contact Hospital" → /contact | ✅ |

#### Services Overview (`src/components/home/ServicesOverview.jsx`)
- Shows 6 featured services from `src/data/homeData.js → featuredServiceKeys`
- Featured: Kidney Disease Consultation, Dialysis Care, Kidney Transplant Guidance, Diabetic Kidney Disease Care, High BP-related Kidney Disease, Report Review
- Status: ✅ All medically safe descriptions

#### Dialysis Highlight (`src/components/home/DialysisCareHighlight.jsx`)
| Element | Content | Status |
|---------|---------|--------|
| Heading | "Supportive guidance for dialysis-related care" | ✅ |
| Description | "Patients already undergoing dialysis or being evaluated..." | ✅ Safe |
| Bullets | 3 bullet points about dialysis guidance | ✅ Safe |
| CTA | "Request Dialysis Consultation" → /dialysis-care | ✅ |

#### Kidney Transplant Highlight (`src/components/home/KidneyTransplantHighlight.jsx`)
- Content from `src/data/homeData.js → transplantHighlightData`
- Includes inline disclaimer ✅
- CTA: "Consult for Transplant Guidance" → /kidney-transplant-guidance ✅

#### Patient Awareness Preview (`src/components/home/PatientAwarenessPreview.jsx`)
- 3 awareness cards: Kidney Disease Symptoms, Diabetes & Kidneys, When to See a Specialist
- Status: ✅ Safe

#### Appointment CTA Band (`src/components/home/AppointmentCTABand.jsx`)
- "Request a Kidney Care Appointment" — ✅
- "Our team will contact you shortly to confirm." — ✅

#### Media Coverage Preview (`src/components/home/MediaCoveragePreview.jsx`)
- Uses `src/data/mediaData.js` — currently 2 approved items
- Status: ✅

#### Gallery Preview (`src/components/home/GalleryPreview.jsx`)
- Uses `src/data/galleryData.js` — currently 2 approved items
- Status: ✅

#### FAQ (`src/components/home/HomeFAQSection.jsx`)
- Uses `src/data/faqData.js` — 7 FAQs
- Status: ✅ All safe

#### Contact Preview (`src/components/home/ContactPreview.jsx`)
- 3 cards: Phone, Address, OPD Timing
- Status: ✅

---

### PAGE 2 — About Doctor (`/about`)

**Source:** `src/pages/About.jsx` + `src/data/aboutData.js`

| Section | Content | Status |
|---------|---------|--------|
| Hero eyebrow | "About the doctor" | ✅ |
| Hero title | "About Dr. Rahul Bhaskarrao Tengse" | ✅ |
| Hero description | "Learn about Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist and Kidney Transplant Physician..." | ✅ |
| Intro para 1 | "Dr. Rahul Bhaskarrao Tengse provides specialized nephrology consultation..." | ✅ Safe |
| Intro para 2 | "His consultation areas include kidney disease evaluation, dialysis care guidance..." | ✅ Safe |
| Intro para 3 | "The website content is structured to support patient awareness..." | ⚠️ Meta/internal language — should be real bio content |
| Qualification 1 | MBBS | ⚠️ DRAFT — confirm |
| Qualification 2 | MD Medicine | ⚠️ DRAFT — confirm exact wording |
| Qualification 3 | DM Nephrology | ⚠️ DRAFT — confirm |
| Specializations | 8 specialty chips | ✅ Safe |
| Expertise areas | 6 icon-card items | ✅ Safe |
| Care philosophy | "Patient-focused kidney care begins with clear communication..." | ✅ Safe (marked as care approach, not guarantee) |
| Hospital association | Name, location, timing | ⚠️ OPD timing is placeholder |
| Media recognition | "Featured in local and regional newspapers..." | ✅ Safe |

---

### PAGE 3 — Kidney Care Services (`/services`)

**Source:** `src/pages/Services.jsx` + `src/data/servicesData.js`

| Service | Short Description | Disclaimer | Status |
|---------|------------------|------------|--------|
| Kidney Disease Consultation | "Consultation for kidney symptoms, abnormal reports..." | No | ✅ |
| Dialysis Care | "Guidance for patients who may require or are already undergoing dialysis." | Yes | ✅ |
| SLED Dialysis | "Guidance for SLED dialysis support where clinically advised." | Yes | ✅ |
| Peritoneal Dialysis Guidance | "Guidance for patients and families considering or managing peritoneal dialysis." | Yes | ✅ |
| HCV / HbsAg Dialysis Support | "Dialysis-related guidance for infection-control-based support." | Yes | ✅ |
| AV Fistula Care | "Awareness and guidance for AV Fistula care related to dialysis access." | Yes | ✅ |
| Permcath Procedure Guidance | "Awareness related to Permcath use, care, and access planning." | Yes | ✅ |
| Kidney Biopsy | "Guidance for patients who may need kidney biopsy evaluation." | Yes | ✅ |
| Plasma Pheresis | "Specialized care guidance where plasma pheresis may be considered." | Yes | ✅ |
| Nephrotic Syndrome Treatment | "Consultation and long-term management guidance." | Yes | ✅ |
| Kidney Transplant Guidance | "Evaluation, donor-related discussion, and follow-up awareness." | Yes | ✅ |
| Diabetic Kidney Disease Care | "Kidney guidance for patients with diabetes-related kidney concerns." | No | ✅ |
| High BP-related Kidney Disease | "Consultation for blood-pressure-related kidney risks and monitoring." | No | ✅ |
| Kidney-related Anemia | "Evaluation guidance for low hemoglobin concerns related to kidney disease." | No | ✅ |
| Electrolyte Management | "Consultation for electrolyte imbalance and blood pressure concerns." | No | ✅ |
| Report Review / Second Opinion | "Review of kidney reports, dialysis records, and previous results." | No | ✅ |

**All 16 services present.** All descriptions medically safe. ✅

---

### PAGE 4 — Dialysis Care (`/dialysis-care`)

**Source:** `src/pages/DialysisCare.jsx` + `src/data/dialysisData.js`

| Section | Content | Status |
|---------|---------|--------|
| Hero | "Dialysis Care — Patient Guidance & Support" | ✅ |
| What is dialysis | Educational text | ✅ |
| When needed | 4 info cards (CKD Stage 5, AKI, Fluid Overload, Doctor-recommended) | ✅ |
| SLED guidance | With disclaimer | ✅ |
| Peritoneal dialysis | With disclaimer | ✅ |
| HCV/HbsAg support | With disclaimer | ✅ |
| AV Fistula awareness | Educational card with image | ✅ |
| Permcath awareness | Educational card with image | ✅ |
| Patient safety notes | Styled reminder box | ✅ |
| CTA | "Request Dialysis Consultation" → /appointment | ✅ |

---

### PAGE 5 — Kidney Transplant Guidance (`/kidney-transplant-guidance`)

**Source:** `src/pages/KidneyTransplant.jsx` + `src/data/transplantData.js`

| Section | Content | Status |
|---------|---------|--------|
| Hero | "Kidney Transplant Guidance" + required disclaimer | ✅ |
| Required disclaimer | Full transplant disclaimer | ✅ Present |
| Intro — covers | 4 bullet points | ✅ |
| Intro — does not cover | 4 bullet points | ✅ Correct |
| Evaluation points | 5 cards | ✅ |
| Donor guidance | Informational only note | ✅ |
| Follow-up | 4 awareness points | ✅ |
| Media note | Link to /media-news | ✅ |
| CTA | "Consult for Transplant Guidance" | ✅ |

---

### PAGE 6 — Patient Awareness (`/patient-awareness`)

**Source:** `src/pages/PatientAwareness.jsx` + `src/data/awarenessData.js`

| Section | Content | Status |
|---------|---------|--------|
| Hero | "Patient Awareness" | ✅ |
| Symptoms checklist | 6 symptoms | ✅ |
| Diabetes & kidney risk | Info card | ✅ |
| High BP & kidney risk | Info card | ✅ |
| When to consult | 5 warning signs | ✅ |
| Dialysis awareness | Brief, links to /dialysis-care | ✅ |
| Transplant awareness | Brief, links to /kidney-transplant-guidance | ✅ |
| Lifestyle reminder | Styled pull-out card | ✅ |
| CTA | "Get Kidney Care Guidance" → /appointment | ✅ |

---

### PAGE 7 — Media & News (`/media-news`)

**Source:** `src/pages/MediaNews.jsx` + `src/data/mediaData.js`

| Element | Content | Status |
|---------|---------|--------|
| Privacy notice | "Newspaper images are shown as media coverage cards. Patient-identifiable details removed." | ✅ |
| Media card 1 | "Kidney Health Awareness Programme" / Local Newspaper / 2025 | ✅ Approved |
| Media card 2 | "Dialysis Care Awareness" / Regional Press / 2025 | ✅ Approved |
| Upcoming news images | news1.jpeg–news4.jpeg | ⚠️ NOT YET IN PROJECT — placeholders needed in mediaData.js |
| Facebook link | Not yet in any data file | ⚠️ MISSING — must be added to siteData.js |

---

### PAGE 8 — Gallery (`/gallery`)

**Source:** `src/pages/Gallery.jsx` + `src/data/galleryData.js`

| Element | Content | Status |
|---------|---------|--------|
| Gallery image 1 | "Shivneri Super Speciality Hospital" / Hospital category | ✅ Approved |
| Gallery image 2 | "Kidney Health Awareness" / Awareness Posters | ✅ Approved |
| Filter tabs | All, Doctor Photos, Hospital, Facilities, Media Coverage, Awareness Posters, Dialysis Awareness, Kidney Care Graphics | ✅ |
| Privacy note | "Patient photographs are not included in this gallery." | ✅ |

---

### PAGE 9 — Appointment (`/appointment`)

**Source:** `src/pages/Appointment.jsx` + `src/components/appointment/*` + `src/data/appointmentData.js`

| Element | Content | Status |
|---------|---------|--------|
| Step 1 — Type | 6 appointment types including Emergency/Urgent | ✅ |
| Emergency warning | "For life-threatening emergencies, call the hospital directly..." | ✅ Required |
| Step 2 — Patient details | Name, Age, Gender, Mobile, City/Location | ✅ |
| Step 3 — Schedule | Preferred Date, Time, Symptoms/Message | ✅ |
| Step 4 — Review | Summary card with edit links | ✅ |
| Step 5 — Submit | WhatsApp redirect + thank-you state | ✅ |
| Appointment disclaimer | "Submitting an appointment request does not guarantee..." | ✅ Required disclaimer present |
| WhatsApp number | EMPTY — client must confirm | ⚠️ CRITICAL — set VITE_WHATSAPP_NUMBER |

---

### PAGE 10 — Contact (`/contact`)

**Source:** `src/pages/Contact.jsx` + `src/data/siteData.js`

| Element | Content | Status |
|---------|---------|--------|
| Primary phone | 8432842222 | ⚠️ DRAFT — confirm |
| Emergency phone | EMPTY | ⚠️ Missing — confirm with client |
| WhatsApp | EMPTY | ⚠️ CRITICAL — confirm number |
| Email | shivnerihospital24@gmail.com | ⚠️ DRAFT — confirm |
| Address | Swastik Chamber, Near Niraj Hotel, Gavhane Chowk, Parbhani - 431401 | ⚠️ DRAFT — confirm |
| OPD timing | "Contact hospital for OPD timing" | ⚠️ Placeholder — needs real timing |
| Google Map | EMPTY | ⚠️ Missing — confirm map link |
| Instagram | https://www.instagram.com/drrahultengse/ | ✅ Confirmed |
| Facebook | Not in siteData | ⚠️ MISSING — needs to be added |

---

## GLOBAL LAYOUT CONTENT

### Header (`src/components/layout/Header.jsx`)
| Element | Content | Status |
|---------|---------|--------|
| Logo | logo.png | ✅ |
| Doctor name | From siteData | ✅ |
| Desktop nav | All 9 links | ✅ |
| Call Now | tel:8432842222 | ⚠️ DRAFT number |
| Book Appointment | → /appointment | ✅ |

### Footer (`src/components/layout/Footer.jsx`)
| Column | Content | Status |
|--------|---------|--------|
| Brand | Doctor name, "Trusted Kidney Specialist in Parbhani", Instagram | ✅ |
| Quick Links | 6 nav links | ✅ |
| Specialty Services | 6 service links | ✅ |
| Contact | Phone, address, OPD timing, Book Appointment | ⚠️ Partial placeholder |
| Copyright | "© 2026 Dr. Rahul Bhaskarrao Tengse. All rights reserved." | ✅ |
| Medical disclaimer | One-liner present | ✅ |

---

## PLACEHOLDER CONTENT — CRITICAL LIST

| Location | Placeholder Text | Priority |
|----------|-----------------|----------|
| `homeData.js` → aboutPreviewData para 3 | "Final qualification details, OPD timing, and image approval must be confirmed..." | 🚨 Must replace |
| `siteData.js` → hospital.opdTiming | "Contact hospital for OPD timing" | 🔴 Needs real timing |
| `siteData.js` → hospital.mapUrl | Empty string | 🔴 Needs map link |
| `siteData.js` → contact.emergencyPhone | Empty string | 🔴 Needs confirmation |
| `siteData.js` → contact.whatsappNumber | Empty string | 🚨 Critical for appointment flow |
| `robots.txt` → Sitemap URL | https://example.com/sitemap.xml | 🔴 Needs real domain |
| `sitemap.xml` → All URLs | https://example.com/* | 🔴 Needs real domain |
| `seo.js` → defaultSiteUrl fallback | https://example.com | 🔴 Needs VITE_SITE_URL env var |
| `siteData.js` → contact.facebookUrl | Missing key entirely | 🟡 New addition needed |
| `aboutData.js` → aboutPreviewData para 3 | Meta/internal text in para 3 | 🔴 Replace with real bio |

---

## OUTDATED / INCONSISTENT CONTENT

| Issue | Location | Detail |
|-------|----------|--------|
| Subtitle inconsistency | `homeData.js` vs `siteData.js` | "Consultant Nephrologist and Kidney Transplant Physician" vs "Consultant Nephrologist \| Kidney Disease, Dialysis & Kidney Transplant Guidance" |
| Qualification inconsistency | `homeData.js` vs `siteData.js` | "MD General Medicine" vs "MD Medicine" |
| Doctor name shorthand | Some older components may still reference "Dr. Rahul Tengse" without "Bhaskarrao" | Audit needed |

---

## RISKY / UNVERIFIED CONTENT

| Item | Risk Level | Note |
|------|-----------|------|
| Qualification line (MBBS, MD, DM) | 🔴 High | All marked DRAFT — client must confirm exact wording |
| Phone 8432842222 | 🟡 Medium | Marked DRAFT — confirm before launch |
| Email shivnerihospital24@gmail.com | 🟡 Medium | Marked DRAFT — confirm before launch |
| Address (Swastik Chamber…) | 🟡 Medium | Marked DRAFT — confirm |
| No claims of "best" or "top" | ✅ Clean | No unsafe claims found in any file |
| No guaranteed outcomes | ✅ Clean | All content uses safe wording |
| No patient testimonials | ✅ Clean | None present |
| No experience years claimed | ✅ Clean | None stated |

---

## FAQ CONTENT AUDIT

All 7 FAQs from `src/data/faqData.js`:

| ID | Question | Category | Status |
|----|----------|----------|--------|
| when-to-consult | When should I consult a kidney specialist? | general | ✅ Safe |
| diabetes-kidney-health | Can diabetes affect kidney health? | awareness | ✅ Safe |
| what-to-bring | What should I bring for a kidney consultation? | appointment | ✅ Safe |
| dialysis-guidance | Is dialysis guidance available? | dialysis | ✅ Safe |
| report-review | Can I request report review? | appointment | ✅ Safe |
| transplant-guidance | Is transplant guidance the same as transplant approval? | transplant | ✅ Safe |
| appointment-confirmation | How is an appointment request confirmed? | appointment | ✅ Safe |

**Opportunities:** FAQ does not yet cover CKD stages, kidney stones, diet, or Erythropoietin topics — these align with planned blog topics.

---

*Document generated: Content Refinement Phase — Batch 1*
*No content was modified. This is inventory only.*
