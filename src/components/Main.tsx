import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Nav';
import ParticleBackground from './ParticleBackground';

const Main = () => {
  return (
    <>
      <Nav />
      <div id="animated-area">
        <Hero />
        <ParticleBackground />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>

  )
}

export default Main