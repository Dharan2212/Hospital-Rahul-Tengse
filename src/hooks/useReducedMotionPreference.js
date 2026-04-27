import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function useReducedMotionPreference() {
  const framerPreference = useReducedMotion();
  const [mediaPreference, setMediaPreference] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setMediaPreference(Boolean(mediaQuery.matches));

    updatePreference();
    mediaQuery.addEventListener?.('change', updatePreference);

    return () => {
      mediaQuery.removeEventListener?.('change', updatePreference);
    };
  }, []);

  return Boolean(framerPreference || mediaPreference);
}
