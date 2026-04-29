/**
 * galleryData.js — Gallery image entries
 *
 * REQUIRED FIELDS per item (checked by GalleryGrid and GalleryPreview):
 *   approvalStatus: 'approved'      — must be exactly this string
 *   privacyStatus:  'clear'         — must be exactly this string
 *   frontendUseAllowed: true        — must be boolean true
 *   thumbnail: string               — path to thumbnail image
 *   fullImage: string               — path to full-size image (for modal)
 *
 * VALID CATEGORY VALUES (must match GalleryGrid filter tabs exactly):
 *   'Doctor Photos'
 *   'Hospital'
 *   'Facilities'
 *   'Media Coverage'
 *   'Awareness Posters'
 *   'Dialysis Awareness'
 *   'Kidney Care Graphics'
 *
 * PRIVACY RULES (enforced):
 *   - No patient faces, names, IDs, or medical records visible
 *   - Per-image privacy review required before setting frontendUseAllowed: true
 *   - Patient photographs must NEVER be included
 *
 * FILE PLACEMENT:
 *   src/assets/images/gallery/gallery-1.webp
 *   src/assets/images/gallery/gallery-2.webp
 */

export const galleryData = [
  {
    id: 1,
    title: 'Shivneri Super Speciality Hospital',
    caption: 'Shivneri Super Speciality & Surya ICU Hospital, Parbhani — Kidney care facility.',
    alt: 'Shivneri Super Speciality & Surya ICU Hospital, Parbhani',
    category: 'Hospital',
    thumbnail: '/src/assets/images/gallery/gallery-1.webp',
    fullImage: '/src/assets/images/gallery/gallery-1.webp',
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
    thumbnail: '/src/assets/images/gallery/gallery-2.webp',
    fullImage: '/src/assets/images/gallery/gallery-2.webp',
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
  privacyRule: 'Each image requires per-item privacy review and client approval before frontendUseAllowed is set to true. Patient photographs must never be included.',
  addNewItem: 'Copy the object shape above, increment id, place image in src/assets/images/gallery/, confirm category matches a valid filter tab, and verify approvalStatus + privacyStatus before enabling.',
};
