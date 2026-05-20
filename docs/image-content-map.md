# Image Content Map — Dr. Rahul Bhaskarrao Tengse Website
# Phase: Content Refinement | Batch 1

> Full inventory of all images currently in the project, usage mapping, alt text status,
> SEO filename quality, approval status, and upcoming image planning.
> **No images were modified.** This is a documentation file only.

---

## CURRENT IMAGE INVENTORY

### 1. Doctor Images

| Filename | Path | Format | Usage | Alt Text | SEO Filename | Approved | Notes |
|----------|------|--------|-------|----------|-------------|---------|-------|
| dr-rahul-tengse.webp | `src/assets/images/doctor/` | WebP | Hero, About page, OG image | "Dr. Rahul Bhaskarrao Tengse, Kidney Specialist in Parbhani" | ✅ Good | ✅ Approved | Main doctor photo |
| dr-rahul-tengse-kidney-specialist-parbhani-1200.jpeg | `src/assets/images/optimized/doctor/` | JPEG | OG/social preview (1200px) | (inherited from manifest) | ✅ Good | ✅ Present | Optimized social variant |
| dr-rahul-tengse-kidney-specialist-parbhani-1200.webp | `src/assets/images/optimized/doctor/` | WebP | Optimized hero variant | (inherited from manifest) | ✅ Good | ✅ Present | WebP optimized variant |

**Manifest reference:**
```
imageManifest.doctor.hero → dr-rahul-tengse.webp
imageManifest.doctor.profile → dr-rahul-tengse.webp (same file used)
imageManifest.og.default → optimized variant
```

**Issues / Opportunities:**
- `doctor.hero` and `doctor.profile` both point to the same file — acceptable for v1
- Optimized srcset (400w, 800w, 1200w) is defined as empty array `[]` in manifest — not yet populated
- OG image should ideally be 1200×630px cropped version — confirm if current image meets this ratio

---

### 2. Hospital Images

| Filename | Path | Format | Usage | Alt Text | SEO Filename | Approved | Notes |
|----------|------|--------|-------|----------|-------------|---------|-------|
| shivneri-hospital.webp | `src/assets/images/hospital/` | WebP | Hospital preview section, About page, Contact | "Shivneri Super Speciality & Surya ICU Hospital Reception, Parbhani" | ✅ Good | ✅ Approved | Hospital reception photo |

**Manifest reference:**
```
imageManifest.hospital.reception → shivneri-hospital.webp
```

---

### 3. Dialysis Educational Graphics

| Filename | Path | Format | Usage | Alt Text | SEO Filename | Approved | Notes |
|----------|------|--------|-------|----------|-------------|---------|-------|
| av-fistula.webp | `src/assets/images/dialysis/` | WebP | Dialysis Care page — AV Fistula awareness card | "AV Fistula Diagram — Dialysis Access Awareness" | ✅ Good | ✅ Approved | Educational use only |
| permcath.webp | `src/assets/images/dialysis/` | WebP | Dialysis Care page — Permcath awareness card | "Permcath Procedure Awareness — Dialysis Care" | ✅ Good | ✅ Approved | Educational use only |
| permcath (2).webp | `src/assets/images/dialysis/` | WebP | **UNUSED DUPLICATE** | N/A | ⚠️ Space in filename | — | Safe to delete. Noted in imageManifest.js comments |

**Action:** `permcath (2).webp` is a confirmed unused duplicate (documented in imageManifest.js). Safe to delete in a future cleanup batch.

---

### 4. Awareness Images

| Filename | Path | Format | Usage | Alt Text | SEO Filename | Approved | Notes |
|----------|------|--------|-------|----------|-------------|---------|-------|
| kidney-awareness-1.webp | `src/assets/images/awareness/` | WebP | Patient Awareness page | "Kidney Health Awareness — Dr. Rahul Bhaskarrao Tengse" | ✅ Good | ✅ Approved | Awareness poster graphic |

---

### 5. Media Images

| Filename | Path | Format | Usage | Alt Text | SEO Filename | Approved | Privacy Status | Notes |
|----------|------|--------|-------|----------|-------------|---------|----------------|-------|
| media-1.webp | `src/assets/images/media/` | WebP | Media & News page card 1 | "Newspaper coverage of kidney awareness programme — Dr. Rahul Bhaskarrao Tengse, Parbhani" | ✅ Good | ✅ Approved | ✅ Clear | Privacy-reviewed, no patient-identifiable content |
| media-2.webp | `src/assets/images/media/` | WebP | Media & News page card 2 | "Newspaper coverage of dialysis care awareness — Dr. Rahul Bhaskarrao Tengse, Parbhani" | ✅ Good | ✅ Approved | ✅ Clear | Privacy-reviewed, no patient-identifiable content |

---

### 6. Gallery Images

