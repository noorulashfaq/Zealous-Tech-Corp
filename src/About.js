import React from 'react'
import './About.css'
import Employee1 from './Images/Employee1.png'
const About = () => {
  return (

    <div className='about-main'>

      <h1 className='about-title'>Team - Zealous Tech Corp</h1>

    <div className='about-container'>

      <div className='inner-container'>
        <img src={Employee1} alt='Employee 1'/>
        <h2>Employee 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus, et praesentium, quibusdam quam perferendis reiciendis error eius nesciunt doloremque cumque! Corporis tempore suscipit delectus nisi hic nobis quod aliquid!</p>
      </div>

      <div className='inner-container'>
        <img src={Employee1} alt='Employee 2'/>
        <h2>Employee 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus, et praesentium, quibusdam quam perferendis reiciendis error eius nesciunt doloremque cumque! Corporis tempore suscipit delectus nisi hic nobis quod aliquid!</p>
      </div>

      <div className='inner-container'>
        <img src={Employee1} alt='Employee 3'/>
        <h2>Employee 3</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus, et praesentium, quibusdam quam perferendis reiciendis error eius nesciunt doloremque cumque! Corporis tempore suscipit delectus nisi hic nobis quod aliquid!</p>
      </div>

      </div>

    </div>
  )
}

export default About
