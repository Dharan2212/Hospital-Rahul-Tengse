/**
 * imageManifest.js — PRODUCTION SAFE VERSION (Vite compatible)
 *
 * Uses ES module imports so images work after build (Netlify / Vercel)
 */

// ─── IMPORT ALL IMAGES ─────────────────────────────────────────────

import doctorImg from '../assets/images/doctor/dr-rahul-tengse.webp';
import hospitalImg from '../assets/images/hospital/shivneri-hospital.webp';

import avFistulaImg from '../assets/images/dialysis/av-fistula.webp';
import permcathImg from '../assets/images/dialysis/permcath.webp';

import awarenessImg from '../assets/images/awareness/kidney-awareness-1.webp';

// If needed later
// import media1 from '../assets/images/media/media-1.webp';
// import gallery1 from '../assets/images/gallery/gallery-1.webp';


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

  // ─── Open Graph ───────────────────────────────────────────────
  og: {
    default: {
      src: null,
      alt: 'Dr. Rahul Tengse Kidney Specialist Parbhani',
      status: 'pending-client-approval',
      frontendUseAllowed: false,
    },
  },

  // ─── Favicon ──────────────────────────────────────────────────
  favicon: {
    src: null,
    status: 'pending-client-approval',
    frontendUseAllowed: false,
  },
};