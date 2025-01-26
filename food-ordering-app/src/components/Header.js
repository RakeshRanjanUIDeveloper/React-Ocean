import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <React.Fragment>
        <div className='header'>
            <h1>Food Delivery App</h1>
            <nav>
                <ul>
                    <li><NavLink to='/' className={({isActive}) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
                    <li><NavLink to='/menu' className={({isActive}) => (isActive ? 'active-link' : '')}>Menu</NavLink></li>
                    <li><NavLink to='/cart' className={({isActive}) => (isActive ? 'active-link' : '')}>Cart</NavLink></li>
                </ul>
            </nav>
        </div>
    </React.Fragment>
  )
}

export default Header