import {
  AboutDoctorPreview,
  AppointmentCTABand,
  ContactPreview,
  DialysisCareHighlight,
  GalleryPreview,
  HomeFAQSection,
  HomeHero,
  HospitalAssociationPreview,
  KidneyTransplantHighlight,
  MediaCoveragePreview,
  PatientAwarenessPreview,
  ServicesOverview,
  TrustHighlights
} from '../components/home/index.js';
import { SEO } from '../components/common';
import { siteData } from '../data/siteData.js';
import { getSeoByPath } from '../utils/seo.js';
import { getSchemaForPage } from '../utils/schema.js';

function Home() {
  const pageSeo = getSeoByPath('/');

  return (
    <>
      <SEO path="/" schema={getSchemaForPage(pageSeo, siteData)} />
      <HomeHero />
      <TrustHighlights />
      <AboutDoctorPreview />
      <HospitalAssociationPreview />
      <ServicesOverview />
      <DialysisCareHighlight />
      <KidneyTransplantHighlight />
      <PatientAwarenessPreview />
      <AppointmentCTABand />
      <MediaCoveragePreview />
      <GalleryPreview />
      <HomeFAQSection />
      <ContactPreview />
    </>
  );
}

export default Home;
