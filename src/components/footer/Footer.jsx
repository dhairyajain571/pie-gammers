import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


function Footer() {
  return (
    <footer id="footer">
      <a href="#" className='footer__logo'>PIE GAMERS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Games</a></li>
        <li><a href="#experience">Blogs</a></li>
        <li><a href="#services">Contact</a></li>
      </ul>
      

      <div className='footer__socials'>
        <a href="#"><BsInstagram /></a>
        <a href="#"><BsLinkedin/></a>
        <a href="#"><BsWhatsapp/></a>
      </div>
 
      <div className="footer__copyright">
        <small>&copy;Pie-Gamers</small>
        <br/>
        <small>8, Agra Rd, near Puri Hotel, Fateh Tibba, Mishra Market, Jaipur, Rajasthan,302003</small>
      
      </div>


    </footer>
  )
}

export default Footer