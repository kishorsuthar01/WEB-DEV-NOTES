import React from 'react'
import { useState } from 'react'
import Button from './components/button';
const App = () => {
  const[count ,setCount]=useState(0);
  function hello(){
    setCount(count+1)
  }
  return (
    <div>
      <h1>{count}</h1>
<Button text="click" kkk={hello}>

</Button>
    </div>
  )
}

export default App