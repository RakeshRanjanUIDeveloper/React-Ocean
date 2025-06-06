import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
   <nav className='navbar'>
        <NavLink to='/' style={ ({isActive}) => {
            return {color: isActive ? 'red' :'black'}
        }}>Home</NavLink>
        <NavLink to='/about' className={({isActive}) => (isActive ? 'link active' :'link')}>About</NavLink>
        <NavLink to='/products' className={({isActive}) => (isActive ? 'link active' :'link')}>Products</NavLink>
        <NavLink to='/login' className={({isActive}) => (isActive ? 'link active' :'link')}>Login</NavLink>
   </nav>
  )
}

export default StyledNavbar