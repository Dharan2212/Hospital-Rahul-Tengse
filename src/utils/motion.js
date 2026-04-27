export const easings = {
  easeOut: 'easeOut',
  easeInOut: 'easeInOut'
};

export const durations = {
  reduced: 0.15,
  fast: 0.2,
  drawer: 0.28,
  modal: 0.3,
  normal: 0.35,
  serviceHover: 0.4,
  card: 0.5,
  reveal: 0.5,
  heroText: 0.6,
  heroImage: 0.7,
  float: 3.5,
  pulse: 3
};

export const viewportReveal = {
  once: true,
  amount: 0.15
};

export const directionOffsets = {
  up: { x: 0, y: 30 },
  left: { x: -30, y: 0 },
  right: { x: 30, y: 0 },
  none: { x: 0, y: 0 }
};

export function safeDuration(duration = durations.reveal, reducedMotion = false) {
  return reducedMotion ? Math.min(duration, durations.reduced) : duration;
}

export function safeDelay(delay = 0, reducedMotion = false) {
  return reducedMotion ? Math.min(delay, 0.05) : delay;
}

function opacityOnly({ delay = 0, duration = durations.reveal, ease = easings.easeOut } = {}) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration, delay, ease }
  };
}

export function getFadeMotion({ delay = 0, duration = durations.reveal, reducedMotion = false } = {}) {
  return opacityOnly({
    delay: safeDelay(delay, reducedMotion),
    duration: safeDuration(duration, reducedMotion),
    ease: easings.easeOut
  });
}

export function getRevealMotion({
  direction = 'up',
  delay = 0,
  duration = durations.reveal,
  reducedMotion = false
} = {}) {
  if (reducedMotion || direction === 'none') {
    return getFadeMotion({ delay, duration, reducedMotion });
  }

  const offset = directionOffsets[direction] || directionOffsets.up;

  return {
    initial: { opacity: 0, ...offset },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
    transition: {
      duration,
      delay,
      ease: easings.easeOut
    }
  };
}

export function getViewportRevealMotion({
  direction = 'up',
  delay = 0,
  amount = viewportReveal.amount,
  once = viewportReveal.once,
  duration = durations.reveal,
  reducedMotion = false
} = {}) {
  const motion = getRevealMotion({ direction, delay, duration, reducedMotion });

  return {
    initial: motion.initial,
    whileInView: motion.animate,
    viewport: { once, amount },
    transition: motion.transition
  };
}

export function fadeUp(reducedMotion = false, delay = 0) {
  return getRevealMotion({ direction: 'up', delay, duration: durations.reveal, reducedMotion });
}

export function fadeIn(reducedMotion = false, delay = 0) {
  return getFadeMotion({ delay, duration: durations.reveal, reducedMotion });
}

export function slideInLeft(reducedMotion = false, delay = 0) {
  return getRevealMotion({ direction: 'left', delay, duration: durations.reveal, reducedMotion });
}

export function slideInRight(reducedMotion = false, delay = 0) {
  return getRevealMotion({ direction: 'right', delay, duration: durations.reveal, reducedMotion });
}

export function heroTextMotion(reducedMotion = false, delay = 0) {
  return getRevealMotion({
    direction: 'up',
    delay,
    duration: durations.heroText,
    reducedMotion
  });
}

export function heroImageMotion(reducedMotion = false) {
  if (reducedMotion) {
    return getFadeMotion({ delay: 0.05, duration: durations.reduced, reducedMotion: true });
  }

  return {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 24, opacity: 0 },
    transition: { delay: 0.2, duration: durations.heroImage, ease: easings.easeOut }
  };
}

export function sectionRevealMotion(reducedMotion = false, delay = 0) {
  return getViewportRevealMotion({
    direction: 'up',
    delay,
    duration: durations.reveal,
    amount: viewportReveal.amount,
    once: viewportReveal.once,
    reducedMotion
  });
}

export function cardRevealMotion(reducedMotion = false, delay = 0, direction = 'up') {
  return getViewportRevealMotion({
    direction,
    delay,
    amount: viewportReveal.amount,
    duration: durations.card,
    reducedMotion
  });
}

export function staggerContainer(staggerDelay = 0.08, reducedMotion = false) {
  return {
    hidden: {},
    visible: {
      transition: reducedMotion ? { staggerChildren: 0 } : { staggerChildren: staggerDelay }
    }
  };
}

export function staggerItem(reducedMotion = false, duration = durations.reveal) {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: durations.reduced, ease: easings.easeOut } }
    };
  }

  return {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration, ease: easings.easeOut } }
  };
}

export function drawerOverlayMotion(reducedMotion = false) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: safeDuration(durations.drawer, reducedMotion), ease: easings.easeOut }
  };
}

export function drawerPanelMotion(reducedMotion = false) {
  if (reducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: durations.reduced, ease: easings.easeOut }
    };
  }

  return {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: durations.drawer, ease: easings.easeOut }
  };
}

export function menuItemMotion(reducedMotion = false) {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: durations.reduced, ease: easings.easeOut } }
    };
  }

  return {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: durations.modal, ease: easings.easeOut } }
  };
}

export function menuStaggerContainer(reducedMotion = false) {
  return staggerContainer(0.06, reducedMotion);
}

export function modalBackdropMotion(reducedMotion = false) {
  return drawerOverlayMotion(reducedMotion);
}

export function modalContentMotion(reducedMotion = false) {
  if (reducedMotion) {
    return getFadeMotion({ duration: durations.reduced, reducedMotion: true });
  }

  return {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
    transition: { duration: durations.modal, ease: easings.easeOut }
  };
}

export function accordionContentMotion(reducedMotion = false) {
  if (reducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: durations.reduced, ease: easings.easeInOut }
    };
  }

  return {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: durations.modal, ease: easings.easeInOut }
  };
}

export function appointmentStepMotion(reducedMotion = false, direction = 'forward') {
  if (reducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: durations.reduced, ease: easings.easeInOut }
    };
  }

  const enterX = direction === 'backward' ? -40 : 40;
  const exitX = direction === 'backward' ? 40 : -40;

  return {
    initial: { x: enterX, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: exitX, opacity: 0 },
    transition: { duration: durations.normal, ease: easings.easeInOut }
  };
}

export function ctaPulseMotion(reducedMotion = false) {
  if (reducedMotion) return {};

  return {
    animate: { scale: [1, 1.04, 1] },
    transition: { duration: durations.pulse, repeat: Infinity, ease: easings.easeInOut }
  };
}

export function floatingIconMotion({
  reducedMotion = false,
  distance = 12,
  duration = durations.float,
  delay = 0
} = {}) {
  if (reducedMotion) return {};

  return {
    animate: { y: [0, -Math.abs(distance), 0] },
    transition: { duration, delay, repeat: Infinity, ease: easings.easeInOut }
  };
}

export function hoverLiftMotion(reducedMotion = false, y = -6) {
  if (reducedMotion) return undefined;

  return {
    y,
    scale: 1.01,
    transition: { duration: durations.serviceHover, ease: easings.easeOut }
  };
}

export function mediaImageHoverMotion(reducedMotion = false) {
  if (reducedMotion) return undefined;

  return {
    scale: 1.06,
    transition: { duration: durations.normal, ease: easings.easeOut }
  };
}
