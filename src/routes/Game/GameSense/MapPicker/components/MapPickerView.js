import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import './MapPickerView.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import markerCorrect from '../img/mkRight.svg'
import pickedMarker from '../img/mkPicked.svg'
import markerVs from '../img/mkVs.svg'
import { store } from '../../../../../main'
import { handleMapClick } from '../../../../../actions'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from 'react-google-maps'
import fancyMapStyles from './fancyMapStyles.json'
import socket from '../../../../../SocketIO'

import _ from 'lodash'

const BaseGameMap = withGoogleMap(props => (

  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={6}
    defaultCenter={{ lat: 16.4535572, lng: 107.5419039 }}
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
      let _correctPositionLatLng = { lat: props.correctMarker.lat, lng: props.correctMarker.lng }
      let currentCursor = { lat: props.circleDistance.lat, lng: props.circleDistance.lng }
      let distance = props.distance
      let cleanMap = props.cleanMap
      if (cleanMap) {
        return (
          <div />
        )
      } else {
        return (
          <div>
            <Circle
              options={{
                strokeColor: '#ff5454',
                strokeOpacity: 0.4,
                strokeWeight: 3,
                fillColor: '#ff5454',
                fillOpacity: 0.1,
                clickable: false,
                center: _correctPositionLatLng,
                radius: distance * 1000
              }}
              key={Math.random().toString(36).substring(7)}
              />
            <Marker
              icon={{
                url: pickedMarker
              }}
              {...marker}
              />
            <Marker
              icon={{
                url: markerCorrect
              }}
              position={_correctPositionLatLng}
              lat={_correctPositionLatLng.lat}
              lng={_correctPositionLatLng.lng}
              key={Math.random().toString(36).substring(7)}
              />
          </div>
        )
      }
    }
    )}
  </GoogleMap>
))

class MapPickerView extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={{ height: `100%` }}>
        <div id='question' className={this.props.mapPicker.questionStatusClass}>
          <div className='question'>
            <span className='question-head' style={this.props.mapPicker.notAwnCSS}>Bạn có biết...</span>
            <span className='question-body'>{this.props.mapPicker.correctMarker.name}</span>
            <span className='question-foot'>
              <span className='question-tail' style={this.props.mapPicker.notAwnCSS}>ở đâu?</span>
              <span className='distance-text' style={this.props.mapPicker.awnCSS}>Bạn còn cách
                <span className='distance'>{this.props.mapPicker.distance}</span><span className='km'>km</span>
              </span>
              <span className='perfect-answer' style={{ display: `none` }}>Chuẩn luôn!!</span>
              <span className='times-up' style={{ display: `none` }}>Hết giờ :(</span>
            </span>
          </div>
        </div>
        <div id='clock' style={this.props.mapPicker.clockCSS}><span>
          10
        </span>s
        </div>
        <BaseGameMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.props.handleMapClick}
          markers={this.props.mapPicker.markers}
          correctMarker={this.props.mapPicker.correctMarker}
          circleDistance={this.props.mapPicker.circleDistance}
          isSend={this.props.mapPicker.isSended}
          distance={this.props.mapPicker.distance}
          cleanMap={this.props.mapPicker.cleanMap}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mapPicker: state.mapPicker
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMapClick: (event) => {
      dispatch(handleMapClick(event))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPickerView)
