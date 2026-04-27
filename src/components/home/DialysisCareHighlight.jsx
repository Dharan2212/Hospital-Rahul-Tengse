import { Activity, CheckCircle2, Droplets } from 'lucide-react';
import { dialysisHighlightData } from '../../data/homeData.js';
import { imageManifest } from '../../data/imageManifest.js';
import { Button, Container, MotionReveal, SectionHeader } from '../common/index.js';

function isApprovedImage(entry) {
  return Boolean(entry?.frontendUseAllowed && entry?.src && ['approved', 'optimized-ready'].includes(entry?.status));
}

function DialysisVisualFallback() {
  return (
    <div
      className="rounded-[2rem] border border-green/15 bg-white p-6 shadow-card"
      role="img"
      aria-label="Dialysis awareness visual placeholder"
    >
      <div className="rounded-[1.5rem] bg-gradient-to-br from-green/10 via-sky to-white p-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green text-white shadow-card">
            <Droplets size={28} aria-hidden="true" />
          </span>
          <Activity className="text-teal" size={38} aria-hidden="true" />
        </div>
        <p className="mt-10 font-heading text-2xl font-bold text-navy">Dialysis Care Guidance</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          Educational visual placeholder. Approved dialysis graphics will be added after review.
        </p>
      </div>
    </div>
  );
}

export function DialysisCareHighlight() {
  const dialysisImage = imageManifest?.dialysis?.[0];
  const hasApprovedImage = isApprovedImage(dialysisImage);

  return (
    <section className="bg-sky py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <MotionReveal direction="left">
            {hasApprovedImage ? (
              <img
                src={dialysisImage.src}
                alt={dialysisImage.alt}
                className="w-full rounded-[2rem] border border-white object-cover shadow-card"
              />
            ) : (
              <DialysisVisualFallback />
            )}
          </MotionReveal>

          <MotionReveal direction="right" delay={0.08}>
            <SectionHeader
              eyebrow={dialysisHighlightData.eyebrow}
              heading={dialysisHighlightData.heading}
              description={dialysisHighlightData.description}
              className="mb-6"
            />
            <ul className="space-y-3">
              {dialysisHighlightData.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 rounded-2xl border border-green/15 bg-white p-4 text-sm leading-6 text-text shadow-card">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-green" size={20} aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button href={dialysisHighlightData.cta.href} variant="secondary">
                {dialysisHighlightData.cta.label}
              </Button>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
