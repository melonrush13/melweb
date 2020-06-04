import React, { Component } from 'react';
import './App.css';
import Adventure  from "./pages/Adventures/Adventures";
import Blog  from "./pages/Blog/Blog";
import Resume  from "./pages/Resume/Resume";
import Home  from "./pages/Home/Home";



import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component{
  render() {
    return (
      <div className="App">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        </head>
        <div className="wrapper">
          <nav>
            <Router>
              <div className="navbar">
                <ul className="menu">
                  <li className="logo">Mel Rush</li>
                  <li className="item"><NavLink to="/">Home</NavLink></li>
                  <li className="item"><NavLink to="/blog">Blog</NavLink></li>
                  <li className="item"><NavLink to="/adventures">Adventures</NavLink></li>
                  <li className="item"><NavLink to="/resume">Resume</NavLink></li>
                  <li className="toggle">Menu</li>
                </ul>
              </div>
              <Route exact path="/"       component={Home}></Route>
              <Route exact path="/resume" component={Resume}></Route>
              <Route exact path="/adventures" component={Adventure}></Route>
              <Route exact path="/blog" component={Blog}></Route>
            </Router>
          </nav>
        </div>
        <footer>Contact Me! </footer>
      </div>
    );
  }
}

export default App;
