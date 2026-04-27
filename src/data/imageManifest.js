// Phase 1 — Batch 1.3: Safe frontend image manifest
// Do not import pending/missing images into frontend pages. Use only entries where frontendUseAllowed is true.

export const imageManifest = {
  "doctor": {
    "hero": {
      "src": null,
      "srcSet": [],
      "alt": "Dr. Rahul Tengse, Kidney Specialist in Parbhani",
      "status": "pending-client-approval",
      "frontendUseAllowed": false,
      "notes": "No approved optimized doctor hero image available yet."
    },
    "profile": {
      "src": null,
      "srcSet": [],
      "alt": "Dr. Rahul Tengse, Kidney Specialist in Parbhani",
      "status": "pending-client-approval",
      "frontendUseAllowed": false,
      "notes": "Use optimized candidate only after client approval."
    }
  },
  "hospital": {
    "reception": {
      "src": null,
      "srcSet": [],
      "alt": "Shivneri Super Speciality & Surya ICU Hospital Reception, Parbhani",
      "status": "pending-client-approval",
      "frontendUseAllowed": false,
      "notes": "Hospital photo pending approval."
    }
  },
  "media": [],
  "gallery": [],
  "awareness": [],
  "dialysis": [],
  "kidneyCare": [],
  "og": {
    "default": {
      "src": null,
      "alt": "Dr. Rahul Tengse Kidney Specialist Parbhani",
      "status": "pending-client-approval",
      "frontendUseAllowed": false,
      "notes": "OG image requires approved doctor/branding asset."
    }
  },
  "favicon": {
    "src": null,
    "status": "pending-client-approval",
    "frontendUseAllowed": false,
    "notes": "Favicon source logo/mark pending approval."
  }
};
