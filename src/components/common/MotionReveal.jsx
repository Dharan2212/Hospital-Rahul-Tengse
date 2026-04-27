import { motion } from 'framer-motion';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { getViewportRevealMotion } from '../../utils/motion.js';

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  p: motion.p,
  span: motion.span
};

export function MotionReveal({
  children,
  delay = 0,
  direction = 'up',
  amount = 0.15,
  once = true,
  className = '',
  as = 'div',
  disabled = false
}) {
  const shouldReduceMotion = useReducedMotionPreference();
  const MotionTag = motionTags[as] || motion.div;

  if (disabled) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const motionProps = getViewportRevealMotion({
    direction,
    delay,
    amount,
    once,
    reducedMotion: shouldReduceMotion
  });

  return (
    <MotionTag className={className} {...motionProps}>
      {children}
    </MotionTag>
  );
}
