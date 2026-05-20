# Content Update Priority — Dr. Rahul Bhaskarrao Tengse Website
# Phase: Content Refinement | Batch 1

> Ranked list of all content update work identified in the inventory.
> Used to plan future batches in correct order.
> **No content was changed in this batch.**

---

## PRIORITY 1 — CRITICAL BEFORE LAUNCH

These items are blockers. The website **cannot launch** without resolving these.

| # | Item | Location | Complexity | Risk |
|---|------|----------|-----------|------|
| 1.1 | Set `VITE_WHATSAPP_NUMBER` environment variable | `.env` + hosting platform | Low | 🚨 Appointment flow broken without this |
| 1.2 | Set `VITE_SITE_URL` environment variable | `.env` + hosting platform | Low | 🔴 OG images broken, sitemap wrong, canonicals wrong |
| 1.3 | Replace example.com in `public/sitemap.xml` | `public/sitemap.xml` | Low | 🔴 SEO blocker |
| 1.4 | Replace example.com in `public/robots.txt` Sitemap directive | `public/robots.txt` | Low | 🔴 SEO blocker |
| 1.5 | Replace placeholder para 3 in About Doctor Preview | `src/data/homeData.js` → `aboutPreviewData.paragraphs[2]` | Low-Medium | 🚨 Internal/meta text visible to users |
| 1.6 | Confirm and update doctor qualification line | `src/data/siteData.js` + `src/data/homeData.js` | Low | 🔴 Two different qualification strings — inconsistency |
| 1.7 | Resolve subtitle inconsistency | `src/data/siteData.js` vs `src/data/homeData.js` | Low | 🟡 Different subtitle text in hero vs elsewhere |

**Dependency:** Items 1.2, 1.3, 1.4 all depend on final production domain being confirmed.

---

## PRIORITY 2 — IMPORTANT — QUALITY CONTENT

These updates significantly improve content quality and doctor presentation.

| # | Item | Location | Complexity | Risk |
|---|------|----------|-----------|------|
| 2.1 | Add Facebook social link to `siteData.js` | `src/data/siteData.js` → `contact.facebookUrl` | Low | 🟡 Facebook link was provided but not in data file |
| 2.2 | Add Facebook link to Footer column 1 | `src/components/layout/Footer.jsx` | Low | 🟡 Depends on 2.1 |
| 2.3 | Replace generic hospital association line in Home | `src/data/homeData.js` → `hospitalPreviewData.associationLine` | Low | 🟡 Current line is placeholder-quality |
| 2.4 | Improve About page bio para 3 | `src/data/aboutData.js` → `aboutData.intro.paragraphs[2]` | Medium | 🟡 Currently sounds like internal note |
| 2.5 | Add confirmed OPD timing | `src/data/siteData.js` → `hospital.opdTiming` | Low (data only) | 🟡 Waiting on client confirmation |
| 2.6 | Add Google Maps URL | `src/data/siteData.js` → `hospital.mapUrl` | Low (data only) | 🟡 Waiting on client confirmation |
| 2.7 | Confirm emergency phone number | `src/data/siteData.js` → `contact.emergencyPhone` | Low (data only) | 🟡 Currently empty |
| 2.8 | Improve homepage hero description (medical copy) | `src/data/homeData.js` → `homeHeroData.description` | Low-Medium | 🟡 Can be more specific and engaging |

**Dependency:** 2.5, 2.6, 2.7 depend on client confirmation — cannot be done without client.

---

## PRIORITY 3 — MEDIA & NEWS EXPANSION

These updates expand the media section with the upcoming 4 newspaper images.

| # | Item | Location | Complexity | Risk |
|---|------|----------|-----------|------|
| 3.1 | Receive news1–4.jpeg from client | External — waiting | External | 🔴 Blocked on client delivery |
| 3.2 | Privacy review news1–4.jpeg | `src/assets/images/media/raw-unsorted/` | Medium | 🔴 Patient data must be cropped/blurred |
| 3.3 | Export news1–4 as WebP | `src/assets/images/media/` | Low | After 3.2 |
| 3.4 | Add news1–4 entries to `mediaData.js` | `src/data/mediaData.js` | Low | After 3.3 + client approval |
| 3.5 | Add additional gallery images if any | `src/data/galleryData.js` | Low | Depends on client |
| 3.6 | Review and rename media-1.webp, media-2.webp to SEO filenames | `src/assets/images/media/` | Low | Optional — improves SEO filename quality |

**Dependency:** All 3.x items depend on client providing images and giving approval.

---

## PRIORITY 4 — BLOG SYSTEM

The blog system is a significant development addition. Should be built after Priority 1–3 are complete.

| # | Item | Location | Complexity | Risk |
|---|------|----------|-----------|------|
| 4.1 | Create `src/data/blogData.js` with data structure | New file | Medium | Low |
| 4.2 | Create `BlogCard` and `BlogGrid` components | New components | Medium | Low |
| 4.3 | Create Blog listing page (`/blog`) | New page | Medium | Low |
| 4.4 | Create `BlogArticle` page (`/blog/:slug`) | New page + dynamic routing | High | Medium |
| 4.5 | Create `BlogArticleBody` content renderer | New component | High | Medium |
| 4.6 | Write P1 articles (5 articles) | Blog content | High | Medium — needs client review |
| 4.7 | Write remaining 15 articles | Blog content | High | Medium |
| 4.8 | Add blog routes to `AppRoutes.jsx` | Routing | Low | Low |
| 4.9 | Add blog entries to sitemap.xml | `public/sitemap.xml` | Low | Low |
| 4.10 | Add blog schema per article | `src/utils/schema.js` | Medium | Low |

