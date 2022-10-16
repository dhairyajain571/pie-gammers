import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {GiGamepad} from 'react-icons/gi'
import {BiBook} from 'react-icons/bi'
import {AiFillInfoCircle} from 'react-icons/ai'

import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

function Nav() {
  const [ activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#meta" onClick={() => setActiveNav('#meta')} className={activeNav === '#meta' ? 'active' : ''}><AiFillInfoCircle /></a>
      <a href="#game" onClick={() => setActiveNav('#game')} className={activeNav === '#game' ? 'active' : ''}><GiGamepad /></a>
      <a href="#blog" onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}><BiBook /></a>
      
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav