import './App.css';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
    <div className="App">     
      < Home />
      < Projects />
      < Skills />
      < About />
      < Contact />
    </div>
  );
}

export default App;
