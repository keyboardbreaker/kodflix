import React from "react";
import getGallery from '../get-gallery.js';
import { Cover } from './Cover.js';
import { Loading } from "./Loading";
import "./Loading.css";

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            shows: [],
            isLoading: true
        }
    }

    componentDidMount = () => {
        fetch(getGallery())
          .then(res => res.json())
          .then(shows => {
            //   console.log(shows);
              this.setState({
                  shows: shows,
                  isLoading: false
            });
          });
    }

    render() {
        return (
            this.state.isLoading ? 
                <Loading/> : 
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