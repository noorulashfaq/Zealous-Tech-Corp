import React from 'react'
import Homepage from './components/Homepage'
import Team from './components/Team'
import Offerings from './components/Offerings'
import Contact from './components/Contact'
import Services from './components/Services'
import Technologies from './components/Technologies'

const Landingpage = () => {

  return (
    <div>
      <Homepage/>
      <Team/>
      <Offerings/>
      <Services/>
      <Technologies/>
      <Contact/>
    </div>
  )
}

export default Landingpage
