import React, { Component } from 'react';
import logo from './logo.svg';
import filmCover from './images/Jumanji.png'
import './App.css';

console.log(logo);
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to dokflix</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={filmCover} className="film-cover" alt="filmCover" />
      </div>
    );
  }
}

export default App;
