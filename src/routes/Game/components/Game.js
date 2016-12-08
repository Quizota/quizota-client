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
  left: '-130px'
}

class GameProcessView extends React.Component {

  constructor (props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
  }

  render () {
    if (this.props.isStep === `playerJoinBoardSuccess` || this.props.isStep === `idle`) {
      return (
        <div style={{ height: `100%` }}>
          <FindingGameView />
        </div>
      )
    } else if (this.props.isStep === `waitingStartGame` || this.props.isStep === `newPlayerJoinBoard`) {
      return (
        <div style={{ height: `100%` }}>
          <FindOutGameView />
        </div>
      )
    } else if (this.props.isStep === `startGame` || this.props.isStep === `inGame`) {
      return (
        <div style={{ height: `100%` }}>
          <MapPickerView />
        </div>
      )
    } else if (this.props.isStep === `endGame`) {
      return (
        <div style={{ height: `100%` }}>
          <GameResultView />
        </div>
      )
    } else {
      return (
        <div style={{ height: `100%` }}>
          <FindingGameView />
        </div>
      )
    }
  }
}

class Game extends React.Component {
  state = {
  }
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    this.calculateScore()
  }
  calculateScore() {

  }
  render () {
    return (
      <div>
        <section id='game'>
          <div className='noise' />
          <div className='dark' />
          <div className='dashboard__main'>
            <div className='home__findingMatch home__activity'>
              <div className='score-overlay' />
              <div id='quizota-score' className='opaque'>
                <div className='name-alpha' style={nameAlphaCSS}>{this.props.gameInfo.players[0].displayName} - {this.props.gameInfo.myScore.score}</div>
                <span className='score-alpha-glow score-glow' />
                <div className='score-alpha'>
                  <span style={ this.props.gameInfo.myScorePercentage }>
                    <i className='glow' />
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
                <span className='score-vs-glow score-glow' />
                <div className='score-vs'>
                  <span style={ this.props.gameInfo.vsScorePercentage }>
                    <i className='glow' />
                  </span>
                </div>
                <div className='name-vs'>{this.props.gameInfo.players[1].displayName} - {this.props.gameInfo.vsScore.score}</div>
              </div>
              <div className='gameInner' style={{ height: `100%` }}>
                <GameProcessView isStep={this.props.gameInfo.boardStatus} />
                {/*<GameResultView />*/}
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
    gameInfo: state.gameInfo,
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)

