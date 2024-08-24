
import './App.css';
import Greetings from './components/greetings/greetings';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Technical from './components/technical_skills/technical';
import Contact from './components/contact/contact';



function App() {
  return (
    <div className='home'>
      <Greetings />
      <About />
      <Projects />
      <Technical />
      <Contact />
    </div>
  );
}

export default App;
