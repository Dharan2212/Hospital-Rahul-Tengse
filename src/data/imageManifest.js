/**
 * imageManifest.js — Frontend image manifest
 *
 * Controls which images render in the UI.
 *   frontendUseAllowed: true  → image is rendered
 *   frontendUseAllowed: false → placeholder shown instead
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠  VITE PRODUCTION NOTE
 *    In development, /src/assets/... paths resolve via Vite's dev server.
 *    For a production build with hashed filenames, replace string paths with
 *    ES module imports at the top of this file, e.g.:
 *      import drHeroImg from '../assets/images/doctor/dr-rahul-tengse.webp';
 *    Then set src: drHeroImg  below.
 *    Current string paths work correctly in development (vite dev) and for
 *    static-file hosting where assets are served without hashing.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * FILE PLACEMENT (developer must place files here before activating):
 *   src/assets/images/doctor/dr-rahul-tengse.webp
 *   src/assets/images/hospital/shivneri-hospital.webp
 *   src/assets/images/dialysis/av-fistula.webp
 *   src/assets/images/dialysis/permcath.webp
 *   src/assets/images/media/media-1.webp
 *   src/assets/images/media/media-2.webp
 *   src/assets/images/gallery/gallery-1.webp
 *   src/assets/images/gallery/gallery-2.webp
 *   src/assets/images/awareness/kidney-awareness-1.webp
 *   src/assets/images/logo/logo.png
 */

export const imageManifest = {

  // ─── Doctor images ────────────────────────────────────────────────────────
  doctor: {
    hero: {
      src: '/src/assets/images/doctor/dr-rahul-tengse.webp',
      srcSet: [],
      alt: 'Dr. Rahul Tengse, Kidney Specialist in Parbhani',
      status: 'approved',
      frontendUseAllowed: true,
      notes: 'Place dr-rahul-tengse.webp in src/assets/images/doctor/',
    },
    profile: {
      src: '/src/assets/images/doctor/dr-rahul-tengse.webp',
      srcSet: [],
      alt: 'Dr. Rahul Tengse, Consultant Nephrologist, Parbhani',
      status: 'approved',
      frontendUseAllowed: true,
      notes: 'Same source as hero image.',
    },
  },

  // ─── Hospital images ──────────────────────────────────────────────────────
  hospital: {
    reception: {
      src: '/src/assets/images/hospital/shivneri-hospital.webp',
      srcSet: [],
      alt: 'Shivneri Super Speciality & Surya ICU Hospital Reception, Parbhani',
      status: 'approved',
      frontendUseAllowed: true,
      notes: 'Place shivneri-hospital.webp in src/assets/images/hospital/',
    },
  },

  // ─── Dialysis educational graphics ───────────────────────────────────────
  // Components access these as imageManifest.dialysis[0], imageManifest.dialysis[1]
  dialysis: [
    {
      id: 'av-fistula',
      src: '/src/assets/images/dialysis/av-fistula.webp',
      alt: 'AV Fistula Diagram — Dialysis Access Awareness',
      status: 'approved',
      frontendUseAllowed: true,
      notes: 'Educational graphic only. Non-procedural. Place in src/assets/images/dialysis/',
    },
    {
      id: 'permcath',
      src: '/src/assets/images/dialysis/permcath.webp',
      alt: 'Permcath Procedure Awareness — Dialysis Care',
      status: 'approved',
      frontendUseAllowed: true,
      notes: 'Educational graphic only. Non-procedural. Place in src/assets/images/dialysis/',
    },
  ],

  // ─── Awareness images ─────────────────────────────────────────────────────
  awareness: [
    {
      id: 'kidney-awareness-1',
      src: '/src/assets/images/awareness/kidney-awareness-1.webp',
      alt: 'Kidney Health Awareness — Dr. Rahul Tengse',
      status: 'approved',
      frontendUseAllowed: true,
      notes: 'Place kidney-awareness-1.webp in src/assets/images/awareness/',
    },
  ],

  // ─── Media / newspaper images ─────────────────────────────────────────────
  // Individual media entries are managed in mediaData.js
  // This array holds manifest-level metadata only
  media: [],

  // ─── Gallery images ───────────────────────────────────────────────────────
  // Individual gallery entries are managed in galleryData.js
  gallery: [],

  // ─── Kidney care graphics ─────────────────────────────────────────────────
  kidneyCare: [],

  // ─── Open Graph / social preview ──────────────────────────────────────────
  og: {
    default: {
      src: null,
      alt: 'Dr. Rahul Tengse Kidney Specialist Parbhani',
      status: 'pending-client-approval',
      frontendUseAllowed: false,
      notes: 'OG image (1200×630) required. Design after doctor photo and logo are confirmed.',
    },
  },

  // ─── Favicon ──────────────────────────────────────────────────────────────
  favicon: {
    src: null,
    status: 'pending-client-approval',
    frontendUseAllowed: false,
    notes: 'Logo mark required before favicon can be generated.',
  },
};
