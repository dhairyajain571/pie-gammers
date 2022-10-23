import React from 'react'
import './blogs.css'
import AVTR1 from '../../assets/1.jpg'
import AVTR2 from '../../assets/slide.png'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';








const data = [

  { avatar: AVTR1,
   name: "Name",
   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
   
  },
  { avatar: AVTR2,
    name: "Name",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
   }
 
 ]


function Blogs() {
  return (
     
    <section id='blog' >
      <h1>Blogs</h1>
      <h2>explore here</h2>
      <div className='blog'>
      <div className='container_back'> 
      <div className='blog_container'>
      <img className="blog_image" src={AVTR2} alt="" />
      <div className='blog_tittle'>Tittle</div>
        <h3 className='blog_description'>Description</h3>
      </div>
      </div>

      <div className='container_back'> 
      <div className='blog_container'>
      <img className="blog_image" src={AVTR2} alt="" />
      <div className='blog_tittle'>Tittle</div>
        <h3 className='blog_description'>Description</h3>
      </div>
      </div>
      <div className='container_back'> 
      <div className='blog_container'>
      <img className="blog_image" src={AVTR2} alt="" />
      <div className='blog_tittle'>Tittle</div>
        <h3 className='blog_description'>Description</h3>
      </div>
      </div>
      </div>

    </section>
   
  )
}

export default Blogs