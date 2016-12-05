import React from 'react'
import { IndexLink } from 'react-router'
import './Header.scss'

export const Header = () => (
  <header id='Header'>
    <div className='container-fluid inner'>
      <div id='Branding' className='col-md-1'>
        <a href='#' />
      </div>
      <div className=' col-md-9 main-nav'>
        <ul id='Nav' className='hidden-xs hidden-sm'>
          <li>
            <IndexLink to='/' activeClassName='route--active'>
              Home
            </IndexLink>
          </li>
          <li>
            <IndexLink to='/auth' activeClassName='route--active'>
              Auth
            </IndexLink>
          </li>
          <li>
            <IndexLink to='/intro' activeClassName='route--active'>
              Q&A
            </IndexLink>
          </li>
          <li>
            <IndexLink to='/rankings' activeClassName='route--active'>
              Rankings
            </IndexLink>
          </li>
          <li>
            <IndexLink to='/dashboard' activeClassName='route--active'>
              Dashboard
            </IndexLink>
          </li>
          <li>
            <IndexLink to='/game' activeClassName='route--active'>
              Game
            </IndexLink>
          </li>
          <li>
            <IndexLink to='/setting' activeClassName='route--active'>
              Setting
            </IndexLink>
          </li>
        </ul>
      </div>
      <div className='col-md-2 icons-wrap' />
    </div>
    <div className='container-fluid bg' />
  </header>
)
export default Header
