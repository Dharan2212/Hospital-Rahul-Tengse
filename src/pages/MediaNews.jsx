import { useState } from 'react';
import { mediaData } from '../data/mediaData.js';
import { Container, CTASection, Disclaimer, PageHero, PlaceholderVisual, SEO, SectionHeader } from '../components/common';
import { MediaCard, isRenderableMedia } from '../components/media/MediaCard.jsx';
import { ImageModal } from '../components/gallery/ImageModal.jsx';
import { siteData } from '../data/siteData.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function MediaNews() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const approvedMedia = mediaData.filter(isRenderableMedia);
  const pendingCount = mediaData.filter((m) => !isRenderableMedia(m)).length;
  const pageSeo = getSeoByPath('/media-news');

  return (
    <>
      <SEO path="/media-news" schema={getSchemaForPage(pageSeo, siteData)} />
      <PageHero
        eyebrow="Media & News"
        title="Media Coverage & News Recognition"
        description="Public media coverage and newspaper recognition for kidney health awareness, dialysis care, and nephrology education by Dr. Rahul Bhaskarrao Tengse."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Media & News' }]}
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'primary' }}
        background="gradient"
      />

      {/* Privacy notice */}
      <section className="bg-white py-8" aria-label="Privacy notice">
        <Container>
          <Disclaimer
            type="media"
            text="Newspaper images are shown as privacy-safe media cards. Patient-identifiable details including names, faces, phone numbers, and medical record information have been removed or obscured. Media is displayed only after client approval and privacy review."
          />
        </Container>
      </section>

      {/* Media cards grid */}
      <section className="bg-bgAlt py-14 md:py-20" aria-labelledby="media-grid-heading">
        <Container>
          <SectionHeader
            eyebrow="Coverage"
            heading="Kidney care media coverage"
            description="Dr. Rahul Bhaskarrao Tengse has been featured in local and regional publications for kidney health awareness and community education programmes in Parbhani."
            align="center"
            id="media-grid-heading"
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
                title="Approved media coverage cards pending"
                description="Approved and privacy-reviewed media coverage cards will appear here once client sign-off is complete. Raw newspaper screenshots are not published."
                icon="file"
                tone="purple"
              />
            </div>
          )}

          {/* Pending count notice (dev-only guidance, kept subtle) */}
          {pendingCount > 0 && approvedMedia.length === 0 && (
            <p className="mt-6 text-center text-xs text-muted">
              {pendingCount} media item{pendingCount > 1 ? 's' : ''} pending client approval and privacy review.
            </p>
          )}
        </Container>
      </section>

      {/* About the media work */}
      <section className="bg-white py-14 md:py-20" aria-labelledby="media-about-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-teal">About this coverage</p>
            <h2 id="media-about-heading" className="mt-3 font-heading text-2xl font-bold text-navy md:text-3xl">
              Kidney health awareness in Parbhani
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Dr. Rahul Bhaskarrao Tengse is committed to community-level kidney health education — participating in awareness drives, public programmes, and patient education initiatives across Parbhani and the surrounding region.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Local and regional media have covered kidney awareness activities including education on CKD stages, dialysis care, diabetic kidney disease, and kidney transplant guidance. This page presents that media coverage in a privacy-safe format.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Request a Kidney Care Consultation"
        description="For kidney disease, dialysis care guidance, transplant evaluation, or report review — submit a request and the team will contact you to confirm."
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
