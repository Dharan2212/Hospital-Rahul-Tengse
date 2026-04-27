import { appointmentCTAData } from '../../data/homeData.js';
import { siteData } from '../../data/siteData.js';
import { CTASection } from '../common/index.js';
import { getTelHref, isConfirmedValue } from '../../utils/contactLinks.js';

export function AppointmentCTABand() {
  const phoneConfirmed = isConfirmedValue(siteData.contact.primaryPhone);
  const secondaryCTA = {
    ...appointmentCTAData.secondaryCTA,
    href: getTelHref(siteData.contact.primaryPhone),
    disabled: !phoneConfirmed
  };

  return (
    <CTASection
      eyebrow={appointmentCTAData.eyebrow}
      heading={appointmentCTAData.heading}
      description={appointmentCTAData.description}
      primaryCTA={appointmentCTAData.primaryCTA}
      secondaryCTA={secondaryCTA}
      disclaimer={appointmentCTAData.disclaimer}
      background="gradient"
      pulsePrimary
    />
  );
}
