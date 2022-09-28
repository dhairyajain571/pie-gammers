import React from 'react'
import './header.css'
import Testimonial from './Testimonial'

import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className='tittle-container'>
        <h5>Welcome To</h5>
        <h1>PIE GAMERS</h1>
        <h5 className='text-light'>Failure Does Not Mean Game Over!</h5>
        </div>
        <HeaderSocials />
        <Testimonial></Testimonial>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header