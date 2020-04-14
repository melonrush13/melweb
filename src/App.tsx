import React, { Component } from 'react';
import './App.css';
import Travel  from "./pages/Travel";
import Blog  from "./pages/Blog";
import Resume  from "./pages/Resume";
import Home  from "./pages/Home";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component{
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Router>
            <div className="links">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/resume">Resume</Link></button>
                <button><Link to="/adventures">Adventures</Link></button>
                <button><Link to="/blog">Blog</Link></button>
            </div>
                <Switch>
                  <Route exact path="/"       component={Home}></Route>
                  <Route exact path="/resume" component={Resume}></Route>
                  <Route exact path="/adventures" component={Travel}></Route>
                  <Route exact path="/blog" component={Blog}></Route>
                </Switch>
            </Router>
        </div>
        <footer>Contact Me! </footer>
      </div>
    );
  }
}

export default App;
