import React from "react";
import { Link } from "react-router-dom";
import GetGallery from '../get-gallery';

class Details extends React.Component {
  constructor() {
    super();
    //Save the Id of the current TV show
    this.state = {
        currentShowID: '',
        currentShowName: ''
    }
  }

  componentDidMount = () => {
    this.setState({
        currentShowID: GetGallery().find((tvshow) => {
            return tvshow.showid === this.props.match.params.details;
        }).showid,
        currentShowName: GetGallery().find((tvshow) => {
            return tvshow.showid === this.props.match.params.details;
        }).name
    })
  };

  render() {
    return (
        
      <div className="Details">
        <h2>{this.state.currentShowName}</h2> 
        <Link to="/">Return back to Media Gallery.</Link>
      </div>
    );
  }
}

export { Details };
