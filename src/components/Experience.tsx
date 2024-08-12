import { VerticalTimeline } from 'react-vertical-timeline-component';
import ExperienceCard from './ExperienceCard';
import { workExperiences } from './config/experiences';
import { educations } from './config/experiences';
import 'react-vertical-timeline-component/style.min.css';
import EducationCard from './EducationCard';


const Experience = () => {
  return (
    <section className='grid place-content-center py-[60px] px-[100px] w-[100vw] max-w-full' data-aos="fade-up" data-aos-once="true" id='experience'>
      <div className="text-[3rem] font-bold text-center underline decoration-2 decoration-[#9ea0a5] underline-offset-[10px]">Experience</div>
      <div className="mt-[25px] grid place-content-center">
          <a 
            className='no-underline text-inherit w-[120px] h-[45px] flex flex-col justify-center text-center font-bold text-[1.3rem] border-solid border-light border-2 rounded-[20px] hover:transition hover:duration-300 hover:bg-light hover:text-dark' 
            href='https://drive.google.com/file/d/1wjLtCGASYlNIUx_DaO4gtKjBHy5ihFQe/view' 
            target='_blank' 
            rel='noreferrer'>
              Resume
          </a>
        </div>
      <div className="flex flex-col ">
        <div className='text-3xl font-bold mt-10 ml-12'>Education</div>
        <VerticalTimeline layout='1-column-left'>
          {
            educations.map((education, index) => (
              <EducationCard
                key={`education-${index}`}
                education={education}
              />
            ))
          }
        </VerticalTimeline>

        <div className='text-3xl font-bold mt-10 ml-12'>Work Experience</div>
        <VerticalTimeline layout='1-column-left'>
          {
            workExperiences.map((experience, index) => (
              <ExperienceCard
                key={`workExperience-${index}`}
                experience={experience}
              />
            ))
          }
        </VerticalTimeline>
      </div>

    </section>
  )
}

export default Experience