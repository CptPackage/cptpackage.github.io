import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import MonumentsList from "./MonumentsList";

class MonumentsSection extends Component {
  state = {};
  render() {
    return (
      <Row className="monuments-section section">
        <Col>
          <div className="section-title">Top monuments</div>
          <MonumentsList />
        </Col>
      </Row>
    );
  }
}

export default MonumentsSection;
