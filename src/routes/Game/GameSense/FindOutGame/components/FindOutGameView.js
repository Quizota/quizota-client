import React from 'react'
import { connect } from 'react-redux'
import './FindOutGameView.scss'

let flagStyle = {
  backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAAeFBMVEXaJR3//wD0vwjdNhvgSRjfQhn2zQfqhRDzuQnfQBn//gDsjQ/41gXqhBD++QHhThfoeBLcMRvaKRzbKRz1xQftlg7cNBv//QD3zgfcLhz3zgb53QT2ygf++wD1xAj76APjXBXiVRb64gTrihD+/ADdNxr64ATpfhHcpE8oAAAAf0lEQVQYGe3BxxHDIAAEwDtQzjk55/47tMXw8EdAAdrFTvM8uElTuMkyOPFJHy5CMoSLgAxgFEfLKiGTZRXF2CAF/wiJbXlBrchhVB6ovEtYfKg8YHOmcoTFcCKniXwOMKs49m3bj6xgJi5X/NzuAkZz94IiuxkmdQOtqbFz9wWwdAV1wdQsYwAAAABJRU5ErkJggg==)`,
  backgroundColor: `#CCC`,
  backgroundSize: `auto 100%`,
  backgroundPosition: `center 0`
}
class FindOutGameView extends React.Component {
  constructor (props) {
    super(props)

  }
  componentDidMount() {
    console.log("Players:", this.props.gameInfo.players)
  }

  render() {
    return (
      <div className='findingGame'>
        <div className='findingGameInner'>
          <div className="willPlayerInfo">
            <div className="col-md-4">
              <div className="playerMiniInfo">
                <div className="findingUserProfile">
                  <img src="https://pickaface.net/gallery/avatar/anonymify51d5d764d202e.png" alt=""/>
                </div>
                <ul className="userAttributes">
                  <li className="userAttribute__item">
                    <p className="userAttribute__item__name">{this.props.gameInfo.players[0].displayName}</p>
                  </li>
                  <li className="userAttribute__item">
                    <span className="userAttribute__item__flag" style={ flagStyle }></span>
                  </li>
                  <li className="userAttribute__item">
                    <p className="userAttribute__item__elo">Elo: {this.props.gameInfo.players[0].elo}</p>
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
                  <img src="https://pickaface.net/gallery/avatar/Opi51c74ead38850.png" alt=""/>
                </div>
                <ul className="userAttributes">
                  <li className="userAttribute__item">
                    <p className="userAttribute__item__name">{this.props.gameInfo.players[1].displayName}</p>
                  </li>
                  <li className="userAttribute__item">
                    <span className="userAttribute__item__flag" style={flagStyle}></span>
                  </li>
                  <li className="userAttribute__item">
                    <p className="userAttribute__item__elo">Elo: {this.props.gameInfo.players[1].elo}</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className='match__findingIndicator meter animate'>
            <span style={{width: `100%`}}><span /></span>
          </div>
          <h2>Đã tìm thấy người chơi, Chuẩn bị bắt đầu</h2>
          <p>Bạn có thể chọn roll lại game nếu bạn không thích kiểu minigame trong mỗi hiệp của trận đấu này</p>
        </div>
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FindOutGameView)

