import React from 'react'
import { themeContext } from '../../context'
import { useContext } from 'react'
import './Portfolio.css'
import applevisionpro from'../../img/applevisionpro.png'
import blogimg from '../../img/blog.png'
import shoestore from '../../img/shoe_store.png'
import budget from '../../img/budget.png'
import {BsFillAirplaneFill} from "react-icons/bs"

import newsimg from '../../img/news.jpg'
export default function Portfolio() {

 
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration:2,type:'spring'}
  return (
    
    <div className='portfolio'>

        <div style={{color:darkMode?'white':''}} className="heading" >Projects</div>

       
        
      <div className='portfoiolmtr' >
      
      <div className='planediv' style={{borderColor:darkMode?'white':''}} >
        <BsFillAirplaneFill className='plane' style={{color:darkMode?'white':''}}/>
      </div>


        <div className='project' style={{borderColor:darkMode?'white':''}}>
              
        <div className= 'container'> 
        <div className='P-left' ><img src={shoestore} alt=""/> </div>
        
        <div className='P-right' style={{backgroundColor:darkMode? 'black':'',}}> 
        <h3>E-commerce Store</h3>
        <p style={{color:darkMode? 'grey':''}}> 
● Developed a modern and user-friendly E-Commerce store that offers a wide variety of products to customers. <br/>
• Utilized Next.js to build a server-side rendered ( SSR) application for improved performance and SEO.<br/>
• Implemented responsive and intuitive user interfaces using Tailwind CSS classes for streamlined design.<br/>
• Integrated state management libraries like Redux or React Context API to handle application-level data.<br/>
 • Created a headless CMS using Strapi to manage product information, such as product details, images, and prices.. </p>
         <a href='https://nike-store-frontend-flame.vercel.app'>Link</a>
        </div>

        </div>

        <div className= 'container'>
           <div className='P-left' > <img src={applevisionpro} alt=""/> </div> 
        
        <div className='P-right' style={{backgroundColor:darkMode? 'black':''}} >
        <h3>Apple Vision Pro</h3>
        <p style={{color:darkMode? 'grey':''}}>
•Designed and developed a replica of the Apple Vision Pro website.<br/>
•Utilized HTML, CSS, and JavaScript to recreate the visually engaging interface.<br/>
•Leveraged GSAP JavaScript framework for modern and captivating animations.<br/>
 •Implemented a visually engaging interface, showcasing cutting-edge technologies and product features.
           </p>
         <a href='https://m0hitverma.github.io/Apple-Vision-Pro/'>Link</a>
        </div>

        
        </div>
        <div className= 'container'> 
        <div className='P-left' > <img src={blogimg} alt=""/> </div> 
        
        <div className='P-right' style={{backgroundColor:darkMode? 'black':'',}}>
        <h3>Blogging Web-application</h3>
        <p style={{color:darkMode? 'grey':''}}>
          ● Developed a user-friendly blogging web-application platform offers an intuitive space for users to effortlessly read and add blogs.<br/>
• Utilized Next.js to build a server-side rendered ( SSR) application for improved performance and SEO.<br/>
• Implemented responsive and intuitive user interfaces using Tailwind CSS classes for streamlined design.<br/>
•Build Robust backend powered by Node.js for efficient server-side operations.<br/>
•MongoDB integration for seamless data storage and retrieval. </p>
         <a href='https://blogapp-frontend-theta.vercel.app' >Link</a>
        </div>

        
        </div>
        <div className= 'container'>
           <div className='P-left' > <img src={budget} alt=""/> </div> 
        
        <div className='P-right' style={{backgroundColor:darkMode? 'black':'',}}>
        <h3>Voice Powered Expense Tracker</h3>
        <p style={{color:darkMode? 'grey':''}}>
        •Developed an intuitive and visually appealing user interface using React and MaterialUI.<br/>
•Designed a comprehensive set of budget categories, allowing users to easily allocate income and expenses to specific categories.<br/>
•Integrated Speechify's powerful speech recognition API, enabling users to input
income and expenses through voice commands.
        </p>
         <a href='https://m0hitverma.github.io/Expense-Tracker'>Link</a>
        </div>

        
        </div>
       </div>
       </div>
      
    </div>
  )
}

