import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Navigation from './components/NavBar/NavBar.jsx'
import Routes from './Routes.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Navigation />
          { Routes }
        </Router>
    </React.Fragment>
  );
}

export default App;
