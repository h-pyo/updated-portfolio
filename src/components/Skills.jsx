import React from 'react';
import SkillItem from './SkillItem';
import js from '../images/js.png';
import HTML from '../images/html-5.png';
import CSS from '../images/css-3.png';
import java from '../images/java.png';
import c from '../images/c.png';
import python from '../images/python.png';
import react from '../images/atom.png';
import node from '../images/nodejs.png';
import boot from '../images/bootstrap.png';


const Skills = () => {
  return (
    <section className='skills' id='qualifications'>
      <div>
        <div className="header">Skills and Experience</div>
        <div className="resume">
          <a className='resume-button' href='https://drive.google.com/file/d/1wjLtCGASYlNIUx_DaO4gtKjBHy5ihFQe/view' target='_blank'>Resume</a>
        </div>
        <div className="skill-container">
          <SkillItem
            image={js}
            description="Javascript"
          />
          <SkillItem
            image={HTML}
            description="HTML"
          />
          <SkillItem
            image={CSS}
            description="CSS"
          />
          <SkillItem
            image={java}
            description="Java"
          />
          <SkillItem
            image={c}
            description="C++"
          />
          <SkillItem
            image={python}
            description="Python"
          />
          <SkillItem
            image={react}
            description="React.js"
          />
          <SkillItem
            image={node}
            description="Node.js"
          />
          <SkillItem
            image={boot}
            description="Bootstrap"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills