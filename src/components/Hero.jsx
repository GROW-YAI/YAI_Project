import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>
          AFFORDABLE CORN MILLING <br />
          SOLUTIONS
        </h1>
        <p>Locally-built machines for communities</p>

        <a target="_blank" href="https://youtu.be/wBNAVniQV0Y" rel="noopener noreferrer">
          <button className="css-button-sliding-to-left--blue">
            Watch Demo
          </button>
        </a>
        <a href="#contact">
          <button className="css-button-sliding-to-left--blue">
            Request Full Demo
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;