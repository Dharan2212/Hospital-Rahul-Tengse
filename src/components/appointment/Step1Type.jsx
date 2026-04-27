import { AlertTriangle, ArrowRight } from 'lucide-react';
import { appointmentTypes, emergencyDisclaimer } from '../../data/appointmentData.js';
import { Button } from '../common/Button.jsx';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Step1Type({ selectedType, onSelect, error, onNext }) {
  return (
    <section aria-labelledby="appointment-type-heading" className="space-y-6">
      <div>
        <h2 id="appointment-type-heading" className="font-heading text-2xl font-bold text-navy">
          Choose appointment type
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Select the option that best matches the patient’s visit requirement.
        </p>
      </div>

      <fieldset aria-describedby={error ? 'appointment-type-error' : undefined}>
        <legend className="sr-only">Appointment type</legend>
        <div className="grid gap-3 md:grid-cols-2">
          {appointmentTypes.map((type) => {
            const checked = selectedType === type.id;
            return (
              <label
                key={type.id}
                className={cx(
                  'cursor-pointer rounded-card border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card',
                  checked ? 'border-teal ring-2 ring-teal/20' : 'border-border hover:border-teal/50'
                )}
              >
                <input
                  type="radio"
                  name="appointmentType"
                  value={type.id}
                  checked={checked}
                  onChange={() => onSelect(type.id)}
                  className="sr-only"
                />
                <span className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className={cx(
                      'mt-1 h-4 w-4 rounded-full border-2',
                      checked ? 'border-teal bg-teal shadow-[inset_0_0_0_3px_white]' : 'border-border bg-white'
                    )}
                  />
                  <span>
                    <span className="block font-semibold text-navy">{type.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted">{type.description}</span>
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {error && (
        <p id="appointment-type-error" role="alert" className="text-sm font-medium text-red">
          {error.message}
        </p>
      )}

      {selectedType === 'urgent' && (
        <div className="rounded-card border border-red/30 bg-red/5 p-4 text-sm leading-6 text-text">
          <div className="flex gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red" />
            <p>{emergencyDisclaimer}</p>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <Button type="button" onClick={onNext} icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
          Next
        </Button>
      </div>
    </section>
  );
}
