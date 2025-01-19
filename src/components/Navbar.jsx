import React from 'react'
import '../styles/nav.css'
import logo from '../assets/logosmall.png'
import { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
        <div className="nav-container">
            <div className="nav-subcontainer">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <div className="nav-logo-text">
                        <span>Girman</span>
                        <span>TECHNOLOGIES</span>
                    </div>
                </div>
                {/* Hamburger menu for mobile */}
                <div className="nav-hamburger" onClick={toggleMenu}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li>SEARCH</li>
                        <li><a href='https://girmantech.com/' target='_blank'>WEBSITE</a></li>
                        <li><a href='https://www.linkedin.com/company/girmantech/' target='_blank'>LINKEDIN</a></li>
                        <li><a href="mailto:contact@girmantech.com">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar