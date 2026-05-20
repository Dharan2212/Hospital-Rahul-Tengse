import { imageManifest } from '../data/imageManifest.js';

const fallbackSiteUrl = 'https://example.com';

export function normalizeSiteUrl(url) {
  const value = typeof url === 'string' && url.trim() ? url.trim() : fallbackSiteUrl;
  return value.replace(/\/+$/, '');
}

export const siteSeoConfig = {
  defaultSiteUrl: normalizeSiteUrl(import.meta.env.VITE_SITE_URL || fallbackSiteUrl),
  defaultTitle: 'Dr. Rahul Bhaskarrao Tengse | Kidney Specialist Parbhani',
  titleTemplate: '%s',
  defaultDescription:
    'Consult Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist and Kidney Transplant Physician in Parbhani — for kidney disease, dialysis care, kidney transplant guidance, and report review.',
  defaultOgImage:
    imageManifest.og?.default?.frontendUseAllowed === true && imageManifest.og?.default?.src
      ? imageManifest.og.default.src
      : null,
  twitterCard: 'summary_large_image',
  locale: 'en_IN'
};

export function buildCanonicalUrl(pathname = '/') {
  const cleanPath = pathname === '/' ? '/' : `/${String(pathname).replace(/^\/+|\/+$/g, '')}`;
  return `${siteSeoConfig.defaultSiteUrl}${cleanPath === '/' ? '/' : cleanPath}`;
}

export function getDefaultOgImage() {
  return siteSeoConfig.defaultOgImage;
}

/**
 * buildAbsoluteOgImageUrl - converts a relative Vite-processed image path
 * to an absolute URL by prepending VITE_SITE_URL.
 *
 * Social media crawlers require absolute URLs for og:image to render previews.
 * Set VITE_SITE_URL in Netlify environment variables for this to work in production.
 */
