import { useState } from 'react';
import 'animate.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='sm:p-0 pt-[15px] top-0 fixed z-[1000] flex w-[100vw] max-w-full bg-transparent' data-aos="fade-left" data-aos-once="true">
      <div className='sm:flex hover:cursor-pointer hover:opacity-70 absolute z-[100000] top-[20px] right-[25px] hidden flex-col justify-between w-[30px] h-[25px]' onClick={() => setMenuOpen(!menuOpen)}>
        <span className='h-[5px] w-full bg-light rounded-sm' />
        <span className='h-[5px] w-full bg-light rounded-sm' />
        <span className='h-[5px] w-full bg-light rounded-sm' />
      </div>
      <div className={menuOpen? "w-full animate__animated animate__fadeInUp" : "w-full"}>
      <ul className={menuOpen ? "sm:flex sm:flex-col sm:p-0 sm:bg-dark2 sm:opacity-95 flex list-none flex-1 justify-right pr-[50px] items-center" : "sm:hidden sm:flex-col sm:p-0 sm:bg-dark2 sm:opacity-95 flex list-none flex-1 place-content-end pr-[50px] items-center"}>
        <li className='sm:py-3 sm:px-2 sm:w-full sm:text-center'>
          <a className=' text-light ml-[30px] text-[1.3rem] no-underline hover:underline underline-offset-[5px]' href='#hero'>Home</a>
        </li>
        <li className='sm:py-3 sm:px-2 sm:w-full sm:text-center'>  
          <a className='text-light ml-[30px] text-[1.3rem] no-underline hover:underline underline-offset-[5px]' href='#about-me'>About</a>
        </li>
        <li className='sm:py-3 sm:px-2 sm:w-full sm:text-center'>
          <a className='text-light ml-[30px] text-[1.3rem] no-underline hover:underline underline-offset-[5px]' href='#qualifications'>Skills</a>
        </li>
        <li className='sm:py-3 sm:px-2 sm:w-full sm:text-center'>
          <a className='text-light ml-[30px] text-[1.3rem] no-underline hover:underline underline-offset-[5px]' href='#project-section'>Projects</a>
        </li>
        <li className='sm:py-3 sm:px-2 sm:w-full sm:text-center'>
          <a className='text-light ml-[30px] text-[1.3rem] no-underline hover:underline underline-offset-[5px]' href='#contact-form'>Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav