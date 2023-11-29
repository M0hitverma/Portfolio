import React from 'react'
import Boy from '../../img/boy.png'
import Floating from '../Floating/Floating'
import crown from '../../img/crown.png'
import './Intro.css'

import { themeContext } from '../../context'
import {useContext} from "react";
import {motion} from 'framer-motion'
export default function Intro() {
 
 const transition= {duration:3, type:'spring'};
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className='intro'>
        <div className='i-left'>
       
            <div className='name'>
            <span style={{color:darkMode?'white':''}}>hey ! I am </span>
            <span style={{color:darkMode?'darkslateblue':''}}> Mohit Verma</span>
            <span> MERN Developer | ML Enthusiastic | DSA | Computer Engineering Student at J.C.Bose University of Science And Technology </span>
            </div>
            
           <button type="button" className='.btn' style={{backgroundColor:darkMode?'white':'',
             color: darkMode? ' black':''}} onClick={()=>{window.location.href="https://www.linkedin.com/in/mohit-verma-231b66257"}}> Hire me</button>
           <div className='i-icon'>
           
           <i class="fa-brands fa-github fa-2xl" style={{color:darkMode?'white':''}} onClick={()=>{window.location.href="https://github.com/M0hitverma"}} ></i>
           <i class="fa-brands fa-linkedin fa-2xl" style={{color:darkMode?'white':''}}  onClick={()=>{window.location.href="https://www.linkedin.com/in/mohit-verma-231b66257/"}} ></i>
           <i class="fa-brands fa-discord fa-2xl" style={{color:darkMode?'white':''}}  onClick={()=>{window.location.href="https://github.com/M0hitverma"}} ></i>
           <i class="fa-solid fa-code fa-2xl" style={{color:darkMode?'white':''}}  onClick={()=>{window.location.href="https://leetcode.com/Mr_mv/"}} ></i>
         
           </div>

               
           
         
        </div>


        <div className='i-right'>
          
          <motion.img
           initial = {{right: '10%'}}
           whileInView={{left : '10%'}}
           transition= {transition}
           className="boy"
          src={Boy} alt=""/>
          <Floating image={crown}/>
                 
        </div>
          
     
    </div>
  )
}
