import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { MAP_THEME } from "../../components/core/geomap/MapUtils.js";
import gpsButtonIcon from "../../resources/svg/GPS-Icon.svg";
class FountainsMap extends Component {
  state = {};
  static defaultProps = {
    center: {
      lat: 41.890251,
      lng: 12.492373
    },
    zoom: 11
  };
  render() {
    return (
      <Row className="section ">
        <Col className="map-container">
          {this.props.noMapNavigationBar ? (
            ""
          ) : (
            <span className="map-navigation-bar-container">
              <input
                className="map-navigation-bar"
                placeholder="Insert the address"
              />
              <span className="gps-button">
                <img
                  className="gps-button-icon"
                  src={gpsButtonIcon}
                  alt="GPS Button"
                />
              </span>
            </span>
          )}
          <GoogleMapReact
            defaultOptions={{
              styles: MAP_THEME
            }}
            style={{ margin: "0px" }}
            className="map"
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{
              key: "AIzaSyCRjWHR2gKVUrnNrKWkKAArOOcv0K8WvPk"
            }}
          ></GoogleMapReact>
        </Col>
      </Row>
    );
  }
}

export default FountainsMap;
