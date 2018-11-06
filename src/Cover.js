import React from "react";

function Cover(props) {
    return (
      <div class="col">
        <img src={props.tvshow} className="" alt="filmCover" />
        <div class="overlay">
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  }

  export {Cover};