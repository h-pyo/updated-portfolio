const AboutIcons = ({image}: {image: string}) => {
  return (
    <div className='icon-border'>
      <img src={image} className='about-icon' alt="icon" />
    </div>
  )
}

export default AboutIcons