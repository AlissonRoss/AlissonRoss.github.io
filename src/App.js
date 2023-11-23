import React from 'react';
import Landing from './components/Landing/index.js';
import MainDesc from './components/LandingDesc/index.js';
import ProjDesc from './components/ProjDesc/index.js';
import CertDesc from './components/Certifications/index.js';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <HashRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Landing />}>
          <Route
            path="/"
            element={<MainDesc />}
          />
          <Route
            path="proj"
            element={<ProjDesc />}
          />
          <Route
            path="certs"
            element={<CertDesc />}
          />
        </Route>
      </Routes>
    </HashRouter>
   
    
  );
}

export default App;
