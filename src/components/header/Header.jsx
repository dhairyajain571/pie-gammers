import React from 'react'
import './header.css'
import Testimonial from './Testimonial'
import Rebel from '../../assets/Rebel.gif'

import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className='head__container'><img className="logo" src={Rebel} alt="logo"/> <h2  className='head__text' >PIE-GAMERS</h2><h3 className='head__text tag'>Show your game!!</h3></div>
        
        <Testimonial></Testimonial>
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header