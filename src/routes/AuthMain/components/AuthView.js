import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import {connect} from 'react-redux'
import Form from '../../../commons/Form'
import {registerRequest} from '../../../actions'
import './AuthView.scss'
import socket from '../../../SocketIO'

class AuthView extends Component {

    constructor(props) {
        super(props);
        this._register = this._register.bind(this)
    }
    componentDidMount() {
      socket.connectSocket('dddd')
    }
    render() {

        let {dispatch} = this.props;
        let {formState, currentlySending, error} = this.props.data.authFormReducer;
        console.log(formState);
        return (
            <div id='login'>
              <div className='noise'></div>
              <div className='dark'></div>
              <div className='wrap'>
                <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register}
                      btnText={'Bắt đầu trò chơi'} error={error} currentlySending={currentlySending}/>
                </div>
            </div>
        )
    }

    _register(username, password) {
        this.props.dispatch(registerRequest({username, password}))
    }
}

// AuthView.propTypes = {
//     data: React.PropTypes.object,
//     history: React.PropTypes.object,
//     dispatch: React.PropTypes.func
// }

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AuthView)
