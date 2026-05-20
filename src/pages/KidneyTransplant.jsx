import { Link } from 'react-router-dom';
import { transplantData } from '../data/transplantData.js';
import { AnimatedCard, Container, CTASection, Disclaimer, IconList, InfoCard, PageHero, SEO, SectionHeader } from '../components/common';
import { siteData } from '../data/siteData.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function KidneyTransplant() {
  const pageSeo = getSeoByPath('/kidney-transplant-guidance');

  return (
    <>
      <SEO path="/kidney-transplant-guidance" schema={getSchemaForPage(pageSeo, siteData)} />
      <PageHero
        eyebrow={transplantData.hero.eyebrow}
        title={transplantData.hero.title}
        description={transplantData.hero.description}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Transplant Guidance' }]}
        primaryCTA={transplantData.hero.primaryCTA}
        background="gradient"
      />

      {/* Required top disclaimer */}
      <section className="bg-white py-8">
        <Container>
          <Disclaimer type="transplant" text={transplantData.requiredDisclaimer} />
        </Container>
      </section>

      {/* Scope — what this page covers */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Scope"
            heading={transplantData.intro.heading}
            description="This page provides general awareness for patient and family discussions before or after specialist consultation."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <AnimatedCard className="p-7">
              <h2 className="font-heading text-2xl font-bold text-navy">This page covers</h2>
              <IconList items={transplantData.intro.covers} className="mt-5" />
            </AnimatedCard>
            <AnimatedCard className="p-7">
              <h2 className="font-heading text-2xl font-bold text-navy">This page does not cover</h2>
              <IconList items={transplantData.intro.doesNotCover} className="mt-5" tone="blue" />
            </AnimatedCard>
          </div>
        </Container>
      </section>

      {/* Pre-transplant evaluation awareness */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Evaluation"
            heading="Pre-transplant evaluation awareness"
            description="Final transplant decisions require detailed medical evaluation, specialist clearance, and hospital protocol."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {transplantData.evaluationPoints.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* Donor guidance — living and deceased */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Donor information" heading={transplantData.donorGuidance.heading} description={transplantData.donorGuidance.disclaimer} align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <AnimatedCard className="p-7 md:p-8">
              <h3 className="font-heading text-xl font-bold text-navy">{transplantData.donorGuidance.livingDonor.title}</h3>
              <IconList items={transplantData.donorGuidance.livingDonor.points} className="mt-5" />
            </AnimatedCard>
            <AnimatedCard className="p-7 md:p-8">
              <h3 className="font-heading text-xl font-bold text-navy">{transplantData.donorGuidance.deceasedDonor.title}</h3>
              <IconList items={transplantData.donorGuidance.deceasedDonor.points} className="mt-5" tone="blue" />
            </AnimatedCard>
          </div>
        </Container>
      </section>

      {/* Post-transplant follow-up */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Follow-up care" heading={transplantData.followUp.heading} description={transplantData.followUp.intro} align="center" />
          <AnimatedCard className="mx-auto mt-10 max-w-4xl p-7 md:p-8">
            <IconList items={transplantData.followUp.points} />
          </AnimatedCard>
        </Container>
      </section>

      {/* Rejection awareness */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedCard className="p-7 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-navy">{transplantData.rejectionAwareness.heading}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{transplantData.rejectionAwareness.text}</p>
              <p className="mt-4 rounded-card border border-red/20 bg-red/5 p-3 text-sm font-semibold text-navy">{transplantData.rejectionAwareness.note}</p>
            </AnimatedCard>
            <AnimatedCard className="p-7 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-navy">Warning signs to watch for</h2>
              <IconList items={transplantData.rejectionAwareness.warningSignals} className="mt-5" />
            </AnimatedCard>
          </div>
        </Container>
      </section>

      {/* Media note */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <AnimatedCard className="p-7 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">Media Coverage Note</h2>
            <p className="mt-3 text-base leading-7 text-muted">{transplantData.mediaNote.text}</p>
            <Link
              className="mt-5 inline-flex min-h-11 items-center rounded-btn border border-teal px-5 text-sm font-semibold text-teal transition hover:bg-sky"
              to={transplantData.mediaNote.href}
            >
              View Media & News
            </Link>
          </AnimatedCard>
          <Disclaimer type="transplant" className="mt-8" text={transplantData.requiredDisclaimer} />
        </Container>
      </section>

      <CTASection
        heading={transplantData.cta.heading}
        description={transplantData.cta.description}
        primaryCTA={transplantData.cta.primaryCTA}
        background="gradient"
      />
    </>
  );
}

export default KidneyTransplant;
