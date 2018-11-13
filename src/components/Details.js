import React from "react";
import { Link } from "react-router-dom";
import GetGallery from '../get-gallery';

class Details extends React.Component {
  constructor() {
    super();
    //Save the Id of the current TV show
    this.state = {
        currentShow: {}
    }
  }

  componentDidMount = () => {
    this.setState({
        currentShow: GetGallery().find((tvshow) => {
            return tvshow.showid === this.props.match.params.details;
        })

    })
  };

  render() {
    return (
      <div className="Details">
        <h2>{this.state.currentShow.name}</h2> 
        <Link to="/">Return back to Media Gallery.</Link>
      </div>
    );
  }
}

export { Details };
