export const mediaData = [];

export const mediaDataNotes = {
  status: 'pending-client-approval',
  frontendUseAllowed: false,
  expectedItemShape: {
    id: null,
    title: null,
    source: null,
    date: null,
    summary: null,
    thumbnail: null,
    fullImage: null,
    approvalStatus: 'approved | pending-client-approval | do-not-use',
    privacyStatus: 'clear | needs-privacy-review | do-not-use',
    frontendUseAllowed: false,
    notes: null
  },
  notes:
    'Media coverage items will be added only after cropping, privacy redaction, and client approval. Raw newspaper screenshots must not be rendered publicly.'
};
