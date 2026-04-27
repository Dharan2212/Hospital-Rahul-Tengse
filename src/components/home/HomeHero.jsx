import { motion } from 'framer-motion';
import { Activity, Calendar, HeartPulse, Hospital, Phone, ShieldCheck, Stethoscope } from 'lucide-react';
import { homeHeroData } from '../../data/homeData.js';
import { imageManifest } from '../../data/imageManifest.js';
import { siteData } from '../../data/siteData.js';
import { Button, Container, FloatingMotion } from '../common/index.js';
import { getTelHref, isConfirmedValue } from '../../utils/contactLinks.js';
import { heroImageMotion, heroTextMotion } from '../../utils/motion.js';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';

const decorativeIcons = [
  { Icon: Stethoscope, className: 'left-6 top-10 text-teal', delay: 0 },
  { Icon: Activity, className: 'right-8 top-14 text-green', delay: 0.35 },
  { Icon: ShieldCheck, className: 'bottom-14 left-10 text-blue', delay: 0.7 },
  { Icon: HeartPulse, className: 'bottom-8 right-12 text-purple', delay: 1.05 }
];

function isApprovedImage(entry) {
  return Boolean(entry?.frontendUseAllowed && entry?.src && ['approved', 'optimized-ready'].includes(entry?.status));
}

function DoctorVisualPlaceholder() {
  return (
    <div
      className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-teal/15 bg-white p-5 shadow-hover"
      aria-label="Kidney specialist consultation visual placeholder"
      role="img"
    >
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-teal/15 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-green/15 blur-2xl" aria-hidden="true" />

      <div className="relative rounded-[1.5rem] bg-gradient-to-br from-sky via-white to-bgAlt p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white shadow-card">
            <Stethoscope size={28} aria-hidden="true" />
          </span>
          <span className="rounded-full border border-teal/20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-teal">
            Placeholder
          </span>
        </div>

        <div className="space-y-3">
          <p className="font-heading text-2xl font-bold text-navy">Kidney Specialist Consultation</p>
          <p className="text-sm leading-6 text-muted">
            Approved doctor photo is pending. This visual is a temporary medical-themed placeholder.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-border bg-white p-4 shadow-card">
            <Activity className="mb-3 text-green" size={22} aria-hidden="true" />
            <p className="text-sm font-semibold text-navy">Dialysis Guidance</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-4 shadow-card">
            <Hospital className="mb-3 text-blue" size={22} aria-hidden="true" />
            <p className="text-sm font-semibold text-navy">Hospital Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  const shouldReduceMotion = useReducedMotionPreference();
  const heroImage = imageManifest?.doctor?.hero;
  const hasApprovedHeroImage = isApprovedImage(heroImage);
  const phoneConfirmed = isConfirmedValue(siteData.contact.primaryPhone);
  const callHref = getTelHref(siteData.contact.primaryPhone);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky via-white to-white py-16 sm:py-20 lg:py-24">
      <div className="hero-blob hero-blob-one" aria-hidden="true" />
      <div className="hero-blob hero-blob-two" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div className="max-w-3xl" {...heroTextMotion(shouldReduceMotion)}>
            <p className="mb-5 inline-flex rounded-full border border-teal/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal shadow-card backdrop-blur">
              {homeHeroData.eyebrow}
            </p>

            <h1 className="font-heading text-[clamp(2.35rem,6vw,3.6rem)] font-bold leading-tight tracking-tight text-navy">
              {homeHeroData.title}
            </h1>

            <p className="mt-4 text-xl font-semibold text-teal md:text-2xl">{homeHeroData.subtitle}</p>
            <p className="mt-3 text-base font-medium text-muted">{homeHeroData.qualification}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-text md:text-lg">
              {homeHeroData.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={homeHeroData.primaryCTA.href} size="lg" icon={<Calendar size={18} />}>
                {homeHeroData.primaryCTA.label}
              </Button>
              <Button href={homeHeroData.secondaryCTA.href} variant="outline" size="lg">
                {homeHeroData.secondaryCTA.label}
              </Button>
              <Button
                href={callHref}
                variant="ghost"
                size="lg"
                icon={<Phone size={18} />}
                disabled={!phoneConfirmed}
                ariaLabel={
                  phoneConfirmed
                    ? 'Call hospital for appointment support'
                    : 'Phone number pending client confirmation'
                }
              >
                {homeHeroData.tertiaryCTA.label}
              </Button>
            </div>

            {!phoneConfirmed && (
              <p className="mt-3 text-sm leading-6 text-muted">
                Phone number is pending client confirmation. Use the appointment page for request flow later.
              </p>
            )}

            <div className="mt-8 inline-flex max-w-xl items-center gap-3 rounded-2xl border border-teal/15 bg-white/85 px-4 py-3 shadow-card backdrop-blur">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky text-teal">
                <Hospital size={22} aria-hidden="true" />
              </span>
              <span className="text-sm leading-6 text-muted">
                <span className="block font-semibold text-navy">{homeHeroData.hospitalBadge.label}</span>
                {homeHeroData.hospitalBadge.name}
              </span>
            </div>
          </motion.div>

          <motion.div className="relative min-h-[420px]" {...heroImageMotion(shouldReduceMotion)}>
            {decorativeIcons.map(({ Icon, className, delay }) => (
              <FloatingMotion
                key={className}
                className={`absolute z-20 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/90 shadow-card backdrop-blur sm:flex ${className}`}
                delay={delay}
                disabled={shouldReduceMotion}
              >
                <Icon size={22} aria-hidden="true" />
              </FloatingMotion>
            ))}

            {hasApprovedHeroImage ? (
              <img
                src={heroImage.src}
                srcSet={heroImage.srcSet?.join(', ') || undefined}
                alt={heroImage.alt}
                className="mx-auto w-full max-w-[420px] rounded-[2rem] border border-white object-cover shadow-hover"
              />
            ) : (
              <DoctorVisualPlaceholder />
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
