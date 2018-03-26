import React, { Component } from "react";
import {render} from "react-dom"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

render(<MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBxTpPC5wmLNelJ-j87V5ny7h6agF1xUWI"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `768px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>, document.getElementById("root"))



// AIzaSyBS6fKNeLN8eBnVzRIuW6zDLVYQxMCsPk4


// https://tomchentw.github.io/react-google-maps/