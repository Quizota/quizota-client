import React from 'react'
import { connect } from 'react-redux'
import './Sidebar.scss'

class Sidebar extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.calculateStatic = this.calculateStatic.bind(this)
    this.state = {
      winRate: null,
      totalGame: null,
      loseRate: null
    }
  }
  componentDidMount () {
    this.calculateStatic()
  }
  calculateStatic () {
    var totalGame = 0,
      totalWin = 0,
      totalLose = 0,
      winRate = 0,
      loseRate = 0
    this.props.userInfo.profile.gameUnlocked.map((game) => {
      totalWin += game.win
      totalLose += game.lose
    })
    totalGame = totalWin + totalLose

    if (totalGame === 0) {
      winRate = 50
      loseRate = 50
    } else if (totalWin === 0) {
      winRate === 0
      loseRate === 100
    } else if (totalLose === 0) {
      winRate === 100
      loseRate === 0
    } else {
      winRate = (totalWin / totalLose * 100).toFixed(0)
      loseRate = 100 - winRate
    }
    this.setState({
      totalGame: totalGame,
      totalWin: totalWin,
      totalLose: totalLose,
      loseRate: loseRate,
      winRate: winRate
    })
  }
  render () {
    return (
      <div className='dashboard__sidebar'>
        <div className='userProfile '>
          <div className='userProfile__info ProfileHeader'>
            <div className='ProfileHeader__image__container'>
              <div className='ProfilePicture'>

                <img src='https://pickaface.net/gallery/avatar/unr_natofr_161208_0025_9o7a3x.png' alt='' className='ProfileHeader__image u-circular' height='120'
                  width='120' />
              </div>
            </div>
            <div className='ProfileHeader__nameBox'>
              <span className='ProfileHeader__name'>{this.props.userInfo.profile.displayName}</span>
            </div>
            <div className='ProfileHeader__title'>
              Vừa gia nhập
            </div>
            <div className='ProfileHeader__locationBox'>
              <span className='ProfileHeader__locationBox__flag u-circular'
                style={{
                  backgroundImage: 'url(/img/flag/vi.png)',
                  backgroundColor: 'rgb(204, 204, 204)',
                  backgroundSize: 'auto 100%',
                  backgroundPosition: 'center 0px'
                }} />
              <div className='ProfileHeader__locationBox__location'>
                <span>Việt Nam</span>
              </div>
            </div>
            <div className=' ProfileHeader__bio'>
              <div className='ProfileHeader__bio__content'>
                If I could sum up my life in one line I would die of embarrassment (^^^)
              </div>
            </div>
          </div>
          <section className='ProfileCounts u-clearfix u-antialiased'>
            <div className='ProfileCounts__item'>
              <div className='ProfileCounts__item__string'>Số trận</div>
              <div className='ProfileCounts__item__value ProfileCounts__item__value--games'>{ this.state.totalGame }</div>
            </div>
            <div className='ProfileCounts__item'>
              <div className='ProfileCounts__item__string'>Elo</div>
              <div className='ProfileCounts__item__value ProfileCounts__item__value--elo'>{ this.props.userInfo.profile.elo }</div>
            </div>
            <div className='ProfileCounts__item'>
              <div className='ProfileCounts__item__string'>Cấp độ</div>
              <div className='ProfileCounts__item__value ProfileCounts__item__value--winrate'>{ this.props.userInfo.profile.level }</div>
            </div>
          </section>
          <hr className='ProfileSidebar__divider' />
          <section className='ProfileSidebar__statistics'>
            <h1 className='ProfileSidebar__header'>Thông số</h1>
            <div className='ProfileSidebar__statistics__bar'>
              <div className='GameStats u-clearfix'>
                <div className='GameStats__part GameStats__part--won' style={{ width: this.state.winRate + `%` }}>
                  <div className='GameStats__label'>
                    Thắng
                  </div>
                  <div className='GameStats__percentage GameStats__percentage--won u-antialiased'>
                    <span>{ this.state.winRate }</span>
                    <spa>%</spa>
                  </div>
                </div>

                <div className='GameStats__part GameStats__part--lost' style={{ width: this.state.loseRate + `%` }}>
                  <div className='GameStats__label'>
                    Thua
                  </div>
                  <div className='GameStats__percentage GameStats__percentage--lost u-antialiased'>
                    <span>{ this.state.loseRate }</span>
                    <spa>%</spa>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className='ProfileSidebar__divider' />
          <section className='userArchives__container'>
            <h1 className='ProfileSidebar__header'>Danh hiệu gần nhất:</h1>
            <div className='ProfileSidebar__list u-clearfix'>
              <div className='ProfileSidebar__list__item'>
                <div className='ProfileSidebar__achievementIconWrapper'>
                  <span className='AchievementIcon'>
                    <img src='/img/archive/archive1.png' alt=''
                      className='ProfileSidebar__achievement__icon' />
                  </span>
                </div>
                <div className='ProfileSidebar__achievement__name'>
                  Archive 1
                </div>
              </div>
              <div className='ProfileSidebar__list__item'>
                <div className='ProfileSidebar__achievementIconWrapper'>
                  <span className='AchievementIcon'>
                    <img src='/img/archive/archive2.png' alt=''
                      className='ProfileSidebar__achievement__icon' />
                  </span>
                </div>
                <div className='ProfileSidebar__achievement__name'>
                  Archive 2
                </div>
              </div>
              <div className='ProfileSidebar__list__item'>
                <div className='ProfileSidebar__achievementIconWrapper'>
                  <span className='AchievementIcon'>
                    <img src='/img/archive/archive3.png' alt=''
                      className='ProfileSidebar__achievement__icon' />
                  </span>
                </div>
                <div className='ProfileSidebar__achievement__name'>
                  Archive 3
                </div>
              </div>
              <div className='ProfileSidebar__list__item'>
                <div className='ProfileSidebar__achievementIconWrapper'>
                  <span className='AchievementIcon'>
                    <img src='/img/archive/archive4.png' alt=''
                      className='ProfileSidebar__achievement__icon' />
                  </span>
                </div>
                <div className='ProfileSidebar__achievement__name'>
                  Archive 4
                </div>
              </div>
            </div>

          </section>
          <div className='userArchives__container userProfileBlock'>
            <div className='userArchives__items__header'>
              <h3>Trò chơi</h3>
            </div>
            <div className='userArchives__items'>
              <div className='userArchives__item'>
                <div className='archiveFullLink myArchives__archive'>
                  <div className='archiveIconLink'>
                    <a href='#'>
                      <span>
                        <img src='/img/archive/archive_icon.jpg' alt='' />
                      </span>
                    </a>
                    <span className='archiveIconLabel'>Trò chơi 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
