import React from 'react';
//import Starcomponent from '../src/components/Star/index.tsx';
import logo from '../src/assets/star.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ChangeText from './components/Change/index.tsx';

function App() {
var description = ChangeText("main");
console.log({description})
  return (
    <div className="App">
      <Box className="NavBar">
        <ul>
          <Button className="Nav-home" href="#main"  onClick={() => description= ChangeText("main")}>
            Home</Button>
          <Button className="Nav-projects" href="#projects" onClick={() => description= ChangeText("projects")} >
          
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
          {description}
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
