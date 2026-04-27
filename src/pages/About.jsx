import { Link } from 'react-router-dom';
import { aboutData } from '../data/aboutData.js';
import { imageManifest } from '../data/imageManifest.js';
import { AnimatedCard, Container, CTASection, Disclaimer, InfoCard, MotionReveal, PageHero, PlaceholderVisual, SectionHeader } from '../components/common';

function About() {
  const doctorImage = imageManifest.doctor?.profile;
  const canUseDoctorImage = doctorImage?.frontendUseAllowed === true && doctorImage?.src;

  return (
    <>
      <PageHero
        eyebrow={aboutData.hero.eyebrow}
        title={aboutData.hero.title}
        description={aboutData.hero.description}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        primaryCTA={aboutData.hero.primaryCTA}
        background="gradient"
      />

      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <MotionReveal direction="left">
              {canUseDoctorImage ? (
                <img src={doctorImage.src} alt={doctorImage.alt} className="w-full rounded-lg border border-border object-cover shadow-card" />
              ) : (
                <PlaceholderVisual
                  title="Doctor profile visual pending approval"
                  description="Approved doctor photo will be added after client review and image optimization."
                  icon="stethoscope"
                  tone="teal"
                  className="min-h-[360px]"
                />
              )}
            </MotionReveal>
            <MotionReveal direction="right" delay={0.08}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Doctor Introduction</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">{aboutData.intro.name}</h2>
              <p className="mt-3 text-lg font-semibold text-teal">{aboutData.intro.title}</p>
              <p className="mt-2 text-sm font-semibold text-muted">{aboutData.intro.qualification}</p>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted">
                {aboutData.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Qualifications"
            heading="Qualification details for client confirmation"
            description="The final public qualification line must be confirmed before launch."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {aboutData.qualifications.map((item) => (
              <AnimatedCard key={item.title} as="article" className="p-6 text-center">
                <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Specializations" heading="Kidney care focus areas" align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {aboutData.specializations.map((item) => (
              <span key={item} className="rounded-full border border-teal/20 bg-sky px-4 py-2 text-sm font-semibold text-navy">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader eyebrow="Expertise" heading="Areas of Expertise" description="General consultation areas shown for patient awareness." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aboutData.expertiseAreas.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
            <MotionReveal>
              <div className="flex h-full flex-col justify-center rounded-lg bg-navy p-8 text-white shadow-card md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky">Care Philosophy</p>
                <blockquote className="mt-4 font-heading text-2xl font-bold leading-snug md:text-3xl">
                  “{aboutData.philosophy.quote}”
                </blockquote>
                <p className="mt-4 text-sm leading-6 text-white/75">{aboutData.philosophy.note}</p>
              </div>
            </MotionReveal>
            <AnimatedCard className="p-7 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-navy">Hospital Association</h2>
              <p className="mt-3 text-lg font-semibold text-teal">{aboutData.hospitalAssociation.name}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{aboutData.hospitalAssociation.location}</p>
              <p className="mt-2 text-sm leading-6 text-muted">Visiting hours: {aboutData.hospitalAssociation.timing}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{aboutData.hospitalAssociation.note}</p>
              <Link className="mt-5 inline-flex min-h-11 items-center rounded-btn border border-teal px-5 text-sm font-semibold text-teal transition hover:bg-sky" to={aboutData.hospitalAssociation.cta.href}>
                {aboutData.hospitalAssociation.cta.label}
              </Link>
            </AnimatedCard>
          </div>
        </Container>
      </section>

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <AnimatedCard className="p-7 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">Media Recognition Note</h2>
            <p className="mt-3 text-base leading-7 text-muted">{aboutData.mediaRecognition.text}</p>
            <Link className="mt-5 inline-flex min-h-11 items-center rounded-btn border border-teal px-5 text-sm font-semibold text-teal transition hover:bg-sky" to={aboutData.mediaRecognition.href}>
              View Media Coverage
            </Link>
          </AnimatedCard>
          <Disclaimer type="general" className="mt-8" />
        </Container>
      </section>

      <CTASection
        heading={aboutData.cta.heading}
        description={aboutData.cta.description}
        primaryCTA={aboutData.cta.primaryCTA}
        background="gradient"
      />
    </>
  );
}

export default About;
