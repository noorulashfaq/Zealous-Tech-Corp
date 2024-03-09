import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/Services.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Services() {
  return (
      <div id="services-section" className='services'>
              <h1 className='services-text'>Services we offer</h1>

              <div className='services-main'>
            <div className='services-container'>

    <div>
    <Card className='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography style={{color:"#fc7a46"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Business to Client
        </Typography>
        <Typography style={{color:"#0c83c8"}} className='services-typo' variant="h6" component="div">
        Corporate Training
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <br/>
        <Typography style={{color:"#0c83c8"}} variant="body2">
        {bull} Onboarding training<br/>
		    {bull} Internships<br/>
		    {bull} Domain Training
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color:"#fc7a46"}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    <div>
    <Card className='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography style={{color:"#fc7a46"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Business to Business
        </Typography>
        <Typography style={{color:"#0c83c8"}} className='services-typo' variant="h6" component="div">
        Campus Training
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <br/>
        <Typography style={{color:"#0c83c8"}} variant="body2">
		    {bull}Value added courses<br/>
		    {bull}Workshops<br/>
		    {bull}Bootcamps

        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color:"#fc7a46"}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </div>
        <div className='services-container'>
    <div>
    <Card className='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography style={{color:"#fc7a46"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Business to Client
        </Typography>
        <Typography style={{color:"#0c83c8"}} className='services-typo' variant="h6" component="div">
        In-House Training
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <br/>
        <Typography style={{color:"#0c83c8"}} variant="body2">
        {bull}Skill & Competency development<br/>
		    {bull}Competitive Training<br/>
		    {bull}Bootcamps / Internships
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color:"#fc7a46"}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    <div>
    <Card className='card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography style={{color:"#fc7a46"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Business to Business
        </Typography>
        <Typography style={{color:"#0c83c8"}} className='services-typo' variant="h6" component="div">
        Product development
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <br/>
        <Typography style={{color:"#0c83c8"}} variant="body2">
        {bull}Skill & Competency development<br/>
		    {bull}Competitive Training<br/>
		    {bull}Bootcamps / Internships
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color:"#fc7a46"}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>

       </div>
      </div>
  );
}