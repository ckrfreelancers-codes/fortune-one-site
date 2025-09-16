import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import ChannelPartners from './pages/ChannelPartners';
import NRISupport from './pages/NRISupport';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* ✅ Full screen gradient background applied everywhere */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex flex-col">
        
        {/* Navbar stays on top */}
        <Navbar />

        {/* Main page routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/partners" element={<ChannelPartners />} />
            <Route path="/nri-support" element={<NRISupport />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
