export const homeHeroData = {
  eyebrow: 'Advanced Kidney Care in Parbhani',
  title: 'Dr. Rahul Tengse',
  subtitle: 'Kidney Specialist | Consultant Nephrologist',
  qualification: 'Qualification details pending client confirmation',
  description:
    'Specialized consultation for kidney disease, dialysis care, kidney transplant guidance, diabetic kidney disease, blood pressure-related kidney problems, and report review.',
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
    name: 'Shivneri Super Speciality & Surya ICU Hospital'
  }
};

export const trustHighlights = [
  {
    title: 'Experienced Nephrologist',
    description: 'Specialized kidney care consultation with a patient-focused approach.',
    icon: 'ShieldCheck',
    color: 'teal'
  },
  {
    title: 'Dialysis Care',
    description: 'Guidance for patients who may require or are already undergoing dialysis.',
    icon: 'Activity',
    color: 'green'
  },
  {
    title: 'Transplant Guidance',
    description: 'Pre and post kidney transplant guidance with required medical evaluation.',
    icon: 'Hospital',
    color: 'blue'
  },
  {
    title: 'Patient Awareness',
    description: 'Kidney health education to help patients and families understand warning signs.',
    icon: 'BookOpen',
    color: 'purple'
  }
];

export const aboutPreviewData = {
  eyebrow: 'About the doctor',
  heading: 'Specialized kidney care with a patient-focused approach',
  cta: {
    label: 'Read Full Profile',
    href: '/about'
  },
  paragraphs: [
    'Dr. Rahul Tengse provides nephrology consultation for patients and families seeking guidance for kidney disease, dialysis care, kidney transplant-related evaluation, and report review.',
    'The website uses a medically safe patient-awareness approach and avoids unsupported claims or guarantees.',
    'Final qualification details, OPD timing, and image approval must be confirmed by the client before launch.'
  ]
};

export const hospitalPreviewData = {
  eyebrow: 'Hospital association',
  heading: 'Consulting at Shivneri Super Speciality & Surya ICU Hospital',
  associationLine: 'Hospital association shown for patient convenience and care coordination.',
  location: 'Parbhani, Maharashtra, India',
  cta: {
    label: 'Contact Hospital',
    href: '/contact'
  }
};

export const featuredServiceKeys = [
  'kidney-disease-consultation',
  'dialysis-care',
  'kidney-transplant-guidance',
  'diabetic-kidney-disease-care',
  'high-bp-related-kidney-disease',
  'report-review-second-opinion'
];

export const dialysisHighlightData = {
  eyebrow: 'Dialysis care guidance',
  heading: 'Supportive guidance for dialysis-related care',
  description:
    'Patients already undergoing dialysis or being evaluated for dialysis can request guidance related to reports, access awareness, and next-step consultation.',
  bullets: [
    'Guidance for patients already undergoing dialysis',
    'Awareness about dialysis access such as AV Fistula and Permcath',
    'Personalized advice must come from doctor consultation'
  ],
  cta: {
    label: 'Request Dialysis Consultation',
    href: '/dialysis-care'
  }
};

export const transplantHighlightData = {
  eyebrow: 'Transplant guidance',
  heading: 'Kidney Transplant Guidance',
  description:
    'Guidance may include pre-transplant evaluation awareness, donor-related discussion points, and post-transplant follow-up planning with a kidney specialist.',
  disclaimer:
    'Kidney transplant decisions depend on detailed medical evaluation, patient condition, donor suitability, hospital protocol, and specialist consultation. This section provides general guidance only.',
  cta: {
    label: 'Consult for Transplant Guidance',
    href: '/kidney-transplant-guidance'
  }
};

export const awarenessPreviewData = [
  {
    title: 'Kidney Disease Symptoms',
    description:
      'Learn about general warning signs such as swelling, tiredness, urine changes, and abnormal kidney reports.',
    icon: 'AlertCircle',
    color: 'teal',
    href: '/patient-awareness'
  },
  {
    title: 'Diabetes & Kidneys',
    description:
      'Understand why regular kidney monitoring is important for patients living with diabetes.',
    icon: 'HeartPulse',
    color: 'green',
    href: '/patient-awareness'
  },
  {
    title: 'When to See a Specialist',
    description:
      'Know when a kidney specialist consultation may be needed for symptoms, reports, or ongoing conditions.',
    icon: 'Info',
    color: 'blue',
    href: '/patient-awareness'
  }
];

export const appointmentCTAData = {
  eyebrow: 'Appointment request',
  heading: 'Request a Kidney Care Appointment',
  description: 'Our team will contact you shortly to confirm.',
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
    "Submitting an appointment request does not guarantee a final appointment time. The hospital or doctor's team will contact the patient for scheduling confirmation."
};

export const mediaPreviewConfig = {
  eyebrow: 'Media recognition',
  heading: 'Media Recognition',
  description:
    'Privacy-safe media coverage cards will be shown only after image review, redaction, and client approval.',
  emptyState: 'Media coverage will be added after privacy review and client approval.',
  cta: {
    label: 'View All Coverage',
    href: '/media-news'
  }
};

export const galleryPreviewConfig = {
  eyebrow: 'Gallery',
  heading: 'Gallery',
  description:
    'Approved doctor, hospital, awareness, and facility images will be displayed after client review.',
  emptyState: 'Approved gallery images will be added after client review.',
  cta: {
    label: 'View Full Gallery',
    href: '/gallery'
  }
};

export const contactPreviewData = {
  eyebrow: 'Contact',
  heading: 'Contact Preview',
  description: 'Contact details remain pending client confirmation and will be finalized before launch.',
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
  mapPlaceholder: 'Google Map link pending client confirmation.',
  cta: {
    label: 'View Full Contact Details',
    href: '/contact'
  }
};
