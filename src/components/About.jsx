import React from 'react';
import profile from '../images/profile.jpg';
import AboutIcons from './AboutIcons';
import volleyball from '../images/volleyball.png';
import book from '../images/book.png';
import dumbbell from '../images/dumbbell.png';
import binoculars from '../images/binoculars.png';

const About = () => {
  return (
    <section className='about' id='about-me'>

      <div className="about-container">
        <div className="header">About Me</div>

        <div className="about-me-content">
          <img className="picture" src={profile} alt="profile-pic" />
          <div className='about-me-area'>
            <div className="info-paragraph">
              <p className='text'>
                &#128075; Hi, I'm Harris!! I'm currently an Computer Engineer Undergraduate at Stevens Institute of Technology. I'll be graduating with a Bachelors of Engineering in Computer Engineering with a concentration in Software Engineering and Development in 2024, and finish my Masters Degree the following year, 2025. I've always enjoyed technology, problem solving with others, and plan on pursing this in my future career. In my free time I enjoy playing volleyball, working out, sightseeing, and reading!
              </p>
            </div>
            <div className='icons'>
              <AboutIcons
                image={volleyball}
              />
              <AboutIcons 
                image={book}
              />
              <AboutIcons
                image={dumbbell}
              />
              <AboutIcons
                image={binoculars}
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About