import React, { Fragment } from 'react'
import { FaTimes } from 'react-icons/fa';
import logo from '../components/logo.svg';
import { useGlobalContext } from './Context';
import { links, social } from './data';
const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <Fragment>
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <img src={logo} className='logo' alt='logo'  />
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                {
                    links.map((link) => {
                        const {id, url, text, icon} = link;
                        return (
                            <li key={id}><a href={url}>{icon}{text}</a></li>
                        )
                    })
                }
            </ul>
            <ul className='social-icons'>
                {
                    social.map((link) =>{
                        const {id, url, icon} = link;
                        return (
                            <li key={id}><a href={url}>{icon}</a></li>
                        )
                    })
                }
            </ul>
        </aside>
    </Fragment>
  )
}

export default Sidebar