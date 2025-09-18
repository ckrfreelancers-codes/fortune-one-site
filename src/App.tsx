import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import ChannelPartners from "./pages/ChannelPartners";
import NRISupport from "./pages/NRISupport";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brandoffwhite text-branddark">
      {/* Navbar (fixed) */}
      <Navbar />

      {/* main content - add top padding so navbar doesn't overlap */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<ChannelPartners />} />
          <Route path="/nri-support" element={<NRISupport />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
