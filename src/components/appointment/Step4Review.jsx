import { ArrowLeft, Send } from 'lucide-react';
import { appointmentDisclaimer, appointmentTypes } from '../../data/appointmentData.js';
import { Button } from '../common/Button.jsx';
import { Disclaimer } from '../common/Disclaimer.jsx';

function displayValue(value) {
  return value || 'Not provided';
}

function appointmentLabel(id) {
  return appointmentTypes.find((type) => type.id === id)?.label || 'Not provided';
}

function ReviewGroup({ title, children, onEdit }) {
  return (
    <div className="rounded-card border border-border bg-bgAlt p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-heading text-lg font-semibold text-navy">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="min-h-11 rounded-btn px-3 text-sm font-semibold text-teal transition hover:bg-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          Edit
        </button>
      </div>
      <dl className="grid gap-4 sm:grid-cols-2">{children}</dl>
    </div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-text">{displayValue(value)}</dd>
    </div>
  );
}

export function Step4Review({ values, onEdit, onBack, onSubmit, isSubmitting = false }) {
  return (
    <section aria-labelledby="review-heading" className="space-y-6">
      <div>
        <h2 id="review-heading" className="font-heading text-2xl font-bold text-navy">
          Review appointment request
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Check the entered details before submitting the appointment request through WhatsApp.
        </p>
      </div>

      <div className="space-y-4">
        <ReviewGroup title="Appointment Type" onEdit={() => onEdit(1)}>
          <ReviewItem label="Type" value={appointmentLabel(values.appointmentType)} />
        </ReviewGroup>

        <ReviewGroup title="Patient Details" onEdit={() => onEdit(2)}>
          <ReviewItem label="Name" value={values.patientName} />
          <ReviewItem label="Age" value={values.age} />
          <ReviewItem label="Gender" value={values.gender} />
          <ReviewItem label="Mobile" value={values.mobile} />
          <ReviewItem label="City / Location" value={values.city} />
        </ReviewGroup>

        <ReviewGroup title="Preferred Schedule" onEdit={() => onEdit(3)}>
          <ReviewItem label="Preferred Date" value={values.preferredDate} />
          <ReviewItem label="Preferred Time" value={values.preferredTime || 'Not specified'} />
          <ReviewItem label="Symptoms / Message" value={values.message || 'Not provided'} />
        </ReviewGroup>
      </div>

      <Disclaimer type="appointment" title="Appointment confirmation note" text={appointmentDisclaimer} />

      <div className="rounded-card border border-blue/20 bg-blue/5 p-4 text-sm leading-6 text-text">
        The next action will prepare a WhatsApp appointment request message. This does not guarantee a confirmed appointment time.
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button type="button" variant="outline" onClick={onBack} icon={<ArrowLeft className="h-4 w-4" />}>
          Back
        </Button>
        <Button
          type="button"
          onClick={onSubmit}
          loading={isSubmitting}
          icon={<Send className="h-4 w-4" />}
          iconPosition="right"
        >
          Submit Appointment Request
        </Button>
      </div>
    </section>
  );
}
