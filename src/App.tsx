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
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/travel">Travel</Link></li>
                <li><Link to="/photos">Photos</Link></li>
              </ul>
            </div>
                <Switch>
                  <Route exact path="/"       component={Home}></Route>
                  <Route exact path="/sports" component={Sports}></Route>
                  <Route exact path="/travel" component={Travel}></Route>
                  <Route exact path="/photos" component={Photography}></Route>
                </Switch>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
