import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement ,reset, incrementByAmount} from './feature/com/counterSlice';
import './App.css'


function App () {

const [Amount,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();


  function handleIncrement(){
    dispatch(increment());
  }
  function hanldeDecrement(){
    dispatch(decrement());

  }
  function hanldeReset(){
    dispatch(reset());

  }
  function handleAmount(){
    dispatch(incrementByAmount(Amount));

  }
  
  return (
    <div className='container'>
      <button onClick={handleIncrement}>+</button>
      <p>count:{count}</p>
      <button onClick={hanldeDecrement}>-</button>
      <br />
      <button onClick={hanldeReset}>Reset</button>
      <br />
      <input type="number" placeholder='Enter Amount' value={Amount} onChange={(e)=>setAmount(e.target.value)} />
      <br />
      <button onClick={handleAmount}>Inc by Amount</button>


    </div>
  )
}

export default App