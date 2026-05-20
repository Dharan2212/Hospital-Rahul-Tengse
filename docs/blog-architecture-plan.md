# Blog Architecture Plan — Dr. Rahul Bhaskarrao Tengse Website
# Phase: Content Refinement | Batch 1

> **This is a PLANNING document only.**
> No blog pages are built in this batch.
> No blog components are created in this batch.
> This maps structure, SEO, routing, and content planning for future implementation.

---

## BLOG TOPIC REGISTRY

The following 20 blog topics have been identified for future implementation:

| # | Topic | Slug | Category | Priority | SEO Potential |
|---|-------|------|----------|----------|--------------|
| 1 | Know Your Kidneys | `know-your-kidneys` | Education | P1 | High — broad educational query |
| 2 | What is Kidney Disease? | `what-is-kidney-disease` | Education | P1 | High — primary patient query |
| 3 | Chronic Kidney Disease (CKD) | `chronic-kidney-disease-ckd` | Education | P1 | High — searched by patients |
| 4 | Causes of Kidney Failure | `causes-of-kidney-failure` | Education | P1 | High — "why kidneys fail" searches |
| 5 | Creatinine Stages of CKD | `creatinine-stages-ckd` | Education | P1 | High — "creatinine levels" is a top query |
| 6 | Dialysis | `dialysis` | Dialysis | P1 | High — very broad |
| 7 | Hemodialysis | `hemodialysis` | Dialysis | P1 | High — specific procedure query |
| 8 | Peritoneal Dialysis | `peritoneal-dialysis` | Dialysis | P2 | Medium |
| 9 | CAPD | `capd-continuous-ambulatory-peritoneal-dialysis` | Dialysis | P2 | Medium |
| 10 | Dialysis That Fits You | `dialysis-that-fits-you` | Dialysis | P2 | Medium — decision-making content |
| 11 | Vascular Access | `vascular-access-dialysis` | Dialysis | P2 | Medium — AV Fistula/Permcath queries |
| 12 | HCV and Dialysis | `hcv-and-dialysis` | Dialysis | P3 | Medium — specific patient group |
| 13 | Erythropoietin & Vitamin D3 | `erythropoietin-vitamin-d3-kidney` | Dialysis | P3 | Medium — medical education |
| 14 | Diet in CKD & Dialysis | `diet-in-ckd-and-dialysis` | Awareness | P2 | High — "kidney disease diet" queries |
| 15 | Dialysis Patients Advice | `dialysis-patients-advice` | Dialysis | P2 | Medium |
| 16 | Kidney Transplantation | `kidney-transplantation-guidance` | Transplant | P2 | High |
| 17 | Diabetes & Kidney | `diabetes-and-kidney` | Awareness | P1 | High — very common comorbidity |
| 18 | Kidney Stones | `kidney-stones` | Awareness | P2 | High — very searched |
| 19 | Infections & Kidney | `infections-and-kidney` | Awareness | P3 | Medium |
| 20 | Dialysis & Angiogram | `dialysis-and-angiogram` | Dialysis | P3 | Low-Medium |

---

## BLOG ROUTE STRUCTURE

### Recommended URL Pattern
```
/blog                          → Blog index / listing page
/blog/{slug}                   → Individual article page
/blog/category/{category-slug} → Category listing page (optional, v2)
```

### Example Routes
```
/blog
/blog/know-your-kidneys
/blog/what-is-kidney-disease
/blog/chronic-kidney-disease-ckd
/blog/dialysis
/blog/diabetes-and-kidney
```

### Slug Rules
- All lowercase, hyphen-separated
- No special characters
- Max 60 characters for SEO
- Must match article `id` field in blog data file

---

## RECOMMENDED DATA STRUCTURE

### Blog Data File: `src/data/blogData.js`

