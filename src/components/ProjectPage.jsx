import React from 'react';
import { FaGithub, FaPlay, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectPage = ({ image, title, repo, link, description }) => {
  return (
    <article className='project-page' data-aos="fade-down" data-aos-once="true" >
      <Link to='/' className='return-button'><FaArrowLeft /></Link>
      <div className="project-page-container">
        <div className="header">{title}</div>
        <img src={image} alt="project" className="project-page-image" />

        <div className="buttons">
          <a href={repo} target='_blank' rel='noreferrer' className='repo-button'> <FaGithub /> Github Repository </a>
          <a href={link} target='_blank' rel='noreferrer' className='demo-button'> <FaPlay /> Demo</a>
        </div>

        <div className="project-description">
          {description}
        </div>
      </div>
    </article>
  )
}

export default ProjectPage