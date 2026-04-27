import { motion } from 'framer-motion';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { floatingIconMotion } from '../../utils/motion.js';

export function FloatingMotion({
  children,
  className = '',
  distance = 12,
  duration = 3.5,
  delay = 0,
  disabled = false
}) {
  const shouldReduceMotion = useReducedMotionPreference();

  if (disabled || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      {...floatingIconMotion({ distance, duration, delay, reducedMotion: shouldReduceMotion })}
    >
      {children}
    </motion.div>
  );
}
