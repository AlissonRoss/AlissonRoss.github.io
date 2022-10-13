import React from 'react';
// import cat from '../assets/images/catscratch.png';
import CardCatScratch from '../CardCatscratch/index.js';
import CardCatClicker from '../CardCatclicker/index.js';
import { AccordionSummary, AccordionDetails, Box, Accordion, Typography, CardMedia } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Paper } from '@mui/material';
import ReactImg from '../assets/images/react.png';

import 'animate.css';
function mainDesc(){
    return  ( <Box className='App-main'> <div className="Hello-world">Hello World!<br/></div>
        I am a Computer Science and Engineering major at Merced Community College.
        I am also a Front-end web developer for HackMerced and a IT Assistant for SJDC.
        I make website components using ReactJS, Typescript, and other front-end tools.<br/>
        This site is under current re-construction.
        </Box>)
}
function projDesc(){
    return (<Box className='Proj-main'> <div className="projects-header">Projects and Guides<br/></div>
            <Accordion className="Accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                        <Typography gutterBottom variant="h5" className="Typo">2022 Web Dev Guides</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                    <Paper variant="outlined">
                        <img src={ReactImg} width="90%"></img>
                        <br/> <Typography variant='caption' color="text.secondary">The following are links to the Web Dev Guides I have written for workshops</Typography>
                    </Paper>
                    <Button className="Typo" href="https://www.notion.so/Intro-to-ReactJS-Guide-Fall-2022-5978106126f94dfd8ea0597c47177816">2022 Intro to ReactJS Guide</Button>
                    <Button className="Typo" href="https://www.notion.so/CalBridge-Basic-Git-GitHub-Guide-Fall-2022-086521b3c9064624be04b2cfe39d5a2f">2022 Git & GitHub Basics</Button>
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
