import React from 'react'
import './Footer.scss'

export const Footer = () => (
  <footer id='footer'>
    <div className='wrapper-toggle-txt' />
    <div className='logo-quizota-wrapper'>
      <a href='http://quizota.com' target='_blank'>
        <span className='logo-quizota'>
          Quizota.com
        </span>
      </a>

    </div>
    <div id='main-item'>
      <a href='' className='product'>
        <span className='text'>GIỚI thiệu Quizota<sup>TM</sup></span>
        <span className='line_dark_hong' />
        <span className='bg_hong'>
          <span className='icon' />
        </span>
      </a>
      <a href='' className='product'>
        <span className='text'>Play Quizota<sup>TM</sup></span>
        <span className='line_dark_hong' />
        <span className='bg_hong'>
          <span className='icon' />
        </span>
      </a>

    </div>
    <div id='secondary-item'>
      <div className='links'>
        <a className='legals' target='_blank' href='#'>Legal notice</a>
        <a className='credits' href=''>credits</a>
      </div>
      <div id='share-item'>
        <div className='share twitter-btn'>
          <a href='' className='twitter-share share'>
            <i className='fa fa-facebook-square' aria-hidden='true' />
          </a>
          <span className='bg_red' />
          <span className='bg_dark_orange' />
          <span className='bg_orange' />
        </div>
        <div className='share twitter-btn'>
          <a href='' className='twitter-share share'>
            <i className='fa fa-twitter-square' aria-hidden='true' />
          </a>
          <span className='bg_red' />
          <span className='bg_dark_orange' />
          <span className='bg_orange' />
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
