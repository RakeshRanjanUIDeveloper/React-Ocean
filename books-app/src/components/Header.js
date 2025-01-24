import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='header'>
        <h1>Book Tracker</h1> 
        <nav>
            <ul>
                <li>
                    <NavLink to='/' end  className={({ isActive }) => (isActive ? 'active-link' : '')}>All Boks</NavLink>
                </li>
                <li>
                    <NavLink to='/favorites' className={({ isActive }) => (isActive ? 'active-link' : '')}>Favorites</NavLink>
                </li>
                <li>
                    <NavLink to='/read' className={({ isActive }) => (isActive ? 'active-link' : '')}>Read</NavLink>
                </li>
                <li>
                    <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active-link' : '')}>Profile</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header