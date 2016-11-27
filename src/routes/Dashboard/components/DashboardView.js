import React from 'react'
import './DashboardView.scss'

class DashboardView extends React.Component {
  render() {
    return (
      <div className="col-md-8 dashboard__main">
        <div className="home__activity">
          <div className="play-action">
            <ul className="li">
              <li>
                <button className="btn btn-play btn-playnow">
                  Chơi ngay {this.props.name}
                </button>
              </li>
              <li>
                <button className="btn btn-play btn-customgame">
                  Chơi với bạn
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DashboardView
