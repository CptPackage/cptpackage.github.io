import React from "react";
import "./styles/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/scss/core.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import { Container } from "react-bootstrap";
import TourPage from "./pages/TourPage";
import ContributePage from "./pages/ContributePage";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Switch>
          <Route>
            <Route
              path="/"
              exact
              render={routeProps => <LandingPage {...routeProps} />}
            />
            <Route
              path="/tour"
              exact
              render={routeProps => <TourPage {...routeProps} />}
            />
            <Route
              path="/contribute"
              exact
              render={routeProps => <ContributePage {...routeProps} />}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
