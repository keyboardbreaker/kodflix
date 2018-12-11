import React from "react";
import { Link, Redirect } from "react-router-dom";
import GetGallery from "../get-gallery";
import "./Details.css";
import { Loading } from "./Loading";
import "./Loading.css";

class Details extends React.Component {
  constructor() {
    super();
    //Save the Id of the current TV show
    this.state = {
      currentShow: {},
      toNotFound: false,
      isLoading: true
    };
  }

  componentDidMount = () => {
    fetch(GetGallery())
      .then(res => res.json())
      .then(shows => {
        let findShow = shows.find(tvshow => {
          console.log(tvshow);
          return tvshow.showid === this.props.match.params.details;
        });
        if (!findShow) {
          this.setState({
            toNotFound: true,
            isLoading: false
          });
        }
        //checking for currentShow to be empty
        else if (Object.keys(this.state.currentShow).length === 0) {
          //show exists
          this.setState({
            toNotFound: false,
            currentShow: findShow,
            isLoading: false
          });
        }
      });
  };

  render() {
    return this.state.toNotFound ? (
      <Redirect to="/NotFound" />
    ) : this.state.isLoading ? (
      <Loading />
    ) : (
      <div className="Details">
        <h2>{this.state.currentShow.name}</h2>
        <Link to="/">Return back to Media Gallery.</Link>
        <div className="container">
          <div className="column"><img src={require(`../common/images/${this.state.currentShow.showid}.jpg`)} alt="detailsCover"/></div>
          <div className="column"><p>{this.state.currentShow.synopsis}</p></div>
        </div>
      </div>
    );
  }
}

export { Details };
