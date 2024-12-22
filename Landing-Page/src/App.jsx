import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import GuideComponent from "./components/GuideComponent";
import AppDownloadPromotion from "./components/AppDownloadPromotion";
import PartnersSection from "./components/PartnersSection";
import TestimonialRequest from "./components/Testimonial";
import FAQs from "./components/FAQs";
// import LocomotiveScroll from 'locomotive-scroll';

// const locomotiveScroll = new LocomotiveScroll();

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GuideComponent />
      <AppDownloadPromotion />
      <PartnersSection />
      <TestimonialRequest />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;