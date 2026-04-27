import { z } from 'zod';

const nameRegex = /^[A-Za-z\s]+$/;
const indianMobileRegex = /^[6-9]\d{9}$/;

function toDateOnly(value) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function todayDateOnly() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function maxDateOnly(daysAhead = 90) {
  const max = todayDateOnly();
  max.setDate(max.getDate() + daysAhead);
  return max;
}

export const stepOneSchema = z.object({
  appointmentType: z.string().min(1, 'Please select an appointment type.')
});

export const stepTwoSchema = z.object({
  patientName: z
    .string()
    .trim()
    .min(2, 'Please enter a valid patient name.')
    .max(80, 'Please enter a valid patient name.')
    .regex(nameRegex, 'Please enter a valid patient name.'),
  age: z
    .coerce.number({ invalid_type_error: 'Please enter a valid age between 1 and 120.' })
    .int('Please enter a valid age between 1 and 120.')
    .min(1, 'Please enter a valid age between 1 and 120.')
    .max(120, 'Please enter a valid age between 1 and 120.'),
  gender: z.string().min(1, 'Please select a gender option.'),
  mobile: z
    .string()
    .trim()
    .regex(indianMobileRegex, 'Please enter a valid 10-digit Indian mobile number.'),
  city: z
    .string()
    .trim()
    .min(2, 'Please enter your city or location.')
    .max(60, 'Please enter your city or location.')
});

export const stepThreeSchema = z.object({
  preferredDate: z
    .string()
    .min(1, 'Please select a valid future date.')
    .refine((value) => {
      const date = toDateOnly(value);
      return date && date >= todayDateOnly() && date <= maxDateOnly(90);
    }, 'Please select a valid future date.'),
  preferredTime: z
    .string()
    .optional()
    .refine(
      (value) => !value || ['Morning', 'Afternoon', 'Evening'].includes(value),
      'Please select a preferred time slot.'
    ),
  message: z.string().max(500, 'Message must be under 500 characters.').optional()
});

export const appointmentSchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema);

export function validateStepData(step, data) {
  const schemas = {
    1: stepOneSchema,
    2: stepTwoSchema,
    3: stepThreeSchema,
    4: appointmentSchema
  };

  const schema = schemas[step] || appointmentSchema;
  return schema.safeParse(data);
}

export function getDateInputBounds() {
  const format = (date) => date.toISOString().split('T')[0];
  return {
    min: format(todayDateOnly()),
    max: format(maxDateOnly(90))
  };
}
