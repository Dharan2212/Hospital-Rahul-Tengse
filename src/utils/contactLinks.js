/**
 * contactLinks.js — Safe contact link utilities
 *
 * isConfirmedValue() guards against rendering broken or placeholder links.
 * All contact helpers return '#' when the value is unconfirmed/empty.
 */

const PLACEHOLDER_PATTERNS = [
  '[client confirmation required]',
  '[client to confirm]',
  'pending client confirmation',
  'confirm full address',
  'contact hospital for',
  'number pending',
  'phone pending',
  'email pending',
  'address pending',
];

export function isConfirmedValue(value) {
  if (!value || typeof value !== 'string') return false;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return false;
  return !PLACEHOLDER_PATTERNS.some((pattern) => normalized.includes(pattern));
}

export function getTelHref(phone) {
  if (!isConfirmedValue(phone)) return '#';
  const digits = phone.replace(/[^0-9+]/g, '');
  return digits ? `tel:${digits}` : '#';
}

export function getWhatsAppHref(number, message = '') {
  if (!isConfirmedValue(number)) return '#';
  const digits = number.replace(/[^0-9]/g, '');
  if (!digits) return '#';
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${text}`;
}

export function getExternalHref(url) {
  if (!isConfirmedValue(url)) return '#';
  return url;
}

export function getMailtoHref(email) {
  if (!isConfirmedValue(email)) return '#';
  return `mailto:${email.trim()}`;
}
