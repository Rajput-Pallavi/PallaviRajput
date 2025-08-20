import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* Left Side */}
      <div className="hero-left">
        <h1>
          <span>I'm Pallavi Rajput,</span>
          <br />
          <h6>Frontend Developer</h6>
        </h1>

        <p>
          I’m a Frontend Developer passionate about crafting clean, responsive, and user-friendly web applications. 
          I specialize in turning design concepts into interactive, functional websites using modern technologies like 
          HTML, CSS, JavaScript, and React. With a focus on performance, accessibility, and design detail, I aim to 
          deliver seamless digital experiences that engage users.
        </p>
        
        <div className="hero-action">
          <div className="hero-resume">Resume</div>

          <div className="hero-icons">
            <a href="mailto:yourmail@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img className="astronaut" src="/img4.png" alt="Floating astronaut" />
        <div className="astro-glow"></div>
      </div>
    </div>
  )
}

export default Hero
