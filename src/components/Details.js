import React from "react";
import { Link, Redirect} from "react-router-dom";
import GetGallery from '../get-gallery';
import "./Details.css";

class Details extends React.Component {
  constructor() {
    super();
    //Save the Id of the current TV show
    this.state = {
        currentShow: {},
        toNotFound: false
    }
  }

  componentDidMount = () => {
    let findShow = GetGallery().find((tvshow) => {
      return tvshow.showid === this.props.match.params.details;
    });
    
    if(!findShow){
      this.setState({ 
        toNotFound: true,  
      })
    }
    else{
      this.setState({ 
        currentShow: findShow,  
      })
    }
  };

  render() {
    if(this.state.toNotFound === true) {
      return <Redirect to='/NotFound' />
    }
    else{
      return (
        <div className="Details">
          <h2>{ this.state.currentShow.name }</h2>
          <Link to="/">Return back to Media Gallery.</Link>
          <div className="container">
            <div className="column"><p>{this.state.currentShow.synopsis}</p></div>
            <div className="column"><img src={this.state.currentShow.tvshow} alt="detailsCover"/></div>
          </div>
        </div>
      );
    }
  }
}

export { Details };
