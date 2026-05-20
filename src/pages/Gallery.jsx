import { galleryData } from '../data/galleryData.js';
import { Container, CTASection, Disclaimer, PageHero, SEO, SectionHeader } from '../components/common';
import { GalleryGrid } from '../components/gallery/GalleryGrid.jsx';
import { siteData } from '../data/siteData.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function Gallery() {
  const pageSeo = getSeoByPath('/gallery');

  return (
    <>
      <SEO path="/gallery" schema={getSchemaForPage(pageSeo, siteData)} />
      <PageHero
        eyebrow="Gallery"
        title="Photo Gallery"
        description="Approved images of Dr. Rahul Bhaskarrao Tengse, Shivneri Super Speciality & Surya ICU Hospital, kidney awareness programmes, and dialysis care facilities in Parbhani."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'primary' }}
        background="gradient"
      />

      <section className="bg-white py-14 md:py-20" aria-labelledby="gallery-grid-heading">
        <Container>
          <SectionHeader
            eyebrow="Photo gallery"
            heading="Hospital, awareness & kidney care images"
            description="All images are displayed only after client approval and privacy review. Use the filter tabs below to browse by category."
            align="center"
            id="gallery-grid-heading"
          />
          <div className="mt-10">
            <GalleryGrid images={galleryData} />
          </div>
          <Disclaimer
            type="privacy"
            compact
            className="mt-8"
            text="Patient photographs are not included in this gallery. All images are displayed only after client approval and individual privacy review to ensure no patient-identifiable information is visible."
          />
        </Container>
      </section>

      <CTASection
        heading="Book a Kidney Care Appointment"
        description="Use the appointment form to request kidney care consultation. The hospital team will contact you to confirm the date and timing."
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'secondary' }}
        secondaryCTA={{ label: 'View Media Coverage', href: '/media-news', variant: 'subtle' }}
        background="gradient"
      />
    </>
  );
}

export default Gallery;
