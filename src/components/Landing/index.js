import React from 'react';
import logo from '../assets/star.svg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

  return (
    <div className="App">
      <Box className="NavBar">
        <ul>
          <Button className="Nav-home" component={Link} to='/'>
            Home
          </Button>
          <Button className="Nav-projects" component={Link} to='/proj' >
            Projects
          </Button>
          <Button className="Nav-projects" component={Link} to='/certs' >
            Certifications
          </Button>
          
          <Button href="https://www.linkedin.com/in/alisson-ross/">LinkedIn</Button>
        </ul> 
      </Box>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        Alisson Ross
      </header>
  
      <div className="Body">
          <Outlet/>
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
