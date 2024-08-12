import { FaGithub, FaPlay, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ProjectPageProps {
  image: string;
  title: string;
  repo: string;
  link: string;
  description: string;
}

const ProjectPage = ({ image, title, repo, link, description } : ProjectPageProps) => {
  return (
    <article className='grid place-content-center' data-aos="fade-down" data-aos-once="true" >
      <Link to='/' className='absolute left-[40px] top-[40px] text-inherit text-[1.5rem]'><FaArrowLeft /></Link>
      <div className="sm:w-[360px] w-[650px] rounded-[90px] bg-dark2 flex flex-col mt-[150px] pt-[15px] pb-[50px]">
        <div className="sm:text-[2.3rem] sm:w-[300px] sm:self-center sm:pt-[15px] text-[3rem] font-bold text-center underline decoration-2 underline-offset-[10px] decoration-[#9ea0a5]">{title}</div>
        <img src={image} alt="project" className="sm:w-[320px] w-[500px] rounded-[50px] mt-[20px] self-center" />

        <div className="self-center my-[20px] text-[1.1rem] font-bold flex">
          <a href={repo} target='_blank' rel='noreferrer' className='active:opacity-100 mr-[30px] h-10 border-solid border-light border-2 p-2 items-center rounded-3xl text-light flex no-underline hover:opacity-70 opacity-100 '> <FaGithub />&nbsp; Github Repository </a>
          <a href={link} target='_blank' rel='noreferrer' className='active:opacity-100 h-10 border-solid border-light border-2 p-2 items-center rounded-3xl text-light flex no-underline hover:opacity-70 opacity-100'> <FaPlay />&nbsp; Demo</a>
        </div>

        <div className=" mx-[40px] text-[1.2rem]">
          &nbsp;&nbsp;&nbsp;{description}
        </div>
      </div>
    </article>
  )
}

export default ProjectPage