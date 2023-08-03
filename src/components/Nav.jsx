import React from 'react'
import { FaLaptopCode } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className='nav-header'>
      {/* <FaLaptopCode style={{fontSize: '75px', flex:1}} /> */}
      <ul className='nav-list'>
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
    </nav>
  )
}

export default Nav