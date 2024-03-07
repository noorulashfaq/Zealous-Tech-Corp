import React from 'react'
import '../styles/Team.css'
import Employee1 from '../Images/Employee1.png'
const Team = () => {
  return (

    <div className='about-main'>

      <div className='about-us-content'>
          <h1 className='about-us-text'>About the Organization</h1>
          <p>&#x2022; Zealous Academy of Career Training is most desirable young and
          enthusiastic team of Skill set training company focus on technical part.<br/>
          &#x2022; We are known for our practical approach towards trainings that enable students to gain
          real-time exposure on competitive technologies and meet the industry requirement.<br/>
          &#x2022; Our Trainings are focused on perfect improvement of technical skills set
          for entry level recruits in organizations and working professional.<br/>
          &#x2022; Training classes are sure to help the trainee with complete practical training
          and real time methodologies which lead them to get placed, our previous
          candidates are best example of this fact.</p>
      </div>

      <div className='about-team'>
      <h1 className='about-title'>Team - Zealous Tech Corp</h1>

          <div className='about-container'>
            
            <div className='inner-container'>
              <img src={Employee1} alt='Employee 1'/>
              <h2>Razak Mohamed S</h2>
              <p>Founder & Head of Talent Development</p>
            </div>
            
            <div className='inner-container-subset'>
            <div className='inner-container-2'>
              <img src={Employee1} alt='Employee 2'/>
              <h2>Rasheedha R</h2>
              <p>Operations Head</p>
            </div>
            
            <div className='inner-container-2'>
              <img src={Employee1} alt='Employee 3'/>
              <h2>Annamalai</h2>
              <p>Development Manager</p>
            </div>
            </div>
            
            </div>

      </div>
    </div>
  )
}

export default Team
