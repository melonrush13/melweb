import React from 'react';
import './Hello.css';

function Hello() {
  return (
    <div className="Hello">
      <div className="wrapper">
        <header>
          <button>travel</button>
          <button>photography</button>
          <button>sports</button>
        </header>
        <main>
          <p>I'm the main-content filling the void!</p>
        </main>
        <footer>
          <p>Contact me</p>
        </footer>
      </div>
    </div>
  );
}


export default Hello;
