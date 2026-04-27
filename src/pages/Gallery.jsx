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
        description="Approved doctor, hospital, awareness, dialysis, media, and kidney-care images will be shown after client approval and privacy review."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'primary' }}
        background="gradient"
      />

      <section className="bg-white py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Photo gallery"
            heading="Approved image gallery"
            description="Filter tabs are ready for approved assets. Patient photographs are not included in this gallery."
            align="center"
          />
          <div className="mt-10">
            <GalleryGrid images={galleryData} />
          </div>
          <Disclaimer type="privacy" compact className="mt-8" text="Patient photographs are not included in this gallery. Images are displayed only after client approval and privacy review." />
        </Container>
      </section>

      <CTASection
        heading="Book a Kidney Care Appointment"
        description="Use the appointment page to request kidney care consultation. The team will contact you to confirm."
        primaryCTA={{ label: 'Book Appointment', href: '/appointment', variant: 'secondary' }}
        background="gradient"
      />
    </>
  );
}

export default Gallery;
