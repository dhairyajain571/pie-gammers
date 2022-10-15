import React , {useState} from 'react'
import VIDEO from './assets/video.mp4'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Games from './components/games/Games'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'
import Meta from './components/metaverse/Meta'
import Footer from './components/footer/Footer'
import AVAR1 from './assets/avatar1.jpg'
import AVAR2 from './assets/avatar2.jpg'
import AVAR3 from './assets/avatar3.jpg'
import AVAR4 from './assets/avatar4.jpg'



const App = () =>
 {
    
  const [data,setData1] = useState([

    { avatar: AVAR1,
     name: "Name",
     blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
     
    },
    { avatar: AVAR2,
      name: "Name",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      
     },
     { avatar: AVAR3,
      name: "Name",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      
     },
     { avatar: AVAR4,
      name: "Name",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      
     }


    ]);

  
    return (
          <>
            <Nav></Nav>
            <Header></Header>
            <Meta></Meta>
            <Games></Games>
            <Blogs data={data}></Blogs>
            <Contact></Contact>
            <Footer></Footer>
          </>
       
    );
};

export default App;
