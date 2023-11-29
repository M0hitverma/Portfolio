import React from 'react'
import './Work.css'
import cplus from '../../img/c++.png'
import javascript from '../../img/javascript-2.png'
import react from '../../img/react.png'

import sql from '../../img/sql.png'


import css from '../../img/CSS.png'
import html from '../../img/html.png'
import nodejs from '../../img/nodejs.png'
import mongodp from '../../img/mongodp.png'
import { themeContext } from '../../context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

export default function Work() {
    const theme = useContext (themeContext);
    const darkMode = theme.state.darkMode;
  return (
    
    
    <div className='works'>
        <div className='w-right'>

            <div className='name'>
            <span style={{color:darkMode?'white':''}} >Tech Stack </span>
            <span style={{color:darkMode?'darkslateblue':''}}>Proficient and skilled IN</span>
            <span> Language : C++, Python, Javascript, Node.js, SQL.
                <br/> Framework : React.js, Nex.js, Tailwind CSS, Express.js, Material UI
                <br/>Course Work : DBMS, Operating System, Computer Network,
                 <br/>Object Oriented Programming(OPPs)
                </span>
            </div>
            <div className='btncntr'>
           <button type="button" className='btn' style={{backgroundColor:darkMode?'darkslateblue':''}} onClick={()=>{window.location.href="https://www.linkedin.com/in/mohit-verma-231b66257"}}> Hire me</button>
           </div>
           
        </div>

        <div className='i-right'>

            <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}

            className='w-maincircle'>
            <motion.div
             animate={{ rotate: -360 }}
             transition={{ ease: "linear", duration: 40, repeat: Infinity }}
             style={{backgroundColor:darkMode?'black':''}}
            className="w-secCircle">
                <img src={sql} alt=""/>
            </motion.div>
            
            <motion.div 
            animate={{ rotate: -360 }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            style={{backgroundColor:darkMode?'black':''}}
            className="w-secCircle">
                <img src={mongodp} alt=""/>
            </motion.div>

            <motion.div
            animate={{ rotate: -360 }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            style={{backgroundColor:darkMode?'black':''}}
            className="w-secCircle">
                <img src={react} alt=""/>
            </motion.div>

            <motion.div
           animate={{ rotate: -360 }}
           transition={{ ease: "linear", duration: 40, repeat: Infinity }}
           style={{backgroundColor:darkMode?'black':''}}
            className="w-secCircle">
                <img src={cplus} alt=""/>
            </motion.div>
            
            <motion.div
            animate={{ rotate: -360 }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            style={{backgroundColor:darkMode?'black':''}}
             className="w-secCircle">
                <img src={nodejs} alt=""/>
            </motion.div>
            </motion.div>


            
           <div >
            <motion.div 
              className="backcircle clrpurple"
           
              animate={{ rotate: -360 }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >

            <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration:30, repeat: Infinity }}
            style={{backgroundColor:darkMode?'black':''}}
             className="innercircle">
                <img src={javascript} alt=""/>
            </motion.div>
            <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration:30, repeat: Infinity }}
            style={{backgroundColor:darkMode?'black':''}}
             className="innercircle">
                <img src={html} alt=""/>
            </motion.div>
            <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration:30, repeat: Infinity }}
            style={{backgroundColor:darkMode?'black':''}}
             className="innercircle">
                <img src={css} alt=""/>
            </motion.div>
            
            </motion.div>

           </div>
         
        </div>
          
     </div>
    
   
  )
}
