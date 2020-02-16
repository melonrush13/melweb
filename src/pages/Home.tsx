import React from 'react';
import './Home.css';
import { Link, Router,  } from "react-router-dom";

const Home = () => {
    return(
        <div className="Home">
        <div className="wrapper">
          <header>
            <button>Travel</button>
            <button>Photography</button>
            <button>Sports</button>
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

export default Home;
