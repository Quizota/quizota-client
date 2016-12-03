import React, {Component} from 'react'
import socket from '../../SocketIO'
import './Sidebar.scss'

class Sidebar extends Component {
  constructor(props, context){
    super(props, context)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.setGameMatch = this.setGameMatch.bind(this)
    this.state = {user: null,
                  total: null,
                  winRate: null,
                  loseRate: null}


  }

  componentDidMount(){
    let self = this
    socket.setHandler(function (resData) {
      if (resData.code == "getMyInfo") {
        self.setState({user: resData.data})
        self.setGameMatch()
      } 
    })

    socket.emitData('data', { "cmd": "getMyInfo", "data": {} })
  }

  setGameMatch(){
    var total = 0,
        totalWin = 0,
        totalLose = 0,
        winRate = 0,
        loseRate = 0

    this.state.user.profile.gameUnlocked.map((game) => {
      totalWin += game.win
      totalLose += game.lose
    })

    total = totalWin + totalLose
    if(total === 0){
      winRate = 50
      loseRate = 50
    } else if (totalWin === 0){
      winRate === 0
      loseRate === 100
    } else if(totalLose === 0){
      winRate === 100
      loseRate === 0
    } else {
      winRate = (totalWin/totalLose*100).toFixed(0)
      loseRate = 100 - winRate
    }

    this.setState({total: total})
    this.setState({winRate: winRate})
    this.setState({loseRate: loseRate})
  }

  renderGame(game, index){
    if(game.active){
    return(
          <div key={"game_" + index}className="userArchives__item">
            <div className="archiveFullLink myArchives__archive">
              <div className="archiveIconLink">
                <a href="#">
                  <span>
                    <img src="/img/archive/archive_icon.jpg" alt=""></img>
                  </span>
                </a>
                <span className="archiveIconLabel">
                  {game.name}
                </span>
              </div>
            </div>
          </div>
          )
    }          
 }
  
  render(){
    if(!this.state.user){
      return (<h1>Loading...</h1>)
    }

    return(
      <div className="dashboard__sidebar">
    <div className="userProfile ">
      <div className="userProfile__info ProfileHeader">
        <div className="ProfileHeader__image__container">
          <div className="ProfilePicture">
            <img src="/img/user/original.jpg" alt="" className="ProfileHeader__image u-circular" height="120"
                 width="120"></img>
          </div>
        </div>
        <div className="ProfileHeader__nameBox">
          <span className="ProfileHeader__name">{this.state.user.profile.displayName}</span>
          <span className="ProfileHeader__age">{this.state.user.profile.age}</span>
        </div>
        <div className="ProfileHeader__title">
          Vừa gia nhập
        </div>
        <div className="ProfileHeader__locationBox">
<span className="ProfileHeader__locationBox__flag u-circular"
      style={{
        backgroundImage: 'url(/img/flag/vi.png)',
        backgroundColor: 'rgb(204, 204, 204)',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center 0px'
      }}>
</span>
          <div className="ProfileHeader__locationBox__location">
            <span>Việt Nam</span>
          </div>
        </div>
        <div className=" ProfileHeader__bio">
          <div className="ProfileHeader__bio__content">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
      <section className="ProfileCounts u-clearfix u-antialiased">
        <div className="ProfileCounts__item">
          <div className="ProfileCounts__item__string">Games</div>
          <div className="ProfileCounts__item__value ProfileCounts__item__value--games">{this.state.total}</div>
        </div>
        <div className="ProfileCounts__item">
          <div className="ProfileCounts__item__string">Elo</div>
          <div className="ProfileCounts__item__value ProfileCounts__item__value--elo">{this.state.user.profile.elo}</div>
        </div>
        <div className="ProfileCounts__item">
          <div className="ProfileCounts__item__string">Win rate</div>
          <div className="ProfileCounts__item__value ProfileCounts__item__value--winrate">{this.state.winRate}%</div>
        </div>
      </section>
      <hr className="ProfileSidebar__divider"></hr>
      <section className="ProfileSidebar__statistics">
        <h1 className="ProfileSidebar__header">Thông số</h1>
        <div className="ProfileSidebar__statistics__bar">
          <div className="GameStats u-clearfix">
            <div className="GameStats__part GameStats__part--won" style={{width: this.state.winRate+'%'}}>
              <div className="GameStats__label">
                Thắng
              </div>
              <div className="GameStats__percentage GameStats__percentage--won u-antialiased">
                <span>{this.state.winRate}</span>
                <spa>%</spa>
              </div>
            </div>
            <div className="GameStats__part GameStats__part--drawn" style={{width: '0%'}}>
              <div className="GameStats__label GameStats__label--right">
                Hòa
              </div>
              <div className="GameStats__percentage GameStats__percentage--drawn u-antialiased">
                <span>0</span>
                <spa>%</spa>
              </div>
            </div>
            <div className="GameStats__part GameStats__part--lost" style={{width: this.state.loseRate+'%'}}>
              <div className="GameStats__label">
                Thua
              </div>
              <div className="GameStats__percentage GameStats__percentage--lost u-antialiased">
                <span>{this.state.loseRate}</span>
                <spa>%</spa>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="ProfileSidebar__divider"></hr>
      <section className="userArchives__container">
        <h1 className="ProfileSidebar__header">Danh hiệu gần nhất:</h1>
        <div className="ProfileSidebar__list u-clearfix">
          <div className="ProfileSidebar__list__item">
            <div className="ProfileSidebar__achievementIconWrapper">
<span className="AchievementIcon">
<img src="/img/archive/archive1.png" alt=""
     className="ProfileSidebar__achievement__icon"></img>
</span>
            </div>
            <div className="ProfileSidebar__achievement__name">
              Archive 1
            </div>
          </div>
          <div className="ProfileSidebar__list__item">
            <div className="ProfileSidebar__achievementIconWrapper">
<span className="AchievementIcon">
<img src="/img/archive/archive2.png" alt=""
     className="ProfileSidebar__achievement__icon"></img>
</span>
            </div>
            <div className="ProfileSidebar__achievement__name">
              Archive 2
            </div>
          </div>
          <div className="ProfileSidebar__list__item">
            <div className="ProfileSidebar__achievementIconWrapper">
<span className="AchievementIcon">
<img src="/img/archive/archive3.png" alt=""
     className="ProfileSidebar__achievement__icon"></img>
</span>
            </div>
            <div className="ProfileSidebar__achievement__name">
              Archive 3
            </div>
          </div>
          <div className="ProfileSidebar__list__item">
            <div className="ProfileSidebar__achievementIconWrapper">
<span className="AchievementIcon">
<img src="/img/archive/archive4.png" alt=""
     className="ProfileSidebar__achievement__icon"></img>
</span>
            </div>
            <div className="ProfileSidebar__achievement__name">
              Archive 4
            </div>
          </div>
        </div>

      </section>
      <div className="userArchives__container userProfileBlock">
        <div className="userArchives__items__header">
          <h3>Trò chơi</h3>
        </div>
        <div className="userArchives__items">
          {this.state.user.gameList.map((game,index) => this.renderGame(game, index))}
        </div>
      </div>

    </div>
  </div>
    )
  }
}
  

export default Sidebar
