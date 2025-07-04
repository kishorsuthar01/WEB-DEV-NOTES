
import './App.css'
import Home from './component/home.jsx'
import About from './component/about.jsx'
import Dashboard from './component/dashboard.jsx'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Navbar from './component/navbar.jsx';
import Para from './component/para.jsx'
import Course from './component/course.jsx';
import Test from './component/test.jsx';
import Report from './component/report.jsx';
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
 
    <Navbar/>
       <Home/>
    </div>

  },
  {
    path: "/about",
    element:
     <div>
  
    <Navbar/>
      <About/>
    </div>
  },
  {
    path: "/dashboard",
    element:
     <div>
    <Navbar/>
        <Dashboard/>
    </div>,
    children:[
    {  path:'course',
      element:<Course/>
    },
    {  path:'test',
      element:<Test/>
    },
    {  path:'reports',
      element:<Report/>
    },

      
    ]
  },
   { path: "/:id",
    element:
    <div>
      <Navbar/>
      <Para/>
    </div>}


]);

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
