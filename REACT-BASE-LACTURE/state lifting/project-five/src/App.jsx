import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [name, setName] = useState('')

  return (
    <div>
   <Card title="name1" name={name} setName={setName}/>
   <Card title="name2" name={name} setName={setName}/>
   </div>
  )
}

export default App
