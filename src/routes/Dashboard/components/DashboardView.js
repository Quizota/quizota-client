import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
var showClass

class DashboardView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mounted: false
    }
  }
  componentDidMount() {

    this.setState({mounted: true})
    console.log(this.state)
  }
  componentDidMount() {
    let elementWillShow = ['ranking-mode', 'beginner-mode']
    for (var item in elementWillShow) {
      let itemClass = document.getElementById(elementWillShow[item]).classList
      itemClass.add('show')
    }
  }
  componentWillUnmount() {
    let elementWillShow = ['ranking-mode', 'beginner-mode']
    for (var item in elementWillShow) {
      let itemClass = document.getElementById(elementWillShow[item]).classList
      itemClass.remove('show')
    }
  }

  render() {
  var showClassName;
  if(this.state.mounted) {
    showClassName = 'show'
  }
    return (
      <div>
      <section id="mode">
        <div className="noise">
        </div>
        <div className="dark">
        </div>
        <div className="dashboard__main">
          <div className="home__activity">
        <div className="wrap">

          <Link to="/game"> go To Game </Link>
          <h3>Bắt đầu hành trình</h3>
          <h4>Lựa chọn kiểu chơi</h4>
          <div id="ranking-mode" className={{ showClassName }}>
            <span className="bg_rankingmode">
              <i className="big-arrow arrow-a"></i>
              <i className="big-arrow arrow-b"></i>
              <i className="big-arrow arrow-c"></i>
            </span>
            <div className="right">
              <p className="text">
                Đấu xếp hạng
                <span>Đấu với người chơi ngẫu nhiên trên hệ thống</span>
              </p>
            </div>
          </div>
          <div id="beginner-mode" className={{ showClassName }}>
            <span className="bg_beginnermode">
              <i className="big-arrow arrow-a"></i>
              <i className="big-arrow arrow-b"></i>
              <i className="big-arrow arrow-c"></i>
            </span>
            <div className="right">
              <p className="text">
                Đấu tùy chọn
                <span>Đấu với bạn bè</span>
              </p>
            </div>
          </div>
        </div>
            </div></div>
      </section>
        <div className="dashboard__main">
          <div className="home__activity">

          </div>
        </div>
      </div>

    )
  }
}

function select(state) {
  return {
    data: state
  }
}

export default connect(select)(DashboardView)
