import React from 'react'
import {IndexLink, Link} from 'react-router'
import './GameView.scss'
import RunningNumber from '../../../components/RunningNumber/components/RunningNumberView'
import socket from '../../../SocketIO'

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

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 5};
    this.tick = this.tick.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    let self = this
    socket.setHandler(function (resData) {
      if (resData.code == "waitingStartGame") {
        console.log("waiting for game")
        self.setState = {secondsElapsed: resData.data.waitingTime/1000};
      } else if(resData.code === "startGame" && resData.data.game.type === "number_rush"){
          self.ref.RunningNumber.handleStartGame(resData)
      } else if(resData.code === "processActionSuccess"){
          self.ref.RunningNumber.handleProcessActionSuccess(resData)
      } else if(resData.code === "endGame"){
          self.ref.RunningNumber.handleEndGame(resData, "Hoi")
        
      }
    })
  }

  tick() {
    console.log(this)
    this.setState((prevState) => {
      if (prevState.secondsElapsed >= 2) {
        return ({
          secondsElapsed: prevState.secondsElapsed - 1
        })
      } else {
        console.log('Thông báo: Hoàn thành')
        clearInterval(this.interval);
        return ({
          secondsElapsed: null
        })
      }
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div>
        <section id="game">
          <div className="noise">

          </div>
          <div className="dark">

          </div>
          <div className="dashboard__main">
            <div className="home__findingMatch home__activity">
              <div id="quizota-countdown">
                <span>{this.state.secondsElapsed}</span>
              </div>
              <div className="score-overlay"></div>
              <div id="quizota-score" className="opaque">
                <div className="name-alpha" style={ nameAlphaCSS }>Hoi</div>
                <span className="score-alpha-glow score-glow">
                  </span>
                <div className="score-alpha">
                    <span style={ scoreAlphaGlowlightCSS }>
                      <i className="glow"></i>
                    </span>
                </div>
                {/*Check point*/}
                <div className="checkpoint">
                  <h4>
                    00:10
                  </h4>
                  <div className="position">
                    <span></span>
                  </div>
                </div>
                {/*vs score*/}
                <span className="score-vs-glow score-glow">
                  </span>
                <div className="score-vs">
                    <span style={ scoreVSGlowlightCSS }>
                      <i className="glow"></i>
                    </span>
                </div>
                <div className="name-vs">Phuong</div>
              </div>
              <div className="gameInner" style={{height: `100%`}}>
                <RunningNumber ref="RunningNumber" socket={socket}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default GameView
