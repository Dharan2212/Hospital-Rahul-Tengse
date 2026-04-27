export const awarenessData = {
  hero: {
    eyebrow: 'Patient awareness',
    title: 'Patient Awareness',
    description:
      'General kidney-health education for patients and families. This content supports awareness and does not replace medical consultation.',
    primaryCTA: { label: 'Get Kidney Care Guidance', href: '/appointment', variant: 'primary' }
  },
  symptoms: [
    'Fatigue or unusual tiredness',
    'Swelling in feet, face, or body',
    'Reduced urine or urine changes',
    'Back pain or flank discomfort',
    'Breathlessness or persistent weakness',
    'Abnormal kidney reports or urine reports'
  ],
  riskCards: [
    {
      title: 'Diabetes and Kidney Risk',
      icon: 'HeartPulse',
      tone: 'green',
      description:
        'Diabetes can affect kidney health over time. Regular monitoring and consultation can help patients understand their kidney-related reports.'
    },
    {
      title: 'High Blood Pressure and Kidney Risk',
      icon: 'Activity',
      tone: 'blue',
      description:
        'Blood-pressure-related kidney concerns should be reviewed with a doctor, especially when reports are abnormal or symptoms are present.'
    }
  ],
  whenToConsult: [
    'Abnormal creatinine, urine protein, or kidney-related reports',
    'Swelling, reduced urine, breathlessness, or persistent tiredness',
    'Diabetes or high blood pressure with kidney concerns',
    'Dialysis-related questions or transplant guidance needs',
    'Need for kidney report review or second opinion'
  ],
  awarenessSections: [
    {
      title: 'Dialysis Awareness',
      description:
        'Dialysis-related awareness helps patients understand why consultation, records, and regular follow-up are important. This section is not a procedure guide.',
      href: '/dialysis-care'
    },
    {
      title: 'Kidney Transplant Awareness',
      description:
        'Kidney transplant guidance requires detailed medical evaluation, donor suitability assessment, hospital protocol, and specialist consultation.',
      href: '/kidney-transplant-guidance'
    }
  ],
  lifestyleReminder:
    'Regular checkups, report review, medicine compliance, and timely consultation can support better kidney-health awareness for patients and families.',
  cta: {
    heading: 'Get Kidney Care Guidance',
    description: 'Request an appointment for kidney symptoms, reports, dialysis questions, or transplant guidance awareness.',
    primaryCTA: { label: 'Get Kidney Care Guidance', href: '/appointment', variant: 'secondary' }
  }
};
