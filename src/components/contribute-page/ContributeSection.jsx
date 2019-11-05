import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import uploadIcon from "../../resources/svg/Upload-Icon.svg";
import correctIcon from "../../resources/svg/Corrent-Icon.svg";
import incorrectIcon from "../../resources/svg/Incorrect-Icon.svg";
import gpsButtonIcon from "../../resources/svg/GPS-Icon.svg";

class ContributeSection extends Component {
  state = { validEmail: false, email: "" };
  render() {
    return (
      <Row className="contribute-section section">
        <Col>
          <div className="new-fountain-container">
            <div className="input-container">
              <label>Location</label>
              <span className="input-with-button-container">
                <input disabled />
                <span className="side-button-container side-container">
                  <img
                    src={gpsButtonIcon}
                    className="gps-button"
                    alt="GPS Button"
                  />
                </span>
              </span>
            </div>
            <div className="input-container">
              <label>Photo</label>
              <span className="input-with-button-container">
                <input disabled />
                <span className="side-button-container side-container">
                  <img
                    src={uploadIcon}
                    className="upload-button"
                    alt="Upload Button"
                  />
                </span>
              </span>
            </div>
            <div className="input-container">
              <label>Email</label>
              <span className="input-with-button-container">
                <input
                  onChange={input => {
                    const inputValue = input.target.value;
                    this.setState({ email: inputValue });
                  }}
                />
                {this.state.email.length > 0 ? (
                  <span className="side-icon-container side-container">
                    <img
                      src={this.state.validEmail ? correctIcon : incorrectIcon}
                      className="email-validity-icon"
                      alt="Email Validity Icon"
                    />
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>
            <ReCAPTCHA
              className="recaptcha"
              sitekey="6LdNGcEUAAAAAPaDmtyvvz7mwWvFPRT-6ZqKj7Qp"
            />
            <Button
              onClick={() => {
                this.props.onAddFountain();
                this.setState({ validEmail: !this.state.validEmail });
              }}
              className="add-fountain-button"
              variant="success"
            >
              Add Fountain
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ContributeSection;
