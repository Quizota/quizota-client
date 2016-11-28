import React, {Component} from 'react'
import ErrorMessage from './ErrorMessage'
import LoadingButton from './LoadingButton'

import {changeForm} from '../actions'

class Form extends Component {
    constructor(props) {
        super(props)

        this._onSubmit = this._onSubmit.bind(this)
        this._changeUsername = this._changeUsername.bind(this)
        this._changePassword = this._changePassword.bind(this)
    }

    render() {
        let {error} = this.props

        return (
            <form className='form' onSubmit={this._onSubmit}>
                {error ? <ErrorMessage error={error}/> : null}
                <input
                    type="text"
                    id='username'
                    value={this.props.data.username}
                    className='form-control'
                    placeholder='Tên của bạn'
                    autoCorrect='off'
                    autoCapitalize='off'
                    onChange={this._changeUsername}
                    autoFocus='true'/>
                <div className='form__submit-btn-wrapper'>
                    {this.props.currentlySending ? (
                        <LoadingButton />
                    ) : (
                        <button className='btn btn-qzt_brand' type='submit'>
                            {this.props.btnText}
                        </button>
                    )}
                </div>
            </form>
        )
    }

    _changeUsername(event) {
        this._emitChange({...this.props.data, username: event.target.value})
    }

    _changePassword(event) {
        this._emitChange({...this.props.data, password: event.target.value})
    }

    _emitChange(newFormState) {
        this.props.dispatch(changeForm(newFormState))
    }

    _onSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.props.data.username, this.props.data.password)
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
