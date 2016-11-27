import React from 'react'
import './GameView.scss'

export const GameView = () => (
  <div className="col-md-8 dashboard__main">
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
);
export default GameView
