import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Web3 Wanderer</h1>
          <p className="hero-subtitle">
            Exploring the decentralized future, <br/>one blockchain at a time
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
