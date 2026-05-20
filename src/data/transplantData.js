/**
 * transplantData.js — Kidney Transplant Guidance page content
 *
 * Batch 3 — Clinical Content Refresh
 * Updated: Improved transplant awareness, evaluation guidance, donor education,
 *          recovery support wording, multidisciplinary care messaging.
 *          All content is educational guidance only — not a guarantee of outcome.
 */
export const transplantData = {
  hero: {
    eyebrow: 'Kidney transplant guidance',
    title: 'Kidney Transplant Guidance',
    description:
      'Informative, structured guidance for patients and families considering kidney transplantation — covering the evaluation process, donor discussion points, and the importance of post-transplant follow-up.',
    primaryCTA: { label: 'Consult for Transplant Guidance', href: '/appointment', variant: 'primary' }
  },

  requiredDisclaimer:
    'Kidney transplant decisions depend on detailed medical evaluation, patient condition, donor suitability, hospital protocol, ethics committee review, and specialist consultation. This page provides general educational guidance only and does not represent transplant approval, outcome guarantee, or legal advice.',

  intro: {
    heading: 'What this guidance covers',
    covers: [
      'General awareness about the kidney transplant evaluation process',
      'Questions patients and families commonly ask before and after transplantation',
      'Donor-related discussion points at an informational and educational level',
      'Post-transplant monitoring, medication, and follow-up awareness',
      'When to consider consulting a kidney transplant specialist'
    ],
    doesNotCover: [
      'Confirmed transplant eligibility or approval decisions',
      'Legal documentation or government authority clearances',
      'Donor suitability confirmation outside of a full clinical workup',
      'Emergency transplant advice or critical care recommendations',
      'Outcome guarantees or recovery timelines'
    ]
  },

  evaluationPoints: [
    {
      title: 'Comprehensive Medical Evaluation',
      description:
        'Pre-transplant evaluation includes detailed assessment of kidney function, cardiovascular health, infection screening, cancer screening, and overall fitness. Reports from all treating doctors should be gathered.',
      icon: 'FileText'
    },
    {
      title: 'Kidney Function & Dialysis Status',
      description:
        'Current kidney function stage, dialysis dependency, and residual kidney function are all evaluated to determine transplant readiness and urgency.',
      icon: 'Activity'
    },
    {
      title: 'Donor Compatibility Assessment',
      description:
        'Living donor transplants require blood group compatibility and tissue matching (HLA typing). Deceased donor transplants follow national waiting list protocols and hospital empanelment.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Comorbidity Review',
      description:
        'Conditions such as diabetes, heart disease, uncontrolled infections, and cancer history must be evaluated by the transplant team as part of pre-transplant clearance.',
      icon: 'HeartPulse'
    },
    {
      title: 'Hospital Protocol & Ethics Clearance',
      description:
        'All transplants in India require government authorization, ethics committee clearance, and hospital empanelment. These processes must be followed without exception.',
      icon: 'Hospital'
    },
    {
      title: 'Psychosocial Readiness',
      description:
        'Both donor and recipient should be psychologically prepared. Counselling and informed consent are essential parts of the transplant preparation process.',
      icon: 'Stethoscope'
    }
  ],

  donorGuidance: {
    heading: 'Donor-related information',
    livingDonor: {
      title: 'Living Donor Transplant',
      points: [
        'Living donor kidney transplants typically offer better outcomes than deceased donor transplants.',
        'The donor must be willing, in good health, and undergo independent medical and psychological evaluation.',
        'Blood group compatibility and tissue (HLA) matching are required.',
        'Donor suitability must be assessed independently by the transplant team — it cannot be assumed or self-determined.',
        'All living donor transplants in India require government authorization and ethics committee review under the THOA (Transplantation of Human Organs Act).'
      ]
    },
    deceasedDonor: {
      title: 'Deceased Donor Transplant',
      points: [
        'Deceased donor kidneys come from brain-dead individuals whose families have consented to organ donation.',
        'Patients must be registered on a waiting list at a hospital empanelled under the regional organ transplant programme (e.g., ZTCC/SOTTO in Maharashtra).',
        'Matching is done based on blood group, tissue compatibility, and medical urgency.',
        'Waiting times vary and cannot be predicted or guaranteed.'
      ]
    },
    disclaimer:
      'This information is educational. All donor and recipient decisions must follow medical evaluation, legal requirements, ethics committee clearance, and hospital protocol.'
  },

  followUp: {
    heading: 'Post-transplant care',
    intro:
      'A successful kidney transplant is the beginning — not the end — of a committed care journey. Post-transplant monitoring is lifelong and critical to preserving the transplanted kidney.',
    points: [
      'Immunosuppressive medicines must be taken exactly as prescribed — missing doses or stopping without advice can trigger rejection.',
      'Regular blood tests for kidney function (creatinine, tacrolimus levels) are required at defined intervals — often weekly in the first months, then monthly.',
      'Kidney transplant follow-up appointments should be with your nephrologist as scheduled — do not skip visits even if you feel well.',
      'Infection risk is higher after transplant because of immunosuppression. Report fevers, coughs, urinary symptoms, or any unusual signs immediately.',
      'Blood pressure and blood sugar must remain controlled to protect the transplanted kidney.',
      'Avoid nephrotoxic medications (e.g., NSAIDs, herbal supplements) without specialist clearance.',
      'Lifestyle guidance — including sunscreen use, diet, and gradual return to activity — should be discussed with the transplant team.'
    ]
  },

  rejectionAwareness: {
    heading: 'Understanding kidney rejection',
    text:
      'Rejection occurs when the immune system recognises the transplanted kidney as foreign and mounts an immune response. It can be acute (occurring within months) or chronic (developing over years). Early detection through regular monitoring and prompt medical consultation is critical. Modern immunosuppressive therapy has significantly reduced rejection rates, but lifelong vigilance is required.',
    warningSignals: [
      'Sudden decrease in urine output',
      'Rise in creatinine levels on blood test',
      'Swelling, pain, or tenderness over the transplant site',
      'Fever, fatigue, or flu-like symptoms',
      'Unexplained weight gain due to fluid retention'
    ],
    note: 'If any of these signs appear, contact your nephrologist or transplant team immediately without waiting for a scheduled visit.'
  },

  mediaNote: {
    text: 'Dr. Rahul Tengse has been involved in kidney transplant awareness and education activities recognised in local media. Newspaper coverage is available on the Media & News page.',
    href: '/media-news'
  },

  cta: {
    heading: 'Request Kidney Transplant Guidance',
    description:
      'If you or a family member is considering kidney transplantation or needs post-transplant follow-up support, submit an appointment request. The team will contact you to confirm and advise on documents to bring.',
    primaryCTA: { label: 'Consult for Transplant Guidance', href: '/appointment', variant: 'secondary' }
  }
};
