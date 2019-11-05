import React, { Component } from "react";
import NavigationBar from "../components/core/NavigationBar";
import BodyContainerWithFooter from "../components/core/BodyContainerWithFooter";
import FountainsMap from "../components/tour-page/FountainsMap";
import "../styles/scss/contribute-page.scss";
import ContributeSection from "../components/contribute-page/ContributeSection";
import SuccessSubmissionModal from "../components/contribute-page/SuccessSubmissionModal";

class ContributePage extends Component {
  state = { displayCongratsModal: false };
  onAddFountain = () => {
    /* Validate the given data first */
    this.setState({ displayCongratsModal: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.displayCongratsModal ? (
          <SuccessSubmissionModal
            enable
            onCloseButtonClick={() => {
              this.setState({ displayCongratsModal: false });
            }}
          />
        ) : (
          ""
        )}
        <NavigationBar shadow />
        <BodyContainerWithFooter>
          <FountainsMap noMapNavigationBar />
          <ContributeSection onAddFountain={this.onAddFountain} />
        </BodyContainerWithFooter>
      </React.Fragment>
    );
  }
}

export default ContributePage;
