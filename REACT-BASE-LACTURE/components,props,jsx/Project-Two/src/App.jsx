import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import shirt from './assets/shirt1.jpg'
import jordan from './assets/jordan.png'
import jordan1 from './assets/jordan2.png'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='hello'>
    <Card name='shirt' img={shirt} dis='its is shirt'/>
    <Card name='jordan' img={jordan} dis='its a jordan shoes'/>
    <Card name='jordan1' img={jordan1} dis='its a jordan shoes'/>
   </div>
  )
}

export default App
