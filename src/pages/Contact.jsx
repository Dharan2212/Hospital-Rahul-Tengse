import { Instagram, Mail, MapPin, MessageCircle, Phone, Clock } from 'lucide-react';
import { AnimatedCard, Button, Container, CTASection, Disclaimer, PageHero, PlaceholderVisual, SectionHeader } from '../components/common';
import { siteData } from '../data/siteData.js';
import { getExternalHref, getTelHref, getWhatsAppHref, isConfirmedValue } from '../utils/contactLinks.js';

function ContactCard({ icon: Icon, title, value, action }) {
  return (
    <AnimatedCard as="article" className="p-6">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal/20 bg-sky text-teal">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h2 className="mt-5 font-heading text-xl font-bold text-navy">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{value}</p>
      {action}
    </AnimatedCard>
  );
}

function Contact() {
  const phoneHref = getTelHref(siteData.contact.primaryPhone);
  const whatsappHref = getWhatsAppHref(siteData.contact.whatsappNumber, 'New appointment request');
  const mapHref = getExternalHref(siteData.hospital.mapUrl);
  const phoneConfirmed = isConfirmedValue(siteData.contact.primaryPhone);
  const emergencyConfirmed = isConfirmedValue(siteData.contact.emergencyPhone);
  const whatsappConfirmed = isConfirmedValue(siteData.contact.whatsappNumber);
  const mapConfirmed = isConfirmedValue(siteData.hospital.mapUrl);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Contact information is shown with safe placeholders until final client confirmation is complete."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'primary' }}
        background="gradient"
      />

      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Contact details" heading="Reach the hospital team" description="Final phone number, WhatsApp number, OPD timing, address, and map link require client confirmation before launch." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ContactCard
              icon={Phone}
              title="Phone"
              value={`Primary: ${siteData.contact.primaryPhone}\nEmergency: ${siteData.contact.emergencyPhone}`}
              action={
                <Button className="mt-5" href={phoneHref} variant="outline" disabled={!phoneConfirmed} ariaLabel="Call hospital">
                  Call Now
                </Button>
              }
            />
            <ContactCard
              icon={MapPin}
              title="Address"
              value={`${siteData.hospital.name}, ${siteData.hospital.city}, ${siteData.hospital.state} [CONFIRM FULL ADDRESS]`}
              action={
                <Button className="mt-5" href={mapHref} variant="outline" disabled={!mapConfirmed} external={mapConfirmed}>
                  View on Map
                </Button>
              }
            />
            <ContactCard
              icon={Clock}
              title="OPD Timing"
              value={siteData.hospital.opdTiming || '[CLIENT CONFIRMATION REQUIRED]'}
              action={<p className="mt-5 text-sm font-semibold text-muted">Confirm timing before launch</p>}
            />
          </div>
        </Container>
      </section>

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <AnimatedCard className="p-7 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-navy">WhatsApp, Email & Instagram</h2>
              <div className="mt-6 space-y-4 text-sm leading-6 text-muted">
                <p className="flex gap-3"><MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-teal" /> {whatsappConfirmed ? 'WhatsApp number is available.' : 'WhatsApp number pending client confirmation.'}</p>
                <p className="flex gap-3"><Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-teal" /> Email: {siteData.contact.email}</p>
                <p className="flex gap-3"><Instagram aria-hidden="true" className="h-5 w-5 shrink-0 text-teal" /> Instagram profile is available for public link reference.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappHref} disabled={!whatsappConfirmed} variant="outline">Open WhatsApp</Button>
                <Button href={siteData.contact.instagramUrl} external variant="secondary">Instagram</Button>
              </div>
            </AnimatedCard>
            <PlaceholderVisual
              title="Google Map link pending client confirmation"
              description="A verified Google Map embed or link will be added after client confirmation."
              icon="building"
              tone="blue"
              className="min-h-[280px]"
            />
          </div>
          <Disclaimer type="appointment" compact className="mt-8" />
        </Container>
      </section>

      <CTASection
        heading="Book a Kidney Care Appointment"
        description="Submit an appointment request and the hospital or doctor\'s team will contact you to confirm."
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'secondary' }}
        secondaryCTA={{ label: 'Call Now', href: phoneHref, variant: 'subtle', disabled: !phoneConfirmed }}
        background="gradient"
      />
    </>
  );
}

export default Contact;
