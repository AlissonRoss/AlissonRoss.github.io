import React from 'react';
// import cat from './assets/images/catscratch.png';


function ChangeText(prop){
    const orgState = <div>I am a Computer Science and Engineering major at Merced Community College.
    I am also a Front-end web developer for HackMerced and a IT Assistant for SJDC.
    I make website components using ReactJS, Typescript, and other front-end tools.
    This site is under current re-construction.</div>

    const projState = <div>  Projects section coming soon! </div>
    {/* <img className="Tux" alt='cat' src= {cat}/> </div>; */}

    if(prop === "main"){
        prop = orgState
    }
    else if(prop === "projects"){
        prop =  projState
    }
    return(
        <div>{prop}</div>
    );
} export default ChangeText;
