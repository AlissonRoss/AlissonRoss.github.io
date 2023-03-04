import React from 'react';
//import Starcomponent from '../src/components/Star/index.tsx';
import logo from '../src/components/assets/star.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ChangeText from './components/Change/index.tsx';
import { useState } from 'react';

function App() {
  const [mainDescEnabled, setMainDescEnabled] = useState(true);
  var description = ChangeText(mainDescEnabled)
  return (
    <div className="App">
      <Box className="NavBar">
        <ul>
          <Button className="Nav-home" href="#main"  onClick={() => description = ChangeText(setMainDescEnabled(true))}>
            Home</Button>
          <Button className="Nav-projects" href="#projects" onClick={() => description = ChangeText(setMainDescEnabled(false))} >
          
            Projects
          </Button>
          
          <Button href="https://www.linkedin.com/in/alisson-ross/">LinkedIn</Button>
        </ul> 
      </Box>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        Bob Ross
      </header>
  
      <div className="Body">
          {description}
      </div>
      <footer className='App-footer'>
        <a
          className="App-link"
          href="https://github.com/AlissonRoss"
          target="_blank"
        >
          <br/>Made with &#128151; at Alisson's Github
        </a>
      </footer>
    </div>
    
    
  );
}

export default App;
