import { Check } from 'lucide-react';
import { appointmentSteps } from '../../data/appointmentData.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function StepIndicator({
  steps = appointmentSteps,
  currentStep,
  completedSteps = [],
  onStepClick,
  className = ''
}) {
  const canClickStep = (stepId) => Boolean(onStepClick) && (completedSteps.includes(stepId) || stepId <= currentStep);

  return (
    <nav aria-label="Appointment progress" className={cx('w-full', className)}>
      <ol className="grid grid-cols-5 items-start gap-1 sm:gap-2">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = completedSteps.includes(step.id);
          const clickable = canClickStep(step.id);

          const circleClasses = cx(
            'relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold transition sm:h-11 sm:w-11',
            isCompleted && 'border-green bg-green text-white',
            isActive && !isCompleted && 'border-teal bg-teal text-white',
            !isActive && !isCompleted && 'border-border bg-white text-muted',
            clickable && 'cursor-pointer hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'
          );

          const content = isCompleted ? <Check aria-hidden="true" className="h-5 w-5" /> : step.id;

          return (
            <li key={step.key} className="relative flex flex-col items-center text-center">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className={cx(
                    'absolute right-1/2 top-5 h-0.5 w-full -translate-y-1/2 sm:top-5',
                    completedSteps.includes(step.id - 1) ? 'bg-green' : 'bg-border'
                  )}
                />
              )}
              {clickable ? (
                <button
                  type="button"
                  className={circleClasses}
                  onClick={() => onStepClick(step.id)}
                  aria-current={isActive ? 'step' : undefined}
                  aria-label={`${step.label} step${isCompleted ? ', completed' : isActive ? ', current' : ''}`}
                >
                  {content}
                </button>
              ) : (
                <span
                  className={circleClasses}
                  aria-current={isActive ? 'step' : undefined}
                  aria-label={`${step.label} step${isCompleted ? ', completed' : isActive ? ', current' : ', pending'}`}
                  role="img"
                >
                  {content}
                </span>
              )}
              <span className={cx('mt-2 text-[11px] font-semibold sm:text-xs', isActive ? 'text-teal' : 'text-muted')}>
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
