import React from 'react'
import ProjectItem from './ProjectItem';
import todo from '../images/todo-image.JPG';
import weather from '../images/weather-image.JPG';

const Projects = ({setRemove}) => {
  return (
    <section className="projects" id='project-section'>
      <div>
        <div className="header">Projects</div>
        <div className="project-container">
          <ProjectItem
            setRemove={setRemove}
            image={todo}
            title="Todo List Website"
            link="project-1"
          />
          <ProjectItem
            setRemove={setRemove}
            image={weather}
            title="Weather App"
            link="project-2"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects