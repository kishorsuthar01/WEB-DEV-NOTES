import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home page</Link>
        </li>
        <li>
          <Link to="/about">about page</Link>
        </li>
        <li>
          <Link to="/dashboard">dashbord page</Link>
        </li>
      </ul>
    </div>
  )
}

export default navbar