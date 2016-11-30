import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import {connect} from 'react-redux'

class DashboardView extends React.Component {
  render() {
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
          <h3>Bắt đầu hành trình</h3>
          <h4>Lựa chọn kiểu chơi</h4>
          <div id="ranking-mode" className="show">
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
          <div id="beginner-mode" className="show">
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
