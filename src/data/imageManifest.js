/**
 * imageManifest.js — PRODUCTION SAFE VERSION (Vite compatible)
 *
 * Uses ES module imports so images work after build (Netlify / Vercel).
 *
 * OG IMAGE NOTE:
 *   The doctor image is used as the default Open Graph / social preview image.
 *   For best social sharing results, an ideal OG image is 1200×630px.
 *   Replace og.default.src with a properly cropped 1200×630 image once available.
 *   The OG image URL is made absolute using VITE_SITE_URL (see src/utils/seo.js).
 *
 * PERMCATH DUPLICATE NOTE:
 *   src/assets/images/dialysis/permcath (2).webp is an unused duplicate file.
 *   It is safe to delete. Only permcath.webp is imported here.
 */

// ─── IMPORT ALL IMAGES ─────────────────────────────────────────────

import doctorImg from '../assets/images/doctor/dr-rahul-tengse.webp';
import hospitalImg from '../assets/images/hospital/shivneri-hospital.webp';

import avFistulaImg from '../assets/images/dialysis/av-fistula.webp';
import permcathImg from '../assets/images/dialysis/permcath.webp';

import awarenessImg from '../assets/images/awareness/kidney-awareness-1.webp';

// ─── MANIFEST ─────────────────────────────────────────────────────

export const imageManifest = {

  // ─── Doctor images ─────────────────────────────────────────────
  doctor: {
    hero: {
      src: doctorImg,
      srcSet: [],
      alt: 'Dr. Rahul Tengse, Kidney Specialist in Parbhani',
      status: 'approved',
      frontendUseAllowed: true,
    },
    profile: {
      src: doctorImg,
      srcSet: [],
      alt: 'Dr. Rahul Tengse, Consultant Nephrologist, Parbhani',
      status: 'approved',
      frontendUseAllowed: true,
    },
  },

  // ─── Hospital images ────────────────────────────────────────────
  hospital: {
    reception: {
      src: hospitalImg,
      srcSet: [],
      alt: 'Shivneri Super Speciality & Surya ICU Hospital Reception, Parbhani',
      status: 'approved',
      frontendUseAllowed: true,
    },
  },

  // ─── Dialysis educational graphics ─────────────────────────────
  dialysis: [
    {
      id: 'av-fistula',
      src: avFistulaImg,
      alt: 'AV Fistula Diagram — Dialysis Access Awareness',
      status: 'approved',
      frontendUseAllowed: true,
    },
    {
      id: 'permcath',
      src: permcathImg,
      alt: 'Permcath Procedure Awareness — Dialysis Care',
      status: 'approved',
      frontendUseAllowed: true,
    },
  ],

  // ─── Awareness images ──────────────────────────────────────────
  awareness: [
    {
      id: 'kidney-awareness-1',
      src: awarenessImg,
      alt: 'Kidney Health Awareness — Dr. Rahul Tengse',
      status: 'approved',
      frontendUseAllowed: true,
    },
  ],

  // ─── Media (managed in mediaData.js) ───────────────────────────
  media: [],

  // ─── Gallery (managed in galleryData.js) ───────────────────────
  gallery: [],

  // ─── Kidney care graphics ─────────────────────────────────────
  kidneyCare: [],

  // ─── Open Graph / Social Preview ──────────────────────────────
  // Using the doctor image as default OG image (approved).
  // For ideal social preview, replace with a 1200×630px image once available.
  // The SEO utility (src/utils/seo.js) prepends VITE_SITE_URL to make this absolute.
  og: {
    default: {
      src: doctorImg,
      alt: 'Dr. Rahul Tengse Kidney Specialist Parbhani',
      status: 'approved',
      frontendUseAllowed: true,
    },
  },

  // ─── Favicon ──────────────────────────────────────────────────
  // favicon.png is placed in /public/ by scripts/prepare-assets.mjs (prebuild).
  favicon: {
    src: '/favicon.png',
    status: 'approved',
    frontendUseAllowed: true,
  },
};
