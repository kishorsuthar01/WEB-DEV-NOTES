import React, { useState } from 'react'
import "./Counter.css"
const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div className='counter'>
        <p id="para">you are click for {count} item</p>
        <button id="btn" onClick={()=>{setCount(count+1) }}>Click</button>

    </div>
  )
}

export default Counter