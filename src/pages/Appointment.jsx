import { AppointmentForm } from '../components/appointment/index.js';
import { Container, Disclaimer, PageHero, SEO } from '../components/common/index.js';
import { appointmentDisclaimer, emergencyDisclaimer } from '../data/appointmentData.js';
import { siteData } from '../data/siteData.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function Appointment() {
  const pageSeo = getSeoByPath('/appointment');

  return (
    <>
      <SEO path="/appointment" schema={getSchemaForPage(pageSeo, siteData)} />
      <PageHero
        eyebrow="Appointment Request"
        title="Book Appointment"
        subtitle="Request a kidney care appointment"
        description="Complete the steps below to prepare an appointment request. If a confirmed WhatsApp number is configured, the website will open WhatsApp with your request message for review and sending."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Appointment' }]}
        background="gradient"
      />

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <div className="mb-8 grid gap-4 lg:grid-cols-2">
            <Disclaimer type="appointment" title="Appointment request notice" text={appointmentDisclaimer} compact />
            <Disclaimer type="emergency" title="Emergency guidance" text={emergencyDisclaimer} compact />
          </div>
          <AppointmentForm />
        </Container>
      </section>
    </>
  );
}

export default Appointment;
