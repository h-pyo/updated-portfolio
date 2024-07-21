interface SkillItemProps {
  image: string;
  description: string;
}

const SkillItem = ({image, description}: SkillItemProps) => {
  return (
    <div className="h-[175px] w-[175px] bg-dark2 rounded-[50px] grid place-content-center content-center mx-[12px] mb-[20px]">
      <div className="flex flex-col content-center justify-around m-[5px] h-[130px]">
        <img src={image} className='w-[100px]' alt='skill' />
        <div className="text-[1.3rem] text-center">
          {description}
        </div>
      </div>
    </div>
  )
}

export default SkillItem