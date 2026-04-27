import { dialysisData } from '../data/dialysisData.js';
import { AnimatedCard, Container, CTASection, Disclaimer, IconList, InfoCard, MotionReveal, PageHero, PlaceholderVisual, SectionHeader } from '../components/common';

function DialysisCare() {
  return (
    <>
      <PageHero
        eyebrow={dialysisData.hero.eyebrow}
        title={dialysisData.hero.title}
        description={dialysisData.hero.description}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Dialysis Care' }]}
        primaryCTA={dialysisData.hero.primaryCTA}
        background="gradient"
      />

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

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Evaluation" heading="When dialysis may be needed" description="Dialysis decisions must always be based on doctor consultation and medical reports." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {dialysisData.whenNeeded.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Dialysis guidance" heading="Types of dialysis-related guidance" align="center" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {dialysisData.guidanceSections.map((item) => (
              <InfoCard key={item.id} icon={item.icon} title={item.title} description={item.description}>
                <p className="rounded-card border border-border bg-bgAlt p-3 text-xs font-semibold text-navy">{item.disclaimer}</p>
              </InfoCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Dialysis access awareness" heading="AV Fistula and Permcath awareness" description="These sections are informational only and do not provide procedure instructions." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {dialysisData.accessAwareness.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="blue" />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <AnimatedCard className="p-7 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">Patient Safety Notes</h2>
            <IconList items={dialysisData.safetyNotes} className="mt-6" />
          </AnimatedCard>
        </Container>
      </section>

      <CTASection
        heading={dialysisData.cta.heading}
        description={dialysisData.cta.description}
        primaryCTA={dialysisData.cta.primaryCTA}
        disclaimer="Submitting an appointment request does not guarantee a confirmed appointment time."
        background="gradient"
      />
    </>
  );
}

export default DialysisCare;
