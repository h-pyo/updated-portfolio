import profile from '../images/outside-profile-pic.jpg';
import AboutIcons from './AboutIcons';
import volleyball from '../images/volleyball.png';
import book from '../images/book.png';
import dumbbell from '../images/dumbbell.png';
import binoculars from '../images/binoculars.png';

const About = () => {
  return (
    <section className='grid place-content-center py-[60px] px-[100px] w-[100vw] max-w-full' data-aos="fade-up" data-aos-once="true"  id='about-me'>

      <div className="lg:w-[450px] sm:w-[400px] flex flex-col w-[1200px]">
        <div className="text-[3rem] font-bold text-center underline decoration-2 decoration-[#9ea0a5] underline-offset-[10px]">About Me</div>

        <div className="lg:flex-col mt-[30px] flex">
          <img className="lg:w-400px lg:m-0 lg:self-center sm:w-[380px] w-[400px] mr-[50px] flex-grow-1 border-solid border-dark2 border-[5px] rounded-[25px]" src={profile} alt="profile-pic" />
          <div className='flex-grow-2 mt-[30px]'>
            <div className="info-paragraph">
              <p className='text-[1.2rem]'>
                &#128075; Hi, I'm Harris!! I'm currently majoring in Computer Engineering at Stevens Institute of Technology. I'll be graduating with my Bachelors and a concentration in Software Engineering and Development in 2024. I plan on finishing my Masters Degree the following year in 2025. I've always enjoyed technology, problem solving with others, and hope to be able to pursue this in my future career. In my free time I enjoy playing volleyball, working out, sightseeing, and reading!
              </p>
            </div>
            <div className='lg:w-full lg:flex-wrap lg:ml-[40px] sm:w-[365px]  flex mt-[25px] ml-[10px]'>
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