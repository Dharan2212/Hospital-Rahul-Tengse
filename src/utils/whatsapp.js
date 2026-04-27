const indianMobileRegex = /^[6-9]\d{9}$/;

function isPlaceholderValue(value) {
  return typeof value === 'string' && value.includes('[CLIENT CONFIRMATION REQUIRED]');
}

export function normalizeIndianWhatsAppNumber(number) {
  if (!number || typeof number !== 'string' || isPlaceholderValue(number)) return null;

  const digits = number.replace(/\D/g, '');

  if (digits.length === 10 && indianMobileRegex.test(digits)) {
    return digits;
  }

  if (digits.length === 12 && digits.startsWith('91')) {
    const localNumber = digits.slice(2);
    return indianMobileRegex.test(localNumber) ? localNumber : null;
  }

  return null;
}

export function isValidIndianWhatsAppNumber(number) {
  return Boolean(normalizeIndianWhatsAppNumber(number));
}

function safeValue(value, fallback = 'Not provided') {
  if (value === null || value === undefined) return fallback;
  const normalized = String(value).trim();
  return normalized || fallback;
}

export function buildWhatsAppMessage(formData, dataSource = {}) {
  const doctorName = dataSource?.doctor?.name || 'Dr. Rahul Tengse';
  const hospitalName = dataSource?.hospital?.name || 'Shivneri Super Speciality & Surya ICU Hospital';

  return [
    'New Appointment Request',
    '',
    `Doctor: ${doctorName}`,
    `Hospital: ${hospitalName}`,
    '',
    `Name: ${safeValue(formData?.patientName)}`,
    `Age: ${safeValue(formData?.age)}`,
    `Gender: ${safeValue(formData?.gender)}`,
    `Mobile: ${safeValue(formData?.mobile)}`,
    `City: ${safeValue(formData?.city)}`,
    `Appointment Type: ${safeValue(formData?.appointmentType)}`,
    `Preferred Date: ${safeValue(formData?.preferredDate)}`,
    `Preferred Time: ${safeValue(formData?.preferredTime, 'Not specified')}`,
    `Symptoms / Message: ${safeValue(formData?.message, 'Not provided')}`
  ].join('\n');
}

export function buildWhatsAppUrl(number, message) {
  const normalizedNumber = normalizeIndianWhatsAppNumber(number);
  if (!normalizedNumber || !message) return null;
  return `https://wa.me/91${normalizedNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(number, message) {
  const url = buildWhatsAppUrl(number, message);

  if (!url) {
    return { success: false, status: 'missing-number', url: null };
  }

  if (typeof window === 'undefined' || typeof window.open !== 'function') {
    return { success: false, status: 'unavailable', url };
  }

  try {
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (!popup) {
      return { success: false, status: 'blocked', url };
    }
    popup.opener = null;
    return { success: true, status: 'opened', url };
  } catch {
    return { success: false, status: 'failed', url };
  }
}

export function getConfiguredWhatsAppNumber(dataSource = {}) {
  const envNumber = normalizeIndianWhatsAppNumber(import.meta?.env?.VITE_WHATSAPP_NUMBER || '');
  if (envNumber) return envNumber;

  const siteDataNumber = normalizeIndianWhatsAppNumber(dataSource?.contact?.whatsappNumber || '');
  if (siteDataNumber) return siteDataNumber;

  return null;
}
