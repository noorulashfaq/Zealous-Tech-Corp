// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '100vh',
//     minWidth: '100vw',
//     flexGrow: 1,
//     padding: theme.spacing(10),
//     backgroundColor: 'White',
//   },
//   card: {
//     height: '150%',
//     color:'#fc7a46',
//     display: 'flex',
//     flexDirection: 'column',
//     backgroundColor: 'transparent',
//     border: '1px solid #fc7a46',
//     padding: theme.spacing(0),
//     transition: 'background-color 0.3s, color 0.3s', // Smooth transition for color change
//     '&:hover': {
//         color: 'white',
//       backgroundColor: '#fc7a46', // New background color on hover // New text color on hover
//     },
//   },
//   cardContent: {
//     flexGrow: 1,
   
//   },
//   outlinedText: {
//     color: 'white',
//    // Outline effect
//     transition: 'color 1s', // Smooth transition for color change
//     '&:hover': {
//       color: 'white', // New text color on hover
//     },
//   },
//   title: {
//     visibility: 'visible',
//     transition: 'visibility 0.3s',
//     '&:hover': {
//         color:"white"
//     },
//   },
//   typo:{
//     color:'#fc7a46',
//     fontSize:'20px',
//     fontWeight:"bold",
//   }
// }));

// const services = [
//   {
//     title: 'JavaScript Full Stack (MERN)',
//     titlehead:'Indepth Knowledge',
//     details: 'HTML, CSS, Java Script, Core Java, JavaEE, Spring Boot, MVC, Hibernate, JUnit,Mockito, REST',
//     backgroundImage: 'url("../image/firstBG.jpg")'
//   },
//   {
//     title: 'Java Full Stack',
//     titlehead:'Indepth Knowledge',
//     details: 'React, Node, Express,SpringBoot, Hibernate, Javaserver Pages, Tomcat  ',
//   },
//   {
//     title: 'Python Full Stack',
//     titlehead:'Indepth Knowledge',
//     details: 'Django, Flask, SQLAlchemy, Python-Django REST Framework', 
//   },
//   {
//     title: 'Stack Tools',
//     titlehead:'Indepth Knowledge',
//     details: 'Details for Stack Tools',
//   },
//   {
//     title: 'Problem Solving and Critical Thinking',
//     titlehead:'Indepth Knowledge',
//     details: 'Discover the power of problem-solving and critical thinking on our Teaching, where we unravel the mysteries of effective decision-making and provide tools to express these skills in every aspect of life.',
//   },
//   {
//     title: 'Java Technology',
//     titlehead:'Indepth Knowledge',
//     details: 'Discover the power of Java technology for web development. With its versatility, scalability, and robust security features, Java empowers developers to create dynamic and secure web applications. ',
//   },
//   {
//     title: 'Web Technologies',
//     titlehead:'Indepth Knowledge',
//     details: 'JSX, express handlebars, Java EE Servlets, JSP, ASP.NET, MVC.Net, JSON,HTML, XML, PHP, JQuery, AJAX',
//   },
//   {
//     title: 'Web Server',
//     titlehead:'Indepth Knowledge',
//     details: 'A web server is the backbone of online communication, serving as the bridge between users and websites.Utilizing technologies like Apache, Nginx, or Microsoft IIS, web servers ensure seamless access to web pages, applications, and services.',
//   },
// ];

// const Technologies = () => {
//   const classes = useStyles();
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <Container className={classes.root}>
//       <div className='heading'>
//         <h3 style={{ color: '#0c83c8' }}>Our TechEdify</h3>
//       </div>
//       <br /><br />
//       <Grid container spacing={4}>
//         {services.map((service, index) => (
//           <Grid item style={{rowGap:"10%"}} xs={12} sm={6} md={3} key={index}>
//             <Card
//               className={classes.card}
//               style={{ backgroundImage: service.backgroundImage }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <CardContent className={classes.cardContent}>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   {hoveredIndex === index ? ' ' : service.title}
//                 </Typography>
//                 {hoveredIndex === index && (
//                   <Typography variant="body1" className={classes.outlinedText}>
//                   {service.titlehead}
//                 </Typography>,
//                   <Typography variant="body1" className={classes.outlinedText}>
//                     <Typography className={classes.typo}>{service.titlehead}:<br></br></Typography>
//                     {service.details}
//                   </Typography>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Technologies;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../styles/Technologies.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Technologies() {
  return (
    <div className='technologies-box' sx={{ flexGrow: 1 }}>
        <h1 style={{color:"#0c83c8"}}>Technologies we train</h1>
      <Grid className='tech-inner-box' container spacing={2}>
        <Grid item xs={6} md={3}>
          <Item className='grid-element'>
            <div>
            <h4>JavaScript Full Stack</h4>
          <p>React JS, Node JS, Express JS, MongoDB</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item className='grid-element'>
          <div>
            <h4>Java Full Stack</h4>
          <p>SpringBoot, Hibernate, Javaserver Pages, Tomcat</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item className='grid-element'>
          <div>
            <h4>Python Full Stack</h4>
          <p>Django, Flask, SQLAlchemy, Python-Django REST Framework</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item className='grid-element'>
          <div>
            <h4>Stack Tools</h4>
          <p>Details for Stack Tools</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item className='grid-element'>
          <div>
            <h4>Problem Solving</h4>
          <p>Unravel the mysteries of effective decision-making</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item className='grid-element'>
          <div>
            <h4>Web Technologies</h4>
          <p>JSX, express handlebars, Java EE Servlets, JSP, ASP.NET, MVC.Net, JSON,HTML, XML, PHP, JQuery, AJAX</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item className='grid-element'>
          <div>
            <h4>Web Server</h4>
          <p>Apache, Nginx, or Microsoft IIS</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item className='grid-element'>
          <div>
            <h4>Java Technology</h4>
          <p>Java empowers developers to create dynamic and secure web applications</p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}