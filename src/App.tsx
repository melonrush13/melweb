import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <button>travel</button>
          <button>photography</button>
          <button>sports</button>
        </header>
        <main>
          <p>I'm the main-content filling the void!</p>
          <img src={logo} className="App-logo" alt="logo" />
        </main>
        <footer>
          <p>Contact me</p>
        </footer>
      </div>
    </div>
  );
}


export default App;
