import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MaintenanceSystem from './pages/MaintenanceSystem';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PortalLogin from './pages/PortalLogin';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#191b1f] text-gray-200 selection:bg-[#FD6703] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maintenance-system" element={<MaintenanceSystem />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<PortalLogin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
