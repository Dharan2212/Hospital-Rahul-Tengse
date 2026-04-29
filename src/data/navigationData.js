/**
 * navigationData.js
 *
 * navigationLinks  — flat array used by MobileMenu (DO NOT CHANGE SHAPE — MobileMenu depends on it)
 * navItems         — structured array used by desktop Header (supports children dropdown)
 */

// ─── Mobile menu uses this flat array (unchanged) ─────────────────────────────
export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Dialysis Care', href: '/dialysis-care' },
  { label: 'Transplant Guidance', href: '/kidney-transplant-guidance' },
  { label: 'Awareness', href: '/patient-awareness' },
  { label: 'Media', href: '/media-news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

// ─── Desktop header uses this structured array (with dropdown support) ─────────
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
  { label: 'Contact', href: '/contact' },
];
