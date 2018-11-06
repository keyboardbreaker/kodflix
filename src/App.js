import React, { Component } from "react";
import {Cover} from './Cover.js';
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
          <Cover name="Breaking Bad" tvshow = {tvshow1} />
          <Cover name="Death Note" tvshow = {tvshow2} />
          <Cover name="Black Mirror" tvshow = {tvshow3}/>
        </div>
        <div class="flex-grid-thirds flex-grid">
          <Cover name="Game Of Thrones" tvshow = {tvshow4}/>
          <Cover name="The Wire" tvshow = {tvshow5} />
          <Cover name="The Walking Dead" tvshow = {tvshow6}/>
        </div>
    </div>
    );
  }
}

export default App;
