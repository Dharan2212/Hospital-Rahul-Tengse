import { imageManifest } from '../data/imageManifest.js';

const fallbackSiteUrl = 'https://example.com';

export function normalizeSiteUrl(url) {
  const value = typeof url === 'string' && url.trim() ? url.trim() : fallbackSiteUrl;
  return value.replace(/\/+$/, '');
}

export const siteSeoConfig = {
  defaultSiteUrl: normalizeSiteUrl(import.meta.env.VITE_SITE_URL || fallbackSiteUrl),
  defaultTitle: 'Dr. Rahul Tengse | Kidney Specialist Parbhani',
  titleTemplate: '%s',
  defaultDescription:
    'Dr. Rahul Tengse - Consultant Nephrologist in Parbhani. Expert care for kidney disease, dialysis, and kidney transplant guidance.',
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
    title: 'Dr. Rahul Tengse | Kidney Specialist Parbhani',
    description:
      'Dr. Rahul Tengse - Consultant Nephrologist in Parbhani. Expert care for kidney disease, dialysis, and kidney transplant guidance.',
    ogTitle: 'Dr. Rahul Tengse | Kidney Specialist Parbhani',
    ogDescription:
      'Consultant Nephrologist in Parbhani for kidney disease, dialysis, and kidney transplant guidance.',
    ogType: 'website',
    schemaType: 'Physician',
    canonicalPath: '/',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/about',
    title: 'About Dr. Rahul Tengse | Nephrologist Parbhani',
    description:
      'Learn about Dr. Rahul Tengse, Consultant Nephrologist at Shivneri Super Speciality Hospital. Specialized kidney care in Parbhani.',
    ogTitle: 'About Dr. Rahul Tengse | Nephrologist Parbhani',
    ogDescription:
      'Learn about Dr. Rahul Tengse and his kidney care association with Shivneri Super Speciality Hospital in Parbhani.',
    ogType: 'website',
    schemaType: 'Physician',
    canonicalPath: '/about',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/services',
    title: 'Kidney Care Services | Dr. Rahul Tengse Parbhani',
    description:
      'Comprehensive kidney care services including dialysis, kidney transplant guidance, biopsy, nephrotic syndrome, and more in Parbhani.',
    ogTitle: 'Kidney Care Services | Dr. Rahul Tengse Parbhani',
    ogDescription:
      'Kidney care service guidance including dialysis, transplant guidance, biopsy, nephrotic syndrome, and report review.',
    ogType: 'website',
    schemaType: 'MedicalWebPage',
    canonicalPath: '/services',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/dialysis-care',
    title: 'Dialysis Care Parbhani | Dr. Rahul Tengse',
    description:
      'Dialysis care guidance in Parbhani. Learn about SLED, peritoneal dialysis, AV Fistula, and Permcath from Dr. Rahul Tengse.',
    ogTitle: 'Dialysis Care Parbhani | Dr. Rahul Tengse',
    ogDescription:
      'Patient-friendly dialysis care guidance for SLED, peritoneal dialysis, AV Fistula, and Permcath awareness.',
    ogType: 'website',
    schemaType: 'MedicalWebPage',
    canonicalPath: '/dialysis-care',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/kidney-transplant-guidance',
    title: 'Kidney Transplant Guidance Parbhani | Dr. Rahul Tengse',
    description:
      'Kidney transplant guidance from Dr. Rahul Tengse - evaluation, donor guidance, post-transplant follow-up in Parbhani.',
    ogTitle: 'Kidney Transplant Guidance Parbhani | Dr. Rahul Tengse',
    ogDescription:
      'Kidney transplant guidance covering evaluation awareness, donor guidance, and post-transplant follow-up in Parbhani.',
    ogType: 'website',
    schemaType: 'MedicalWebPage',
    canonicalPath: '/kidney-transplant-guidance',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/patient-awareness',
    title: 'Kidney Health Awareness | Dr. Rahul Tengse Parbhani',
    description:
      'Learn about kidney disease symptoms, diabetes-related kidney risks, and when to consult a kidney specialist in Parbhani.',
    ogTitle: 'Kidney Health Awareness | Dr. Rahul Tengse Parbhani',
    ogDescription:
      'Kidney health awareness on symptoms, diabetes-related kidney risks, and when to consult a kidney specialist.',
    ogType: 'article',
    schemaType: 'MedicalWebPage',
    canonicalPath: '/patient-awareness',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/media-news',
    title: 'Media Coverage | Dr. Rahul Tengse Kidney Specialist',
    description:
      "Newspaper coverage and media recognition for Dr. Rahul Tengse's kidney care awareness work in Parbhani.",
    ogTitle: 'Media Coverage | Dr. Rahul Tengse Kidney Specialist',
    ogDescription:
      "Media coverage and recognition for Dr. Rahul Tengse's kidney care awareness work in Parbhani.",
    ogType: 'website',
    schemaType: 'WebPage',
    canonicalPath: '/media-news',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/gallery',
    title: 'Gallery | Dr. Rahul Tengse Kidney Specialist Parbhani',
    description:
      'Photo gallery of Dr. Rahul Tengse, Shivneri Super Speciality Hospital, awareness programs, and dialysis care.',
    ogTitle: 'Gallery | Dr. Rahul Tengse Kidney Specialist Parbhani',
    ogDescription:
      'Approved gallery for doctor, hospital, awareness program, and dialysis care images.',
    ogType: 'website',
    schemaType: 'WebPage',
    canonicalPath: '/gallery',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/appointment',
    title: 'Book Appointment | Dr. Rahul Tengse Parbhani',
    description:
      'Request a kidney care appointment with Dr. Rahul Tengse in Parbhani. Our team will contact you to confirm.',
    ogTitle: 'Book Appointment | Dr. Rahul Tengse Parbhani',
    ogDescription:
      'Request a kidney care appointment in Parbhani. The team will contact you to confirm timing.',
    ogType: 'website',
    schemaType: 'WebPage',
    canonicalPath: '/appointment',
    noindex: false,
    image: getDefaultOgImage()
  },
  {
    path: '/contact',
    title: 'Contact Dr. Rahul Tengse | Kidney Specialist Parbhani',
    description:
      'Contact Dr. Rahul Tengse at Shivneri Super Speciality & Surya ICU Hospital, Parbhani. Get phone, address, and OPD timings.',
    ogTitle: 'Contact Dr. Rahul Tengse | Kidney Specialist Parbhani',
    ogDescription:
      'Contact information for Dr. Rahul Tengse and Shivneri Super Speciality & Surya ICU Hospital in Parbhani.',
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
