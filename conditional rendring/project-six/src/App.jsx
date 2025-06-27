import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Logout from './components/logout'
function App() {
  const [login,logout] = useState(false)

  if(!login){
    return(
      <Login/>
    )
  }
return(
  <div>
    {login && <Logout/>}
  </div>
)



// return(
// <div>
//   { login?<Logout/>:<Login/>}
// </div>
// )


//   if(login){
//     return(
//       <Logout/>
//     )
//   }else{
//     return(
//       <Login/>
//     )
//   }
 
 }

export default App
