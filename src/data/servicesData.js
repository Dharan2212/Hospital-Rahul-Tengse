/**
 * servicesData.js — Kidney care service card definitions
 *
 * Batch 3 — Clinical Content Refresh
 * Updated: Improved all 16 service descriptions with patient-friendly, medically accurate,
 *          SEO-optimised, and educationally appropriate wording.
 * Single source of truth imported by Services page and Homepage services preview.
 */
export const servicesData = [
  {
    id: 'kidney-disease-consultation',
    name: 'Kidney Disease Consultation',
    shortDescription:
      'Specialist consultation for kidney symptoms, abnormal creatinine or urine reports, and kidney function assessment. Suitable for new concerns and ongoing kidney disease follow-up.',
    icon: 'Stethoscope',
    ctaText: 'Book Consultation',
    href: '/appointment',
    hasDisclaimer: false,
    featured: true
  },
  {
    id: 'dialysis-care',
    name: 'Dialysis Care',
    shortDescription:
      'Guidance and consultation support for patients who may need dialysis or are already on dialysis therapy. Includes haemodialysis, SLED, and peritoneal dialysis-related awareness.',
    icon: 'Activity',
    ctaText: 'Request Dialysis Consultation',
    href: '/dialysis-care',
    hasDisclaimer: true,
    featured: true
  },
  {
    id: 'sled-dialysis',
    name: 'SLED Dialysis',
    shortDescription:
      'Sustained Low-Efficiency Dialysis (SLED) may be recommended in critical or hospital-based settings. Consultation and guidance are available where clinically appropriate.',
    icon: 'HeartPulse',
    ctaText: 'Consult Now',
    href: '/appointment',
    hasDisclaimer: true,
    featured: false
  },
  {
    id: 'peritoneal-dialysis-guidance',
    name: 'Peritoneal Dialysis Guidance',
    shortDescription:
      'Peritoneal dialysis uses the body\'s own membrane for filtration. Guidance for patients and families exploring this dialysis option, including care planning and eligibility discussion.',
    icon: 'Droplet',
    ctaText: 'Consult Now',
    href: '/appointment',
    hasDisclaimer: true,
    featured: false
  },
  {
    id: 'hcv-hbsag-dialysis-support',
    name: 'HCV / HbsAg Dialysis Support',
    shortDescription:
      'Specialised dialysis guidance for patients with Hepatitis C (HCV) or Hepatitis B (HbsAg) infection. Safe dialysis support follows strict infection-control protocols.',
    icon: 'ShieldCheck',
    ctaText: 'Request Guidance',
    href: '/appointment',
    hasDisclaimer: true,
    featured: false
  },
  {
    id: 'av-fistula-care',
    name: 'AV Fistula Care',
    shortDescription:
      'Arteriovenous (AV) Fistula is the preferred long-term dialysis access for suitable patients. Consultation covers fistula awareness, care, and when to seek specialist review.',
    icon: 'Activity',
    ctaText: 'Learn More',
    href: '/dialysis-care',
    hasDisclaimer: true,
    featured: false
  },
  {
    id: 'permcath-procedure-guidance',
    name: 'Permcath Procedure Guidance',
    shortDescription:
      'A Permcath is a tunnelled catheter used for dialysis access when an AV Fistula is not yet ready or suitable. Guidance covers its use, care, and transition planning.',
    icon: 'FileText',
    ctaText: 'Consult Now',
    href: '/appointment',
    hasDisclaimer: true,
    featured: false
  },
  {
    id: 'kidney-biopsy',
    name: 'Kidney Biopsy',
    shortDescription:
      'A kidney biopsy provides tissue-level diagnosis for conditions like glomerulonephritis and nephrotic syndrome. Consultation includes indication assessment, preparation guidance, and result interpretation.',
    icon: 'FileText',
    ctaText: 'Book Consultation',
    href: '/appointment',
    hasDisclaimer: true,
    featured: false
  },
  {
    id: 'plasma-pheresis',
    name: 'Plasma Pheresis',
    shortDescription:
      'Plasmapheresis may be considered for specific autoimmune kidney conditions. Specialist consultation will assess clinical suitability and discuss the role of this therapy in overall care.',
    icon: 'Droplet',
    ctaText: 'Consult Now',
    href: '/appointment',
    hasDisclaimer: true,
    featured: false
  },
  {
    id: 'nephrotic-syndrome-treatment',
    name: 'Nephrotic Syndrome Treatment',
    shortDescription:
      'Nephrotic syndrome causes significant protein loss in urine and requires specialist evaluation. Consultation covers diagnosis, management guidance, and long-term monitoring planning.',
    icon: 'ShieldCheck',
    ctaText: 'Book Consultation',
    href: '/appointment',
    hasDisclaimer: true,
    featured: false
  },
  {
    id: 'kidney-transplant-guidance',
    name: 'Kidney Transplant Guidance',
    shortDescription:
      'Guidance for patients exploring kidney transplantation — covering pre-transplant evaluation awareness, donor discussion, and post-transplant follow-up support. Not a guarantee of approval or outcome.',
    icon: 'Hospital',
    ctaText: 'Consult for Transplant Guidance',
    href: '/kidney-transplant-guidance',
    hasDisclaimer: true,
    featured: true
  },
  {
    id: 'diabetic-kidney-disease-care',
    name: 'Diabetic Kidney Disease',
    shortDescription:
      'Diabetic nephropathy is a leading cause of chronic kidney disease. Early specialist monitoring, report review, and targeted guidance can help slow progression in diabetic patients.',
    icon: 'HeartPulse',
    ctaText: 'Book Consultation',
    href: '/appointment',
    hasDisclaimer: false,
    featured: true
  },
  {
    id: 'high-bp-related-kidney-disease',
    name: 'High BP-related Kidney Disease',
    shortDescription:
      'Uncontrolled hypertension is a major contributor to kidney damage. Specialist consultation for blood-pressure-related kidney concerns, monitoring, and protective care planning.',
    icon: 'Activity',
    ctaText: 'Get Kidney Care Guidance',
    href: '/appointment',
    hasDisclaimer: false,
    featured: true
  },
  {
    id: 'kidney-related-anemia',
    name: 'Kidney-related Anaemia',
    shortDescription:
      'Reduced kidney function can cause anaemia due to decreased erythropoietin production. Evaluation and guidance for patients with low haemoglobin linked to kidney disease.',
    icon: 'Droplet',
    ctaText: 'Consult Now',
    href: '/appointment',
    hasDisclaimer: false,
    featured: false
  },
  {
    id: 'electrolyte-management',
    name: 'Electrolyte & Fluid Management',
    shortDescription:
      'Imbalances in sodium, potassium, and bicarbonate are common in kidney disease. Specialist consultation for evaluation, monitoring, and guidance on electrolyte-related concerns.',
    icon: 'Activity',
    ctaText: 'Book Consultation',
    href: '/appointment',
    hasDisclaimer: false,
    featured: false
  },
  {
    id: 'report-review-second-opinion',
    name: 'Report Review / Second Opinion',
    shortDescription:
      'Structured review of kidney function reports (creatinine, eGFR, urine protein), dialysis records, imaging, and previous specialist notes — helping patients understand their kidney health clearly.',
    icon: 'FileText',
    ctaText: 'Request Report Review',
    href: '/appointment',
    hasDisclaimer: false,
    featured: true
  }
];
