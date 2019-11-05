import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import firstSectionIcon from "../../resources/svg/Section-1-icon.svg";
import secondSectionIcon from "../../resources/svg/Section-2-icon.svg";
import thirdSectionIcon from "../../resources/svg/Section-3-icon.svg";

class FeaturesSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row className="features-section section">
          <Col>
            <div className="title">
              How can <span className="logo-text">FONTABELLA</span> help you and
              the planet?
            </div>

            <Row className="features-container">
              <Col className="feature">
                <div className="icon">
                  <img src={firstSectionIcon} alt="Feature Icon" />
                </div>
                <div className="description">
                  With <span className="logo-text">FONTABELLA</span> you will
                  enjoy a free guide made by locals to enjoy your trip to the
                  max
                </div>
              </Col>

              <Col className="feature">
                <div className="icon">
                  <img src={secondSectionIcon} alt="Feature Icon" />
                </div>
                <div className="description">
                  <span className="logo-text">FONTABELLA</span> was created to
                  help reduce the plastic consumption for our planet to breath
                  again
                </div>
              </Col>

              <Col className="feature">
                <div className="icon">
                  <img src={thirdSectionIcon} alt="Feature Icon" />
                </div>
                <div className="description">
                  Using <span className="logo-text">FONTABELLA</span>, the water
                  will always be free and on your fingertips
                </div>
              </Col>
            </Row>

            <Row className="section-seperator">
              <Col>
                <hr />
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FeaturesSection;
