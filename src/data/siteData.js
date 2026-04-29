/**
 * siteData.js — Single source of truth for all site-wide content.
 *
 * ─── LOGO SWAP ───────────────────────────────────────────────────────────────
 * Logo is now ENABLED (branding.useLogoImage: true).
 * Place the logo file at:  src/assets/images/logo/logo.png
 *
 * The Header <BrandMark /> component reads branding and automatically renders:
 *   - <img> when useLogoImage is true AND logoSrc is set
 *   - initials badge ("RT") when useLogoImage is false OR logoSrc is null
 *
 * TO DISABLE LOGO (revert to initials): set useLogoImage: false
 * TO CHANGE LOGO FILE: update logoSrc path
 * ─────────────────────────────────────────────────────────────────────────────
 */
import logo from '../assets/images/logo/logo.png';

export const siteData = {
  doctor: {
    name: 'Dr. Rahul Tengse',
    subtitle: 'Consultant Nephrologist | Kidney Disease, Dialysis & Kidney Transplant Guidance',
    qualification: 'Qualification details pending client confirmation',
    specialty: 'Kidney Specialist',
    location: 'Parbhani, Maharashtra, India',
  },

  hospital: {
    name: 'Shivneri Super Speciality & Surya ICU Hospital',
    address: 'Full address pending client confirmation',
    city: 'Parbhani',
    state: 'Maharashtra',
    country: 'India',
    opdTiming: 'Contact hospital for OPD timing',
    mapUrl: '',
  },

  contact: {
    primaryPhone: 'Phone number pending client confirmation',
    emergencyPhone: 'Emergency phone pending client confirmation',
    whatsappNumber: '',
    email: 'Email pending client confirmation',
    instagramUrl: 'https://www.instagram.com/drrahultengse/',
  },

  cta: {
    appointment: {
      label: 'Book Appointment',
      href: '/appointment',
    },
    callNow: {
      label: 'Call Now',
      href: '#',
    },
    contactHospital: {
      label: 'Contact Hospital',
      href: '/contact',
    },
  },

  /**
   * branding — controls logo rendering in Header.
   *
   * useLogoImage: true  + logoSrc set  → renders <img> logo
   * useLogoImage: false OR logoSrc null → renders "RT" initials badge
   *
   * logoWidth / logoHeight are set on <img> to prevent Cumulative Layout Shift.
   */
  branding: {
    useLogoImage: true,
    initials: 'RT',
    logoSrc: logo,
    logoAlt: 'Dr. Rahul Tengse Kidney Specialist Logo',
    logoWidth: 44,
    logoHeight: 44,
  },
};
