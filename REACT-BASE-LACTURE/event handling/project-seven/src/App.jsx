
import './App.css'
import {createBrowserRouter} from 'react-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Dashboard from './components/dashbord.jsx'
const router ={createBrowserRouter}
(
  [
    {
      path:"/",
      element:<Home/>
    },

    {
      path:"/",
      element:<About/>},

    {
      path:"/",
      element:<Dashboard/>}
  ]
)
function App() {
  return (
<div>
<RouterProvide router={router}/>

</div>
  )
}

export default App