```javascript
// PLANNED STRUCTURE — not yet created

export const blogCategories = [
  { id: 'education', label: 'Kidney Education', slug: 'kidney-education' },
  { id: 'dialysis', label: 'Dialysis', slug: 'dialysis' },
  { id: 'awareness', label: 'Patient Awareness', slug: 'patient-awareness' },
  { id: 'transplant', label: 'Transplant Guidance', slug: 'transplant-guidance' },
];

export const blogPosts = [
  {
    id: 'know-your-kidneys',
    slug: 'know-your-kidneys',
    title: 'Know Your Kidneys',
    metaTitle: 'Know Your Kidneys | Dr. Rahul Bhaskarrao Tengse',
    metaDescription: 'Learn how your kidneys work, why they matter, and early signs of kidney problems. Patient education by Dr. Rahul Bhaskarrao Tengse, Parbhani.',
    category: 'education',
    publishedDate: '',        // ISO date — client to provide
    lastModified: '',         // ISO date — for schema
    author: 'Dr. Rahul Bhaskarrao Tengse',
    featuredImage: {
      src: '',                // Path after image is added
      alt: '',                // Descriptive alt text
      caption: ''
    },
    excerpt: '',              // 1–2 sentence summary for listing page
    tags: [],
    body: [],                 // Array of content blocks — see body structure
    disclaimer: true,         // Medical disclaimer required at bottom
    relatedPosts: [],         // Array of slugs
    approved: false,          // Set true after client approval
    medicallyReviewed: false, // Set true after medical content review
  }
];
```

### Blog Body Content Block Structure
```javascript
body: [
  { type: 'paragraph', text: '...' },
  { type: 'heading', level: 2, text: '...' },
  { type: 'heading', level: 3, text: '...' },
  { type: 'list', style: 'unordered', items: ['...', '...'] },
  { type: 'list', style: 'ordered', items: ['...', '...'] },
  { type: 'callout', variant: 'info' | 'warning' | 'tip', text: '...' },
  { type: 'image', src: '...', alt: '...', caption: '...' },
  { type: 'disclaimer', variant: 'general' | 'transplant' | 'dialysis' },
]
```

---

## RECOMMENDED COMPONENT STRUCTURE

### Files to Create (Future Batch)
```
src/
  pages/
    Blog.jsx              ← Blog listing page (/blog)
    BlogArticle.jsx       ← Individual article page (/blog/:slug)
    BlogCategory.jsx      ← Category listing (optional v2)
  components/
    blog/
      BlogCard.jsx        ← Article card for listing page
      BlogGrid.jsx        ← Grid of BlogCards
      BlogArticleBody.jsx ← Article content renderer
      BlogSidebar.jsx     ← Related posts, CTA, categories
      BlogHero.jsx        ← Article hero with featured image
      BlogCTA.jsx         ← CTA at end of article → /appointment
      BlogDisclaimer.jsx  ← Medical disclaimer block at end of article
  data/
    blogData.js           ← All blog articles and categories
```

---

## SEO STRATEGY PER ARTICLE

