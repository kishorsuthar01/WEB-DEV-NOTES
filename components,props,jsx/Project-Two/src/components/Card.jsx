import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <p id='shirt'>{props.name}</p>
        <img id='img' src={props.img} alt="shirt" />
        <p id='dis'>{props.dis}</p>
    </div>
  )
}

export default Card