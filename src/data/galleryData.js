/**
 * galleryData.js — PRODUCTION SAFE VERSION (Vite compatible)
 *
 * Uses ES module imports so images work after build (Netlify / Vercel)
 *
 * ─── PRIVACY RULES ───────────────────────────────────────────────────────────
 * Each image requires per-item privacy review and client approval before
 * frontendUseAllowed is set to true.
 * Patient photographs must never be included.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ─── ADDING NEW IMAGES ───────────────────────────────────────────────────────
 * 1. Place optimised WebP image in src/assets/images/gallery/
 * 2. Add import at top of this file
 * 3. Add object below with correct category, approvalStatus, privacyStatus
 * 4. Set frontendUseAllowed: true only after client sign-off
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * VALID CATEGORY VALUES (must match filter tabs in GalleryGrid):
 *   'Doctor Photos' | 'Hospital' | 'Facilities' | 'Media Coverage'
 *   'Awareness Posters' | 'Dialysis Awareness' | 'Kidney Care Graphics'
 */

// ─── IMPORT IMAGES ─────────────────────────────────────────────

import gallery1 from '../assets/images/gallery/gallery-1.webp';
import gallery2 from '../assets/images/gallery/gallery-2.webp';

// ─── DATA ─────────────────────────────────────────────────────

export const galleryData = [
  {
    id: 1,
    title: 'Shivneri Super Speciality & Surya ICU Hospital',
    caption:
      'Shivneri Super Speciality & Surya ICU Hospital, Parbhani — a kidney care and multi-speciality facility providing dialysis support and nephrology consultation.',
    alt: 'Shivneri Super Speciality & Surya ICU Hospital building exterior, Parbhani, Maharashtra',
    category: 'Hospital',
    thumbnail: gallery1,
    fullImage: gallery1,
    approvalStatus: 'approved',
    privacyStatus: 'clear',
    frontendUseAllowed: true,
    notes: 'Privacy reviewed. No patient-identifiable details visible.',
  },
  {
    id: 2,
    title: 'Kidney Health Awareness Programme',
    caption:
      'Kidney health awareness programme led by Dr. Rahul Bhaskarrao Tengse — educating the Parbhani community on kidney disease prevention, early warning signs, and the importance of regular kidney screening.',
    alt: 'Kidney health awareness programme poster — Dr. Rahul Bhaskarrao Tengse, Consultant Nephrologist, Parbhani',
    category: 'Awareness Posters',
    thumbnail: gallery2,
    fullImage: gallery2,
    approvalStatus: 'approved',
    privacyStatus: 'clear',
    frontendUseAllowed: true,
    notes: 'Privacy reviewed. Awareness content only. No patient-identifiable details visible.',
  },
  // ─── PLACEHOLDER SLOTS — activate once images are ready ──────────────────
  // To add doctor photos: place in src/assets/images/doctor/, import above,
  // set category: 'Doctor Photos', and confirm privacy before enabling.
  //
  // To add dialysis awareness: place in src/assets/images/dialysis/, import above,
  // set category: 'Dialysis Awareness', and confirm privacy before enabling.
  //
  // To add media coverage gallery entries: set category: 'Media Coverage'.
];

/**
 * galleryDataNotes — governance metadata (not rendered in UI)
 */
export const galleryDataNotes = {
  privacyRule:
    'Each image requires per-item privacy review and client approval before frontendUseAllowed is set to true. Patient photographs must never be included.',
  addNewItem:
    'Copy the object shape above, increment id, place image in src/assets/images/gallery/, confirm category matches a valid filter tab, and verify approvalStatus + privacyStatus before enabling.',
  categories: [
    'Doctor Photos',
    'Hospital',
    'Facilities',
    'Media Coverage',
    'Awareness Posters',
    'Dialysis Awareness',
    'Kidney Care Graphics',
  ],
};
