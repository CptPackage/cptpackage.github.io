import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Monument extends Component {
  state = {};
  render() {
    return (
      <div className="monument-presentation-container">
        <img
          src={this.props.poster}
          className="monument-poster"
          alt={this.props.title}
        />
        <div className="monument-data">
          <div className="data-title">{this.props.title}</div>
          <div className="data-description">{this.props.description}</div>
          <Button className="guide-button" size="md" variant="success">
            Show me the way
          </Button>
        </div>
      </div>
    );
  }
}

export default Monument;
