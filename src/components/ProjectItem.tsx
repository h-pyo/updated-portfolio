import { Link } from 'react-router-dom';

interface ProjectItemProps {
  image: string;
  title: string;
  link: string;
}

const ProjectItem = ({image, title, link}: ProjectItemProps) => {
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className='md:ml-[30px] grid place-content-center bg-dark2 h-[235px] w-[350px] rounded-[50px] mb-5 mr-[25px] transition-all ease-in hover:scale-110 hover:cursor-pointer '>
        <div>
          <div className="text-center text-[1.3rem] mb-[10px]">{title}</div>
          <img src={image} className='w-[330px] rounded-[40px]' alt='project'/>
        </div>
      </div>
    </Link>
  )
}

export default ProjectItem