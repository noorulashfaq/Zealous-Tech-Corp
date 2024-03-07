import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/Offerings.css'

export default function Offerings() {
//   const [expanded, setExpanded] = React.useState<string | false>(false);
const [expanded, setExpanded] = React.useState(false); // No type annotation

  const handleChange = (panel) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='offerings-total'>
        <div className='offerings-container'>
            <h1 className='offerings-text'>Why choose us?</h1>

      <Accordion className='accord' style={{backgroundColor:"#0c83c8",color:"white"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "80%", flexShrink: 0 }}>
            Domain Knowledge
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"white",color:"#0c83c8"}}>
          <Typography className='offer-text'>
          Gain a deep understanding of industry-specific concepts and best practices through our expert-led domain knowledge sessions. Whether you're in finance, healthcare, retail, or any other sector, we provide tailored insights to help you stay ahead of the curve.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='accord' style={{backgroundColor:"#0c83c8",color:"white"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography> */}
          <Typography sx={{ width: "80%", flexShrink: 0 }}>
          Technology Training
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"white",color:"#0c83c8"}}>
          <Typography className='offer-text'>
          Keep pace with the latest advancements in technology with our cutting-edge training programs. From foundational skills to advanced techniques, our courses cover a wide array of technologies, including programming languages, frameworks, cloud computing, data science, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='accord' style={{backgroundColor:"#0c83c8",color:"white"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography> */}
          <Typography sx={{ width: "80%", flexShrink: 0 }}>
            Agile Process
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"white",color:"#0c83c8"}}>
          <Typography className='offer-text'>
          Embrace agility and streamline your development processes with our Agile training and consulting services. Learn how to adapt quickly to changing requirements, improve collaboration within teams, and deliver high-quality software products faster and more efficiently.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='accord' style={{backgroundColor:"#0c83c8",color:"white"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "80%", flexShrink: 0 }}>Proof of Concepts</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"white",color:"#0c83c8"}}>
          <Typography className='offer-text'>
          Building Capstone Application - 
          Put theory into practice with our hands-on proof of concept projects. Work alongside our experienced mentors to develop real-world solutions, from conceptualization to implementation.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
