import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={(event)=>props.setName(event.target.value)} />
        <p>hello {props.title}  {props.name}</p>

    </div>
  )
}

export default Card