import React, { Component } from "react";
import BannerIllustration from "../../resources/svg/Banner-Illustration.svg";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class SplashSection extends Component {
  state = {};

  launchButtonOnClick = () => {
    this.props.history.push("/tour");
  };

  render() {
    return (
      <React.Fragment>
        <Row className="banner-section section">
          <Col className="col-center">
            <div className="title">
              Help saving the planet while enjoying your time
            </div>
            <div className="description">
              With{" "}
              <span className="logo-text" style={{ fontSize: "20px" }}>
                FONTABELLA
              </span>{" "}
              you will enjoy your plastic-free sightseeing with free water on
              the spot!
            </div>
            <img
              src={BannerIllustration}
              className="illustration"
              alt="Splash Design"
            />
            <Link to="/tour">
              <Button className="launch-button" size="lg" variant="success">
                Kickstart your trip
              </Button>
            </Link>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SplashSection;
