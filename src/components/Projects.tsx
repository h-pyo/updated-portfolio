import ProjectItem from './ProjectItem';
import todo from '../images/todo-image.png';
import weather from '../images/weather-image.png';
import fitness from '../images/fitness-image.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="projects" id='project-section' data-aos="fade-up" data-aos-once="true">
      <div>
        <div className="header">Projects</div>
        <div className="project-container">
          <ProjectItem
            image={todo}
            title="Todo List Website"
            link="project-1"
          />
          <ProjectItem
            image={weather}
            title="Weather App"
            link="project-2"
          />
          <ProjectItem
            image={fitness}
            title="Fitness App"
            link="project-3"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects