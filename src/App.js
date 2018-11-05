import React, { Component } from "react";
import tvshow1 from "./images/breakingbad.jpg";
import tvshow2 from "./images/deathnote.jpg";
import tvshow3 from "./images/blackmirror.jpg";
import tvshow4 from "./images/got.jpg";
import tvshow5 from "./images/thewire.jpg";
import tvshow6 from "./images/thewalkingdead.png";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="flex-grid-thirds flex-grid">
          <div class="col">
            <img src={tvshow1} className="" alt="filmCover" />
            <div class="overlay">
              <h1>Breaking Bad</h1>
            </div>
          </div>
          <div class="col">
            <img src={tvshow2} className="" alt="filmCover" />
            <div class="overlay">
              <h1>Death Note</h1>
            </div>
          </div>
          <div class="col">
            <img src={tvshow3} className="" alt="filmCover" />
            <div class="overlay">
              <h1>Black Mirror</h1>
            </div>
          </div>
        </div>
        <div class="flex-grid-thirds flex-grid">
        <div class="col">
            <img src={tvshow4} className="" alt="filmCover" />
            <div class="overlay">
              <h1>Game Of Thrones</h1>
            </div>
          </div>
          <div class="col">
            <img src={tvshow5} className="" alt="filmCover" />
            <div class="overlay">
              <h1>The Wire</h1>
            </div>
          </div>
          <div class="col">
            <img src={tvshow6} className="" alt="filmCover" />
            <div class="overlay">
              <h1>The Walking Dead</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
