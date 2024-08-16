import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Lab.mp4' autoPlay loop muted />
      <h1>LET'S GET CHECKED</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Button 
        to="/symptoms" 
        buttonStyle="btn--primary" 
        buttonSize="btn--large">
          Know More
        </Button>
        <Button 
        to="/tests" 
        buttonStyle="btn--primary" 
        buttonSize="btn--large"
        onClick={console.log('hey')}>
          Take Test<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

