import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import DialysisCare from '../pages/DialysisCare.jsx';
import KidneyTransplant from '../pages/KidneyTransplant.jsx';
import PatientAwareness from '../pages/PatientAwareness.jsx';
import MediaNews from '../pages/MediaNews.jsx';
import Gallery from '../pages/Gallery.jsx';
import Appointment from '../pages/Appointment.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/dialysis-care" element={<DialysisCare />} />
      <Route path="/kidney-transplant-guidance" element={<KidneyTransplant />} />
      <Route path="/patient-awareness" element={<PatientAwareness />} />
      <Route path="/media-news" element={<MediaNews />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
