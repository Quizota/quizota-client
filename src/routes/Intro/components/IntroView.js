import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import { IndexLink, Link } from 'react-router'
import {connect} from 'react-redux'
import './IntroView.scss'

class IntroView extends Component {
  render() {
    return (
      <seciton id="home" className="show">
        <div id="home-noise"></div>
        <div id="home-dark"></div>
        <div className="wrap-pers">
          <div className="wrap">
            <div className="logo show">
              <h1 className="show">
                Quiz Over The Air
              </h1>
              <h2 className="show">
                It's game
              </h2>
              <span className="line_vertical show">
                <span className="indent">
                </span>
              </span>
              <Link to={`auth`} className="gotogame show">
                <span className="wrap-slash-a">
                  <span className="ghost-a"></span>
                  <span className="slash-a"></span>
                </span>
                <span className="wrap-slash-b">
                  <span className="ghost-b"></span>
                  <span className="slash-b"></span>
                </span>
                <span className="wrapper-svg">
                  <svg x="0px" y="0px" width="256px" height="54px" viewBox="181 131 256 54"
                       enableBackground="new 181 131 256 54">
                    <g>
                      <path className="svg_maincolor" id="TR" d="M430.5,134h4v4L430.5,134z"></path>
                      <path className="svg_maincolor" id="BL" d="M188.5,182h-4v-4L188.5,182z"></path>
                      <polygon className="svg_maincolor" id="BG"
                               points="197.5,185 437.5,185 437.5,147 421.5,131 181.5,131 181.5,169 	"></polygon>
                    </g>
                  </svg>
                </span>
                <span className="text">Tham gia ngay</span>
              </Link>
            </div>
          </div>
        </div>
      </seciton>
    )
  }
}

function select(state) {
  return {
    data: state
  }
}
export default connect(select)(IntroView)

