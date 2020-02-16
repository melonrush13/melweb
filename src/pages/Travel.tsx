import React from 'react';
import './Travel.css';
import { Link, Router } from "react-router-dom";

const Travel = () => {
    return(
        <div className="Hello">
        <div className="wrapper">
          <header>
            <button>travel</button>
            <button>photography</button>
            <button>sports</button>
          </header>
          <main>
            <p>I'm the main-content filling the void!</p>
            <div>
                {/* <Link to="/photo">Photos</Link> */}
            </div>
          </main>
          <footer>
            <p>Contact me</p>
          </footer>
        </div>
      </div>
    )
}

export default Travel;
