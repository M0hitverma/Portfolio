
import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { themeContext } from '../../context';
import {useContext} from "react";
import { Link } from 'react-scroll';


export default function Navbar() {
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div className='n-wrapper  navbar-light' 
    style={{
        background :darkMode? 'darkslateblue' : '',
        color: darkMode? 'white':''
      }}
    >

        <div className='n-left' >
            <div className='n-name'>Mohit</div>
           <Toggle/>

        </div>

        <div className='n-right' > 

        <div className='n-list'>
            <ul  >
                <li><Link to="techstack" smooth={true} duration={200}> TechStack</Link></li>
                <li><Link to="featured" smooth={true} duration={300}>Featured</Link> </li>
                <li><Link to="project" smooth={true} duration={300}>Projects</Link> </li>
               
            </ul>
        </div>
    
        </div>
        <div>
          <Link to="contact" smooth={true} duration={600}>
          <button type="button" class="n-button"  style={{
        background :darkMode? 'white' : '',
        color: darkMode? 'black':''
      }}>Contact</button>
          </Link>
       
        </div>

    </div>
  )
}