**Dependency:** Blog content must be medically reviewed and client-approved before publishing.

---

## PRIORITY 5 — SEO REFINEMENT

Incremental improvements after launch.

| # | Item | Location | Complexity | Risk |
|---|------|----------|-----------|------|
| 5.1 | Verify Lighthouse scores post-launch | Production | Low | After launch |
| 5.2 | Submit sitemap to Google Search Console | External | Low | After launch + real domain |
| 5.3 | Add `lang="en"` to `index.html` `<html>` tag | `index.html` | Low | Low |
| 5.4 | Verify Google Fonts preconnect in `index.html` | `index.html` | Low | Low |
| 5.5 | Add OPD timing to MedicalClinic schema once confirmed | `src/utils/schema.js` (auto) + `siteData.js` | Low | Low |
| 5.6 | Verify og:image renders correctly at real domain | Social preview tool | Low | After 1.2 |
| 5.7 | Add noindex to 404 page | `src/pages/NotFound.jsx` | Low | Low |
| 5.8 | Add rich snippets for services (MedicalProcedure schema) | `src/utils/schema.js` | High | Medium |
| 5.9 | Create Google Business Profile for doctor/hospital | External | External | Client action |

---

## DEPENDENCY MAP

```
CLIENT CONFIRMS DOMAIN
    └→ 1.2 VITE_SITE_URL
    └→ 1.3 sitemap.xml update
    └→ 1.4 robots.txt update

CLIENT CONFIRMS WHATSAPP NUMBER
    └→ 1.1 VITE_WHATSAPP_NUMBER

CLIENT CONFIRMS QUALIFICATIONS
    └→ 1.6 Qualification line update
    └→ 1.7 Subtitle reconciliation

CLIENT CONFIRMS CONTACT DETAILS
    └→ 2.5 OPD timing
    └→ 2.6 Map URL
    └→ 2.7 Emergency phone

CLIENT PROVIDES NEWS IMAGES
    └→ 3.1–3.4 Media expansion

PRIORITY 1 COMPLETE
    └→ PRIORITY 2 can proceed
    └→ PRIORITY 3 can proceed (in parallel)

PRIORITY 1–3 COMPLETE
    └→ PRIORITY 4 Blog system can begin

PRIORITY 4 COMPLETE
    └→ PRIORITY 5 SEO refinement

LAUNCH
    └→ 5.1 Lighthouse
    └→ 5.2 Search Console
```

---

## RISK REGISTER

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Qualification details not confirmed before launch | Medium | High | Show DRAFT version with note — do not invent |
| WhatsApp number not set | High | Critical | Appointment CTA falls back to Call Now — add call fallback banner |
| Domain not confirmed before build | Medium | Medium | Use VITE_SITE_URL placeholder — easy to swap |
| News images received with patient-identifiable content | Medium | High | Privacy review before adding to site — never bypass |
| Blog content medically inaccurate | Low-Medium | High | Client/doctor review required before publish |
| Machine-translated Marathi added | Low | High | Explicitly prohibited — use only client-provided Marathi text |
| "Best doctor" or similar claim added by error | Low | Critical | Compliance checklist review before each launch batch |
| Facebook link broken or wrong | Low | Low | Confirm URL before adding |
| Map embed not working on production | Low | Medium | Test in production environment — CORS, API key if needed |

---

## ESTIMATED EFFORT SUMMARY

| Priority Group | Estimated Effort | Blocked On |
|----------------|-----------------|-----------|
| Priority 1 — Critical fixes | 1–2 hours (mostly client confirmations + env vars) | Client + domain |
| Priority 2 — Quality content | 2–4 hours writing + data updates | Some items blocked on client |
| Priority 3 — Media expansion | 4–8 hours (image processing + data) | Client image delivery |
| Priority 4 — Blog system | 3–5 days development + content | Content writing + client review |
| Priority 5 — SEO refinement | 2–4 hours | Post-launch |

---

## RECOMMENDED NEXT BATCH AFTER CONTENT INVENTORY

### Batch 2 — Doctor Identity & Placeholder Content Cleanup

**Scope:**
- Confirm qualification line (or use safe placeholder that acknowledges it's pending)
- Reconcile subtitle inconsistency across `siteData.js` and `homeData.js`
- Replace para 3 in About Doctor Preview with real copy
- Replace para 3 in About page bio with real copy
- Add Facebook URL to `siteData.js`
- Add Facebook link to Footer
- Improve hospital association copy in homepage

**Files likely changed:**
- `src/data/siteData.js`
- `src/data/homeData.js`
- `src/data/aboutData.js`
- `src/components/layout/Footer.jsx`

**Blocked items to defer:**
- OPD timing, map URL, WhatsApp — wait for client
- Domain, sitemap, robots.txt — wait for domain confirmation
- News images — wait for client delivery

---

*Document generated: Content Refinement Phase — Batch 1*
*No content was changed. This is a priority planning document only.*
