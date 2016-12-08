import React from 'react'
import { connect } from 'react-redux'
import './GameResultView.scss'
import { emitData } from '../../../../../SocketIO'

class GameResultView extends React.Component {
  componentDidMount () {
    let elementWillShow = ['goToGame', 'quizota-result']
    for (var item in elementWillShow) {
      let itemClass = document.getElementById(elementWillShow[item]).classList
      itemClass.add('show')
    }
  }
  componentWillUnMount () {
    let elementWillShow = ['goToGame', 'quizota-result']
    for (var item in elementWillShow) {
      let itemClass = document.getElementById(elementWillShow[item]).classList
      itemClass.remove('show')
    }
  }
  constructor (props) {
    super(props)
    this.playNow = this.playNow.bind(this)
  }
  playNow () {
    emitData('data', { 'cmd': 'playNow', 'data': {} })

    this.context.router.push('/game')
  }
  render () {
    return (
      <div id='quizota-result' className='gold show anim'>
        <div className='border'>
          <i />
          <span className='bg' />
          <p className='score'>{this.props.gameInfo.endGameInfo.point} <span>pts</span> / {this.props.gameInfo.endGameInfo.point} <span>+ 10 Elo</span></p>
          <span className='tlb' />
          <span className='tl' />
          <span className='trb' />
          <span className='tr' />
          <span className='brb' />
          <span className='br' />
          <span className='blb' />
          <span className='bl' />
        </div>
        <div className='catch anim'>
          <div className='title-text title-text-win'>
            <div className='title-name'>Chúc mừng <span className='gamer-name'>{this.props.userInfo.profile.displayName}</span> !</div>
            <div className='comment'>Bạn đã giành chiến thắng</div>
          </div>
        </div>
        <div className='band anim'><span className='l in' /><span className='r in' /></div>
        <a id="goToGame" className="gotogame play-again" onClick={this.playNow}>
          <span className="wrapper-svg">
            <svg x="0px" y="0px" width="256px" height="54px" viewBox="181 131 256 54" enable-background="new 181 131 256 54">
            <g>
              <path className="svg_orange" id="TR" d="M430.5,134h4v4L430.5,134z"></path>
              <path className="svg_orange" id="BL" d="M188.5,182h-4v-4L188.5,182z"></path>
              <polygon className="svg_orange" id="BG" points="197.5,185 437.5,185 437.5,147 421.5,131 181.5,131 181.5,169 	"></polygon>
            </g>
            </svg>
          </span>
          <i className="icon" data-frames="19" data-columns="1" data-width="74" data-height="74" data-scale=".5"></i>
          <span className="text">Chơi tiếp</span>
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameInfo: state.gameInfo,
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResultView)

