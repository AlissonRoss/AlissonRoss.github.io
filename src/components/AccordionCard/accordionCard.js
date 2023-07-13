import * as React from 'react';
import { AccordionDetails, Paper, CardMedia, Typography, CardActions, Button, CardContent} from '@material-ui/core';
export default function AccordionCard() {
    return (
        
            <AccordionDetails className='Card-style'>
            {itemData.map((item) => (
                <Paper variant="outlined">
                <a href={item.projectLink}><CardMedia
                    component="img"
                    image={item.img}
                    height="50%"
                    alt={item.imgAlt}
                /></a>
                <CardContent>
                <Typography gutterBottom variant="h4" component="div" color="rgb(187, 89, 159);">
                    {item.projectName}
                </Typography>
                <Typography variant='caption' color="text.secondary"> 
                    {item.description}
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color:"rgb(187, 89, 159)",marginLeft:"2rem"}} href={item.projectLink}>DEMO</Button>
                    <Button size="small" style={{color:"rgb(187, 89, 159)"}} href={item.githubLink}>Github</Button>
                </CardActions>
                </Paper> 
        ))}
         </AccordionDetails>
    );
}
const itemData = [
    {
        projectLink: 'https://alisson.me/catpet',
        projectName: 'CatPet',
        img:require('../assets/images/catpet.png'),
        imgAlt:'Cat',
        githubLink: 'https://github.com/AlissonRoss/catpet',
        description: 'ThreeJS testbed on top of ReactJS that I created to learn more about animation, 3D Modeling, anything ThreeJS! All cat models are made by me!'
    },
    {
        projectLink: 'https://github.com/HackMerced/HackMerced-VIII',
        projectName: 'HackMerced VIII Event Page',
        img:require('../assets/images/hackviii.png'),
        imgAlt: 'HackMerced Tower',
        githubLink: 'https://github.com/HackMerced/HackMerced-VIII',
        description:'Event page for the MLH HackMerced VIII Hackathon for central valley students to view information about the 2023 event. I worked on the Tracks component, the Footer component, Mobile responsiveness, among other fixes. I delegated tasks to my team as the HackMerced Engineering Director 2023'

    },
    {
        projectLink:'https://catpet-login.vercel.app',
        projectName: 'CatPet Login UI Module 2 Project',
        img:require('../assets/images/login-ui.png'),
        imgAlt: 'CatPet Login UI',
        githubLink:'https://github.com/AlissonRoss/login-ui-ross',
        description:'Login Page Project for Bay Valley Techs Code Academy Module 2 certification. Summer 2023.'

    }
];