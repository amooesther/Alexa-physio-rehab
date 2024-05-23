import React from 'react';
import logo from '../../Assets/logo192.png';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='NavWrapper'>
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <button className='loginBtn'>Login</button>
        </ul>
       
      </nav>
    </div>
  );
}

export default NavBar;
