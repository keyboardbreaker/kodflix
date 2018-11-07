import React from "react";
import { Link } from "react-router-dom";

function Cover(props) {
    return (
      <Link to={props.showid} class="col"> 
          <img src={props.tvshow} className="" alt="filmCover" />
          <div class="overlay" >
            <h1>{props.name}</h1>
          </div>
      </Link>

    );
  }

  export {Cover};