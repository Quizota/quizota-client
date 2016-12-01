import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import DocumentTitle from 'react-document-title'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './MapPickerView.scss'

import markerCorrect from '../img/mkRight.svg'
import markerCurrent from '../img/mkPicked.svg'
import markerVs from '../img/mkVs.svg'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
} from "react-google-maps";
import fancyMapStyles from "./fancyMapStyles.json"
import socket from '../../../SocketIO'


import _ from "lodash";

function getDistanceFromLatLonInKm(locationFrom, locationTo) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(locationTo.lat - locationFrom.lat);  // deg2rad below
  var dLon = deg2rad(locationTo.lng - locationFrom.lng);
  console.log(locationFrom, locationTo)
  var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(locationFrom.lat)) * Math.cos(deg2rad(locationTo.lat)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}
const GettingStartedGoogleMap = withGoogleMap(props => (

  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={6}
    defaultCenter={{lat: 16.4535572, lng: 107.5419039}}
    defaultOptions={{
      disableDefaultUI: true,
      scrollwheel: false,
      scaleControl: false,
      disableDoubleClickZoom: true,
      draggable: false,
      styles: fancyMapStyles
    }}
    onClick={props.onMapClick}>

    {props.markers.map(marker => {
        let hanoiLatLng = {lat: 21.0227358, lng: 105.8194541}
        let currentCursor = {lat: props.circleDistance.lat, lng: props.circleDistance.lng}
        let distance = getDistanceFromLatLonInKm(hanoiLatLng, currentCursor)
        let correctMarkerPosition = props.correctMarker
        var myLatLng = {lat: 16.4535572, lng: 107.5419039}
        console.log(distance)
        socket.emitData()
        return (
          <div>
            <Circle
              options={{
                strokeColor: '#ff5454',
                strokeOpacity: 1,
                strokeWeight: 1,
                fillColor: '#ff5454',
                fillOpacity: 0.1,
                clickable: false,
                center: hanoiLatLng,
                radius: distance * 1000,
                key: Date.now()
              }}
            />
            <Marker
              icon={{
                url: markerCurrent
              }}
              {...marker}
            />
            <Marker
              icon={{
                url: markerCorrect
              }}
              key={Date.now()}
              position={hanoiLatLng}
              defaultAnimation={4}
            />
          </div>
        )
      }
    )}
  </GoogleMap>
));

class MapPickerView extends React.Component {
  state = {
    markers: [],
    circleDistance: [],
    correctMarker: []
  };


  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);


  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      {
        position: event.latLng,
        defaultAnimation: 4,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      }
    ]
    const nextCorrectMarker = {
      lat: 16.4535572,
      lng: 107.5419039,
      defaultAnimation: 4,
      key: Date.now(),
    }
    const nextCircleDistance = {
      position: event.latLng,
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      defaultAnimation: 4,
      key: Date.now()
    }
    this.setState({
      markers: nextMarkers,
      circleDistance: nextCircleDistance,
      correctMarker: nextCorrectMarker
    })

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return (
      <div style={{height: `100%`}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{height: `100%`}}/>
          }
          mapElement={
            <div style={{height: `100%`}}/>
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          circleDistance={this.state.circleDistance}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    )
  }
}

export default MapPickerView
