import { CTASection, Container, Disclaimer, PageHero, SEO, SectionHeader } from '../components/common';
import { ServiceCard } from '../components/services/ServiceCard.jsx';
import { servicesData } from '../data/servicesData.js';
import { siteData } from '../data/siteData.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function Services() {
  const pageSeo = getSeoByPath('/services');

  return (
    <>
      <SEO path="/services" schema={getSchemaForPage(pageSeo, siteData)} />
      <PageHero
        eyebrow="Kidney care services"
        title="Kidney Care Services"
        description="Comprehensive kidney care guidance for kidney disease consultation, dialysis care, report review, transplant guidance, and related kidney-health concerns."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        primaryCTA={{ label: 'Book Consultation', href: '/appointment', variant: 'primary' }}
        background="gradient"
      />

      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Services"
            heading="Specialized nephrology service areas"
            description="Each service is presented as patient-friendly guidance. Personalized advice requires consultation with the doctor or hospital team."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.name}
                description={`${service.shortDescription} Consultation and next steps depend on medical evaluation.`}
                cta={service.ctaText}
                href={service.href}
                hasDisclaimer={service.hasDisclaimer}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bgAlt py-12">
        <Container>
          <Disclaimer type="general" />
        </Container>
      </section>

      <CTASection
        heading="Book a Kidney Care Consultation"
        description="Request an appointment for kidney symptoms, report review, dialysis-related questions, or transplant guidance."
        primaryCTA={{ label: 'Book Consultation', href: '/appointment', variant: 'secondary' }}
        background="gradient"
      />
    </>
  );
}

export default Services;
