import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/siteData.js';
import { getExternalHref, getTelHref, isConfirmedValue } from '../../utils/contactLinks.js';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Dialysis Care', href: '/dialysis-care' },
  { label: 'Transplant Guidance', href: '/kidney-transplant-guidance' },
  { label: 'Patient Awareness', href: '/patient-awareness' },
];

const specialtyServices = [
  'Kidney Disease Consultation',
  'Dialysis Care',
  'Kidney Biopsy',
  'Nephrotic Syndrome',
  'Kidney Transplant Guidance',
  'Report Review',
];

function Footer() {
  const phoneConfirmed = isConfirmedValue(siteData.contact.primaryPhone);
  const phoneHref = getTelHref(siteData.contact.primaryPhone);
  const instagramHref = getExternalHref(siteData.contact.instagramUrl);
  const facebookHref = getExternalHref(siteData.contact.facebookUrl);
  const instagramConfirmed = isConfirmedValue(siteData.contact.instagramUrl);
  const facebookConfirmed = isConfirmedValue(siteData.contact.facebookUrl);

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Column 1: Brand */}
        <section aria-label="Brand summary">
          <h2 className="font-heading text-xl font-bold">{siteData.doctor.name}</h2>
          <p className="mt-1 text-sm font-medium text-teal">Consultant Nephrologist</p>
          <p className="mt-3 text-sm leading-6 text-sky">Trusted Kidney Specialist in Parbhani.</p>
          <p className="mt-4 text-sm leading-6 text-white/75">
            Website content is for general information and patient awareness only. Patients should
            consult the doctor or hospital team for personalised advice.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {instagramConfirmed && (
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow Dr. Rahul Tengse on Instagram"
                className="inline-flex min-h-11 items-center gap-2 rounded-btn border border-white/30 px-4 text-sm font-semibold text-white transition hover:border-sky hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                <Instagram size={17} aria-hidden="true" />
                Instagram
              </a>
            )}
            {facebookConfirmed && (
              <a
                href={facebookHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow Dr. Rahul Tengse on Facebook"
                className="inline-flex min-h-11 items-center gap-2 rounded-btn border border-white/30 px-4 text-sm font-semibold text-white transition hover:border-sky hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                <Facebook size={17} aria-hidden="true" />
                Facebook
              </a>
            )}
          </div>
        </section>

        {/* Column 2: Quick Links */}
        <nav aria-label="Footer quick links">
          <h2 className="font-heading text-base font-semibold">Quick Links</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/80">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-sky focus-visible:text-sky">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Specialty Services */}
        <section aria-label="Specialty services">
          <h2 className="font-heading text-base font-semibold">Specialty Services</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/80">
            {specialtyServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        {/* Column 4: Contact */}
        <section aria-label="Contact information">
          <h2 className="font-heading text-base font-semibold">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/80">
            {phoneConfirmed ? (
              <a
                href={phoneHref}
                className="hover:text-sky focus-visible:text-sky"
                aria-label={`Call Dr. Rahul Tengse hospital at ${siteData.contact.primaryPhone}`}
              >
                Phone: +91 {siteData.contact.primaryPhone}
              </a>
            ) : (
              <p className="opacity-70">Phone: Pending confirmation</p>
            )}
            <p>
              {siteData.hospital.name},<br />
              {siteData.hospital.address},<br />
              {siteData.hospital.city}, {siteData.hospital.state}
            </p>
            <p className="text-white/60 text-xs">
              OPD Timing: {
                siteData.hospital.opdTiming && !/contact hospital|confirm/i.test(siteData.hospital.opdTiming)
                  ? siteData.hospital.opdTiming
                  : 'Call hospital for OPD timing'
              }
            </p>
          </div>
          <Link
            to={siteData.cta.appointment.href}
            className="mt-5 inline-flex min-h-11 items-center rounded-btn bg-teal px-4 text-sm font-semibold text-white transition hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            {siteData.cta.appointment.label}
          </Link>
        </section>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-teal/40 px-4 py-5 text-center text-sm text-white/70">
        © 2026 Dr. Rahul Bhaskarrao Tengse. All rights reserved.
        <span className="mx-2 opacity-40">|</span>
        <span>Shivneri Super Speciality &amp; Surya ICU Hospital, Parbhani</span>
      </div>
    </footer>
  );
}

export default Footer;
