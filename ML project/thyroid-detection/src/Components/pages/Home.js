import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import SymptomChecker from './Symptomchecker';

function Home() {
  return (
    <>
      <HeroSection />
      <SymptomChecker/>
    </>
  );
}

export default Home;