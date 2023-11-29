import React , {useState} from 'react'
import './Contact.css'
import Message from '../../img/message.gif'
import emailjs from '@emailjs/browser';
import { useRef} from 'react';
import { themeContext } from '../../context'
import {useContext} from "react";
export default function Contact() {


  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();
  const [done,setDone]= useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kxsi71s', 'template_4epgk9i', form.current, 'oPEhKCRmO4IoX_uUS')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>

     <div className='contact-form' style={{backgroundColor:darkMode? 'darkslateblue':''}}>
        <div className='c-left'>
            <div className='awesome'>

            <span style={{color: darkMode? 'white': ''}}>Get in touch  </span>
            <img src={Message}/>

            </div>
        </div>

        <div className='c-right' >
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name="from_name" className="user" placeholder="Name"/>
                <input type="text" name="user_email"
                 className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Drop me a line" />
                <input type="submit" value="Send" className="button"/>
                {done && "Thanks for contacting me!"}


            </form>

        </div>
     </div>

    </div>
  )
}
