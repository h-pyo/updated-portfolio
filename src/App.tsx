import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import ProjectPage from './components/ProjectPage';
import todo from './images/todo-image.png';
import fitness from './images/fitness-image.png';
import seniorDesign from './images/seniorDesign.png';
import cerify from './images/cerify.png';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main
        />} />
        <Route path='project-1' element={<ProjectPage
          image={cerify}
          hasDemo={false}
          title="Cerify"
          repo="https://github.com/ShawnAviles/cerify"
          link=""
          description="This mobile app was created during Rutgers' Fall 2024 Hackaton and won 'Best use of MongoDB Atlas'. The app is designed to help dementia patients engage in simple, stimulating cognitive activities that support brain health. Inspired by platforms like Duolingo, Cerify offers a fun, game-like experience that exercises various cognitive functions while allowing caregivers to monitor user progress. With an easy-to-use interface, Cerify aims to provide meaningful engagement and cognitive support for individuals experiencing memory loss or focus issues."
        />} />
        <Route path='project-2' element={<ProjectPage
          image={seniorDesign}
          hasDemo={true}
          title="Senior Design Project"
          repo="https://github.com/ShawnAviles/visualize-emissions"
          link="https://visualize-emissions.vercel.app/"
          description="This web app was part of my senior design project at Stevens Institute of Technology. Working in a group of 5, we created an application that visualizes the emissions of a company's employees based on their mode of transportation. Our stakeholder was the Office of Sustainability at Stevens Institute of Technology where data was collected from students and staff. The tech stack for this project was React, Node.js, Express, and MongoDB. The core functionality of the application is to allow users to input a spreadsheet of their commuters' data, which will generate a visualization of emissions and a data analysis of the company's carbon footprint through figures. This project was presented at the Senior Design Expo in the spring of 2024."
        />} />
        <Route path='project-3' element={<ProjectPage
          image={fitness}
          hasDemo={true}
          title="Fitness App"
          repo="https://github.com/h-pyo/fitness-app"
          link="https://harris-fitness.netlify.app"
          description="**Note: Server takes time to start up so inital login may take extra time** A fitness website that helps the user track their health. Allows the user to save their workout schedule for the week and save daily entries on their health to keep track. This full stack app uses MongoDB, Express, React, and Node to save, authenticate, and verify user data with their login. Completed in September 2023."
        />} />
        <Route path='project-4' element={<ProjectPage
          image={todo}
          hasDemo={true}
          title="Todo-List Website"
          repo="https://github.com/h-pyo/Todo-List-Website"
          link="https://harris-todo-list.netlify.app/"
          description="A todo-list website I created with HTML, CSS, and Javascript as practice. Allows for users to create and delete different lists with tasks and dates. Completed in August 2023."
        />} />
      </Route>
    </Routes>
  );
}

export default App;
