import React from "react";
import getGallery from '../get-gallery.js';
import { Cover } from './Cover.js';
import tvshow1 from "../images/hillhouse.jpg";
// import tvshow2 from "./images/deathnote.jpg";
// import tvshow3 from "./images/blackmirror.jpg";
// import tvshow4 from "./images/got.jpg";
// import tvshow5 from "./images/thewire.jpg";
// import tvshow6 from "./images/thewalkingdead.png";

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            shows: [],
        }
    }
    
    componentDidMount = () => {
        fetch(getGallery())
          .then(res => res.json())
          .then(shows => {
              console.log(shows);
              this.setState({shows: shows});
          });
    }

    render() {
        return (
            <div className="flex-grid">
                {
                    this.state.shows.map((show, index) => {
                        return  <Cover key={ index } 
                                    name={ show.name } 
                                    tvshow={ show.tvshow } 
                                    showid={ show.showid }/>;
                    })
                }
            </div>
        );
    }
}

export { Gallery };