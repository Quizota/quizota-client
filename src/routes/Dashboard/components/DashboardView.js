import React, { Component } from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import socket from '../../../SocketIO'

var showClass

class DashboardView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mounted: false
    }
    socket.setHandler(function (resData) {
      if (resData.code == 'notFoundParticipant') {
        console.log("Can't join game")
        return
      } else if (resData.code == 'playerJoinBoardSuccess') {
        browserHistory.push(`/game`)
        console.log('Tìm được người chơi, chuẩn bị bắt đầu')
        if (resData.data.length > 0) {
          console.log('other user data:', resData.data)
        } else {
          console.log('waiting for other user')
        }
      } else if (resData.code == 'newPlayerJoinBoard') {
        console.log('other user data:', resData)
      }
    })
  }

  playNow () {
    console.log('go play now')
    socket.emitData('data', { 'cmd': 'playNow', 'data': {} })
  }
  componentDidMount () {
    this.setState({ mounted: true })
    console.log(this.state)
  }
  componentDidMount () {
    let elementWillShow = ['ranking-mode', 'beginner-mode']
    for (var item in elementWillShow) {
      let itemClass = document.getElementById(elementWillShow[item]).classList
      itemClass.add('show')
    }
  }

  componentWillUnmount () {
    let elementWillShow = ['ranking-mode', 'beginner-mode']
    for (var item in elementWillShow) {
      let itemClass = document.getElementById(elementWillShow[item]).classList
      itemClass.remove('show')
    }
  }

  render () {
    var showClassName
    if (this.state.mounted) {
      showClassName = 'show'
    }
    return (
      <div>
        <section id='mode'>
          <div className='noise' />
          <div className='dark' />
          <div className='dashboard__main'>
            <div className='home__activity'>
              <div className='wrap'>
                <h3>Bắt đầu hành trình</h3>
                <h4>Lựa chọn kiểu chơi</h4>
                <div id='ranking-mode' className={{ showClassName }} onClick={this.playNow}>
                  <span className='bg_rankingmode'>
                    <i className='big-arrow arrow-a' />
                    <i className='big-arrow arrow-b' />
                    <i className='big-arrow arrow-c' />
                  </span>
                  <div className='right'>
                    <p className='text'>
                Đấu xếp hạng
                <span>Đấu với người chơi ngẫu nhiên trên hệ thống</span>
                    </p>
                  </div>
                </div>
                <div id='beginner-mode' className={{ showClassName }}>
                  <span className='bg_beginnermode'>
                    <i className='big-arrow arrow-a' />
                    <i className='big-arrow arrow-b' />
                    <i className='big-arrow arrow-c' />
                  </span>
                  <div className='right'>
                    <p className='text'>
                Đấu tùy chọn
                <span>Đấu với bạn bè (Comming soon!!!)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div></div>
        </section>
        <div className='dashboard__main'>
          <div className='home__activity' />
        </div>
      </div>

    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(DashboardView)
