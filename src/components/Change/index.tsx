import React from 'react';
// import cat from '../assets/images/catscratch.png';
import CardCatScratch from '../CardCatscratch/index.js';
import CardCatClicker from '../CardCatclicker/index.js';
import { Box } from '@material-ui/core';
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
    return (<Box className='Proj-main'> <div className="projects-header">Projects!<br/></div>
        <div className='Card-style'>
            <CardCatScratch/>
            <CardCatClicker/>
        </div>
       
        </Box>)
}
export default function ChangeText(prop) {
    if(prop){
        return(mainDesc())
    } else{
        return (projDesc())
    }
};
