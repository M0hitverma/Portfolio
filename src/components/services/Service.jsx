import React from 'react'
import './Service.css'
import leetcode from '../../img/leetcode.png'
import gfg from '../../img/gfg.png'
import linkedin from '../../img/linkedin.png'
import git from '../../img/git.png'
import Card from '../Card/Card'
import resume from '../../img/MohitVerma(Resume).pdf'

import { themeContext } from '../../context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
export default function Service() {
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
        <div className="achievement">

            {/* left side */}
             <div className="a-left">
              <span style={{color:darkMode?'white':''}} >Featured</span>
              <span >  Leetcode  • GeeksForGeeks • Linkedin • Github  </span>
              <a href={resume} download>
              <button type="button" className='button' style={{backgroundColor:darkMode?'darkslateblue':''}}> Download CV</button></a>

             </div>
             {/* right side */}
        <div className="a-right">

              <motion.div 
              id="one"
                initial={{scale:0}}
                whileInView={{ scale:1}}
                transition={{ ease: "linear", duration: 1 , type:'spring' }}
                style={{right:'20.3rem'}}
                 onClick={()=>{window.location.href="https://leetcode.com/Mr_mv/"}}
                >
                <Card 
                image={leetcode}
                heading={'LeetCode'}
                 
                />
              </motion.div>

              <motion.div
              id="two"
              initial={{scale:0}}
              whileInView={{scale:1}}
              transition={{ ease: "linear", duration: 1 , type:'spring' }}
               style={{top:'12rem',right:'35rem'}}
               onClick={()=>{window.location.href="https://auth.geeksforgeeks.org/user/mohitverma41"}}>
                <Card 
                image={gfg}
                heading={'GeeksForGeeks'}
         
                />
              </motion.div>

              <motion.div
              id="three"
               initial={{scale:0}}
               whileInView={{ scale:1}}
               transition={{  duration: 1 , type:'spring' }}
                 style={{top:'19rem', right:'21rem'}}
                 onClick={()=>{window.location.href="https://github.com/M0hitverma"}}>      
                <Card 
                image={git}
                heading={'Github'}
            
                />
              </motion.div>
              <motion.div 
               id="four"
                initial={{scale:0}}
                whileInView={{ scale:1}}
                transition={{  duration: 1 , type:'spring' }}
              style={{top:'10rem', right:'7rem'}}
              onClick={()=>{window.location.href="https://www.linkedin.com/feed/"}}>
                
                <Card 
                image={linkedin}
                heading={'Linkedin'}
 
                />
              </motion.div>
        </div>



    
        </div>
      
      
    </div>
  )
}
