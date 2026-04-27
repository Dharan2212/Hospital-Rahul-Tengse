# Image Asset Folders

This folder stores project image assets for the Dr. Rahul Tengse Kidney Specialist Website.

## originals/

Reserved for original source images when they are provided. Originals must not be deleted, overwritten, renamed, compressed, cropped, blurred, or converted.

## cleaned/

Reserved for Batch 1.2 cleaned candidate images only. These files are not final production assets. They must not be imported into frontend pages until:

- privacy review is clear
- client approval is documented
- Batch 1.3 optimization is complete
- `frontendUseAllowed` is true in `src/data/assetInventory.js`

## cleaned/review-needed/

Use this folder only for candidate assets that still need manual review, privacy review, or client approval.

## rejected/

Reserved for assets that should not be used publicly, including files with unresolved patient identity, medical records, unsafe claims, unusable quality, or copyright/approval issues.

## Privacy rules

Do not expose patient faces, names, phone numbers, addresses, hospital IDs, reports, prescriptions, medical case details, monitor screens, or identifiable newspaper details.

## Warning

Unapproved images must not be imported into JSX/components/pages. Cleaned candidate assets are not final optimized production assets. Batch 1.3 will handle final WebP conversion, compression, responsive variants, and production image manifest updates.


---

# Batch 1.3 Image Optimization Rules

**Updated:** 2026-04-26T23:07:19+05:30

## optimized/

The `optimized/` folder is reserved for production-ready approved images only. An image may be placed here only when it is privacy-clear, client-approved, optimized, and marked `optimized-ready` in `src/data/assetInventory.js`.

## pending/

The `pending/` folder is reserved for optimized candidate images that still need approval. These files must not be imported into public frontend pages unless `frontendUseAllowed` becomes `true` after approval.

## optimized-ready vs optimized-pending-approval

- `optimized-ready`: approved, privacy-clear, optimized, and safe for frontend import.
- `optimized-pending-approval`: optimized candidate exists, but it still needs client/privacy approval.
- `missing`: source image or cleaned candidate image is missing.
- `blocked`: do-not-use, privacy-blocked, or link-only assets that must not be optimized for frontend use.

## Frontend import rules

Frontend pages/components may only import image manifest entries where:

- `frontendUseAllowed` is `true`
- `optimizedStatus` is `optimized-ready`
- approval is documented
- privacy review is clear

## SEO naming conventions

Use lowercase, hyphen-separated filenames. Use suffixes for variants:

- `-400.webp`
- `-800.webp`
- `-1200.webp`
- `-thumb.webp`
- `-modal.webp`
- `-og.webp`

## Alt text rules

- Doctor/hospital photos must be informative and descriptive.
- Media images must be described as coverage/awareness, not clinical proof.
- Awareness and dialysis graphics must stay educational and medically safe.
- Decorative images may use empty alt text later, but only when they add no content meaning.

## Current Batch 1.3 status

No optimized images were created in Batch 1.3 because no real cleaned source images are available. The optimized and pending folder structures were created for future batches once assets are uploaded and approved.
