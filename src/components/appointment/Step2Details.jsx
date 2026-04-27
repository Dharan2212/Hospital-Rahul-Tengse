import { ArrowLeft, ArrowRight } from 'lucide-react';
import { genderOptions } from '../../data/appointmentData.js';
import { Button } from '../common/Button.jsx';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm font-medium text-red">
      {message}
    </p>
  );
}

export function Step2Details({ register, errors, selectedGender, setValue, onBack, onNext }) {
  return (
    <section aria-labelledby="patient-details-heading" className="space-y-6">
      <div>
        <h2 id="patient-details-heading" className="font-heading text-2xl font-bold text-navy">
          Patient details
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Enter basic details so the hospital team can identify the appointment request later.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="patientName" className="text-sm font-semibold text-navy">
            Patient Name
          </label>
          <input
            id="patientName"
            type="text"
            autoComplete="name"
            aria-describedby={errors.patientName ? 'patientName-error' : undefined}
            className="mt-2 min-h-12 w-full rounded-btn border border-border px-4 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            {...register('patientName')}
          />
          <FieldError id="patientName-error" message={errors.patientName?.message} />
        </div>

        <div>
          <label htmlFor="age" className="text-sm font-semibold text-navy">
            Age
          </label>
          <input
            id="age"
            type="number"
            min="1"
            max="120"
            inputMode="numeric"
            aria-describedby={errors.age ? 'age-error' : undefined}
            className="mt-2 min-h-12 w-full rounded-btn border border-border px-4 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            {...register('age')}
          />
          <FieldError id="age-error" message={errors.age?.message} />
        </div>

        <fieldset className="md:col-span-2" aria-describedby={errors.gender ? 'gender-error' : undefined}>
          <legend className="text-sm font-semibold text-navy">Gender</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {genderOptions.map((option) => {
              const checked = selectedGender === option;
              return (
                <label
                  key={option}
                  className={cx(
                    'flex min-h-11 cursor-pointer items-center gap-3 rounded-btn border px-4 text-sm font-medium transition',
                    checked ? 'border-teal bg-sky text-navy' : 'border-border bg-white text-text hover:border-teal/60'
                  )}
                >
                  <input
                    type="radio"
                    value={option}
                    checked={checked}
                    onChange={() => setValue('gender', option, { shouldValidate: true, shouldDirty: true })}
                    className="h-4 w-4 accent-teal"
                  />
                  {option}
                </label>
              );
            })}
          </div>
          <FieldError id="gender-error" message={errors.gender?.message} />
        </fieldset>

        <div>
          <label htmlFor="mobile" className="text-sm font-semibold text-navy">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            maxLength="10"
            aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            className="mt-2 min-h-12 w-full rounded-btn border border-border px-4 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            {...register('mobile')}
          />
          <FieldError id="mobile-error" message={errors.mobile?.message} />
        </div>

        <div>
          <label htmlFor="city" className="text-sm font-semibold text-navy">
            City / Location
          </label>
          <input
            id="city"
            type="text"
            autoComplete="address-level2"
            aria-describedby={errors.city ? 'city-error' : undefined}
            className="mt-2 min-h-12 w-full rounded-btn border border-border px-4 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            {...register('city')}
          />
          <FieldError id="city-error" message={errors.city?.message} />
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
