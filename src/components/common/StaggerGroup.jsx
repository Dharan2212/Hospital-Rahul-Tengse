import { Children } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { staggerContainer } from '../../utils/motion.js';

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  nav: motion.nav,
  ul: motion.ul,
  ol: motion.ol
};

export function StaggerGroup({
  children,
  className = '',
  as = 'div',
  staggerDelay = 0.08,
  disabled = false
}) {
  const shouldReduceMotion = useReducedMotionPreference();
  const MotionTag = motionTags[as] || motion.div;
  const childCount = Children.count(children);
  const effectiveStagger = childCount > 6 ? Math.min(staggerDelay, 0.04) : staggerDelay;

  if (disabled) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag
      className={className}
      variants={staggerContainer(effectiveStagger, shouldReduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </MotionTag>
  );
}
