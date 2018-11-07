import React from "react";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
    return(
        <div>
            <p>TV show: {match.params.Details}</p>
            <Link to='/'>Return back to Media Gallery.</Link>
        </div>
    );
};

export {Details};