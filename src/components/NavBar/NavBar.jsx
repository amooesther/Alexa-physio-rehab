import React, { useState } from 'react';
import logo from '../../Assets/logo192.png';
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='NavWrapper'>
      <img src={logo} alt="Logo" className="logo" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
        <Link to='/' style={{ textDecoration: 'none' }}><li><a href="#" onClick={closeMenu}>Home</a></li></Link>
          <Link to='/about' style={{ textDecoration: 'none' }}><li><a href="#" onClick={closeMenu}>About</a></li></Link>
          <Link to='/services' style={{ textDecoration: 'none' }}><li><a href="#" onClick={closeMenu}>Services</a></li></Link>
         <Link to='/contact' style={{ textDecoration: 'none' }}> <li><a href="#" onClick={closeMenu}>Contact</a></li></Link>
         <Link to='/login' style={{ textDecoration: 'none' }}> <button className='loginBtn'>Login</button></Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
