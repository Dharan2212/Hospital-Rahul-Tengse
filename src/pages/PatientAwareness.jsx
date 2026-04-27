import { Link } from 'react-router-dom';
import { awarenessData } from '../data/awarenessData.js';
import { AnimatedCard, Container, CTASection, Disclaimer, IconList, InfoCard, PageHero, SectionHeader } from '../components/common';

function PatientAwareness() {
  return (
    <>
      <PageHero
        eyebrow={awarenessData.hero.eyebrow}
        title={awarenessData.hero.title}
        description={awarenessData.hero.description}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Patient Awareness' }]}
        primaryCTA={awarenessData.hero.primaryCTA}
        background="gradient"
      />

      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Warning signs" heading="Kidney Disease Symptoms" description="These are general awareness signs. Symptoms can have many causes, so consultation and reports are important." align="center" />
          <AnimatedCard className="mx-auto mt-10 max-w-4xl p-7 md:p-8">
            <IconList items={awarenessData.symptoms} />
          </AnimatedCard>
        </Container>
      </section>

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {awarenessData.riskCards.map((item) => (
              <InfoCard key={item.title} icon={item.icon} tone={item.tone} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <AnimatedCard className="border-red/20 bg-red/5 p-7 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">When to Consult a Kidney Specialist</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Consider consultation when symptoms, reports, or existing conditions suggest kidney-related concerns.</p>
            <IconList items={awarenessData.whenToConsult} className="mt-6" />
          </AnimatedCard>
        </Container>
      </section>

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Education" heading="Dialysis and transplant awareness" description="Readable patient-awareness cards replace full poster blocks for better accessibility." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {awarenessData.awarenessSections.map((item) => (
              <AnimatedCard key={item.title} className="p-7">
                <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                <Link className="mt-5 inline-flex min-h-11 items-center rounded-btn border border-teal px-5 text-sm font-semibold text-teal transition hover:bg-sky" to={item.href}>
                  Learn More
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <AnimatedCard className="bg-gradient-to-br from-sky to-white p-7 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">Lifestyle & Regular Checkup Reminder</h2>
            <p className="mt-3 text-base leading-7 text-muted">{awarenessData.lifestyleReminder}</p>
          </AnimatedCard>
          <Disclaimer type="general" compact className="mt-8" />
        </Container>
      </section>

      <CTASection
        heading={awarenessData.cta.heading}
        description={awarenessData.cta.description}
        primaryCTA={awarenessData.cta.primaryCTA}
        background="gradient"
      />
    </>
  );
}

export default PatientAwareness;
