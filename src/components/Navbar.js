import React, { useState } from 'react'
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import Zealous from '../Images/Zealous.png'
import '../styles/Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    alert("hi")
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar style={{backgroundColor:"white"}}>

            <img className='img-zealous' href='/' src={Zealous} style={{width:"15%", marginTop:"5px",marginBottom:"5px"}} alt="Zealous logo"/>

            <div className={isOpen ? "nav-menu open" : "nav-menu"} id='navigation-bar' >
                <a href='/'><button><Link to="home-section" smooth={true} duration={500}>Home</Link></button></a>
                <a><button><Link to="about-section" smooth={true} duration={500}>About</Link></button></a>
                <a><button><Link to="services-section" smooth={true} duration={500}>Services</Link></button></a>
                <a><button><Link to="contact-section" smooth={true} duration={500}>Contact</Link>       </button></a>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
