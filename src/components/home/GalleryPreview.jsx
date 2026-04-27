import { Image } from 'lucide-react';
import { galleryData } from '../../data/galleryData.js';
import { galleryPreviewConfig } from '../../data/homeData.js';
import { Button, Container, MotionReveal, SectionHeader } from '../common/index.js';

function getApprovedGalleryItems() {
  return galleryData
    .filter((item) => item.approvalStatus === 'approved' && item.privacyStatus === 'clear' && item.frontendUseAllowed)
    .slice(0, 8);
}

export function GalleryPreview() {
  const approvedItems = getApprovedGalleryItems();

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeader
          eyebrow={galleryPreviewConfig.eyebrow}
          heading={galleryPreviewConfig.heading}
          description={galleryPreviewConfig.description}
          align="center"
          className="mb-10"
        />

        {approvedItems.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approvedItems.map((item) => (
              <MotionReveal key={item.id} className="overflow-hidden rounded-card border border-border bg-bgAlt shadow-card">
                <img src={item.thumbnail} alt={item.alt || item.caption || item.title} className="aspect-square w-full object-cover" />
              </MotionReveal>
            ))}
          </div>
        ) : (
          <MotionReveal>
            <div className="mx-auto max-w-2xl rounded-[2rem] border border-dashed border-teal/30 bg-bgAlt p-8 text-center shadow-card">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <Image size={28} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">Gallery images pending approval</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{galleryPreviewConfig.emptyState}</p>
            </div>
          </MotionReveal>
        )}

        <div className="mt-10 flex justify-center">
          <Button href={galleryPreviewConfig.cta.href} variant="primary">
            {galleryPreviewConfig.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
