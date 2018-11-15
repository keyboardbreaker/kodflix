import React from "react";
import { Link, Redirect} from "react-router-dom";
import GetGallery from '../get-gallery';

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
    return (
      <div className="Details">
        <h2>{ this.state.currentShow.name }</h2> 
        <Link to="/">Return back to Media Gallery.</Link>
      </div>
    );
  }
}

export { Details };
