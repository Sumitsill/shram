import React from 'react';
import Header from '../common/Header';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import GMaps from '../sections/GMaps';
import Contact from '../sections/Contact';
import Footer from '../common/Footer';
import VoiceAssistant from '../sections/voice assistance';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <GMaps />
      <VoiceAssistant />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;