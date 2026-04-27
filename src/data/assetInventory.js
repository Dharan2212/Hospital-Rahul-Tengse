// Phase 1 — Batch 1.3: Image Optimization
// Continues from Batch 1.1 and Batch 1.2. No frontend UI, no Phase 2 setup, and no fake image assets are included.
// No actual cleaned image files were available, so optimized outputs are marked missing or blocked.

export const assetInventoryMeta = {
  "project": "Dr. Rahul Tengse — Kidney Specialist Website",
  "batch": "Phase 1 — Batch 1.3",
  "batchName": "Image Optimization",
  "generatedAt": "2026-04-26T23:07:19+05:30",
  "scope": "Image optimization governance, manifest preparation, SEO filename planning, alt text register, and optimized/pending folder structure only. No frontend UI, no Phase 2 setup, and no fake image generation.",
  "sourceDocumentsReviewed": [
    {
      "fileName": "Full-Project-Instructions.txt",
      "path": "/mnt/data/Full-Project-Instructions.txt",
      "type": "project-instructions",
      "notes": "Reviewed for zip rules, compliance rules, image handling rules, and no fake asset rule."
    },
    {
      "fileName": "Master-Batch-Roadmap.txt",
      "path": "/mnt/data/Master-Batch-Roadmap.txt",
      "type": "batch-roadmap",
      "notes": "Reviewed to confirm Batch 1.3 handles WebP/optimization and Phase 2 must not start."
    },
    {
      "fileName": "Dr_Rahul_Tengse_Website_Frontend_Blueprint_v2.docx",
      "path": "/mnt/data/Dr_Rahul_Tengse_Website_Frontend_Blueprint_v2.docx",
      "type": "locked-frontend-blueprint",
      "notes": "Reviewed for image optimization targets, SEO filenames, alt text, privacy rules, and launch blockers."
    },
    {
      "fileName": "Pasted text.txt",
      "path": "/mnt/data/Pasted text.txt",
      "type": "batch-execution-prompt",
      "notes": "Reviewed latest Batch 1.3 execution prompt for required fields, folders, docs, and acceptance criteria."
    },
    {
      "fileName": "Batch 1.1 ZIP outputs",
      "path": "dr-rahul-tengse-frontend-batch-1.1-asset-inventory.zip",
      "type": "prior-batch-output",
      "notes": "Reviewed and preserved image usage map and placeholder inventory direction."
    },
    {
      "fileName": "Batch 1.2 ZIP outputs",
      "path": "dr-rahul-tengse-frontend-batch-1.2-image-cleanup.zip",
      "type": "prior-batch-output",
      "notes": "Reviewed and preserved cleanup docs, assetInventory cleanup fields, image folder README, and blocked cleanup state."
    }
  ],
  "actualImageMediaAssetsFound": 0,
  "cleanedCandidateImagesFound": 0,
  "webpOutputsCreated": 0,
  "optimizedReadyCount": 0,
  "optimizedPendingApprovalCount": 0,
  "missingOptimizationCount": 14,
  "blockedOptimizationCount": 1,
  "frontendUseAllowedCount": 0,
  "allowedOptimizedStatuses": [
    "optimized-ready",
    "optimized-pending-approval",
    "not-optimized",
    "blocked",
    "missing"
  ],
  "optimizedFolderPurpose": "Approved production-ready images only. Empty in this batch because no approved source images exist.",
  "pendingFolderPurpose": "Optimized pending-review candidate images only. Empty in this batch because no cleaned candidate images exist."
};

