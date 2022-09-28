
import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   
    emailjs.sendForm('service_cta3mck', 'template_kye06tk', form.current, 'vTpOBOu-CvFgsuFtz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
       <div className="contact__options">
        <article className="contact__option">
           <AiOutlineMail className="contact__option-icon"/>
           <h4>Email</h4>
           <h5>hr@pie-gamers.com</h5>
           <a href="mailto:hr@pie-gamers.com">Send a Message</a>
        </article>

        <article className="contact__option">
           <BsLinkedin className="contact__option-icon"/>
           <h4>LinkedIn</h4>
           <h5>Pie-Gamers</h5>
           <a href="https://www.linkedin.com/company/pie-gamers/" target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
           <FiPhoneCall className="contact__option-icon"/>
           <h4>Phone</h4>
           <h5>+91-8957656786</h5>
           <a href="callto:+91-8957656786" target="_blank">Make a Call</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="text" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact