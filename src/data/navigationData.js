/**
 * navigationData.js
 *
 * navigationLinks  — flat array used by MobileMenu (DO NOT CHANGE SHAPE — MobileMenu depends on it)
 * navItems         — structured array used by desktop Header (supports children dropdown)
 */

// ─── Mobile menu flat array ────────────────────────────────────────────────────
// All links including Appointment for mobile users.
export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Dialysis Care', href: '/dialysis-care' },
  { label: 'Transplant Guidance', href: '/kidney-transplant-guidance' },
  { label: 'Awareness', href: '/patient-awareness' },
  { label: 'Media', href: '/media-news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Appointment', href: '/appointment' },
  { label: 'Contact', href: '/contact' },
];

// ─── Desktop header structured array (with dropdown support) ───────────────────
// Appointment is added as a top-level item (desktop users also see the header CTA button).
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Dialysis Care', href: '/dialysis-care' },
      { label: 'Kidney Transplant Guidance', href: '/kidney-transplant-guidance' },
      { label: 'Patient Awareness', href: '/patient-awareness' },
    ],
  },
  { label: 'Media', href: '/media-news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Appointment', href: '/appointment' },
  { label: 'Contact', href: '/contact' },
];
