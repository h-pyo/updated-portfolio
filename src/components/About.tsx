import profile from '../images/outside-profile-pic.jpg';
import AboutIcons from './AboutIcons';
import volleyball from '../images/volleyball.png';
import book from '../images/book.png';
import dumbbell from '../images/dumbbell.png';
import binoculars from '../images/binoculars.png';

const About = () => {
  return (
    <section className='about' data-aos="fade-up" data-aos-once="true"  id='about-me'>

      <div className="about-container">
        <div className="header">About Me</div>

        <div className="about-me-content">
          <img className="picture" src={profile} alt="profile-pic" />
          <div className='about-me-area'>
            <div className="info-paragraph">
              <p className='text'>
                &#128075; Hi, I'm Harris!! I'm currently majoring in Computer Engineering at Stevens Institute of Technology. I'll be graduating with my Bachelors and a concentration in Software Engineering and Development in 2024. I plan on finishing my Masters Degree the following year in 2025. I've always enjoyed technology, problem solving with others, and hope to be able to pursue this in my future career. In my free time I enjoy playing volleyball, working out, sightseeing, and reading!
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