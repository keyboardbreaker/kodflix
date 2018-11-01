import React, { Component } from 'react';
import logo from './logo.svg';
import tvshow1 from './images/breakingbad.jpg';
import tvshow2 from './images/deathnote.jpg';
import tvshow3 from './images/blackmirror.jpg';
import tvshow4 from './images/got.jpg';
import tvshow5 from './images/thewire.jpg';
import tvshow6 from './images/thewalkingdead.png';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div class="flex-grid-thirds flex-grid">
          <div class="col"><img src={tvshow1} className="film-cover" alt="filmCover" /></div>
          <div class="col"><img src={tvshow2} className="film-cover" alt="filmCover" /></div>
          <div class="col"><img src={tvshow3} className="film-cover" alt="filmCover" /></div>
        </div>

        <div class="flex-grid-thirds flex-grid">
          <div class="col"><img src={tvshow4} className="film-cover" alt="filmCover" /></div>
          <div class="col"><img src={tvshow5} className="film-cover" alt="filmCover" /></div>
          <div class="col"><img src={tvshow6} className="film-cover" alt="filmCover" /></div>
        </div>
      </div>
    );
  }
}

export default App;
