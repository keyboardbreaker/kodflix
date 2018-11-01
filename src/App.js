import React, { Component } from 'react';
import logo from './logo.svg';
import filmCover from './images/Jumanji.png'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div class="flex-grid-thirds">
          <div class="col">Black Mirror</div>
          <div class="col">Breaking Bad</div>
          <div class="col">Death Note</div>
        </div>

        <div class="flex-grid-thirds">
          <div class="col">Game of Thrones</div>
          <div class="col">The Walking Dead</div>
          <div class="col">The wire</div>
        </div>
      </div>
    );
  }
}

export default App;
