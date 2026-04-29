/**
 * Header.jsx
 *
 * Sticky desktop header with:
 *  - Logo / branding from siteData.branding (easy swap via siteData.js)
 *  - Desktop nav with Services dropdown (hover + keyboard accessible)
 *  - Call Now + Book Appointment CTAs
 *  - Mobile hamburger → MobileMenu drawer (UNCHANGED)
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Calendar, ChevronDown, Menu, Phone } from 'lucide-react';
import { siteData } from '../../data/siteData.js';
import { navItems } from '../../data/navigationData.js';
import { getTelHref, isConfirmedValue } from '../../utils/contactLinks.js';
import MobileMenu from './MobileMenu.jsx';

// ─── Logo / brand mark ─────────────────────────────────────────────────────────
function BrandMark() {
  const { branding } = siteData;

  if (branding.useLogoImage && branding.logoSrc) {
    return (
      <img
        src={branding.logoSrc}
        alt={branding.logoAlt}
        width={branding.logoWidth}
        height={branding.logoHeight}
        className="h-11 w-11 rounded-card object-contain shadow-card"
      />
    );
  }

  return (
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-card bg-teal text-lg font-bold text-white shadow-card">
      {branding.initials}
    </span>
  );
}

// ─── Dropdown nav item (Services) ─────────────────────────────────────────────
function DropdownNavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const location = useLocation();

  // Close when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return undefined;
    function handleOutsideClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return undefined;
    function handleEscape(e) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Determine if any child route is active
  const isChildActive = item.children?.some((c) => location.pathname === c.href);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger button */}
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex min-h-[40px] items-center gap-1 rounded-btn px-3 py-2 text-sm font-semibold transition-colors ${
          isChildActive || location.pathname === item.href
            ? 'bg-sky text-teal'
            : 'text-text hover:bg-bgAlt hover:text-teal'
        }`}
      >
        {item.label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        role="menu"
        aria-label={`${item.label} submenu`}
        className={`absolute left-0 top-full z-50 min-w-[230px] pt-1 transition-all duration-150 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <div className="rounded-card border border-border bg-white py-2 shadow-hover">
          {/* Optional: parent "All Services" link */}
          <NavLink
            to={item.href}
            role="menuitem"
            className={({ isActive }) =>
              `block border-b border-border/50 px-4 py-2 text-sm font-semibold transition-colors ${
                isActive ? 'bg-sky text-teal' : 'text-navy hover:bg-sky hover:text-teal'
              }`
            }
          >
            All {item.label}
          </NavLink>

          {item.children.map((sub) => (
            <NavLink
              key={sub.href}
              to={sub.href}
              role="menuitem"
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-sky font-semibold text-teal'
                    : 'text-text hover:bg-sky hover:text-teal'
                }`
              }
            >
              {sub.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
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

  function closeMenu({ restoreFocus = false } = {}) {
    setIsMenuOpen(false);
    if (restoreFocus) {
      window.setTimeout(() => menuButtonRef.current?.focus(), 0);
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur transition-shadow duration-200 ${
        isScrolled ? 'shadow-card' : 'shadow-none'
      }`}
    >
      <div className="mx-auto flex min-h-[76px] max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* ── Brand / Logo ── */}
        <Link to="/" className="group flex items-center gap-3" aria-label="Go to homepage">
          <BrandMark />
          <span className="hidden sm:block">
            <span className="block font-heading text-lg font-bold leading-tight text-navy group-hover:text-teal">
              {siteData.doctor.name}
            </span>
            <span className="block text-xs font-medium text-muted">{siteData.doctor.specialty}</span>
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            // Item with dropdown children
            if (item.children && item.children.length > 0) {
              return <DropdownNavItem key={item.label} item={item} />;
            }

            // Plain nav link
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `inline-flex min-h-[40px] items-center rounded-btn px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-sky text-teal'
                      : 'text-text hover:bg-bgAlt hover:text-teal'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* ── Desktop CTAs ── */}
        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={callHref}
            className={`inline-flex min-h-11 items-center gap-2 rounded-btn border px-4 text-sm font-semibold transition-colors ${
              phoneConfirmed
                ? 'border-teal text-teal hover:bg-sky'
                : 'pointer-events-none border-border text-muted opacity-70'
            }`}
            aria-disabled={!phoneConfirmed}
            title={!phoneConfirmed ? 'Phone number pending client confirmation' : 'Call now'}
            tabIndex={phoneConfirmed ? undefined : -1}
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

        {/* ── Mobile Hamburger (UNCHANGED) ── */}
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-btn border border-border text-navy transition-colors hover:bg-sky hover:text-teal xl:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      {/* ── Mobile Menu (UNCHANGED) ── */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => closeMenu({ restoreFocus: true })}
        callHref={callHref}
        phoneConfirmed={phoneConfirmed}
      />
    </header>
  );
}

export default Header;
