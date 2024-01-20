import React from 'react';
import Landing from './components/Landing/index.js';
import MainDesc from './components/LandingDesc/index.js';
import ProjDesc from './components/ProjDesc/index.js';
import CertDesc from './components/Certifications/index.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { createHashHistory } from 'history';


function App() {
  return (
    <Router history={createHashHistory({
      basename: "",
      hashType: "slash",
      getUserConfirmation: (message, callback) => callback(window.confirm(message)),
    })}>
      <Routes>
        <Route element={<Landing />}>
          <Route
            exact path="/"
            element={<MainDesc />}
          />
          <Route
            path="/proj"
            element={<ProjDesc />}
          />
          <Route
            path="/certs"
            element={<CertDesc />}
          />
        </Route>
      </Routes>
    </Router>
   
    
  );
}

export default App;
