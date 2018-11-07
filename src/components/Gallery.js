import React from "react";
import tvshow1 from "../images/hillhouse.jpg";
import tvshow2 from "../images/deathnote.jpg";
import tvshow3 from "../images/blackmirror.jpg";
import tvshow4 from "../images/got.jpg";
import tvshow5 from "../images/thewire.jpg";
import tvshow6 from "../images/thewalkingdead.png";
import {Cover} from './Cover.js';

function Gallery(props) {
    return (
        <div class="flex-grid">
            <Cover name="The Haunting of Hill House" tvshow = {tvshow1} />
            <Cover name="Death Note" tvshow = {tvshow2} />
            <Cover name="Black Mirror" tvshow = {tvshow3}/>
            <Cover name="Game Of Thrones" tvshow = {tvshow4}/>
            <Cover name="The Wire" tvshow = {tvshow5} />
            <Cover name="The Walking Dead" tvshow = {tvshow6} />
        </div>
      );
}

export {Gallery};