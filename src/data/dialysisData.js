export const dialysisData = {
  hero: {
    eyebrow: 'Dialysis care guidance',
    title: 'Dialysis Care — Patient Guidance & Support',
    description:
      'General awareness and consultation support for patients who may require dialysis or are already undergoing dialysis care.',
    primaryCTA: { label: 'Request Dialysis Consultation', href: '/appointment', variant: 'primary' }
  },
  whatIsDialysis: {
    heading: 'What is dialysis?',
    text:
      'Dialysis is a medical support process that may be advised when the kidneys are not able to adequately remove waste and extra fluid from the body. The need, type, and timing of dialysis depend on medical evaluation and doctor guidance.'
  },
  whenNeeded: [
    { title: 'CKD Stage 5', description: 'Advanced kidney disease may require dialysis evaluation based on symptoms, reports, and doctor assessment.', icon: 'FileText' },
    { title: 'Acute Kidney Injury', description: 'Some sudden kidney problems may require close monitoring and hospital-based care.', icon: 'Activity' },
    { title: 'Fluid Overload', description: 'Fluid-related symptoms may need specialist evaluation, especially in kidney disease.', icon: 'Droplet' },
    { title: 'Doctor-recommended Support', description: 'Dialysis decisions must be made after personalized medical consultation.', icon: 'ShieldCheck' }
  ],
  guidanceSections: [
    {
      id: 'sled',
      title: 'SLED Dialysis Guidance',
      icon: 'Activity',
      description:
        'SLED dialysis guidance may be discussed when clinically advised in a hospital setting. Patients and families should consult the doctor for personalized recommendations.',
      disclaimer: 'This section is for awareness only and does not replace medical decision-making.'
    },
    {
      id: 'peritoneal',
      title: 'Peritoneal Dialysis',
      icon: 'Droplet',
      description:
        'Peritoneal dialysis may be discussed with patients and families where suitable. Eligibility and care planning require specialist evaluation.',
      disclaimer: 'This is general guidance and not an instruction guide.'
    },
    {
      id: 'hcv-hbsag',
      title: 'HCV / HbsAg Dialysis Support',
      icon: 'ShieldCheck',
      description:
        'Dialysis-related guidance for infection-control-based support may be required for some patients. Hospital protocol and doctor consultation are essential.',
      disclaimer: 'Infection-control decisions must follow hospital protocol and medical advice.'
    }
  ],
  accessAwareness: [
    {
      title: 'AV Fistula Awareness',
      icon: 'Activity',
      description:
        'An AV Fistula is commonly discussed as dialysis access for suitable patients. Its planning, care, and suitability must be guided by medical professionals.'
    },
    {
      title: 'Permcath Awareness',
      icon: 'FileText',
      description:
        'Permcath may be discussed as temporary or planned dialysis access in selected situations. This page does not provide procedure instructions.'
    }
  ],
  safetyNotes: [
    'Consult the doctor for personalized dialysis guidance.',
    'Do not change dialysis schedule, medicines, or fluid guidance without medical advice.',
    'Bring dialysis records, reports, medicines, and previous prescriptions for consultation.'
  ],
  cta: {
    heading: 'Request Dialysis Consultation',
    description: 'Share your dialysis-related questions through the appointment request page. The team will contact you for confirmation.',
    primaryCTA: { label: 'Request Dialysis Consultation', href: '/appointment', variant: 'secondary' }
  }
};
