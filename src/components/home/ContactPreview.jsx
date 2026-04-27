import { Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { contactPreviewData } from '../../data/homeData.js';
import { siteData } from '../../data/siteData.js';
import { Button, Container, MotionReveal, SectionHeader } from '../common/index.js';
import { getExternalHref, getTelHref, isConfirmedValue } from '../../utils/contactLinks.js';

const iconMap = {
  Phone,
  MapPin,
  Clock
};

function getCardValue(card) {
  if (card.valueKey === 'primaryPhone') return siteData.contact.primaryPhone;
  if (card.valueKey === 'address') return siteData.hospital.address;
  if (card.valueKey === 'opdTiming') return siteData.hospital.opdTiming;
  return '[CLIENT CONFIRMATION REQUIRED]';
}

export function ContactPreview() {
  const phoneConfirmed = isConfirmedValue(siteData.contact.primaryPhone);
  const mapConfirmed = isConfirmedValue(siteData.hospital.mapUrl);

  return (
    <section className="bg-bgAlt py-16 md:py-20">
      <Container>
        <SectionHeader
          eyebrow={contactPreviewData.eyebrow}
          heading={contactPreviewData.heading}
          description={contactPreviewData.description}
          align="center"
          className="mb-10"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {contactPreviewData.cards.map((card) => {
            const Icon = iconMap[card.icon] || Phone;
            const value = getCardValue(card);

            return (
              <MotionReveal key={card.id} as="article" className="rounded-card border border-border bg-white p-6 shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-teal">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">{card.title}</h3>
                <p className="mt-3 min-h-[3rem] text-sm leading-6 text-muted">{value}</p>
              </MotionReveal>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal className="rounded-[2rem] border border-dashed border-blue/30 bg-white p-6 shadow-card">
            <div className="flex gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue/10 text-blue">
                <MapPin size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-navy">Map Location</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{contactPreviewData.mapPlaceholder}</p>
                <div className="mt-4">
                  <Button
                    href={mapConfirmed ? getExternalHref(siteData.hospital.mapUrl) : '#'}
                    variant="outline"
                    size="sm"
                    disabled={!mapConfirmed}
                    external={mapConfirmed}
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal className="rounded-[2rem] border border-teal/15 bg-white p-6 shadow-card">
            <h3 className="font-heading text-xl font-bold text-navy">Need appointment help?</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Use the appointment page for request flow. Direct phone and map details are pending confirmation.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href={contactPreviewData.cta.href} variant="primary">
                {contactPreviewData.cta.label}
              </Button>
              <Button
                href={phoneConfirmed ? getTelHref(siteData.contact.primaryPhone) : '#'}
                variant="outline"
                disabled={!phoneConfirmed}
              >
                Call Now
              </Button>
              <Button href={siteData.contact.instagramUrl} variant="ghost" external icon={<Instagram size={18} />}>
                Instagram
              </Button>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
