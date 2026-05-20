# Content Source Map — Dr. Rahul Bhaskarrao Tengse Website
# Phase: Content Refinement | Batch 1

> Maps every content area to its file, source type, editability status, and update need.
> **No content was changed.** This is a documentation file only.

---

## MASTER SOURCE MAP TABLE

| Content Area | File Path | Source Type | Editable? | Needs Update? | Notes |
|-------------|-----------|-------------|-----------|---------------|-------|
| **DOCTOR IDENTITY** | | | | | |
| Doctor full name | `src/data/siteData.js` → `doctor.name` | Data file | ✅ Yes | ✅ Updated to Bhaskarrao | Also update homeData.js if overridden |
| Doctor subtitle | `src/data/siteData.js` → `doctor.subtitle` | Data file | ✅ Yes | ⚠️ Inconsistency with homeData.js | Reconcile with homeData subtitle |
| Doctor qualification | `src/data/siteData.js` → `doctor.qualification` | Data file | ✅ Yes | 🔴 DRAFT — confirm | Marked [DRAFT] in code comments |
| Doctor specialty | `src/data/siteData.js` → `doctor.specialty` | Data file | ✅ Yes | No | "Kidney Specialist" |
| Doctor location | `src/data/siteData.js` → `doctor.location` | Data file | ✅ Yes | No | "Parbhani, Maharashtra, India" |
| **HOSPITAL IDENTITY** | | | | | |
| Hospital name | `src/data/siteData.js` → `hospital.name` | Data file | ✅ Yes | No | Full official name present |
| Hospital address | `src/data/siteData.js` → `hospital.address` | Data file | ✅ Yes | 🔴 DRAFT — confirm | Draft address present |
| Hospital city | `src/data/siteData.js` → `hospital.city` | Data file | ✅ Yes | No | "Parbhani" |
| Hospital OPD timing | `src/data/siteData.js` → `hospital.opdTiming` | Data file | ✅ Yes | 🔴 Placeholder | "Contact hospital for OPD timing" |
| Hospital map URL | `src/data/siteData.js` → `hospital.mapUrl` | Data file | ✅ Yes | 🔴 Empty | Needs confirmed Google Maps URL |
| **CONTACT DETAILS** | | | | | |
| Primary phone | `src/data/siteData.js` → `contact.primaryPhone` | Data file | ✅ Yes | ⚠️ DRAFT | 8432842222 — confirm before launch |
| Emergency phone | `src/data/siteData.js` → `contact.emergencyPhone` | Data file | ✅ Yes | 🔴 Empty | Needs confirmed emergency number |
| WhatsApp number | `src/data/siteData.js` → `contact.whatsappNumber` | Data file + `.env` | ✅ Yes | 🚨 CRITICAL | Empty — VITE_WHATSAPP_NUMBER must be set |
| Email | `src/data/siteData.js` → `contact.email` | Data file | ✅ Yes | ⚠️ DRAFT | shivnerihospital24@gmail.com — confirm |
| Instagram URL | `src/data/siteData.js` → `contact.instagramUrl` | Data file | ✅ Yes | No | Confirmed URL |
| Facebook URL | `src/data/siteData.js` | Data file | ✅ Yes | 🔴 MISSING | Key does not exist yet — must add |
| **HOMEPAGE HERO** | | | | | |
| Hero eyebrow | `src/data/homeData.js` → `homeHeroData.eyebrow` | Data file | ✅ Yes | No | "Advanced Kidney Care in Parbhani" |
| Hero H1 | `src/data/homeData.js` → `homeHeroData.title` | Data file | ✅ Yes | No | Doctor name |
| Hero subtitle | `src/data/homeData.js` → `homeHeroData.subtitle` | Data file | ✅ Yes | ⚠️ Reconcile | Differs from siteData.doctor.subtitle |
| Hero qualification | `src/data/homeData.js` → `homeHeroData.qualification` | Data file | ✅ Yes | 🔴 DRAFT | "MD General Medicine" vs "MD Medicine" inconsistency |
| Hero description | `src/data/homeData.js` → `homeHeroData.description` | Data file | ✅ Yes | No | ✅ Safe content |
| Hospital badge | `src/data/homeData.js` → `homeHeroData.hospitalBadge` | Data file | ✅ Yes | No | ✅ Correct |
| **HOMEPAGE SECTIONS** | | | | | |
| Trust highlights | `src/data/homeData.js` → `trustHighlights[]` | Data file | ✅ Yes | No | 4 cards, all safe |
| About preview paras | `src/data/homeData.js` → `aboutPreviewData.paragraphs` | Data file | ✅ Yes | 🚨 Para 3 is placeholder | Internal/meta text must be replaced |
| Hospital preview | `src/data/homeData.js` → `hospitalPreviewData` | Data file | ✅ Yes | ⚠️ Generic copy | Association line needs real content |
| Featured services | `src/data/homeData.js` → `featuredServiceKeys[]` | Data file | ✅ Yes | No | Points to servicesData.js |
| Dialysis highlight | `src/data/homeData.js` → `dialysisHighlightData` | Data file | ✅ Yes | No | Safe content |
| Transplant highlight | `src/data/homeData.js` → `transplantHighlightData` | Data file | ✅ Yes | No | Safe with disclaimer |
| Awareness preview | `src/data/homeData.js` → `awarenessPreviewData` | Data file | ✅ Yes | No | 3 cards, all safe |
| CTA band | `src/data/homeData.js` → `appointmentCTAData` | Data file | ✅ Yes | No | Safe copy |
| **ABOUT PAGE** | | | | | |
| About hero | `src/data/aboutData.js` → `aboutData.hero` | Data file | ✅ Yes | No | ✅ Safe |
| Doctor bio paragraphs | `src/data/aboutData.js` → `aboutData.intro.paragraphs` | Data file | ✅ Yes | ⚠️ Para 3 is internal | Replace with real bio content |
| Qualifications list | `src/data/aboutData.js` → `aboutData.qualifications[]` | Data file | ✅ Yes | 🔴 DRAFT | All marked DRAFT |
| Specializations chips | `src/data/aboutData.js` → `aboutData.specializations[]` | Data file | ✅ Yes | No | 8 chips, all safe |
| Expertise areas | `src/data/aboutData.js` → `aboutData.expertiseAreas[]` | Data file | ✅ Yes | No | 6 icon-cards, safe |
| Care philosophy | `src/data/aboutData.js` → `aboutData.philosophy` | Data file | ✅ Yes | No | Marked as approach, not guarantee |
| Hospital association | `src/data/aboutData.js` → `aboutData.hospitalAssociation` | Data file | ✅ Yes | ⚠️ OPD placeholder | Inherits from siteData |
| **SERVICES PAGE** | | | | | |
| All 16 services | `src/data/servicesData.js` | Data file | ✅ Yes | No | All safe, all present |
| Service icons | `src/data/servicesData.js` → each `icon` field | Lucide names | ✅ Yes | No | Lucide React components |
| Service CTAs | `src/data/servicesData.js` → each `ctaText` | Data file | ✅ Yes | No | Blueprint-aligned |
| **DIALYSIS PAGE** | | | | | |
| All dialysis content | `src/data/dialysisData.js` | Data file | ✅ Yes | No | All sections, safe |
| AV Fistula image usage | `src/data/imageManifest.js` → `dialysis.avFistula` | Image manifest | ✅ Yes | No | Approved |
| Permcath image usage | `src/data/imageManifest.js` → `dialysis.permcath` | Image manifest | ✅ Yes | No | Approved |
| **TRANSPLANT PAGE** | | | | | |
| All transplant content | `src/data/transplantData.js` | Data file | ✅ Yes | No | All safe, disclaimers present |
| Required disclaimer | `src/data/transplantData.js` → `requiredDisclaimer` | Data file | ✅ Yes | No | Full disclaimer text present |
| **PATIENT AWARENESS PAGE** | | | | | |
| All awareness content | `src/data/awarenessData.js` | Data file | ✅ Yes | No | All safe, educational |
| **MEDIA & NEWS PAGE** | | | | | |
| Media cards | `src/data/mediaData.js` | Data file | ✅ Yes | 🔴 Need 4 new images | news1–4.jpeg not yet added |
| Media image 1 | `src/assets/images/media/media-1.webp` | Asset file | ✅ Yes | No | Approved |
| Media image 2 | `src/assets/images/media/media-2.webp` | Asset file | ✅ Yes | No | Approved |
| Incoming media 1–4 | Not yet in project | Asset file | ⏳ Pending | 🔴 Add when received | news1–4.jpeg placeholders needed |
| **GALLERY PAGE** | | | | | |
| Gallery images | `src/data/galleryData.js` | Data file | ✅ Yes | No | 2 approved items |
| Gallery image 1 | `src/assets/images/gallery/gallery-1.webp` | Asset file | ✅ Yes | No | Hospital — approved |
| Gallery image 2 | `src/assets/images/gallery/gallery-2.webp` | Asset file | ✅ Yes | No | Awareness — approved |
| **APPOINTMENT FLOW** | | | | | |
| Appointment types | `src/data/appointmentData.js` → `appointmentTypes[]` | Data file | ✅ Yes | No | 6 types present |
| Appointment steps | `src/data/appointmentData.js` → `appointmentSteps[]` | Data file | ✅ Yes | No | 5 steps defined |
| Appointment disclaimer | `src/data/appointmentData.js` → `appointmentDisclaimer` | Data file | ✅ Yes | No | Required disclaimer present |
| Emergency disclaimer | `src/data/appointmentData.js` → `emergencyDisclaimer` | Data file | ✅ Yes | No | Required disclaimer present |
| Thank-you content | `src/data/appointmentData.js` → `thankYouContent` | Data file | ✅ Yes | No | Safe messaging |
| WhatsApp message | `src/utils/whatsapp.js` → `buildWhatsAppMessage()` | Utility | ✅ Yes | No | Correct format |
| WhatsApp URL builder | `src/utils/whatsapp.js` → `buildWhatsAppUrl()` | Utility | ✅ Yes | No | Uses wa.me/91{number} |
| WhatsApp number source | `src/utils/whatsapp.js` → `getConfiguredWhatsAppNumber()` | Utility | ✅ Yes | 🚨 Empty | Reads from .env VITE_WHATSAPP_NUMBER |
| Form validation | `src/utils/validation.js` | Utility | ✅ Yes | No | Zod schema |
| **FAQ** | | | | | |
| FAQ items | `src/data/faqData.js` | Data file | ✅ Yes | ⚠️ Expand | 7 items — can expand with blog topics |
| **CONTACT PAGE** | | | | | |
| All contact info | `src/data/siteData.js` → `contact.*` | Data file | ✅ Yes | 🔴 Multiple gaps | See contact section above |
| **SEO METADATA** | | | | | |
| Default site title | `src/utils/seo.js` → `siteSeoConfig.defaultTitle` | SEO util | ✅ Yes | No | "Dr. Rahul Bhaskarrao Tengse \| Kidney Specialist Parbhani" |
| Default description | `src/utils/seo.js` → `siteSeoConfig.defaultDescription` | SEO util | ✅ Yes | No | Safe, accurate |
| Per-page SEO | `src/utils/seo.js` → `seoPages[]` | SEO util | ✅ Yes | No | All 10 pages mapped |
| OG image source | `src/data/imageManifest.js` → `og.default.src` | Image manifest | ✅ Yes | ⚠️ Check if set | Used for social sharing |
| Site URL | `.env` → `VITE_SITE_URL` | Environment | ✅ Yes | 🔴 Not set | Fallback is example.com |
| **SCHEMA / JSON-LD** | | | | | |
| Physician schema | `src/utils/schema.js` → `buildPhysicianSchema()` | Schema util | ✅ Yes | No | Auto-reads from siteData |
| MedicalClinic schema | `src/utils/schema.js` → `buildMedicalClinicSchema()` | Schema util | ✅ Yes | ⚠️ OPD timing gap | openingHours omitted if placeholder |
| MedicalWebPage schema | `src/utils/schema.js` → `buildMedicalWebPageSchema()` | Schema util | ✅ Yes | No | Built per-page |
| WebPage schema | `src/utils/schema.js` → `buildWebPageSchema()` | Schema util | ✅ Yes | No | Built per-page |
| **SITEMAP & ROBOTS** | | | | | |
| sitemap.xml | `public/sitemap.xml` | Static file | ✅ Yes | 🔴 Domain placeholder | All URLs use example.com |
| robots.txt | `public/robots.txt` | Static file | ✅ Yes | 🔴 Domain placeholder | Sitemap URL uses example.com |
| **LOGO & BRANDING** | | | | | |
| Logo image | `src/assets/images/logo/logo.png` | Asset | ✅ Yes | No | Present |
| Logo config | `src/data/siteData.js` → `branding.*` | Data file | ✅ Yes | No | useLogoImage: true |
| **NAVIGATION** | | | | | |
| Nav links | `src/data/navigationData.js` | Data file | ✅ Yes | No | All 9 routes |
| **SOCIAL LINKS** | | | | | |
| Instagram | `src/data/siteData.js` → `contact.instagramUrl` | Data file | ✅ Yes | No | Confirmed |
| Facebook | Not in siteData | — | ❌ Not present | 🔴 Must add | https://www.facebook.com/share/18xSSn4rsg/ |

