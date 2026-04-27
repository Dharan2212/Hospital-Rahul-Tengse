import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { appointmentSteps, defaultAppointmentValues } from '../../data/appointmentData.js';
import { siteData } from '../../data/siteData.js';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';
import { getTelHref, isConfirmedValue } from '../../utils/contactLinks.js';
import { appointmentStepMotion } from '../../utils/motion.js';
import { buildWhatsAppMessage, getConfiguredWhatsAppNumber, openWhatsApp } from '../../utils/whatsapp.js';
import { appointmentSchema, validateStepData } from '../../utils/validation.js';
import { Step1Type } from './Step1Type.jsx';
import { Step2Details } from './Step2Details.jsx';
import { Step3Schedule } from './Step3Schedule.jsx';
import { Step4Review } from './Step4Review.jsx';
import { Step5ThankYou } from './Step5ThankYou.jsx';
import { StepIndicator } from './StepIndicator.jsx';

const queryTypeMap = {
  dialysis: 'dialysis',
  transplant: 'transplant',
  'report-review': 'report-review',
  'follow-up': 'follow-up',
  'new-consultation': 'new-consultation',
  urgent: 'urgent'
};

const stepFields = {
  1: ['appointmentType'],
  2: ['patientName', 'age', 'gender', 'mobile', 'city'],
  3: ['preferredDate', 'preferredTime', 'message']
};

function getStepData(values, step) {
  const fields = step === 4 ? Object.keys(values) : stepFields[step] || [];
  return fields.reduce((acc, field) => {
    acc[field] = values[field];
    return acc;
  }, {});
}

function normalizeSubmittedData(values) {
  return {
    ...values,
    age: values.age ? String(values.age) : '',
    preferredTime: values.preferredTime || '',
    message: values.message || ''
  };
}

export function AppointmentForm() {
  const shouldReduceMotion = useReducedMotionPreference();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [direction, setDirection] = useState('forward');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [whatsappStatus, setWhatsappStatus] = useState(null);

  const form = useForm({
    defaultValues: defaultAppointmentValues,
    mode: 'onTouched'
  });

  const {
    register,
    setValue,
    getValues,
    watch,
    reset,
    setError,
    clearErrors,
    formState: { errors }
  } = form;

  const selectedType = watch('appointmentType');
  const selectedGender = watch('gender');
  const messageValue = watch('message');

  useEffect(() => {
    const typeParam = searchParams.get('type');
    const mappedType = queryTypeMap[typeParam];
    if (mappedType) {
      setValue('appointmentType', mappedType, { shouldValidate: true, shouldDirty: true });
    }
  }, [searchParams, setValue]);

  useEffect(() => {
    if (currentStep !== 5) return undefined;

    const resetTimer = window.setTimeout(() => {
      handleSubmitAnother();
    }, 60000);

    return () => window.clearTimeout(resetTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  const values = watch();

  const maxClickableStep = useMemo(() => {
    if (completedSteps.length === 0) return currentStep;
    return Math.max(currentStep, ...completedSteps);
  }, [completedSteps, currentStep]);

  function markCompleted(step) {
    setCompletedSteps((previous) => (previous.includes(step) ? previous : [...previous, step].sort()));
  }

  function applyValidationErrors(result) {
    clearErrors();
    if (result.success) return;

    result.error.issues.forEach((issue) => {
      const field = issue.path[0];
      if (field) {
        setError(field, { type: 'manual', message: issue.message });
      }
    });
  }

  function validateCurrentStep() {
    const allValues = getValues();
    const data = currentStep === 4 ? allValues : getStepData(allValues, currentStep);
    const result = currentStep === 4 ? appointmentSchema.safeParse(allValues) : validateStepData(currentStep, data);
    applyValidationErrors(result);
    return result.success;
  }

  function goToStep(nextStep, nextDirection = 'forward') {
    setDirection(nextDirection);
    setCurrentStep(nextStep);
  }

  function handleNext() {
    if (!validateCurrentStep()) return;
    markCompleted(currentStep);
    goToStep(Math.min(currentStep + 1, appointmentSteps.length), 'forward');
  }

  function handleBack() {
    goToStep(Math.max(currentStep - 1, 1), 'backward');
  }

  function handleStepClick(stepId) {
    if (stepId > maxClickableStep || stepId > currentStep || stepId === 5) return;
    goToStep(stepId, stepId > currentStep ? 'forward' : 'backward');
  }

  function handleSelectType(typeId) {
    clearErrors('appointmentType');
    setValue('appointmentType', typeId, { shouldValidate: true, shouldDirty: true });
  }

  function handleSubmitAppointment() {
    const allValues = normalizeSubmittedData(getValues());
    const result = appointmentSchema.safeParse(allValues);
    applyValidationErrors(result);
    if (!result.success) return;

    setIsSubmitting(true);

    const message = buildWhatsAppMessage(result.data, siteData);
    const whatsappNumber = getConfiguredWhatsAppNumber(siteData);
    const redirectResult = whatsappNumber
      ? openWhatsApp(whatsappNumber, message)
      : { success: false, status: 'missing-number', url: null };

    setSubmittedData(result.data);
    setWhatsappStatus(redirectResult);
    setCompletedSteps([1, 2, 3, 4]);
    setIsSubmitting(false);
    goToStep(5, 'forward');
  }

  function handleSubmitAnother() {
    reset(defaultAppointmentValues);
    setSubmittedData(null);
    setWhatsappStatus(null);
    setCompletedSteps([]);
    setIsSubmitting(false);
    goToStep(1, 'backward');
  }

  const stepMotion = appointmentStepMotion(shouldReduceMotion, direction);
  const phoneConfirmed = isConfirmedValue(siteData.contact.primaryPhone);
  const callNowHref = getTelHref(siteData.contact.primaryPhone);

  return (
    <div className="mx-auto max-w-4xl rounded-[28px] border border-border bg-white p-4 shadow-card sm:p-6 lg:p-8">
      <StepIndicator
        steps={appointmentSteps}
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepClick}
        className="mb-8"
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={currentStep} {...stepMotion}>
          {currentStep === 1 && (
            <Step1Type
              selectedType={selectedType}
              onSelect={handleSelectType}
              error={errors.appointmentType}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <Step2Details
              register={register}
              errors={errors}
              selectedGender={selectedGender}
              setValue={setValue}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}

          {currentStep === 3 && (
            <Step3Schedule
              register={register}
              errors={errors}
              messageValue={messageValue}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}

          {currentStep === 4 && (
            <Step4Review
              values={values}
              onEdit={(step) => goToStep(step, 'backward')}
              onBack={handleBack}
              onSubmit={handleSubmitAppointment}
              isSubmitting={isSubmitting}
            />
          )}

          {currentStep === 5 && (
            <Step5ThankYou
              submittedData={submittedData}
              whatsappStatus={whatsappStatus}
              onSubmitAnother={handleSubmitAnother}
              callNowHref={callNowHref}
              canCall={phoneConfirmed}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
