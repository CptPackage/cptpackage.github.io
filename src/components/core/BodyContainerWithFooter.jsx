import React, { Component } from "react";
import Footer from "./Footer";
import { Row, Container } from "react-bootstrap";

class BodyContainerWithFooter extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Container fluid>
          {this.props.children}
          <Footer />
        </Container>
      </Row>
    );
  }
}

export default BodyContainerWithFooter;
