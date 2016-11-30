import React from 'react'

class ScoreView extends React.Component {
  render() {
    return (
      <div>
        <section id="score">
          <div className="score-content">
            <div className="score-box show">
              <div className="title-text title-text-win">
                <div className="title-name">gg wp <span className="gamer-name">Hoi</span>!</div>
                <div className="comment">you have the eyes of a true gamer</div>
              </div>
              <div className="title-text title-text-loose">
                <div className="title-name">ez game <span className="gamer-name">Hoi</span>!</div>
                <div className="comment">you were afk, right?</div>
              </div>
              <div className="left">
                <div className="score-share-container">
                  <div className="score-container">
                    <div className="medal-container">
                      <div className="medal"></div>
                    </div>
                    <div className="score-wrapper">
                      <div className="text">My Score</div>
                      <div className="the-score-wrapper">
                        <div className="the-score">80530</div>
                        pts
                      </div>
                    </div>
                    <div className="share-container">
                      <span className="bg_share">
                        <i className="big-arrow arrow-a"></i>
                        <i className="big-arrow arrow-b"></i>
                        <i className="big-arrow arrow-c"></i>
                      </span>
                      <div className="text">Share my score on</div>
                      <div className="facebook">

                      </div>
                      <div className="twitter">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="rank-container">
                  <div className="wrapper-rank">
                    <div className="rank bronze">
                      <div className="rank-name">Bronze</div>
                      <div className="dot-wrapper">
                        <div className="dot-a"></div>
                        <div className="dot-b"></div>
                        <div className="dot-c"></div>
                        <div className="dot-d"></div>
                      </div>
                    </div>
                    <div className="rank silver">
                      <div className="rank-name">Silver</div>
                      <div className="dot-wrapper">
                        <div className="dot-a"></div>
                        <div className="dot-b"></div>
                        <div className="dot-c"></div>
                        <div className="dot-d"></div>
                      </div>
                    </div>
                    <div className="rank gold">
                      <div className="rank-name">Gold</div>
                      <div className="dot-wrapper">
                        <div className="dot-a"></div>
                        <div className="dot-b"></div>
                        <div className="dot-c"></div>
                        <div className="dot-d"></div>
                      </div>
                    </div>
                    <div className="rank platinium">
                      <div className="rank-name">Platinium</div>
                      <div className="dot-wrapper">
                        <div className="dot-a"></div>
                        <div className="dot-b"></div>
                        <div className="dot-c"></div>
                        <div className="dot-d"></div>
                      </div>
                    </div>
                    <div className="rank diamond">
                      <div className="rank-name">Diamond</div>
                      <div className="dot-wrapper">
                        <div className="dot-a"></div>
                        <div className="dot-b"></div>
                        <div className="dot-c"></div>
                        <div className="dot-d"></div>
                      </div>
                    </div>
                    <div className="rank-bar-wrapper">
                      <div className="rank-bar"
                           style={{transform: `translate(-69.2982%, 0%) translate3d(0px, 0px, 0px)`}}></div>
                    </div>
                    <div className="rank-bar-end"></div>
                  </div>
                </div>
                <div className="stats-learn-container">
                  <div className="stats-wrapper">
                    <div className="title">My statistics</div>
                    <div className="stats">
                      <div className="single-stat efficiency red">Efficiency <span className="percentage">30%</span>
                      </div>
                      <div className="single-stat reaction red">Reaction time <span className="percentage">0%</span>
                      </div>
                      <div className="single-stat combo red">Max combo <span className="percentage">1</span></div>
                      <div className="spider-chart">

                      </div>
                    </div>
                  </div>
                  <div className="learn-wrapper" style={{zIndex: `0`}}>
                    <div className="wrap-bg-ie">
                      <div className="ghost-blue"></div>
                      <div className="deilor-img"></div>
                    </div>
                    <div className="clip-background" style={{}}>
                      <div className="ghost-blue"></div>
                      <div className="deilor-img"></div>
                      <div className="line">
                        <div className="indent"></div>
                      </div>
                      <div className="arrow">

                      </div>
                      <svg width="200" height="200">
                        <defs>
                          <clipPath id="mask-product">
                            <rect x="10" y="20" width="319" height="300"></rect>
                          </clipPath>
                          <clipPath id="mask-product-ld">
                            <rect x="10" y="20" width="282" height="267"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text">Take the best of your eyes</div>
                    <a className="learn-more" href="#">Learn more

                    </a>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="clip-background-ticket-ie">
                  <div className="ghost-gradient"></div>
                  <div className="bg-arena"></div>
                </div>
                <div className="clip-background-ticket">
                  <div className="ghost-gradient"></div>
                  <div className="bg-arena"></div>
                  <div className="ghost-btn"></div>
                  <svg width="200" height="200">
                    <defs>
                      <clipPath id="mask-ticket">
                        <rect x="20" y="20" width="319" height="440"></rect>
                      </clipPath>
                      <clipPath id="mask-ticket-ld">
                        <rect x="20" y="20" width="282" height="394"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="result-container">
                  <div className="the-result">
                    <div className="medal"></div>
                    <div className="txt-medal txt-contest-enabled-win">
                      <div className="comment-result">
                        <div className="comment-big">Congratulations!</div>
                        You're now eligible to compete the contest
                      </div>
                      <div className="separator"></div>
                      <div className="score-comment">
                        Take your chance to <br/> <span className="blue">see Fnatic play</span>
                      </div>
                    </div>
                    <div className="txt-medal txt-contest-enabled-loose">
                      <div className="comment-result">
                        <div className="comment-big">Try again!</div>
                        you still need some more training! <br/>
                      </div>
                      <div className="separator"></div>
                      <div className="score-comment">
                        You must <span className="blue">reach a minimum score<br/> of 80 000pts to access the draw</span><br/>
                        for a chance to see Fnatic play.
                      </div>
                    </div>

                    <div className="txt-medal txt-from-mouse-win">
                      <div className="comment-result">
                        <div className="comment-big">dare challenging<br/>Rekkles in pro mode!</div>

                      </div>
                      <div className="separator"></div>
                      <div className="score-comment">
                        Click below to play against him in a visual<br/>game for a chance to <span className="blue">see Fnatic play!</span>
                      </div>
                    </div>
                    <div className="txt-medal txt-from-mouse-loose">
                      <div className="comment-result">
                        <div className="comment-big">dare challenging<br/>Rekkles in pro mode!</div>

                      </div>
                      <div className="separator"></div>
                      <div className="score-comment">
                        Click below to play against him in a visual<br/>game for a chance to <span className="blue">see Fnatic play!</span>
                      </div>
                    </div>

                    <div className="txt-medal txt-contest-disabled-win">
                      <div className="comment-result">
                        <div className="comment-big">Congratulations!</div>
                        Try again and raise your score!<br/>challenge rekkles again and let's see if<br/> you can beat him
                      </div>
                      <div className="separator"></div>
                      <div className="score-comment">
                        Next rank: <span className="next-rank">gold</span>
                      </div>
                    </div>
                    <div className="txt-medal txt-contest-disabled-loose">
                      <div className="comment-result">
                        <div className="comment-big">nice try!</div>
                        you still need some more training! <br/> challenge rekkles again and let's see if<br/> you can
                        beat him
                      </div>
                      <div className="separator"></div>
                      <div className="score-comment">
                        Next rank: <span className="next-rank">gold</span>
                      </div>
                    </div>

                    <div className="txt-medal txt-from-mouse-contest-disabled-win">
                      <div className="comment-result">
                        <div className="comment-big">dare challenging<br/>Rekkles in pro mode!</div>

                      </div>
                      <div className="separator"></div>
                      <div className="score-comment">
                        Click below to play against him in a visual game or try again and raise your score.
                      </div>
                    </div>
                    <div className="txt-medal txt-from-mouse-contest-disabled-loose">
                      <div className="comment-result">
                        <div className="comment-big">dare challenging<br/>Rekkles in pro mode!</div>

                      </div>
                      <div className="separator"></div>
                      <div className="score-comment">
                        Click below to play against him in a visual game or try again and raise your score.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="participate"><a href="#" className="participate-content">Participate

                </a>
                  <div className="tickets"></div>
                </div>
                <div className="already-participate hide"><a href="#" className="participate-content-2">You already
                  participated</a>
                  <div className="tickets"></div>
                </div>
                <div className="play-promode"><a className="play-promode-content show">Play in pro mode

                </a>
                  <div className="tickets"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
  }


  }

  export default ScoreView
