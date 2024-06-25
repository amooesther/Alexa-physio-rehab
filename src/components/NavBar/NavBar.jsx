import React, { useState, useEffect } from 'react';
import logo from '../../Assets/logo192.png';
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';
import { auth, db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDetail, setUserDetail] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetail(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User data not found");
        }
      } else {
        console.log("User not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUserDetail(null);
      window.location.href = "/login";
    }).catch((error) => {
      console.error("Error logging out:", error);
    });
  };

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
          <Link to='/contact' style={{ textDecoration: 'none' }}><li><a href="#" onClick={closeMenu}>Contact</a></li></Link>
          {userDetail ? (
            <div className='user'>
              <button onClick={handleLogout} className='userBtn'>Hi {userDetail.Name}</button>
            </div>
          ) : (
            <NavLink to='/login'>
              <button className='loginBtn'>{userDetail ? `Hi ${userDetail.Name}` : 'Login'}</button>
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
