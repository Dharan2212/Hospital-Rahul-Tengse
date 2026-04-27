import { AlertTriangle, FileText, HeartPulse, Info, Newspaper, ShieldCheck } from 'lucide-react';

export const disclaimerText = {
  general:
    'Website content is for general information and patient awareness only. It should not be considered a replacement for professional medical consultation, diagnosis, or treatment. Patients should consult the doctor or hospital team for personalized advice.',
  emergency:
    'For medical emergencies, patients should contact the hospital directly or visit the nearest emergency facility immediately.',
  appointment:
    "Submitting an appointment request does not guarantee a confirmed appointment time. The hospital or doctor's team will contact the patient for confirmation.",
  transplant:
    'Kidney transplant decisions depend on detailed medical evaluation, patient condition, donor suitability, hospital protocol, and specialist consultation. This page provides general guidance only.',
  media:
    'Media and newspaper content is shown only as public coverage or awareness material. Patient-identifiable details have been removed or obscured. Media images are used only after client approval.',
  privacy:
    'Patient-identifiable information must not be published. Images and media must be reviewed, redacted where required, and approved before public website use.',
  guidance:
    'This content is intended for patient awareness and guidance only. Please consult the doctor or hospital team for personalized medical advice.'
};

const typeConfig = {
  general: { icon: Info, title: 'Medical Information Notice', classes: 'border-teal/20 bg-sky text-navy' },
  appointment: { icon: FileText, title: 'Appointment Notice', classes: 'border-blue/20 bg-blue/5 text-navy' },
  emergency: { icon: AlertTriangle, title: 'Emergency Notice', classes: 'border-red/25 bg-red/5 text-navy' },
  transplant: { icon: HeartPulse, title: 'Transplant Guidance Notice', classes: 'border-green/25 bg-green/5 text-navy' },
  media: { icon: Newspaper, title: 'Media Usage Notice', classes: 'border-purple/25 bg-purple/5 text-navy' },
  privacy: { icon: ShieldCheck, title: 'Privacy Notice', classes: 'border-gold/25 bg-gold/5 text-navy' },
  guidance: { icon: Info, title: 'Guidance Notice', classes: 'border-teal/20 bg-sky text-navy' }
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Disclaimer({ type = 'general', title, text, className = '', compact = false }) {
  const config = typeConfig[type] || typeConfig.general;
  const Icon = config.icon;

  return (
    <aside
      className={cx(
        'rounded-card border',
        compact ? 'p-4' : 'p-5 md:p-6',
        config.classes,
        className
      )}
      aria-label={title || config.title}
    >
      <div className="flex gap-3">
        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-teal shadow-card">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <div>
          <p className="font-heading text-base font-semibold">{title || config.title}</p>
          <p className={cx('mt-1 leading-6 text-muted', compact ? 'text-sm' : 'text-sm md:text-base')}>
            {text || disclaimerText[type] || disclaimerText.general}
          </p>
        </div>
      </div>
    </aside>
  );
}
