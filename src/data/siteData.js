/**
 * siteData.js — Single source of truth for all site-wide content.
 *
 * ─── DRAFT DATA NOTICE ────────────────────────────────────────────────────────
 * Contact details below are populated from the client's provided draft data.
 * All values marked [DRAFT] must be confirmed by the client before go-live.
 * Do NOT launch with placeholder strings still present.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ─── LOGO SWAP ───────────────────────────────────────────────────────────────
 * Logo is ENABLED (branding.useLogoImage: true).
 * Place the logo file at: src/assets/images/logo/logo.png
 * The Header <BrandMark /> reads branding and renders:
 *   - <img> when useLogoImage is true AND logoSrc is set
 *   - initials badge ("RT") when useLogoImage is false OR logoSrc is null
 * TO DISABLE LOGO: set useLogoImage: false
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * ─── WHATSAPP NUMBER ─────────────────────────────────────────────────────────
 * whatsappNumber is intentionally left empty until the client confirms which
 * number (doctor's personal or hospital reception) should receive WhatsApp
 * appointment requests. Set VITE_WHATSAPP_NUMBER in .env or Netlify once confirmed.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import logo from '../assets/images/logo/logo.png';

export const siteData = {
  doctor: {
    name: 'Dr. Rahul Tengse',
    subtitle: 'Consultant Nephrologist | Kidney Disease, Dialysis & Kidney Transplant Guidance',
    // [DRAFT] Confirm exact qualification line with client before launch
    qualification: 'MBBS, MD Medicine, DM Nephrology',
    specialty: 'Kidney Specialist',
    location: 'Parbhani, Maharashtra, India',
  },

  hospital: {
    name: 'Shivneri Super Speciality & Surya ICU Hospital',
    // [DRAFT] Confirm full postal address with client
    address: 'Swastik Chamber, Near Niraj Hotel, Gavhane Chowk, Parbhani - 431401',
    city: 'Parbhani',
    state: 'Maharashtra',
    country: 'India',
    // [DRAFT] Confirm OPD timing with client before launch
    opdTiming: 'Contact hospital for OPD timing',
    // [DRAFT] Add confirmed Google Maps embed/share URL
    mapUrl: '',
  },

  contact: {
    // [DRAFT] Phone confirmed from client-provided data — verify before launch
    primaryPhone: '8432842222',
    // [DRAFT] Emergency number — confirm with client
    emergencyPhone: '',
    // WhatsApp: INTENTIONALLY EMPTY — client must confirm which number receives WA messages.
    // Set VITE_WHATSAPP_NUMBER in .env / Netlify environment variables once confirmed.
    whatsappNumber: '',
    // [DRAFT] Email confirmed from client-provided data — verify before launch
    email: 'shivnerihospital24@gmail.com',
    instagramUrl: 'https://www.instagram.com/drrahultengse/',
  },

  cta: {
    appointment: {
      label: 'Book Appointment',
      href: '/appointment',
    },
    callNow: {
      label: 'Call Now',
      href: 'tel:8432842222',
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
   * logoWidth / logoHeight prevent Cumulative Layout Shift.
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
