import { VerticalTimelineElement } from "react-vertical-timeline-component"

interface Education {
  degree: string;
  school: string;
  date: string;
  icon: string;
  gpa?: string;
  concentration?: string;
  awards?: string;
  courses?: string;
  leadership?: string;
}

const EducationCard = ({education} : {education : Education}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#393E46",
        color: "#inherit",
        font: "inherit",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: "#EEEEEE" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={education.icon}
            alt={education.school}
            className='object-contain w-[80%] h-[80%]'
          />
        </div>
      }
    >
      <div className="text-inherit">
        <h3 className='text-[1.6rem] font-bold'>{education.degree}</h3>
        <p style={{ margin: 0 }}>
          {education.school}
        </p>
        <div className="text-[1.1rem]">{education.date}</div>
      </div>
      
      <ul className='mt-3 list-disc ml-5 space-y-2'>
        {
          education.gpa && (
            <li className='text-white-100 text-[1.1rem] pl-1'>
              <span className="font-bold">GPA: </span>{education.gpa}
            </li>
          )
        }
        {
          education.concentration && (
            <li className='text-white-100 text-[1.1rem] pl-1'>
              <span className="font-bold">Concentration: </span>{education.concentration}
            </li>
          )
        }
        {
          education.awards && (
            <li className='text-white-100 text-[1.1rem] pl-1'>
              <span className="font-bold">Awards: </span>{education.awards}
            </li>
          )
        }
        {
          education.courses && (
            <li className='text-white-100 text-[1.1rem] pl-1'>
              <span className="font-bold">Courses: </span>{education.courses}
            </li>
          )
        }
        {
          education.leadership && (
            <li className='text-white-100 text-[1.1rem] pl-1'>
              <span className="font-bold">Leadership: </span>{education.leadership}
            </li>
          )
        }
      </ul>
    </VerticalTimelineElement>
  )
}

export default EducationCard