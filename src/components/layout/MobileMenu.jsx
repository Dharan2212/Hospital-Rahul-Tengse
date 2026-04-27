import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Calendar, Phone, X } from 'lucide-react';
import { navigationLinks } from '../../data/navigationData.js';
import { siteData } from '../../data/siteData.js';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import {
  drawerOverlayMotion,
  drawerPanelMotion,
  menuItemMotion,
  menuStaggerContainer
} from '../../utils/motion.js';

function MobileMenu({ isOpen, onClose, callHref, phoneConfirmed }) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotionPreference();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.classList.add('mobile-menu-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('mobile-menu-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) onClose();
    // route-change close only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden" id="mobile-navigation">
          <motion.button
            type="button"
            className="absolute inset-0 cursor-default bg-black/40"
            aria-label="Close navigation menu"
            onClick={onClose}
            {...drawerOverlayMotion(shouldReduceMotion)}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="absolute right-0 top-0 flex h-full w-[min(88vw,360px)] flex-col overflow-y-auto bg-white p-6 shadow-hover"
            {...drawerPanelMotion(shouldReduceMotion)}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <Link to="/" className="font-heading text-lg font-bold text-navy" onClick={onClose}>
                {siteData.doctor.name}
              </Link>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-btn border border-border text-navy hover:bg-sky hover:text-teal"
                aria-label="Close navigation menu"
                onClick={onClose}
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <motion.nav
              className="flex flex-col gap-2"
              aria-label="Mobile primary navigation"
              variants={menuStaggerContainer(shouldReduceMotion)}
              initial="hidden"
              animate="visible"
            >
              {navigationLinks.map((item) => (
                <motion.div key={item.href} variants={menuItemMotion(shouldReduceMotion)}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `block rounded-btn px-4 py-3 text-base font-semibold ${
                        isActive ? 'bg-sky text-teal' : 'text-text hover:bg-bgAlt hover:text-teal'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            <div className="mt-8 grid gap-3 border-t border-border pt-6">
              <a
                href={callHref}
                className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-btn border px-4 text-sm font-semibold ${
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
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-btn bg-teal px-4 text-sm font-semibold text-white shadow-card hover:bg-navy"
              >
                <Calendar size={17} aria-hidden="true" />
                {siteData.cta.appointment.label}
              </Link>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;
