import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="#" target="_blank"><BsLinkedin /></a>
        <a href="#" target="_blank"><BsFacebook /></a>
        <a href="#" target="_blank"><BsInstagram /></a>
        <a href="#" target="_blank"><BsTwitter /></a>

    </div>
  )
}

export default HeaderSocials