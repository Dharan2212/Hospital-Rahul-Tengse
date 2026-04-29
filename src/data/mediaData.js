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
 * FILE PLACEMENT:
 *   src/assets/images/media/media-1.webp
 *   src/assets/images/media/media-2.webp
 */

import media1 from '../assets/images/media/media-1.webp';
import media2 from '../assets/images/media/media-2.webp';

export const mediaData = [
  {
    id: 1,
    title: 'Kidney Health Awareness Programme',
    source: 'Local Newspaper',
    date: '2025',
    summary: 'Coverage of a kidney health awareness initiative by Dr. Rahul Tengse for community education on kidney disease prevention.',
    alt: 'Newspaper coverage of kidney awareness programme — Dr. Rahul Tengse, Parbhani',
    thumbnail: media1,
    fullImage: media1,
    approvalStatus: 'approved',
    privacyStatus: 'clear',
    frontendUseAllowed: true,
    notes: 'Cropped and privacy-reviewed. No patient-identifiable details visible.',
  },
  {
    id: 2,
    title: 'Dialysis Care Awareness',
    source: 'Regional Press',
    date: '2025',
    summary: 'Media recognition for dialysis care guidance and patient support work at Shivneri Super Speciality & Surya ICU Hospital, Parbhani.',
    alt: 'Newspaper coverage of dialysis care awareness — Dr. Rahul Tengse, Parbhani',
    thumbnail: media2,
    fullImage: media2,
    approvalStatus: 'approved',
    privacyStatus: 'clear',
    frontendUseAllowed: true,
    notes: 'Cropped and privacy-reviewed. No patient-identifiable details visible.',
  },
];

/**
 * mediaDataNotes — governance metadata (not rendered in UI)
 */
export const mediaDataNotes = {
  privacyRule: 'All newspaper images must be cropped, privacy-redacted, and client-approved before frontendUseAllowed is set to true.',
  addNewItem: 'Copy the object shape above, increment id, place image in src/assets/images/media/, and confirm approvalStatus + privacyStatus before enabling.',
};
