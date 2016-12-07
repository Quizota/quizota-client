import React from 'react'
import './FindOutGameView.scss'

class FindOutGameView extends React.Component {
  render () {
    return (
      <div className='findingGame'>
        <div className='findingGameInner'>
          <div className='match__findingIndicator meter animate'>
            <span style={{ width: `100%` }}><span /></span>
          </div>
          <h2>Đã tìm thấy người chơi, Chuẩn bị bắt đầu</h2>
          <p>Bạn có thể chọn roll lại game nếu bạn không thích kiểu minigame trong mỗi hiệp của trận đấu này</p>
        </div>
      </div>
    )
  }
}

export default FindOutGameView
