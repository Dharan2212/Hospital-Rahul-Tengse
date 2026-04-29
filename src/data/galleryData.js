/**
 * galleryData.js — PRODUCTION SAFE VERSION (Vite compatible)
 *
 * Uses ES module imports so images work after build (Netlify / Vercel)
 */

// ─── IMPORT IMAGES ─────────────────────────────────────────────

import gallery1 from '../assets/images/gallery/gallery-1.webp';
import gallery2 from '../assets/images/gallery/gallery-2.webp';

// ─── DATA ─────────────────────────────────────────────────────

export const galleryData = [
  {
    id: 1,
    title: 'Shivneri Super Speciality Hospital',
    caption: 'Shivneri Super Speciality & Surya ICU Hospital, Parbhani — Kidney care facility.',
    alt: 'Shivneri Super Speciality & Surya ICU Hospital, Parbhani',
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
    title: 'Kidney Health Awareness',
    caption: 'Kidney health awareness programme — Dr. Rahul Tengse, Parbhani.',
    alt: 'Kidney Health Awareness Programme — Dr. Rahul Tengse, Parbhani',
    category: 'Awareness Posters',

    thumbnail: gallery2,
    fullImage: gallery2,

    approvalStatus: 'approved',
    privacyStatus: 'clear',
    frontendUseAllowed: true,
    notes: 'Privacy reviewed. Awareness content only. No patient-identifiable details visible.',
  },
];

/**
 * galleryDataNotes — governance metadata (not rendered in UI)
 */
export const galleryDataNotes = {
  privacyRule:
    'Each image requires per-item privacy review and client approval before frontendUseAllowed is set to true. Patient photographs must never be included.',
  addNewItem:
    'Copy the object shape above, increment id, place image in src/assets/images/gallery/, confirm category matches a valid filter tab, and verify approvalStatus + privacyStatus before enabling.',
};