import React from 'react'
import logomain from '../assets/logomain.png'
import '../styles/header.css'

const Header = () => {
  return (
    <>
        <div className="header-container">
            <img src={logomain} alt="logo" />
            <span>Girman</span>
        </div>
    </>
  )
}

export default Header