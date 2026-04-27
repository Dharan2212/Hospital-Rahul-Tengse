import { Activity, Building2, FileText, HeartPulse, Image, ShieldCheck, Stethoscope } from 'lucide-react';

const iconMap = {
  activity: Activity,
  building: Building2,
  file: FileText,
  heart: HeartPulse,
  image: Image,
  shield: ShieldCheck,
  stethoscope: Stethoscope
};

const toneClasses = {
  teal: 'from-teal/15 via-sky to-white text-teal border-teal/20',
  green: 'from-green/15 via-sky to-white text-green border-green/20',
  blue: 'from-blue/15 via-sky to-white text-blue border-blue/20',
  navy: 'from-navy/15 via-sky to-white text-navy border-navy/20',
  purple: 'from-purple/15 via-sky to-white text-purple border-purple/20',
  gold: 'from-gold/15 via-sky to-white text-gold border-gold/20'
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function PlaceholderVisual({
  title,
  description,
  icon = 'stethoscope',
  tone = 'teal',
  className = ''
}) {
  const Icon = iconMap[icon] || Stethoscope;

  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-lg border bg-gradient-to-br p-6 shadow-card',
        toneClasses[tone] || toneClasses.teal,
        className
      )}
      role="img"
      aria-label={title}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/45" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-white/35" aria-hidden="true" />
      <div className="relative">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/85 shadow-card">
          <Icon aria-hidden="true" className="h-7 w-7" />
        </span>
        <p className="mt-5 font-heading text-xl font-bold text-navy">{title}</p>
        {description && <p className="mt-3 text-sm leading-6 text-muted">{description}</p>}
      </div>
    </div>
  );
}
