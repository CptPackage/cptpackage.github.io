import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

class ContactSection extends Component {
  state = {};
  render() {
    return (
      <Row className="contact-section">
        <Col>
          <span className="title">Do you have an idea want to innovate?</span>

          <Button className="contact-button" size="md" variant="success">
            Brainstorm with us
          </Button>
        </Col>
      </Row>
    );
  }
}

export default ContactSection;