### Article Schema Type: `Article` (or `MedicalWebPage`)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{article title}",
  "description": "{meta description}",
  "author": {
    "@type": "Physician",
    "name": "Dr. Rahul Bhaskarrao Tengse"
  },
  "publisher": {
    "@type": "MedicalClinic",
    "name": "Shivneri Super Speciality & Surya ICU Hospital"
  },
  "datePublished": "{ISO date}",
  "dateModified": "{ISO date}",
  "url": "https://{domain}/blog/{slug}"
}
```

### Per-Article Requirements
| Requirement | Rule |
|-------------|------|
| Meta title | "{Article Title} \| Dr. Rahul Bhaskarrao Tengse" (max 60 chars) |
| Meta description | 130–155 chars. Include primary keyword + location where natural |
| OG type | "article" |
| Canonical | `/blog/{slug}` |
| H1 | One H1 matching article title |
| Heading hierarchy | H2 for sections, H3 for subsections |
| Featured image | Required. Alt text describing the concept. WebP < 100KB |
| Medical disclaimer | Required at end of every article |
| Internal CTA | "Book Appointment" → /appointment at end of article |
| Related posts | 2–3 related articles linked at bottom |

---

## CATEGORY STRUCTURE

| Category | Slug | Articles | Internal Link Target |
|----------|------|----------|---------------------|
| Kidney Education | `kidney-education` | Know Your Kidneys, What is Kidney Disease, CKD, Causes of Kidney Failure, Creatinine Stages | /patient-awareness |
| Dialysis | `dialysis` | Dialysis, Hemodialysis, Peritoneal Dialysis, CAPD, Dialysis That Fits You, Vascular Access, HCV, Erythropoietin, Diet, Advice, Angiogram | /dialysis-care |
| Patient Awareness | `patient-awareness` | Diabetes & Kidney, Kidney Stones, Infections & Kidney, Diet | /patient-awareness |
| Transplant Guidance | `transplant-guidance` | Kidney Transplantation | /kidney-transplant-guidance |

---

## INTERNAL LINKING STRATEGY

### Blog → Site Pages
```
Every blog article → "Book Appointment" CTA → /appointment
Dialysis articles → "Learn about our Dialysis Care" → /dialysis-care
Transplant articles → "Kidney Transplant Guidance" → /kidney-transplant-guidance
Awareness articles → "Patient Awareness" → /patient-awareness
All articles → Related services → /services
```

### Site Pages → Blog
```
/patient-awareness → Link to relevant blog articles ("Read more about CKD →")
/dialysis-care → Link to dialysis blog articles
/kidney-transplant-guidance → Link to transplant blog article
/services → Link to relevant blog article per service card
```

### Blog → Blog (Related Posts)
```
know-your-kidneys → what-is-kidney-disease, chronic-kidney-disease-ckd
dialysis → hemodialysis, peritoneal-dialysis
diabetes-and-kidney → know-your-kidneys, creatinine-stages-ckd
kidney-transplantation → post-transplant follow-up guidance
```

---

## FEATURED IMAGE STRATEGY

| Category | Image Style | Alt Text Pattern |
|----------|-------------|-----------------|
| Kidney Education | Anatomical diagram, illustration | "Diagram showing {concept} — kidney health education" |
| Dialysis | Dialysis process graphic | "{Dialysis type} — awareness illustration" |
| Patient Awareness | Symptom graphic, infographic | "{Condition} awareness — kidney health" |
| Transplant | Consultation illustration | "Kidney transplant guidance — awareness illustration" |

### Image Rules for Blog
- Never use patient photos
- Use educational illustrations, diagrams, icons-based graphics
- Max 100KB per featured image (WebP)
- Filename: `{slug}-featured.webp`
- Stored in: `src/assets/images/blog/`
- All images need client approval before use

---

## BLOG LISTING PAGE PLAN

### `/blog` — Blog Index
| Element | Content |
|---------|---------|
| Page hero | "Kidney Health Articles & Awareness" |
| Eyebrow | "Patient education" |
| Description | "Kidney health articles and awareness content by Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist in Parbhani." |
| Filter | Category tabs: All, Kidney Education, Dialysis, Patient Awareness, Transplant |
| Card grid | BlogCard components, 3-column desktop, 2-column tablet, 1-column mobile |
| Each card | Featured image, category tag, title, excerpt, "Read More" link |
| Disclaimer | General medical disclaimer at bottom |
| SEO | Blog listing schema: BlogPosting collection or WebPage |

---

## CONTENT CREATION RULES

| Rule | Requirement |
|------|-------------|
| No invented medical claims | All content must be medically accurate, general, educational |
| No experience/award claims | No "X years experience", no rankings |
| No patient testimonials | No patient stories unless explicit written consent |
| No guaranteed outcomes | No "cure", "100% success", "painless" claims |
| Medical disclaimer required | Every article must end with the general medical disclaimer |
| Qualification not repeated per article | Doctor name and qualification shown once per article |
| Client review required | All articles must be reviewed and approved by client before publishing |
| Translation | Marathi translations must be client-provided or professionally translated — no machine translation |

---

## TECHNICAL REQUIREMENTS FOR BLOG

| Requirement | Implementation |
|-------------|---------------|
| React Router | New routes: `/blog`, `/blog/:slug`, `/blog/category/:category` |
| SEO component | Pass per-article seo object from blogData.js |
| Schema | Article schema built per article |
| sitemap.xml | Add `/blog` and all `/blog/{slugs}` |
| robots.txt | No changes needed — all blog pages should be indexed |
| Image lazy load | All blog images should be lazy-loaded |
| Responsive | Blog must work on 320px–1920px |
| Font | Blog article body uses Inter (body font — already loaded) |
| Code block | Not needed for this content type |

---

## BLOG BUILD PHASES (FUTURE)

| Phase | Work |
|-------|------|
| Blog Phase 1 | Create blogData.js structure + BlogCard + BlogGrid + Blog listing page |
| Blog Phase 2 | Create BlogArticle page + BlogArticleBody renderer |
| Blog Phase 3 | Add first 5 priority articles (P1 topics) |
| Blog Phase 4 | Add remaining 15 articles |
| Blog Phase 5 | Add category filtering + related posts |
| Blog Phase 6 | Add sitemap entries + SEO per article |

---

*Document generated: Content Refinement Phase — Batch 1*
*No blog components were created. This is an architecture planning document only.*
