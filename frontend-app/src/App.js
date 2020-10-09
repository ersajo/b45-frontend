import React from 'react';
import logo from './logo.svg';
import { GetUser, PostUser} from './User';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GetUser></GetUser>
        <PostUser></PostUser>
      </header>
    </div>
  );
}

export default App;
