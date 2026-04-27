import { Activity, AlertCircle, CheckCircle, Droplet, FileText, HeartPulse, Hospital, Info, ShieldCheck, Stethoscope } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

const iconMap = {
  Activity,
  AlertCircle,
  CheckCircle,
  Droplet,
  FileText,
  HeartPulse,
  Hospital,
  Info,
  ShieldCheck,
  Stethoscope
};

const toneClasses = {
  teal: 'bg-sky text-teal border-teal/20',
  green: 'bg-green/10 text-green border-green/20',
  blue: 'bg-blue/10 text-blue border-blue/20',
  navy: 'bg-navy/10 text-navy border-navy/20',
  red: 'bg-red/10 text-red border-red/20',
  purple: 'bg-purple/10 text-purple border-purple/20',
  gold: 'bg-gold/10 text-gold border-gold/20'
};

export function InfoCard({ icon = 'Info', title, description, tone = 'teal', children, className = '' }) {
  const Icon = iconMap[icon] || Info;

  return (
    <AnimatedCard as="article" className={`p-6 ${className}`}>
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${toneClasses[tone] || toneClasses.teal}`}>
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-bold text-navy">{title}</h3>
      {description && <p className="mt-3 text-sm leading-6 text-muted">{description}</p>}
      {children && <div className="mt-4 text-sm leading-6 text-muted">{children}</div>}
    </AnimatedCard>
  );
}
