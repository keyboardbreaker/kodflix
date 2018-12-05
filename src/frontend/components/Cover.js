import React from "react";
import { Link } from "react-router-dom";

function Cover(props) {
    return (
      <Link to={ props.showid } className="col"> 
          <img src={require(`../images/${props.showid}.jpg`)} className="" alt="filmCover" />
          <div className="overlay" >
            <h1>{ props.name }</h1>
          </div>
      </Link>

    );
  }

  export { Cover };