export const assetInventory = [
  {
    "id": "missing-hero-doctor-photo",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "doctor-photo",
    "usageStatus": "unknown",
    "privacyStatus": "unknown",
    "recommendedUsage": [
      "home-hero",
      "about-doctor-preview",
      "about-page",
      "gallery-candidate",
      "social-preview-candidate"
    ],
    "requiredAction": [
      "batch-1.2-blocked-source-missing",
      "batch-1.3-optimization",
      "client-approval",
      "client-to-provide",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Dr. Rahul Tengse, Kidney Specialist in Parbhani",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No approved doctor hero image was available in the current attachment set. Do not use a generated or placeholder doctor image for identity-sensitive pages. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no source doctor photo is available. Upload a real approved doctor image before crop/background-safe cleanup. Not approved for public website use yet.",
    "optimizedFileName": "dr-rahul-tengse-kidney-specialist-parbhani-800.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Dr. Rahul Tengse, Kidney Specialist in Parbhani",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-about-doctor-photo",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "doctor-photo",
    "usageStatus": "unknown",
    "privacyStatus": "unknown",
    "recommendedUsage": [
      "about-page",
      "gallery-candidate"
    ],
    "requiredAction": [
      "batch-1.2-blocked-source-missing",
      "client-approval",
      "client-to-provide",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Dr. Rahul Tengse, Consultant Nephrologist in Parbhani",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "A secondary professional doctor image is recommended for about-page variation, but no source image is currently available. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no source doctor photo is available. Upload a real approved doctor image before crop/background-safe cleanup. Not approved for public website use yet.",
    "optimizedFileName": "dr-rahul-tengse-kidney-specialist-parbhani-profile-800.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Dr. Rahul Tengse, Kidney Specialist in Parbhani",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-hospital-photo",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "hospital-photo",
    "usageStatus": "unknown",
    "privacyStatus": "unknown",
    "recommendedUsage": [
      "hospital-association-preview",
      "about-hospital-section",
      "contact-page",
      "gallery-candidate"
    ],
    "requiredAction": [
      "batch-1.2-blocked-source-missing",
      "client-approval",
      "client-to-provide",
      "optimization-in-batch-1.3-after-approval",
      "privacy-review",
      "upload-source-asset-before-cleanup",
      "verify-no-patients-or-records-visible",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Shivneri Super Speciality & Surya ICU Hospital Reception, Parbhani",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No hospital reception/facility image was available. Any future hospital photo must be reviewed for patient privacy and visible records/screens. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no source hospital/facility photo is available. Upload a real image and verify no patients, records, or monitors are visible. Not approved for public website use yet.",
    "optimizedFileName": "shivneri-super-speciality-surya-icu-hospital-parbhani-800.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Shivneri Super Speciality & Surya ICU Hospital Reception, Parbhani",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-logo-branding",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "logo-branding",
    "usageStatus": "unknown",
    "privacyStatus": "clear",
    "recommendedUsage": [
      "header",
      "footer",
      "favicon-candidate",
      "social-preview-candidate"
    ],
    "requiredAction": [
      "client-approval",
      "client-to-provide",
      "optimization-in-batch-1.3-after-approval",
      "prefer-svg-or-transparent-png",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Dr. Rahul Tengse Kidney Specialist Logo",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No official doctor/hospital logo was available. Until provided, use text-based brand treatment in later UI batches. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no official logo/mark source is available. Do not create or redesign logo. Not approved for public website use yet.",
    "optimizedFileName": "dr-rahul-tengse-kidney-specialist-logo.svg",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Dr. Rahul Tengse Kidney Specialist Logo",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-media-newspaper-assets",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "media-newspaper",
    "usageStatus": "unknown",
    "privacyStatus": "needs-privacy-review",
    "recommendedUsage": [
      "media-card-candidate",
      "gallery-media-candidate"
    ],
    "requiredAction": [
      "blur-required-if-identifiable-content",
      "client-approval",
      "client-to-provide",
      "crop-required",
      "optimization-in-batch-1.3-after-approval",
      "privacy-review",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Newspaper coverage of kidney awareness by Dr. Rahul Tengse",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No newspaper/media image was attached. Future clippings must not be used as hero banners and must be cropped/redacted before publishing. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed",
      "privacy-review-still-required"
    ],
    "cleanupNotes": "Cleanup/redaction blocked because no newspaper/media source image is available. Future media must be cropped, privacy-redacted, and client-approved. Not approved for public website use yet. [CLIENT APPROVAL REQUIRED]",
    "optimizedFileName": "media-coverage-dr-rahul-tengse-kidney-awareness-thumb.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Newspaper coverage of kidney awareness — Dr. Rahul Tengse",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-media-newspaper-coverage-02",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "media-newspaper",
    "usageStatus": "unknown",
    "privacyStatus": "needs-privacy-review",
    "recommendedUsage": [
      "media-card-candidate"
    ],
    "requiredAction": [
      "client-approval",
      "client-to-provide",
      "optimization-in-batch-1.3-after-approval",
      "privacy-review",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Media coverage of kidney health awareness in Parbhani",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "At least three approved media cards are planned for homepage/media preview, but no source images are currently available. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed",
      "privacy-review-still-required"
    ],
    "cleanupNotes": "Cleanup/redaction blocked because no newspaper/media source image is available. Future media must be cropped, privacy-redacted, and client-approved. Not approved for public website use yet. [CLIENT APPROVAL REQUIRED]",
    "optimizedFileName": "media-coverage-dr-rahul-tengse-kidney-awareness-02-thumb.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Newspaper coverage of kidney awareness — Dr. Rahul Tengse",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-awareness-poster-kidney-symptoms",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "awareness-poster",
    "usageStatus": "unknown",
    "privacyStatus": "unknown",
    "recommendedUsage": [
      "patient-awareness-content-source",
      "gallery-awareness-candidate"
    ],
    "requiredAction": [
      "client-approval",
      "client-to-provide",
      "extract-content-into-web-cards",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Kidney Health Awareness — Dr. Rahul Tengse",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No awareness poster was attached. Future posters should mainly be used as content sources, not pasted as full-page content blocks. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no awareness poster source is available. Future poster content should be converted into readable web cards where appropriate. Not approved for public website use yet.",
    "optimizedFileName": "kidney-health-awareness-poster-parbhani-thumb.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Kidney Health Awareness — Dr. Rahul Tengse",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-awareness-poster-diabetes-kidney-risk",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "awareness-poster",
    "usageStatus": "unknown",
    "privacyStatus": "unknown",
    "recommendedUsage": [
      "patient-awareness-content-source"
    ],
    "requiredAction": [
      "client-approval",
      "client-to-provide",
      "medical-content-review",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Diabetes and kidney health awareness information",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "Useful for Patient Awareness page if client provides approved content; no image is currently available. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no awareness poster source is available. Future poster content should be converted into readable web cards where appropriate. Not approved for public website use yet.",
    "optimizedFileName": "diabetes-kidney-risk-awareness-parbhani-thumb.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Kidney Health Awareness — Dr. Rahul Tengse",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-av-fistula-graphic",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "dialysis-graphic",
    "usageStatus": "unknown",
    "privacyStatus": "clear",
    "recommendedUsage": [
      "dialysis-care-educational-card",
      "gallery-dialysis-candidate"
    ],
    "requiredAction": [
      "client-to-provide-or-approve-educational-graphic",
      "medical-meaning-review",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "AV Fistula Diagram — Dialysis Access Awareness",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No AV Fistula graphic was available. Future use must remain educational and must not become a procedure instruction guide. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no educational graphic source is available. Future image must preserve medical meaning and remain non-procedural. Not approved for public website use yet.",
    "optimizedFileName": "av-fistula-awareness-dialysis-800.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Dialysis Care Awareness Graphic",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-permcath-graphic",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "dialysis-graphic",
    "usageStatus": "unknown",
    "privacyStatus": "clear",
    "recommendedUsage": [
      "dialysis-care-educational-card",
      "gallery-dialysis-candidate"
    ],
    "requiredAction": [
      "client-to-provide-or-approve-educational-graphic",
      "medical-meaning-review",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Permcath Procedure Awareness — Dialysis Care",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No Permcath graphic was available. Future content must stay patient-awareness focused and avoid procedural instruction detail. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no educational graphic source is available. Future image must preserve medical meaning and remain non-procedural. Not approved for public website use yet.",
    "optimizedFileName": "permcath-procedure-awareness-800.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Dialysis Care Awareness Graphic",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-kidney-care-graphic-general",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "kidney-care-graphic",
    "usageStatus": "unknown",
    "privacyStatus": "clear",
    "recommendedUsage": [
      "services-page",
      "patient-awareness-page",
      "home-services-preview"
    ],
    "requiredAction": [
      "batch-1.2-visual-review",
      "client-to-provide-or-approve-graphic",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Kidney care consultation illustration for patient awareness",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No general kidney-care graphic was available. Lucide icons can cover some UI needs later, but approved graphics are still useful for page visuals. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no educational graphic source is available. Future image must preserve medical meaning and remain non-procedural. Not approved for public website use yet.",
    "optimizedFileName": "kidney-specialist-parbhani-consultation-800.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Kidney Care Awareness Graphic",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-gallery-assets",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "gallery-candidate",
    "usageStatus": "unknown",
    "privacyStatus": "unknown",
    "recommendedUsage": [
      "gallery-page",
      "homepage-gallery-preview"
    ],
    "requiredAction": [
      "approval-per-image",
      "client-approval",
      "client-to-provide",
      "optimization-in-batch-1.3-after-approval",
      "privacy-review",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Gallery image related to Dr. Rahul Tengse kidney care services",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No approved gallery image set was available. Patient photographs, visible records, and identifiable hospital data must be excluded. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no gallery assets are available. Future gallery images require per-image privacy review and client approval. Not approved for public website use yet.",
    "optimizedFileName": "dr-rahul-tengse-gallery-candidate-thumb.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Gallery image for Dr. Rahul Tengse Kidney Care",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-og-image",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "doctor-photo",
    "usageStatus": "unknown",
    "privacyStatus": "unknown",
    "recommendedUsage": [
      "open-graph-image",
      "social-preview"
    ],
    "requiredAction": [
      "batch-1.3-optimization",
      "client-approval",
      "client-to-provide-or-derive-from-approved-assets",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Dr. Rahul Tengse Kidney Specialist Parbhani social preview image",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No OG/social preview source image found. Generate only from approved doctor photo or approved branding in a later batch. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no source doctor photo is available. Upload a real approved doctor image before crop/background-safe cleanup. Not approved for public website use yet.",
    "optimizedFileName": "dr-rahul-tengse-kidney-specialist-parbhani-og.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Dr. Rahul Tengse, Kidney Specialist in Parbhani",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-favicon-source",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "logo-branding",
    "usageStatus": "unknown",
    "privacyStatus": "clear",
    "recommendedUsage": [
      "favicon",
      "apple-touch-icon",
      "pwa-icons"
    ],
    "requiredAction": [
      "batch-1.3-favicon-export",
      "client-approval",
      "client-to-provide-logo-or-mark",
      "optimization-in-batch-1.3-after-approval",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": "Dr. Rahul Tengse website favicon source",
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "No favicon source found. Do not generate favicon from unapproved logo or branding. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "source-asset-missing",
      "cleanup-not-performed"
    ],
    "cleanupNotes": "Cleanup blocked because no official logo/mark source is available. Do not create or redesign logo. Not approved for public website use yet.",
    "optimizedFileName": "favicon-192.png",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "missing",
    "finalAltText": "Dr. Rahul Tengse Kidney Specialist Logo",
    "seoFileNameApproved": true,
    "fileSizeNotes": "No source/cleaned file available, so no file size is available.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "Optimization could not be performed because no real cleaned image asset exists. Manifest placeholder only."
  },
  {
    "id": "missing-social-instagram-post-assets",
    "originalFileName": null,
    "originalPath": null,
    "sortedPath": null,
    "category": "social-instagram",
    "usageStatus": "do-not-use",
    "privacyStatus": "needs-privacy-review",
    "recommendedUsage": [
      "link-only-to-instagram-profile"
    ],
    "requiredAction": [
      "client-approval-required-if-reused",
      "do-not-embed-screenshots",
      "privacy-review",
      "upload-source-asset-before-cleanup",
      "upload-approved-source-asset",
      "client-approval-before-public-use",
      "batch-1.3-optimization-blocked-until-source-exists"
    ],
    "altTextDraft": null,
    "frontendUseAllowed": false,
    "approvalRequiredBeforeUse": true,
    "notes": "Instagram content is link-only unless client explicitly approves reuse and privacy review is complete. Not approved for public website use yet. Batch 1.3: No frontend usage allowed. No optimized public asset exists yet.",
    "cleanedFileName": null,
    "cleanedPath": null,
    "cleanupStatus": "blocked",
    "cleanupActions": [
      "blocked-by-usage-or-privacy-status"
    ],
    "cleanupNotes": "Cleanup blocked because this asset record is not approved for reuse. No cleaned candidate was created. Not approved for public website use yet.",
    "optimizedFileName": "social-instagram-pending.webp",
    "optimizedPath": null,
    "responsiveVariants": {
      "thumb": null,
      "small": null,
      "medium": null,
      "large": null,
      "modal": null,
      "og": null
    },
    "optimizedStatus": "blocked",
    "finalAltText": "",
    "seoFileNameApproved": false,
    "fileSizeNotes": "Blocked from optimization because asset is do-not-use, privacy-sensitive, or link-only.",
    "imageDimensions": {
      "width": null,
      "height": null
    },
    "optimizationNotes": "No optimized output created. Do not use this asset in frontend pages."
  }
];
