import React from "react";
import { Link } from "react-router-dom";

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello, this will be the details page for each Movie & TV show"
    };
  }
  
  componentWillMount = () => {
      setTimeout(() => { //use arrow function, opposed to classic function definition as timeout has issues with the latter syntax
        this.setState({ message: 'coming soon '})
      }, 3000)
  };

  render() {
    return (
      <div className="Details">
        <p>{this.state.message}</p>
        <Link to="/">Return back to Media Gallery.</Link>
      </div>
    );
  }
}

export { Details };
