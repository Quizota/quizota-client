import React from 'react'
import { IndexLink, Link } from 'react-router'
import './GameView.scss'
import MapPickerView from '../GameSense/MapPicker/components/MapPickerView'
import FindingGameView from '../GameSense/FindingGame/components/FindingGameView'
import FindOutGameView from '../GameSense/FindOutGame/components/FindOutGameView'
import GameResultView from '../GameSense/GameResult/components/GameResultView'
import { store } from '../../../main'
import { connect } from 'react-redux'
import { handleSocket } from '../../../actions'


const nameAlphaCSS = {
  left: '-37px'
}
const glowLightCSS = {
  transform: 'translate(-76.5074%, 0%) matrix(1, 0, 0, 1, 0, 0)'
}

const scoreVsSpanCSS = {
  transform: 'translate(-76.5074%, 0%) matrix(1, 0, 0, 1, 0, 0)'
}
const scoreAlphaGlowlightCSS = {
  transform: 'translate(-76.3547%, 0%) matrix(1, 0, 0, 1, 0, 0)'
}
const scoreVSGlowlightCSS = {
  transform: 'translate(46.3054%, 0%) matrix(1, 0, 0, 1, 0, 0)'
}


class GameProcessView extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    if (this.props.isStep === `playerJoinBoardSuccess` || this.props.isStep === `idle`) {
      return (
        <div style={{height: `100%`}}>
          <FindingGameView />
        </div>
      )
    } else if (this.props.isStep === `waitingStartGame`  || this.props.isStep === `newPlayerJoinBoard`) {
      return (
        <div style={{ height: `100%`}}>
          <FindOutGameView />
        </div>
      )
    } else if (this.props.isStep === `startGame` || this.props.isStep === `inGame`) {
      return (
        <div style={{ height: `100%`}}>
          <MapPickerView />
        </div>
      )
    } else if (this.props.isStep === `endGame`) {
      return (
        <div style={{ height: `100%`}}>
          <GameResultView />
        </div>
      )
    } else {
      return (
        <div style={{height: `100%`}}>
          <FindingGameView />
        </div>
      )
    }
  }
}

class Game extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div>
        <section id='game'>
          <div className='noise'/>
          <div className='dark'/>
          <div className='dashboard__main'>
            <div className='home__findingMatch home__activity'>
              <div className='score-overlay'/>
              <div id='quizota-score' className='opaque'>
                <div className='name-alpha' style={nameAlphaCSS}>Hoi</div>
                <span className='score-alpha-glow score-glow'/>
                <div className='score-alpha'>
                  <span style={scoreAlphaGlowlightCSS}>
                    <i className='glow'/>
                  </span>
                </div>
                {/* Check point */}
                <div className='checkpoint'>
                  <h4>
                    00:10
                  </h4>
                  <div className='position'>
                    <span />
                  </div>
                </div>
                {/* vs score */}
                <span className='score-vs-glow score-glow'/>
                <div className='score-vs'>
                  <span style={scoreVSGlowlightCSS}>
                    <i className='glow'/>
                  </span>
                </div>
                <div className='name-vs'>Phuong</div>
              </div>
              <div className='gameInner' style={{height: `100%`}}>
                <GameProcessView isStep={this.props.gameInfo.boardStatus}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameInfo: state.gameInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)

