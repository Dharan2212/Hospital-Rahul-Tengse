import { AlertCircle, CheckCircle, Phone, RotateCcw } from 'lucide-react';
import {
  appointmentDisclaimer,
  appointmentTypes,
  callNowFallbackLabel,
  submitAnotherRequestLabel,
  thankYouContent,
  whatsappMissingContent
} from '../../data/appointmentData.js';
import { Button } from '../common/Button.jsx';
import { Disclaimer } from '../common/Disclaimer.jsx';

function appointmentLabel(id) {
  return appointmentTypes.find((type) => type.id === id)?.label || 'Not provided';
}

function displayValue(value, fallback = 'Not provided') {
  return value || fallback;
}

function statusMessage(status) {
  if (status === 'opened') {
    return 'WhatsApp has been opened with your appointment request message.';
  }
  if (status === 'missing-number') {
    return whatsappMissingContent.body;
  }
  if (status === 'blocked' || status === 'failed' || status === 'unavailable') {
    return 'If WhatsApp did not open, please use the fallback options below.';
  }
  return 'Your appointment request details are ready for follow-up.';
}

function StatusIcon({ status }) {
  const isWarning = status === 'missing-number' || status === 'blocked' || status === 'failed' || status === 'unavailable';
  const Icon = isWarning ? AlertCircle : CheckCircle;
  return (
    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${isWarning ? 'bg-gold/10 text-gold' : 'bg-green/10 text-green'}`}>
      <Icon aria-hidden="true" className="h-8 w-8" />
    </div>
  );
}

export function Step5ThankYou({ submittedData, whatsappStatus, onSubmitAnother, callNowHref = '#', canCall = false }) {
  const status = whatsappStatus?.status || 'missing-number';

  return (
    <section aria-labelledby="thank-you-heading" className="space-y-6" aria-live="polite">
      <div className="text-center">
        <StatusIcon status={status} />
        <h2 id="thank-you-heading" className="mt-5 font-heading text-2xl font-bold text-navy">
          {thankYouContent.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted">
          {thankYouContent.body}
        </p>
      </div>

      <div className="rounded-card border border-border bg-bgAlt p-4 text-sm leading-6 text-text">
        {statusMessage(status)}
      </div>

      {submittedData && (
        <div className="rounded-card border border-border bg-white p-5 shadow-card">
          <h3 className="font-heading text-lg font-semibold text-navy">Submitted request summary</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Name</dt>
              <dd className="mt-1 text-sm font-semibold text-text">{displayValue(submittedData.patientName)}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Mobile</dt>
              <dd className="mt-1 text-sm font-semibold text-text">{displayValue(submittedData.mobile)}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Appointment Type</dt>
              <dd className="mt-1 text-sm font-semibold text-text">{appointmentLabel(submittedData.appointmentType)}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Preferred Date</dt>
              <dd className="mt-1 text-sm font-semibold text-text">{displayValue(submittedData.preferredDate)}</dd>
            </div>
          </dl>
        </div>
      )}

      <Disclaimer type="appointment" title="Appointment confirmation note" text={appointmentDisclaimer} compact />

      {!canCall && (
        <p className="rounded-card border border-gold/20 bg-gold/5 p-4 text-sm leading-6 text-text">
          Phone number pending client confirmation.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          href={callNowHref}
          variant="outline"
          disabled={!canCall}
          icon={<Phone className="h-4 w-4" />}
          ariaLabel={canCall ? 'Call hospital' : 'Phone number pending client confirmation'}
        >
          {callNowFallbackLabel}
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={onSubmitAnother}
          icon={<RotateCcw className="h-4 w-4" />}
        >
          {submitAnotherRequestLabel}
        </Button>
      </div>
    </section>
  );
}
