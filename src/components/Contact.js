import '../styles/Contact.css';
import { Button, TextField, FormControl, InputLabel, FormHelperText,Box,Input,InputAdornment,Typography,Grid, IconButton } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    
    <div className="container">
      
      <div className='linkwithus'>
        
        
        <div className='form'>
        
        
<FormControl>
<h3 className='heading'>Connect with us</h3>
  {/* <InputLabel htmlFor="username">Username</InputLabel> */}
  {/* <TextField id="username" variant='outlined' label="Username"/> */}
  <TextField label="Name"  InputLabelProps={{
        style: { color: 'white' } // Change 'red' to your desired font color
      }}
      variant='standard' 
      inputProps={{ style: { color: 'white' } }}
      required
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'orange', // Change outline color
          },
        },
      }}
      /><br></br>
        <TextField label="Mail"
        InputLabelProps={{
          style: { color: 'white' } // Change 'red' to your desired font color
        }} 
        variant='standard' 
        inputProps={{ style: { color: 'white' } }}
        required /><br></br>

        <TextField label="Phone" 
        variant='standard' 
        required
        inputProps={{ style: { color: 'white' } }}
        InputLabelProps={{
          style: { color: 'white' } // Change 'red' to your desired font color
        }} /><br/>
        
        {/* This is for Comment */}
        <Grid container spacing={2}>
      <Grid item xs={12} className='leavecomment'>
        <Typography variant="h6" style={{color:"white", textAlign:'center'}}>Leave a Comment</Typography>
      </Grid>
      <Grid item xs={12}InputLabelProps={{style:{color:'#fc7a46'}}}>
        <TextField
          id="comment"
          label="Your Comment"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          InputLabelProps={{
            style: { color: 'White' },
            // Change 'red' to your desired font color
          }}
          
        />
      </Grid>
    </Grid><br></br>
    <Button variant="contained" 
     sx={{
      color: 'white',
      backgroundColor: '#fc7a46', // Green color 
          '&:hover': {
            backgroundColor: '#fc7a46f3', // Dark green color on hover
          },
    }}
    >Submit</Button>
    {/* <TextField
      label="Custom Textfield"
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: '#fc7a46', // Change outline color when focused
          },
        },
      }}
    /> */}
</FormControl>
        </div>
      </div>

      
      <div className='contact'>
        
        <div className='detail'>
      

          


    <TableContainer className='tablecontent' style={{ border: 'none' }}>
      <Table>
        
        <TableBody sx={{ '& td': { color:'white' } }}>
          <TableRow>
            <TableCell colSpan={3} style={{ border: 'none',fontSize:20 }} className='tablehead'><h1>Contact Information</h1></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ border: 'none' }}><PlaceIcon sx={{ fontSize: 50 }}/></TableCell>
            <TableCell style={{ border: 'none' , fontSize:16 }}>196/8, Gokulakrishna streetLic colony,Hotel vasantham road,Opp to new bus stand,Salem – 636004</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ border: 'none' }}><PhoneIcon sx={{ fontSize: 50 }}/></TableCell>
            <TableCell style={{ border: 'none' , fontSize:16}}>9677520692</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ border: 'none' }}><ContactMailIcon sx={{ fontSize: 50 }}/></TableCell>
            <TableCell style={{ border: 'none' , fontSize:16}}>zactacademy@gmail.com <br></br>zealoustechcorp@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ border: 'none' }}><WhatsAppIcon  sx={{ fontSize: 50 }}/></TableCell>
            <TableCell style={{ border: 'none' , fontSize:16}}>9597334782, 8667002959</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      
      {/* <Typography>
      <PlaceIcon sx={{ fontSize: 50 }}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        tortor eu nisi vestibulum scelerisque.
      </Typography>
      <Typography>
      <PhoneIcon sx={{ fontSize: 50 }}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        tortor eu nisi vestibulum scelerisque.
      </Typography>
      <Typography>
      <ContactMailIcon sx={{ fontSize: 50 }}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        tortor eu nisi vestibulum scelerisque.
      </Typography>
      <Typography>
      <LanguageIcon sx={{ fontSize: 50 }}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
        tortor eu nisi vestibulum scelerisque.
      </Typography>  */}
        </div>

      </div>
      
    </div>
  );
}

export default Contact;