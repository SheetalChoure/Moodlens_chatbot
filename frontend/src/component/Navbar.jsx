// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import './Navbar.css'
// import logo from './image/logo.png'


// function Navbar() {
//   const navigate = useNavigate();
  

//   const opensignin = () => {
//     navigate('/signin');
//   };

//   return (
//     <>
//     <div className='navbar'>
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <img className="logo" src={logo} alt="" />
//     <a className="navbar-brand" href="/">
//       Moodlens
//     </a>
//     <div className='nav-links'>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/Blog">
//             Blog
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/Research">
//             Research
//           </a>
//         </li>

//         <li className="nav-item">
//           <a className="nav-link" href="/About">
//             About Us
//           </a>
//         </li>
//         </ul>
//         <button className='btn' onClick={opensignin}>Sign In</button>
        
//     </div>
//     </div>
//   </div>
// </nav>
// </div>
// <footer className='foot'>
//   <div>
//     <span></span>
//   </div>

// </footer>

// </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './image/logo.png';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const opensignin = () => {
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img className="logo" src={logo} alt="logo" />
            <a className="navbar-brand" href="/">
              Moodlens
            </a>

            {/* Animated Hamburger */}
            <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            {/* Nav Links */}
            <div className={`nav-menu ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Research">Research</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">About Us</a>
                </li>
              </ul>
              <button className="btn" onClick={opensignin}>Sign In</button>
            </div>
          </div>
        </nav>
      </div>

      <footer className="foot">
        <div>
          <span></span>
        </div>
      </footer>
    </>
  );
}

export default Navbar;
