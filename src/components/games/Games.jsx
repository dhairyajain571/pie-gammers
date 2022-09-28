import React from 'react'
import IMG6 from "../../assets/Rebel.gif"
import "../games/games.css"


const data = [

    
    { id: 1,
     image: IMG6,
     tittle: 'This is Game Description',
     play : "#"
    },
    { id: 2,
        image: IMG6,
        tittle: 'This is Game Description',
        play : "#"
       }
   
   ]


function Games() {
  return (
    <section id='game'>
      <h5>Our Recent Work</h5>
      <h2>GAMES</h2>

      <div className="container game__container">
        {
          data.map(({id , image , tittle , play}) => {
            return (
              <article key={id} className='game__item'>
                 <div className='game__item-image'>
                    <img src={image} alt={tittle} />
                  </div>
                   <h3>{tittle}</h3>
                  <div className="game__item-cta">
                      <a href={play} className='btn' target="_blank">Play</a>
                      
                  </div>
              </article>
            )
          })
        }
        

      </div>
    </section>
  )
}

export default Games