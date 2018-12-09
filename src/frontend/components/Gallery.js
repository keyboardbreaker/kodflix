import React from "react";
import getGallery from '../get-gallery.js';
import { Cover } from './Cover.js';

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
            //   console.log(shows);
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