import { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
      <section className='home' data-aos="fade-right" data-aos-once="true" id='hero'>
      <div className='description-area'>
        <div className='title'>Harris Pyo</div>
        <div className="animated-text">
          I'm 
          <TypeAnimation
            sequence={[
              " a Computer Engineer",
              1000,
              " a Software Engineer",
              1000,
              " an Undergraduate Researcher",
              1000,
              " a Volleyball Enthusiast",
              1000,
            ]}
            style={{ fontSize: "1.7rem", fontWeight: "bold", color:"#222831" }}
            repeat={Infinity}
          />
        </div>
        <div className="social-icons">
          <a href='https://drive.google.com/file/d/1wjLtCGASYlNIUx_DaO4gtKjBHy5ihFQe/view?usp=sharing' target='_blank' rel='noreferrer'><IoDocumentText className='social-icon' /></a>
          <a href='https://www.linkedin.com/in/harris-pyo/' target='_blank' rel='noreferrer'><FaLinkedinIn className='social-icon' /></a>  
          <a href='https://github.com/h-pyo' target='_blank' rel='noreferrer'><FaGithub className='social-icon' /></a>
        </div>
      </div>
    </section>
  )
}
export default Hero