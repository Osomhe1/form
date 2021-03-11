import React from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
          <ul className='navbar-link'>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/signup'>Signup</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/about-us'>About</NavLink></li>
          </ul>
            
        </div>
    )
}

export default Navbar
