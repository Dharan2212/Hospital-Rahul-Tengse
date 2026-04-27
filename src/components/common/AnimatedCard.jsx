import { motion } from 'framer-motion';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { cardRevealMotion, hoverLiftMotion } from '../../utils/motion.js';

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  li: motion.li
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function AnimatedCard({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  hover = true,
  as = 'div'
}) {
  const shouldReduceMotion = useReducedMotionPreference();
  const MotionTag = motionTags[as] || motion.div;

  return (
    <MotionTag
      {...cardRevealMotion(shouldReduceMotion, delay, direction)}
      whileHover={hover ? hoverLiftMotion(shouldReduceMotion) : undefined}
      className={cx(
        'rounded-card border border-border bg-white shadow-card transition-shadow duration-200 motion-safe:will-change-transform',
        hover && 'hover:shadow-hover',
        className
      )}
    >
      {children}
    </MotionTag>
  );
}
