import React from 'react'
import './GameResultView.scss'

class GameResultView extends React.Component {
  render() {
    return (
      <div id="quizota-result" className="gold show anim">
        <div className="border">
          <i></i>
          <span className="bg"></span>
          <p className="score">128847 <span>pts</span></p>
          <span className="tlb"></span>
          <span className="tl"></span>
          <span className="trb"></span>
          <span className="tr"></span>
          <span className="brb"></span>
          <span className="br"></span>
          <span className="blb"></span>
          <span className="bl"></span>
        </div>
        <div className="catch anim">
          <div className="title-text title-text-win">
            <div className="title-name">gg wp <span className="gamer-name">Pham Ngoc Hoi</span> !</div>
            <div className="comment">you have the eyes of a true gamer</div>
          </div>
          <div className="title-text title-text-loose">
            <div className="title-name">ez game <span className="gamer-name">ALPHA</span> !</div>
            <div className="comment">you were afk, right?</div>
          </div>
        </div>
        <div className="band anim"><span className="l in"></span><span className="r in"></span></div>
      </div>
    )
  }
}

export default GameResultView
