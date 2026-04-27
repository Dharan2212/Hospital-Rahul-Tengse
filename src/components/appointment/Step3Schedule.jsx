import { ArrowLeft, ArrowRight } from 'lucide-react';
import { preferredTimeOptions } from '../../data/appointmentData.js';
import { getDateInputBounds } from '../../utils/validation.js';
import { Button } from '../common/Button.jsx';

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm font-medium text-red">
      {message}
    </p>
  );
}

export function Step3Schedule({ register, errors, messageValue = '', onBack, onNext }) {
  const dateBounds = getDateInputBounds();
  const messageLength = messageValue?.length || 0;

  return (
    <section aria-labelledby="schedule-heading" className="space-y-6">
      <div>
        <h2 id="schedule-heading" className="font-heading text-2xl font-bold text-navy">
          Preferred schedule
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Share a preferred date and time. The final appointment timing must be confirmed by the hospital team.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className="text-sm font-semibold text-navy">
            Preferred Date
          </label>
          <input
            id="preferredDate"
            type="date"
            min={dateBounds.min}
            max={dateBounds.max}
            aria-describedby={errors.preferredDate ? 'preferredDate-error' : 'preferredDate-help'}
            className="mt-2 min-h-12 w-full rounded-btn border border-border px-4 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            {...register('preferredDate')}
          />
          <p id="preferredDate-help" className="mt-2 text-xs text-muted">
            Select today or a future date within 90 days.
          </p>
          <FieldError id="preferredDate-error" message={errors.preferredDate?.message} />
        </div>

        <div>
          <label htmlFor="preferredTime" className="text-sm font-semibold text-navy">
            Preferred Time
          </label>
          <select
            id="preferredTime"
            aria-describedby={errors.preferredTime ? 'preferredTime-error' : 'preferredTime-help'}
            className="mt-2 min-h-12 w-full rounded-btn border border-border bg-white px-4 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            {...register('preferredTime')}
          >
            {preferredTimeOptions.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p id="preferredTime-help" className="mt-2 text-xs text-muted">
            Optional, but helpful for scheduling.
          </p>
          <FieldError id="preferredTime-error" message={errors.preferredTime?.message} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-navy">
            Symptoms / Message
          </label>
          <textarea
            id="message"
            rows="5"
            maxLength="500"
            aria-describedby={errors.message ? 'message-error' : 'message-counter'}
            className="mt-2 w-full rounded-btn border border-border px-4 py-3 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            {...register('message')}
          />
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-muted">Optional. Please avoid sharing sensitive documents here.</p>
            <p id="message-counter" className="text-xs font-medium text-muted">
              {messageLength}/500 characters
            </p>
          </div>
          <FieldError id="message-error" message={errors.message?.message} />
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button type="button" variant="outline" onClick={onBack} icon={<ArrowLeft className="h-4 w-4" />}>
          Back
        </Button>
        <Button type="button" onClick={onNext} icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
          Next
        </Button>
      </div>
    </section>
  );
}
