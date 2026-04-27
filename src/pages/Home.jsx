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

function Home() {
  return (
    <>
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
