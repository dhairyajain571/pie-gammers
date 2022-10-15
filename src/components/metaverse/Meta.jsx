import React from 'react'
import './meta.css'
import Meta_img from '../../assets/meta_card.jpg'

function Meta() {
  return (
    <div id="#meta" className='meta'>
        <div className='meta__content'>
        <h1>Metaverse</h1>
        <h3>with <strong>Pie Gamers</strong></h3>
        <article>
            <h2>
             Get a Touch of Virtuality
            </h2>
            <h3> Bring Gaming to Higher Levels
                <br/>with Real life Gaming Experience </h3>
        </article>
        <a className=' btn btn-primary' href='#'> Explore Meta</a>
        </div>
        <div className='img__container'>
            <img src={Meta_img}  alt="metaverse"></img> 
        </div>
        </div>
  )
}

export default Meta