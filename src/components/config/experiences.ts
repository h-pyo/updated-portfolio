import MerckIcon from '../../images/Merck-Co-Logo.png';
import StevensIcon from '../../images/stevens-logo.png';
import AllSourceIcon from '../../images/AllSource.png';

const workExperiences = [
  {
    title: "Software Developer",
    company: "AllSourcePPS / Merck & Co., Inc. - Rahway, NJ",
    date: "August 2024 - Present",
    icon: AllSourceIcon,
    points: [
      "Leveraging Autodesk and internal APIs with OAuth to securely integrate the new internal application’s functionalities, ensuring authentication and seamless communication between system components for improved performance.",
      "Employing AWS EC2 for scalable and reliable app deployment, ensuring high availability and cost-effective hosting.",
      "Constructing new workspaces within Autodesk PLM for various internal teams, optimizing project and job management by streamlining workflows, enhancing productivity, and enabling more efficient collaboration."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Merck & Co., Inc. - Rahway, NJ",
    date: "June 2024 - August 2024",
    icon: MerckIcon,
    points: [
      "Piloted development of internal app using ReactJS, TailwindCSS, ExpressJS, NodeJS, and an AWS RDS database to centralize the 3D Printing Lab’s intake request system which saved close to 500 hours from troubleshooting current system issues.",
      "Utilized Power Automate with intake forms to streamline workflows for project requests, increase efficiency through automation, and save about $100,000 yearly from software licenses.",
      "Coordinated through Scrum methodology with weekly standups, sprint planning sessions, and retrospective sessions to enhance development, communication, and ensure timely project delivery. "
    ]
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Stevens Institute of Technology - Hoboken, NJ",
    date: "January 2023 - August 2023",
    icon: StevensIcon,
    points: [
      "Collaborated with a team of students to build a text formatting system with interactive quizzes and live coding exercises",
      "Developed a full-stack web app for creating graphs and documents using Regex, Java, HTML, CSS, and JavaScript."
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
    concentration: "Artificial Intelligence",
    courses: "Applied Discrete Mathematics, Web Programming II, Applied Machine Learning, Data Acquisition: Deep Learning"
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