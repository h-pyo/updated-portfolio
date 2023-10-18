const SkillItem = ({image, description}) => {
  return (
    <div className="skill-border">
      <div className="skill-box">
        <img src={image} className='skill-image' alt='skill' />
        <div className="skill-tag">
          {description}
        </div>
      </div>
    </div>
  )
}

export default SkillItem