import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src='https://scholarspace.in/SSL_files/ScholarSpace.png' alt=''></img>
      </div>

      <div className="nav-menu">
        <Link className="nav-link" to='/'>HOME</Link>
        <Link className="nav-link" to='/features'>FEATURES</Link>
        <Link className="nav-link" to='/contact'>CONTACT US</Link>
      </div>

      <div className="nav-login">
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
};
