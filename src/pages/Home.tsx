import React from 'react';
import './Home.css';
import headerimg from './photos/melheader.jpg';

const Home = () => {
    return(
        <div className="Home">
            <div>
                <img src={headerimg}></img>
            </div>
            <div className="wrapper">
                <div className="About">
                    <h1>About Me</h1>
                    <p>Hello! I am a software engineer working at Microsoft, 
                        on the Commerical Software Engineering team. I was born and raised in the 
                        suburbs of Chicago, and then moved to Madison, Wisconsin to pursue 
                        a degree in Computer Science. Now you can find me in the mountains
                        in Boulder, Colorado</p>
                </div>
            </div>
      </div>
    )
}

export default Home;
