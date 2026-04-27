import { Newspaper } from 'lucide-react';
import { mediaData } from '../../data/mediaData.js';
import { mediaPreviewConfig } from '../../data/homeData.js';
import { Button, Container, MotionReveal, SectionHeader } from '../common/index.js';

function getApprovedMediaItems() {
  return mediaData
    .filter((item) => item.approvalStatus === 'approved' && item.privacyStatus === 'clear' && item.frontendUseAllowed)
    .slice(0, 3);
}

export function MediaCoveragePreview() {
  const approvedItems = getApprovedMediaItems();

  return (
    <section className="bg-bgAlt py-16 md:py-20">
      <Container>
        <SectionHeader
          eyebrow={mediaPreviewConfig.eyebrow}
          heading={mediaPreviewConfig.heading}
          description={mediaPreviewConfig.description}
          align="center"
          className="mb-10"
        />

        {approvedItems.length ? (
          <div className="grid gap-5 md:grid-cols-3">
            {approvedItems.map((item) => (
              <MotionReveal key={item.id} as="article" className="rounded-card border border-border bg-white p-5 shadow-card">
                <img
                  src={item.thumbnail}
                  alt={item.alt || 'Newspaper coverage of kidney awareness - Dr. Rahul Tengse'}
                  className="mb-4 aspect-video w-full rounded-2xl object-cover"
                />
                <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
              </MotionReveal>
            ))}
          </div>
        ) : (
          <MotionReveal>
            <div className="mx-auto max-w-2xl rounded-[2rem] border border-dashed border-purple/30 bg-white p-8 text-center shadow-card">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple/10 text-purple">
                <Newspaper size={28} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">Media items pending review</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{mediaPreviewConfig.emptyState}</p>
            </div>
          </MotionReveal>
        )}

        <div className="mt-10 flex justify-center">
          <Button href={mediaPreviewConfig.cta.href} variant="outline">
            {mediaPreviewConfig.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
