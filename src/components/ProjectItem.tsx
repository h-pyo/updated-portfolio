import { Link } from 'react-router-dom';

interface ProjectItemProps {
  image: string;
  title: string;
  link: string;
}

const ProjectItem = ({image, title, link}: ProjectItemProps) => {
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className='md:ml-[15px] md:mr-[15px] grid place-content-center bg-dark2 h-[235px] w-[350px] sm:h-[195px] sm:w-[310px] rounded-[50px] mb-5 ml-[13px] m-[13px] sm:m-0 sm:mb-[20px] transition-all ease-in hover:scale-110 hover:cursor-pointer '>
        <div>
          <div className="text-center text-[1.3rem] mb-[10px]">{title}</div>
          <img src={image} className='w-[330px] sm:w-[270px] rounded-[40px]' alt='project'/>
        </div>
      </div>
    </Link>
  )
}

export default ProjectItem