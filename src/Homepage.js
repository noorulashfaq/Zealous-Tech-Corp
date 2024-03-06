import React from 'react'
import './Homepage.css'
import HeroImg from './Images/HeroImg.png'

const Homepage = () => {
  return (
    <div className='home-container'>


          <img src={HeroImg} alt="Zealous Tech Corp"/>


        <div className='home-sub-container'>
            <h1>Crafting innovative <span style={{color:"orange"}}>learning solutions</span> that ignite your potential</h1>
            <p>Empowering Careers<br/>
            Transforming Lives</p>
            <button className="book-demo" variant="contained">Book now</button>
        </div>

    </div>
  )
}

export default Homepage
