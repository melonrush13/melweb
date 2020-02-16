import React, { Component } from 'react';
import './App.css';
import Travel  from "./pages/Travel";
import Photography  from "./pages/Photography";
import Sports  from "./pages/Sports";
import Home  from "./pages/Home";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component{
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Router>
            <div className="links">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/sports">Sports</Link></div>
                <div><Link to="/travel">Travel</Link></div>
                <div><Link to="/photos">Photos</Link></div>
            </div>
                <Switch>
                  <Route exact path="/"       component={Home}></Route>
                  <Route exact path="/sports" component={Sports}></Route>
                  <Route exact path="/travel" component={Travel}></Route>
                  <Route exact path="/photos" component={Photography}></Route>
                </Switch>
            </Router>
        </div>
        <footer>Contact Me! </footer>
      </div>
    );
  }
}

export default App;
