import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Nav';
import ParticleBackground from './ParticleBackground';
import Experience from './Experience';

const Main = () => {
  return (
    <>
      <Nav />
      <div className="relative h-[100vh] mb-[100px] bg-gradient-to-b from-[#00ADB5] to-[#222831] ">
        <Hero />
        <ParticleBackground />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>

  )
}

export default Main