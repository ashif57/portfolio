'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="px-6 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Hi, I&apos;m <span className="text-neon-cyan">Ashif</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text-light">
            Backend Developer | AI-ML Enthusiast
          </h2>
          <p className="text-lg text-text-light mb-6 max-w-xl text-justify leading-relaxed">
            Enthusiastic and adaptable Final-year Computer Science Engineering student with a strong
            foundation in Python and a growing interest in backend development using the Django framework.
            Familiar with core concepts in AI/ML and web development, and continuously learning new
            technologies. Flexible and open to working across diverse tech stacks, with a passion for solving
            real-world problems through technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://drive.google.com/file/d/1vR0D8jCI7PE_GkdDIwHAC05xKE8IZ32n/view?usp=sharing" className="btn-primary">
              <i className="fas fa-file-alt mr-2"></i> Resume
            </a>
            <a href="https://github.com/ashif57" className="btn-secondary">
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ashifnavheed57/" className="btn-primary">
              <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-[42rem]">
            <Spline scene="https://prod.spline.design/YYjaLjTUabT2qgel/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;