| Filename | Path | Format | Usage | Alt Text | SEO Filename | Approved | Privacy Status | Notes |
|----------|------|--------|-------|----------|-------------|---------|----------------|-------|
| gallery-1.webp | `src/assets/images/gallery/` | WebP | Gallery — Hospital category | "Shivneri Super Speciality & Surya ICU Hospital, Parbhani" | ✅ Good | ✅ Approved | ✅ Clear | Hospital image |
| gallery-2.webp | `src/assets/images/gallery/` | WebP | Gallery — Awareness Posters | "Kidney Health Awareness Programme — Dr. Rahul Bhaskarrao Tengse, Parbhani" | ✅ Good | ✅ Approved | ✅ Clear | Awareness graphic |

---

### 7. Logo

| Filename | Path | Format | Usage | Alt Text | SEO Filename | Approved | Notes |
|----------|------|--------|-------|----------|-------------|---------|-------|
| logo.png | `src/assets/images/logo/` | PNG | Header logo, branding | "Dr. Rahul Bhaskarrao Tengse Kidney Specialist Logo" | ✅ Good | ✅ Approved | Active — useLogoImage: true in siteData |

---

### 8. Optimized Images

| Filename | Path | Format | Dimensions | Usage | Notes |
|----------|------|--------|-----------|-------|-------|
| dr-rahul-tengse-kidney-specialist-parbhani-1200.jpeg | `src/assets/images/optimized/doctor/` | JPEG | 1200px width | OG/social preview | Present for social sharing |
| dr-rahul-tengse-kidney-specialist-parbhani-1200.webp | `src/assets/images/optimized/doctor/` | WebP | 1200px width | Optimized hero | WebP version |

---

## UPCOMING IMAGES — PLACEHOLDER PLAN

The following images have been referenced in the project brief but are **not yet in the project**. These are placeholders that must be planned for in `src/data/mediaData.js`.

| Planned Filename | Target Path | Type | Usage | Privacy Action Needed | Client Approval |
|-----------------|-------------|------|-------|----------------------|-----------------|
| news1.jpeg | `src/assets/images/media/` | Media/newspaper | Media & News page card | Crop + blur patient data before use | 🔴 Required |
| news2.jpeg | `src/assets/images/media/` | Media/newspaper | Media & News page card | Crop + blur patient data before use | 🔴 Required |
| news3.jpeg | `src/assets/images/media/` | Media/newspaper | Media & News page card | Crop + blur patient data before use | 🔴 Required |
| news4.jpeg | `src/assets/images/media/` | Media/newspaper | Media & News page card | Crop + blur patient data before use | 🔴 Required |

**When news1–4.jpeg are received:**
1. Place originals in `src/assets/images/media/raw-unsorted/` for review
2. Crop, blur all patient names/faces/phone numbers/medical details
3. Export as WebP: news1.webp through news4.webp
4. Add to `src/data/mediaData.js` with `approvalStatus: 'pending'` until client approves
5. Only set `approvalStatus: 'approved'` and `frontendUseAllowed: true` after client sign-off

---

## IMAGE USAGE MAP

| Image | Homepage | About | Dialysis | Transplant | Awareness | Media | Gallery | Contact | Services |
|-------|---------|-------|----------|-----------|-----------|-------|---------|---------|---------|
| dr-rahul-tengse.webp | ✅ Hero | ✅ Profile | — | — | — | — | — | — | — |
| shivneri-hospital.webp | ✅ Hospital preview | ✅ Association | — | — | — | — | ✅ | ✅ | — |
| av-fistula.webp | — | — | ✅ AV Fistula card | — | — | — | — | — | — |
| permcath.webp | — | — | ✅ Permcath card | — | — | — | — | — | — |
| kidney-awareness-1.webp | — | — | — | — | ✅ | — | ✅ | — | — |
| media-1.webp | ✅ Preview | — | — | — | — | ✅ Card | — | — | — |
| media-2.webp | ✅ Preview | — | — | — | — | ✅ Card | — | — | — |
| gallery-1.webp | ✅ Preview | — | — | — | — | — | ✅ Grid | — | — |
| gallery-2.webp | ✅ Preview | — | — | — | — | — | ✅ Grid | — | — |
| logo.png | Header | Header | Header | Header | Header | Header | Header | Header | Header |

---

## ALT TEXT AUDIT

| Image | Current Alt Text | Quality | Status |
|-------|-----------------|---------|--------|
| dr-rahul-tengse.webp (hero) | "Dr. Rahul Bhaskarrao Tengse, Kidney Specialist in Parbhani" | ✅ Descriptive, includes name + role + location | ✅ |
| dr-rahul-tengse.webp (profile) | "Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist, Parbhani" | ✅ Descriptive | ✅ |
| shivneri-hospital.webp | "Shivneri Super Speciality & Surya ICU Hospital Reception, Parbhani" | ✅ Full name + location | ✅ |
| av-fistula.webp | "AV Fistula Diagram — Dialysis Access Awareness" | ✅ Educational context clear | ✅ |
| permcath.webp | "Permcath Procedure Awareness — Dialysis Care" | ✅ Educational context clear | ✅ |
| kidney-awareness-1.webp | "Kidney Health Awareness — Dr. Rahul Bhaskarrao Tengse" | ✅ Good | ✅ |
| media-1.webp | "Newspaper coverage of kidney awareness programme — Dr. Rahul Bhaskarrao Tengse, Parbhani" | ✅ Descriptive | ✅ |
| media-2.webp | "Newspaper coverage of dialysis care awareness — Dr. Rahul Bhaskarrao Tengse, Parbhani" | ✅ Descriptive | ✅ |
| gallery-1.webp | "Shivneri Super Speciality & Surya ICU Hospital, Parbhani" | ✅ Good | ✅ |
| gallery-2.webp | "Kidney Health Awareness Programme — Dr. Rahul Bhaskarrao Tengse, Parbhani" | ✅ Good | ✅ |
| logo.png | "Dr. Rahul Bhaskarrao Tengse Kidney Specialist Logo" | ✅ Descriptive | ✅ |

