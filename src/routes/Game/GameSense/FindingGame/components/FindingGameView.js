import React from 'react'
import './FindingGameView.scss'

class FindingGameView extends React.Component {
  render() {
    return (
      <div className="findingGame">
        <div className="findingGameInner">
          <h2>Đang tìm trận đấu....</h2>
          <div className="match__findingIndicator meter animate">
            <span style={{width: `100%`}}><span></span></span>
          </div>
          <p>Nhận được điểm kinh nghiệm, tăng cấp độ thông qua việc chơi các trận đấu trực tuyến</p>
        </div>
      </div>
    )
  }
}

export default FindingGameView
