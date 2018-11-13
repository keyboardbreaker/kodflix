import React from "react";
import getGallery from '../get-gallery.js';
import { Cover } from './Cover.js';

function Gallery(props) {
    return (
        <div className="flex-grid">
            {
                getGallery().map((show, index)=>{
                    return  <Cover key={ index } 
                                   name={ show.name } 
                                   tvshow={ show.tvshow } 
                                   showid={ show.showid }/>;
                })
            }
        </div>
    );
}

export { Gallery };