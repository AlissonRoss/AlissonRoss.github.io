import React from 'react';
// import cat from '../assets/images/catscratch.png';
import CardCatScratch from '../CardCatscratch/index.js';
import CardCatClicker from '../CardCatclicker/index.js';
import { AccordionSummary, AccordionDetails, Box, Accordion, Typography, CardMedia, CardActions } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Paper } from '@mui/material';
import ReactImg from '../assets/images/react.png';
import CatPetImg from '../assets/images/catpet.png';
import HackMViii from '../assets/images/hackviii.png';
import 'animate.css';

function mainDesc(){
    return  ( <Box className='App-main'> <div className="Hello-world">Hello World!<br/></div>
        I am a Computer Science and Engineering major at Merced Community College.
        I am also a Front-end web developer for HackMerced, a New Technologist Alumna from Microsoft M365 Team and Cyborg Mobile Cohort 8 2022, and a IT Assistant for SJDC.
        I make website components using ReactJS, Typescript, and other front-end tools.<br/>
        </Box>)
}
function projDesc(){
    return (<Box className='Proj-main'> <div className="projects-header">Projects and Guides<br/></div>
            <Accordion className="Accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                        <Typography gutterBottom variant="h5" className="Typo">2022- 2023 Projects</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                    <Paper variant="outlined">
                        <img src={CatPetImg} alt="Cat" width="90%"></img>
                        <Typography gutterBottom variant="h4" component="div" color="rgb(187, 89, 159);">
                            CatPet
                        </Typography>
                        <Typography variant='caption' color="text.secondary"> ThreeJS testbed on top of ReactJS that I created to learn more about animation, 3D Modeling, anything ThreeJS! All cat models are made by me!</Typography>
                        <CardActions>
                            <Button size="small" style={{color:"rgb(187, 89, 159)",marginLeft:"2rem"}} href="https://alisson.me/catpet">DEMO</Button>
                            <Button size="small" style={{color:"rgb(187, 89, 159)"}} href="https://github.com/AlissonRoss/catpet">Github</Button>
                        </CardActions>
                    </Paper> 
                    <p/>
                    <Paper variant="outlined">
                        <img src={HackMViii} alt="HackMerced page 2023" width="90%"></img>
                        <Typography gutterBottom variant="h4" component="div" color="rgb(187, 89, 159);">
                            HackMerced VIII Event Page
                        </Typography>
                        <Typography variant='caption' color="text.secondary"> Event page for the MLH HackMerced VIII Hackathon for central valley students to view information about the 2023 event. 
                            I worked on the Tracks component, the Footer component, Mobile responsiveness, among other fixes. I delegated tasks to my team as the HackMerced Engineering Director 2023.                        
                        </Typography>
                        <CardActions>
                            <Button size="small" style={{color:"rgb(187, 89, 159)"}} href="https://github.com/HackMerced/HackMerced-VIII">Github</Button>
                        </CardActions>
                    </Paper>     
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                        <Typography gutterBottom variant="h5" className="Typo">2022-2023 Web Dev Guides</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                    <Paper variant="outlined">
                        <img src={ReactImg} alt="ReactJS" width="90%"></img>
                        <br/> <Typography variant='caption' color="text.secondary">The following are links to the Web Dev Guides I have written for workshops</Typography>
                    </Paper>
                    <Button className="Typo" href="https://www.notion.so/Intro-to-ReactJS-Guide-Fall-2022-5978106126f94dfd8ea0597c47177816">2022 Intro to ReactJS Guide</Button>
                    <Button className="Typo" href="https://www.notion.so/CalBridge-Basic-Git-GitHub-Guide-Fall-2022-086521b3c9064624be04b2cfe39d5a2f">2022 Git & GitHub Basics</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/ReactJS-App-Deployment-to-GH-Pages-2023-3e5d202250c34128a404b28b597ab273">2023 ReactJS App Deployment guide to GH Pages</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/Intro-to-ReactJS-Hooks-Spring-2023-17112b1f79344d2491113ba9eca4b3e2">2023 ReactJS Intro to Hooks</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/Basic-HTML-CSS-rules-1b0e51051c7d44d4a1066f891183b8b4">2023 HTML/CSS Basics</Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom variant="h5" className="Typo">2018-2019 Projects</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                        <CardCatScratch/>
                        <CardCatClicker/>
                </AccordionDetails>
            </Accordion>      
        </Box>)
}
export default function ChangeText(prop) {
    if(prop){
        return(mainDesc())
    } else{
        return (projDesc())
    }
};
