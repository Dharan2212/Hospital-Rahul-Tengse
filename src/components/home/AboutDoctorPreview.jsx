import { Stethoscope, UserRound } from 'lucide-react';
import { aboutPreviewData } from '../../data/homeData.js';
import { imageManifest } from '../../data/imageManifest.js';
import { siteData } from '../../data/siteData.js';
import { Button, Container, MotionReveal, SectionHeader } from '../common/index.js';

function isApprovedImage(entry) {
  return Boolean(entry?.frontendUseAllowed && entry?.src && ['approved', 'optimized-ready'].includes(entry?.status));
}

function DoctorImageFallback() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-teal/15 bg-gradient-to-br from-sky via-white to-bgAlt p-6 shadow-card"
      role="img"
      aria-label="Doctor profile visual placeholder pending approved photo"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-teal/15 blur-2xl" aria-hidden="true" />
      <div className="relative flex min-h-[300px] flex-col justify-between rounded-[1.5rem] border border-white/80 bg-white/75 p-6">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white shadow-card">
          <UserRound size={28} aria-hidden="true" />
        </span>
        <div>
          <p className="font-heading text-2xl font-bold text-navy">Doctor Photo Pending</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Approved doctor image will be placed here after client approval and optimization.
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutDoctorPreview() {
  const doctorImage = imageManifest?.doctor?.profile;
  const hasApprovedImage = isApprovedImage(doctorImage);

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <MotionReveal direction="left">
            {hasApprovedImage ? (
              <img
                src={doctorImage.src}
                srcSet={doctorImage.srcSet?.join(', ') || undefined}
                alt={doctorImage.alt}
                className="w-full rounded-[2rem] border border-border object-cover shadow-card"
              />
            ) : (
              <DoctorImageFallback />
            )}
          </MotionReveal>

          <MotionReveal direction="right" delay={0.08}>
            <SectionHeader
              eyebrow={aboutPreviewData.eyebrow}
              heading={aboutPreviewData.heading}
              description={`${siteData.doctor.name} — ${siteData.doctor.subtitle}`}
              className="mb-6"
            />
            <div className="space-y-4 text-base leading-8 text-text">
              {aboutPreviewData.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-sky px-4 py-2 text-sm font-semibold text-teal">
              <Stethoscope size={18} aria-hidden="true" />
              {siteData.doctor.qualification}
            </div>
            <div className="mt-7">
              <Button href={aboutPreviewData.cta.href} variant="primary">
                {aboutPreviewData.cta.label}
              </Button>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
