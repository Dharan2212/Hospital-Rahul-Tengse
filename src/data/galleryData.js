export const galleryData = [];

export const galleryDataNotes = {
  status: 'pending-client-approval',
  frontendUseAllowed: false,
  expectedItemShape: {
    id: null,
    title: null,
    category: null,
    thumbnail: null,
    fullImage: null,
    caption: null,
    approvalStatus: 'approved | pending-client-approval | do-not-use',
    privacyStatus: 'clear | needs-privacy-review | do-not-use',
    frontendUseAllowed: false,
    notes: null
  },
  notes:
    'Gallery items will be added only after client approval and privacy review. Patient-identifiable images must not be displayed.'
};
