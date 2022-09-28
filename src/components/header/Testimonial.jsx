import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/1.jpg'


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
  { avatar: AVTR1,
    name: "Name",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
   }
 
 ]


function Testimonial() {
  return (
   
      
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
    
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
       >
        {
          data.map(({avatar , name , review} , index) =>
          {
            return(
              <SwiperSlide key={index} className='testimonial' style={{backgroundImage:`url(${avatar})`} }>
       
                 
                   <h5 className='event__name'>{name}</h5>
                  <div className='event__description'>{review}</div>
                 
                  
              </SwiperSlide> 

             )
          })
        }
      </Swiper>
   
  )
}

export default Testimonial