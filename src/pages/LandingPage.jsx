import React, { Component } from "react";
import NavigationBar from "../components/core/NavigationBar";
import "../styles/scss/landing-page.scss";
import SplashSection from "../components/landing-page/SplashSection";
import FeaturesSection from "../components/landing-page/FeaturesSection";
import ContactSection from "../components/landing-page/ContactSection";
import BodyContainerWithFooter from "../components/core/BodyContainerWithFooter";
class LandingPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <BodyContainerWithFooter>
          <SplashSection />
          <FeaturesSection />
          <ContactSection />
        </BodyContainerWithFooter>
      </React.Fragment>
    );
  }
}

export default LandingPage;
