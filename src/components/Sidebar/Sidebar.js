import React from 'react'
import './Sidebar.scss'

export const Sidebar = () => (
  <div className="col-md-4 dashboard__sidebar">
    <div className="userProfile ">
      <div className="userProfile__info ProfileHeader">
        <div className="ProfileHeader__image__container">
          <div className="ProfilePicture">
            <img src="/img/user/original.jpg" alt="" className="ProfileHeader__image u-circular" height="120"
                 width="120"></img>
          </div>
        </div>
        <div className="ProfileHeader__nameBox">
          <span className="ProfileHeader__name">Phạm Ngọc Hội</span>
          <span className="ProfileHeader__age">25</span>
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
        <div className="ProfileHeader ProfileHeader__banners">
          <div className="ProfileBanners">
            <div className="ProfileBanner">
              <div className="ProfileBanner__content">
                <div className="ProfileBanner__content__title">
                  <span>Best in Vietnam Map</span>
                </div>
                <div className="ProfileBanner__content__subtitle">
                  <span>Tại Việt Nam, Tháng 11/2016</span>
                </div>
              </div>

            </div>
            <div className="ProfileBanners__breadcrumbs"></div>
          </div>

        </div>

      </div>
      <section className="ProfileCounts u-clearfix u-antialiased">
        <div className="ProfileCounts__item">
          <div className="ProfileCounts__item__string">Games</div>
          <div className="ProfileCounts__item__value ProfileCounts__item__value--games">50</div>
        </div>
        <div className="ProfileCounts__item">
          <div className="ProfileCounts__item__string">Elo</div>
          <div className="ProfileCounts__item__value ProfileCounts__item__value--elo">1900</div>
        </div>
        <div className="ProfileCounts__item">
          <div className="ProfileCounts__item__string">Win rate</div>
          <div className="ProfileCounts__item__value ProfileCounts__item__value--winrate">60%</div>
        </div>
      </section>
      <hr className="ProfileSidebar__divider"></hr>
      <section className="ProfileSidebar__statistics">
        <h1 className="ProfileSidebar__header">Thông số</h1>
        <div className="ProfileSidebar__statistics__bar">
          <div className="GameStats u-clearfix">
            <div className="GameStats__part GameStats__part--won" style={{width: '82%'}}>
              <div className="GameStats__label">
                Thắng
              </div>
              <div className="GameStats__percentage GameStats__percentage--won u-antialiased">
                <span>82</span>
                <spa>%</spa>
              </div>
            </div>
            <div className="GameStats__part GameStats__part--drawn" style={{width: '3%'}}>
              <div className="GameStats__label GameStats__label--right">
                Hòa
              </div>
              <div className="GameStats__percentage GameStats__percentage--drawn u-antialiased">
                <span>3</span>
                <spa>%</spa>
              </div>
            </div>
            <div className="GameStats__part GameStats__part--lost" style={{width: '15%'}}>
              <div className="GameStats__label">
                Thua
              </div>
              <div className="GameStats__percentage GameStats__percentage--lost u-antialiased">
                <span>15</span>
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
          <div className="userArchives__item">
            <div className="archiveFullLink myArchives__archive">
              <div className="archiveIconLink">
                <a href="#">
<span>
<img src="/img/archive/archive_icon.jpg" alt=""></img>
</span>
                </a>
                <span className="archiveIconLabel">
Trò chơi 1
</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
)
export default Sidebar
