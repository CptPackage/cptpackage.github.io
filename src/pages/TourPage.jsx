import React, { Component } from "react";
import NavigationBar from "../components/core/NavigationBar";
import BodyContainerWithFooter from "../components/core/BodyContainerWithFooter";
import FountainsMap from "../components/tour-page/FountainsMap";
import "../styles/scss/tour-page.scss";
import MonumentsSection from "../components/tour-page/MonumentsSection";

class TourPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar shadow />
        <BodyContainerWithFooter>
          <FountainsMap />
          <MonumentsSection />
        </BodyContainerWithFooter>
      </React.Fragment>
    );
  }
}

export default TourPage;
