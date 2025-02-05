import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.header}>
        <nav>
            <ul>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>Dashboard</NavLink></li>
                <li><NavLink to='/Departments' className={({ isActive }) => (isActive ? styles.active : '')}>Departments</NavLink></li>
                <li><NavLink to='/Products/all' className={({ isActive }) => (isActive ? styles.active : '')}>Products</NavLink></li>
                <li><NavLink to='/AddProduct' className={({ isActive }) => (isActive ? styles.active : '')}>Add Product</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar