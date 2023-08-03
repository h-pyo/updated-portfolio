import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import ProjectPage from './components/ProjectPage';
import todo from './images/todo-image.JPG';
import weather from './images/weather-image.JPG';
import { useState, useEffect } from 'react';
import animatedBackground from './components/geometry.js';

function App() {
  console.log(process.env.REACT_APP_publicKey);
  const [remove, setRemove] = useState(null);
  useEffect(() => {
    console.log(remove);
    if (remove === true) {
      window.removeEventListener('resize', animatedBackground.onWindowResize);
    } else if (remove === false) {
      window.location.reload();
    }
  }, [remove])
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main
          setRemove={setRemove}
        />} />
        <Route path='project-1' element={<ProjectPage
          setRemove={setRemove}
          image={todo}
          title="Todo-List Website"
          repo="https://github.com/h-pyo/Todo-List-Website"
          link="https://harris-todo-list.netlify.app/"
          description="A todo-list website I created with HTML, CSS, and Javascript as practice. Allows for users to create and delete different lists with tasks and dates."
        />} />
        <Route path='project-2' element={<ProjectPage
          setRemove={setRemove}
          image={weather}
          title="Weather App"
          repo="https://github.com/h-pyo/weather-app"
          link="https://harris-weather-app.netlify.app/"
          description="A weather website that shows the user weather information for the searched city using the OpenWeather API and generates an image of the same city using the Unsplash API. Furthermore, users are able to switch between metric and imperial units."
        />} />
      </Route>
    </Routes>
  );
}

export default App;
