import React, { Component } from "react";
import {Home} from './components/Home.js';
import {Details} from './components/Details';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/:details' component={Details} />
            </Switch>
          </BrowserRouter>
      </div>);
  }
}

export default App;
