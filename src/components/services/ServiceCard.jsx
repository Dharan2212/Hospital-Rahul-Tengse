import {
  Activity,
  Droplet,
  FileText,
  HeartPulse,
  Hospital,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { AnimatedCard, Button } from '../common/index.js';

const iconMap = {
  Activity,
  Droplet,
  FileText,
  HeartPulse,
  Hospital,
  ShieldCheck,
  Stethoscope
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function ServiceCard({
  icon = 'Stethoscope',
  title,
  description,
  cta = 'Learn More',
  href = '/services',
  hasDisclaimer = false,
  className = ''
}) {
  const Icon = iconMap[icon] || Stethoscope;

  return (
    <AnimatedCard as="article" className={cx('flex h-full flex-col p-6', className)}>
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal/20 bg-sky text-teal">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-start gap-2">
          <h3 className="font-heading text-lg font-bold leading-snug text-navy">{title}</h3>
          {hasDisclaimer && (
            <span className="rounded-full border border-blue/20 bg-blue/5 px-2.5 py-1 text-xs font-bold text-blue">
              Guidance Only
            </span>
          )}
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{description}</p>
        <div className="mt-5">
          <Button href={href} variant="outline" size="sm">
            {cta}
          </Button>
        </div>
      </div>
    </AnimatedCard>
  );
}
