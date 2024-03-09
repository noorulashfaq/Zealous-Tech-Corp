import React, { useState } from 'react'
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import Zealous from '../Images/Zealous.png'
import '../styles/Navbar.css'

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
                <a href='/'><button>Home</button></a>
                <a><button>About</button></a>
                <a><button>Services</button></a>
                <a><button>Contact</button></a>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
