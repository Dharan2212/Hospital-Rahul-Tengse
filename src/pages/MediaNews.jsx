import { useState } from 'react';
import { mediaData } from '../data/mediaData.js';
import { Container, CTASection, Disclaimer, PageHero, PlaceholderVisual, SectionHeader } from '../components/common';
import { MediaCard, isRenderableMedia } from '../components/media/MediaCard.jsx';
import { ImageModal } from '../components/gallery/ImageModal.jsx';

function MediaNews() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const approvedMedia = mediaData.filter(isRenderableMedia);

  return (
    <>
      <PageHero
        eyebrow="Media and news"
        title="Media Coverage & News Recognition"
        description="Privacy-safe media coverage and public awareness references will be shown only after client approval and redaction review."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Media & News' }]}
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'primary' }}
        background="gradient"
      />

      <section className="bg-white py-8">
        <Container>
          <Disclaimer
            type="media"
            text="Newspaper images are shown as media coverage cards. Patient-identifiable details have been removed or obscured."
          />
        </Container>
      </section>

      <section className="bg-bgAlt py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Coverage"
            heading="Media coverage cards"
            description="Only approved and privacy-safe media items are displayed here. Raw newspaper screenshots are not published."
            align="center"
          />
          {approvedMedia.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {approvedMedia.map((item) => (
                <MediaCard key={item.id} item={item} onView={setSelectedMedia} />
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <PlaceholderVisual
                title="Approved media coverage pending"
                description="Approved media coverage will be added after privacy review and client approval."
                icon="file"
                tone="purple"
              />
            </div>
          )}
        </Container>
      </section>

      <CTASection
        heading="Request a Kidney Care Appointment"
        description="Submit an appointment request for consultation, report review, dialysis care guidance, or kidney transplant guidance."
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'secondary' }}
        secondaryCTA={{ label: 'View Gallery', href: '/gallery', variant: 'subtle' }}
        background="gradient"
      />

      <ImageModal
        image={selectedMedia ? { ...selectedMedia, caption: selectedMedia.summary, category: 'Media Coverage' } : null}
        isOpen={Boolean(selectedMedia)}
        onClose={() => setSelectedMedia(null)}
      />
    </>
  );
}

export default MediaNews;
