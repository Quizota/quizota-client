import React, { Component } from 'react';
import Number from './number.js'
import './RunningNumberView.scss'

// var randomColor = ["#d9fe60", "#e90b92", "#653ff9", "#00a829", "#a6267b", "#74796b", "#d954e9", "#64cefc", "#982c2e"]
let temp = 0
let socket
class RunningNumber extends Component {
  constructor(props, context){
    super(props, context)

    this.renderNumber = this.renderNumber.bind(this)
    this.generateBoard = this.generateBoard.bind(this)
    this.setTimer = this.setTimer.bind(this)
    this.handleStartGame = this.handleStartGame.bind(this)  
    this.handleProcessActionSuccess = this.handleProcessActionSuccess.bind(this)  
    this.handleEndGame = this.handleEndGame.bind(this)  

    socket = this.props.socket

    this.state = {numberArray: [],
                  timer: 0,
                  counter: null,
                  gameover: null,
                  userName: null
                 }
    }

  handleStartGame(res){
    this.generateBoard(res)
  }

  handleProcessActionSuccess(res){
    this.refs['number_' + res.data.pickNumber].changeSelected()
  }

  handleEndGame(res, userName){
    clearInterval(this.state.counter)
    this.setState({gameover: res.data})
    this.setState({userName: userName})
  }

  generateBoard(res){
    var selection = []

    res.data.data.map(function(number, index){
      selection.push(number)      
    })

    this.setState({numberArray: selection})
    this.setState({timer: res.data.game.timeOut / 1000})
    this.setState({counter: setInterval(this.setTimer, 1000)})  
    // Run timer 
  }
  
  setTimer(){
      let count = this.state.timer - 1
      if(count >= 0){
          this.setState({timer: count})
      } else {
          clearInterval(this.state.counter)
      }
  }
  
  renderButton(){
      return (
      <div className="col-md-8 dashboard__main">
        <div className="home__findingMatch home__activity">
          <h2>Đang tìm trận đấu....</h2>
          <div className="match__findingIndicator meter animate">
            <span style={{width: '100%'}}><span></span></span>
          </div>
          <p>Nhận được điểm kinh nghiệm, tăng cấp độ thông qua việc chơi các trận đấu trực tuyến</p>
        </div>
      </div>
    )

  }

  renderNumber(number){
    return(
        <Number ref={"number_"+number} key={"number_"+number} number={number} socket={socket}/>
    )
  }
  
  renderWin(gameover){
    return(
        <div className="home__findingMatch home__activity gameFrame text__center">
          <h2>You win the game. You earned {gameover.bonusElo} Elos</h2>
        </div>
    )
  }

  renderLose(){
    return(
        <div className="home__findingMatch home__activity gameFrame text__center">
          <h2>You lose the game. Better luck next time.</h2>
        </div>
    )
  }

  renderGame(){
    return (
          <div className="home__findingMatch home__activity gameFrame">
            <ul className="listNumber">
              {this.state.numberArray.map(this.renderNumber)}
            </ul>
          </div>
    )
  }

  render() {
    // If End game
    if(this.state.gameover){
      
      if(this.state.gameover.winName === this.state.userName){
        return this.renderWin(this.state.gameover)
      } else {
        return this.renderLose()
      }
    
    } else {
        return this.renderGame()
    }
  }
}

export default RunningNumber;
