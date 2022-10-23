import React from 'react'
import './games.css'
import Game_img from './../../assets/jungle.jpg'
import Game_back1 from './../../assets/back_game.jpg'
import Game_back2 from '../../assets/Game_back2.jpg'

function Games() {

  const game_data = [
    {
      id : 1 , 
      image : Game_img, 
      bg: Game_back1 , 
      tittle : "Jungle Fable",
      description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt neque mollitia fuga, rem aperiam dolores numquam iure non temporibus exercitationem quas itaque blanditiis perspiciatis praesentium eligendi a harum doloribus tempore?",
      image2 : Game_img, 
      bg2: Game_back2 , 
      tittle2 : "Jungle Fable",
      description2 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt neque mollitia fuga, rem aperiam dolores numquam iure non temporibus exercitationem quas itaque blanditiis perspiciatis praesentium eligendi a harum doloribus tempore?"
    }
  ]

   
  return (
    <div id='game'>
      <h5>Our Recent Work</h5>
      <h2>GAMES</h2>

     {game_data.map(({id, image , bg , tittle ,description , image2 , bg2 , tittle2 ,description2 })=> {
     return( 
     <>
     <div className='game__containerup' key={id} style={{ backgroundImage: `url(${bg})` }}>
       <div className='content_img'>
         <img src={image} alt="game_logo"></img>
        </div>
       <div className='content_text_up'>
          <h1>{tittle}</h1>
          <h4>{description}</h4>
         <a href="#" className='btn btn-primary'>Play</a>
      </div>
    </div>
      <div className='game__containerdown' style={{ backgroundImage: `url(${bg2})` }}>
      <div className='content_img up'>
        <img src={image2} alt="game_logo"></img>
      </div>
        <div className='content_text_down'>
           <h1>{tittle2}</h1>
           <h4>{description2}</h4>
           <a href="#" className='btn btn-primary '>Play</a>
        </div>
      <div className='content_img down'>
        <img src={image2} alt="game_logo"></img>
      </div>
    </div>
    </>
     ) 
     })}
     
      
      
    </div>
  )
}

export default Games