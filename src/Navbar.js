import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import Zealous from './Images/Zealous.png'

const Navbar = () => {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar style={{backgroundColor:"white"}}>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'none',md:'flex'}}}>
                <LocalLibraryIcon/>
            </IconButton>
            {/* <Typography variant='h6' component='div' sx={{flexGrow:1,display:{xs:'none',md:'flex'},color:"#1976d2"}}>Zealous Tech Corp</Typography> */}
            <img className='img-zealous' src={Zealous} style={{width:"20%", marginTop:"5px",marginBottom:"5px"}} alt="Zealous logo"/>
            <Box sx={{display:{xs:'none',md:'flex'},color:"#1976d2",position:"relative",left:"900px",fontWeight:"bolder"}}>
                <Button color='inherit' href='/'>Home</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Services</Button>
                <Button color='inherit'>Team</Button>
            </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
