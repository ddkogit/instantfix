import React from 'react'
import Button from './Button'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>

        <img src="./logo.svg" alt="" />
        </div>
        <ul className='navmenu'>
            <li>Home</li>
            <li>Tools</li>
            <li><Button text="Action"/></li>
        </ul>
    </nav>
  ) 
}

export default Navbar