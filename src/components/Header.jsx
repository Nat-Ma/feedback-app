import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
            <NavLink to="/">Ratings</NavLink>
            <NavLink to="/about">About</NavLink>
    </header>
  )
}

export default Header
