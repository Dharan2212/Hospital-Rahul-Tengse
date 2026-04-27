export const appointmentSteps = [
  { id: 1, key: 'type', label: 'Type' },
  { id: 2, key: 'details', label: 'Details' },
  { id: 3, key: 'schedule', label: 'Schedule' },
  { id: 4, key: 'review', label: 'Review' },
  { id: 5, key: 'submitted', label: 'Submitted' }
];

export const appointmentTypes = [
  {
    id: 'new-consultation',
    label: 'New Consultation',
    description: 'First-time visit for kidney health assessment'
  },
  {
    id: 'follow-up',
    label: 'Follow-up Visit',
    description: 'Return visit for existing kidney condition or ongoing care'
  },
  {
    id: 'dialysis',
    label: 'Dialysis Consultation',
    description: 'Guidance for dialysis-related queries or evaluation'
  },
  {
    id: 'transplant',
    label: 'Kidney Transplant Guidance',
    description: 'Pre or post-transplant evaluation and follow-up guidance'
  },
  {
    id: 'report-review',
    label: 'Report Review',
    description: 'Review of existing kidney reports or lab results'
  },
  {
    id: 'urgent',
    label: 'Emergency / Urgent Inquiry',
    description: 'Urgent medical query — contact hospital directly for emergencies'
  }
];

export const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

export const preferredTimeOptions = [
  { value: '', label: 'Select preferred time' },
  { value: 'Morning', label: 'Morning' },
  { value: 'Afternoon', label: 'Afternoon' },
  { value: 'Evening', label: 'Evening' }
];

export const appointmentDisclaimer =
  "Submitting an appointment request does not guarantee a confirmed appointment time. The hospital or doctor's team will contact the patient for confirmation.";

export const emergencyDisclaimer =
  'For life-threatening emergencies, call the hospital directly or visit the nearest emergency facility immediately.';

export const batch61SubmitNotice =
  'WhatsApp submission will be connected in Batch 6.2. This step only confirms that the form review flow is ready.';

export const thankYouContent = {
  heading: 'Appointment Request Submitted',
  body: 'Our team will contact you shortly to confirm your appointment.',
  note: appointmentDisclaimer
};

export const whatsappMissingContent = {
  heading: 'WhatsApp Number Pending Confirmation',
  body: 'WhatsApp number is pending client confirmation. Please call the hospital or try again after confirmation.'
};

export const submitAnotherRequestLabel = 'Submit Another Request';
export const callNowFallbackLabel = 'Call Now';
export const appointmentSubmitDisclaimer = appointmentDisclaimer;

export const defaultAppointmentValues = {
  appointmentType: '',
  patientName: '',
  age: '',
  gender: '',
  mobile: '',
  city: '',
  preferredDate: '',
  preferredTime: '',
  message: ''
};
