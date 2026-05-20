/**
 * homeData.js — Homepage content data
 *
 * Batch 2 — Homepage Content Refresh
 * Updated: Professional, medically safe, SEO-optimised, patient-friendly copy.
 * Doctor identity: Dr. Rahul Bhaskarrao Tengse
 * Specialty: Consultant Nephrologist and Kidney Transplant Physician
 * Qualifications: MBBS | MD General Medicine | DM Nephrology
 */

// ─── HERO ────────────────────────────────────────────────────────────────────

export const homeHeroData = {
  eyebrow: 'Kidney Specialist in Parbhani, Maharashtra',
  title: 'Dr. Rahul Bhaskarrao Tengse',
  subtitle: 'Consultant Nephrologist & Kidney Transplant Physician',
  qualification: 'MBBS | MD General Medicine | DM Nephrology',
  description:
    'Trusted kidney care for patients and families in Parbhani and surrounding regions. Specialised consultation for chronic kidney disease, dialysis guidance, diabetic kidney disease, hypertension-related kidney conditions, kidney transplant guidance, and report review.',
  primaryCTA: {
    label: 'Book Appointment',
    href: '/appointment'
  },
  secondaryCTA: {
    label: 'View Services',
    href: '/services'
  },
  tertiaryCTA: {
    label: 'Call Now',
    type: 'phone'
  },
  hospitalBadge: {
    label: 'Consulting at',
    name: 'Shivneri Super Speciality & Surya ICU Hospital, Parbhani'
  }
};

// ─── TRUST HIGHLIGHTS ────────────────────────────────────────────────────────

export const trustHighlights = [
  {
    title: 'Nephrology Consultation',
    description:
      'Specialised consultation for chronic kidney disease, abnormal kidney reports, and long-term kidney health management.',
    icon: 'ShieldCheck',
    color: 'teal'
  },
  {
    title: 'Dialysis Care Guidance',
    description:
      'Patient-centered guidance for those undergoing or considering dialysis, including access awareness and follow-up support.',
    icon: 'Activity',
    color: 'green'
  },
  {
    title: 'Kidney Transplant Guidance',
    description:
      'Pre-transplant evaluation awareness, donor-related guidance, and post-transplant follow-up consultation support.',
    icon: 'Hospital',
    color: 'blue'
  },
  {
    title: 'Patient Awareness',
    description:
      'Educational kidney health guidance to help patients and families recognise warning signs and make informed decisions.',
    icon: 'BookOpen',
    color: 'purple'
  }
];

// ─── ABOUT DOCTOR PREVIEW ────────────────────────────────────────────────────

export const aboutPreviewData = {
  eyebrow: 'About the doctor',
  heading: 'Patient-centred nephrology care with a compassionate approach',
  cta: {
    label: 'Read Full Profile',
    href: '/about'
  },
  paragraphs: [
    'Dr. Rahul Bhaskarrao Tengse is a Consultant Nephrologist and Kidney Transplant Physician practising at Shivneri Super Speciality & Surya ICU Hospital, Parbhani. He holds qualifications in MBBS, MD General Medicine, and DM Nephrology.',
    'His areas of focus include chronic kidney disease management, dialysis care guidance, diabetic and hypertension-related kidney conditions, kidney transplant evaluation, and report review for patients seeking a second opinion or ongoing monitoring.',
    'Dr. Tengse follows an evidence-based, patient-first approach — offering educational guidance alongside medical consultation to help patients and families understand kidney health at every stage.'
  ]
};

// ─── HOSPITAL ASSOCIATION PREVIEW ────────────────────────────────────────────

export const hospitalPreviewData = {
  eyebrow: 'Hospital association',
  heading: 'Consulting at Shivneri Super Speciality & Surya ICU Hospital',
  associationLine:
    'Advanced kidney care consultation available at a multi-speciality hospital facility in Parbhani, Maharashtra.',
  location: 'Parbhani, Maharashtra, India',
  cta: {
    label: 'Contact Hospital',
    href: '/contact'
  }
};

// ─── FEATURED SERVICES (Homepage preview — 6 key services) ───────────────────

export const featuredServiceKeys = [
  'kidney-disease-consultation',
  'dialysis-care',
  'kidney-transplant-guidance',
  'diabetic-kidney-disease-care',
  'high-bp-related-kidney-disease',
  'report-review-second-opinion'
];

// ─── DIALYSIS CARE HIGHLIGHT ─────────────────────────────────────────────────

export const dialysisHighlightData = {
  eyebrow: 'Dialysis care guidance',
  heading: 'Supportive guidance for patients managing dialysis',
  description:
    'Whether you are being evaluated for dialysis or are already undergoing treatment, kidney specialist consultation can help clarify your reports, understand your access options, and plan your next steps with confidence.',
  bullets: [
    'Consultation for patients undergoing haemodialysis or peritoneal dialysis',
    'Awareness guidance for dialysis access including AV Fistula and Permcath',
    'SLED dialysis and infection-related dialysis support guidance where clinically relevant'
  ],
  cta: {
    label: 'Request Dialysis Consultation',
    href: '/dialysis-care'
  }
};

