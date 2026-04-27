export const transplantData = {
  hero: {
    eyebrow: 'Transplant guidance',
    title: 'Kidney Transplant Guidance',
    description:
      'General guidance for patients and families exploring kidney transplant evaluation, donor-related discussion points, and follow-up planning.',
    primaryCTA: { label: 'Consult for Transplant Guidance', href: '/appointment', variant: 'primary' }
  },
  requiredDisclaimer: 'Kidney transplant decisions depend on detailed medical evaluation, patient condition, donor suitability, hospital protocol, and specialist consultation. This page provides general guidance only.',
  intro: {
    covers: [
      'Pre-transplant evaluation awareness',
      'Questions to discuss during consultation',
      'Donor-related guidance topics at an informational level',
      'Post-transplant follow-up awareness and report review'
    ],
    doesNotCover: [
      'Guaranteed transplant approval or outcome',
      'Legal approval decisions',
      'Donor suitability confirmation without evaluation',
      'Hospital protocol replacement or emergency advice'
    ]
  },
  evaluationPoints: [
    { title: 'Medical Evaluation', description: 'Kidney transplant decisions require detailed evaluation of patient condition and reports.', icon: 'FileText' },
    { title: 'Report Review', description: 'Previous kidney reports, dialysis records, and medicines should be reviewed during consultation.', icon: 'Stethoscope' },
    { title: 'Donor Discussion', description: 'Donor-related topics must follow medical, ethical, legal, and hospital protocol requirements.', icon: 'ShieldCheck' },
    { title: 'Fitness & Monitoring', description: 'Overall health, infection status, and long-term follow-up plans may be discussed.', icon: 'HeartPulse' },
    { title: 'Hospital Protocol', description: 'Final decisions depend on hospital process and specialist recommendations.', icon: 'Hospital' }
  ],
  donorGuidance:
    'Donor-related guidance is informational and must follow medical evaluation, legal requirements, hospital policy, and specialist consultation. This website does not confirm donor suitability or approval.',
  followUp: [
    'Medicine compliance and regular monitoring after transplant',
    'Follow-up visits with a kidney specialist as advised',
    'Report review for kidney function and related health parameters',
    'Awareness about infection precautions and timely medical consultation'
  ],
  mediaNote: {
    text: 'Newspaper coverage of kidney awareness activities may be reviewed on the Media & News page after privacy review and client approval.',
    href: '/media-news'
  },
  cta: {
    heading: 'Consult for Kidney Transplant Guidance',
    description: 'Request a consultation for transplant-related awareness and follow-up discussion. The team will contact you to confirm.',
    primaryCTA: { label: 'Consult for Transplant Guidance', href: '/appointment', variant: 'secondary' }
  }
};
