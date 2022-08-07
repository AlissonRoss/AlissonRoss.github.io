import React from 'react';
// import cat from './component/assets/images/catscratch.png';
function mainDesc(){
    return <div> I am a Computer Science and Engineering major at Merced Community College.I am also a Front-end web developer for HackMerced and a IT Assistant for SJDC.I make website components using ReactJS, Typescript, and other front-end tools.This site is under current re-construction.</div>
}
function projDesc(){
    return <div>"Projects section coming soon!"</div>
}
export default function ChangeText(prop) {

    if(prop.localeCompare("projects")){
        return (          
            projDesc()
        )
    } if(prop.localeCompare("main")) {
        return(mainDesc())
    }
};
