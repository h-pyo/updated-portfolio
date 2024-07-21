const AboutIcons = ({image}: {image: string}) => {
  return (
    <div className='icon-border lg:mr-[60px] lg:mb-[10px] sm:mr-[10px] sm:mb-[10px] bg-light rounded-[77px] border-solid border-dark2 border-[5px] w-[144px] h-[144px] mr-[30px] grid place-content-center'>
      <img src={image} className='w-[110px]' alt="icon" />
    </div>
  )
}

export default AboutIcons