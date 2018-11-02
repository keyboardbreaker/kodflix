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
          <div class="overlay">
            <div class="col"><img src={tvshow1} className="film-cover fade-image" alt="filmCover" /></div>
            <div class="title-panel">
              <div class="title">Breaking Bad</div>
            </div>
          </div>
          <div class="overlay">
            <div class="col"><img src={tvshow2} className="film-cover fade-image" alt="filmCover" /></div>
            <div class="title-panel">
              <div class="title">Death Note</div>
            </div>
          </div>
          <div class="overlay">
            <div class="col"><img src={tvshow3} className="film-cover fade-image" alt="filmCover" /></div>
            <div class="title-panel">
              <div class="title">Black Mirror</div>
            </div>
          </div>
        </div>

        <div class="flex-grid-thirds flex-grid">
        <div class="overlay">
            <div class="col"><img src={tvshow4} className="film-cover fade-image" alt="filmCover" /></div>
            <div class="title-panel">
              <div class="title">Game Of Thrones</div>
            </div>
          </div>
          <div class="overlay">
            <div class="col"><img src={tvshow5} className="film-cover fade-image" alt="filmCover" /></div>
            <div class="title-panel">
              <div class="title">The Wire</div>
            </div>
          </div>
          <div class="overlay">
            <div class="col"><img src={tvshow6} className="film-cover fade-image" alt="filmCover" /></div>
            <div class="title-panel">
              <div class="title">The Walking Dead</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
