import { Building2, MapPin } from 'lucide-react';
import { hospitalPreviewData } from '../../data/homeData.js';
import { imageManifest } from '../../data/imageManifest.js';
import { siteData } from '../../data/siteData.js';
import { Button, Container, MotionReveal, SectionHeader } from '../common/index.js';

function isApprovedImage(entry) {
  return Boolean(entry?.frontendUseAllowed && entry?.src && ['approved', 'optimized-ready'].includes(entry?.status));
}

function HospitalImageFallback() {
  return (
    <div
      className="rounded-[2rem] border border-blue/15 bg-gradient-to-br from-bgAlt via-white to-sky p-6 shadow-card"
      role="img"
      aria-label="Hospital visual placeholder pending approved facility photo"
    >
      <div className="flex min-h-[280px] flex-col justify-between rounded-[1.5rem] border border-white bg-white/80 p-6">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue text-white shadow-card">
          <Building2 size={28} aria-hidden="true" />
        </span>
        <div>
          <p className="font-heading text-2xl font-bold text-navy">Hospital Photo Pending</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Facility image will be shown after client approval and privacy review.
          </p>
        </div>
      </div>
    </div>
  );
}

export function HospitalAssociationPreview() {
  const hospitalImage = imageManifest?.hospital?.reception;
  const hasApprovedImage = isApprovedImage(hospitalImage);

  return (
    <section className="bg-bgAlt py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <MotionReveal direction="left">
            {hasApprovedImage ? (
              <img
                src={hospitalImage.src}
                srcSet={hospitalImage.srcSet?.join(', ') || undefined}
                alt={hospitalImage.alt}
                className="w-full rounded-[2rem] border border-border object-cover shadow-card"
              />
            ) : (
              <HospitalImageFallback />
            )}
          </MotionReveal>

          <MotionReveal direction="right" delay={0.08}>
            <SectionHeader
              eyebrow={hospitalPreviewData.eyebrow}
              heading={hospitalPreviewData.heading}
              description={hospitalPreviewData.associationLine}
              className="mb-6"
            />
            <div className="rounded-card border border-border bg-white p-5 shadow-card">
              <div className="flex gap-3 text-muted">
                <MapPin className="mt-1 shrink-0 text-teal" size={22} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-navy">{siteData.hospital.name}</p>
                  <p className="mt-1 text-sm leading-6">
                    {siteData.hospital.address} · {hospitalPreviewData.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <Button href={hospitalPreviewData.cta.href} variant="secondary">
                {hospitalPreviewData.cta.label}
              </Button>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
