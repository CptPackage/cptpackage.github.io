import React, { Component } from "react";
import congratulationsIcon from "../../resources/svg/Congratulations-Icon.svg";

class SuccessSubmissionModal extends Component {
  state = {};

  render() {
    return (
      <div className="modal-global-container">
        <div className="modal-body-container">
          <div
            className="close-modal-button"
            onClick={() => {
              this.props.onCloseButtonClick();
            }}
          >
            X
          </div>
          <div className="modal-poster-container">
            <img
              src={congratulationsIcon}
              className="modal-poster"
              alt="Congratulations Poster"
            />
          </div>
          <div className="modal-title">Thanks for your contribution</div>
          <div className="modal-description">
            An email has been sent to you with the credit points, keep track of
            your credit points to be able to redeem rewards
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessSubmissionModal;
