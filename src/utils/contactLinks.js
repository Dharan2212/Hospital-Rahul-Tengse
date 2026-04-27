export function isConfirmedValue(value) {
  if (!value || typeof value !== 'string') return false;
  const normalized = value.trim().toLowerCase();
  return (
    Boolean(normalized) &&
    !normalized.includes('[client confirmation required]') &&
    !normalized.includes('[client to confirm]') &&
    !normalized.includes('pending client confirmation') &&
    !normalized.includes('confirm full address')
  );
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
