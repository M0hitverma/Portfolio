import React from 'react'
import './Card.css'
export default function Card(props) {
  return (
    <div>
        <div className="card">
        <img src={props.image}/>
        <span> {props.heading}</span>
        
        </div>
    </div>
  )
}
