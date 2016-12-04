import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import DocumentTitle from 'react-document-title'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './MapPickerView.scss'
import markerCorrect from '../img/mkRight.svg'
import pickedMarker from '../img/mkPicked.svg'
import markerVs from '../img/mkVs.svg'
import CountDown from '../../CountDown'
import {store} from '../../../main'
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
      console.log("Trong func marker map:", props.correctMarker)
        let _correctPositionLatLng = {lat: props.correctMarker.lat, lng: props.correctMarker.lng}
        let currentCursor = {lat: props.circleDistance.lat, lng: props.circleDistance.lng}
        let distance = getDistanceFromLatLonInKm(_correctPositionLatLng, currentCursor)
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
                center: _correctPositionLatLng,
                radius: distance * 1000,
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
    )}
  </GoogleMap>
));

class MapPickerView extends React.Component {
  state = {
    isSended: true,
    markers: [],
    circleDistance: {},
    correctMarker: {},
    startIn: 5,
    gameStatus: 'Bắt đầu',
    needReRender: false,
    timeOut: 10,
    awnCSS: {display: `none`},
    notAwnCSS: {display: `inline`},
    questionStatus: 'long-name active'
  }
  mapStore = store.getState().mapPicker
  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  constructor(props) {
    super().props
    let selfApp = this
    socket.setHandler(function (resData) {
      if (resData.code == "syncGameData" || resData.code == "startGame") {
        console.log("Co cau hoi moi:", resData.data.data.newQuestion)
        if (resData.data.cmd == "newQuestion" ) {
          selfApp.setState({
            circleDistance: {},
            isSended: false,
            correctMarker: {},
            gameStatus: 'Có câu hỏi mới, Xóa dữ liệu cũ',
            timeOut: 10,
            awnCSS: {display: `none`},
            notAwnCSS: {display: `inline`}
          })

          let newLocationData = resData.data.data.newQuestion
          console.log('newLocationData:', newLocationData)
          let _correctMarker = {
            lat: newLocationData.latitude,
            lng: newLocationData.longitude,
            name: newLocationData.name,
            defaultAnimation: 4,
            key: Date.now()
          }
          if (resData.code == "startGame") {
            selfApp.setState({
              gameStatus: 'Bắt đầu game'
            })
          }
          selfApp.setState({
            correctMarker: _correctMarker,
          })
          console.log("State change:", selfApp.state.correctMarker)
        }
      }
      else if (resData.code == "waitingStartGame") {
        let delay = resData.data.waitingTime
        selfApp.setState({
          startIn: delay,
          gameStatus: 'Chờ bắt đầu game'
        })
      }
    })
  }

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
    if (!this.state.isSended) {
      const _pickedMarker = [{
        position: event.latLng,
        defaultAnimation: 4,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      }]

      const _circleDistance = {
        position: event.latLng,
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        defaultAnimation: 4,
        key: Date.now()
      }

      let _pickerLatLng = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      let _currentPos = {lat: this.state.correctMarker.lat, lng: this.state.correctMarker.lng}
      let _distance = getDistanceFromLatLonInKm(_pickerLatLng, _currentPos).toFixed(0)
      this.setState({
        markers: _pickedMarker,
        circleDistance: _circleDistance,
        isSended: true,
        distance: _distance,
        gameStatus: 'Gửi đáp án',
        awnCSS: {display: `inline`},
        notAwnCSS: {display: `none`},
        questionStatus: 'active showing-distance'
      })
      socket.emitData('data', {
        "cmd": "syncGameData",
        "data": {"cmd": "gameAction", "data": {"lat": event.latLng.lat(), "lng": event.latLng.lng()}}
      })
    }

  }


  render() {
    console.log(this.state)
    return (
      <div style={{height: `100%`}}>
        <div id="question" className={this.state.questionStatus}>
          <div className="question">
            <span className="question-head" style={this.state.notAwnCSS}>Bạn có biết...</span>
            <span className="question-body">{this.state.correctMarker.name}</span>
            <span className="question-foot">
              <span className="question-tail" style={this.state.notAwnCSS}>ở đâu?</span>
              <span className="distance-text" style={this.state.awnCSS}>Bạn còn cách
                <span className="distance">{this.state.distance}</span><span className="km">km</span>
              </span>
              <span className="perfect-answer" style={{display: `none`}}>Chuẩn luôn!!</span> <span
              className="times-up" style={{display: `none`}}>Hết giờ :(</span> </span></div>
        </div>
        <div className="gameStatus">
          <p>game Status is: {this.state.gameStatus}</p>
          <p>Địa điểm cần chọn hiện tại: {this.state.correctMarker.name}</p>
          <p>Khoảng cách: {this.state.distance}</p>
          <p>Da gui: {this.state.isSend}</p>
        </div>
        <div id="clock" style={{display: `block`}} className=""><span>
          10
        </span>s
        </div>
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
          correctMarker={this.state.correctMarker}
          circleDistance={this.state.circleDistance}
          isSend={this.state.isSended}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mapPicker: state.mapPickerReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const MapPickerView = connect(
  mapStateToProps,
  //mapDispatchToProps
)(MapPickerView);

export default MapPickerView