---

## ENVIRONMENT VARIABLES MAP

| Variable | Purpose | Current State | Action Needed |
|----------|---------|--------------|---------------|
| `VITE_WHATSAPP_NUMBER` | WhatsApp appointment redirect | ❌ Not set | 🚨 Confirm number with client, set in .env and hosting |
| `VITE_SITE_URL` | Canonical URL, OG image URL, sitemap | ❌ Not set | 🔴 Set to production domain before launch |
| `VITE_API_BASE_URL` | Future backend API | Not needed in v1 | No action now |

---

## SINGLE SOURCE OF TRUTH MAP

| Data Category | Single Source File | Consumed By |
|---------------|--------------------|-------------|
| Doctor identity | `src/data/siteData.js` | Header, Footer, Hero, About, SEO, Schema, WhatsApp |
| Hospital info | `src/data/siteData.js` | Footer, Contact, About, Hero badge, Schema |
| Contact links | `src/data/siteData.js` + `.env` | Header, Footer, Contact, Appointment |
| Services | `src/data/servicesData.js` | Services page, Home preview |
| FAQs | `src/data/faqData.js` | Home FAQ section |
| Media cards | `src/data/mediaData.js` | Media page, Home media preview |
| Gallery | `src/data/galleryData.js` | Gallery page, Home gallery preview |
| Images (manifest) | `src/data/imageManifest.js` | All image-using components |
| SEO per-page | `src/utils/seo.js` → `seoPages[]` | SEO component in each page |
| Schema | `src/utils/schema.js` | SEO component in each page |
| Appointment flow | `src/data/appointmentData.js` | All appointment step components |
| Contact link helpers | `src/utils/contactLinks.js` | Header, Footer, Contact, CTA sections |

---

*Document generated: Content Refinement Phase — Batch 1*
*No content was modified. This is a source mapping document only.*
