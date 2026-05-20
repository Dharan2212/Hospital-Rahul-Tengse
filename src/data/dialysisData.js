/**
 * dialysisData.js — Dialysis Care page content
 *
 * Batch 3 — Clinical Content Refresh
 * Updated: Richer educational content, patient-friendly explanations, emotionally
 *          supportive tone, clinically accurate descriptions, improved SEO structure.
 * All content is educational. Personalised dialysis guidance requires direct consultation.
 */
export const dialysisData = {
  hero: {
    eyebrow: 'Dialysis care guidance',
    title: 'Dialysis Care — Patient Guidance & Support',
    description:
      'Clear, supportive information for patients and families exploring dialysis — what it is, when it may be needed, and what to expect during the journey.',
    primaryCTA: { label: 'Request Dialysis Consultation', href: '/appointment', variant: 'primary' }
  },

  whatIsDialysis: {
    heading: 'Understanding dialysis',
    text:
      'Dialysis is a kidney support therapy that helps remove waste products, excess fluids, and toxins from the blood when the kidneys are no longer able to do this adequately on their own. It does not cure kidney disease — rather, it provides an essential life-supporting function while other treatment options are evaluated. The type of dialysis recommended, the timing, and the schedule all depend on careful medical evaluation by a kidney specialist.'
  },

  whenNeeded: [
    {
      title: 'Advanced CKD (Stage 4–5)',
      description: 'When kidney function falls significantly, a nephrologist will evaluate whether dialysis initiation is required based on symptoms, lab reports, and overall condition.',
      icon: 'FileText'
    },
    {
      title: 'Acute Kidney Injury (AKI)',
      description: 'In sudden or severe kidney injury, urgent hospital-based dialysis support may be advised as part of critical care management.',
      icon: 'Activity'
    },
    {
      title: 'Dangerous Fluid Accumulation',
      description: 'Fluid overload causing breathlessness, pulmonary oedema, or uncontrolled blood pressure may require emergency dialysis evaluation.',
      icon: 'Droplet'
    },
    {
      title: 'Electrolyte Emergencies',
      description: 'Dangerously elevated potassium (hyperkalaemia) or acid-base disturbances may require urgent dialysis support to protect heart and organ function.',
      icon: 'HeartPulse'
    },
    {
      title: 'Toxin Removal Support',
      description: 'In certain poisonings or medication toxicities, dialysis may be used as part of an intensive care management plan.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Doctor-guided Decision',
      description: 'Dialysis initiation must be guided by a nephrologist based on complete medical assessment. No single report or symptom alone determines this decision.',
      icon: 'Stethoscope'
    }
  ],

  guidanceSections: [
    {
      id: 'haemodialysis',
      title: 'Haemodialysis',
      icon: 'Activity',
      description:
        'Haemodialysis is the most common form of dialysis. Blood is circulated through an external dialysis machine that filters waste and excess fluid, then returned to the body. Sessions are typically scheduled 3 times per week for 3–4 hours each, though frequency depends on the clinical situation.',
      disclaimer: 'Session frequency, duration, and access type must be personalised through doctor consultation.'
    },
    {
      id: 'sled',
      title: 'SLED Dialysis',
      icon: 'HeartPulse',
      description:
        'Sustained Low-Efficiency Dialysis (SLED) is a gentler, extended form of dialysis used mainly in critically ill or haemodynamically unstable patients. It runs over a longer period at lower intensity, making it suitable for patients who cannot tolerate standard haemodialysis sessions.',
      disclaimer: 'SLED is a hospital-based therapy. Clinical suitability is assessed by the treating nephrologist and intensive care team.'
    },
    {
      id: 'peritoneal',
      title: 'Peritoneal Dialysis (PD)',
      icon: 'Droplet',
      description:
        'In peritoneal dialysis, the lining of the abdomen (peritoneum) acts as a natural filter. A special solution is introduced through a catheter, left for a period to absorb waste, and then drained. PD can often be performed at home, offering more flexibility for suitable patients. CAPD (Continuous Ambulatory Peritoneal Dialysis) is one of the most common forms.',
      disclaimer: 'Peritoneal dialysis eligibility and care planning require detailed specialist evaluation and patient training.'
    },
    {
      id: 'hcv-hbsag',
      title: 'HCV / HbsAg Dialysis Support',
      icon: 'ShieldCheck',
      description:
        'Patients with Hepatitis C (HCV) or Hepatitis B (HbsAg) infection require specialised dialysis settings with strict infection-control protocols. Safe and effective dialysis is possible with appropriate precautions, separate equipment management, and regular monitoring under specialist care.',
      disclaimer: 'Infection-control procedures follow hospital protocol. Confirm availability and requirements with the hospital team.'
    }
  ],

  accessAwareness: [
    {
      title: 'AV Fistula',
      icon: 'Activity',
      description:
        'An Arteriovenous (AV) Fistula is created surgically by connecting an artery to a vein — usually in the forearm — to create a durable, high-flow access site for regular haemodialysis. It is the preferred access option for long-term dialysis patients because of its durability and lower infection risk. Planning should begin well before dialysis is anticipated.',
      image: 'av-fistula'
    },
    {
      title: 'Permcath (Tunnelled Catheter)',
      icon: 'FileText',
      description:
        'A Permcath is a tunnelled central venous catheter inserted under the skin and used for dialysis access when an AV Fistula is not yet ready, not suitable, or needs time to mature. It offers relatively quick access but carries a higher infection risk than a fistula over the long term. Transition from Permcath to AV Fistula is recommended when clinically appropriate.',
      image: 'permcath'
    }
  ],

  safetyNotes: [
    'Always consult the nephrologist before making any changes to your dialysis schedule, fluid intake, or medicines.',
    'Bring all dialysis records, machine reports, recent blood tests, and medicine lists to every consultation.',
    'Report any changes in swelling, breathlessness, weight gain, blood pressure, or general wellbeing to the dialysis team promptly.',
    'Attend scheduled dialysis sessions as advised — skipping or shortening sessions can cause serious complications.',
    'Diet, fluid intake, and potassium control are critical in dialysis. Ask for a dietitian referral from your specialist.'
  ],

  lifestylePoints: [
    {
      title: 'Fluid Management',
      description: 'Fluid intake restriction is often required. The amount you can drink daily depends on your urine output and is set by your specialist.',
      icon: 'Droplet'
    },
    {
      title: 'Diet in Dialysis',
      description: 'Potassium, phosphorus, and sodium need to be carefully managed. A kidney-specific diet plan should be discussed with your doctor or dietitian.',
      icon: 'Heart'
    },
    {
      title: 'Medicine Compliance',
      description: 'Phosphate binders, blood pressure medicines, and erythropoietin injections are commonly used. Take all medicines as prescribed.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Access Care',
      description: 'Keep your AV Fistula or Permcath site clean and protected. Report any redness, swelling, discharge, or pain immediately.',
      icon: 'Activity'
    }
  ],

  cta: {
    heading: 'Request a Dialysis Consultation',
    description:
      'Have questions about dialysis, access options, or an ongoing dialysis care plan? Submit your appointment request and our team will contact you to confirm.',
    primaryCTA: { label: 'Request Dialysis Consultation', href: '/appointment', variant: 'secondary' }
  }
};
