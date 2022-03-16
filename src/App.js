import React from 'react';
//import Starcomponent from '../src/components/Star/index.tsx';
import logo from '../src/assets/star.svg';
import './App.css';
import Box from '@material-ui/core/Box';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        Alisson Ross
        
      </header>
      <main className='App-main'>
        <Box className="Box-main">
          Hello World!<br/>
          <p>My name is Alisson Ross.<br/>
            I am a Computer Science and Engineering major at Merced Community College.<br/>
            I am also a Front-end web developer for HackMerced and a IT Assistant for SJDC.<br/>
            I make website components using ReactJS, Typescript, and other front-end tools.<br/>
            This site is under current re-construction. <br/>
          </p>
          
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
