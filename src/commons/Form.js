import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage'
import LoadingButton from './LoadingButton'

import { changeForm } from '../actions'

class Form extends Component {
  constructor (props) {
    super(props)

    this._onSubmit = this._onSubmit.bind(this)
    this._changeDisplayName = this._changeDisplayName.bind(this)
    this._changePassword = this._changePassword.bind(this)
  }

  render () {
    let { error } = this.props

    return (
      <form className='show' onSubmit={this._onSubmit}>
        {error ? <ErrorMessage error={error} /> : null}
        <fieldset>
          <span className='placeholder' />
          <input
            type='text'
            id='displayName'
            value={this.props.data.displayName}
            className='error'
            autoCorrect='off'
            autoCapitalize='off'
            autoComplete='off'
            placeholder='Tên của bạn'
            onChange={this._changeDisplayName}
            autoFocus='true' />

        </fieldset>
        <div className='wrap-line'>
          <span className='line error' />
        </div>
        <div className='form__submit-btn-wrapper'>
          {this.props.currentlySending ? (
            <LoadingButton />
                    ) : (
                      <button id='submit' type='submit'>
                        <span className='wrapper-svg'>
                          <svg x='0px' y='0px' width='256px'
                            height='54px' viewBox='181 131 256 54' enableBackground='new 181 131 256 54'>
                            <g>
                              <path className='svg_maincolor' id='TR' d='M430.5,134h4v4L430.5,134z' />
                              <path className='svg_maincolor' id='BL' d='M188.5,182h-4v-4L188.5,182z' />
                              <polygon className='svg_maincolor'
                                id='BG'
                                points='197.5,185 437.5,185 437.5,147 421.5,131 181.5,131 181.5,169'
                              />
                            </g>
                          </svg>

                        </span>
                        <span className='text'>{this.props.btnText}</span>

                      </button>
                    )}
        </div>
      </form>
    )
  }

  _changeDisplayName (event) {
    this._emitChange({ ...this.props.data, displayName: event.target.value })
  }

  _changePassword (event) {
    this._emitChange({ ...this.props.data, password: event.target.value })
  }

  _emitChange (newFormState) {
    this.props.dispatch(changeForm(newFormState))
  }

  _onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data.displayName, this.props.data.password)
  }
}

Form.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  changeForm: React.PropTypes.func,
  btnText: React.PropTypes.string,
  error: React.PropTypes.string,
  currentlySending: React.PropTypes.bool
}

export default Form
