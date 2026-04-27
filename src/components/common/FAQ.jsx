import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { accordionContentMotion } from '../../utils/motion.js';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function FAQ({ items = [], className = '' }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);
  const shouldReduceMotion = useReducedMotionPreference();

  if (!items.length) return null;

  return (
    <div className={cx('space-y-3', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const triggerId = `faq-trigger-${item.id}`;

        return (
          <div key={item.id} className="rounded-card border border-border bg-white shadow-card">
            <button
              id={triggerId}
              type="button"
              className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading font-semibold text-navy transition hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                aria-hidden="true"
                className={cx('shrink-0 transition-transform duration-200', isOpen && 'rotate-180')}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="overflow-hidden"
                  {...accordionContentMotion(shouldReduceMotion)}
                >
                  <p className="border-t border-border px-5 py-4 text-sm leading-7 text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
