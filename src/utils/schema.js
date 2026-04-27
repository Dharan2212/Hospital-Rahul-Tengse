import { siteSeoConfig, buildCanonicalUrl } from './seo.js';
import { isConfirmedValue } from './contactLinks.js';

function cleanObject(value) {
  if (Array.isArray(value)) {
    return value.map(cleanObject).filter((item) => item !== undefined);
  }

  if (!value || typeof value !== 'object') return value;

  return Object.entries(value).reduce((acc, [key, entry]) => {
    const cleaned = cleanObject(entry);
    if (
      cleaned === undefined ||
      cleaned === null ||
      cleaned === '' ||
      (Array.isArray(cleaned) && cleaned.length === 0)
    ) {
      return acc;
    }
    acc[key] = cleaned;
    return acc;
  }, {});
}

function hospitalAddress(siteData) {
  return {
    '@type': 'PostalAddress',
    addressLocality: siteData.hospital.city || 'Parbhani',
    addressRegion: siteData.hospital.state || 'Maharashtra',
    addressCountry: 'IN'
  };
}

function hospitalObject(siteData) {
  return cleanObject({
    '@type': 'Hospital',
    name: siteData.hospital.name,
    address: hospitalAddress(siteData)
  });
}

function confirmedTelephone(siteData) {
  return isConfirmedValue(siteData.contact.primaryPhone) ? siteData.contact.primaryPhone : undefined;
}

function confirmedOpeningHours(siteData) {
  const timing = siteData.hospital.opdTiming;
  if (!isConfirmedValue(timing)) return undefined;
  if (/contact hospital|confirm/i.test(timing)) return undefined;
  return timing;
}

export function buildPhysicianSchema(siteData) {
  return cleanObject({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: siteData.doctor.name,
    medicalSpecialty: 'Nephrology',
    affiliation: hospitalObject(siteData),
    address: hospitalAddress(siteData),
    telephone: confirmedTelephone(siteData),
    url: siteSeoConfig.defaultSiteUrl
  });
}

export function buildMedicalClinicSchema(siteData) {
  return cleanObject({
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: siteData.hospital.name,
    medicalSpecialty: 'Nephrology',
    address: hospitalAddress(siteData),
    telephone: confirmedTelephone(siteData),
    openingHours: confirmedOpeningHours(siteData),
    sameAs: isConfirmedValue(siteData.contact.instagramUrl) ? [siteData.contact.instagramUrl] : undefined,
    url: buildCanonicalUrl('/contact')
  });
}

export function buildMedicalWebPageSchema(pageSeo, siteData) {
  return cleanObject({
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: pageSeo.title,
    description: pageSeo.description,
    url: buildCanonicalUrl(pageSeo.canonicalPath || pageSeo.path),
    about: {
      '@type': 'MedicalSpecialty',
      name: 'Nephrology'
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patients and families'
    },
    publisher: hospitalObject(siteData)
  });
}

export function buildWebPageSchema(pageSeo, siteData) {
  return cleanObject({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageSeo.title,
    description: pageSeo.description,
    url: buildCanonicalUrl(pageSeo.canonicalPath || pageSeo.path),
    about: siteData.doctor.name
  });
}

export function getSchemaForPage(pageSeo, siteData) {
  if (!pageSeo?.schemaType) return null;

  if (pageSeo.schemaType === 'Physician') return buildPhysicianSchema(siteData);
  if (pageSeo.schemaType === 'MedicalClinic') return buildMedicalClinicSchema(siteData);
  if (pageSeo.schemaType === 'MedicalWebPage') return buildMedicalWebPageSchema(pageSeo, siteData);
  if (pageSeo.schemaType === 'WebPage') return buildWebPageSchema(pageSeo, siteData);

  return null;
}
