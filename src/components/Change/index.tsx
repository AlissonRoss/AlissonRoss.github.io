import React from 'react';
import cat from '../assets/images/catscratch.png';
function mainDesc(){
    return  (<div> <div className="Hello-world">Hello World!<br/></div>
        I am a Computer Science and Engineering major at Merced Community College.<br/> 
        I am also a Front-end web developer for HackMerced and a IT Assistant for SJDC.<br/>
        I make website components using ReactJS, Typescript, and other front-end tools.<br/>
        This site is under current re-construction.
        </div>)
}
function projDesc(){
    return (<div> <div className="projects-header">Projects!<br/></div>
        Projects section coming soon! <br/>
        <img className="Tux" src={cat}/>
        </div>)
}
export default function ChangeText(prop) {
    if(prop){
        return(mainDesc())
    } else{
        return (projDesc())
    }
};
