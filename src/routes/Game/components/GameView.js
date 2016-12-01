import React from 'react'
import { IndexLink, Link } from 'react-router'
import './GameView.scss'
import MapPickerView from '../../../components/MapPicker/components/MapPickerView'

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
                <MapPickerView></MapPickerView>
              </div>
              </div>
            </div>
        </section>
      </div>
    )
  }
}
export default GameView
