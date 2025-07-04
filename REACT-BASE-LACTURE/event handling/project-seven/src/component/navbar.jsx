import React from 'react'
import { Form, Link } from "react-router-dom";
import './navbar.css' 
const navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link id='h' to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default navbar