// ─── KIDNEY TRANSPLANT HIGHLIGHT ─────────────────────────────────────────────

export const transplantHighlightData = {
  eyebrow: 'Transplant guidance',
  heading: 'Kidney Transplant Guidance',
  description:
    'Navigating kidney transplant decisions can feel overwhelming. Specialist consultation can provide clarity on pre-transplant evaluation, donor-related questions, and what to expect during post-transplant follow-up and ongoing monitoring.',
  disclaimer:
    'Kidney transplant decisions depend on detailed medical evaluation, patient condition, donor suitability, hospital protocol, and specialist consultation. This page provides general guidance only and is not a substitute for personalised medical advice.',
  cta: {
    label: 'Consult for Transplant Guidance',
    href: '/kidney-transplant-guidance'
  }
};

// ─── PATIENT AWARENESS PREVIEW ───────────────────────────────────────────────

export const awarenessPreviewData = [
  {
    title: 'Kidney Disease Warning Signs',
    description:
      'Recognising early kidney disease symptoms — including swelling, fatigue, changes in urine, and blood pressure concerns — can make a meaningful difference in long-term outcomes.',
    icon: 'AlertCircle',
    color: 'teal',
    href: '/patient-awareness'
  },
  {
    title: 'Diabetes & Kidney Health',
    description:
      'Diabetes is one of the leading causes of kidney disease. Regular kidney function monitoring is important for anyone living with diabetes or pre-diabetes.',
    icon: 'HeartPulse',
    color: 'green',
    href: '/patient-awareness'
  },
  {
    title: 'When to See a Kidney Specialist',
    description:
      'Abnormal kidney reports, persistent swelling, high creatinine levels, or blood pressure linked to kidney concerns are all reasons to seek a kidney specialist consultation.',
    icon: 'Info',
    color: 'blue',
    href: '/patient-awareness'
  }
];

// ─── APPOINTMENT CTA BAND ────────────────────────────────────────────────────

export const appointmentCTAData = {
  eyebrow: 'Kidney care appointment',
  heading: 'Request a Kidney Specialist Consultation',
  description:
    'Take the first step towards better kidney health. Submit your appointment request and our team will contact you to confirm.',
  primaryCTA: {
    label: 'Book Appointment',
    href: '/appointment',
    variant: 'secondary'
  },
  secondaryCTA: {
    label: 'Call Now',
    href: '#',
    variant: 'subtle'
  },
  disclaimer:
    "Submitting an appointment request does not guarantee a confirmed appointment time. The hospital or doctor's team will contact the patient for scheduling confirmation."
};

// ─── MEDIA COVERAGE PREVIEW ──────────────────────────────────────────────────

export const mediaPreviewConfig = {
  eyebrow: 'Media recognition',
  heading: 'Media Coverage & Recognition',
  description:
    'Dr. Rahul Bhaskarrao Tengse has been featured in local and regional newspapers for kidney health awareness programmes and community education initiatives in Parbhani.',
  emptyState: 'Media coverage cards will appear here after privacy review and client approval.',
  cta: {
    label: 'View All Coverage',
    href: '/media-news'
  }
};

// ─── GALLERY PREVIEW ─────────────────────────────────────────────────────────

export const galleryPreviewConfig = {
  eyebrow: 'Gallery',
  heading: 'Gallery',
  description:
    'Approved images from the hospital facility, kidney health awareness programmes, and dialysis care activities.',
  emptyState: 'Approved gallery images will appear here after client review.',
  cta: {
    label: 'View Full Gallery',
    href: '/gallery'
  }
};

// ─── CONTACT PREVIEW ─────────────────────────────────────────────────────────

export const contactPreviewData = {
  eyebrow: 'Contact us',
  heading: 'Get in Touch',
  description:
    'Reach the hospital team for appointment support, OPD timing enquiries, or directions to the facility in Parbhani.',
  cards: [
    {
      id: 'phone',
      title: 'Phone',
      icon: 'Phone',
      valueKey: 'primaryPhone',
      actionLabel: 'Call Now'
    },
    {
      id: 'address',
      title: 'Address',
      icon: 'MapPin',
      valueKey: 'address',
      actionLabel: 'View on Map'
    },
    {
      id: 'timing',
      title: 'OPD Timing',
      icon: 'Clock',
      valueKey: 'opdTiming',
      actionLabel: 'Confirm Timing'
    }
  ],
  mapPlaceholder: 'Google Maps link pending client confirmation. Visit the Contact page for full location details.',
  cta: {
    label: 'View Full Contact Details',
    href: '/contact'
  }
};
