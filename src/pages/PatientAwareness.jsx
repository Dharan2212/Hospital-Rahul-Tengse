import { Link } from 'react-router-dom';
import { awarenessData } from '../data/awarenessData.js';
import { AnimatedCard, Container, CTASection, Disclaimer, IconList, InfoCard, PageHero, SEO, SectionHeader } from '../components/common';
import { siteData } from '../data/siteData.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function PatientAwareness() {
  const pageSeo = getSeoByPath('/patient-awareness');

  return (
    <>
      <SEO path="/patient-awareness" schema={getSchemaForPage(pageSeo, siteData)} />
      <PageHero
        eyebrow={awarenessData.hero.eyebrow}
        title={awarenessData.hero.title}
        description={awarenessData.hero.description}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Patient Awareness' }]}
        primaryCTA={awarenessData.hero.primaryCTA}
        background="gradient"
      />

      {/* Kidney functions overview */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Know your kidneys" heading={awarenessData.kidneyFunctions.heading} description={awarenessData.kidneyFunctions.intro} align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {awarenessData.kidneyFunctions.functions.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* Warning symptoms */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Warning signs"
            heading={awarenessData.symptoms.heading}
            description={awarenessData.symptoms.intro}
            align="center"
          />
          <AnimatedCard className="mx-auto mt-10 max-w-4xl p-7 md:p-8">
            <IconList items={awarenessData.symptoms.list} />
            <p className="mt-5 rounded-card border border-border bg-white p-3 text-sm leading-6 text-muted">{awarenessData.symptoms.note}</p>
          </AnimatedCard>
        </Container>
      </section>

      {/* CKD stages */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="CKD awareness" heading={awarenessData.ckdAwareness.heading} description={awarenessData.ckdAwareness.intro} align="center" />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left font-semibold">Stage</th>
                  <th className="px-4 py-3 text-left font-semibold">eGFR</th>
                  <th className="px-4 py-3 text-left font-semibold">What it means</th>
                </tr>
              </thead>
              <tbody>
                {awarenessData.ckdAwareness.stages.map((row, idx) => (
                  <tr key={row.stage} className={idx % 2 === 0 ? 'bg-bgAlt' : 'bg-white'}>
                    <td className="px-4 py-3 font-semibold text-navy">{row.stage}</td>
                    <td className="px-4 py-3 text-muted">{row.egfr}</td>
                    <td className="px-4 py-3 leading-6 text-muted">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">{awarenessData.ckdAwareness.note}</p>
        </Container>
      </section>

      {/* Risk factor cards */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Risk factors" heading="Conditions that affect kidney health" description="Managing these conditions proactively can significantly reduce kidney disease risk." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {awarenessData.riskCards.map((item) => (
              <InfoCard key={item.title} icon={item.icon} tone={item.tone} title={item.title} description={item.description}>
                {item.keyPoints && (
                  <ul className="mt-3 space-y-1.5">
                    {item.keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm leading-5 text-muted">
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </InfoCard>
            ))}
          </div>
        </Container>
      </section>

      {/* When to consult */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <AnimatedCard className="border-teal/20 p-7 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">{awarenessData.whenToConsult.heading}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{awarenessData.whenToConsult.intro}</p>
            <IconList items={awarenessData.whenToConsult.list} className="mt-6" />
          </AnimatedCard>
        </Container>
      </section>

      {/* Diet guidance */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Nutrition" heading={awarenessData.ckdDiet.heading} description={awarenessData.ckdDiet.intro} align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {awarenessData.ckdDiet.tips.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* Screening groups */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Screening" heading={awarenessData.screening.heading} description="Kidney disease is often silent. These groups should prioritise regular kidney function checks." align="center" />
          <div className="mx-auto mt-10 max-w-3xl">
            <AnimatedCard className="overflow-hidden p-0">
              {awarenessData.screening.groups.map((item, idx) => (
                <div key={item.label} className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${idx % 2 === 0 ? 'bg-bgAlt' : 'bg-white'}`}>
                  <span className="font-semibold text-navy">{item.label}</span>
                  <span className="text-sm text-muted">{item.note}</span>
                </div>
              ))}
            </AnimatedCard>
          </div>
        </Container>
      </section>

      {/* Dialysis and transplant awareness links */}
      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Learn more" heading="Dialysis and transplant awareness" description="Patient-friendly educational guides on dialysis and kidney transplant topics." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {awarenessData.awarenessSections.map((item) => (
              <AnimatedCard key={item.title} className="p-7">
                <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                <Link
                  className="mt-5 inline-flex min-h-11 items-center rounded-btn border border-teal px-5 text-sm font-semibold text-teal transition hover:bg-sky"
                  to={item.href}
                >
                  Learn More
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Lifestyle reminder */}
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
