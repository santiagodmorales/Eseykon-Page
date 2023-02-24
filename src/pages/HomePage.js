import React from 'react'
import "../styles/HomePage.css";
import HomeCarousel from '../components/carousel/HomeCarousel.js';


const HomePage = () => {
  
  return (
    <div className="homeContainer">
            <div className="homeContent">
            <h1>Automatización industrial</h1>
            </div>
            <HomeCarousel/>
            

    </div>
  )
}

export default HomePage
