import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <React.Fragment>
        <div className='header'>
            <nav>
                <ul>
                    <li><NavLink to='/'>Inbox</NavLink></li>
                    <li><NavLink to='spam'>Spam</NavLink></li>
                    <li><NavLink to='trash'>Trash</NavLink></li>
                </ul>
            </nav>
        </div>
    </React.Fragment>
  )
}

export default Header