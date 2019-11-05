import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo from "../../resources/png/Logo.png";
import { Redirect, Link } from "react-router-dom";
class NavigationBar extends Component {
  state = { redirectToHome: false };

  render() {
    const shadowStyle = {
      boxShadow: " 0px 0px 6px 5px rgba(0,0,0,0.05)"
    };
    return (
      <Row
        className="nav-bar-container"
        style={this.props.shadow ? shadowStyle : {}}
      >
        <Col
          lg={2}
          md={12}
          sm={12}
          className="logo"
          onClick={() => {
            this.setState({ redirectToHome: true });
          }}
        >
          {this.state.redirectToHome ? <Redirect to="/" /> : ""}
          <img src={logo} alt="Logo Design" className="brand-logo" />
          <span className="brand-name">FONTABELLA</span>
        </Col>
        <Col lg md={12} sm={12} className="nav-buttons">
          <span className="text-button">
            <Link to="/tour">Find nearby fountains</Link>
          </span>
          <Link to="/contribute">
            <Button className="dark-button">Become a contributor</Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default NavigationBar;
