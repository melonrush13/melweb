import React from 'react';
import './Home.css';
import { Link, Router,  } from "react-router-dom";

const Home = () => {
    return(
        <div className="Home">
        <div className="wrapper">
            <div className="About">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam semper dignissim tristique. Vestibulum placerat, 
                    dolor in hendrerit laoreet, ante mi vulputate purus, nec 
                    laoreet nibh lectus vitae neque. Nam commodo ut orci ac 
                    euismod. Duis commodo convallis ipsum. In maximus orci ut 
                    nulla imperdiet efficitur. Donec orci leo, efficitur 
                    vulputate tempus vel, lobortis at sem. Ut libero libero, 
                    dapibus sit amet odio vitae, aliquam rutrum erat. Fusce 
                    sapien lorem, cursus vitae diam in, rutrum lacinia neque.</p>
            </div>
        </div>
      </div>
    )
}

export default Home;
