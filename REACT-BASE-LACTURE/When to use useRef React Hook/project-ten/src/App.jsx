
import { use, useEffect, useRef, useState } from 'react'
import './App.css'
function App() {

//   const [count,setCount]=useState(0);
//   let val=useRef(0);
// let btnref=useRef();

// function handleclick(){
//   val.current=val.current+1
//   console.log('value is ',val.current);
//   setCount(count+1)
// }
// function changecolor(){
// btnref.current.style.backgroundColor="red";
// }

// useEffect(()=>{
//   console.log('me run ho raha hu');
// })

const [time,setTime]=useState(0);

let timeref=useRef(0);
function starttime(){
  timeref.current=setInterval(() => {
    setTime(time=>time+1)
  }, 1000);
}
function stoptime(){
  clearInterval(timeref.current)
  timeref.current=null;

}
function restarttime(){
 stoptime(0)
 setTime(0);

}
  return (

   <div >
    <h1>StopWatch : {time} second</h1>
<button onClick={starttime}>start</button>
<button onClick={stoptime}>stop</button>
<button onClick={restarttime}>restart</button>

   {/* <button ref={btnref} onClick={handleclick}>increment</button>
   <p>count: {count}</p>
    <button onClick={changecolor}>change button color</button> */}


   </div>
  )
}

export default App
