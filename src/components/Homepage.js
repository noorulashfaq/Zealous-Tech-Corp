import React from 'react'
import '../styles/Homepage.css'
import HeroImg from '../Images/HeroImg.png'

const Homepage = () => {
  return (
    <div className='home-container'>


          <img src={HeroImg} alt="Zealous Tech Corp"/>


        <div className='home-sub-container'>
            <h1>Crafting innovative <span style={{color:"#fc7a46"}}>learning solutions</span> that ignite your potential</h1>
            <p>Learn | Practice | Implement | Career</p>
            <button className="book-demo">Book now</button>
        </div>

    </div>
  )
}

export default Homepage
