import React from 'react'
import { NavLink } from 'react-router-dom'
import 'animate.css';

export const Header = () => {
  return (

    <div className='animate__animated animate__rotateInDownLeft header ' >
      <nav className='links'>
        <ul>
          <li><NavLink to="/Home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/Projects" >Projects</NavLink></li>
          <li><NavLink to="/Experience" >Experience</NavLink></li>
          <li><NavLink to="/AboutMe">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </nav>
    </div>

  )
}
