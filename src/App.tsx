import './App.css';
import { Home } from './components/home/home';
import { NavBar } from './components/navBar/navBar';
import { AboutMe } from './components/aboutMe/aboutMe';
import { Projects } from './components/projects/projects';
import { Contacts } from './components/contacts/contacts';


function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Contacts/>
    </>
  )
}

export default App
/*https://edteam-media.s3.amazonaws.com/blogs/original/08810a24-07c9-4fa9-97f0-83ac3690f774.png */