export function buildAbsoluteOgImageUrl(src) {
  if (!src) return null;
  if (/^https?:\/\//i.test(src)) return src;
  const base = siteSeoConfig.defaultSiteUrl;
  const path = src.startsWith('/') ? src : `/${src}`;
  return `${base}${path}`;
}

export const seoPages = [
  {
    path: '/',
    title: 'Dr. Rahul Bhaskarrao Tengse | Kidney Specialist in Parbhani',
    description:
      'Consult Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist and Kidney Transplant Physician in Parbhani — for kidney disease, dialysis care, kidney transplant guidance, diabetic kidney disease, and report review.',
    ogTitle: 'Dr. Rahul Bhaskarrao Tengse | Kidney Specialist in Parbhani',
    ogDescription:
      'Trusted kidney care in Parbhani by Dr. Rahul Bhaskarrao Tengse — Consultant Nephrologist. Specialised guidance for kidney disease, dialysis, and transplant.',
    twitterDescription:
      'Consult Dr. Rahul Bhaskarrao Tengse, Nephrologist in Parbhani, for kidney disease, dialysis care and kidney transplant guidance.',
    ogType: 'website',
    schemaType: 'Physician',
    canonicalPath: '/',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/about',
    title: 'About Dr. Rahul Bhaskarrao Tengse | Consultant Nephrologist Parbhani',
    description:
      'Dr. Rahul Bhaskarrao Tengse is a Consultant Nephrologist and Kidney Transplant Physician in Parbhani — specialising in CKD, dialysis care, diabetic kidney disease, and transplant guidance at Shivneri Super Speciality Hospital.',
    ogTitle: 'About Dr. Rahul Bhaskarrao Tengse | Nephrologist & Kidney Specialist Parbhani',
    ogDescription:
      'Meet Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist at Shivneri Super Speciality Hospital, Parbhani — expert in kidney disease, dialysis, and transplant guidance.',
    twitterDescription:
      'Dr. Rahul Bhaskarrao Tengse — Consultant Nephrologist in Parbhani. Specialised kidney care, dialysis guidance, and transplant consultation.',
    ogType: 'website',
    schemaType: 'Physician',
    canonicalPath: '/about',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/services',
    title: 'Kidney Care Services | Dr. Rahul Bhaskarrao Tengse — Nephrologist Parbhani',
    description:
      'Kidney care services by Dr. Rahul Bhaskarrao Tengse in Parbhani — including CKD management, dialysis care, SLED, peritoneal dialysis, nephrotic syndrome, kidney biopsy, transplant guidance, and report review.',
    ogTitle: 'Kidney Care Services | Dr. Rahul Bhaskarrao Tengse Parbhani',
    ogDescription:
      'Comprehensive nephrology services in Parbhani — dialysis, transplant guidance, kidney disease consultation, biopsy, nephrotic syndrome, and more.',
    twitterDescription:
      'Kidney care services by Dr. Rahul Tengse, Nephrologist in Parbhani — dialysis, transplant guidance, CKD management, and specialist consultation.',
    ogType: 'website',
    schemaType: 'MedicalWebPage',
    canonicalPath: '/services',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/dialysis-care',
    title: 'Dialysis Care Parbhani | Haemodialysis, Peritoneal Dialysis & AV Fistula Guidance',
    description:
      'Patient-friendly dialysis care guidance by Dr. Rahul Tengse in Parbhani — covering haemodialysis, SLED, peritoneal dialysis, AV Fistula, Permcath, HCV dialysis support, and patient safety.',
    ogTitle: 'Dialysis Care Parbhani | Dr. Rahul Bhaskarrao Tengse Nephrologist',
    ogDescription:
      'Educational dialysis guidance for patients in Parbhani — haemodialysis, SLED, peritoneal dialysis, AV Fistula, and Permcath awareness by Dr. Rahul Tengse.',
    twitterDescription:
      'Dialysis care guidance in Parbhani by Dr. Rahul Tengse — haemodialysis, peritoneal dialysis, and vascular access awareness.',
    ogType: 'website',
    schemaType: 'MedicalWebPage',
    canonicalPath: '/dialysis-care',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/kidney-transplant-guidance',
    title: 'Kidney Transplant Guidance Parbhani | Dr. Rahul Bhaskarrao Tengse Nephrologist',
    description:
      'Kidney transplant guidance in Parbhani by Dr. Rahul Bhaskarrao Tengse — pre-transplant evaluation awareness, living donor guidance, deceased donor information, post-transplant follow-up, and rejection awareness.',
    ogTitle: 'Kidney Transplant Guidance | Dr. Rahul Bhaskarrao Tengse Parbhani',
    ogDescription:
      'Structured kidney transplant guidance by Dr. Rahul Tengse — evaluation awareness, donor discussion, post-transplant follow-up, and rejection monitoring. Educational content only.',
    twitterDescription:
      'Kidney transplant guidance in Parbhani by Dr. Rahul Tengse — evaluation, donor information, and post-transplant care awareness.',
    ogType: 'website',
    schemaType: 'MedicalWebPage',
    canonicalPath: '/kidney-transplant-guidance',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/patient-awareness',
    title: 'Kidney Health Awareness | CKD, Dialysis & Transplant Education | Dr. Rahul Tengse Parbhani',
    description:
      'Learn about kidney disease, CKD stages, diabetes and kidney health, high blood pressure and kidneys, dialysis awareness, transplant guidance, and kidney screening in Parbhani — by Dr. Rahul Bhaskarrao Tengse.',
    ogTitle: 'Kidney Health Awareness | Dr. Rahul Bhaskarrao Tengse Parbhani',
    ogDescription:
      'Educational kidney health content from Dr. Rahul Tengse — understanding CKD, warning signs, diabetes-related kidney risks, dialysis, and when to see a specialist.',
    twitterDescription:
      'Kidney health awareness by Dr. Rahul Tengse, Nephrologist in Parbhani — CKD stages, symptoms, and prevention guidance.',
    ogType: 'article',
    schemaType: 'MedicalWebPage',
    canonicalPath: '/patient-awareness',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/media-news',
    title: 'Media Coverage — Kidney Awareness | Dr. Rahul Bhaskarrao Tengse, Nephrologist Parbhani',
    description:
      'Newspaper and media coverage of kidney health awareness, dialysis care guidance, and nephrology education by Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist in Parbhani.',
    ogTitle: 'Media Coverage | Kidney Awareness — Dr. Rahul Bhaskarrao Tengse, Parbhani',
    ogDescription:
      'Local and regional media coverage of kidney disease awareness and dialysis care education by Dr. Rahul Bhaskarrao Tengse, Nephrologist at Shivneri Super Speciality Hospital, Parbhani.',
    twitterDescription:
      'Media recognition for kidney health awareness work by Dr. Rahul Tengse, Consultant Nephrologist in Parbhani.',
    ogType: 'website',
    schemaType: 'WebPage',
    canonicalPath: '/media-news',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/gallery',
    title: 'Gallery — Hospital & Kidney Awareness | Dr. Rahul Bhaskarrao Tengse, Parbhani',
    description:
      'Photo gallery of Dr. Rahul Bhaskarrao Tengse, Shivneri Super Speciality & Surya ICU Hospital, kidney health awareness programmes, dialysis care, and nephrology education in Parbhani.',
    ogTitle: 'Photo Gallery | Dr. Rahul Bhaskarrao Tengse, Kidney Specialist Parbhani',
    ogDescription:
      'Approved image gallery — hospital facilities, kidney awareness programmes, and dialysis care education by Dr. Rahul Tengse, Nephrologist, Parbhani.',
    twitterDescription:
      'Gallery of Dr. Rahul Tengse — kidney care, dialysis awareness, and hospital images from Parbhani.',
    ogType: 'website',
    schemaType: 'WebPage',
    canonicalPath: '/gallery',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/appointment',
    title: 'Book Appointment | Dr. Rahul Bhaskarrao Tengse — Kidney Specialist Parbhani',
    description:
      'Request a kidney care appointment with Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist in Parbhani — for kidney disease consultation, dialysis care, transplant guidance, or report review.',
    ogTitle: 'Book Kidney Care Appointment | Dr. Rahul Bhaskarrao Tengse, Parbhani',
    ogDescription:
      'Request an appointment with Dr. Rahul Tengse, Nephrologist in Parbhani. The hospital team will contact you to confirm your consultation.',
    twitterDescription:
      'Book a kidney care appointment with Dr. Rahul Tengse, Consultant Nephrologist in Parbhani.',
    ogType: 'website',
    schemaType: 'WebPage',
    canonicalPath: '/appointment',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/contact',
    title: 'Contact | Dr. Rahul Bhaskarrao Tengse — Kidney Specialist, Shivneri Hospital Parbhani',
    description:
      'Contact Dr. Rahul Bhaskarrao Tengse at Shivneri Super Speciality & Surya ICU Hospital, Parbhani — phone, WhatsApp, email, address, and OPD timing for kidney care appointments.',
    ogTitle: 'Contact Dr. Rahul Bhaskarrao Tengse | Nephrologist, Parbhani',
    ogDescription:
      'Reach the kidney care team at Shivneri Super Speciality & Surya ICU Hospital, Parbhani — contact Dr. Rahul Tengse for consultation, dialysis guidance, or appointment enquiries.',
    twitterDescription:
      'Contact Dr. Rahul Tengse, Kidney Specialist at Shivneri Super Speciality Hospital, Parbhani.',
    ogType: 'website',
    schemaType: 'MedicalClinic',
    canonicalPath: '/contact',
    noindex: false,
    image: getDefaultOgImage()
  }
];

export function getSeoByPath(pathname = '/') {
  const cleanPath = pathname === '/' ? '/' : `/${String(pathname).replace(/^\/+|\/+$/g, '')}`;
  return seoPages.find((page) => page.path === cleanPath) || null;
}
