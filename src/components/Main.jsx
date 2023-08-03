import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Nav';

const Main = ({setRemove}) => {
  return (
    <>
      <Nav />
      <div id="animated-area">
        <Hero />
        <div id='canvas' />
      </div>
      <About />
      <Skills />
      <Projects 
        setremove={setRemove}
      />
      <Contact />
    </>

  )
}

export default Main