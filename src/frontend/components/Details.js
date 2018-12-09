import React from "react";
import { Link, Redirect } from "react-router-dom";
import GetGallery from "../get-gallery";
import "./Details.css";

class Details extends React.Component {
  constructor() {
    super();
    //Save the Id of the current TV show
    this.state = {
      currentShow: {},
      toNotFound: false
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
        this.setState({ currentShow: findShow });
        if (!findShow) {
          this.setState({
            toNotFound: true
          });
        }
        //checking for currentShow to be empty 
        else if (Object.keys(this.state.currentShow).length === 0) {
          //show exists
          this.setState({
            toNotFound: false
          });
        }
      });
  };

  render() {
    if (this.state.toNotFound === true) {
      return <Redirect to="/NotFound" />;
    } else {
      return (
        <div className="Details">
          <div>EMPTY DIV</div>
        </div>
      );
    }
  }
}

export { Details };
