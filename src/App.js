import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Service from "./components/services/Service";
import Work from "./components/work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testmonial from "./components/Testmonial/Testmonial";
import Contact from "./components/contact/Contact";
import {themeContext} from "./context";
import {useContext} from "react";
import { Link, Element } from 'react-scroll';
function App() {
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="App" 
    style={{
      background :darkMode? 'black' : '',
      color: darkMode? 'white':''
    }}
    >
     <Navbar/>
     <Intro/>
     <Element name= "featured">
     <Service/>
     </Element>
     <Element name="techstack">
      <Work/>
      </Element>
     
     <Element name="projects">
    <Portfolio/>
    </Element>
    <Element name="contact">
    <Contact/>
    </Element>
    </div>
  );
}

export default App;
