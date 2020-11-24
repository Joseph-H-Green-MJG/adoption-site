import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Introduction from "./pages/introduction"; 
import Story from "./pages/story"; 
import Contact from "./pages/contact";
import Navbar from "./navbar/navbar";

export default class App extends Component {
  render() {

    return (
      <div className='container'>
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Introduction} />
                <Route path="/story" component={Story} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}
