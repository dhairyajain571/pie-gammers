import React from 'react'
import './header.css'
import CTA from './CTA'

import Logo from '../../assets/logo.png'


import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header id="#" className="header" >
      <div className="header_container">
      <div className='header_content'>
        <img src={Logo} className="logo_img" alt="logo" />
        <h1>PIE GAMERS</h1><br/>
      <h2>Live The Adventure</h2>
      <CTA className="cta__container"></CTA>
      </div>
      <HeaderSocials></HeaderSocials>
      
      </div>
      
      
    </header>
  )
}

export default Header