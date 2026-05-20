import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Clock, ExternalLink } from 'lucide-react';
import { AnimatedCard, Button, Container, CTASection, Disclaimer, PageHero, PlaceholderVisual, SEO, SectionHeader } from '../components/common';
import { siteData } from '../data/siteData.js';
import { getExternalHref, getTelHref, getWhatsAppHref, getMailtoHref, isConfirmedValue } from '../utils/contactLinks.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function ContactCard({ icon: Icon, title, value, action, iconColor = 'text-teal' }) {
  return (
    <AnimatedCard as="article" className="p-6">
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal/20 bg-sky ${iconColor}`}>
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h2 className="mt-5 font-heading text-xl font-bold text-navy">{title}</h2>
      <p className="mt-3 whitespace-pre-line break-words text-sm leading-6 text-muted">{value}</p>
      {action}
    </AnimatedCard>
  );
}

function SocialLinkRow({ icon: Icon, label, href, isConfirmed, ariaLabel }) {
  const resolvedHref = isConfirmed ? href : '#';
  return (
    <a
      href={resolvedHref}
      target={isConfirmed ? '_blank' : undefined}
      rel="noreferrer noopener"
      aria-label={ariaLabel || label}
      className={`flex min-h-11 items-center gap-3 rounded-xl border px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
        isConfirmed
          ? 'border-teal/30 bg-sky text-navy hover:border-teal hover:bg-teal hover:text-white'
          : 'pointer-events-none border-border bg-white text-muted opacity-60'
      }`}
      tabIndex={isConfirmed ? undefined : -1}
      aria-disabled={!isConfirmed}
    >
      <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
      <span>{label}</span>
      {isConfirmed && <ExternalLink aria-hidden="true" className="ml-auto h-4 w-4 opacity-60" />}
    </a>
  );
}

function Contact() {
  const phoneHref = getTelHref(siteData.contact.primaryPhone);
  const whatsappHref = getWhatsAppHref(
    siteData.contact.whatsappNumber,
    `Hello, I would like to book an appointment with Dr. Rahul Bhaskarrao Tengse at Shivneri Super Speciality Hospital, Parbhani.`
  );
  const emailHref = getMailtoHref(siteData.contact.email);
  const mapHref = getExternalHref(siteData.hospital.mapUrl);
  const instagramHref = getExternalHref(siteData.contact.instagramUrl);
  const facebookHref = getExternalHref(siteData.contact.facebookUrl);

  const phoneConfirmed = isConfirmedValue(siteData.contact.primaryPhone);
  const whatsappConfirmed = isConfirmedValue(siteData.contact.whatsappNumber);
  const emailConfirmed = isConfirmedValue(siteData.contact.email);
  const mapConfirmed = isConfirmedValue(siteData.hospital.mapUrl);
  const instagramConfirmed = isConfirmedValue(siteData.contact.instagramUrl);
  const facebookConfirmed = isConfirmedValue(siteData.contact.facebookUrl);

  const pageSeo = getSeoByPath('/contact');

  return (
    <>
      <SEO path="/contact" schema={getSchemaForPage(pageSeo, siteData)} />
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Reach the team at Shivneri Super Speciality & Surya ICU Hospital, Parbhani, to schedule a kidney care appointment or ask a general query."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'primary' }}
        background="gradient"
      />

      {/* Contact Cards */}
      <section className="bg-white py-14 md:py-20" aria-labelledby="contact-heading">
        <Container>
          <SectionHeader
            eyebrow="How to reach us"
            heading="Hospital contact information"
            description="Please use the phone number or appointment form below to get in touch. The hospital team will confirm OPD timing and appointment details."
            align="center"
            id="contact-heading"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ContactCard
              icon={Phone}
              title="Phone"
              value={`Primary: +91 ${siteData.contact.primaryPhone}\n\nCall or WhatsApp to speak with the hospital team.`}
              action={
                <Button
                  className="mt-5"
                  href={phoneHref}
                  variant="outline"
                  disabled={!phoneConfirmed}
                  ariaLabel={`Call Dr. Rahul Tengse hospital at ${siteData.contact.primaryPhone}`}
                >
                  Call Now
                </Button>
              }
            />
            <ContactCard
              icon={MapPin}
              title="Hospital Address"
              value={`${siteData.hospital.name}\n${siteData.hospital.address},\n${siteData.hospital.city}, ${siteData.hospital.state} — 431401`}
              action={
                mapConfirmed ? (
                  <Button
                    className="mt-5"
                    href={mapHref}
                    variant="outline"
                    external={mapConfirmed}
                    ariaLabel="View hospital on Google Maps"
                  >
                    View on Map
                  </Button>
                ) : (
                  <p className="mt-5 text-xs text-muted">Google Map link — confirm with client before launch</p>
                )
              }
            />
            <ContactCard
              icon={Clock}
              title="OPD Timing"
              value={
                siteData.hospital.opdTiming && !/contact hospital|confirm/i.test(siteData.hospital.opdTiming)
                  ? siteData.hospital.opdTiming
                  : 'OPD timing will be shown here once confirmed.\n\nPlease call the hospital directly for current timing.'
              }
              action={
                <Button
                  className="mt-5"
                  href={phoneHref}
                  variant="outline"
                  disabled={!phoneConfirmed}
                  ariaLabel="Call hospital for OPD timing"
                >
                  Call for Timing
                </Button>
              }
            />
          </div>
        </Container>
      </section>

      {/* Social, WhatsApp, Email, Map */}
      <section className="bg-bgAlt py-14 md:py-20" aria-labelledby="connect-heading">
        <Container>
          <SectionHeader
            eyebrow="Connect with us"
            heading="Email, WhatsApp & social profiles"
            description="Reach the hospital team through WhatsApp, email, or follow Dr. Rahul Bhaskarrao Tengse on social media for kidney health awareness updates."
            align="center"
            id="connect-heading"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <AnimatedCard className="p-7 md:p-8">
              <h2 className="font-heading text-xl font-bold text-navy">WhatsApp, Email & Social</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                For appointment queries, you may reach out via WhatsApp or email. Follow on social media for kidney health awareness content.
              </p>
              <div className="mt-6 grid gap-3">
                <SocialLinkRow
                  icon={MessageCircle}
                  label={whatsappConfirmed ? 'WhatsApp the hospital team' : 'WhatsApp — confirm number with client'}
                  href={whatsappHref}
                  isConfirmed={whatsappConfirmed}
                  ariaLabel="Open WhatsApp to contact the hospital"
                />
                <SocialLinkRow
                  icon={Mail}
                  label={emailConfirmed ? siteData.contact.email : 'Email — confirm with client'}
                  href={emailHref}
                  isConfirmed={emailConfirmed}
                  ariaLabel={`Send email to ${siteData.contact.email}`}
                />
                <SocialLinkRow
                  icon={Instagram}
                  label="Dr. Rahul Tengse — Instagram"
                  href={instagramHref}
                  isConfirmed={instagramConfirmed}
                  ariaLabel="Follow Dr. Rahul Tengse on Instagram"
                />
                <SocialLinkRow
                  icon={Facebook}
                  label="Dr. Rahul Tengse — Facebook"
                  href={facebookHref}
                  isConfirmed={facebookConfirmed}
                  ariaLabel="Follow Dr. Rahul Tengse on Facebook"
                />
              </div>
              <Disclaimer type="appointment" compact className="mt-7" />
            </AnimatedCard>

            {mapConfirmed ? (
              <AnimatedCard className="overflow-hidden p-0 min-h-[280px]">
                <iframe
                  src={siteData.hospital.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ minHeight: '280px', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shivneri Super Speciality & Surya ICU Hospital on Google Maps"
                />
              </AnimatedCard>
            ) : (
              <PlaceholderVisual
                title="Google Maps embed — pending client confirmation"
                description="A verified Google Maps embed will be added once the map link is confirmed by the client."
                icon="building"
                tone="blue"
                className="min-h-[280px]"
              />
            )}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        heading="Book a Kidney Care Appointment"
        description="Submit an appointment request and the hospital team will contact you to confirm the date and timing."
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'secondary' }}
        secondaryCTA={{
          label: 'Call Now',
          href: phoneHref,
          variant: 'subtle',
          disabled: !phoneConfirmed,
        }}
        background="gradient"
      />
    </>
  );
}

export default Contact;
