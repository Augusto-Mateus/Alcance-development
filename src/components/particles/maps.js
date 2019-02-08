import React, { Component } from "react";
import styled from "styled-components";

const StyledMaps = styled.div`
  border-radius: 25px;
  height: 220px;
  width: 380px;
`;

class Maps extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD2atUYInE6aLgfmXoJeaV11dTq2i3szAA&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      disableDefaultUI: true
    });
  };

  render() {
    return <StyledMaps title="Google Maps" id="map" />;
  }
}

{
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Maps;
