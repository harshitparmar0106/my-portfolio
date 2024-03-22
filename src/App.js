import logo from './logo.svg';
import './App.css';
import Home from './components/Home_page/Home.jsx';
import About from './components/About_page/About.jsx';
import Myskills from './components/Myskills/myskills.jsx';
import Project from './components/Projects_page/project.jsx';
import Contact from './components/Contact_page/Contact.jsx';
function App() {
  return (
    <>
      <Home/>
      <About/>
      <Myskills/>
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
