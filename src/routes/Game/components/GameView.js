import React from 'react'
import './GameView.scss'

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

class GameView extends React.Component{

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
              </div>
            </div>

        </section>
      <div className="dashboard__main">
        <div className="home__findingMatch home__activity">
          <h2>Đang tìm trận đấu....</h2>
          <div className="match__findingIndicator meter animate">
            <span style={{width: '100%'}}><span></span></span>
          </div>
          <p>Nhận được điểm kinh nghiệm, tăng cấp độ thông qua việc chơi các trận đấu trực tuyến</p>
        </div>
        <div className="home__findingMatch home__findingMatch__step2 home__activity">
          <div className="col-md-4">
            <div className="playerMiniInfo">
              <div className="findingUserProfile">
                <img src="img/user/original.jpg" alt=""></img>
              </div>
              <ul className="userAttributes">
                <li className="userAttribute__item">
                  <p className="userAttribute__item__name">Hội</p>
                </li>
                <li className="userAttribute__item">
                  <p className="userAttribute__item__elo">Elo: 1902</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <p className="playerVS">
              VS
            </p>
          </div>
          <div className="col-md-4">
            <div className="playerMiniInfo">
              <div className="findingUserProfile">
                <img src="img/user/original.jpg" alt=""></img>
              </div>
              <ul className="userAttributes">
                <li className="userAttribute__item">
                  <p className="userAttribute__item__name">Hội</p>
                </li>
                <li className="userAttribute__item">
                  <p className="userAttribute__item__elo">Elo: 1902</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="matchingInfoProgress">
            <div className="match__findingIndicator meter animate">
              <span style={{width: '100%'}}><span></span></span>
            </div>
            <h2>Đang chuẩn bị bắt đầu</h2>
            <p>Bạn có thể chọn roll lại game nếu bạn không thích kiểu minigame trong mỗi hiệp của trận đấu này</p>
          </div>
        </div>
      </div>
        </div>
    )
  }
}
export default GameView
