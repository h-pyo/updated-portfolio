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
      <section className='md:p-0 md:grid md:place-content-center w-[100vw] px-[50px] max-w-full absolute z-10 bg-transparent' data-aos="fade-right" data-aos-once="true" id='hero'>
      <div className='md:ml-0 md:items-center md:flex md:flex-col h-[200px] mt-[30vh] ml-[200px]'>
        <div className='font-bold text-[3.8rem]'>Harris Pyo</div>
        <div className="sm:text-center text-[1.7rem] font-bold">
          I'm 
          <TypeAnimation
            sequence={[
              " a Software Engineer",
              1000,
              " a Computer Engineer",
              1000,
              " an Merck Intern",
              1000,
              " a Volleyball Enthusiast",
              1000,
            ]}
            style={{ fontSize: "1.7rem", fontWeight: "bold", color:"#222831" }}
            repeat={Infinity}
          />
        </div>
        <div className="mt-[17px] text-[1.5rem] flex">
          <a href='https://drive.google.com/file/d/1wjLtCGASYlNIUx_DaO4gtKjBHy5ihFQe/view?usp=sharing' target='_blank' rel='noreferrer'><IoDocumentText className='mr-4 text-inherit hover:opacity-80' /></a>
          <a href='https://www.linkedin.com/in/harris-pyo/' target='_blank' rel='noreferrer'><FaLinkedinIn className='mr-4 text-inherit hover:opacity-80' /></a>  
          <a href='https://github.com/h-pyo' target='_blank' rel='noreferrer'><FaGithub className='mr-4 text-inherit hover:opacity-80' /></a>
        </div>
      </div>
    </section>
  )
}
export default Hero