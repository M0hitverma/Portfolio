
import React from 'react'
import './Toggle.css'
import { themeContext } from '../../context';
import { useContext } from 'react';
export default function Toggle() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

    const darkmode= ()=>{
       var sun= document.getElementById("sun");
       sun.setAttribute("style", "scale:0 ; margin-left:1.3rem ; transform: rotate(90deg); ");
       var moon= document.getElementById("moon");
       moon.setAttribute("style","scale:1 ; margin-left:1.6rem ; transform: rotate(360deg);");

    }
    const lightmode= ()=>{
        var sun=document.getElementById("sun");
        sun.setAttribute("style", "scale:1 ; margin-right:1.3rem");
        var moon=document.getElementById("moon");
        moon.setAttribute("style","scale:0 : margin-right:1.6rem");
    }
   
    const handlesun=()=>{
      theme.dispatch({type:'toogle'});
      darkmode();

    }
    const handlemoon=()=>{
      theme.dispatch({type:'toogle'});
      lightmode();
    }
  return (
  
   <div className='toggle'  style={{
   borderColor: darkMode? 'white':''
  }}>
   

     
        <i className="fa-solid fa-sun sun" id="sun" onClick={handlesun} > </i> 
        
          <i className="fa-regular fa-moon moon" id="moon" onClick={handlemoon}></i>

          <div className="t-button"  ></div>
   </div>
  )
}
