import React from 'react';
//import Starcomponent from '../src/components/Star/index.tsx';
import logo from '../src/assets/star.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import changeText from './components/Change/index.tsx';
import Button from '@material-ui/core/Button';
import cat from '../src/assets/images/catscratch.png';

//import PROJECTS from '../src/assets/projects.ts';

function App() {
  return (
    <div className="App">
      <Box className="NavBar">
        <ul>
          <Button className="Nav-home" href="#main" onClick={() => changeText("Box-projects","Box-main") }>
            Home</Button>
          <Button className="Nav-projects" href="#Box-projects" onClick={() => changeText("Box-main","Box-projects") }>
            Projects
          </Button>
          
          <Button href="https://www.linkedin.com/in/alisson-ross/">LinkedIn</Button>
        </ul> 
      </Box>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        Alisson Ross
        
      </header>
  
      <main className='App-main'>
        <Box className="Box-main">
          <div className="Hello-world">Hello World!<br/></div>
          
          I am a Computer Science and Engineering major at Merced Community College.
          I am also a Front-end web developer for HackMerced and a IT Assistant for SJDC.
          I make website components using ReactJS, Typescript, and other front-end tools.<br/>
          This site is under current re-construction.
        
        </Box>

        <Box className="Box-projects">
          <div className="Hello-world">Project section coming soon!</div>
          <img src= {cat} width="500" height="100"></img>
        </Box>
       
      </main>
      <footer className='App-footer'>
        <a
          className="App-link"
          href="https://github.com/AlissonRoss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br/>Made with &#128151; at Alisson's Github
        </a>
      </footer>
    </div>
    
  );
}

export default App;
