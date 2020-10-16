import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Component1 from "./pages/component1"; 

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
              <Switch>
                <Route path="/component1" component={Component1} />
              </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
