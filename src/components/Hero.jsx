import { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import animatedBackground from './geometry';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  animatedBackground();
  return (
      <section className='home' data-aos="fade-right" data-aos-once="true" id='hero'>
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
          <a href='https://drive.google.com/file/d/1wjLtCGASYlNIUx_DaO4gtKjBHy5ihFQe/view?usp=sharing' target='_blank'><IoDocumentText className='social-icon' /></a>
          <a href='https://www.linkedin.com/in/harris-pyo/' target='_blank'><FaLinkedinIn className='social-icon' /></a>  
          <a href='https://github.com/h-pyo' target='_blank'><FaGithub className='social-icon' /></a>
        </div>
      </div>
    </section>
  )
}
export default Hero