**All current images have descriptive alt text. ✅**

---

## SEO FILENAME QUALITY CHECK

| Filename | SEO Quality | Issues | Recommended Name |
|----------|------------|--------|-----------------|
| dr-rahul-tengse.webp | ✅ Good | Could include specialty | `dr-rahul-tengse-kidney-specialist-parbhani.webp` |
| shivneri-hospital.webp | ✅ Good | Could be more specific | `shivneri-super-speciality-surya-icu-hospital-parbhani.webp` |
| av-fistula.webp | ✅ Good | | `av-fistula-dialysis-awareness.webp` |
| permcath.webp | ✅ Good | | `permcath-procedure-dialysis-awareness.webp` |
| permcath (2).webp | ❌ Bad | Space in filename, duplicate | Delete this file |
| kidney-awareness-1.webp | ✅ Good | | `kidney-health-awareness-dr-rahul-tengse-parbhani.webp` |
| media-1.webp | ⚠️ Generic | Generic number | `kidney-awareness-news-dr-rahul-tengse-parbhani.webp` |
| media-2.webp | ⚠️ Generic | Generic number | `dialysis-care-news-dr-rahul-tengse-parbhani.webp` |
| gallery-1.webp | ⚠️ Generic | Generic number | `shivneri-hospital-parbhani-gallery.webp` |
| gallery-2.webp | ⚠️ Generic | Generic number | `kidney-awareness-programme-gallery-parbhani.webp` |
| logo.png | ✅ Acceptable | Not a search-indexed asset | Keep as-is |

**Note:** SEO filename improvements are optional for v1. Rename only in a dedicated image optimization batch to avoid breaking import paths.

---

## IMAGE OPTIMIZATION STATUS

| Image | Target Max Size | Current Format | srcSet Defined | Lazy Load | Notes |
|-------|----------------|----------------|----------------|-----------|-------|
| dr-rahul-tengse.webp | < 150KB | WebP ✅ | ❌ Empty array | ✅ Assumed | srcSet needs 400w/800w/1200w variants |
| shivneri-hospital.webp | < 120KB | WebP ✅ | ❌ Empty array | ✅ Assumed | |
| av-fistula.webp | < 80KB | WebP ✅ | N/A | ✅ | Educational graphic |
| permcath.webp | < 80KB | WebP ✅ | N/A | ✅ | Educational graphic |
| kidney-awareness-1.webp | < 80KB | WebP ✅ | N/A | ✅ | |
| media-1.webp | < 60KB | WebP ✅ | N/A | ✅ | Thumbnail + modal version |
| media-2.webp | < 60KB | WebP ✅ | N/A | ✅ | |
| gallery-1.webp | < 50KB | WebP ✅ | N/A | ✅ | Thumbnail + full modal |
| gallery-2.webp | < 50KB | WebP ✅ | N/A | ✅ | |
| logo.png | < 20KB | PNG | N/A | N/A | Consider WebP version |

**Action items:**
- Doctor image srcSet needs responsive variants (400w, 800w, 1200w) — handle in image optimization batch
- Hospital image srcSet same
- Actual file sizes not verified in this batch — add size verification to next image optimization pass

---

## PRIVACY STATUS SUMMARY

| Category | Privacy Reviewed | Patient Data Risk | Status |
|----------|-----------------|------------------|--------|
| Doctor photos | ✅ Yes | None — doctor only | ✅ Clear |
| Hospital reception | ✅ Yes | None (reception area) | ✅ Clear |
| Dialysis graphics | ✅ Yes | Educational only, no patient | ✅ Clear |
| Awareness poster | ✅ Yes | No patient data | ✅ Clear |
| Media cards (1–2) | ✅ Privacy-reviewed | Noted as clear | ✅ Clear |
| Gallery (1–2) | ✅ Privacy-reviewed | No patient visible | ✅ Clear |
| Upcoming news1–4 | ❌ Not yet received | Unknown | ⚠️ Review required |

---

## INSTAGRAM SCREENSHOT RULE

**Do not embed Instagram screenshots or posts directly.**
- Only link to profile: `https://www.instagram.com/drrahultengse/`
- This rule is already implemented in the project
- No Instagram screenshot is in any asset folder — ✅ Compliant

---

*Document generated: Content Refinement Phase — Batch 1*
*No images were modified, moved, or deleted. This is an inventory document only.*
