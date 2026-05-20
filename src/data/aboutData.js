import { siteData } from './siteData.js';

/**
 * aboutData.js — About Doctor page content
 *
 * Batch 3 — Clinical Content Refresh
 * Updated: Enhanced professional bio, expertise wording, philosophy, trust language,
 *          SEO quality, patient-friendly readability, and nephrology-focused messaging.
 * All content is general awareness. Personalised medical advice requires direct consultation.
 */
export const aboutData = {
  hero: {
    eyebrow: 'Meet your kidney specialist',
    title: 'About Dr. Rahul Bhaskarrao Tengse',
    description:
      'Consultant Nephrologist and Kidney Transplant Physician in Parbhani — dedicated to patient-focused kidney care, dialysis guidance, and transplant awareness for patients and families across Marathwada.',
    primaryCTA: { label: 'Book Consultation', href: '/appointment', variant: 'primary' }
  },
  intro: {
    name: siteData.doctor.name,
    title: siteData.doctor.subtitle,
    qualification: siteData.doctor.qualification,
    paragraphs: [
      'Dr. Rahul Bhaskarrao Tengse is a Consultant Nephrologist specialising in the diagnosis, management, and follow-up care of kidney diseases. He provides structured consultation for patients and families dealing with chronic kidney disease (CKD), acute kidney problems, dialysis-related care, and kidney transplant guidance.',
      'His areas of focus include diabetic kidney disease, blood pressure-related kidney conditions, glomerular diseases, nephrotic syndrome, electrolyte disorders, and report review for patients seeking a second opinion. He works in close association with Shivneri Super Speciality & Surya ICU Hospital, Parbhani.',
      'Patient education is central to Dr. Tengse\'s approach — helping patients and families understand their reports, their treatment path, and the long-term steps involved in managing kidney health. This website is structured to support appointment requests and kidney-health awareness.',
    ]
  },
  qualifications: [
    { title: 'MBBS', note: 'Bachelor of Medicine and Surgery — Foundation of medical training' },
    { title: 'MD General Medicine', note: 'Postgraduate qualification in General Medicine' },
    { title: 'DM Nephrology', note: 'Superspecialty qualification in Nephrology — Kidney Specialist' },
  ],
  specializations: [
    'Nephrology',
    'Chronic Kidney Disease (CKD)',
    'Dialysis Care',
    'Kidney Transplant Guidance',
    'Diabetic Kidney Disease',
    'Hypertensive Nephropathy',
    'Glomerular Disease',
    'Nephrotic Syndrome',
    'AKI Management',
    'Vascular Access Awareness',
    'Electrolyte Disorders',
    'Report Review'
  ],
  expertiseAreas: [
    {
      title: 'Chronic Kidney Disease (CKD)',
      description: 'Evaluation, staging, monitoring, and long-term follow-up guidance for CKD patients across all stages.',
      icon: 'Stethoscope'
    },
    {
      title: 'Dialysis Care Guidance',
      description: 'Consultation for patients considering or currently undergoing haemodialysis, SLED, or peritoneal dialysis — including access awareness and record review.',
      icon: 'Activity'
    },
    {
      title: 'Kidney Transplant Guidance',
      description: 'Pre-transplant evaluation discussion, donor-related awareness, and post-transplant follow-up monitoring support.',
      icon: 'Hospital'
    },
    {
      title: 'Diabetic Kidney Disease',
      description: 'Kidney-health monitoring and consultation for patients living with diabetes, including report review and early intervention awareness.',
      icon: 'HeartPulse'
    },
    {
      title: 'Hypertension & Kidney Health',
      description: 'Guidance for patients with blood-pressure-related kidney concerns, abnormal reports, and the need for specialist follow-up.',
      icon: 'Activity'
    },
    {
      title: 'Report Review & Second Opinion',
      description: 'Structured review of kidney function reports, dialysis records, imaging, and previous prescriptions for patients seeking clarity.',
      icon: 'FileText'
    }
  ],
  philosophy: {
    quote:
      'Kidney care is most effective when patients are informed, involved, and supported through every step — from understanding their reports to planning their long-term follow-up.',
    note: 'This reflects a patient-education approach to kidney care. It is not a treatment guarantee or outcome promise.'
  },
  hospitalAssociation: {
    name: siteData.hospital.name,
    location: `${siteData.hospital.city}, ${siteData.hospital.state}, ${siteData.hospital.country}`,
    timing: siteData.hospital.opdTiming,
    note: 'OPD timing and map link to be confirmed with client before launch.',
    cta: { label: 'Contact Hospital', href: '/contact' }
  },
  mediaRecognition: {
    text: 'Dr. Rahul Bhaskarrao Tengse has been recognised in local and regional newspapers for kidney health awareness activities and dialysis care education in the Parbhani and Marathwada region.',
    href: '/media-news'
  },
  cta: {
    heading: 'Request a Kidney Care Consultation',
    description:
      'Submit your appointment request online. The hospital team will contact you to confirm timing and any documents to bring.',
    primaryCTA: { label: 'Book Consultation', href: '/appointment', variant: 'secondary' }
  }
};
