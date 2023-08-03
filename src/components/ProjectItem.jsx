import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({setRemove, image, title, link}) => {
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => {setRemove(true)}}>
      <div className='project-border'>
        <div>
          <div className="project-title">{title}</div>
          <img src={image} className='project-image' alt='project'/>
        </div>
      </div>
    </Link>
  )
}

export default ProjectItem