import React, {useState , useEffect} from 'react'
import './blogs.css'



// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';




function Blogs(props) {

  const data = props.data
  
  useEffect (() => {
    console.log("I RAN");
  }, []);

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
        
        <>
        {
        data.map((data) => (  
            
         
        <SwiperSlide key={data.index} className='blog'>
          <> <div className="client__avatar">
          <img src={data.avatar} alt="Avatar one" />
           </div>
           <h5 className='client__name'>{data.name}</h5>
           <small className='clients_blog'>
          {data.blog}
           </small>
          </>
         
        </SwiperSlide> 
        ))}
        </>
         
      </Swiper>
    </section>
  )
}

export default Blogs