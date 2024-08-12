import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Experience {
  title: string;
  company: string;
  date: string;
  icon: string;
  points: string[];
}

const ExperienceCard = ({experience} : {experience : Experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#393E46",
        color: "#inherit",
        font: "inherit"
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: "#EEEEEE" }}
      // date={experience.date}
      // dateClassName="date-format"
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company}
            className='object-contain w-[80%] h-[80%]'
          />
        </div>
      }
    >
      <div className="text-inherit">
        <h3 className='text-[1.6rem] font-bold'>{experience.title}</h3>
        <p style={{ margin: 0 }}>
          {experience.company}
        </p>
        <div className="text-[1.1rem]">{experience.date}</div>
      </div>
      {
        experience.points.length > 0 && (
          <ul className='mt-3 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[1.1rem] pl-1 '
              >
                {point}
              </li>
            ))}
          </ul>
        )
      }
      
    </VerticalTimelineElement>
  )
}

export default ExperienceCard