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
            {/* <Typography variant='h6' component='div' sx={{flexGrow:1,display:{xs:'none',md:'flex'},color:"#0c83c8"}}>Zealous Tech Corp</Typography> */}
            <img className='img-zealous' src={Zealous} style={{width:"20%", marginTop:"5px",marginBottom:"5px"}} alt="Zealous logo"/>
            

            <div className={isOpen ? "nav-menu open" : "nav-menu"} id='navigation-bar' >
                <a href='/'><button>Home</button></a>
                <a><button>About</button></a>
                <a><button>Services</button></a>
                <a><button>Team</button></a>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
