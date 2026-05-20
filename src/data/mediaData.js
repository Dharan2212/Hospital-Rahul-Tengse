/**
 * mediaData.js — Media coverage entries
 *
 * REQUIRED FIELDS per item (checked by MediaCard and MediaCoveragePreview):
 *   approvalStatus: 'approved'      — must be exactly this string
 *   privacyStatus:  'clear'         — must be exactly this string
 *   frontendUseAllowed: true        — must be boolean true
 *   thumbnail: string               — path to thumbnail image
 *   fullImage: string               — path to full-size image for modal
 *
 * PRIVACY RULES (enforced):
 *   - No patient names, faces, phone numbers, or medical record details visible
 *   - All newspaper images must be cropped and privacy-redacted before use
 *   - Only set approvalStatus: 'approved' after client sign-off
 *
 * ─── NEWS IMAGE PLACEMENT ────────────────────────────────────────────────────
 * Place news images at:
 *   src/assets/images/media/news1.webp  (converted from news1.jpeg)
 *   src/assets/images/media/news2.webp  (converted from news2.jpeg)
 *   src/assets/images/media/news3.webp  (converted from news3.jpeg)
 *   src/assets/images/media/news4.webp  (converted from news4.jpeg)
 *
 * Then update approvalStatus → 'approved', privacyStatus → 'clear',
 * frontendUseAllowed → true, and uncomment the import lines below.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * FILE PLACEMENT:
 *   src/assets/images/media/media-1.webp
 *   src/assets/images/media/media-2.webp
 */

import media1 from '../assets/images/media/media-1.webp';
import media2 from '../assets/images/media/media-2.webp';

// Uncomment and update paths once news images are placed and privacy-reviewed:
// import news1 from '../assets/images/media/news1.webp';
// import news2 from '../assets/images/media/news2.webp';
// import news3 from '../assets/images/media/news3.webp';
// import news4 from '../assets/images/media/news4.webp';

export const mediaData = [
  {
    id: 1,
    title: 'Kidney Disease Awareness Drive — Parbhani',
    source: 'Local Newspaper',
    date: '2025',
    summary:
      'Coverage of a kidney health awareness initiative led by Dr. Rahul Bhaskarrao Tengse, focusing on early detection and community education on kidney disease prevention in Parbhani.',
    alt: 'Newspaper coverage of kidney disease awareness drive — Dr. Rahul Bhaskarrao Tengse, Nephrologist, Parbhani',
    thumbnail: media1,
    fullImage: media1,
    approvalStatus: 'approved',
    privacyStatus: 'clear',
    frontendUseAllowed: true,
    notes: 'Cropped and privacy-reviewed. No patient-identifiable details visible.',
  },
  {
    id: 2,
    title: 'Dialysis Care & Patient Support Programme',
    source: 'Regional Press',
    date: '2025',
    summary:
      'Media recognition for dialysis care guidance and patient support work at Shivneri Super Speciality & Surya ICU Hospital, Parbhani, by Dr. Rahul Bhaskarrao Tengse.',
    alt: 'Newspaper coverage of dialysis care patient support programme — Dr. Rahul Bhaskarrao Tengse, Parbhani',
    thumbnail: media2,
    fullImage: media2,
    approvalStatus: 'approved',
    privacyStatus: 'clear',
    frontendUseAllowed: true,
    notes: 'Cropped and privacy-reviewed. No patient-identifiable details visible.',
  },
  // ─── NEWS 1 ───────────────────────────────────────────────────────────────
  // To activate: place news1.webp in src/assets/images/media/, import above,
  // set thumbnail/fullImage to news1, and update approvalStatus + privacyStatus.
  {
    id: 3,
    title: 'Kidney Transplant Guidance & Awareness',
    source: 'Newspaper Coverage',
    date: '2025',
    summary:
      'Coverage of kidney transplant awareness and guidance by Dr. Rahul Bhaskarrao Tengse — educating patients and families on evaluation, preparation, and post-transplant care.',
    alt: 'Newspaper coverage of kidney transplant awareness — Dr. Rahul Bhaskarrao Tengse, Parbhani',
    thumbnail: null,
    fullImage: null,
    approvalStatus: 'pending',
    privacyStatus: 'pending',
    frontendUseAllowed: false,
    notes: '[CLIENT APPROVAL REQUIRED] — Place news1.webp, review privacy, then enable.',
  },
  // ─── NEWS 2 ───────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Chronic Kidney Disease Awareness — Community Outreach',
    source: 'Newspaper Coverage',
    date: '2025',
    summary:
      'Media coverage of community outreach on chronic kidney disease (CKD) awareness, early warning signs, and the importance of regular kidney health screening.',
    alt: 'Newspaper coverage of chronic kidney disease community outreach — Dr. Rahul Bhaskarrao Tengse',
    thumbnail: null,
    fullImage: null,
    approvalStatus: 'pending',
    privacyStatus: 'pending',
    frontendUseAllowed: false,
    notes: '[CLIENT APPROVAL REQUIRED] — Place news2.webp, review privacy, then enable.',
  },
  // ─── NEWS 3 ───────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Diabetic Kidney Disease — Patient Education Initiative',
    source: 'Newspaper Coverage',
    date: '2025',
    summary:
      'Coverage of a patient education initiative on diabetic kidney disease (diabetic nephropathy) — helping patients understand the link between diabetes and kidney health.',
    alt: 'Newspaper coverage of diabetic kidney disease patient education — Dr. Rahul Bhaskarrao Tengse, Parbhani',
    thumbnail: null,
    fullImage: null,
    approvalStatus: 'pending',
    privacyStatus: 'pending',
    frontendUseAllowed: false,
    notes: '[CLIENT APPROVAL REQUIRED] — Place news3.webp, review privacy, then enable.',
  },
  // ─── NEWS 4 ───────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'World Kidney Day Awareness Programme',
    source: 'Newspaper Coverage',
    date: '2025',
    summary:
      'Recognition of kidney health awareness activities conducted at Shivneri Super Speciality & Surya ICU Hospital on World Kidney Day, led by Dr. Rahul Bhaskarrao Tengse.',
    alt: 'Newspaper coverage of World Kidney Day awareness — Dr. Rahul Bhaskarrao Tengse, Shivneri Hospital, Parbhani',
    thumbnail: null,
    fullImage: null,
    approvalStatus: 'pending',
    privacyStatus: 'pending',
    frontendUseAllowed: false,
    notes: '[CLIENT APPROVAL REQUIRED] — Place news4.webp, review privacy, then enable.',
  },
];

/**
 * mediaDataNotes — governance metadata (not rendered in UI)
 */
export const mediaDataNotes = {
  privacyRule:
    'All newspaper images must be cropped, privacy-redacted, and client-approved before frontendUseAllowed is set to true.',
  addNewItem:
    'Copy the object shape above, increment id, place image in src/assets/images/media/, and confirm approvalStatus + privacyStatus before enabling.',
  news3to6Activation:
    'Items 3–6 require: (1) placing the WebP image, (2) importing it at top of file, (3) setting thumbnail/fullImage to the import, (4) approvalStatus → approved, (5) privacyStatus → clear, (6) frontendUseAllowed → true.',
};
