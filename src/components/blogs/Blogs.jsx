import React from 'react'
import './blogs.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data = [

    { avatar: AVTR1,
     name: "Name",
     blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
     
    },
    { avatar: AVTR2,
      name: "Name",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      
     },
     { avatar: AVTR3,
      name: "Name",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      
     },
     { avatar: AVTR4,
      name: "Name",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      
     }
    ]

function Blogs() {
  return (
    <section id='blog'>
      <h5>Get In The Community</h5>
      <h2>BLOGS</h2>
      <Swiper className="container blogs__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
    
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
       >
        {
          data.map(({avatar , name , blog} , index) =>
          {
            return(
              <SwiperSlide key={index} className='blog'>
       
                 <div className="client__avatar">
                   <img src={avatar} alt="Avatar one" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='clients_blog'>
                    {blog}
                  </small>
              </SwiperSlide> 

             )
          })
        }
      </Swiper>
    </section>
  )
}

export default Blogs