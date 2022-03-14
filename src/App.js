import React from 'react';
//import Starcomponent from '../src/components/Star/index.tsx';
import logo from '../src/assets/star.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Hello World from reactjs!
          
        </p>
        <p>Site Currently being migrated to ReactJS.</p>
        <a
          className="App-link"
          href="https://github.com/AlissonRoss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alisson's Github
        </a>
      </header>
    </div>
    
  );
}

export default App;
