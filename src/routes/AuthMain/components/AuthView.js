import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'
import Form from '../../../commons/Form'
import { registerRequest } from '../../../actions'
import './AuthView.scss'

class AuthView extends Component {

  constructor (props) {
    super(props)
    this._register = this._register.bind(this)
  }
  componentDidMount () {
    let elementWillShow = ['submit']
    for (var item in elementWillShow) {
      let itemClass = document.getElementById(elementWillShow[item]).classList
      itemClass.add('show')
    }
  }
  render () {
    let { dispatch } = this.props
    let { formState, currentlySending, error } = this.props.data.auth
    console.log(formState)
    return (
      <div id='login'>
        <div className='noise' />
        <div className='dark' />
        <div className='wrap'>
          <h3>Tham gia</h3>
          <h4>Cài đặt tài khoản</h4>
          <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register}
            btnText={'Bắt đầu trò chơi'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    )
  }

  _register (username, password) {
    this.props.dispatch(registerRequest({ username, password }))
  }
}

// AuthView.propTypes = {
//     data: React.PropTypes.object,
//     history: React.PropTypes.object,
//     dispatch: React.PropTypes.func
// }

// Which props do we want to inject, given the global state?
function select (state) {
  return {
    data: state
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AuthView)
