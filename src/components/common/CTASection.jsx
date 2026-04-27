import { motion } from 'framer-motion';
import { Button } from './Button';
import { Container } from './Container';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { ctaPulseMotion } from '../../utils/motion.js';

const backgroundClasses = {
  teal: 'bg-teal text-white',
  navy: 'bg-navy text-white',
  gradient: 'bg-gradient-to-r from-teal to-navy text-white',
  light: 'bg-sky text-navy'
};

const alignClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center'
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function CTASection({
  eyebrow,
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
  align = 'center',
  disclaimer,
  className = '',
  pulsePrimary = false
}) {
  const shouldReduceMotion = useReducedMotionPreference();
  const isLight = background === 'light';
  const primaryMotion = pulsePrimary ? ctaPulseMotion(shouldReduceMotion) : {};

  return (
    <section className={cx('py-12 md:py-16', backgroundClasses[background] || backgroundClasses.gradient, className)}>
      <Container>
        <div className={cx('flex flex-col gap-5', alignClasses[align] || alignClasses.center)}>
          {eyebrow && (
            <p className={cx('text-xs font-bold uppercase tracking-[0.2em]', isLight ? 'text-teal' : 'text-sky')}>
              {eyebrow}
            </p>
          )}
          {heading && <h2 className="max-w-3xl font-heading text-3xl font-bold md:text-4xl">{heading}</h2>}
          {description && (
            <p className={cx('max-w-2xl text-base leading-7 md:text-lg', isLight ? 'text-muted' : 'text-white/85')}>
              {description}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {primaryCTA && (
                <motion.div {...primaryMotion}>
                  <Button
                    href={primaryCTA.href}
                    variant={primaryCTA.variant || (isLight ? 'primary' : 'secondary')}
                    size="lg"
                    external={primaryCTA.external}
                    disabled={primaryCTA.disabled}
                    ariaLabel={primaryCTA.ariaLabel}
                  >
                    {primaryCTA.label}
                  </Button>
                </motion.div>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant={secondaryCTA.variant || (isLight ? 'outline' : 'subtle')}
                  size="lg"
                  external={secondaryCTA.external}
                  disabled={secondaryCTA.disabled}
                  ariaLabel={secondaryCTA.ariaLabel}
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
          {disclaimer && (
            <p className={cx('max-w-2xl text-sm leading-6', isLight ? 'text-muted' : 'text-white/75')}>
              {disclaimer}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
