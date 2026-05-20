/**
 * awarenessData.js — Patient Awareness page content
 *
 * Batch 3 — Clinical Content Refresh
 * Updated: Expanded kidney disease awareness, CKD prevention, diabetes & kidney
 *          health, hypertension, lifestyle, screening guidance, and SEO structure.
 * Content is educational. It does not replace personalised medical consultation.
 */
export const awarenessData = {
  hero: {
    eyebrow: 'Kidney health awareness',
    title: 'Know Your Kidneys',
    description:
      'Educational guidance for patients and families — understanding kidney disease, recognising warning signs, and knowing when to consult a kidney specialist.',
    primaryCTA: { label: 'Book a Kidney Consultation', href: '/appointment', variant: 'primary' }
  },

  kidneyFunctions: {
    heading: 'What do your kidneys do?',
    intro:
      'The kidneys are two bean-shaped organs located on either side of the spine, just below the ribcage. Despite their small size, they perform essential functions that are critical to life.',
    functions: [
      {
        title: 'Filter Blood Continuously',
        description: 'Healthy kidneys filter approximately 150–200 litres of blood every day, removing waste products and excess substances through urine.',
        icon: 'Droplet'
      },
      {
        title: 'Control Blood Pressure',
        description: 'The kidneys regulate blood pressure through fluid balance and the renin-angiotensin system. Damaged kidneys are a major cause of hypertension.',
        icon: 'Activity'
      },
      {
        title: 'Produce Red Blood Cell Hormones',
        description: 'Kidneys produce erythropoietin (EPO), which signals bone marrow to make red blood cells. Kidney disease often causes anaemia as EPO production falls.',
        icon: 'HeartPulse'
      },
      {
        title: 'Regulate Electrolytes & pH',
        description: 'Sodium, potassium, calcium, phosphorus, and bicarbonate levels are carefully balanced by the kidneys to keep organ systems functioning normally.',
        icon: 'ShieldCheck'
      }
    ]
  },

  symptoms: {
    heading: 'Warning signs of kidney disease',
    intro:
      'Kidney disease is often called a "silent disease" because symptoms may not appear until the condition is significantly advanced. Knowing early warning signs helps in seeking timely consultation.',
    list: [
      'Persistent fatigue or unusual tiredness not explained by other causes',
      'Swelling in the feet, ankles, legs, or face (oedema)',
      'Reduced urine output or foamy, dark, or blood-tinged urine',
      'Persistent puffiness around the eyes, especially in the morning',
      'Difficult-to-control high blood pressure',
      'Breathlessness without obvious cause',
      'Loss of appetite, nausea, or metallic taste in the mouth',
      'Muscle cramps, particularly at night',
      'Difficulty concentrating or mental fogginess',
      'Abnormal creatinine, urea, eGFR, or urine protein in blood or urine tests'
    ],
    note: 'Many of these symptoms can have causes other than kidney disease. Only a specialist evaluation with blood and urine tests can confirm kidney health status.'
  },

  ckdAwareness: {
    heading: 'Chronic Kidney Disease (CKD)',
    intro:
      'Chronic Kidney Disease (CKD) refers to a gradual, long-term loss of kidney function over months or years. CKD is classified into 5 stages based on the estimated Glomerular Filtration Rate (eGFR) — a measure of how well the kidneys filter waste.',
    stages: [
      { stage: 'Stage 1', egfr: '≥ 90', description: 'Normal or near-normal kidney function with some structural damage. Often no symptoms.' },
      { stage: 'Stage 2', egfr: '60–89', description: 'Mildly reduced kidney function. Usually no symptoms but risk factors must be managed.' },
      { stage: 'Stage 3', egfr: '30–59', description: 'Moderately reduced kidney function. Regular monitoring and specialist review recommended.' },
      { stage: 'Stage 4', egfr: '15–29', description: 'Severely reduced kidney function. Dialysis or transplant planning discussions begin.' },
      { stage: 'Stage 5', egfr: '< 15', description: 'Kidney failure (End Stage Renal Disease). Dialysis or transplant is typically required.' }
    ],
    note: 'CKD progression can be slowed with proper management. Early detection and regular nephrology follow-up are the most important protective steps.'
  },

  riskCards: [
    {
      title: 'Diabetes & Kidney Disease',
      icon: 'HeartPulse',
      tone: 'green',
      description:
        'Diabetic nephropathy (diabetic kidney disease) is the leading cause of CKD and kidney failure worldwide. High blood sugar damages the tiny blood vessels in the kidneys over time, reducing filtering capacity. All patients with diabetes should have annual kidney function tests (creatinine, eGFR, urine albumin-to-creatinine ratio) regardless of symptoms.',
      keyPoints: [
        'Target HbA1c below 7% (as advised by your doctor) to protect kidneys',
        'Control blood pressure — target below 130/80 mmHg in diabetics',
        'Annual urine albumin test is essential for early detection',
        'ACE inhibitors or ARBs are often prescribed to protect kidneys in diabetic patients'
      ]
    },
    {
      title: 'High Blood Pressure & Kidneys',
      icon: 'Activity',
      tone: 'blue',
      description:
        'Hypertension is both a cause and a consequence of kidney disease. Uncontrolled high blood pressure damages kidney blood vessels, reducing function over years. Simultaneously, damaged kidneys make blood pressure harder to control — creating a harmful cycle. Kidney evaluation is recommended for all patients with difficult-to-control hypertension.',
      keyPoints: [
        'Target blood pressure below 130/80 mmHg for patients with kidney disease',
        'Take antihypertensive medicines consistently — do not stop without medical advice',
        'Salt restriction is important — aim for less than 5g of salt per day',
        'Regular kidney function monitoring is recommended for hypertensive patients'
      ]
    },
    {
      title: 'Kidney Stones',
      icon: 'Droplet',
      tone: 'teal',
      description:
        'Recurrent kidney stones can damage kidney tissue and increase infection risk over time. Risk factors include low fluid intake, certain dietary habits, family history, and specific metabolic conditions. Specialist evaluation helps identify the stone type and guide prevention.',
      keyPoints: [
        'Drink at least 2.5–3 litres of fluids per day (unless restricted by your doctor)',
        'Recurrent stones require metabolic evaluation by a specialist',
        'Dietary changes depend on stone composition — confirm with your specialist',
        'Stones causing obstruction need urgent urological or nephrological evaluation'
      ]
    },
    {
      title: 'Infections & Kidney Health',
      icon: 'ShieldCheck',
      tone: 'navy',
      description:
        'Recurrent urinary tract infections (UTIs), kidney infections (pyelonephritis), and certain systemic infections can lead to permanent kidney damage if inadequately treated. Patients with diabetes or structural urinary abnormalities are at higher risk.',
      keyPoints: [
        'Treat UTIs completely with the correct antibiotic course',
        'Recurrent UTIs in women, children, or males warrant specialist investigation',
        'High fever with back pain may indicate kidney infection — seek prompt medical attention',
        'Some infections (streptococcal, hepatitis B, hepatitis C) can cause immune-mediated kidney disease'
      ]
    }
  ],

  whenToConsult: {
    heading: 'When to consult a kidney specialist',
    intro: 'You do not need to wait for advanced symptoms. Early consultation is protective.',
    list: [
      'Abnormal creatinine, urea, or eGFR in a blood report',
      'Protein or blood in urine (confirmed on urine analysis)',
      'Swelling in legs, feet, or face — especially if persistent',
      'Breathlessness or reduced urine output',
      'Diabetes with any sign of kidney involvement (albuminuria, rising creatinine)',
      'High blood pressure that is difficult to control',
      'History of kidney stones, kidney infections, or structural kidney problems',
      'Family history of kidney disease, polycystic kidney disease (PKD)',
      'Questions about dialysis — whether you need it, or guidance if already on it',
      'Need for kidney transplant evaluation or post-transplant follow-up',
      'Second opinion on kidney reports or specialist recommendations'
    ]
  },

  awarenessSections: [
    {
      title: 'Dialysis Awareness',
      description:
        'Understanding dialysis — what it is, what types exist, and what dialysis access means — helps patients and families prepare for informed conversations with their specialist. Visit the Dialysis Care page for detailed educational guidance.',
      href: '/dialysis-care',
      icon: 'Activity'
    },
    {
      title: 'Kidney Transplant Awareness',
      description:
        'A kidney transplant can offer freedom from dialysis and improved quality of life for eligible patients. Understanding the evaluation process, the role of donors, and the commitment of post-transplant care is important before beginning the transplant journey.',
      href: '/kidney-transplant-guidance',
      icon: 'Hospital'
    }
  ],

  ckdDiet: {
    heading: 'Diet and lifestyle in kidney disease',
    intro: 'Diet plays a significant role in managing kidney disease and slowing its progression. The right dietary approach depends on the stage of CKD, whether dialysis has started, and associated conditions. Always confirm dietary advice with your nephrologist or a kidney dietitian.',
    tips: [
      {
        title: 'Protein',
        description: 'In early CKD, modest protein restriction may slow progression. In dialysis patients, protein requirements are different. Confirm target with your specialist.',
        icon: 'Heart'
      },
      {
        title: 'Potassium',
        description: 'High potassium (hyperkalaemia) is dangerous in kidney disease. Limit high-potassium foods (bananas, tomatoes, orange juice, potatoes) if levels are elevated.',
        icon: 'Activity'
      },
      {
        title: 'Phosphorus',
        description: 'Phosphorus builds up in kidney disease, damaging blood vessels and bones. Limit processed foods, cola drinks, and dairy if advised. Phosphate binders may be prescribed.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Salt and Fluids',
        description: 'Low-salt diet helps control blood pressure and reduce fluid retention. Fluid restriction applies mainly to dialysis patients — confirm your limit with your doctor.',
        icon: 'Droplet'
      }
    ]
  },

  screening: {
    heading: 'Who should get kidney health screening?',
    groups: [
      { label: 'Diabetes patients', note: 'Annual kidney function test and urine albumin check' },
      { label: 'Hypertension patients', note: 'Regular kidney function monitoring with blood tests' },
      { label: 'Family history of kidney disease or PKD', note: 'Early baseline screening and periodic review' },
      { label: 'Recurrent UTI or kidney stone history', note: 'Specialist evaluation and follow-up imaging' },
      { label: 'Overweight or obese individuals', note: 'Kidney function and blood pressure monitoring' },
      { label: 'Age above 60 years', note: 'Annual kidney function assessment as part of general health check' }
    ]
  },

  lifestyleReminder:
    'Regular checkups, medicine compliance, controlled blood pressure and blood sugar, and timely specialist review are the most powerful tools available to protect kidney health. Do not wait for symptoms to seek consultation.',

  cta: {
    heading: 'Get Kidney Care Guidance',
    description:
      'If you have kidney-related reports, symptoms, or questions — book a consultation with Dr. Rahul Tengse. Our team will guide you on the next steps.',
    primaryCTA: { label: 'Book a Kidney Consultation', href: '/appointment', variant: 'secondary' }
  }
};
