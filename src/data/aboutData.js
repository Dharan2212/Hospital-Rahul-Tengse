import { siteData } from './siteData.js';

export const aboutData = {
  hero: {
    eyebrow: 'About the doctor',
    title: 'About Dr. Rahul Tengse',
    description:
      'Learn about Dr. Rahul Tengse, Consultant Nephrologist, and his patient-focused approach to kidney disease, dialysis care guidance, transplant-related guidance, and report review.',
    primaryCTA: { label: 'Book Consultation', href: '/appointment', variant: 'primary' }
  },
  intro: {
    name: siteData.doctor.name,
    title: siteData.doctor.subtitle,
    qualification: 'MBBS, MD Medicine, DM Nephrology [CLIENT TO CONFIRM]',
    paragraphs: [
      'Dr. Rahul Tengse provides specialized nephrology consultation for patients and families seeking guidance for kidney health concerns, abnormal reports, and ongoing kidney disease follow-up.',
      'His consultation areas include kidney disease evaluation, dialysis care guidance, diabetic kidney disease, blood pressure-related kidney problems, kidney transplant guidance, and report review.',
      'The website content is structured to support patient awareness and appointment requests. It does not replace personalized medical advice, diagnosis, or treatment.',
      'Final qualification wording, OPD schedule, and all public-use images must be confirmed by the client before launch.'
    ]
  },
  qualifications: [
    { title: 'MBBS', note: 'Degree confirmation required before launch.' },
    { title: 'MD Medicine', note: 'Exact degree line to be confirmed by client.' },
    { title: 'DM Nephrology', note: 'Specialty qualification confirmation required.' }
  ],
  specializations: [
    'Nephrology',
    'Dialysis',
    'Kidney Transplant Guidance',
    'Diabetic Kidney Disease',
    'Hypertensive Nephropathy',
    'Glomerular Disease',
    'Report Review',
    'Patient Awareness'
  ],
  expertiseAreas: [
    { title: 'Kidney Disease Consultation', description: 'Guidance for kidney symptoms, abnormal reports, and follow-up planning.', icon: 'Stethoscope' },
    { title: 'Dialysis Care Guidance', description: 'Supportive consultation for dialysis-related questions and access awareness.', icon: 'Activity' },
    { title: 'Kidney Transplant Guidance', description: 'Pre and post-transplant awareness based on specialist evaluation.', icon: 'Hospital' },
    { title: 'Diabetes & BP Kidney Concerns', description: 'Kidney-health guidance for patients with diabetes or blood-pressure-related concerns.', icon: 'HeartPulse' },
    { title: 'Report Review', description: 'Review of kidney reports, dialysis records, and previous medical documents.', icon: 'FileText' },
    { title: 'Patient Education', description: 'Awareness-focused communication for patients and families.', icon: 'ShieldCheck' }
  ],
  philosophy: {
    quote:
      'Patient-focused kidney care begins with clear communication, careful report review, and guidance that is personalized through consultation.',
    note: 'This statement is a safe care-approach note, not a treatment guarantee.'
  },
  hospitalAssociation: {
    name: siteData.hospital.name,
    location: `${siteData.hospital.city}, ${siteData.hospital.state}, ${siteData.hospital.country}`,
    timing: siteData.hospital.opdTiming,
    note: 'Hospital association details are shown for patient convenience. Exact address, map link, and OPD timing require client confirmation.',
    cta: { label: 'Contact Hospital', href: '/contact' }
  },
  mediaRecognition: {
    text: 'Dr. Rahul Tengse has been featured in local and regional newspapers for kidney health awareness.',
    href: '/media-news'
  },
  cta: {
    heading: 'Request a Kidney Care Consultation',
    description: 'Submit an appointment request and the hospital or doctor\'s team will contact you shortly to confirm.',
    primaryCTA: { label: 'Book Consultation', href: '/appointment', variant: 'secondary' }
  }
};
