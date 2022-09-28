import React from 'react'

import VIDEO from './assets/video.mp4'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Games from './components/games/Games'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'
import Sound from 'react-sound'
import Music from './assets/Fire Burning.wav'
import Footer from './components/footer/Footer'



const App = () =>
 {
    
  
    return (
          <>
          
          <Sound
      url={Music}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}

       />
          
            <video id="background-video" autoPlay loop muted>
          <source
           src={VIDEO}
           type="video/mp4"
          />
            </video>
          
            <Nav></Nav>
            <Header></Header>
            <Games></Games>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
            </>
       
    );
};

export default App;
