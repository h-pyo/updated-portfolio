import React from 'react';
import { FaGithub, FaPlay, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectPage = ({setRemove, image, title, repo, link, description }) => {
  return (
    <article className='project-page'>
      <Link to='/' className='return-button' onClick={() => {setRemove(false)}}><FaArrowLeft /></Link>
      <div className="project-page-container">
        <div className="header">{title}</div>
        <img src={image} alt="project" className="project-page-image" />

        <div className="buttons">
          <a href={repo} target='_blank' className='repo-button'> <FaGithub /> Github Reposity </a>
          <a href={link} target='_blank' className='demo-button'> <FaPlay /> Demo</a>
        </div>

        <div className="project-description">
          {description}
        </div>
      </div>
    </article>
  )
}

export default ProjectPage