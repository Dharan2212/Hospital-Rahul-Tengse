import { dialysisData } from '../data/dialysisData.js';
import { AnimatedCard, Container, CTASection, Disclaimer, IconList, InfoCard, MotionReveal, PageHero, PlaceholderVisual, SEO, SectionHeader } from '../components/common';
import { siteData } from '../data/siteData.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function DialysisCare() {
  const pageSeo = getSeoByPath('/dialysis-care');

  return (
    <>
      <SEO path="/dialysis-care" schema={getSchemaForPage(pageSeo, siteData)} />
      <PageHero
        eyebrow={dialysisData.hero.eyebrow}
        title={dialysisData.hero.title}
        description={dialysisData.hero.description}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Dialysis Care' }]}
        primaryCTA={dialysisData.hero.primaryCTA}
        background="gradient"
      />

      {/* What is dialysis */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <MotionReveal direction="left">
              <PlaceholderVisual
                title="Dialysis care awareness visual"
                description="Approved educational dialysis graphics will be added after review. This placeholder is not a procedure image."
                icon="activity"
                tone="blue"
                className="min-h-[320px]"
              />
            </MotionReveal>
            <MotionReveal direction="right">
              <SectionHeader eyebrow="Patient awareness" heading={dialysisData.whatIsDialysis.heading} description={dialysisData.whatIsDialysis.text} />
              <Disclaimer type="guidance" compact className="mt-6" />
            </MotionReveal>
          </div>
        </Container>
      </section>

      {/* When dialysis may be needed */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Clinical situations"
            heading="When dialysis may be needed"
            description="Dialysis decisions are always guided by specialist assessment, reports, and clinical condition — not symptoms alone."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dialysisData.whenNeeded.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* Dialysis types */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Types of dialysis" heading="Dialysis modalities — guidance overview" description="Each type of dialysis has specific indications, advantages, and suitability criteria determined by your specialist." align="center" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {dialysisData.guidanceSections.map((item) => (
              <InfoCard key={item.id} icon={item.icon} title={item.title} description={item.description}>
                <p className="rounded-card border border-border bg-bgAlt p-3 text-xs font-semibold text-navy">{item.disclaimer}</p>
              </InfoCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Vascular access awareness */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Dialysis access"
            heading="AV Fistula and Permcath — access awareness"
            description="Understanding your dialysis access helps you care for it and discuss options with your specialist. These sections are educational, not procedure guides."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {dialysisData.accessAwareness.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="blue" />
            ))}
          </div>
        </Container>
      </section>

      {/* Lifestyle in dialysis */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Lifestyle guidance" heading="Managing daily life on dialysis" description="Dialysis patients benefit from dietary, fluid, and lifestyle adjustments. Discuss your specific limits with your nephrologist." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {dialysisData.lifestylePoints.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* Patient safety notes */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <AnimatedCard className="p-7 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">Patient Safety Notes</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Important reminders for patients on dialysis or being evaluated for dialysis.</p>
            <IconList items={dialysisData.safetyNotes} className="mt-6" />
          </AnimatedCard>
          <Disclaimer type="general" compact className="mt-8" />
        </Container>
      </section>

      <CTASection
        heading={dialysisData.cta.heading}
        description={dialysisData.cta.description}
        primaryCTA={dialysisData.cta.primaryCTA}
        disclaimer="Submitting an appointment request does not guarantee a final appointment time."
        background="gradient"
      />
    </>
  );
}

export default DialysisCare;
