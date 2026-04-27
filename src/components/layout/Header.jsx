import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Calendar, Menu, Phone } from 'lucide-react';
import { siteData } from '../../data/siteData.js';
import { navigationLinks } from '../../data/navigationData.js';
import { getTelHref, isConfirmedValue } from '../../utils/contactLinks.js';
import MobileMenu from './MobileMenu.jsx';

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneConfirmed = isConfirmedValue(siteData.contact.primaryPhone);
  const callHref = useMemo(() => getTelHref(siteData.contact.primaryPhone), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur transition-shadow duration-200 ${
        isScrolled ? 'shadow-card' : 'shadow-none'
      }`}
    >
      <div className="mx-auto flex min-h-[76px] max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Go to homepage">
          <span className="flex h-11 w-11 items-center justify-center rounded-card bg-teal text-lg font-bold text-white shadow-card">
            RT
          </span>
          <span className="hidden sm:block">
            <span className="block font-heading text-lg font-bold leading-tight text-navy group-hover:text-teal">
              {siteData.doctor.name}
            </span>
            <span className="block text-xs font-medium text-muted">{siteData.doctor.specialty}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-btn px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-sky text-teal'
                    : 'text-text hover:bg-bgAlt hover:text-teal focus-visible:bg-sky'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={callHref}
            className={`inline-flex min-h-11 items-center gap-2 rounded-btn border px-4 text-sm font-semibold transition-colors ${
              phoneConfirmed
                ? 'border-teal text-teal hover:bg-sky'
                : 'pointer-events-none border-border text-muted opacity-70'
            }`}
            aria-disabled={!phoneConfirmed}
            title={!phoneConfirmed ? 'Phone number pending client confirmation' : 'Call now'}
          >
            <Phone size={17} aria-hidden="true" />
            {siteData.cta.callNow.label}
          </a>
          <Link
            to={siteData.cta.appointment.href}
            className="inline-flex min-h-11 items-center gap-2 rounded-btn bg-teal px-4 text-sm font-semibold text-white shadow-card transition-colors hover:bg-navy"
          >
            <Calendar size={17} aria-hidden="true" />
            {siteData.cta.appointment.label}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-btn border border-border text-navy transition-colors hover:bg-sky hover:text-teal lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        callHref={callHref}
        phoneConfirmed={phoneConfirmed}
      />
    </header>
  );
}

export default Header;
