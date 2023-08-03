import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import animatedBackground from './geometry';

const Hero = () => {
  animatedBackground();
  return (
      <section className='home' id='hero'>
      <div className='description-area'>
        <div className='title'>Hariris Pyo</div>
        <div className="animated-text">
          I'm a 
          <TypeAnimation
            sequence={[
              " Computer Engineer",
              1000,
              " Software Engineer",
              1000,
              " Undergraduate Researcher",
              1000,
              " Volleyball Enthusiast",
              1000,
            ]}
            style={{ fontSize: "1.8rem", color:"#222831" }}
            repeat={Infinity}
          />
        </div>
        <div className="social-icons">
          <IoDocumentText className='social-icon' />
          <FaLinkedinIn className='social-icon' />
          <FaGithub className='social-icon' />
        </div>
      </div>
    </section>
  )
}
export default Hero