import { Instagram } from 'lucide-react';
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

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <section aria-label="Brand summary">
          <h2 className="font-heading text-xl font-bold">{siteData.doctor.name}</h2>
          <p className="mt-3 text-sm leading-6 text-sky">Trusted Kidney Specialist in Parbhani.</p>
          <p className="mt-4 text-sm leading-6 text-white/75">
            Website content is for general information and patient awareness only. Patients should
            consult the doctor or hospital team for personalized advice.
          </p>
          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-btn border border-white/30 px-4 text-sm font-semibold text-white hover:border-sky hover:text-sky"
          >
            <Instagram size={17} aria-hidden="true" />
            Instagram
          </a>
        </section>

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

        <section aria-label="Specialty services">
          <h2 className="font-heading text-base font-semibold">Specialty Services</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/80">
            {specialtyServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section aria-label="Contact information">
          <h2 className="font-heading text-base font-semibold">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/80">
            <a
              href={phoneHref}
              className={phoneConfirmed ? 'hover:text-sky' : 'pointer-events-none opacity-70'}
              aria-disabled={!phoneConfirmed}
              tabIndex={phoneConfirmed ? undefined : -1}
            >
              Phone: {siteData.contact.primaryPhone}
            </a>
            <p>Address: {siteData.hospital.address}</p>
            <p>OPD Timing: {siteData.hospital.opdTiming}</p>
          </div>
          <Link
            to={siteData.cta.appointment.href}
            className="mt-5 inline-flex min-h-11 items-center rounded-btn bg-teal px-4 text-sm font-semibold text-white hover:bg-green"
          >
            {siteData.cta.appointment.label}
          </Link>
        </section>
      </div>
      <div className="border-t border-teal/40 px-4 py-5 text-center text-sm text-white/70">
        © 2026 Dr. Rahul Tengse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
