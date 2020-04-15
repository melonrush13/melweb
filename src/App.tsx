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
        <div className="wrapper">
          <Router>
            <div>
              <h1>Melanie Rush</h1>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/adventures">Adventures</NavLink></li>
              </ul>
              <Route exact path="/"       component={Home}></Route>
              <Route exact path="/resume" component={Resume}></Route>
              <Route exact path="/adventures" component={Adventure}></Route>
              <Route exact path="/blog" component={Blog}></Route>
            </div>
          </Router>
        </div>
        <footer>Contact Me! </footer>
      </div>
    );
  }
}

export default App;
