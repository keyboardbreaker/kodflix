import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
    return(
        <div>
            <p>Details for TV Shows are here!</p>
            <Link to='/'>Return back to Media Gallery.</Link>
        </div>
    );
};

export {Details};