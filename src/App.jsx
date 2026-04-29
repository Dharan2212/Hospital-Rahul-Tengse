import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell bg-white text-text">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        
        <Header />
        <main id="main-content" tabIndex="-1">
          <ScrollToTop />
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
