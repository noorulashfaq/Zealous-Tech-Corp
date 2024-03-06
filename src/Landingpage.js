import React from 'react'
import Homepage from './Homepage'
import About from './About'
import Employee1 from './Images/Employee1.png'
import HeroImg from './Images/HeroImg.png'
import ImageCarousel from './Carousel'

const Landingpage = () => {

  const images = [Employee1,HeroImg];

  return (
    <div>
      <Homepage/>
      <ImageCarousel/>
      <About/>
    </div>
  )
}

export default Landingpage
