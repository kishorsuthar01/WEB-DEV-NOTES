import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input,setInput]=useState(0);

  function handleclick(num){
    
console.log('this is usememo hook');
for(let i=0;i<=100;i++){}
return num*2;
  }
let double=useMemo(()=>handleclick(input),[input]);

  return (
   <div>
    <button onClick={()=>setCount(count+1)}>click</button>
    <p>count: {count}</p>
    <input type="number"  placeholder='enter a number' value={input} onChange={(e)=>setInput(e.target.value)} />

Double:{double}
   </div>
  )
}

export default App
