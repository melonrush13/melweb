import React, { Component } from 'react';
import './App.css';
import Hello  from "./pages/Hello";
import Photography  from "./pages/Photography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/hello" component={Hello} />
          <Route exact path="/photo" component={Photography} />
        </Switch>
      </Router>
    );
  }
}

export default App;
