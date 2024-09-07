import ProjectItem from './ProjectItem';
import todo from '../images/todo-image.png';
import weather from '../images/weather-image.png';
import fitness from '../images/fitness-image.png';
import seniorDesign from '../images/seniorDesign.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="py-[60px] px-[100px] grid place-content-center" id='project-section' data-aos="fade-up" data-aos-once="true">
      <div>
        <div className="text-[3rem] font-bold text-center underline decoration-2 decoration-[#9ea0a5] underline-offset-[10px]">Projects</div>
        <div className="lg:w-[800px] sm:w-[400px] flex justify-center flex-wrap w-[1200px] mt-[30px]">
          <ProjectItem
            image={seniorDesign}
            title="Senior Design Project"
            link="project-1"
          />
          <ProjectItem
            image={fitness}
            title="Fitness App"
            link="project-2"
          />
          <ProjectItem
            image={todo}
            title="Todo List Website"
            link="project-3"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects