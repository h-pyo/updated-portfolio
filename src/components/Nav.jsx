import { useState, useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <nav className='nav-header' data-aos="fade-left" data-aos-once="true">
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      <div className={menuOpen? "nav-container animate__animated animate__fadeInUp" : "nav-container"}>
      <ul className={menuOpen ? "open nav-list" : "nav-list"}>
        <li className='list-item'>
          <a href='#hero'>Home</a>
        </li>
        <li className='list-item'>
          <a href='#about-me'>About</a>
        </li>
        <li className='list-item'>
          <a href='#qualifications'>Skills</a>
        </li>
        <li className='list-item'>
          <a href='#project-section'>Projects</a>
        </li>
        <li className='list-item'>
          <a href='#contact-form'>Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav