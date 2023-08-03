import React from 'react'

const AboutIcons = ({image}) => {
  return (
    <div className='icon-border'>
      <img src={image} className='about-icon' alt="icon" />
    </div>
  )
}

export default AboutIcons