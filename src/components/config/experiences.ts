import MerckIcon from '../../images/Merck-Co-Logo.png';
import StevensIcon from '../../images/stevens-logo.png';

const workExperiences = [
  {
    title: "Software Engineer Intern",
    company: "Merck & Co., Inc. - Rahway, NJ",
    date: "June 2024 - Present",
    icon: MerckIcon,
    points: [
      "Piloting development of internal app using ReactJS, TailwindCSS, ExpressJS, NodeJS, and an AWS database to centralize the 3D Printing Lab’s intake request system which saves close to 500 hours from troubleshooting current system issues.",
      "Leveraging Autodesk and internal APIs with OAuth to securely integrate the new internal application’s functionalities, ensuring authentication and seamless communication between system components for improved performance.",
      "Utilizing Power Automate to streamline workflows for project requests and increase efficiency through automation.",
      "Coordinating through Scrum methodology and weekly standups, enhancing team development and communication."
    ]
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Stevens Institute of Technology - Hoboken, NJ",
    date: "January 2023 - August 2023",
    icon: StevensIcon,
    points: [
      "Collaborated with a team of undergraduate and graduate students to build a text formatting system that has interactive elements such as quizzes and live coding exercise.",
      "Implemented a full-stack web application that can create graphs and documents using languages such as Regex, Java, HTML, CSS, and JavaScript."
    ]
  },
  {
    title: "Undergraduate Academic Support Center Tutor",
    company: "Stevens Institute of Technology - Hoboken, NJ",
    date: "September 2022 - May 2024",
    icon: StevensIcon,
    points: [
      "Responsible for organizing and setting up tutoring sessions with students through scheduling portal.",
      "Provided instruction to students in higher level classes such as Differential Equations and Data Structures and Algorithms to improve understanding and academic performance."
    ]
  }
]

const educations = [
    {
    degree: "Masters Of Engineering in Computer Engineering",
    school: "Stevens Institute of Technology - Hoboken, NJ",
    date: "September 2024 - May 2025",
    icon: StevensIcon,
    concentration: "Software & Data Engineering",
  },
  {
    degree: "Bachelors Of Engineering in Computer Engineering",
    school: "Stevens Institute of Technology - Hoboken, NJ",
    date: "September 2021 - May 2024",
    icon: StevensIcon,
    gpa: "4.0/4.0",
    concentration: "Software Engineering and Development",
    courses: "Data Structure & Algorithms, Discrete Mathematics, Differential Equations, Circuits and Systems, Database Management Systems, Web Programming, Modeling & Simulation, Operating Systems, Computer Architecture",
    leadership: "Vice President of the Men’s Club Volleyball",
  },
]

export { workExperiences, educations };