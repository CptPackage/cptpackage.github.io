import React, { Component } from "react";
import logo from "../../resources/png/Logo.png";
import facebookNormal from "../../resources/svg/Facebook-Normal.svg";
import facebookHovered from "../../resources/svg/Facebook-Hovered.svg";
import twitterNormal from "../../resources/svg/Twitter-Normal.svg";
import twitterHovered from "../../resources/svg/Twitter-Hovered.svg";
import instagramNormal from "../../resources/svg/Instagram-Normal.svg";
import instagramHovered from "../../resources/svg/Instagram-Hovered.svg";
import { Col, Row } from "react-bootstrap";

const FACEBOOK_HOVER_KEY = "FACEBOOK";
const TWITTER_HOVER_KEY = "TWITTER";
const INSTAGRAM_HOVER_KEY = "INSTAGRAM";

class Footer extends Component {
  state = {
    facebookHovered: false,
    twitterHovered: false,
    instagramHovered: false
  };

  render() {
    const facebookHoverState = this.state.facebookHovered;
    const twitterHoverState = this.state.twitterHovered;
    const instagramHoverState = this.state.instagramHovered;

    return (
      <Row className="footer">
        <Col className="footer-container">
          <img src={logo} className="brand-logo" alt="Brand Logo" />
          <span className="slogan">A gift from the ancient city</span>
          <span className="social-media-icons-container">
            <img
              src={facebookHoverState ? facebookHovered : facebookNormal}
              className="social-media-icon facebook-icon"
              onMouseOver={() => {
                this.hoverButtons(FACEBOOK_HOVER_KEY, true);
              }}
              onMouseOut={() => {
                this.hoverButtons(FACEBOOK_HOVER_KEY, false);
              }}
              alt="Facebook Icon"
            />
            <img
              src={twitterHoverState ? twitterHovered : twitterNormal}
              className="social-media-icon twitter-icon"
              alt="Twitter Icon"
              onMouseOver={() => {
                this.hoverButtons(TWITTER_HOVER_KEY, true);
              }}
              onMouseOut={() => {
                this.hoverButtons(TWITTER_HOVER_KEY, false);
              }}
            />
            <img
              src={instagramHoverState ? instagramHovered : instagramNormal}
              className="social-media-icon instagram-icon"
              alt="Instagram Icon"
              onMouseOver={() => {
                this.hoverButtons(INSTAGRAM_HOVER_KEY, true);
              }}
              onMouseOut={() => {
                this.hoverButtons(INSTAGRAM_HOVER_KEY, false);
              }}
            />
          </span>
        </Col>
      </Row>
    );
  }

  hoverButtons = (hoverKey, state) => {
    switch (hoverKey) {
      case FACEBOOK_HOVER_KEY:
        this.setState({ ...state, facebookHovered: state });
        break;
      case TWITTER_HOVER_KEY:
        this.setState({ ...state, twitterHovered: state });
        break;
      case INSTAGRAM_HOVER_KEY:
        this.setState({ ...state, instagramHovered: state });
        break;
      default:
        return;
    }
  };
}

export default Footer;
