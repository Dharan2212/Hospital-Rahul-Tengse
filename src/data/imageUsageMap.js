// Phase 1 — Batch 1.1: Image Usage Map
// Conservative usage map: no frontend image usage is approved until actual assets are supplied, privacy reviewed, cleaned/optimized where needed, and approved.

export const imageUsageMap = {
  hero: {
    required: true,
    preferredCategory: 'doctor-photo',
    status: 'pending',
    inventoryReference: ['missing-hero-doctor-photo'],
    notes: 'Needs approved professional doctor image.'
  },
  aboutDoctor: {
    required: true,
    preferredCategory: 'doctor-photo',
    status: 'pending',
    inventoryReference: ['missing-about-doctor-photo', 'missing-hero-doctor-photo'],
    notes: 'Use approved doctor image after cleanup and optimization.'
  },
  hospitalPreview: {
    required: true,
    preferredCategory: 'hospital-photo',
    status: 'pending',
    inventoryReference: ['missing-hospital-photo'],
    notes: 'Hospital reception/facility image required.'
  },
  contactHospital: {
    required: true,
    preferredCategory: 'hospital-photo',
    status: 'pending',
    inventoryReference: ['missing-hospital-photo'],
    notes: 'Hospital image/map-related image pending confirmation.'
  },
  mediaNews: {
    required: true,
    preferredCategory: 'media-newspaper',
    status: 'pending',
    inventoryReference: ['missing-media-newspaper-assets'],
    notes: 'Only cropped and privacy-safe newspaper images can be used after approval.'
  },
  gallery: {
    required: true,
    preferredCategory: 'gallery-candidate',
    status: 'pending',
    inventoryReference: ['missing-gallery-assets'],
    notes: 'Only approved non-patient-identifiable images allowed.'
  },
  awareness: {
    required: false,
    preferredCategory: 'awareness-poster',
    status: 'pending',
    inventoryReference: ['missing-awareness-poster-assets'],
    notes: 'Poster content should be converted to readable web cards later.'
  },
  dialysis: {
    required: false,
    preferredCategory: 'dialysis-graphic',
    status: 'pending',
    inventoryReference: ['missing-dialysis-graphic-assets'],
    notes: 'Use only educational, non-procedural safe graphics.'
  },
  kidneyCare: {
    required: false,
    preferredCategory: 'kidney-care-graphic',
    status: 'pending',
    inventoryReference: ['missing-kidney-care-graphic-assets'],
    notes: 'Use only medically safe, rights-clear kidney care graphics.'
  },
  ogImage: {
    required: true,
    preferredCategory: 'doctor-photo',
    status: 'pending',
    inventoryReference: ['missing-og-image', 'missing-hero-doctor-photo', 'missing-logo-branding'],
    notes: 'Social preview image requires approved doctor/branding asset.'
  },
  favicon: {
    required: true,
    preferredCategory: 'logo-branding',
    status: 'pending',
    inventoryReference: ['missing-favicon-source', 'missing-logo-branding'],
    notes: 'Logo or mark must be approved before favicon generation.'
  },
  instagram: {
    required: false,
    preferredCategory: 'social-instagram',
    status: 'link-only-pending',
    inventoryReference: ['missing-social-instagram-post-assets'],
    notes: 'Use profile link only. Do not embed Instagram screenshots or posts without explicit approval and privacy review.'
  }
};

export const imageCategoryFolders = {
  'doctor-photo': 'src/assets/images/doctor/',
  'hospital-photo': 'src/assets/images/hospital/',
  'logo-branding': '../assets/images/logo/',
  'media-newspaper': 'src/assets/images/media/',
  'awareness-poster': 'src/assets/images/awareness/',
  'dialysis-graphic': 'src/assets/images/dialysis/',
  'kidney-care-graphic': 'src/assets/images/kidney-care/',
  'gallery-candidate': 'src/assets/images/gallery/',
  'social-instagram': null,
  'unknown-review': 'src/assets/images/raw-unsorted/',
  'do-not-use': null
};
